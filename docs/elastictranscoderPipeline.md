# `elastictranscoderPipeline` Submodule <a name="`elastictranscoderPipeline` Submodule" id="@cdktf/aws-cdk.elastictranscoderPipeline"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ElastictranscoderPipeline <a name="ElastictranscoderPipeline" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipeline"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/elastictranscoder_pipeline aws_elastictranscoder_pipeline}.

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipeline.Initializer"></a>

```typescript
import { elastictranscoderPipeline } from '@cdktf/aws-cdk'

new elastictranscoderPipeline.ElastictranscoderPipeline(scope: Construct, id: string, config: ElastictranscoderPipelineConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipeline.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipeline.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipeline.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineConfig">ElastictranscoderPipelineConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipeline.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipeline.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipeline.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineConfig">ElastictranscoderPipelineConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipeline.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipeline.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipeline.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipeline.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipeline.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipeline.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipeline.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipeline.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipeline.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipeline.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipeline.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipeline.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipeline.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipeline.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipeline.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipeline.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipeline.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipeline.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipeline.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipeline.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipeline.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipeline.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipeline.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipeline.putContentConfig">putContentConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipeline.putContentConfigPermissions">putContentConfigPermissions</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipeline.putNotifications">putNotifications</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipeline.putThumbnailConfig">putThumbnailConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipeline.putThumbnailConfigPermissions">putThumbnailConfigPermissions</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipeline.resetAwsKmsKeyArn">resetAwsKmsKeyArn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipeline.resetContentConfig">resetContentConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipeline.resetContentConfigPermissions">resetContentConfigPermissions</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipeline.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipeline.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipeline.resetNotifications">resetNotifications</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipeline.resetOutputBucket">resetOutputBucket</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipeline.resetThumbnailConfig">resetThumbnailConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipeline.resetThumbnailConfigPermissions">resetThumbnailConfigPermissions</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipeline.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipeline.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipeline.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipeline.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipeline.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipeline.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipeline.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipeline.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipeline.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipeline.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipeline.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipeline.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipeline.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipeline.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipeline.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipeline.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipeline.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipeline.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipeline.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipeline.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipeline.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipeline.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipeline.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipeline.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipeline.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipeline.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipeline.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipeline.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipeline.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipeline.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipeline.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipeline.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipeline.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipeline.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipeline.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipeline.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipeline.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipeline.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipeline.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipeline.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipeline.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipeline.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipeline.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putContentConfig` <a name="putContentConfig" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipeline.putContentConfig"></a>

```typescript
public putContentConfig(value: ElastictranscoderPipelineContentConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipeline.putContentConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineContentConfig">ElastictranscoderPipelineContentConfig</a>

---

##### `putContentConfigPermissions` <a name="putContentConfigPermissions" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipeline.putContentConfigPermissions"></a>

```typescript
public putContentConfigPermissions(value: IResolvable | ElastictranscoderPipelineContentConfigPermissions[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipeline.putContentConfigPermissions.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissions">ElastictranscoderPipelineContentConfigPermissions</a>[]

---

##### `putNotifications` <a name="putNotifications" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipeline.putNotifications"></a>

```typescript
public putNotifications(value: ElastictranscoderPipelineNotifications): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipeline.putNotifications.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineNotifications">ElastictranscoderPipelineNotifications</a>

---

##### `putThumbnailConfig` <a name="putThumbnailConfig" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipeline.putThumbnailConfig"></a>

```typescript
public putThumbnailConfig(value: ElastictranscoderPipelineThumbnailConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipeline.putThumbnailConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfig">ElastictranscoderPipelineThumbnailConfig</a>

---

##### `putThumbnailConfigPermissions` <a name="putThumbnailConfigPermissions" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipeline.putThumbnailConfigPermissions"></a>

```typescript
public putThumbnailConfigPermissions(value: IResolvable | ElastictranscoderPipelineThumbnailConfigPermissions[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipeline.putThumbnailConfigPermissions.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissions">ElastictranscoderPipelineThumbnailConfigPermissions</a>[]

---

##### `resetAwsKmsKeyArn` <a name="resetAwsKmsKeyArn" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipeline.resetAwsKmsKeyArn"></a>

```typescript
public resetAwsKmsKeyArn(): void
```

##### `resetContentConfig` <a name="resetContentConfig" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipeline.resetContentConfig"></a>

```typescript
public resetContentConfig(): void
```

##### `resetContentConfigPermissions` <a name="resetContentConfigPermissions" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipeline.resetContentConfigPermissions"></a>

```typescript
public resetContentConfigPermissions(): void
```

##### `resetId` <a name="resetId" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipeline.resetId"></a>

```typescript
public resetId(): void
```

##### `resetName` <a name="resetName" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipeline.resetName"></a>

```typescript
public resetName(): void
```

##### `resetNotifications` <a name="resetNotifications" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipeline.resetNotifications"></a>

```typescript
public resetNotifications(): void
```

##### `resetOutputBucket` <a name="resetOutputBucket" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipeline.resetOutputBucket"></a>

```typescript
public resetOutputBucket(): void
```

##### `resetThumbnailConfig` <a name="resetThumbnailConfig" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipeline.resetThumbnailConfig"></a>

```typescript
public resetThumbnailConfig(): void
```

##### `resetThumbnailConfigPermissions` <a name="resetThumbnailConfigPermissions" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipeline.resetThumbnailConfigPermissions"></a>

```typescript
public resetThumbnailConfigPermissions(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipeline.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipeline.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipeline.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipeline.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ElastictranscoderPipeline resource upon running "cdktf plan <stack-name>". |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipeline.isConstruct"></a>

```typescript
import { elastictranscoderPipeline } from '@cdktf/aws-cdk'

elastictranscoderPipeline.ElastictranscoderPipeline.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipeline.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipeline.isTerraformElement"></a>

```typescript
import { elastictranscoderPipeline } from '@cdktf/aws-cdk'

elastictranscoderPipeline.ElastictranscoderPipeline.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipeline.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipeline.isTerraformResource"></a>

```typescript
import { elastictranscoderPipeline } from '@cdktf/aws-cdk'

elastictranscoderPipeline.ElastictranscoderPipeline.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipeline.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipeline.generateConfigForImport"></a>

```typescript
import { elastictranscoderPipeline } from '@cdktf/aws-cdk'

elastictranscoderPipeline.ElastictranscoderPipeline.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ElastictranscoderPipeline resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipeline.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipeline.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ElastictranscoderPipeline to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipeline.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ElastictranscoderPipeline that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/elastictranscoder_pipeline#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipeline.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ElastictranscoderPipeline to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipeline.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipeline.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipeline.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipeline.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipeline.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipeline.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipeline.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipeline.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipeline.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipeline.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipeline.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipeline.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipeline.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipeline.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipeline.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipeline.property.contentConfig">contentConfig</a></code> | <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigOutputReference">ElastictranscoderPipelineContentConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipeline.property.contentConfigPermissions">contentConfigPermissions</a></code> | <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsList">ElastictranscoderPipelineContentConfigPermissionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipeline.property.notifications">notifications</a></code> | <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference">ElastictranscoderPipelineNotificationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipeline.property.thumbnailConfig">thumbnailConfig</a></code> | <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigOutputReference">ElastictranscoderPipelineThumbnailConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipeline.property.thumbnailConfigPermissions">thumbnailConfigPermissions</a></code> | <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsList">ElastictranscoderPipelineThumbnailConfigPermissionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipeline.property.awsKmsKeyArnInput">awsKmsKeyArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipeline.property.contentConfigInput">contentConfigInput</a></code> | <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineContentConfig">ElastictranscoderPipelineContentConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipeline.property.contentConfigPermissionsInput">contentConfigPermissionsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissions">ElastictranscoderPipelineContentConfigPermissions</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipeline.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipeline.property.inputBucketInput">inputBucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipeline.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipeline.property.notificationsInput">notificationsInput</a></code> | <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineNotifications">ElastictranscoderPipelineNotifications</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipeline.property.outputBucketInput">outputBucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipeline.property.roleInput">roleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipeline.property.thumbnailConfigInput">thumbnailConfigInput</a></code> | <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfig">ElastictranscoderPipelineThumbnailConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipeline.property.thumbnailConfigPermissionsInput">thumbnailConfigPermissionsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissions">ElastictranscoderPipelineThumbnailConfigPermissions</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipeline.property.awsKmsKeyArn">awsKmsKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipeline.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipeline.property.inputBucket">inputBucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipeline.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipeline.property.outputBucket">outputBucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipeline.property.role">role</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipeline.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipeline.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipeline.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipeline.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipeline.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipeline.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipeline.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipeline.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipeline.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipeline.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipeline.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipeline.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipeline.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipeline.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipeline.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `contentConfig`<sup>Required</sup> <a name="contentConfig" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipeline.property.contentConfig"></a>

```typescript
public readonly contentConfig: ElastictranscoderPipelineContentConfigOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigOutputReference">ElastictranscoderPipelineContentConfigOutputReference</a>

---

##### `contentConfigPermissions`<sup>Required</sup> <a name="contentConfigPermissions" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipeline.property.contentConfigPermissions"></a>

```typescript
public readonly contentConfigPermissions: ElastictranscoderPipelineContentConfigPermissionsList;
```

- *Type:* <a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsList">ElastictranscoderPipelineContentConfigPermissionsList</a>

---

##### `notifications`<sup>Required</sup> <a name="notifications" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipeline.property.notifications"></a>

```typescript
public readonly notifications: ElastictranscoderPipelineNotificationsOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference">ElastictranscoderPipelineNotificationsOutputReference</a>

---

##### `thumbnailConfig`<sup>Required</sup> <a name="thumbnailConfig" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipeline.property.thumbnailConfig"></a>

```typescript
public readonly thumbnailConfig: ElastictranscoderPipelineThumbnailConfigOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigOutputReference">ElastictranscoderPipelineThumbnailConfigOutputReference</a>

---

##### `thumbnailConfigPermissions`<sup>Required</sup> <a name="thumbnailConfigPermissions" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipeline.property.thumbnailConfigPermissions"></a>

```typescript
public readonly thumbnailConfigPermissions: ElastictranscoderPipelineThumbnailConfigPermissionsList;
```

- *Type:* <a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsList">ElastictranscoderPipelineThumbnailConfigPermissionsList</a>

---

##### `awsKmsKeyArnInput`<sup>Optional</sup> <a name="awsKmsKeyArnInput" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipeline.property.awsKmsKeyArnInput"></a>

```typescript
public readonly awsKmsKeyArnInput: string;
```

- *Type:* string

---

##### `contentConfigInput`<sup>Optional</sup> <a name="contentConfigInput" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipeline.property.contentConfigInput"></a>

```typescript
public readonly contentConfigInput: ElastictranscoderPipelineContentConfig;
```

- *Type:* <a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineContentConfig">ElastictranscoderPipelineContentConfig</a>

---

##### `contentConfigPermissionsInput`<sup>Optional</sup> <a name="contentConfigPermissionsInput" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipeline.property.contentConfigPermissionsInput"></a>

```typescript
public readonly contentConfigPermissionsInput: IResolvable | ElastictranscoderPipelineContentConfigPermissions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissions">ElastictranscoderPipelineContentConfigPermissions</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipeline.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `inputBucketInput`<sup>Optional</sup> <a name="inputBucketInput" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipeline.property.inputBucketInput"></a>

```typescript
public readonly inputBucketInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipeline.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `notificationsInput`<sup>Optional</sup> <a name="notificationsInput" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipeline.property.notificationsInput"></a>

```typescript
public readonly notificationsInput: ElastictranscoderPipelineNotifications;
```

- *Type:* <a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineNotifications">ElastictranscoderPipelineNotifications</a>

---

##### `outputBucketInput`<sup>Optional</sup> <a name="outputBucketInput" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipeline.property.outputBucketInput"></a>

```typescript
public readonly outputBucketInput: string;
```

- *Type:* string

---

##### `roleInput`<sup>Optional</sup> <a name="roleInput" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipeline.property.roleInput"></a>

```typescript
public readonly roleInput: string;
```

- *Type:* string

---

##### `thumbnailConfigInput`<sup>Optional</sup> <a name="thumbnailConfigInput" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipeline.property.thumbnailConfigInput"></a>

```typescript
public readonly thumbnailConfigInput: ElastictranscoderPipelineThumbnailConfig;
```

- *Type:* <a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfig">ElastictranscoderPipelineThumbnailConfig</a>

---

##### `thumbnailConfigPermissionsInput`<sup>Optional</sup> <a name="thumbnailConfigPermissionsInput" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipeline.property.thumbnailConfigPermissionsInput"></a>

```typescript
public readonly thumbnailConfigPermissionsInput: IResolvable | ElastictranscoderPipelineThumbnailConfigPermissions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissions">ElastictranscoderPipelineThumbnailConfigPermissions</a>[]

---

##### `awsKmsKeyArn`<sup>Required</sup> <a name="awsKmsKeyArn" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipeline.property.awsKmsKeyArn"></a>

```typescript
public readonly awsKmsKeyArn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipeline.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `inputBucket`<sup>Required</sup> <a name="inputBucket" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipeline.property.inputBucket"></a>

```typescript
public readonly inputBucket: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipeline.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `outputBucket`<sup>Required</sup> <a name="outputBucket" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipeline.property.outputBucket"></a>

```typescript
public readonly outputBucket: string;
```

- *Type:* string

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipeline.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipeline.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipeline.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ElastictranscoderPipelineConfig <a name="ElastictranscoderPipelineConfig" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineConfig.Initializer"></a>

```typescript
import { elastictranscoderPipeline } from '@cdktf/aws-cdk'

const elastictranscoderPipelineConfig: elastictranscoderPipeline.ElastictranscoderPipelineConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineConfig.property.inputBucket">inputBucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/elastictranscoder_pipeline#input_bucket ElastictranscoderPipeline#input_bucket}. |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineConfig.property.role">role</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/elastictranscoder_pipeline#role ElastictranscoderPipeline#role}. |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineConfig.property.awsKmsKeyArn">awsKmsKeyArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/elastictranscoder_pipeline#aws_kms_key_arn ElastictranscoderPipeline#aws_kms_key_arn}. |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineConfig.property.contentConfig">contentConfig</a></code> | <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineContentConfig">ElastictranscoderPipelineContentConfig</a></code> | content_config block. |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineConfig.property.contentConfigPermissions">contentConfigPermissions</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissions">ElastictranscoderPipelineContentConfigPermissions</a>[]</code> | content_config_permissions block. |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/elastictranscoder_pipeline#id ElastictranscoderPipeline#id}. |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/elastictranscoder_pipeline#name ElastictranscoderPipeline#name}. |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineConfig.property.notifications">notifications</a></code> | <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineNotifications">ElastictranscoderPipelineNotifications</a></code> | notifications block. |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineConfig.property.outputBucket">outputBucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/elastictranscoder_pipeline#output_bucket ElastictranscoderPipeline#output_bucket}. |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineConfig.property.thumbnailConfig">thumbnailConfig</a></code> | <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfig">ElastictranscoderPipelineThumbnailConfig</a></code> | thumbnail_config block. |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineConfig.property.thumbnailConfigPermissions">thumbnailConfigPermissions</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissions">ElastictranscoderPipelineThumbnailConfigPermissions</a>[]</code> | thumbnail_config_permissions block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `inputBucket`<sup>Required</sup> <a name="inputBucket" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineConfig.property.inputBucket"></a>

```typescript
public readonly inputBucket: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/elastictranscoder_pipeline#input_bucket ElastictranscoderPipeline#input_bucket}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineConfig.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/elastictranscoder_pipeline#role ElastictranscoderPipeline#role}.

---

##### `awsKmsKeyArn`<sup>Optional</sup> <a name="awsKmsKeyArn" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineConfig.property.awsKmsKeyArn"></a>

```typescript
public readonly awsKmsKeyArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/elastictranscoder_pipeline#aws_kms_key_arn ElastictranscoderPipeline#aws_kms_key_arn}.

---

##### `contentConfig`<sup>Optional</sup> <a name="contentConfig" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineConfig.property.contentConfig"></a>

```typescript
public readonly contentConfig: ElastictranscoderPipelineContentConfig;
```

- *Type:* <a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineContentConfig">ElastictranscoderPipelineContentConfig</a>

content_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/elastictranscoder_pipeline#content_config ElastictranscoderPipeline#content_config}

---

##### `contentConfigPermissions`<sup>Optional</sup> <a name="contentConfigPermissions" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineConfig.property.contentConfigPermissions"></a>

```typescript
public readonly contentConfigPermissions: IResolvable | ElastictranscoderPipelineContentConfigPermissions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissions">ElastictranscoderPipelineContentConfigPermissions</a>[]

content_config_permissions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/elastictranscoder_pipeline#content_config_permissions ElastictranscoderPipeline#content_config_permissions}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/elastictranscoder_pipeline#id ElastictranscoderPipeline#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/elastictranscoder_pipeline#name ElastictranscoderPipeline#name}.

---

##### `notifications`<sup>Optional</sup> <a name="notifications" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineConfig.property.notifications"></a>

```typescript
public readonly notifications: ElastictranscoderPipelineNotifications;
```

- *Type:* <a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineNotifications">ElastictranscoderPipelineNotifications</a>

notifications block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/elastictranscoder_pipeline#notifications ElastictranscoderPipeline#notifications}

---

##### `outputBucket`<sup>Optional</sup> <a name="outputBucket" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineConfig.property.outputBucket"></a>

```typescript
public readonly outputBucket: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/elastictranscoder_pipeline#output_bucket ElastictranscoderPipeline#output_bucket}.

---

##### `thumbnailConfig`<sup>Optional</sup> <a name="thumbnailConfig" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineConfig.property.thumbnailConfig"></a>

```typescript
public readonly thumbnailConfig: ElastictranscoderPipelineThumbnailConfig;
```

- *Type:* <a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfig">ElastictranscoderPipelineThumbnailConfig</a>

thumbnail_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/elastictranscoder_pipeline#thumbnail_config ElastictranscoderPipeline#thumbnail_config}

---

##### `thumbnailConfigPermissions`<sup>Optional</sup> <a name="thumbnailConfigPermissions" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineConfig.property.thumbnailConfigPermissions"></a>

```typescript
public readonly thumbnailConfigPermissions: IResolvable | ElastictranscoderPipelineThumbnailConfigPermissions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissions">ElastictranscoderPipelineThumbnailConfigPermissions</a>[]

thumbnail_config_permissions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/elastictranscoder_pipeline#thumbnail_config_permissions ElastictranscoderPipeline#thumbnail_config_permissions}

---

### ElastictranscoderPipelineContentConfig <a name="ElastictranscoderPipelineContentConfig" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineContentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineContentConfig.Initializer"></a>

```typescript
import { elastictranscoderPipeline } from '@cdktf/aws-cdk'

const elastictranscoderPipelineContentConfig: elastictranscoderPipeline.ElastictranscoderPipelineContentConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineContentConfig.property.bucket">bucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/elastictranscoder_pipeline#bucket ElastictranscoderPipeline#bucket}. |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineContentConfig.property.storageClass">storageClass</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/elastictranscoder_pipeline#storage_class ElastictranscoderPipeline#storage_class}. |

---

##### `bucket`<sup>Optional</sup> <a name="bucket" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineContentConfig.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/elastictranscoder_pipeline#bucket ElastictranscoderPipeline#bucket}.

---

##### `storageClass`<sup>Optional</sup> <a name="storageClass" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineContentConfig.property.storageClass"></a>

```typescript
public readonly storageClass: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/elastictranscoder_pipeline#storage_class ElastictranscoderPipeline#storage_class}.

---

### ElastictranscoderPipelineContentConfigPermissions <a name="ElastictranscoderPipelineContentConfigPermissions" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissions"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissions.Initializer"></a>

```typescript
import { elastictranscoderPipeline } from '@cdktf/aws-cdk'

const elastictranscoderPipelineContentConfigPermissions: elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissions.property.access">access</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/elastictranscoder_pipeline#access ElastictranscoderPipeline#access}. |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissions.property.grantee">grantee</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/elastictranscoder_pipeline#grantee ElastictranscoderPipeline#grantee}. |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissions.property.granteeType">granteeType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/elastictranscoder_pipeline#grantee_type ElastictranscoderPipeline#grantee_type}. |

---

##### `access`<sup>Optional</sup> <a name="access" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissions.property.access"></a>

```typescript
public readonly access: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/elastictranscoder_pipeline#access ElastictranscoderPipeline#access}.

---

##### `grantee`<sup>Optional</sup> <a name="grantee" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissions.property.grantee"></a>

```typescript
public readonly grantee: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/elastictranscoder_pipeline#grantee ElastictranscoderPipeline#grantee}.

---

##### `granteeType`<sup>Optional</sup> <a name="granteeType" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissions.property.granteeType"></a>

```typescript
public readonly granteeType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/elastictranscoder_pipeline#grantee_type ElastictranscoderPipeline#grantee_type}.

---

### ElastictranscoderPipelineNotifications <a name="ElastictranscoderPipelineNotifications" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineNotifications"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineNotifications.Initializer"></a>

```typescript
import { elastictranscoderPipeline } from '@cdktf/aws-cdk'

const elastictranscoderPipelineNotifications: elastictranscoderPipeline.ElastictranscoderPipelineNotifications = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineNotifications.property.completed">completed</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/elastictranscoder_pipeline#completed ElastictranscoderPipeline#completed}. |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineNotifications.property.error">error</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/elastictranscoder_pipeline#error ElastictranscoderPipeline#error}. |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineNotifications.property.progressing">progressing</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/elastictranscoder_pipeline#progressing ElastictranscoderPipeline#progressing}. |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineNotifications.property.warning">warning</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/elastictranscoder_pipeline#warning ElastictranscoderPipeline#warning}. |

---

##### `completed`<sup>Optional</sup> <a name="completed" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineNotifications.property.completed"></a>

```typescript
public readonly completed: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/elastictranscoder_pipeline#completed ElastictranscoderPipeline#completed}.

---

##### `error`<sup>Optional</sup> <a name="error" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineNotifications.property.error"></a>

```typescript
public readonly error: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/elastictranscoder_pipeline#error ElastictranscoderPipeline#error}.

---

##### `progressing`<sup>Optional</sup> <a name="progressing" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineNotifications.property.progressing"></a>

```typescript
public readonly progressing: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/elastictranscoder_pipeline#progressing ElastictranscoderPipeline#progressing}.

---

##### `warning`<sup>Optional</sup> <a name="warning" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineNotifications.property.warning"></a>

```typescript
public readonly warning: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/elastictranscoder_pipeline#warning ElastictranscoderPipeline#warning}.

---

### ElastictranscoderPipelineThumbnailConfig <a name="ElastictranscoderPipelineThumbnailConfig" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfig.Initializer"></a>

```typescript
import { elastictranscoderPipeline } from '@cdktf/aws-cdk'

const elastictranscoderPipelineThumbnailConfig: elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfig.property.bucket">bucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/elastictranscoder_pipeline#bucket ElastictranscoderPipeline#bucket}. |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfig.property.storageClass">storageClass</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/elastictranscoder_pipeline#storage_class ElastictranscoderPipeline#storage_class}. |

---

##### `bucket`<sup>Optional</sup> <a name="bucket" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfig.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/elastictranscoder_pipeline#bucket ElastictranscoderPipeline#bucket}.

---

##### `storageClass`<sup>Optional</sup> <a name="storageClass" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfig.property.storageClass"></a>

```typescript
public readonly storageClass: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/elastictranscoder_pipeline#storage_class ElastictranscoderPipeline#storage_class}.

---

### ElastictranscoderPipelineThumbnailConfigPermissions <a name="ElastictranscoderPipelineThumbnailConfigPermissions" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissions"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissions.Initializer"></a>

```typescript
import { elastictranscoderPipeline } from '@cdktf/aws-cdk'

const elastictranscoderPipelineThumbnailConfigPermissions: elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissions.property.access">access</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/elastictranscoder_pipeline#access ElastictranscoderPipeline#access}. |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissions.property.grantee">grantee</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/elastictranscoder_pipeline#grantee ElastictranscoderPipeline#grantee}. |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissions.property.granteeType">granteeType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/elastictranscoder_pipeline#grantee_type ElastictranscoderPipeline#grantee_type}. |

---

##### `access`<sup>Optional</sup> <a name="access" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissions.property.access"></a>

```typescript
public readonly access: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/elastictranscoder_pipeline#access ElastictranscoderPipeline#access}.

---

##### `grantee`<sup>Optional</sup> <a name="grantee" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissions.property.grantee"></a>

```typescript
public readonly grantee: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/elastictranscoder_pipeline#grantee ElastictranscoderPipeline#grantee}.

---

##### `granteeType`<sup>Optional</sup> <a name="granteeType" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissions.property.granteeType"></a>

```typescript
public readonly granteeType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/elastictranscoder_pipeline#grantee_type ElastictranscoderPipeline#grantee_type}.

---

## Classes <a name="Classes" id="Classes"></a>

### ElastictranscoderPipelineContentConfigOutputReference <a name="ElastictranscoderPipelineContentConfigOutputReference" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigOutputReference.Initializer"></a>

```typescript
import { elastictranscoderPipeline } from '@cdktf/aws-cdk'

new elastictranscoderPipeline.ElastictranscoderPipelineContentConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigOutputReference.resetBucket">resetBucket</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigOutputReference.resetStorageClass">resetStorageClass</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBucket` <a name="resetBucket" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigOutputReference.resetBucket"></a>

```typescript
public resetBucket(): void
```

##### `resetStorageClass` <a name="resetStorageClass" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigOutputReference.resetStorageClass"></a>

```typescript
public resetStorageClass(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigOutputReference.property.bucketInput">bucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigOutputReference.property.storageClassInput">storageClassInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigOutputReference.property.bucket">bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigOutputReference.property.storageClass">storageClass</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineContentConfig">ElastictranscoderPipelineContentConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigOutputReference.property.bucketInput"></a>

```typescript
public readonly bucketInput: string;
```

- *Type:* string

---

##### `storageClassInput`<sup>Optional</sup> <a name="storageClassInput" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigOutputReference.property.storageClassInput"></a>

```typescript
public readonly storageClassInput: string;
```

- *Type:* string

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigOutputReference.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

---

##### `storageClass`<sup>Required</sup> <a name="storageClass" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigOutputReference.property.storageClass"></a>

```typescript
public readonly storageClass: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ElastictranscoderPipelineContentConfig;
```

- *Type:* <a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineContentConfig">ElastictranscoderPipelineContentConfig</a>

---


### ElastictranscoderPipelineContentConfigPermissionsList <a name="ElastictranscoderPipelineContentConfigPermissionsList" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsList.Initializer"></a>

```typescript
import { elastictranscoderPipeline } from '@cdktf/aws-cdk'

new elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsList.get"></a>

```typescript
public get(index: number): ElastictranscoderPipelineContentConfigPermissionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissions">ElastictranscoderPipelineContentConfigPermissions</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ElastictranscoderPipelineContentConfigPermissions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissions">ElastictranscoderPipelineContentConfigPermissions</a>[]

---


### ElastictranscoderPipelineContentConfigPermissionsOutputReference <a name="ElastictranscoderPipelineContentConfigPermissionsOutputReference" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.Initializer"></a>

```typescript
import { elastictranscoderPipeline } from '@cdktf/aws-cdk'

new elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.resetAccess">resetAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.resetGrantee">resetGrantee</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.resetGranteeType">resetGranteeType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAccess` <a name="resetAccess" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.resetAccess"></a>

```typescript
public resetAccess(): void
```

##### `resetGrantee` <a name="resetGrantee" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.resetGrantee"></a>

```typescript
public resetGrantee(): void
```

##### `resetGranteeType` <a name="resetGranteeType" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.resetGranteeType"></a>

```typescript
public resetGranteeType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.property.accessInput">accessInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.property.granteeInput">granteeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.property.granteeTypeInput">granteeTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.property.access">access</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.property.grantee">grantee</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.property.granteeType">granteeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissions">ElastictranscoderPipelineContentConfigPermissions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accessInput`<sup>Optional</sup> <a name="accessInput" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.property.accessInput"></a>

```typescript
public readonly accessInput: string[];
```

- *Type:* string[]

---

##### `granteeInput`<sup>Optional</sup> <a name="granteeInput" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.property.granteeInput"></a>

```typescript
public readonly granteeInput: string;
```

- *Type:* string

---

##### `granteeTypeInput`<sup>Optional</sup> <a name="granteeTypeInput" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.property.granteeTypeInput"></a>

```typescript
public readonly granteeTypeInput: string;
```

- *Type:* string

---

##### `access`<sup>Required</sup> <a name="access" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.property.access"></a>

```typescript
public readonly access: string[];
```

- *Type:* string[]

---

##### `grantee`<sup>Required</sup> <a name="grantee" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.property.grantee"></a>

```typescript
public readonly grantee: string;
```

- *Type:* string

---

##### `granteeType`<sup>Required</sup> <a name="granteeType" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.property.granteeType"></a>

```typescript
public readonly granteeType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ElastictranscoderPipelineContentConfigPermissions;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineContentConfigPermissions">ElastictranscoderPipelineContentConfigPermissions</a>

---


### ElastictranscoderPipelineNotificationsOutputReference <a name="ElastictranscoderPipelineNotificationsOutputReference" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.Initializer"></a>

```typescript
import { elastictranscoderPipeline } from '@cdktf/aws-cdk'

new elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.resetCompleted">resetCompleted</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.resetError">resetError</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.resetProgressing">resetProgressing</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.resetWarning">resetWarning</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCompleted` <a name="resetCompleted" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.resetCompleted"></a>

```typescript
public resetCompleted(): void
```

##### `resetError` <a name="resetError" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.resetError"></a>

```typescript
public resetError(): void
```

##### `resetProgressing` <a name="resetProgressing" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.resetProgressing"></a>

```typescript
public resetProgressing(): void
```

##### `resetWarning` <a name="resetWarning" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.resetWarning"></a>

```typescript
public resetWarning(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.property.completedInput">completedInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.property.errorInput">errorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.property.progressingInput">progressingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.property.warningInput">warningInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.property.completed">completed</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.property.error">error</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.property.progressing">progressing</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.property.warning">warning</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineNotifications">ElastictranscoderPipelineNotifications</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `completedInput`<sup>Optional</sup> <a name="completedInput" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.property.completedInput"></a>

```typescript
public readonly completedInput: string;
```

- *Type:* string

---

##### `errorInput`<sup>Optional</sup> <a name="errorInput" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.property.errorInput"></a>

```typescript
public readonly errorInput: string;
```

- *Type:* string

---

##### `progressingInput`<sup>Optional</sup> <a name="progressingInput" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.property.progressingInput"></a>

```typescript
public readonly progressingInput: string;
```

- *Type:* string

---

##### `warningInput`<sup>Optional</sup> <a name="warningInput" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.property.warningInput"></a>

```typescript
public readonly warningInput: string;
```

- *Type:* string

---

##### `completed`<sup>Required</sup> <a name="completed" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.property.completed"></a>

```typescript
public readonly completed: string;
```

- *Type:* string

---

##### `error`<sup>Required</sup> <a name="error" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.property.error"></a>

```typescript
public readonly error: string;
```

- *Type:* string

---

##### `progressing`<sup>Required</sup> <a name="progressing" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.property.progressing"></a>

```typescript
public readonly progressing: string;
```

- *Type:* string

---

##### `warning`<sup>Required</sup> <a name="warning" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.property.warning"></a>

```typescript
public readonly warning: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineNotificationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ElastictranscoderPipelineNotifications;
```

- *Type:* <a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineNotifications">ElastictranscoderPipelineNotifications</a>

---


### ElastictranscoderPipelineThumbnailConfigOutputReference <a name="ElastictranscoderPipelineThumbnailConfigOutputReference" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigOutputReference.Initializer"></a>

```typescript
import { elastictranscoderPipeline } from '@cdktf/aws-cdk'

new elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigOutputReference.resetBucket">resetBucket</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigOutputReference.resetStorageClass">resetStorageClass</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBucket` <a name="resetBucket" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigOutputReference.resetBucket"></a>

```typescript
public resetBucket(): void
```

##### `resetStorageClass` <a name="resetStorageClass" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigOutputReference.resetStorageClass"></a>

```typescript
public resetStorageClass(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigOutputReference.property.bucketInput">bucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigOutputReference.property.storageClassInput">storageClassInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigOutputReference.property.bucket">bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigOutputReference.property.storageClass">storageClass</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfig">ElastictranscoderPipelineThumbnailConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigOutputReference.property.bucketInput"></a>

```typescript
public readonly bucketInput: string;
```

- *Type:* string

---

##### `storageClassInput`<sup>Optional</sup> <a name="storageClassInput" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigOutputReference.property.storageClassInput"></a>

```typescript
public readonly storageClassInput: string;
```

- *Type:* string

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigOutputReference.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

---

##### `storageClass`<sup>Required</sup> <a name="storageClass" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigOutputReference.property.storageClass"></a>

```typescript
public readonly storageClass: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ElastictranscoderPipelineThumbnailConfig;
```

- *Type:* <a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfig">ElastictranscoderPipelineThumbnailConfig</a>

---


### ElastictranscoderPipelineThumbnailConfigPermissionsList <a name="ElastictranscoderPipelineThumbnailConfigPermissionsList" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsList.Initializer"></a>

```typescript
import { elastictranscoderPipeline } from '@cdktf/aws-cdk'

new elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsList.get"></a>

```typescript
public get(index: number): ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissions">ElastictranscoderPipelineThumbnailConfigPermissions</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ElastictranscoderPipelineThumbnailConfigPermissions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissions">ElastictranscoderPipelineThumbnailConfigPermissions</a>[]

---


### ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference <a name="ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.Initializer"></a>

```typescript
import { elastictranscoderPipeline } from '@cdktf/aws-cdk'

new elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.resetAccess">resetAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.resetGrantee">resetGrantee</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.resetGranteeType">resetGranteeType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAccess` <a name="resetAccess" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.resetAccess"></a>

```typescript
public resetAccess(): void
```

##### `resetGrantee` <a name="resetGrantee" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.resetGrantee"></a>

```typescript
public resetGrantee(): void
```

##### `resetGranteeType` <a name="resetGranteeType" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.resetGranteeType"></a>

```typescript
public resetGranteeType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.property.accessInput">accessInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.property.granteeInput">granteeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.property.granteeTypeInput">granteeTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.property.access">access</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.property.grantee">grantee</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.property.granteeType">granteeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissions">ElastictranscoderPipelineThumbnailConfigPermissions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accessInput`<sup>Optional</sup> <a name="accessInput" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.property.accessInput"></a>

```typescript
public readonly accessInput: string[];
```

- *Type:* string[]

---

##### `granteeInput`<sup>Optional</sup> <a name="granteeInput" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.property.granteeInput"></a>

```typescript
public readonly granteeInput: string;
```

- *Type:* string

---

##### `granteeTypeInput`<sup>Optional</sup> <a name="granteeTypeInput" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.property.granteeTypeInput"></a>

```typescript
public readonly granteeTypeInput: string;
```

- *Type:* string

---

##### `access`<sup>Required</sup> <a name="access" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.property.access"></a>

```typescript
public readonly access: string[];
```

- *Type:* string[]

---

##### `grantee`<sup>Required</sup> <a name="grantee" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.property.grantee"></a>

```typescript
public readonly grantee: string;
```

- *Type:* string

---

##### `granteeType`<sup>Required</sup> <a name="granteeType" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.property.granteeType"></a>

```typescript
public readonly granteeType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ElastictranscoderPipelineThumbnailConfigPermissions;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.elastictranscoderPipeline.ElastictranscoderPipelineThumbnailConfigPermissions">ElastictranscoderPipelineThumbnailConfigPermissions</a>

---



