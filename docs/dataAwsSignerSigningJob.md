# `dataAwsSignerSigningJob` Submodule <a name="`dataAwsSignerSigningJob` Submodule" id="@cdktf/aws-cdk.dataAwsSignerSigningJob"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsSignerSigningJob <a name="DataAwsSignerSigningJob" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJob"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/signer_signing_job aws_signer_signing_job}.

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJob.Initializer"></a>

```typescript
import { dataAwsSignerSigningJob } from '@cdktf/aws-cdk'

new dataAwsSignerSigningJob.DataAwsSignerSigningJob(scope: Construct, id: string, config: DataAwsSignerSigningJobConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJob.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJob.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJob.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobConfig">DataAwsSignerSigningJobConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJob.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJob.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJob.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobConfig">DataAwsSignerSigningJobConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJob.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJob.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJob.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJob.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJob.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJob.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJob.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJob.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJob.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJob.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJob.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJob.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJob.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJob.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJob.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJob.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJob.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJob.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJob.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJob.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJob.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJob.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJob.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJob.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJob.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJob.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJob.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJob.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJob.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJob.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJob.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJob.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJob.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJob.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJob.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJob.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJob.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJob.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJob.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJob.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJob.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJob.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJob.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJob.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJob.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJob.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJob.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJob.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJob.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJob.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJob.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJob.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJob.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataAwsSignerSigningJob resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJob.isConstruct"></a>

```typescript
import { dataAwsSignerSigningJob } from '@cdktf/aws-cdk'

dataAwsSignerSigningJob.DataAwsSignerSigningJob.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJob.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJob.isTerraformElement"></a>

```typescript
import { dataAwsSignerSigningJob } from '@cdktf/aws-cdk'

dataAwsSignerSigningJob.DataAwsSignerSigningJob.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJob.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJob.isTerraformDataSource"></a>

```typescript
import { dataAwsSignerSigningJob } from '@cdktf/aws-cdk'

dataAwsSignerSigningJob.DataAwsSignerSigningJob.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJob.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJob.generateConfigForImport"></a>

```typescript
import { dataAwsSignerSigningJob } from '@cdktf/aws-cdk'

dataAwsSignerSigningJob.DataAwsSignerSigningJob.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataAwsSignerSigningJob resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJob.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJob.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsSignerSigningJob to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJob.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsSignerSigningJob that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/signer_signing_job#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJob.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsSignerSigningJob to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJob.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJob.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJob.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJob.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJob.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJob.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJob.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJob.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJob.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJob.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJob.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJob.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJob.property.completedAt">completedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJob.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJob.property.jobInvoker">jobInvoker</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJob.property.jobOwner">jobOwner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJob.property.platformDisplayName">platformDisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJob.property.platformId">platformId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJob.property.profileName">profileName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJob.property.profileVersion">profileVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJob.property.requestedBy">requestedBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJob.property.revocationRecord">revocationRecord</a></code> | <code><a href="#@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobRevocationRecordList">DataAwsSignerSigningJobRevocationRecordList</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJob.property.signatureExpiresAt">signatureExpiresAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJob.property.signedObject">signedObject</a></code> | <code><a href="#@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectList">DataAwsSignerSigningJobSignedObjectList</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJob.property.source">source</a></code> | <code><a href="#@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceList">DataAwsSignerSigningJobSourceList</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJob.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJob.property.statusReason">statusReason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJob.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJob.property.jobIdInput">jobIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJob.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJob.property.jobId">jobId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJob.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJob.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJob.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJob.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJob.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJob.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJob.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJob.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJob.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJob.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJob.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJob.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `completedAt`<sup>Required</sup> <a name="completedAt" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJob.property.completedAt"></a>

```typescript
public readonly completedAt: string;
```

- *Type:* string

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJob.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `jobInvoker`<sup>Required</sup> <a name="jobInvoker" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJob.property.jobInvoker"></a>

```typescript
public readonly jobInvoker: string;
```

- *Type:* string

---

##### `jobOwner`<sup>Required</sup> <a name="jobOwner" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJob.property.jobOwner"></a>

```typescript
public readonly jobOwner: string;
```

- *Type:* string

---

##### `platformDisplayName`<sup>Required</sup> <a name="platformDisplayName" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJob.property.platformDisplayName"></a>

```typescript
public readonly platformDisplayName: string;
```

- *Type:* string

---

##### `platformId`<sup>Required</sup> <a name="platformId" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJob.property.platformId"></a>

```typescript
public readonly platformId: string;
```

- *Type:* string

---

##### `profileName`<sup>Required</sup> <a name="profileName" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJob.property.profileName"></a>

```typescript
public readonly profileName: string;
```

- *Type:* string

---

##### `profileVersion`<sup>Required</sup> <a name="profileVersion" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJob.property.profileVersion"></a>

```typescript
public readonly profileVersion: string;
```

- *Type:* string

---

##### `requestedBy`<sup>Required</sup> <a name="requestedBy" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJob.property.requestedBy"></a>

```typescript
public readonly requestedBy: string;
```

- *Type:* string

---

##### `revocationRecord`<sup>Required</sup> <a name="revocationRecord" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJob.property.revocationRecord"></a>

```typescript
public readonly revocationRecord: DataAwsSignerSigningJobRevocationRecordList;
```

- *Type:* <a href="#@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobRevocationRecordList">DataAwsSignerSigningJobRevocationRecordList</a>

---

##### `signatureExpiresAt`<sup>Required</sup> <a name="signatureExpiresAt" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJob.property.signatureExpiresAt"></a>

```typescript
public readonly signatureExpiresAt: string;
```

- *Type:* string

---

##### `signedObject`<sup>Required</sup> <a name="signedObject" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJob.property.signedObject"></a>

```typescript
public readonly signedObject: DataAwsSignerSigningJobSignedObjectList;
```

- *Type:* <a href="#@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectList">DataAwsSignerSigningJobSignedObjectList</a>

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJob.property.source"></a>

```typescript
public readonly source: DataAwsSignerSigningJobSourceList;
```

- *Type:* <a href="#@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceList">DataAwsSignerSigningJobSourceList</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJob.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `statusReason`<sup>Required</sup> <a name="statusReason" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJob.property.statusReason"></a>

```typescript
public readonly statusReason: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJob.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `jobIdInput`<sup>Optional</sup> <a name="jobIdInput" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJob.property.jobIdInput"></a>

```typescript
public readonly jobIdInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJob.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `jobId`<sup>Required</sup> <a name="jobId" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJob.property.jobId"></a>

```typescript
public readonly jobId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJob.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJob.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsSignerSigningJobConfig <a name="DataAwsSignerSigningJobConfig" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobConfig.Initializer"></a>

```typescript
import { dataAwsSignerSigningJob } from '@cdktf/aws-cdk'

const dataAwsSignerSigningJobConfig: dataAwsSignerSigningJob.DataAwsSignerSigningJobConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobConfig.property.jobId">jobId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/signer_signing_job#job_id DataAwsSignerSigningJob#job_id}. |
| <code><a href="#@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/signer_signing_job#id DataAwsSignerSigningJob#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `jobId`<sup>Required</sup> <a name="jobId" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobConfig.property.jobId"></a>

```typescript
public readonly jobId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/signer_signing_job#job_id DataAwsSignerSigningJob#job_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/signer_signing_job#id DataAwsSignerSigningJob#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsSignerSigningJobRevocationRecord <a name="DataAwsSignerSigningJobRevocationRecord" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobRevocationRecord"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobRevocationRecord.Initializer"></a>

```typescript
import { dataAwsSignerSigningJob } from '@cdktf/aws-cdk'

const dataAwsSignerSigningJobRevocationRecord: dataAwsSignerSigningJob.DataAwsSignerSigningJobRevocationRecord = { ... }
```


### DataAwsSignerSigningJobSignedObject <a name="DataAwsSignerSigningJobSignedObject" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObject"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObject.Initializer"></a>

```typescript
import { dataAwsSignerSigningJob } from '@cdktf/aws-cdk'

const dataAwsSignerSigningJobSignedObject: dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObject = { ... }
```


### DataAwsSignerSigningJobSignedObjectS3 <a name="DataAwsSignerSigningJobSignedObjectS3" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectS3"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectS3.Initializer"></a>

```typescript
import { dataAwsSignerSigningJob } from '@cdktf/aws-cdk'

const dataAwsSignerSigningJobSignedObjectS3: dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectS3 = { ... }
```


### DataAwsSignerSigningJobSource <a name="DataAwsSignerSigningJobSource" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSource.Initializer"></a>

```typescript
import { dataAwsSignerSigningJob } from '@cdktf/aws-cdk'

const dataAwsSignerSigningJobSource: dataAwsSignerSigningJob.DataAwsSignerSigningJobSource = { ... }
```


### DataAwsSignerSigningJobSourceS3 <a name="DataAwsSignerSigningJobSourceS3" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceS3"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceS3.Initializer"></a>

```typescript
import { dataAwsSignerSigningJob } from '@cdktf/aws-cdk'

const dataAwsSignerSigningJobSourceS3: dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceS3 = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsSignerSigningJobRevocationRecordList <a name="DataAwsSignerSigningJobRevocationRecordList" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobRevocationRecordList"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobRevocationRecordList.Initializer"></a>

```typescript
import { dataAwsSignerSigningJob } from '@cdktf/aws-cdk'

new dataAwsSignerSigningJob.DataAwsSignerSigningJobRevocationRecordList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobRevocationRecordList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobRevocationRecordList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobRevocationRecordList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobRevocationRecordList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobRevocationRecordList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobRevocationRecordList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobRevocationRecordList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobRevocationRecordList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobRevocationRecordList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobRevocationRecordList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobRevocationRecordList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobRevocationRecordList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobRevocationRecordList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobRevocationRecordList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobRevocationRecordList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobRevocationRecordList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobRevocationRecordList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobRevocationRecordList.get"></a>

```typescript
public get(index: number): DataAwsSignerSigningJobRevocationRecordOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobRevocationRecordList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobRevocationRecordList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobRevocationRecordList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobRevocationRecordList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobRevocationRecordList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsSignerSigningJobRevocationRecordOutputReference <a name="DataAwsSignerSigningJobRevocationRecordOutputReference" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobRevocationRecordOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobRevocationRecordOutputReference.Initializer"></a>

```typescript
import { dataAwsSignerSigningJob } from '@cdktf/aws-cdk'

new dataAwsSignerSigningJob.DataAwsSignerSigningJobRevocationRecordOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobRevocationRecordOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobRevocationRecordOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobRevocationRecordOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobRevocationRecordOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobRevocationRecordOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobRevocationRecordOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobRevocationRecordOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobRevocationRecordOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobRevocationRecordOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobRevocationRecordOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobRevocationRecordOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobRevocationRecordOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobRevocationRecordOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobRevocationRecordOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobRevocationRecordOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobRevocationRecordOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobRevocationRecordOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobRevocationRecordOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobRevocationRecordOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobRevocationRecordOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobRevocationRecordOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobRevocationRecordOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobRevocationRecordOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobRevocationRecordOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobRevocationRecordOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobRevocationRecordOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobRevocationRecordOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobRevocationRecordOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobRevocationRecordOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobRevocationRecordOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobRevocationRecordOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobRevocationRecordOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobRevocationRecordOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobRevocationRecordOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobRevocationRecordOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobRevocationRecordOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobRevocationRecordOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobRevocationRecordOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobRevocationRecordOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobRevocationRecordOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobRevocationRecordOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobRevocationRecordOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobRevocationRecordOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobRevocationRecordOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobRevocationRecordOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobRevocationRecordOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobRevocationRecordOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobRevocationRecordOutputReference.property.reason">reason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobRevocationRecordOutputReference.property.revokedAt">revokedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobRevocationRecordOutputReference.property.revokedBy">revokedBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobRevocationRecordOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobRevocationRecord">DataAwsSignerSigningJobRevocationRecord</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobRevocationRecordOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobRevocationRecordOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `reason`<sup>Required</sup> <a name="reason" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobRevocationRecordOutputReference.property.reason"></a>

```typescript
public readonly reason: string;
```

- *Type:* string

---

##### `revokedAt`<sup>Required</sup> <a name="revokedAt" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobRevocationRecordOutputReference.property.revokedAt"></a>

```typescript
public readonly revokedAt: string;
```

- *Type:* string

---

##### `revokedBy`<sup>Required</sup> <a name="revokedBy" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobRevocationRecordOutputReference.property.revokedBy"></a>

```typescript
public readonly revokedBy: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobRevocationRecordOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsSignerSigningJobRevocationRecord;
```

- *Type:* <a href="#@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobRevocationRecord">DataAwsSignerSigningJobRevocationRecord</a>

---


### DataAwsSignerSigningJobSignedObjectList <a name="DataAwsSignerSigningJobSignedObjectList" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectList"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectList.Initializer"></a>

```typescript
import { dataAwsSignerSigningJob } from '@cdktf/aws-cdk'

new dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectList.get"></a>

```typescript
public get(index: number): DataAwsSignerSigningJobSignedObjectOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsSignerSigningJobSignedObjectOutputReference <a name="DataAwsSignerSigningJobSignedObjectOutputReference" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectOutputReference.Initializer"></a>

```typescript
import { dataAwsSignerSigningJob } from '@cdktf/aws-cdk'

new dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectOutputReference.property.s3">s3</a></code> | <code><a href="#@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectS3List">DataAwsSignerSigningJobSignedObjectS3List</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObject">DataAwsSignerSigningJobSignedObject</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `s3`<sup>Required</sup> <a name="s3" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectOutputReference.property.s3"></a>

```typescript
public readonly s3: DataAwsSignerSigningJobSignedObjectS3List;
```

- *Type:* <a href="#@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectS3List">DataAwsSignerSigningJobSignedObjectS3List</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsSignerSigningJobSignedObject;
```

- *Type:* <a href="#@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObject">DataAwsSignerSigningJobSignedObject</a>

---


### DataAwsSignerSigningJobSignedObjectS3List <a name="DataAwsSignerSigningJobSignedObjectS3List" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectS3List"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectS3List.Initializer"></a>

```typescript
import { dataAwsSignerSigningJob } from '@cdktf/aws-cdk'

new dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectS3List(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectS3List.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectS3List.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectS3List.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectS3List.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectS3List.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectS3List.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectS3List.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectS3List.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectS3List.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectS3List.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectS3List.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectS3List.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectS3List.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectS3List.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectS3List.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectS3List.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectS3List.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectS3List.get"></a>

```typescript
public get(index: number): DataAwsSignerSigningJobSignedObjectS3OutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectS3List.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectS3List.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectS3List.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectS3List.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectS3List.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsSignerSigningJobSignedObjectS3OutputReference <a name="DataAwsSignerSigningJobSignedObjectS3OutputReference" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectS3OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectS3OutputReference.Initializer"></a>

```typescript
import { dataAwsSignerSigningJob } from '@cdktf/aws-cdk'

new dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectS3OutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectS3OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectS3OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectS3OutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectS3OutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectS3OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectS3OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectS3OutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectS3OutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectS3OutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectS3OutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectS3OutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectS3OutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectS3OutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectS3OutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectS3OutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectS3OutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectS3OutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectS3OutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectS3OutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectS3OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectS3OutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectS3OutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectS3OutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectS3OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectS3OutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectS3OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectS3OutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectS3OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectS3OutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectS3OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectS3OutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectS3OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectS3OutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectS3OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectS3OutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectS3OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectS3OutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectS3OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectS3OutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectS3OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectS3OutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectS3OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectS3OutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectS3OutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectS3OutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectS3OutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectS3OutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectS3OutputReference.property.bucket">bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectS3OutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectS3OutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectS3">DataAwsSignerSigningJobSignedObjectS3</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectS3OutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectS3OutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectS3OutputReference.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectS3OutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectS3OutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsSignerSigningJobSignedObjectS3;
```

- *Type:* <a href="#@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSignedObjectS3">DataAwsSignerSigningJobSignedObjectS3</a>

---


### DataAwsSignerSigningJobSourceList <a name="DataAwsSignerSigningJobSourceList" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceList.Initializer"></a>

```typescript
import { dataAwsSignerSigningJob } from '@cdktf/aws-cdk'

new dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceList.get"></a>

```typescript
public get(index: number): DataAwsSignerSigningJobSourceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsSignerSigningJobSourceOutputReference <a name="DataAwsSignerSigningJobSourceOutputReference" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceOutputReference.Initializer"></a>

```typescript
import { dataAwsSignerSigningJob } from '@cdktf/aws-cdk'

new dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceOutputReference.property.s3">s3</a></code> | <code><a href="#@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceS3List">DataAwsSignerSigningJobSourceS3List</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSource">DataAwsSignerSigningJobSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `s3`<sup>Required</sup> <a name="s3" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceOutputReference.property.s3"></a>

```typescript
public readonly s3: DataAwsSignerSigningJobSourceS3List;
```

- *Type:* <a href="#@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceS3List">DataAwsSignerSigningJobSourceS3List</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsSignerSigningJobSource;
```

- *Type:* <a href="#@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSource">DataAwsSignerSigningJobSource</a>

---


### DataAwsSignerSigningJobSourceS3List <a name="DataAwsSignerSigningJobSourceS3List" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceS3List"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceS3List.Initializer"></a>

```typescript
import { dataAwsSignerSigningJob } from '@cdktf/aws-cdk'

new dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceS3List(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceS3List.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceS3List.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceS3List.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceS3List.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceS3List.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceS3List.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceS3List.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceS3List.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceS3List.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceS3List.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceS3List.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceS3List.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceS3List.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceS3List.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceS3List.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceS3List.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceS3List.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceS3List.get"></a>

```typescript
public get(index: number): DataAwsSignerSigningJobSourceS3OutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceS3List.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceS3List.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceS3List.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceS3List.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceS3List.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsSignerSigningJobSourceS3OutputReference <a name="DataAwsSignerSigningJobSourceS3OutputReference" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceS3OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceS3OutputReference.Initializer"></a>

```typescript
import { dataAwsSignerSigningJob } from '@cdktf/aws-cdk'

new dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceS3OutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceS3OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceS3OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceS3OutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceS3OutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceS3OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceS3OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceS3OutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceS3OutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceS3OutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceS3OutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceS3OutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceS3OutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceS3OutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceS3OutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceS3OutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceS3OutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceS3OutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceS3OutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceS3OutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceS3OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceS3OutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceS3OutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceS3OutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceS3OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceS3OutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceS3OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceS3OutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceS3OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceS3OutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceS3OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceS3OutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceS3OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceS3OutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceS3OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceS3OutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceS3OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceS3OutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceS3OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceS3OutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceS3OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceS3OutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceS3OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceS3OutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceS3OutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceS3OutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceS3OutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceS3OutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceS3OutputReference.property.bucket">bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceS3OutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceS3OutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceS3OutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceS3">DataAwsSignerSigningJobSourceS3</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceS3OutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceS3OutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceS3OutputReference.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceS3OutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceS3OutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceS3OutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsSignerSigningJobSourceS3;
```

- *Type:* <a href="#@cdktf/aws-cdk.dataAwsSignerSigningJob.DataAwsSignerSigningJobSourceS3">DataAwsSignerSigningJobSourceS3</a>

---



