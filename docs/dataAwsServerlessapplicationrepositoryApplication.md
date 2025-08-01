# `dataAwsServerlessapplicationrepositoryApplication` Submodule <a name="`dataAwsServerlessapplicationrepositoryApplication` Submodule" id="@cdktf/aws-cdk.dataAwsServerlessapplicationrepositoryApplication"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsServerlessapplicationrepositoryApplication <a name="DataAwsServerlessapplicationrepositoryApplication" id="@cdktf/aws-cdk.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/serverlessapplicationrepository_application aws_serverlessapplicationrepository_application}.

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.Initializer"></a>

```typescript
import { dataAwsServerlessapplicationrepositoryApplication } from '@cdktf/aws-cdk'

new dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication(scope: Construct, id: string, config: DataAwsServerlessapplicationrepositoryApplicationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/aws-cdk.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/aws-cdk.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/aws-cdk.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplicationConfig">DataAwsServerlessapplicationrepositoryApplicationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/aws-cdk.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/aws-cdk.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplicationConfig">DataAwsServerlessapplicationrepositoryApplicationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/aws-cdk.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/aws-cdk.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/aws-cdk.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/aws-cdk.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/aws-cdk.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.resetSemanticVersion">resetSemanticVersion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/aws-cdk.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/aws-cdk.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/aws-cdk.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/aws-cdk.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/aws-cdk.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/aws-cdk.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/aws-cdk.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/aws-cdk.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/aws-cdk.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.resetId"></a>

```typescript
public resetId(): void
```

##### `resetSemanticVersion` <a name="resetSemanticVersion" id="@cdktf/aws-cdk.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.resetSemanticVersion"></a>

```typescript
public resetSemanticVersion(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/aws-cdk.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataAwsServerlessapplicationrepositoryApplication resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/aws-cdk.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.isConstruct"></a>

```typescript
import { dataAwsServerlessapplicationrepositoryApplication } from '@cdktf/aws-cdk'

dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/aws-cdk.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.isTerraformElement"></a>

```typescript
import { dataAwsServerlessapplicationrepositoryApplication } from '@cdktf/aws-cdk'

dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/aws-cdk.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.isTerraformDataSource"></a>

```typescript
import { dataAwsServerlessapplicationrepositoryApplication } from '@cdktf/aws-cdk'

dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/aws-cdk.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.generateConfigForImport"></a>

```typescript
import { dataAwsServerlessapplicationrepositoryApplication } from '@cdktf/aws-cdk'

dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataAwsServerlessapplicationrepositoryApplication resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/aws-cdk.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsServerlessapplicationrepositoryApplication to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/aws-cdk.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsServerlessapplicationrepositoryApplication that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/serverlessapplicationrepository_application#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsServerlessapplicationrepositoryApplication to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/aws-cdk.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.property.requiredCapabilities">requiredCapabilities</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.property.sourceCodeUrl">sourceCodeUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.property.templateUrl">templateUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.property.applicationIdInput">applicationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.property.semanticVersionInput">semanticVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.property.applicationId">applicationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.property.semanticVersion">semanticVersion</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/aws-cdk.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/aws-cdk.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/aws-cdk.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/aws-cdk.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/aws-cdk.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/aws-cdk.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/aws-cdk.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `requiredCapabilities`<sup>Required</sup> <a name="requiredCapabilities" id="@cdktf/aws-cdk.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.property.requiredCapabilities"></a>

```typescript
public readonly requiredCapabilities: string[];
```

- *Type:* string[]

---

##### `sourceCodeUrl`<sup>Required</sup> <a name="sourceCodeUrl" id="@cdktf/aws-cdk.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.property.sourceCodeUrl"></a>

```typescript
public readonly sourceCodeUrl: string;
```

- *Type:* string

---

##### `templateUrl`<sup>Required</sup> <a name="templateUrl" id="@cdktf/aws-cdk.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.property.templateUrl"></a>

```typescript
public readonly templateUrl: string;
```

- *Type:* string

---

##### `applicationIdInput`<sup>Optional</sup> <a name="applicationIdInput" id="@cdktf/aws-cdk.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.property.applicationIdInput"></a>

```typescript
public readonly applicationIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/aws-cdk.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `semanticVersionInput`<sup>Optional</sup> <a name="semanticVersionInput" id="@cdktf/aws-cdk.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.property.semanticVersionInput"></a>

```typescript
public readonly semanticVersionInput: string;
```

- *Type:* string

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdktf/aws-cdk.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.property.applicationId"></a>

```typescript
public readonly applicationId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `semanticVersion`<sup>Required</sup> <a name="semanticVersion" id="@cdktf/aws-cdk.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.property.semanticVersion"></a>

```typescript
public readonly semanticVersion: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/aws-cdk.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplication.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsServerlessapplicationrepositoryApplicationConfig <a name="DataAwsServerlessapplicationrepositoryApplicationConfig" id="@cdktf/aws-cdk.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplicationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplicationConfig.Initializer"></a>

```typescript
import { dataAwsServerlessapplicationrepositoryApplication } from '@cdktf/aws-cdk'

const dataAwsServerlessapplicationrepositoryApplicationConfig: dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplicationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplicationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplicationConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplicationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplicationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplicationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplicationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplicationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplicationConfig.property.applicationId">applicationId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/serverlessapplicationrepository_application#application_id DataAwsServerlessapplicationrepositoryApplication#application_id}. |
| <code><a href="#@cdktf/aws-cdk.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplicationConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/serverlessapplicationrepository_application#id DataAwsServerlessapplicationrepositoryApplication#id}. |
| <code><a href="#@cdktf/aws-cdk.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplicationConfig.property.semanticVersion">semanticVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/serverlessapplicationrepository_application#semantic_version DataAwsServerlessapplicationrepositoryApplication#semantic_version}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplicationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplicationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplicationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplicationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplicationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplicationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplicationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdktf/aws-cdk.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplicationConfig.property.applicationId"></a>

```typescript
public readonly applicationId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/serverlessapplicationrepository_application#application_id DataAwsServerlessapplicationrepositoryApplication#application_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/aws-cdk.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplicationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/serverlessapplicationrepository_application#id DataAwsServerlessapplicationrepositoryApplication#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `semanticVersion`<sup>Optional</sup> <a name="semanticVersion" id="@cdktf/aws-cdk.dataAwsServerlessapplicationrepositoryApplication.DataAwsServerlessapplicationrepositoryApplicationConfig.property.semanticVersion"></a>

```typescript
public readonly semanticVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/serverlessapplicationrepository_application#semantic_version DataAwsServerlessapplicationrepositoryApplication#semantic_version}.

---



