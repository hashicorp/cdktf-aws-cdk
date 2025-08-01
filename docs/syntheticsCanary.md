# `syntheticsCanary` Submodule <a name="`syntheticsCanary` Submodule" id="@cdktf/aws-cdk.syntheticsCanary"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SyntheticsCanary <a name="SyntheticsCanary" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanary"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/synthetics_canary aws_synthetics_canary}.

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanary.Initializer"></a>

```typescript
import { syntheticsCanary } from '@cdktf/aws-cdk'

new syntheticsCanary.SyntheticsCanary(scope: Construct, id: string, config: SyntheticsCanaryConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanary.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanary.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanary.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryConfig">SyntheticsCanaryConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanary.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanary.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanary.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryConfig">SyntheticsCanaryConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanary.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanary.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanary.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanary.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanary.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanary.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanary.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanary.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanary.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanary.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanary.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanary.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanary.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanary.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanary.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanary.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanary.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanary.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanary.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanary.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanary.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanary.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanary.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanary.putArtifactConfig">putArtifactConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanary.putRunConfig">putRunConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanary.putSchedule">putSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanary.putVpcConfig">putVpcConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanary.resetArtifactConfig">resetArtifactConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanary.resetFailureRetentionPeriod">resetFailureRetentionPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanary.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanary.resetRunConfig">resetRunConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanary.resetS3Bucket">resetS3Bucket</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanary.resetS3Key">resetS3Key</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanary.resetS3Version">resetS3Version</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanary.resetStartCanary">resetStartCanary</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanary.resetSuccessRetentionPeriod">resetSuccessRetentionPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanary.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanary.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanary.resetVpcConfig">resetVpcConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanary.resetZipFile">resetZipFile</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanary.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanary.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanary.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanary.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanary.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanary.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanary.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanary.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanary.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanary.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanary.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanary.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanary.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanary.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanary.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanary.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanary.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanary.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanary.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanary.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanary.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanary.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanary.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanary.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanary.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanary.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanary.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanary.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanary.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanary.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanary.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanary.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanary.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanary.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanary.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanary.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanary.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanary.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanary.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanary.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanary.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanary.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanary.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putArtifactConfig` <a name="putArtifactConfig" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanary.putArtifactConfig"></a>

```typescript
public putArtifactConfig(value: SyntheticsCanaryArtifactConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanary.putArtifactConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryArtifactConfig">SyntheticsCanaryArtifactConfig</a>

---

##### `putRunConfig` <a name="putRunConfig" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanary.putRunConfig"></a>

```typescript
public putRunConfig(value: SyntheticsCanaryRunConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanary.putRunConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryRunConfig">SyntheticsCanaryRunConfig</a>

---

##### `putSchedule` <a name="putSchedule" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanary.putSchedule"></a>

```typescript
public putSchedule(value: SyntheticsCanarySchedule): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanary.putSchedule.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanarySchedule">SyntheticsCanarySchedule</a>

---

##### `putVpcConfig` <a name="putVpcConfig" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanary.putVpcConfig"></a>

```typescript
public putVpcConfig(value: SyntheticsCanaryVpcConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanary.putVpcConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryVpcConfig">SyntheticsCanaryVpcConfig</a>

---

##### `resetArtifactConfig` <a name="resetArtifactConfig" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanary.resetArtifactConfig"></a>

```typescript
public resetArtifactConfig(): void
```

##### `resetFailureRetentionPeriod` <a name="resetFailureRetentionPeriod" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanary.resetFailureRetentionPeriod"></a>

```typescript
public resetFailureRetentionPeriod(): void
```

##### `resetId` <a name="resetId" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanary.resetId"></a>

```typescript
public resetId(): void
```

##### `resetRunConfig` <a name="resetRunConfig" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanary.resetRunConfig"></a>

```typescript
public resetRunConfig(): void
```

##### `resetS3Bucket` <a name="resetS3Bucket" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanary.resetS3Bucket"></a>

```typescript
public resetS3Bucket(): void
```

##### `resetS3Key` <a name="resetS3Key" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanary.resetS3Key"></a>

```typescript
public resetS3Key(): void
```

##### `resetS3Version` <a name="resetS3Version" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanary.resetS3Version"></a>

```typescript
public resetS3Version(): void
```

##### `resetStartCanary` <a name="resetStartCanary" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanary.resetStartCanary"></a>

```typescript
public resetStartCanary(): void
```

##### `resetSuccessRetentionPeriod` <a name="resetSuccessRetentionPeriod" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanary.resetSuccessRetentionPeriod"></a>

```typescript
public resetSuccessRetentionPeriod(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanary.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanary.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

##### `resetVpcConfig` <a name="resetVpcConfig" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanary.resetVpcConfig"></a>

```typescript
public resetVpcConfig(): void
```

##### `resetZipFile` <a name="resetZipFile" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanary.resetZipFile"></a>

```typescript
public resetZipFile(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanary.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanary.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanary.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanary.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a SyntheticsCanary resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanary.isConstruct"></a>

```typescript
import { syntheticsCanary } from '@cdktf/aws-cdk'

syntheticsCanary.SyntheticsCanary.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanary.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanary.isTerraformElement"></a>

```typescript
import { syntheticsCanary } from '@cdktf/aws-cdk'

syntheticsCanary.SyntheticsCanary.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanary.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanary.isTerraformResource"></a>

```typescript
import { syntheticsCanary } from '@cdktf/aws-cdk'

syntheticsCanary.SyntheticsCanary.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanary.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanary.generateConfigForImport"></a>

```typescript
import { syntheticsCanary } from '@cdktf/aws-cdk'

syntheticsCanary.SyntheticsCanary.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a SyntheticsCanary resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanary.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanary.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SyntheticsCanary to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanary.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SyntheticsCanary that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/synthetics_canary#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanary.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the SyntheticsCanary to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanary.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanary.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanary.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanary.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanary.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanary.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanary.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanary.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanary.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanary.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanary.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanary.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanary.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanary.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanary.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanary.property.artifactConfig">artifactConfig</a></code> | <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference">SyntheticsCanaryArtifactConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanary.property.engineArn">engineArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanary.property.runConfig">runConfig</a></code> | <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference">SyntheticsCanaryRunConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanary.property.schedule">schedule</a></code> | <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryScheduleOutputReference">SyntheticsCanaryScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanary.property.sourceLocationArn">sourceLocationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanary.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanary.property.timeline">timeline</a></code> | <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryTimelineList">SyntheticsCanaryTimelineList</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanary.property.vpcConfig">vpcConfig</a></code> | <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference">SyntheticsCanaryVpcConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanary.property.artifactConfigInput">artifactConfigInput</a></code> | <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryArtifactConfig">SyntheticsCanaryArtifactConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanary.property.artifactS3LocationInput">artifactS3LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanary.property.executionRoleArnInput">executionRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanary.property.failureRetentionPeriodInput">failureRetentionPeriodInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanary.property.handlerInput">handlerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanary.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanary.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanary.property.runConfigInput">runConfigInput</a></code> | <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryRunConfig">SyntheticsCanaryRunConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanary.property.runtimeVersionInput">runtimeVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanary.property.s3BucketInput">s3BucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanary.property.s3KeyInput">s3KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanary.property.s3VersionInput">s3VersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanary.property.scheduleInput">scheduleInput</a></code> | <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanarySchedule">SyntheticsCanarySchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanary.property.startCanaryInput">startCanaryInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanary.property.successRetentionPeriodInput">successRetentionPeriodInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanary.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanary.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanary.property.vpcConfigInput">vpcConfigInput</a></code> | <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryVpcConfig">SyntheticsCanaryVpcConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanary.property.zipFileInput">zipFileInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanary.property.artifactS3Location">artifactS3Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanary.property.executionRoleArn">executionRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanary.property.failureRetentionPeriod">failureRetentionPeriod</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanary.property.handler">handler</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanary.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanary.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanary.property.runtimeVersion">runtimeVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanary.property.s3Bucket">s3Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanary.property.s3Key">s3Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanary.property.s3Version">s3Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanary.property.startCanary">startCanary</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanary.property.successRetentionPeriod">successRetentionPeriod</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanary.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanary.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanary.property.zipFile">zipFile</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanary.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanary.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanary.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanary.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanary.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanary.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanary.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanary.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanary.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanary.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanary.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanary.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanary.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanary.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanary.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `artifactConfig`<sup>Required</sup> <a name="artifactConfig" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanary.property.artifactConfig"></a>

```typescript
public readonly artifactConfig: SyntheticsCanaryArtifactConfigOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference">SyntheticsCanaryArtifactConfigOutputReference</a>

---

##### `engineArn`<sup>Required</sup> <a name="engineArn" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanary.property.engineArn"></a>

```typescript
public readonly engineArn: string;
```

- *Type:* string

---

##### `runConfig`<sup>Required</sup> <a name="runConfig" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanary.property.runConfig"></a>

```typescript
public readonly runConfig: SyntheticsCanaryRunConfigOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference">SyntheticsCanaryRunConfigOutputReference</a>

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanary.property.schedule"></a>

```typescript
public readonly schedule: SyntheticsCanaryScheduleOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryScheduleOutputReference">SyntheticsCanaryScheduleOutputReference</a>

---

##### `sourceLocationArn`<sup>Required</sup> <a name="sourceLocationArn" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanary.property.sourceLocationArn"></a>

```typescript
public readonly sourceLocationArn: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanary.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `timeline`<sup>Required</sup> <a name="timeline" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanary.property.timeline"></a>

```typescript
public readonly timeline: SyntheticsCanaryTimelineList;
```

- *Type:* <a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryTimelineList">SyntheticsCanaryTimelineList</a>

---

##### `vpcConfig`<sup>Required</sup> <a name="vpcConfig" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanary.property.vpcConfig"></a>

```typescript
public readonly vpcConfig: SyntheticsCanaryVpcConfigOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference">SyntheticsCanaryVpcConfigOutputReference</a>

---

##### `artifactConfigInput`<sup>Optional</sup> <a name="artifactConfigInput" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanary.property.artifactConfigInput"></a>

```typescript
public readonly artifactConfigInput: SyntheticsCanaryArtifactConfig;
```

- *Type:* <a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryArtifactConfig">SyntheticsCanaryArtifactConfig</a>

---

##### `artifactS3LocationInput`<sup>Optional</sup> <a name="artifactS3LocationInput" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanary.property.artifactS3LocationInput"></a>

```typescript
public readonly artifactS3LocationInput: string;
```

- *Type:* string

---

##### `executionRoleArnInput`<sup>Optional</sup> <a name="executionRoleArnInput" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanary.property.executionRoleArnInput"></a>

```typescript
public readonly executionRoleArnInput: string;
```

- *Type:* string

---

##### `failureRetentionPeriodInput`<sup>Optional</sup> <a name="failureRetentionPeriodInput" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanary.property.failureRetentionPeriodInput"></a>

```typescript
public readonly failureRetentionPeriodInput: number;
```

- *Type:* number

---

##### `handlerInput`<sup>Optional</sup> <a name="handlerInput" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanary.property.handlerInput"></a>

```typescript
public readonly handlerInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanary.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanary.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `runConfigInput`<sup>Optional</sup> <a name="runConfigInput" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanary.property.runConfigInput"></a>

```typescript
public readonly runConfigInput: SyntheticsCanaryRunConfig;
```

- *Type:* <a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryRunConfig">SyntheticsCanaryRunConfig</a>

---

##### `runtimeVersionInput`<sup>Optional</sup> <a name="runtimeVersionInput" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanary.property.runtimeVersionInput"></a>

```typescript
public readonly runtimeVersionInput: string;
```

- *Type:* string

---

##### `s3BucketInput`<sup>Optional</sup> <a name="s3BucketInput" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanary.property.s3BucketInput"></a>

```typescript
public readonly s3BucketInput: string;
```

- *Type:* string

---

##### `s3KeyInput`<sup>Optional</sup> <a name="s3KeyInput" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanary.property.s3KeyInput"></a>

```typescript
public readonly s3KeyInput: string;
```

- *Type:* string

---

##### `s3VersionInput`<sup>Optional</sup> <a name="s3VersionInput" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanary.property.s3VersionInput"></a>

```typescript
public readonly s3VersionInput: string;
```

- *Type:* string

---

##### `scheduleInput`<sup>Optional</sup> <a name="scheduleInput" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanary.property.scheduleInput"></a>

```typescript
public readonly scheduleInput: SyntheticsCanarySchedule;
```

- *Type:* <a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanarySchedule">SyntheticsCanarySchedule</a>

---

##### `startCanaryInput`<sup>Optional</sup> <a name="startCanaryInput" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanary.property.startCanaryInput"></a>

```typescript
public readonly startCanaryInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `successRetentionPeriodInput`<sup>Optional</sup> <a name="successRetentionPeriodInput" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanary.property.successRetentionPeriodInput"></a>

```typescript
public readonly successRetentionPeriodInput: number;
```

- *Type:* number

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanary.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanary.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `vpcConfigInput`<sup>Optional</sup> <a name="vpcConfigInput" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanary.property.vpcConfigInput"></a>

```typescript
public readonly vpcConfigInput: SyntheticsCanaryVpcConfig;
```

- *Type:* <a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryVpcConfig">SyntheticsCanaryVpcConfig</a>

---

##### `zipFileInput`<sup>Optional</sup> <a name="zipFileInput" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanary.property.zipFileInput"></a>

```typescript
public readonly zipFileInput: string;
```

- *Type:* string

---

##### `artifactS3Location`<sup>Required</sup> <a name="artifactS3Location" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanary.property.artifactS3Location"></a>

```typescript
public readonly artifactS3Location: string;
```

- *Type:* string

---

##### `executionRoleArn`<sup>Required</sup> <a name="executionRoleArn" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanary.property.executionRoleArn"></a>

```typescript
public readonly executionRoleArn: string;
```

- *Type:* string

---

##### `failureRetentionPeriod`<sup>Required</sup> <a name="failureRetentionPeriod" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanary.property.failureRetentionPeriod"></a>

```typescript
public readonly failureRetentionPeriod: number;
```

- *Type:* number

---

##### `handler`<sup>Required</sup> <a name="handler" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanary.property.handler"></a>

```typescript
public readonly handler: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanary.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanary.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `runtimeVersion`<sup>Required</sup> <a name="runtimeVersion" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanary.property.runtimeVersion"></a>

```typescript
public readonly runtimeVersion: string;
```

- *Type:* string

---

##### `s3Bucket`<sup>Required</sup> <a name="s3Bucket" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanary.property.s3Bucket"></a>

```typescript
public readonly s3Bucket: string;
```

- *Type:* string

---

##### `s3Key`<sup>Required</sup> <a name="s3Key" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanary.property.s3Key"></a>

```typescript
public readonly s3Key: string;
```

- *Type:* string

---

##### `s3Version`<sup>Required</sup> <a name="s3Version" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanary.property.s3Version"></a>

```typescript
public readonly s3Version: string;
```

- *Type:* string

---

##### `startCanary`<sup>Required</sup> <a name="startCanary" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanary.property.startCanary"></a>

```typescript
public readonly startCanary: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `successRetentionPeriod`<sup>Required</sup> <a name="successRetentionPeriod" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanary.property.successRetentionPeriod"></a>

```typescript
public readonly successRetentionPeriod: number;
```

- *Type:* number

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanary.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanary.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `zipFile`<sup>Required</sup> <a name="zipFile" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanary.property.zipFile"></a>

```typescript
public readonly zipFile: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanary.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanary.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SyntheticsCanaryArtifactConfig <a name="SyntheticsCanaryArtifactConfig" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryArtifactConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryArtifactConfig.Initializer"></a>

```typescript
import { syntheticsCanary } from '@cdktf/aws-cdk'

const syntheticsCanaryArtifactConfig: syntheticsCanary.SyntheticsCanaryArtifactConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryArtifactConfig.property.s3Encryption">s3Encryption</a></code> | <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryArtifactConfigS3Encryption">SyntheticsCanaryArtifactConfigS3Encryption</a></code> | s3_encryption block. |

---

##### `s3Encryption`<sup>Optional</sup> <a name="s3Encryption" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryArtifactConfig.property.s3Encryption"></a>

```typescript
public readonly s3Encryption: SyntheticsCanaryArtifactConfigS3Encryption;
```

- *Type:* <a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryArtifactConfigS3Encryption">SyntheticsCanaryArtifactConfigS3Encryption</a>

s3_encryption block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/synthetics_canary#s3_encryption SyntheticsCanary#s3_encryption}

---

### SyntheticsCanaryArtifactConfigS3Encryption <a name="SyntheticsCanaryArtifactConfigS3Encryption" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryArtifactConfigS3Encryption"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryArtifactConfigS3Encryption.Initializer"></a>

```typescript
import { syntheticsCanary } from '@cdktf/aws-cdk'

const syntheticsCanaryArtifactConfigS3Encryption: syntheticsCanary.SyntheticsCanaryArtifactConfigS3Encryption = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryArtifactConfigS3Encryption.property.encryptionMode">encryptionMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/synthetics_canary#encryption_mode SyntheticsCanary#encryption_mode}. |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryArtifactConfigS3Encryption.property.kmsKeyArn">kmsKeyArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/synthetics_canary#kms_key_arn SyntheticsCanary#kms_key_arn}. |

---

##### `encryptionMode`<sup>Optional</sup> <a name="encryptionMode" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryArtifactConfigS3Encryption.property.encryptionMode"></a>

```typescript
public readonly encryptionMode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/synthetics_canary#encryption_mode SyntheticsCanary#encryption_mode}.

---

##### `kmsKeyArn`<sup>Optional</sup> <a name="kmsKeyArn" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryArtifactConfigS3Encryption.property.kmsKeyArn"></a>

```typescript
public readonly kmsKeyArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/synthetics_canary#kms_key_arn SyntheticsCanary#kms_key_arn}.

---

### SyntheticsCanaryConfig <a name="SyntheticsCanaryConfig" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryConfig.Initializer"></a>

```typescript
import { syntheticsCanary } from '@cdktf/aws-cdk'

const syntheticsCanaryConfig: syntheticsCanary.SyntheticsCanaryConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryConfig.property.artifactS3Location">artifactS3Location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/synthetics_canary#artifact_s3_location SyntheticsCanary#artifact_s3_location}. |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryConfig.property.executionRoleArn">executionRoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/synthetics_canary#execution_role_arn SyntheticsCanary#execution_role_arn}. |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryConfig.property.handler">handler</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/synthetics_canary#handler SyntheticsCanary#handler}. |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/synthetics_canary#name SyntheticsCanary#name}. |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryConfig.property.runtimeVersion">runtimeVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/synthetics_canary#runtime_version SyntheticsCanary#runtime_version}. |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryConfig.property.schedule">schedule</a></code> | <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanarySchedule">SyntheticsCanarySchedule</a></code> | schedule block. |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryConfig.property.artifactConfig">artifactConfig</a></code> | <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryArtifactConfig">SyntheticsCanaryArtifactConfig</a></code> | artifact_config block. |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryConfig.property.failureRetentionPeriod">failureRetentionPeriod</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/synthetics_canary#failure_retention_period SyntheticsCanary#failure_retention_period}. |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/synthetics_canary#id SyntheticsCanary#id}. |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryConfig.property.runConfig">runConfig</a></code> | <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryRunConfig">SyntheticsCanaryRunConfig</a></code> | run_config block. |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryConfig.property.s3Bucket">s3Bucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/synthetics_canary#s3_bucket SyntheticsCanary#s3_bucket}. |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryConfig.property.s3Key">s3Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/synthetics_canary#s3_key SyntheticsCanary#s3_key}. |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryConfig.property.s3Version">s3Version</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/synthetics_canary#s3_version SyntheticsCanary#s3_version}. |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryConfig.property.startCanary">startCanary</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/synthetics_canary#start_canary SyntheticsCanary#start_canary}. |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryConfig.property.successRetentionPeriod">successRetentionPeriod</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/synthetics_canary#success_retention_period SyntheticsCanary#success_retention_period}. |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/synthetics_canary#tags SyntheticsCanary#tags}. |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/synthetics_canary#tags_all SyntheticsCanary#tags_all}. |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryConfig.property.vpcConfig">vpcConfig</a></code> | <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryVpcConfig">SyntheticsCanaryVpcConfig</a></code> | vpc_config block. |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryConfig.property.zipFile">zipFile</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/synthetics_canary#zip_file SyntheticsCanary#zip_file}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `artifactS3Location`<sup>Required</sup> <a name="artifactS3Location" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryConfig.property.artifactS3Location"></a>

```typescript
public readonly artifactS3Location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/synthetics_canary#artifact_s3_location SyntheticsCanary#artifact_s3_location}.

---

##### `executionRoleArn`<sup>Required</sup> <a name="executionRoleArn" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryConfig.property.executionRoleArn"></a>

```typescript
public readonly executionRoleArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/synthetics_canary#execution_role_arn SyntheticsCanary#execution_role_arn}.

---

##### `handler`<sup>Required</sup> <a name="handler" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryConfig.property.handler"></a>

```typescript
public readonly handler: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/synthetics_canary#handler SyntheticsCanary#handler}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/synthetics_canary#name SyntheticsCanary#name}.

---

##### `runtimeVersion`<sup>Required</sup> <a name="runtimeVersion" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryConfig.property.runtimeVersion"></a>

```typescript
public readonly runtimeVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/synthetics_canary#runtime_version SyntheticsCanary#runtime_version}.

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryConfig.property.schedule"></a>

```typescript
public readonly schedule: SyntheticsCanarySchedule;
```

- *Type:* <a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanarySchedule">SyntheticsCanarySchedule</a>

schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/synthetics_canary#schedule SyntheticsCanary#schedule}

---

##### `artifactConfig`<sup>Optional</sup> <a name="artifactConfig" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryConfig.property.artifactConfig"></a>

```typescript
public readonly artifactConfig: SyntheticsCanaryArtifactConfig;
```

- *Type:* <a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryArtifactConfig">SyntheticsCanaryArtifactConfig</a>

artifact_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/synthetics_canary#artifact_config SyntheticsCanary#artifact_config}

---

##### `failureRetentionPeriod`<sup>Optional</sup> <a name="failureRetentionPeriod" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryConfig.property.failureRetentionPeriod"></a>

```typescript
public readonly failureRetentionPeriod: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/synthetics_canary#failure_retention_period SyntheticsCanary#failure_retention_period}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/synthetics_canary#id SyntheticsCanary#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `runConfig`<sup>Optional</sup> <a name="runConfig" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryConfig.property.runConfig"></a>

```typescript
public readonly runConfig: SyntheticsCanaryRunConfig;
```

- *Type:* <a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryRunConfig">SyntheticsCanaryRunConfig</a>

run_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/synthetics_canary#run_config SyntheticsCanary#run_config}

---

##### `s3Bucket`<sup>Optional</sup> <a name="s3Bucket" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryConfig.property.s3Bucket"></a>

```typescript
public readonly s3Bucket: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/synthetics_canary#s3_bucket SyntheticsCanary#s3_bucket}.

---

##### `s3Key`<sup>Optional</sup> <a name="s3Key" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryConfig.property.s3Key"></a>

```typescript
public readonly s3Key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/synthetics_canary#s3_key SyntheticsCanary#s3_key}.

---

##### `s3Version`<sup>Optional</sup> <a name="s3Version" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryConfig.property.s3Version"></a>

```typescript
public readonly s3Version: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/synthetics_canary#s3_version SyntheticsCanary#s3_version}.

---

##### `startCanary`<sup>Optional</sup> <a name="startCanary" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryConfig.property.startCanary"></a>

```typescript
public readonly startCanary: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/synthetics_canary#start_canary SyntheticsCanary#start_canary}.

---

##### `successRetentionPeriod`<sup>Optional</sup> <a name="successRetentionPeriod" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryConfig.property.successRetentionPeriod"></a>

```typescript
public readonly successRetentionPeriod: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/synthetics_canary#success_retention_period SyntheticsCanary#success_retention_period}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/synthetics_canary#tags SyntheticsCanary#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/synthetics_canary#tags_all SyntheticsCanary#tags_all}.

---

##### `vpcConfig`<sup>Optional</sup> <a name="vpcConfig" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryConfig.property.vpcConfig"></a>

```typescript
public readonly vpcConfig: SyntheticsCanaryVpcConfig;
```

- *Type:* <a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryVpcConfig">SyntheticsCanaryVpcConfig</a>

vpc_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/synthetics_canary#vpc_config SyntheticsCanary#vpc_config}

---

##### `zipFile`<sup>Optional</sup> <a name="zipFile" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryConfig.property.zipFile"></a>

```typescript
public readonly zipFile: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/synthetics_canary#zip_file SyntheticsCanary#zip_file}.

---

### SyntheticsCanaryRunConfig <a name="SyntheticsCanaryRunConfig" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryRunConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryRunConfig.Initializer"></a>

```typescript
import { syntheticsCanary } from '@cdktf/aws-cdk'

const syntheticsCanaryRunConfig: syntheticsCanary.SyntheticsCanaryRunConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryRunConfig.property.activeTracing">activeTracing</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/synthetics_canary#active_tracing SyntheticsCanary#active_tracing}. |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryRunConfig.property.memoryInMb">memoryInMb</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/synthetics_canary#memory_in_mb SyntheticsCanary#memory_in_mb}. |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryRunConfig.property.timeoutInSeconds">timeoutInSeconds</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/synthetics_canary#timeout_in_seconds SyntheticsCanary#timeout_in_seconds}. |

---

##### `activeTracing`<sup>Optional</sup> <a name="activeTracing" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryRunConfig.property.activeTracing"></a>

```typescript
public readonly activeTracing: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/synthetics_canary#active_tracing SyntheticsCanary#active_tracing}.

---

##### `memoryInMb`<sup>Optional</sup> <a name="memoryInMb" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryRunConfig.property.memoryInMb"></a>

```typescript
public readonly memoryInMb: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/synthetics_canary#memory_in_mb SyntheticsCanary#memory_in_mb}.

---

##### `timeoutInSeconds`<sup>Optional</sup> <a name="timeoutInSeconds" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryRunConfig.property.timeoutInSeconds"></a>

```typescript
public readonly timeoutInSeconds: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/synthetics_canary#timeout_in_seconds SyntheticsCanary#timeout_in_seconds}.

---

### SyntheticsCanarySchedule <a name="SyntheticsCanarySchedule" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanarySchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanarySchedule.Initializer"></a>

```typescript
import { syntheticsCanary } from '@cdktf/aws-cdk'

const syntheticsCanarySchedule: syntheticsCanary.SyntheticsCanarySchedule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanarySchedule.property.expression">expression</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/synthetics_canary#expression SyntheticsCanary#expression}. |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanarySchedule.property.durationInSeconds">durationInSeconds</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/synthetics_canary#duration_in_seconds SyntheticsCanary#duration_in_seconds}. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanarySchedule.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/synthetics_canary#expression SyntheticsCanary#expression}.

---

##### `durationInSeconds`<sup>Optional</sup> <a name="durationInSeconds" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanarySchedule.property.durationInSeconds"></a>

```typescript
public readonly durationInSeconds: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/synthetics_canary#duration_in_seconds SyntheticsCanary#duration_in_seconds}.

---

### SyntheticsCanaryTimeline <a name="SyntheticsCanaryTimeline" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryTimeline"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryTimeline.Initializer"></a>

```typescript
import { syntheticsCanary } from '@cdktf/aws-cdk'

const syntheticsCanaryTimeline: syntheticsCanary.SyntheticsCanaryTimeline = { ... }
```


### SyntheticsCanaryVpcConfig <a name="SyntheticsCanaryVpcConfig" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryVpcConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryVpcConfig.Initializer"></a>

```typescript
import { syntheticsCanary } from '@cdktf/aws-cdk'

const syntheticsCanaryVpcConfig: syntheticsCanary.SyntheticsCanaryVpcConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryVpcConfig.property.securityGroupIds">securityGroupIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/synthetics_canary#security_group_ids SyntheticsCanary#security_group_ids}. |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryVpcConfig.property.subnetIds">subnetIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/synthetics_canary#subnet_ids SyntheticsCanary#subnet_ids}. |

---

##### `securityGroupIds`<sup>Optional</sup> <a name="securityGroupIds" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryVpcConfig.property.securityGroupIds"></a>

```typescript
public readonly securityGroupIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/synthetics_canary#security_group_ids SyntheticsCanary#security_group_ids}.

---

##### `subnetIds`<sup>Optional</sup> <a name="subnetIds" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryVpcConfig.property.subnetIds"></a>

```typescript
public readonly subnetIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/synthetics_canary#subnet_ids SyntheticsCanary#subnet_ids}.

---

## Classes <a name="Classes" id="Classes"></a>

### SyntheticsCanaryArtifactConfigOutputReference <a name="SyntheticsCanaryArtifactConfigOutputReference" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.Initializer"></a>

```typescript
import { syntheticsCanary } from '@cdktf/aws-cdk'

new syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.putS3Encryption">putS3Encryption</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.resetS3Encryption">resetS3Encryption</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putS3Encryption` <a name="putS3Encryption" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.putS3Encryption"></a>

```typescript
public putS3Encryption(value: SyntheticsCanaryArtifactConfigS3Encryption): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.putS3Encryption.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryArtifactConfigS3Encryption">SyntheticsCanaryArtifactConfigS3Encryption</a>

---

##### `resetS3Encryption` <a name="resetS3Encryption" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.resetS3Encryption"></a>

```typescript
public resetS3Encryption(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.property.s3Encryption">s3Encryption</a></code> | <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference">SyntheticsCanaryArtifactConfigS3EncryptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.property.s3EncryptionInput">s3EncryptionInput</a></code> | <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryArtifactConfigS3Encryption">SyntheticsCanaryArtifactConfigS3Encryption</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryArtifactConfig">SyntheticsCanaryArtifactConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `s3Encryption`<sup>Required</sup> <a name="s3Encryption" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.property.s3Encryption"></a>

```typescript
public readonly s3Encryption: SyntheticsCanaryArtifactConfigS3EncryptionOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference">SyntheticsCanaryArtifactConfigS3EncryptionOutputReference</a>

---

##### `s3EncryptionInput`<sup>Optional</sup> <a name="s3EncryptionInput" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.property.s3EncryptionInput"></a>

```typescript
public readonly s3EncryptionInput: SyntheticsCanaryArtifactConfigS3Encryption;
```

- *Type:* <a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryArtifactConfigS3Encryption">SyntheticsCanaryArtifactConfigS3Encryption</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryArtifactConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SyntheticsCanaryArtifactConfig;
```

- *Type:* <a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryArtifactConfig">SyntheticsCanaryArtifactConfig</a>

---


### SyntheticsCanaryArtifactConfigS3EncryptionOutputReference <a name="SyntheticsCanaryArtifactConfigS3EncryptionOutputReference" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.Initializer"></a>

```typescript
import { syntheticsCanary } from '@cdktf/aws-cdk'

new syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.resetEncryptionMode">resetEncryptionMode</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.resetKmsKeyArn">resetKmsKeyArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEncryptionMode` <a name="resetEncryptionMode" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.resetEncryptionMode"></a>

```typescript
public resetEncryptionMode(): void
```

##### `resetKmsKeyArn` <a name="resetKmsKeyArn" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.resetKmsKeyArn"></a>

```typescript
public resetKmsKeyArn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.property.encryptionModeInput">encryptionModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.property.kmsKeyArnInput">kmsKeyArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.property.encryptionMode">encryptionMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.property.kmsKeyArn">kmsKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryArtifactConfigS3Encryption">SyntheticsCanaryArtifactConfigS3Encryption</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `encryptionModeInput`<sup>Optional</sup> <a name="encryptionModeInput" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.property.encryptionModeInput"></a>

```typescript
public readonly encryptionModeInput: string;
```

- *Type:* string

---

##### `kmsKeyArnInput`<sup>Optional</sup> <a name="kmsKeyArnInput" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.property.kmsKeyArnInput"></a>

```typescript
public readonly kmsKeyArnInput: string;
```

- *Type:* string

---

##### `encryptionMode`<sup>Required</sup> <a name="encryptionMode" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.property.encryptionMode"></a>

```typescript
public readonly encryptionMode: string;
```

- *Type:* string

---

##### `kmsKeyArn`<sup>Required</sup> <a name="kmsKeyArn" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.property.kmsKeyArn"></a>

```typescript
public readonly kmsKeyArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryArtifactConfigS3EncryptionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SyntheticsCanaryArtifactConfigS3Encryption;
```

- *Type:* <a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryArtifactConfigS3Encryption">SyntheticsCanaryArtifactConfigS3Encryption</a>

---


### SyntheticsCanaryRunConfigOutputReference <a name="SyntheticsCanaryRunConfigOutputReference" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.Initializer"></a>

```typescript
import { syntheticsCanary } from '@cdktf/aws-cdk'

new syntheticsCanary.SyntheticsCanaryRunConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.resetActiveTracing">resetActiveTracing</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.resetMemoryInMb">resetMemoryInMb</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.resetTimeoutInSeconds">resetTimeoutInSeconds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetActiveTracing` <a name="resetActiveTracing" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.resetActiveTracing"></a>

```typescript
public resetActiveTracing(): void
```

##### `resetMemoryInMb` <a name="resetMemoryInMb" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.resetMemoryInMb"></a>

```typescript
public resetMemoryInMb(): void
```

##### `resetTimeoutInSeconds` <a name="resetTimeoutInSeconds" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.resetTimeoutInSeconds"></a>

```typescript
public resetTimeoutInSeconds(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.property.activeTracingInput">activeTracingInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.property.memoryInMbInput">memoryInMbInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.property.timeoutInSecondsInput">timeoutInSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.property.activeTracing">activeTracing</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.property.memoryInMb">memoryInMb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.property.timeoutInSeconds">timeoutInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryRunConfig">SyntheticsCanaryRunConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `activeTracingInput`<sup>Optional</sup> <a name="activeTracingInput" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.property.activeTracingInput"></a>

```typescript
public readonly activeTracingInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `memoryInMbInput`<sup>Optional</sup> <a name="memoryInMbInput" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.property.memoryInMbInput"></a>

```typescript
public readonly memoryInMbInput: number;
```

- *Type:* number

---

##### `timeoutInSecondsInput`<sup>Optional</sup> <a name="timeoutInSecondsInput" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.property.timeoutInSecondsInput"></a>

```typescript
public readonly timeoutInSecondsInput: number;
```

- *Type:* number

---

##### `activeTracing`<sup>Required</sup> <a name="activeTracing" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.property.activeTracing"></a>

```typescript
public readonly activeTracing: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `memoryInMb`<sup>Required</sup> <a name="memoryInMb" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.property.memoryInMb"></a>

```typescript
public readonly memoryInMb: number;
```

- *Type:* number

---

##### `timeoutInSeconds`<sup>Required</sup> <a name="timeoutInSeconds" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.property.timeoutInSeconds"></a>

```typescript
public readonly timeoutInSeconds: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryRunConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SyntheticsCanaryRunConfig;
```

- *Type:* <a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryRunConfig">SyntheticsCanaryRunConfig</a>

---


### SyntheticsCanaryScheduleOutputReference <a name="SyntheticsCanaryScheduleOutputReference" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.Initializer"></a>

```typescript
import { syntheticsCanary } from '@cdktf/aws-cdk'

new syntheticsCanary.SyntheticsCanaryScheduleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.resetDurationInSeconds">resetDurationInSeconds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDurationInSeconds` <a name="resetDurationInSeconds" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.resetDurationInSeconds"></a>

```typescript
public resetDurationInSeconds(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.property.durationInSecondsInput">durationInSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.property.expressionInput">expressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.property.durationInSeconds">durationInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.property.expression">expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanarySchedule">SyntheticsCanarySchedule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `durationInSecondsInput`<sup>Optional</sup> <a name="durationInSecondsInput" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.property.durationInSecondsInput"></a>

```typescript
public readonly durationInSecondsInput: number;
```

- *Type:* number

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.property.expressionInput"></a>

```typescript
public readonly expressionInput: string;
```

- *Type:* string

---

##### `durationInSeconds`<sup>Required</sup> <a name="durationInSeconds" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.property.durationInSeconds"></a>

```typescript
public readonly durationInSeconds: number;
```

- *Type:* number

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryScheduleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SyntheticsCanarySchedule;
```

- *Type:* <a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanarySchedule">SyntheticsCanarySchedule</a>

---


### SyntheticsCanaryTimelineList <a name="SyntheticsCanaryTimelineList" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryTimelineList"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryTimelineList.Initializer"></a>

```typescript
import { syntheticsCanary } from '@cdktf/aws-cdk'

new syntheticsCanary.SyntheticsCanaryTimelineList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryTimelineList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryTimelineList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryTimelineList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryTimelineList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryTimelineList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryTimelineList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryTimelineList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryTimelineList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryTimelineList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryTimelineList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryTimelineList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryTimelineList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryTimelineList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryTimelineList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryTimelineList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryTimelineList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryTimelineList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryTimelineList.get"></a>

```typescript
public get(index: number): SyntheticsCanaryTimelineOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryTimelineList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryTimelineList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryTimelineList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryTimelineList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryTimelineList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### SyntheticsCanaryTimelineOutputReference <a name="SyntheticsCanaryTimelineOutputReference" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryTimelineOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryTimelineOutputReference.Initializer"></a>

```typescript
import { syntheticsCanary } from '@cdktf/aws-cdk'

new syntheticsCanary.SyntheticsCanaryTimelineOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryTimelineOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryTimelineOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryTimelineOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryTimelineOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryTimelineOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryTimelineOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryTimelineOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryTimelineOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryTimelineOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryTimelineOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryTimelineOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryTimelineOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryTimelineOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryTimelineOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryTimelineOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryTimelineOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryTimelineOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryTimelineOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryTimelineOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryTimelineOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryTimelineOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryTimelineOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryTimelineOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryTimelineOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryTimelineOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryTimelineOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryTimelineOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryTimelineOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryTimelineOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryTimelineOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryTimelineOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryTimelineOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryTimelineOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryTimelineOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryTimelineOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryTimelineOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryTimelineOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryTimelineOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryTimelineOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryTimelineOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryTimelineOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryTimelineOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryTimelineOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryTimelineOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryTimelineOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryTimelineOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryTimelineOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryTimelineOutputReference.property.created">created</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryTimelineOutputReference.property.lastModified">lastModified</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryTimelineOutputReference.property.lastStarted">lastStarted</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryTimelineOutputReference.property.lastStopped">lastStopped</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryTimelineOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryTimeline">SyntheticsCanaryTimeline</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryTimelineOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryTimelineOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `created`<sup>Required</sup> <a name="created" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryTimelineOutputReference.property.created"></a>

```typescript
public readonly created: string;
```

- *Type:* string

---

##### `lastModified`<sup>Required</sup> <a name="lastModified" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryTimelineOutputReference.property.lastModified"></a>

```typescript
public readonly lastModified: string;
```

- *Type:* string

---

##### `lastStarted`<sup>Required</sup> <a name="lastStarted" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryTimelineOutputReference.property.lastStarted"></a>

```typescript
public readonly lastStarted: string;
```

- *Type:* string

---

##### `lastStopped`<sup>Required</sup> <a name="lastStopped" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryTimelineOutputReference.property.lastStopped"></a>

```typescript
public readonly lastStopped: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryTimelineOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SyntheticsCanaryTimeline;
```

- *Type:* <a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryTimeline">SyntheticsCanaryTimeline</a>

---


### SyntheticsCanaryVpcConfigOutputReference <a name="SyntheticsCanaryVpcConfigOutputReference" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.Initializer"></a>

```typescript
import { syntheticsCanary } from '@cdktf/aws-cdk'

new syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.resetSecurityGroupIds">resetSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.resetSubnetIds">resetSubnetIds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSecurityGroupIds` <a name="resetSecurityGroupIds" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.resetSecurityGroupIds"></a>

```typescript
public resetSecurityGroupIds(): void
```

##### `resetSubnetIds` <a name="resetSubnetIds" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.resetSubnetIds"></a>

```typescript
public resetSubnetIds(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.property.vpcId">vpcId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.property.securityGroupIdsInput">securityGroupIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.property.subnetIdsInput">subnetIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.property.securityGroupIds">securityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.property.subnetIds">subnetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryVpcConfig">SyntheticsCanaryVpcConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

---

##### `securityGroupIdsInput`<sup>Optional</sup> <a name="securityGroupIdsInput" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.property.securityGroupIdsInput"></a>

```typescript
public readonly securityGroupIdsInput: string[];
```

- *Type:* string[]

---

##### `subnetIdsInput`<sup>Optional</sup> <a name="subnetIdsInput" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.property.subnetIdsInput"></a>

```typescript
public readonly subnetIdsInput: string[];
```

- *Type:* string[]

---

##### `securityGroupIds`<sup>Required</sup> <a name="securityGroupIds" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.property.securityGroupIds"></a>

```typescript
public readonly securityGroupIds: string[];
```

- *Type:* string[]

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.property.subnetIds"></a>

```typescript
public readonly subnetIds: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryVpcConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SyntheticsCanaryVpcConfig;
```

- *Type:* <a href="#@cdktf/aws-cdk.syntheticsCanary.SyntheticsCanaryVpcConfig">SyntheticsCanaryVpcConfig</a>

---



