# `lambdaLayerVersion` Submodule <a name="`lambdaLayerVersion` Submodule" id="@cdktf/aws-cdk.lambdaLayerVersion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LambdaLayerVersion <a name="LambdaLayerVersion" id="@cdktf/aws-cdk.lambdaLayerVersion.LambdaLayerVersion"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lambda_layer_version aws_lambda_layer_version}.

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.lambdaLayerVersion.LambdaLayerVersion.Initializer"></a>

```typescript
import { lambdaLayerVersion } from '@cdktf/aws-cdk'

new lambdaLayerVersion.LambdaLayerVersion(scope: Construct, id: string, config: LambdaLayerVersionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.lambdaLayerVersion.LambdaLayerVersion.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/aws-cdk.lambdaLayerVersion.LambdaLayerVersion.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/aws-cdk.lambdaLayerVersion.LambdaLayerVersion.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/aws-cdk.lambdaLayerVersion.LambdaLayerVersionConfig">LambdaLayerVersionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.lambdaLayerVersion.LambdaLayerVersion.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.lambdaLayerVersion.LambdaLayerVersion.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/aws-cdk.lambdaLayerVersion.LambdaLayerVersion.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/aws-cdk.lambdaLayerVersion.LambdaLayerVersionConfig">LambdaLayerVersionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.lambdaLayerVersion.LambdaLayerVersion.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/aws-cdk.lambdaLayerVersion.LambdaLayerVersion.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lambdaLayerVersion.LambdaLayerVersion.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/aws-cdk.lambdaLayerVersion.LambdaLayerVersion.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/aws-cdk.lambdaLayerVersion.LambdaLayerVersion.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lambdaLayerVersion.LambdaLayerVersion.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lambdaLayerVersion.LambdaLayerVersion.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/aws-cdk.lambdaLayerVersion.LambdaLayerVersion.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/aws-cdk.lambdaLayerVersion.LambdaLayerVersion.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lambdaLayerVersion.LambdaLayerVersion.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lambdaLayerVersion.LambdaLayerVersion.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lambdaLayerVersion.LambdaLayerVersion.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lambdaLayerVersion.LambdaLayerVersion.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lambdaLayerVersion.LambdaLayerVersion.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lambdaLayerVersion.LambdaLayerVersion.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lambdaLayerVersion.LambdaLayerVersion.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lambdaLayerVersion.LambdaLayerVersion.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lambdaLayerVersion.LambdaLayerVersion.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lambdaLayerVersion.LambdaLayerVersion.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lambdaLayerVersion.LambdaLayerVersion.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lambdaLayerVersion.LambdaLayerVersion.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/aws-cdk.lambdaLayerVersion.LambdaLayerVersion.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/aws-cdk.lambdaLayerVersion.LambdaLayerVersion.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/aws-cdk.lambdaLayerVersion.LambdaLayerVersion.resetCompatibleArchitectures">resetCompatibleArchitectures</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lambdaLayerVersion.LambdaLayerVersion.resetCompatibleRuntimes">resetCompatibleRuntimes</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lambdaLayerVersion.LambdaLayerVersion.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lambdaLayerVersion.LambdaLayerVersion.resetFilename">resetFilename</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lambdaLayerVersion.LambdaLayerVersion.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lambdaLayerVersion.LambdaLayerVersion.resetLicenseInfo">resetLicenseInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lambdaLayerVersion.LambdaLayerVersion.resetS3Bucket">resetS3Bucket</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lambdaLayerVersion.LambdaLayerVersion.resetS3Key">resetS3Key</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lambdaLayerVersion.LambdaLayerVersion.resetS3ObjectVersion">resetS3ObjectVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lambdaLayerVersion.LambdaLayerVersion.resetSkipDestroy">resetSkipDestroy</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lambdaLayerVersion.LambdaLayerVersion.resetSourceCodeHash">resetSourceCodeHash</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.lambdaLayerVersion.LambdaLayerVersion.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/aws-cdk.lambdaLayerVersion.LambdaLayerVersion.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/aws-cdk.lambdaLayerVersion.LambdaLayerVersion.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.lambdaLayerVersion.LambdaLayerVersion.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/aws-cdk.lambdaLayerVersion.LambdaLayerVersion.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/aws-cdk.lambdaLayerVersion.LambdaLayerVersion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/aws-cdk.lambdaLayerVersion.LambdaLayerVersion.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/aws-cdk.lambdaLayerVersion.LambdaLayerVersion.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/aws-cdk.lambdaLayerVersion.LambdaLayerVersion.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/aws-cdk.lambdaLayerVersion.LambdaLayerVersion.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/aws-cdk.lambdaLayerVersion.LambdaLayerVersion.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/aws-cdk.lambdaLayerVersion.LambdaLayerVersion.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.lambdaLayerVersion.LambdaLayerVersion.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lambdaLayerVersion.LambdaLayerVersion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.lambdaLayerVersion.LambdaLayerVersion.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lambdaLayerVersion.LambdaLayerVersion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.lambdaLayerVersion.LambdaLayerVersion.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lambdaLayerVersion.LambdaLayerVersion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.lambdaLayerVersion.LambdaLayerVersion.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lambdaLayerVersion.LambdaLayerVersion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.lambdaLayerVersion.LambdaLayerVersion.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lambdaLayerVersion.LambdaLayerVersion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.lambdaLayerVersion.LambdaLayerVersion.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lambdaLayerVersion.LambdaLayerVersion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.lambdaLayerVersion.LambdaLayerVersion.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lambdaLayerVersion.LambdaLayerVersion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.lambdaLayerVersion.LambdaLayerVersion.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lambdaLayerVersion.LambdaLayerVersion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.lambdaLayerVersion.LambdaLayerVersion.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lambdaLayerVersion.LambdaLayerVersion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/aws-cdk.lambdaLayerVersion.LambdaLayerVersion.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/aws-cdk.lambdaLayerVersion.LambdaLayerVersion.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.lambdaLayerVersion.LambdaLayerVersion.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.lambdaLayerVersion.LambdaLayerVersion.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.lambdaLayerVersion.LambdaLayerVersion.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lambdaLayerVersion.LambdaLayerVersion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/aws-cdk.lambdaLayerVersion.LambdaLayerVersion.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.lambdaLayerVersion.LambdaLayerVersion.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/aws-cdk.lambdaLayerVersion.LambdaLayerVersion.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/aws-cdk.lambdaLayerVersion.LambdaLayerVersion.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/aws-cdk.lambdaLayerVersion.LambdaLayerVersion.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/aws-cdk.lambdaLayerVersion.LambdaLayerVersion.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.lambdaLayerVersion.LambdaLayerVersion.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetCompatibleArchitectures` <a name="resetCompatibleArchitectures" id="@cdktf/aws-cdk.lambdaLayerVersion.LambdaLayerVersion.resetCompatibleArchitectures"></a>

```typescript
public resetCompatibleArchitectures(): void
```

##### `resetCompatibleRuntimes` <a name="resetCompatibleRuntimes" id="@cdktf/aws-cdk.lambdaLayerVersion.LambdaLayerVersion.resetCompatibleRuntimes"></a>

```typescript
public resetCompatibleRuntimes(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/aws-cdk.lambdaLayerVersion.LambdaLayerVersion.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetFilename` <a name="resetFilename" id="@cdktf/aws-cdk.lambdaLayerVersion.LambdaLayerVersion.resetFilename"></a>

```typescript
public resetFilename(): void
```

##### `resetId` <a name="resetId" id="@cdktf/aws-cdk.lambdaLayerVersion.LambdaLayerVersion.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLicenseInfo` <a name="resetLicenseInfo" id="@cdktf/aws-cdk.lambdaLayerVersion.LambdaLayerVersion.resetLicenseInfo"></a>

```typescript
public resetLicenseInfo(): void
```

##### `resetS3Bucket` <a name="resetS3Bucket" id="@cdktf/aws-cdk.lambdaLayerVersion.LambdaLayerVersion.resetS3Bucket"></a>

```typescript
public resetS3Bucket(): void
```

##### `resetS3Key` <a name="resetS3Key" id="@cdktf/aws-cdk.lambdaLayerVersion.LambdaLayerVersion.resetS3Key"></a>

```typescript
public resetS3Key(): void
```

##### `resetS3ObjectVersion` <a name="resetS3ObjectVersion" id="@cdktf/aws-cdk.lambdaLayerVersion.LambdaLayerVersion.resetS3ObjectVersion"></a>

```typescript
public resetS3ObjectVersion(): void
```

##### `resetSkipDestroy` <a name="resetSkipDestroy" id="@cdktf/aws-cdk.lambdaLayerVersion.LambdaLayerVersion.resetSkipDestroy"></a>

```typescript
public resetSkipDestroy(): void
```

##### `resetSourceCodeHash` <a name="resetSourceCodeHash" id="@cdktf/aws-cdk.lambdaLayerVersion.LambdaLayerVersion.resetSourceCodeHash"></a>

```typescript
public resetSourceCodeHash(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.lambdaLayerVersion.LambdaLayerVersion.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/aws-cdk.lambdaLayerVersion.LambdaLayerVersion.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lambdaLayerVersion.LambdaLayerVersion.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lambdaLayerVersion.LambdaLayerVersion.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a LambdaLayerVersion resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/aws-cdk.lambdaLayerVersion.LambdaLayerVersion.isConstruct"></a>

```typescript
import { lambdaLayerVersion } from '@cdktf/aws-cdk'

lambdaLayerVersion.LambdaLayerVersion.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.lambdaLayerVersion.LambdaLayerVersion.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/aws-cdk.lambdaLayerVersion.LambdaLayerVersion.isTerraformElement"></a>

```typescript
import { lambdaLayerVersion } from '@cdktf/aws-cdk'

lambdaLayerVersion.LambdaLayerVersion.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.lambdaLayerVersion.LambdaLayerVersion.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/aws-cdk.lambdaLayerVersion.LambdaLayerVersion.isTerraformResource"></a>

```typescript
import { lambdaLayerVersion } from '@cdktf/aws-cdk'

lambdaLayerVersion.LambdaLayerVersion.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.lambdaLayerVersion.LambdaLayerVersion.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/aws-cdk.lambdaLayerVersion.LambdaLayerVersion.generateConfigForImport"></a>

```typescript
import { lambdaLayerVersion } from '@cdktf/aws-cdk'

lambdaLayerVersion.LambdaLayerVersion.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a LambdaLayerVersion resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.lambdaLayerVersion.LambdaLayerVersion.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/aws-cdk.lambdaLayerVersion.LambdaLayerVersion.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the LambdaLayerVersion to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/aws-cdk.lambdaLayerVersion.LambdaLayerVersion.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing LambdaLayerVersion that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lambda_layer_version#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.lambdaLayerVersion.LambdaLayerVersion.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the LambdaLayerVersion to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.lambdaLayerVersion.LambdaLayerVersion.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/aws-cdk.lambdaLayerVersion.LambdaLayerVersion.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lambdaLayerVersion.LambdaLayerVersion.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lambdaLayerVersion.LambdaLayerVersion.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lambdaLayerVersion.LambdaLayerVersion.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lambdaLayerVersion.LambdaLayerVersion.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lambdaLayerVersion.LambdaLayerVersion.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lambdaLayerVersion.LambdaLayerVersion.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lambdaLayerVersion.LambdaLayerVersion.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lambdaLayerVersion.LambdaLayerVersion.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lambdaLayerVersion.LambdaLayerVersion.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lambdaLayerVersion.LambdaLayerVersion.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lambdaLayerVersion.LambdaLayerVersion.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lambdaLayerVersion.LambdaLayerVersion.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lambdaLayerVersion.LambdaLayerVersion.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lambdaLayerVersion.LambdaLayerVersion.property.createdDate">createdDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lambdaLayerVersion.LambdaLayerVersion.property.layerArn">layerArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lambdaLayerVersion.LambdaLayerVersion.property.signingJobArn">signingJobArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lambdaLayerVersion.LambdaLayerVersion.property.signingProfileVersionArn">signingProfileVersionArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lambdaLayerVersion.LambdaLayerVersion.property.sourceCodeSize">sourceCodeSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lambdaLayerVersion.LambdaLayerVersion.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lambdaLayerVersion.LambdaLayerVersion.property.compatibleArchitecturesInput">compatibleArchitecturesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lambdaLayerVersion.LambdaLayerVersion.property.compatibleRuntimesInput">compatibleRuntimesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lambdaLayerVersion.LambdaLayerVersion.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lambdaLayerVersion.LambdaLayerVersion.property.filenameInput">filenameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lambdaLayerVersion.LambdaLayerVersion.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lambdaLayerVersion.LambdaLayerVersion.property.layerNameInput">layerNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lambdaLayerVersion.LambdaLayerVersion.property.licenseInfoInput">licenseInfoInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lambdaLayerVersion.LambdaLayerVersion.property.s3BucketInput">s3BucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lambdaLayerVersion.LambdaLayerVersion.property.s3KeyInput">s3KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lambdaLayerVersion.LambdaLayerVersion.property.s3ObjectVersionInput">s3ObjectVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lambdaLayerVersion.LambdaLayerVersion.property.skipDestroyInput">skipDestroyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lambdaLayerVersion.LambdaLayerVersion.property.sourceCodeHashInput">sourceCodeHashInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lambdaLayerVersion.LambdaLayerVersion.property.compatibleArchitectures">compatibleArchitectures</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lambdaLayerVersion.LambdaLayerVersion.property.compatibleRuntimes">compatibleRuntimes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lambdaLayerVersion.LambdaLayerVersion.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lambdaLayerVersion.LambdaLayerVersion.property.filename">filename</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lambdaLayerVersion.LambdaLayerVersion.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lambdaLayerVersion.LambdaLayerVersion.property.layerName">layerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lambdaLayerVersion.LambdaLayerVersion.property.licenseInfo">licenseInfo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lambdaLayerVersion.LambdaLayerVersion.property.s3Bucket">s3Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lambdaLayerVersion.LambdaLayerVersion.property.s3Key">s3Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lambdaLayerVersion.LambdaLayerVersion.property.s3ObjectVersion">s3ObjectVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lambdaLayerVersion.LambdaLayerVersion.property.skipDestroy">skipDestroy</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lambdaLayerVersion.LambdaLayerVersion.property.sourceCodeHash">sourceCodeHash</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/aws-cdk.lambdaLayerVersion.LambdaLayerVersion.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/aws-cdk.lambdaLayerVersion.LambdaLayerVersion.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.lambdaLayerVersion.LambdaLayerVersion.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/aws-cdk.lambdaLayerVersion.LambdaLayerVersion.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/aws-cdk.lambdaLayerVersion.LambdaLayerVersion.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/aws-cdk.lambdaLayerVersion.LambdaLayerVersion.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/aws-cdk.lambdaLayerVersion.LambdaLayerVersion.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.lambdaLayerVersion.LambdaLayerVersion.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.lambdaLayerVersion.LambdaLayerVersion.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.lambdaLayerVersion.LambdaLayerVersion.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.lambdaLayerVersion.LambdaLayerVersion.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.lambdaLayerVersion.LambdaLayerVersion.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.lambdaLayerVersion.LambdaLayerVersion.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.lambdaLayerVersion.LambdaLayerVersion.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/aws-cdk.lambdaLayerVersion.LambdaLayerVersion.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `createdDate`<sup>Required</sup> <a name="createdDate" id="@cdktf/aws-cdk.lambdaLayerVersion.LambdaLayerVersion.property.createdDate"></a>

```typescript
public readonly createdDate: string;
```

- *Type:* string

---

##### `layerArn`<sup>Required</sup> <a name="layerArn" id="@cdktf/aws-cdk.lambdaLayerVersion.LambdaLayerVersion.property.layerArn"></a>

```typescript
public readonly layerArn: string;
```

- *Type:* string

---

##### `signingJobArn`<sup>Required</sup> <a name="signingJobArn" id="@cdktf/aws-cdk.lambdaLayerVersion.LambdaLayerVersion.property.signingJobArn"></a>

```typescript
public readonly signingJobArn: string;
```

- *Type:* string

---

##### `signingProfileVersionArn`<sup>Required</sup> <a name="signingProfileVersionArn" id="@cdktf/aws-cdk.lambdaLayerVersion.LambdaLayerVersion.property.signingProfileVersionArn"></a>

```typescript
public readonly signingProfileVersionArn: string;
```

- *Type:* string

---

##### `sourceCodeSize`<sup>Required</sup> <a name="sourceCodeSize" id="@cdktf/aws-cdk.lambdaLayerVersion.LambdaLayerVersion.property.sourceCodeSize"></a>

```typescript
public readonly sourceCodeSize: number;
```

- *Type:* number

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/aws-cdk.lambdaLayerVersion.LambdaLayerVersion.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `compatibleArchitecturesInput`<sup>Optional</sup> <a name="compatibleArchitecturesInput" id="@cdktf/aws-cdk.lambdaLayerVersion.LambdaLayerVersion.property.compatibleArchitecturesInput"></a>

```typescript
public readonly compatibleArchitecturesInput: string[];
```

- *Type:* string[]

---

##### `compatibleRuntimesInput`<sup>Optional</sup> <a name="compatibleRuntimesInput" id="@cdktf/aws-cdk.lambdaLayerVersion.LambdaLayerVersion.property.compatibleRuntimesInput"></a>

```typescript
public readonly compatibleRuntimesInput: string[];
```

- *Type:* string[]

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/aws-cdk.lambdaLayerVersion.LambdaLayerVersion.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `filenameInput`<sup>Optional</sup> <a name="filenameInput" id="@cdktf/aws-cdk.lambdaLayerVersion.LambdaLayerVersion.property.filenameInput"></a>

```typescript
public readonly filenameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/aws-cdk.lambdaLayerVersion.LambdaLayerVersion.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `layerNameInput`<sup>Optional</sup> <a name="layerNameInput" id="@cdktf/aws-cdk.lambdaLayerVersion.LambdaLayerVersion.property.layerNameInput"></a>

```typescript
public readonly layerNameInput: string;
```

- *Type:* string

---

##### `licenseInfoInput`<sup>Optional</sup> <a name="licenseInfoInput" id="@cdktf/aws-cdk.lambdaLayerVersion.LambdaLayerVersion.property.licenseInfoInput"></a>

```typescript
public readonly licenseInfoInput: string;
```

- *Type:* string

---

##### `s3BucketInput`<sup>Optional</sup> <a name="s3BucketInput" id="@cdktf/aws-cdk.lambdaLayerVersion.LambdaLayerVersion.property.s3BucketInput"></a>

```typescript
public readonly s3BucketInput: string;
```

- *Type:* string

---

##### `s3KeyInput`<sup>Optional</sup> <a name="s3KeyInput" id="@cdktf/aws-cdk.lambdaLayerVersion.LambdaLayerVersion.property.s3KeyInput"></a>

```typescript
public readonly s3KeyInput: string;
```

- *Type:* string

---

##### `s3ObjectVersionInput`<sup>Optional</sup> <a name="s3ObjectVersionInput" id="@cdktf/aws-cdk.lambdaLayerVersion.LambdaLayerVersion.property.s3ObjectVersionInput"></a>

```typescript
public readonly s3ObjectVersionInput: string;
```

- *Type:* string

---

##### `skipDestroyInput`<sup>Optional</sup> <a name="skipDestroyInput" id="@cdktf/aws-cdk.lambdaLayerVersion.LambdaLayerVersion.property.skipDestroyInput"></a>

```typescript
public readonly skipDestroyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `sourceCodeHashInput`<sup>Optional</sup> <a name="sourceCodeHashInput" id="@cdktf/aws-cdk.lambdaLayerVersion.LambdaLayerVersion.property.sourceCodeHashInput"></a>

```typescript
public readonly sourceCodeHashInput: string;
```

- *Type:* string

---

##### `compatibleArchitectures`<sup>Required</sup> <a name="compatibleArchitectures" id="@cdktf/aws-cdk.lambdaLayerVersion.LambdaLayerVersion.property.compatibleArchitectures"></a>

```typescript
public readonly compatibleArchitectures: string[];
```

- *Type:* string[]

---

##### `compatibleRuntimes`<sup>Required</sup> <a name="compatibleRuntimes" id="@cdktf/aws-cdk.lambdaLayerVersion.LambdaLayerVersion.property.compatibleRuntimes"></a>

```typescript
public readonly compatibleRuntimes: string[];
```

- *Type:* string[]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/aws-cdk.lambdaLayerVersion.LambdaLayerVersion.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `filename`<sup>Required</sup> <a name="filename" id="@cdktf/aws-cdk.lambdaLayerVersion.LambdaLayerVersion.property.filename"></a>

```typescript
public readonly filename: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.lambdaLayerVersion.LambdaLayerVersion.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `layerName`<sup>Required</sup> <a name="layerName" id="@cdktf/aws-cdk.lambdaLayerVersion.LambdaLayerVersion.property.layerName"></a>

```typescript
public readonly layerName: string;
```

- *Type:* string

---

##### `licenseInfo`<sup>Required</sup> <a name="licenseInfo" id="@cdktf/aws-cdk.lambdaLayerVersion.LambdaLayerVersion.property.licenseInfo"></a>

```typescript
public readonly licenseInfo: string;
```

- *Type:* string

---

##### `s3Bucket`<sup>Required</sup> <a name="s3Bucket" id="@cdktf/aws-cdk.lambdaLayerVersion.LambdaLayerVersion.property.s3Bucket"></a>

```typescript
public readonly s3Bucket: string;
```

- *Type:* string

---

##### `s3Key`<sup>Required</sup> <a name="s3Key" id="@cdktf/aws-cdk.lambdaLayerVersion.LambdaLayerVersion.property.s3Key"></a>

```typescript
public readonly s3Key: string;
```

- *Type:* string

---

##### `s3ObjectVersion`<sup>Required</sup> <a name="s3ObjectVersion" id="@cdktf/aws-cdk.lambdaLayerVersion.LambdaLayerVersion.property.s3ObjectVersion"></a>

```typescript
public readonly s3ObjectVersion: string;
```

- *Type:* string

---

##### `skipDestroy`<sup>Required</sup> <a name="skipDestroy" id="@cdktf/aws-cdk.lambdaLayerVersion.LambdaLayerVersion.property.skipDestroy"></a>

```typescript
public readonly skipDestroy: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `sourceCodeHash`<sup>Required</sup> <a name="sourceCodeHash" id="@cdktf/aws-cdk.lambdaLayerVersion.LambdaLayerVersion.property.sourceCodeHash"></a>

```typescript
public readonly sourceCodeHash: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.lambdaLayerVersion.LambdaLayerVersion.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/aws-cdk.lambdaLayerVersion.LambdaLayerVersion.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LambdaLayerVersionConfig <a name="LambdaLayerVersionConfig" id="@cdktf/aws-cdk.lambdaLayerVersion.LambdaLayerVersionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.lambdaLayerVersion.LambdaLayerVersionConfig.Initializer"></a>

```typescript
import { lambdaLayerVersion } from '@cdktf/aws-cdk'

const lambdaLayerVersionConfig: lambdaLayerVersion.LambdaLayerVersionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.lambdaLayerVersion.LambdaLayerVersionConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lambdaLayerVersion.LambdaLayerVersionConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lambdaLayerVersion.LambdaLayerVersionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lambdaLayerVersion.LambdaLayerVersionConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lambdaLayerVersion.LambdaLayerVersionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lambdaLayerVersion.LambdaLayerVersionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lambdaLayerVersion.LambdaLayerVersionConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lambdaLayerVersion.LambdaLayerVersionConfig.property.layerName">layerName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lambda_layer_version#layer_name LambdaLayerVersion#layer_name}. |
| <code><a href="#@cdktf/aws-cdk.lambdaLayerVersion.LambdaLayerVersionConfig.property.compatibleArchitectures">compatibleArchitectures</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lambda_layer_version#compatible_architectures LambdaLayerVersion#compatible_architectures}. |
| <code><a href="#@cdktf/aws-cdk.lambdaLayerVersion.LambdaLayerVersionConfig.property.compatibleRuntimes">compatibleRuntimes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lambda_layer_version#compatible_runtimes LambdaLayerVersion#compatible_runtimes}. |
| <code><a href="#@cdktf/aws-cdk.lambdaLayerVersion.LambdaLayerVersionConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lambda_layer_version#description LambdaLayerVersion#description}. |
| <code><a href="#@cdktf/aws-cdk.lambdaLayerVersion.LambdaLayerVersionConfig.property.filename">filename</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lambda_layer_version#filename LambdaLayerVersion#filename}. |
| <code><a href="#@cdktf/aws-cdk.lambdaLayerVersion.LambdaLayerVersionConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lambda_layer_version#id LambdaLayerVersion#id}. |
| <code><a href="#@cdktf/aws-cdk.lambdaLayerVersion.LambdaLayerVersionConfig.property.licenseInfo">licenseInfo</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lambda_layer_version#license_info LambdaLayerVersion#license_info}. |
| <code><a href="#@cdktf/aws-cdk.lambdaLayerVersion.LambdaLayerVersionConfig.property.s3Bucket">s3Bucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lambda_layer_version#s3_bucket LambdaLayerVersion#s3_bucket}. |
| <code><a href="#@cdktf/aws-cdk.lambdaLayerVersion.LambdaLayerVersionConfig.property.s3Key">s3Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lambda_layer_version#s3_key LambdaLayerVersion#s3_key}. |
| <code><a href="#@cdktf/aws-cdk.lambdaLayerVersion.LambdaLayerVersionConfig.property.s3ObjectVersion">s3ObjectVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lambda_layer_version#s3_object_version LambdaLayerVersion#s3_object_version}. |
| <code><a href="#@cdktf/aws-cdk.lambdaLayerVersion.LambdaLayerVersionConfig.property.skipDestroy">skipDestroy</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lambda_layer_version#skip_destroy LambdaLayerVersion#skip_destroy}. |
| <code><a href="#@cdktf/aws-cdk.lambdaLayerVersion.LambdaLayerVersionConfig.property.sourceCodeHash">sourceCodeHash</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lambda_layer_version#source_code_hash LambdaLayerVersion#source_code_hash}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.lambdaLayerVersion.LambdaLayerVersionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.lambdaLayerVersion.LambdaLayerVersionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.lambdaLayerVersion.LambdaLayerVersionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.lambdaLayerVersion.LambdaLayerVersionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.lambdaLayerVersion.LambdaLayerVersionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.lambdaLayerVersion.LambdaLayerVersionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.lambdaLayerVersion.LambdaLayerVersionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `layerName`<sup>Required</sup> <a name="layerName" id="@cdktf/aws-cdk.lambdaLayerVersion.LambdaLayerVersionConfig.property.layerName"></a>

```typescript
public readonly layerName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lambda_layer_version#layer_name LambdaLayerVersion#layer_name}.

---

##### `compatibleArchitectures`<sup>Optional</sup> <a name="compatibleArchitectures" id="@cdktf/aws-cdk.lambdaLayerVersion.LambdaLayerVersionConfig.property.compatibleArchitectures"></a>

```typescript
public readonly compatibleArchitectures: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lambda_layer_version#compatible_architectures LambdaLayerVersion#compatible_architectures}.

---

##### `compatibleRuntimes`<sup>Optional</sup> <a name="compatibleRuntimes" id="@cdktf/aws-cdk.lambdaLayerVersion.LambdaLayerVersionConfig.property.compatibleRuntimes"></a>

```typescript
public readonly compatibleRuntimes: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lambda_layer_version#compatible_runtimes LambdaLayerVersion#compatible_runtimes}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/aws-cdk.lambdaLayerVersion.LambdaLayerVersionConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lambda_layer_version#description LambdaLayerVersion#description}.

---

##### `filename`<sup>Optional</sup> <a name="filename" id="@cdktf/aws-cdk.lambdaLayerVersion.LambdaLayerVersionConfig.property.filename"></a>

```typescript
public readonly filename: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lambda_layer_version#filename LambdaLayerVersion#filename}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/aws-cdk.lambdaLayerVersion.LambdaLayerVersionConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lambda_layer_version#id LambdaLayerVersion#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `licenseInfo`<sup>Optional</sup> <a name="licenseInfo" id="@cdktf/aws-cdk.lambdaLayerVersion.LambdaLayerVersionConfig.property.licenseInfo"></a>

```typescript
public readonly licenseInfo: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lambda_layer_version#license_info LambdaLayerVersion#license_info}.

---

##### `s3Bucket`<sup>Optional</sup> <a name="s3Bucket" id="@cdktf/aws-cdk.lambdaLayerVersion.LambdaLayerVersionConfig.property.s3Bucket"></a>

```typescript
public readonly s3Bucket: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lambda_layer_version#s3_bucket LambdaLayerVersion#s3_bucket}.

---

##### `s3Key`<sup>Optional</sup> <a name="s3Key" id="@cdktf/aws-cdk.lambdaLayerVersion.LambdaLayerVersionConfig.property.s3Key"></a>

```typescript
public readonly s3Key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lambda_layer_version#s3_key LambdaLayerVersion#s3_key}.

---

##### `s3ObjectVersion`<sup>Optional</sup> <a name="s3ObjectVersion" id="@cdktf/aws-cdk.lambdaLayerVersion.LambdaLayerVersionConfig.property.s3ObjectVersion"></a>

```typescript
public readonly s3ObjectVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lambda_layer_version#s3_object_version LambdaLayerVersion#s3_object_version}.

---

##### `skipDestroy`<sup>Optional</sup> <a name="skipDestroy" id="@cdktf/aws-cdk.lambdaLayerVersion.LambdaLayerVersionConfig.property.skipDestroy"></a>

```typescript
public readonly skipDestroy: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lambda_layer_version#skip_destroy LambdaLayerVersion#skip_destroy}.

---

##### `sourceCodeHash`<sup>Optional</sup> <a name="sourceCodeHash" id="@cdktf/aws-cdk.lambdaLayerVersion.LambdaLayerVersionConfig.property.sourceCodeHash"></a>

```typescript
public readonly sourceCodeHash: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lambda_layer_version#source_code_hash LambdaLayerVersion#source_code_hash}.

---



