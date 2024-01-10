# `sagemakerModel` Submodule <a name="`sagemakerModel` Submodule" id="@cdktf/aws-cdk.sagemakerModel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SagemakerModel <a name="SagemakerModel" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModel"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_model aws_sagemaker_model}.

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModel.Initializer"></a>

```typescript
import { sagemakerModel } from '@cdktf/aws-cdk'

new sagemakerModel.SagemakerModel(scope: Construct, id: string, config: SagemakerModelConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModel.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModel.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModel.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModelConfig">SagemakerModelConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModel.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModel.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModel.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModelConfig">SagemakerModelConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModel.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModel.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModel.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModel.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModel.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModel.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModel.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModel.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModel.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModel.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModel.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModel.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModel.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModel.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModel.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModel.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModel.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModel.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModel.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModel.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModel.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModel.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModel.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModel.putContainer">putContainer</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModel.putInferenceExecutionConfig">putInferenceExecutionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModel.putPrimaryContainer">putPrimaryContainer</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModel.putVpcConfig">putVpcConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModel.resetContainer">resetContainer</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModel.resetEnableNetworkIsolation">resetEnableNetworkIsolation</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModel.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModel.resetInferenceExecutionConfig">resetInferenceExecutionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModel.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModel.resetPrimaryContainer">resetPrimaryContainer</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModel.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModel.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModel.resetVpcConfig">resetVpcConfig</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModel.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModel.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModel.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModel.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModel.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModel.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModel.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModel.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModel.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModel.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModel.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModel.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModel.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModel.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModel.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModel.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModel.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModel.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModel.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModel.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModel.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModel.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModel.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModel.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModel.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModel.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModel.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModel.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModel.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModel.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModel.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModel.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putContainer` <a name="putContainer" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModel.putContainer"></a>

```typescript
public putContainer(value: IResolvable | SagemakerModelContainer[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModel.putContainer.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModelContainer">SagemakerModelContainer</a>[]

---

##### `putInferenceExecutionConfig` <a name="putInferenceExecutionConfig" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModel.putInferenceExecutionConfig"></a>

```typescript
public putInferenceExecutionConfig(value: SagemakerModelInferenceExecutionConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModel.putInferenceExecutionConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModelInferenceExecutionConfig">SagemakerModelInferenceExecutionConfig</a>

---

##### `putPrimaryContainer` <a name="putPrimaryContainer" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModel.putPrimaryContainer"></a>

```typescript
public putPrimaryContainer(value: SagemakerModelPrimaryContainer): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModel.putPrimaryContainer.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModelPrimaryContainer">SagemakerModelPrimaryContainer</a>

---

##### `putVpcConfig` <a name="putVpcConfig" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModel.putVpcConfig"></a>

```typescript
public putVpcConfig(value: SagemakerModelVpcConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModel.putVpcConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModelVpcConfig">SagemakerModelVpcConfig</a>

---

##### `resetContainer` <a name="resetContainer" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModel.resetContainer"></a>

```typescript
public resetContainer(): void
```

##### `resetEnableNetworkIsolation` <a name="resetEnableNetworkIsolation" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModel.resetEnableNetworkIsolation"></a>

```typescript
public resetEnableNetworkIsolation(): void
```

##### `resetId` <a name="resetId" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModel.resetId"></a>

```typescript
public resetId(): void
```

##### `resetInferenceExecutionConfig` <a name="resetInferenceExecutionConfig" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModel.resetInferenceExecutionConfig"></a>

```typescript
public resetInferenceExecutionConfig(): void
```

##### `resetName` <a name="resetName" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModel.resetName"></a>

```typescript
public resetName(): void
```

##### `resetPrimaryContainer` <a name="resetPrimaryContainer" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModel.resetPrimaryContainer"></a>

```typescript
public resetPrimaryContainer(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModel.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModel.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

##### `resetVpcConfig` <a name="resetVpcConfig" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModel.resetVpcConfig"></a>

```typescript
public resetVpcConfig(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModel.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModel.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModel.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModel.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a SagemakerModel resource upon running "cdktf plan <stack-name>". |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModel.isConstruct"></a>

```typescript
import { sagemakerModel } from '@cdktf/aws-cdk'

sagemakerModel.SagemakerModel.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModel.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModel.isTerraformElement"></a>

```typescript
import { sagemakerModel } from '@cdktf/aws-cdk'

sagemakerModel.SagemakerModel.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModel.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModel.isTerraformResource"></a>

```typescript
import { sagemakerModel } from '@cdktf/aws-cdk'

sagemakerModel.SagemakerModel.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModel.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModel.generateConfigForImport"></a>

```typescript
import { sagemakerModel } from '@cdktf/aws-cdk'

sagemakerModel.SagemakerModel.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a SagemakerModel resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModel.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModel.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SagemakerModel to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModel.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SagemakerModel that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_model#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModel.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the SagemakerModel to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModel.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModel.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModel.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModel.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModel.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModel.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModel.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModel.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModel.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModel.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModel.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModel.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModel.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModel.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModel.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModel.property.container">container</a></code> | <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModelContainerList">SagemakerModelContainerList</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModel.property.inferenceExecutionConfig">inferenceExecutionConfig</a></code> | <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference">SagemakerModelInferenceExecutionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModel.property.primaryContainer">primaryContainer</a></code> | <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModelPrimaryContainerOutputReference">SagemakerModelPrimaryContainerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModel.property.vpcConfig">vpcConfig</a></code> | <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModelVpcConfigOutputReference">SagemakerModelVpcConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModel.property.containerInput">containerInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModelContainer">SagemakerModelContainer</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModel.property.enableNetworkIsolationInput">enableNetworkIsolationInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModel.property.executionRoleArnInput">executionRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModel.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModel.property.inferenceExecutionConfigInput">inferenceExecutionConfigInput</a></code> | <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModelInferenceExecutionConfig">SagemakerModelInferenceExecutionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModel.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModel.property.primaryContainerInput">primaryContainerInput</a></code> | <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModelPrimaryContainer">SagemakerModelPrimaryContainer</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModel.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModel.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModel.property.vpcConfigInput">vpcConfigInput</a></code> | <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModelVpcConfig">SagemakerModelVpcConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModel.property.enableNetworkIsolation">enableNetworkIsolation</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModel.property.executionRoleArn">executionRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModel.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModel.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModel.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModel.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModel.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModel.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModel.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModel.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModel.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModel.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModel.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModel.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModel.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModel.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModel.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModel.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModel.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModel.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModel.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `container`<sup>Required</sup> <a name="container" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModel.property.container"></a>

```typescript
public readonly container: SagemakerModelContainerList;
```

- *Type:* <a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModelContainerList">SagemakerModelContainerList</a>

---

##### `inferenceExecutionConfig`<sup>Required</sup> <a name="inferenceExecutionConfig" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModel.property.inferenceExecutionConfig"></a>

```typescript
public readonly inferenceExecutionConfig: SagemakerModelInferenceExecutionConfigOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference">SagemakerModelInferenceExecutionConfigOutputReference</a>

---

##### `primaryContainer`<sup>Required</sup> <a name="primaryContainer" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModel.property.primaryContainer"></a>

```typescript
public readonly primaryContainer: SagemakerModelPrimaryContainerOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModelPrimaryContainerOutputReference">SagemakerModelPrimaryContainerOutputReference</a>

---

##### `vpcConfig`<sup>Required</sup> <a name="vpcConfig" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModel.property.vpcConfig"></a>

```typescript
public readonly vpcConfig: SagemakerModelVpcConfigOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModelVpcConfigOutputReference">SagemakerModelVpcConfigOutputReference</a>

---

##### `containerInput`<sup>Optional</sup> <a name="containerInput" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModel.property.containerInput"></a>

```typescript
public readonly containerInput: IResolvable | SagemakerModelContainer[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModelContainer">SagemakerModelContainer</a>[]

---

##### `enableNetworkIsolationInput`<sup>Optional</sup> <a name="enableNetworkIsolationInput" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModel.property.enableNetworkIsolationInput"></a>

```typescript
public readonly enableNetworkIsolationInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `executionRoleArnInput`<sup>Optional</sup> <a name="executionRoleArnInput" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModel.property.executionRoleArnInput"></a>

```typescript
public readonly executionRoleArnInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModel.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `inferenceExecutionConfigInput`<sup>Optional</sup> <a name="inferenceExecutionConfigInput" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModel.property.inferenceExecutionConfigInput"></a>

```typescript
public readonly inferenceExecutionConfigInput: SagemakerModelInferenceExecutionConfig;
```

- *Type:* <a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModelInferenceExecutionConfig">SagemakerModelInferenceExecutionConfig</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModel.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `primaryContainerInput`<sup>Optional</sup> <a name="primaryContainerInput" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModel.property.primaryContainerInput"></a>

```typescript
public readonly primaryContainerInput: SagemakerModelPrimaryContainer;
```

- *Type:* <a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModelPrimaryContainer">SagemakerModelPrimaryContainer</a>

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModel.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModel.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `vpcConfigInput`<sup>Optional</sup> <a name="vpcConfigInput" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModel.property.vpcConfigInput"></a>

```typescript
public readonly vpcConfigInput: SagemakerModelVpcConfig;
```

- *Type:* <a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModelVpcConfig">SagemakerModelVpcConfig</a>

---

##### `enableNetworkIsolation`<sup>Required</sup> <a name="enableNetworkIsolation" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModel.property.enableNetworkIsolation"></a>

```typescript
public readonly enableNetworkIsolation: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `executionRoleArn`<sup>Required</sup> <a name="executionRoleArn" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModel.property.executionRoleArn"></a>

```typescript
public readonly executionRoleArn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModel.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModel.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModel.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModel.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModel.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModel.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SagemakerModelConfig <a name="SagemakerModelConfig" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelConfig.Initializer"></a>

```typescript
import { sagemakerModel } from '@cdktf/aws-cdk'

const sagemakerModelConfig: sagemakerModel.SagemakerModelConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModelConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModelConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModelConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModelConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModelConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModelConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModelConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModelConfig.property.executionRoleArn">executionRoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_model#execution_role_arn SagemakerModel#execution_role_arn}. |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModelConfig.property.container">container</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModelContainer">SagemakerModelContainer</a>[]</code> | container block. |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModelConfig.property.enableNetworkIsolation">enableNetworkIsolation</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_model#enable_network_isolation SagemakerModel#enable_network_isolation}. |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModelConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_model#id SagemakerModel#id}. |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModelConfig.property.inferenceExecutionConfig">inferenceExecutionConfig</a></code> | <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModelInferenceExecutionConfig">SagemakerModelInferenceExecutionConfig</a></code> | inference_execution_config block. |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModelConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_model#name SagemakerModel#name}. |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModelConfig.property.primaryContainer">primaryContainer</a></code> | <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModelPrimaryContainer">SagemakerModelPrimaryContainer</a></code> | primary_container block. |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModelConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_model#tags SagemakerModel#tags}. |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModelConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_model#tags_all SagemakerModel#tags_all}. |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModelConfig.property.vpcConfig">vpcConfig</a></code> | <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModelVpcConfig">SagemakerModelVpcConfig</a></code> | vpc_config block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `executionRoleArn`<sup>Required</sup> <a name="executionRoleArn" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelConfig.property.executionRoleArn"></a>

```typescript
public readonly executionRoleArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_model#execution_role_arn SagemakerModel#execution_role_arn}.

---

##### `container`<sup>Optional</sup> <a name="container" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelConfig.property.container"></a>

```typescript
public readonly container: IResolvable | SagemakerModelContainer[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModelContainer">SagemakerModelContainer</a>[]

container block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_model#container SagemakerModel#container}

---

##### `enableNetworkIsolation`<sup>Optional</sup> <a name="enableNetworkIsolation" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelConfig.property.enableNetworkIsolation"></a>

```typescript
public readonly enableNetworkIsolation: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_model#enable_network_isolation SagemakerModel#enable_network_isolation}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_model#id SagemakerModel#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `inferenceExecutionConfig`<sup>Optional</sup> <a name="inferenceExecutionConfig" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelConfig.property.inferenceExecutionConfig"></a>

```typescript
public readonly inferenceExecutionConfig: SagemakerModelInferenceExecutionConfig;
```

- *Type:* <a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModelInferenceExecutionConfig">SagemakerModelInferenceExecutionConfig</a>

inference_execution_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_model#inference_execution_config SagemakerModel#inference_execution_config}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_model#name SagemakerModel#name}.

---

##### `primaryContainer`<sup>Optional</sup> <a name="primaryContainer" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelConfig.property.primaryContainer"></a>

```typescript
public readonly primaryContainer: SagemakerModelPrimaryContainer;
```

- *Type:* <a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModelPrimaryContainer">SagemakerModelPrimaryContainer</a>

primary_container block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_model#primary_container SagemakerModel#primary_container}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_model#tags SagemakerModel#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_model#tags_all SagemakerModel#tags_all}.

---

##### `vpcConfig`<sup>Optional</sup> <a name="vpcConfig" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelConfig.property.vpcConfig"></a>

```typescript
public readonly vpcConfig: SagemakerModelVpcConfig;
```

- *Type:* <a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModelVpcConfig">SagemakerModelVpcConfig</a>

vpc_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_model#vpc_config SagemakerModel#vpc_config}

---

### SagemakerModelContainer <a name="SagemakerModelContainer" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelContainer"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelContainer.Initializer"></a>

```typescript
import { sagemakerModel } from '@cdktf/aws-cdk'

const sagemakerModelContainer: sagemakerModel.SagemakerModelContainer = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModelContainer.property.image">image</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_model#image SagemakerModel#image}. |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModelContainer.property.containerHostname">containerHostname</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_model#container_hostname SagemakerModel#container_hostname}. |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModelContainer.property.environment">environment</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_model#environment SagemakerModel#environment}. |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModelContainer.property.imageConfig">imageConfig</a></code> | <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModelContainerImageConfig">SagemakerModelContainerImageConfig</a></code> | image_config block. |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModelContainer.property.mode">mode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_model#mode SagemakerModel#mode}. |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModelContainer.property.modelDataUrl">modelDataUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_model#model_data_url SagemakerModel#model_data_url}. |

---

##### `image`<sup>Required</sup> <a name="image" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelContainer.property.image"></a>

```typescript
public readonly image: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_model#image SagemakerModel#image}.

---

##### `containerHostname`<sup>Optional</sup> <a name="containerHostname" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelContainer.property.containerHostname"></a>

```typescript
public readonly containerHostname: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_model#container_hostname SagemakerModel#container_hostname}.

---

##### `environment`<sup>Optional</sup> <a name="environment" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelContainer.property.environment"></a>

```typescript
public readonly environment: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_model#environment SagemakerModel#environment}.

---

##### `imageConfig`<sup>Optional</sup> <a name="imageConfig" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelContainer.property.imageConfig"></a>

```typescript
public readonly imageConfig: SagemakerModelContainerImageConfig;
```

- *Type:* <a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModelContainerImageConfig">SagemakerModelContainerImageConfig</a>

image_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_model#image_config SagemakerModel#image_config}

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelContainer.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_model#mode SagemakerModel#mode}.

---

##### `modelDataUrl`<sup>Optional</sup> <a name="modelDataUrl" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelContainer.property.modelDataUrl"></a>

```typescript
public readonly modelDataUrl: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_model#model_data_url SagemakerModel#model_data_url}.

---

### SagemakerModelContainerImageConfig <a name="SagemakerModelContainerImageConfig" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelContainerImageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelContainerImageConfig.Initializer"></a>

```typescript
import { sagemakerModel } from '@cdktf/aws-cdk'

const sagemakerModelContainerImageConfig: sagemakerModel.SagemakerModelContainerImageConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModelContainerImageConfig.property.repositoryAccessMode">repositoryAccessMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_model#repository_access_mode SagemakerModel#repository_access_mode}. |

---

##### `repositoryAccessMode`<sup>Required</sup> <a name="repositoryAccessMode" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelContainerImageConfig.property.repositoryAccessMode"></a>

```typescript
public readonly repositoryAccessMode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_model#repository_access_mode SagemakerModel#repository_access_mode}.

---

### SagemakerModelInferenceExecutionConfig <a name="SagemakerModelInferenceExecutionConfig" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelInferenceExecutionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelInferenceExecutionConfig.Initializer"></a>

```typescript
import { sagemakerModel } from '@cdktf/aws-cdk'

const sagemakerModelInferenceExecutionConfig: sagemakerModel.SagemakerModelInferenceExecutionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModelInferenceExecutionConfig.property.mode">mode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_model#mode SagemakerModel#mode}. |

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelInferenceExecutionConfig.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_model#mode SagemakerModel#mode}.

---

### SagemakerModelPrimaryContainer <a name="SagemakerModelPrimaryContainer" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelPrimaryContainer"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelPrimaryContainer.Initializer"></a>

```typescript
import { sagemakerModel } from '@cdktf/aws-cdk'

const sagemakerModelPrimaryContainer: sagemakerModel.SagemakerModelPrimaryContainer = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModelPrimaryContainer.property.image">image</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_model#image SagemakerModel#image}. |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModelPrimaryContainer.property.containerHostname">containerHostname</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_model#container_hostname SagemakerModel#container_hostname}. |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModelPrimaryContainer.property.environment">environment</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_model#environment SagemakerModel#environment}. |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModelPrimaryContainer.property.imageConfig">imageConfig</a></code> | <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModelPrimaryContainerImageConfig">SagemakerModelPrimaryContainerImageConfig</a></code> | image_config block. |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModelPrimaryContainer.property.mode">mode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_model#mode SagemakerModel#mode}. |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModelPrimaryContainer.property.modelDataUrl">modelDataUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_model#model_data_url SagemakerModel#model_data_url}. |

---

##### `image`<sup>Required</sup> <a name="image" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelPrimaryContainer.property.image"></a>

```typescript
public readonly image: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_model#image SagemakerModel#image}.

---

##### `containerHostname`<sup>Optional</sup> <a name="containerHostname" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelPrimaryContainer.property.containerHostname"></a>

```typescript
public readonly containerHostname: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_model#container_hostname SagemakerModel#container_hostname}.

---

##### `environment`<sup>Optional</sup> <a name="environment" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelPrimaryContainer.property.environment"></a>

```typescript
public readonly environment: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_model#environment SagemakerModel#environment}.

---

##### `imageConfig`<sup>Optional</sup> <a name="imageConfig" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelPrimaryContainer.property.imageConfig"></a>

```typescript
public readonly imageConfig: SagemakerModelPrimaryContainerImageConfig;
```

- *Type:* <a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModelPrimaryContainerImageConfig">SagemakerModelPrimaryContainerImageConfig</a>

image_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_model#image_config SagemakerModel#image_config}

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelPrimaryContainer.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_model#mode SagemakerModel#mode}.

---

##### `modelDataUrl`<sup>Optional</sup> <a name="modelDataUrl" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelPrimaryContainer.property.modelDataUrl"></a>

```typescript
public readonly modelDataUrl: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_model#model_data_url SagemakerModel#model_data_url}.

---

### SagemakerModelPrimaryContainerImageConfig <a name="SagemakerModelPrimaryContainerImageConfig" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelPrimaryContainerImageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelPrimaryContainerImageConfig.Initializer"></a>

```typescript
import { sagemakerModel } from '@cdktf/aws-cdk'

const sagemakerModelPrimaryContainerImageConfig: sagemakerModel.SagemakerModelPrimaryContainerImageConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModelPrimaryContainerImageConfig.property.repositoryAccessMode">repositoryAccessMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_model#repository_access_mode SagemakerModel#repository_access_mode}. |

---

##### `repositoryAccessMode`<sup>Required</sup> <a name="repositoryAccessMode" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelPrimaryContainerImageConfig.property.repositoryAccessMode"></a>

```typescript
public readonly repositoryAccessMode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_model#repository_access_mode SagemakerModel#repository_access_mode}.

---

### SagemakerModelVpcConfig <a name="SagemakerModelVpcConfig" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelVpcConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelVpcConfig.Initializer"></a>

```typescript
import { sagemakerModel } from '@cdktf/aws-cdk'

const sagemakerModelVpcConfig: sagemakerModel.SagemakerModelVpcConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModelVpcConfig.property.securityGroupIds">securityGroupIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_model#security_group_ids SagemakerModel#security_group_ids}. |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModelVpcConfig.property.subnets">subnets</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_model#subnets SagemakerModel#subnets}. |

---

##### `securityGroupIds`<sup>Required</sup> <a name="securityGroupIds" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelVpcConfig.property.securityGroupIds"></a>

```typescript
public readonly securityGroupIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_model#security_group_ids SagemakerModel#security_group_ids}.

---

##### `subnets`<sup>Required</sup> <a name="subnets" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelVpcConfig.property.subnets"></a>

```typescript
public readonly subnets: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_model#subnets SagemakerModel#subnets}.

---

## Classes <a name="Classes" id="Classes"></a>

### SagemakerModelContainerImageConfigOutputReference <a name="SagemakerModelContainerImageConfigOutputReference" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelContainerImageConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelContainerImageConfigOutputReference.Initializer"></a>

```typescript
import { sagemakerModel } from '@cdktf/aws-cdk'

new sagemakerModel.SagemakerModelContainerImageConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModelContainerImageConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModelContainerImageConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelContainerImageConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelContainerImageConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModelContainerImageConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModelContainerImageConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModelContainerImageConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModelContainerImageConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModelContainerImageConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModelContainerImageConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModelContainerImageConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModelContainerImageConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModelContainerImageConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModelContainerImageConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModelContainerImageConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModelContainerImageConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModelContainerImageConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelContainerImageConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelContainerImageConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelContainerImageConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelContainerImageConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelContainerImageConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelContainerImageConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelContainerImageConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelContainerImageConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelContainerImageConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelContainerImageConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelContainerImageConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelContainerImageConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelContainerImageConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelContainerImageConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelContainerImageConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelContainerImageConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelContainerImageConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelContainerImageConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelContainerImageConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelContainerImageConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelContainerImageConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelContainerImageConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelContainerImageConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelContainerImageConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModelContainerImageConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModelContainerImageConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModelContainerImageConfigOutputReference.property.repositoryAccessModeInput">repositoryAccessModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModelContainerImageConfigOutputReference.property.repositoryAccessMode">repositoryAccessMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModelContainerImageConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModelContainerImageConfig">SagemakerModelContainerImageConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelContainerImageConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelContainerImageConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `repositoryAccessModeInput`<sup>Optional</sup> <a name="repositoryAccessModeInput" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelContainerImageConfigOutputReference.property.repositoryAccessModeInput"></a>

```typescript
public readonly repositoryAccessModeInput: string;
```

- *Type:* string

---

##### `repositoryAccessMode`<sup>Required</sup> <a name="repositoryAccessMode" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelContainerImageConfigOutputReference.property.repositoryAccessMode"></a>

```typescript
public readonly repositoryAccessMode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelContainerImageConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SagemakerModelContainerImageConfig;
```

- *Type:* <a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModelContainerImageConfig">SagemakerModelContainerImageConfig</a>

---


### SagemakerModelContainerList <a name="SagemakerModelContainerList" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelContainerList"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelContainerList.Initializer"></a>

```typescript
import { sagemakerModel } from '@cdktf/aws-cdk'

new sagemakerModel.SagemakerModelContainerList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModelContainerList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModelContainerList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModelContainerList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelContainerList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelContainerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelContainerList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModelContainerList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModelContainerList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModelContainerList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModelContainerList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModelContainerList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelContainerList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelContainerList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelContainerList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelContainerList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelContainerList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelContainerList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelContainerList.get"></a>

```typescript
public get(index: number): SagemakerModelContainerOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelContainerList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModelContainerList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModelContainerList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModelContainerList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModelContainer">SagemakerModelContainer</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelContainerList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelContainerList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelContainerList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerModelContainer[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModelContainer">SagemakerModelContainer</a>[]

---


### SagemakerModelContainerOutputReference <a name="SagemakerModelContainerOutputReference" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelContainerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelContainerOutputReference.Initializer"></a>

```typescript
import { sagemakerModel } from '@cdktf/aws-cdk'

new sagemakerModel.SagemakerModelContainerOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModelContainerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModelContainerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModelContainerOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModelContainerOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelContainerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelContainerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelContainerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelContainerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModelContainerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModelContainerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModelContainerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModelContainerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModelContainerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModelContainerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModelContainerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModelContainerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModelContainerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModelContainerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModelContainerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModelContainerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModelContainerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModelContainerOutputReference.putImageConfig">putImageConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModelContainerOutputReference.resetContainerHostname">resetContainerHostname</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModelContainerOutputReference.resetEnvironment">resetEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModelContainerOutputReference.resetImageConfig">resetImageConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModelContainerOutputReference.resetMode">resetMode</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModelContainerOutputReference.resetModelDataUrl">resetModelDataUrl</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelContainerOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelContainerOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelContainerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelContainerOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelContainerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelContainerOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelContainerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelContainerOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelContainerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelContainerOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelContainerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelContainerOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelContainerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelContainerOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelContainerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelContainerOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelContainerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelContainerOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelContainerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelContainerOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelContainerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelContainerOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelContainerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelContainerOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putImageConfig` <a name="putImageConfig" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelContainerOutputReference.putImageConfig"></a>

```typescript
public putImageConfig(value: SagemakerModelContainerImageConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelContainerOutputReference.putImageConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModelContainerImageConfig">SagemakerModelContainerImageConfig</a>

---

##### `resetContainerHostname` <a name="resetContainerHostname" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelContainerOutputReference.resetContainerHostname"></a>

```typescript
public resetContainerHostname(): void
```

##### `resetEnvironment` <a name="resetEnvironment" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelContainerOutputReference.resetEnvironment"></a>

```typescript
public resetEnvironment(): void
```

##### `resetImageConfig` <a name="resetImageConfig" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelContainerOutputReference.resetImageConfig"></a>

```typescript
public resetImageConfig(): void
```

##### `resetMode` <a name="resetMode" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelContainerOutputReference.resetMode"></a>

```typescript
public resetMode(): void
```

##### `resetModelDataUrl` <a name="resetModelDataUrl" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelContainerOutputReference.resetModelDataUrl"></a>

```typescript
public resetModelDataUrl(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModelContainerOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModelContainerOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModelContainerOutputReference.property.imageConfig">imageConfig</a></code> | <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModelContainerImageConfigOutputReference">SagemakerModelContainerImageConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModelContainerOutputReference.property.containerHostnameInput">containerHostnameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModelContainerOutputReference.property.environmentInput">environmentInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModelContainerOutputReference.property.imageConfigInput">imageConfigInput</a></code> | <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModelContainerImageConfig">SagemakerModelContainerImageConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModelContainerOutputReference.property.imageInput">imageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModelContainerOutputReference.property.modeInput">modeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModelContainerOutputReference.property.modelDataUrlInput">modelDataUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModelContainerOutputReference.property.containerHostname">containerHostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModelContainerOutputReference.property.environment">environment</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModelContainerOutputReference.property.image">image</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModelContainerOutputReference.property.mode">mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModelContainerOutputReference.property.modelDataUrl">modelDataUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModelContainerOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModelContainer">SagemakerModelContainer</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelContainerOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelContainerOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `imageConfig`<sup>Required</sup> <a name="imageConfig" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelContainerOutputReference.property.imageConfig"></a>

```typescript
public readonly imageConfig: SagemakerModelContainerImageConfigOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModelContainerImageConfigOutputReference">SagemakerModelContainerImageConfigOutputReference</a>

---

##### `containerHostnameInput`<sup>Optional</sup> <a name="containerHostnameInput" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelContainerOutputReference.property.containerHostnameInput"></a>

```typescript
public readonly containerHostnameInput: string;
```

- *Type:* string

---

##### `environmentInput`<sup>Optional</sup> <a name="environmentInput" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelContainerOutputReference.property.environmentInput"></a>

```typescript
public readonly environmentInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `imageConfigInput`<sup>Optional</sup> <a name="imageConfigInput" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelContainerOutputReference.property.imageConfigInput"></a>

```typescript
public readonly imageConfigInput: SagemakerModelContainerImageConfig;
```

- *Type:* <a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModelContainerImageConfig">SagemakerModelContainerImageConfig</a>

---

##### `imageInput`<sup>Optional</sup> <a name="imageInput" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelContainerOutputReference.property.imageInput"></a>

```typescript
public readonly imageInput: string;
```

- *Type:* string

---

##### `modeInput`<sup>Optional</sup> <a name="modeInput" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelContainerOutputReference.property.modeInput"></a>

```typescript
public readonly modeInput: string;
```

- *Type:* string

---

##### `modelDataUrlInput`<sup>Optional</sup> <a name="modelDataUrlInput" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelContainerOutputReference.property.modelDataUrlInput"></a>

```typescript
public readonly modelDataUrlInput: string;
```

- *Type:* string

---

##### `containerHostname`<sup>Required</sup> <a name="containerHostname" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelContainerOutputReference.property.containerHostname"></a>

```typescript
public readonly containerHostname: string;
```

- *Type:* string

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelContainerOutputReference.property.environment"></a>

```typescript
public readonly environment: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `image`<sup>Required</sup> <a name="image" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelContainerOutputReference.property.image"></a>

```typescript
public readonly image: string;
```

- *Type:* string

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelContainerOutputReference.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

---

##### `modelDataUrl`<sup>Required</sup> <a name="modelDataUrl" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelContainerOutputReference.property.modelDataUrl"></a>

```typescript
public readonly modelDataUrl: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelContainerOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerModelContainer;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModelContainer">SagemakerModelContainer</a>

---


### SagemakerModelInferenceExecutionConfigOutputReference <a name="SagemakerModelInferenceExecutionConfigOutputReference" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.Initializer"></a>

```typescript
import { sagemakerModel } from '@cdktf/aws-cdk'

new sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.property.modeInput">modeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.property.mode">mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModelInferenceExecutionConfig">SagemakerModelInferenceExecutionConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `modeInput`<sup>Optional</sup> <a name="modeInput" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.property.modeInput"></a>

```typescript
public readonly modeInput: string;
```

- *Type:* string

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelInferenceExecutionConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SagemakerModelInferenceExecutionConfig;
```

- *Type:* <a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModelInferenceExecutionConfig">SagemakerModelInferenceExecutionConfig</a>

---


### SagemakerModelPrimaryContainerImageConfigOutputReference <a name="SagemakerModelPrimaryContainerImageConfigOutputReference" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.Initializer"></a>

```typescript
import { sagemakerModel } from '@cdktf/aws-cdk'

new sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.property.repositoryAccessModeInput">repositoryAccessModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.property.repositoryAccessMode">repositoryAccessMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModelPrimaryContainerImageConfig">SagemakerModelPrimaryContainerImageConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `repositoryAccessModeInput`<sup>Optional</sup> <a name="repositoryAccessModeInput" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.property.repositoryAccessModeInput"></a>

```typescript
public readonly repositoryAccessModeInput: string;
```

- *Type:* string

---

##### `repositoryAccessMode`<sup>Required</sup> <a name="repositoryAccessMode" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.property.repositoryAccessMode"></a>

```typescript
public readonly repositoryAccessMode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SagemakerModelPrimaryContainerImageConfig;
```

- *Type:* <a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModelPrimaryContainerImageConfig">SagemakerModelPrimaryContainerImageConfig</a>

---


### SagemakerModelPrimaryContainerOutputReference <a name="SagemakerModelPrimaryContainerOutputReference" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelPrimaryContainerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.Initializer"></a>

```typescript
import { sagemakerModel } from '@cdktf/aws-cdk'

new sagemakerModel.SagemakerModelPrimaryContainerOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.putImageConfig">putImageConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.resetContainerHostname">resetContainerHostname</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.resetEnvironment">resetEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.resetImageConfig">resetImageConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.resetMode">resetMode</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.resetModelDataUrl">resetModelDataUrl</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putImageConfig` <a name="putImageConfig" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.putImageConfig"></a>

```typescript
public putImageConfig(value: SagemakerModelPrimaryContainerImageConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.putImageConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModelPrimaryContainerImageConfig">SagemakerModelPrimaryContainerImageConfig</a>

---

##### `resetContainerHostname` <a name="resetContainerHostname" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.resetContainerHostname"></a>

```typescript
public resetContainerHostname(): void
```

##### `resetEnvironment` <a name="resetEnvironment" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.resetEnvironment"></a>

```typescript
public resetEnvironment(): void
```

##### `resetImageConfig` <a name="resetImageConfig" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.resetImageConfig"></a>

```typescript
public resetImageConfig(): void
```

##### `resetMode` <a name="resetMode" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.resetMode"></a>

```typescript
public resetMode(): void
```

##### `resetModelDataUrl` <a name="resetModelDataUrl" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.resetModelDataUrl"></a>

```typescript
public resetModelDataUrl(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.property.imageConfig">imageConfig</a></code> | <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference">SagemakerModelPrimaryContainerImageConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.property.containerHostnameInput">containerHostnameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.property.environmentInput">environmentInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.property.imageConfigInput">imageConfigInput</a></code> | <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModelPrimaryContainerImageConfig">SagemakerModelPrimaryContainerImageConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.property.imageInput">imageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.property.modeInput">modeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.property.modelDataUrlInput">modelDataUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.property.containerHostname">containerHostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.property.environment">environment</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.property.image">image</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.property.mode">mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.property.modelDataUrl">modelDataUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModelPrimaryContainer">SagemakerModelPrimaryContainer</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `imageConfig`<sup>Required</sup> <a name="imageConfig" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.property.imageConfig"></a>

```typescript
public readonly imageConfig: SagemakerModelPrimaryContainerImageConfigOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModelPrimaryContainerImageConfigOutputReference">SagemakerModelPrimaryContainerImageConfigOutputReference</a>

---

##### `containerHostnameInput`<sup>Optional</sup> <a name="containerHostnameInput" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.property.containerHostnameInput"></a>

```typescript
public readonly containerHostnameInput: string;
```

- *Type:* string

---

##### `environmentInput`<sup>Optional</sup> <a name="environmentInput" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.property.environmentInput"></a>

```typescript
public readonly environmentInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `imageConfigInput`<sup>Optional</sup> <a name="imageConfigInput" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.property.imageConfigInput"></a>

```typescript
public readonly imageConfigInput: SagemakerModelPrimaryContainerImageConfig;
```

- *Type:* <a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModelPrimaryContainerImageConfig">SagemakerModelPrimaryContainerImageConfig</a>

---

##### `imageInput`<sup>Optional</sup> <a name="imageInput" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.property.imageInput"></a>

```typescript
public readonly imageInput: string;
```

- *Type:* string

---

##### `modeInput`<sup>Optional</sup> <a name="modeInput" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.property.modeInput"></a>

```typescript
public readonly modeInput: string;
```

- *Type:* string

---

##### `modelDataUrlInput`<sup>Optional</sup> <a name="modelDataUrlInput" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.property.modelDataUrlInput"></a>

```typescript
public readonly modelDataUrlInput: string;
```

- *Type:* string

---

##### `containerHostname`<sup>Required</sup> <a name="containerHostname" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.property.containerHostname"></a>

```typescript
public readonly containerHostname: string;
```

- *Type:* string

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.property.environment"></a>

```typescript
public readonly environment: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `image`<sup>Required</sup> <a name="image" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.property.image"></a>

```typescript
public readonly image: string;
```

- *Type:* string

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

---

##### `modelDataUrl`<sup>Required</sup> <a name="modelDataUrl" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.property.modelDataUrl"></a>

```typescript
public readonly modelDataUrl: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelPrimaryContainerOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SagemakerModelPrimaryContainer;
```

- *Type:* <a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModelPrimaryContainer">SagemakerModelPrimaryContainer</a>

---


### SagemakerModelVpcConfigOutputReference <a name="SagemakerModelVpcConfigOutputReference" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelVpcConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelVpcConfigOutputReference.Initializer"></a>

```typescript
import { sagemakerModel } from '@cdktf/aws-cdk'

new sagemakerModel.SagemakerModelVpcConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModelVpcConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModelVpcConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelVpcConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelVpcConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModelVpcConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModelVpcConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModelVpcConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModelVpcConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModelVpcConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModelVpcConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModelVpcConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModelVpcConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModelVpcConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModelVpcConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModelVpcConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModelVpcConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModelVpcConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelVpcConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelVpcConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelVpcConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelVpcConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelVpcConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelVpcConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelVpcConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelVpcConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelVpcConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelVpcConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelVpcConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelVpcConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelVpcConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelVpcConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelVpcConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelVpcConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelVpcConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelVpcConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelVpcConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelVpcConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelVpcConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelVpcConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelVpcConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelVpcConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModelVpcConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModelVpcConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModelVpcConfigOutputReference.property.securityGroupIdsInput">securityGroupIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModelVpcConfigOutputReference.property.subnetsInput">subnetsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModelVpcConfigOutputReference.property.securityGroupIds">securityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModelVpcConfigOutputReference.property.subnets">subnets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModelVpcConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModelVpcConfig">SagemakerModelVpcConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelVpcConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelVpcConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `securityGroupIdsInput`<sup>Optional</sup> <a name="securityGroupIdsInput" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelVpcConfigOutputReference.property.securityGroupIdsInput"></a>

```typescript
public readonly securityGroupIdsInput: string[];
```

- *Type:* string[]

---

##### `subnetsInput`<sup>Optional</sup> <a name="subnetsInput" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelVpcConfigOutputReference.property.subnetsInput"></a>

```typescript
public readonly subnetsInput: string[];
```

- *Type:* string[]

---

##### `securityGroupIds`<sup>Required</sup> <a name="securityGroupIds" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelVpcConfigOutputReference.property.securityGroupIds"></a>

```typescript
public readonly securityGroupIds: string[];
```

- *Type:* string[]

---

##### `subnets`<sup>Required</sup> <a name="subnets" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelVpcConfigOutputReference.property.subnets"></a>

```typescript
public readonly subnets: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.sagemakerModel.SagemakerModelVpcConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SagemakerModelVpcConfig;
```

- *Type:* <a href="#@cdktf/aws-cdk.sagemakerModel.SagemakerModelVpcConfig">SagemakerModelVpcConfig</a>

---



