# `dataAwsServicequotasServiceQuota` Submodule <a name="`dataAwsServicequotasServiceQuota` Submodule" id="@cdktf/aws-cdk.dataAwsServicequotasServiceQuota"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsServicequotasServiceQuota <a name="DataAwsServicequotasServiceQuota" id="@cdktf/aws-cdk.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/servicequotas_service_quota aws_servicequotas_service_quota}.

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.Initializer"></a>

```typescript
import { dataAwsServicequotasServiceQuota } from '@cdktf/aws-cdk'

new dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota(scope: Construct, id: string, config: DataAwsServicequotasServiceQuotaConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/aws-cdk.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuotaConfig">DataAwsServicequotasServiceQuotaConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/aws-cdk.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/aws-cdk.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuotaConfig">DataAwsServicequotasServiceQuotaConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.resetQuotaCode">resetQuotaCode</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.resetQuotaName">resetQuotaName</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/aws-cdk.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/aws-cdk.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/aws-cdk.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/aws-cdk.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/aws-cdk.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/aws-cdk.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/aws-cdk.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/aws-cdk.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/aws-cdk.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.resetId"></a>

```typescript
public resetId(): void
```

##### `resetQuotaCode` <a name="resetQuotaCode" id="@cdktf/aws-cdk.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.resetQuotaCode"></a>

```typescript
public resetQuotaCode(): void
```

##### `resetQuotaName` <a name="resetQuotaName" id="@cdktf/aws-cdk.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.resetQuotaName"></a>

```typescript
public resetQuotaName(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataAwsServicequotasServiceQuota resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/aws-cdk.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.isConstruct"></a>

```typescript
import { dataAwsServicequotasServiceQuota } from '@cdktf/aws-cdk'

dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/aws-cdk.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.isTerraformElement"></a>

```typescript
import { dataAwsServicequotasServiceQuota } from '@cdktf/aws-cdk'

dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/aws-cdk.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.isTerraformDataSource"></a>

```typescript
import { dataAwsServicequotasServiceQuota } from '@cdktf/aws-cdk'

dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/aws-cdk.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.generateConfigForImport"></a>

```typescript
import { dataAwsServicequotasServiceQuota } from '@cdktf/aws-cdk'

dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataAwsServicequotasServiceQuota resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/aws-cdk.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsServicequotasServiceQuota to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/aws-cdk.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsServicequotasServiceQuota that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/servicequotas_service_quota#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsServicequotasServiceQuota to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.property.adjustable">adjustable</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.property.defaultValue">defaultValue</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.property.globalQuota">globalQuota</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.property.serviceName">serviceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.property.value">value</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.property.quotaCodeInput">quotaCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.property.quotaNameInput">quotaNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.property.serviceCodeInput">serviceCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.property.quotaCode">quotaCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.property.quotaName">quotaName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.property.serviceCode">serviceCode</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/aws-cdk.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/aws-cdk.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/aws-cdk.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/aws-cdk.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/aws-cdk.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/aws-cdk.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `adjustable`<sup>Required</sup> <a name="adjustable" id="@cdktf/aws-cdk.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.property.adjustable"></a>

```typescript
public readonly adjustable: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/aws-cdk.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `defaultValue`<sup>Required</sup> <a name="defaultValue" id="@cdktf/aws-cdk.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.property.defaultValue"></a>

```typescript
public readonly defaultValue: number;
```

- *Type:* number

---

##### `globalQuota`<sup>Required</sup> <a name="globalQuota" id="@cdktf/aws-cdk.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.property.globalQuota"></a>

```typescript
public readonly globalQuota: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `serviceName`<sup>Required</sup> <a name="serviceName" id="@cdktf/aws-cdk.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.property.serviceName"></a>

```typescript
public readonly serviceName: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.property.value"></a>

```typescript
public readonly value: number;
```

- *Type:* number

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/aws-cdk.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `quotaCodeInput`<sup>Optional</sup> <a name="quotaCodeInput" id="@cdktf/aws-cdk.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.property.quotaCodeInput"></a>

```typescript
public readonly quotaCodeInput: string;
```

- *Type:* string

---

##### `quotaNameInput`<sup>Optional</sup> <a name="quotaNameInput" id="@cdktf/aws-cdk.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.property.quotaNameInput"></a>

```typescript
public readonly quotaNameInput: string;
```

- *Type:* string

---

##### `serviceCodeInput`<sup>Optional</sup> <a name="serviceCodeInput" id="@cdktf/aws-cdk.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.property.serviceCodeInput"></a>

```typescript
public readonly serviceCodeInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `quotaCode`<sup>Required</sup> <a name="quotaCode" id="@cdktf/aws-cdk.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.property.quotaCode"></a>

```typescript
public readonly quotaCode: string;
```

- *Type:* string

---

##### `quotaName`<sup>Required</sup> <a name="quotaName" id="@cdktf/aws-cdk.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.property.quotaName"></a>

```typescript
public readonly quotaName: string;
```

- *Type:* string

---

##### `serviceCode`<sup>Required</sup> <a name="serviceCode" id="@cdktf/aws-cdk.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.property.serviceCode"></a>

```typescript
public readonly serviceCode: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/aws-cdk.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuota.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsServicequotasServiceQuotaConfig <a name="DataAwsServicequotasServiceQuotaConfig" id="@cdktf/aws-cdk.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuotaConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuotaConfig.Initializer"></a>

```typescript
import { dataAwsServicequotasServiceQuota } from '@cdktf/aws-cdk'

const dataAwsServicequotasServiceQuotaConfig: dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuotaConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuotaConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuotaConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuotaConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuotaConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuotaConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuotaConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuotaConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuotaConfig.property.serviceCode">serviceCode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/servicequotas_service_quota#service_code DataAwsServicequotasServiceQuota#service_code}. |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuotaConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/servicequotas_service_quota#id DataAwsServicequotasServiceQuota#id}. |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuotaConfig.property.quotaCode">quotaCode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/servicequotas_service_quota#quota_code DataAwsServicequotasServiceQuota#quota_code}. |
| <code><a href="#@cdktf/aws-cdk.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuotaConfig.property.quotaName">quotaName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/servicequotas_service_quota#quota_name DataAwsServicequotasServiceQuota#quota_name}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuotaConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuotaConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuotaConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuotaConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuotaConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuotaConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuotaConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `serviceCode`<sup>Required</sup> <a name="serviceCode" id="@cdktf/aws-cdk.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuotaConfig.property.serviceCode"></a>

```typescript
public readonly serviceCode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/servicequotas_service_quota#service_code DataAwsServicequotasServiceQuota#service_code}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/aws-cdk.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuotaConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/servicequotas_service_quota#id DataAwsServicequotasServiceQuota#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `quotaCode`<sup>Optional</sup> <a name="quotaCode" id="@cdktf/aws-cdk.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuotaConfig.property.quotaCode"></a>

```typescript
public readonly quotaCode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/servicequotas_service_quota#quota_code DataAwsServicequotasServiceQuota#quota_code}.

---

##### `quotaName`<sup>Optional</sup> <a name="quotaName" id="@cdktf/aws-cdk.dataAwsServicequotasServiceQuota.DataAwsServicequotasServiceQuotaConfig.property.quotaName"></a>

```typescript
public readonly quotaName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/servicequotas_service_quota#quota_name DataAwsServicequotasServiceQuota#quota_name}.

---



