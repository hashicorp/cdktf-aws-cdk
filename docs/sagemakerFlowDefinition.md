# `sagemakerFlowDefinition` Submodule <a name="`sagemakerFlowDefinition` Submodule" id="@cdktf/aws-cdk.sagemakerFlowDefinition"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SagemakerFlowDefinition <a name="SagemakerFlowDefinition" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinition"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_flow_definition aws_sagemaker_flow_definition}.

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinition.Initializer"></a>

```typescript
import { sagemakerFlowDefinition } from '@cdktf/aws-cdk'

new sagemakerFlowDefinition.SagemakerFlowDefinition(scope: Construct, id: string, config: SagemakerFlowDefinitionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinition.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinition.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinition.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionConfig">SagemakerFlowDefinitionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinition.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinition.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinition.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionConfig">SagemakerFlowDefinitionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinition.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinition.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinition.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinition.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinition.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinition.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinition.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinition.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinition.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinition.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinition.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinition.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinition.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinition.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinition.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinition.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinition.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinition.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinition.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinition.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinition.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinition.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinition.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinition.putHumanLoopActivationConfig">putHumanLoopActivationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinition.putHumanLoopConfig">putHumanLoopConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinition.putHumanLoopRequestSource">putHumanLoopRequestSource</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinition.putOutputConfig">putOutputConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinition.resetHumanLoopActivationConfig">resetHumanLoopActivationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinition.resetHumanLoopRequestSource">resetHumanLoopRequestSource</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinition.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinition.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinition.resetTagsAll">resetTagsAll</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinition.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinition.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinition.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinition.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinition.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinition.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinition.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinition.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinition.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinition.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinition.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinition.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinition.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinition.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinition.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinition.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinition.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinition.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinition.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinition.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinition.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinition.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinition.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinition.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinition.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinition.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinition.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinition.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinition.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinition.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinition.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinition.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinition.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinition.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinition.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinition.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinition.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinition.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinition.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinition.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinition.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinition.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinition.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putHumanLoopActivationConfig` <a name="putHumanLoopActivationConfig" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinition.putHumanLoopActivationConfig"></a>

```typescript
public putHumanLoopActivationConfig(value: SagemakerFlowDefinitionHumanLoopActivationConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinition.putHumanLoopActivationConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfig">SagemakerFlowDefinitionHumanLoopActivationConfig</a>

---

##### `putHumanLoopConfig` <a name="putHumanLoopConfig" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinition.putHumanLoopConfig"></a>

```typescript
public putHumanLoopConfig(value: SagemakerFlowDefinitionHumanLoopConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinition.putHumanLoopConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfig">SagemakerFlowDefinitionHumanLoopConfig</a>

---

##### `putHumanLoopRequestSource` <a name="putHumanLoopRequestSource" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinition.putHumanLoopRequestSource"></a>

```typescript
public putHumanLoopRequestSource(value: SagemakerFlowDefinitionHumanLoopRequestSource): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinition.putHumanLoopRequestSource.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSource">SagemakerFlowDefinitionHumanLoopRequestSource</a>

---

##### `putOutputConfig` <a name="putOutputConfig" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinition.putOutputConfig"></a>

```typescript
public putOutputConfig(value: SagemakerFlowDefinitionOutputConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinition.putOutputConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfig">SagemakerFlowDefinitionOutputConfig</a>

---

##### `resetHumanLoopActivationConfig` <a name="resetHumanLoopActivationConfig" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinition.resetHumanLoopActivationConfig"></a>

```typescript
public resetHumanLoopActivationConfig(): void
```

##### `resetHumanLoopRequestSource` <a name="resetHumanLoopRequestSource" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinition.resetHumanLoopRequestSource"></a>

```typescript
public resetHumanLoopRequestSource(): void
```

##### `resetId` <a name="resetId" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinition.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinition.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinition.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinition.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinition.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinition.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinition.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a SagemakerFlowDefinition resource upon running "cdktf plan <stack-name>". |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinition.isConstruct"></a>

```typescript
import { sagemakerFlowDefinition } from '@cdktf/aws-cdk'

sagemakerFlowDefinition.SagemakerFlowDefinition.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinition.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinition.isTerraformElement"></a>

```typescript
import { sagemakerFlowDefinition } from '@cdktf/aws-cdk'

sagemakerFlowDefinition.SagemakerFlowDefinition.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinition.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinition.isTerraformResource"></a>

```typescript
import { sagemakerFlowDefinition } from '@cdktf/aws-cdk'

sagemakerFlowDefinition.SagemakerFlowDefinition.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinition.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinition.generateConfigForImport"></a>

```typescript
import { sagemakerFlowDefinition } from '@cdktf/aws-cdk'

sagemakerFlowDefinition.SagemakerFlowDefinition.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a SagemakerFlowDefinition resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinition.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinition.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SagemakerFlowDefinition to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinition.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SagemakerFlowDefinition that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_flow_definition#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinition.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the SagemakerFlowDefinition to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinition.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinition.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinition.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinition.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinition.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinition.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinition.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinition.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinition.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinition.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinition.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinition.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinition.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinition.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinition.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinition.property.humanLoopActivationConfig">humanLoopActivationConfig</a></code> | <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference">SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinition.property.humanLoopConfig">humanLoopConfig</a></code> | <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference">SagemakerFlowDefinitionHumanLoopConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinition.property.humanLoopRequestSource">humanLoopRequestSource</a></code> | <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference">SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinition.property.outputConfig">outputConfig</a></code> | <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference">SagemakerFlowDefinitionOutputConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinition.property.flowDefinitionNameInput">flowDefinitionNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinition.property.humanLoopActivationConfigInput">humanLoopActivationConfigInput</a></code> | <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfig">SagemakerFlowDefinitionHumanLoopActivationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinition.property.humanLoopConfigInput">humanLoopConfigInput</a></code> | <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfig">SagemakerFlowDefinitionHumanLoopConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinition.property.humanLoopRequestSourceInput">humanLoopRequestSourceInput</a></code> | <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSource">SagemakerFlowDefinitionHumanLoopRequestSource</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinition.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinition.property.outputConfigInput">outputConfigInput</a></code> | <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfig">SagemakerFlowDefinitionOutputConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinition.property.roleArnInput">roleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinition.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinition.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinition.property.flowDefinitionName">flowDefinitionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinition.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinition.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinition.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinition.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinition.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinition.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinition.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinition.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinition.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinition.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinition.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinition.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinition.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinition.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinition.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinition.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinition.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinition.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinition.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `humanLoopActivationConfig`<sup>Required</sup> <a name="humanLoopActivationConfig" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinition.property.humanLoopActivationConfig"></a>

```typescript
public readonly humanLoopActivationConfig: SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference">SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference</a>

---

##### `humanLoopConfig`<sup>Required</sup> <a name="humanLoopConfig" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinition.property.humanLoopConfig"></a>

```typescript
public readonly humanLoopConfig: SagemakerFlowDefinitionHumanLoopConfigOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference">SagemakerFlowDefinitionHumanLoopConfigOutputReference</a>

---

##### `humanLoopRequestSource`<sup>Required</sup> <a name="humanLoopRequestSource" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinition.property.humanLoopRequestSource"></a>

```typescript
public readonly humanLoopRequestSource: SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference">SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference</a>

---

##### `outputConfig`<sup>Required</sup> <a name="outputConfig" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinition.property.outputConfig"></a>

```typescript
public readonly outputConfig: SagemakerFlowDefinitionOutputConfigOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference">SagemakerFlowDefinitionOutputConfigOutputReference</a>

---

##### `flowDefinitionNameInput`<sup>Optional</sup> <a name="flowDefinitionNameInput" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinition.property.flowDefinitionNameInput"></a>

```typescript
public readonly flowDefinitionNameInput: string;
```

- *Type:* string

---

##### `humanLoopActivationConfigInput`<sup>Optional</sup> <a name="humanLoopActivationConfigInput" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinition.property.humanLoopActivationConfigInput"></a>

```typescript
public readonly humanLoopActivationConfigInput: SagemakerFlowDefinitionHumanLoopActivationConfig;
```

- *Type:* <a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfig">SagemakerFlowDefinitionHumanLoopActivationConfig</a>

---

##### `humanLoopConfigInput`<sup>Optional</sup> <a name="humanLoopConfigInput" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinition.property.humanLoopConfigInput"></a>

```typescript
public readonly humanLoopConfigInput: SagemakerFlowDefinitionHumanLoopConfig;
```

- *Type:* <a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfig">SagemakerFlowDefinitionHumanLoopConfig</a>

---

##### `humanLoopRequestSourceInput`<sup>Optional</sup> <a name="humanLoopRequestSourceInput" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinition.property.humanLoopRequestSourceInput"></a>

```typescript
public readonly humanLoopRequestSourceInput: SagemakerFlowDefinitionHumanLoopRequestSource;
```

- *Type:* <a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSource">SagemakerFlowDefinitionHumanLoopRequestSource</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinition.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `outputConfigInput`<sup>Optional</sup> <a name="outputConfigInput" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinition.property.outputConfigInput"></a>

```typescript
public readonly outputConfigInput: SagemakerFlowDefinitionOutputConfig;
```

- *Type:* <a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfig">SagemakerFlowDefinitionOutputConfig</a>

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinition.property.roleArnInput"></a>

```typescript
public readonly roleArnInput: string;
```

- *Type:* string

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinition.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinition.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `flowDefinitionName`<sup>Required</sup> <a name="flowDefinitionName" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinition.property.flowDefinitionName"></a>

```typescript
public readonly flowDefinitionName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinition.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinition.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinition.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinition.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinition.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinition.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SagemakerFlowDefinitionConfig <a name="SagemakerFlowDefinitionConfig" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionConfig.Initializer"></a>

```typescript
import { sagemakerFlowDefinition } from '@cdktf/aws-cdk'

const sagemakerFlowDefinitionConfig: sagemakerFlowDefinition.SagemakerFlowDefinitionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionConfig.property.flowDefinitionName">flowDefinitionName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_flow_definition#flow_definition_name SagemakerFlowDefinition#flow_definition_name}. |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionConfig.property.humanLoopConfig">humanLoopConfig</a></code> | <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfig">SagemakerFlowDefinitionHumanLoopConfig</a></code> | human_loop_config block. |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionConfig.property.outputConfig">outputConfig</a></code> | <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfig">SagemakerFlowDefinitionOutputConfig</a></code> | output_config block. |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionConfig.property.roleArn">roleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_flow_definition#role_arn SagemakerFlowDefinition#role_arn}. |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionConfig.property.humanLoopActivationConfig">humanLoopActivationConfig</a></code> | <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfig">SagemakerFlowDefinitionHumanLoopActivationConfig</a></code> | human_loop_activation_config block. |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionConfig.property.humanLoopRequestSource">humanLoopRequestSource</a></code> | <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSource">SagemakerFlowDefinitionHumanLoopRequestSource</a></code> | human_loop_request_source block. |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_flow_definition#id SagemakerFlowDefinition#id}. |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_flow_definition#tags SagemakerFlowDefinition#tags}. |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_flow_definition#tags_all SagemakerFlowDefinition#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `flowDefinitionName`<sup>Required</sup> <a name="flowDefinitionName" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionConfig.property.flowDefinitionName"></a>

```typescript
public readonly flowDefinitionName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_flow_definition#flow_definition_name SagemakerFlowDefinition#flow_definition_name}.

---

##### `humanLoopConfig`<sup>Required</sup> <a name="humanLoopConfig" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionConfig.property.humanLoopConfig"></a>

```typescript
public readonly humanLoopConfig: SagemakerFlowDefinitionHumanLoopConfig;
```

- *Type:* <a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfig">SagemakerFlowDefinitionHumanLoopConfig</a>

human_loop_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_flow_definition#human_loop_config SagemakerFlowDefinition#human_loop_config}

---

##### `outputConfig`<sup>Required</sup> <a name="outputConfig" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionConfig.property.outputConfig"></a>

```typescript
public readonly outputConfig: SagemakerFlowDefinitionOutputConfig;
```

- *Type:* <a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfig">SagemakerFlowDefinitionOutputConfig</a>

output_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_flow_definition#output_config SagemakerFlowDefinition#output_config}

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionConfig.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_flow_definition#role_arn SagemakerFlowDefinition#role_arn}.

---

##### `humanLoopActivationConfig`<sup>Optional</sup> <a name="humanLoopActivationConfig" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionConfig.property.humanLoopActivationConfig"></a>

```typescript
public readonly humanLoopActivationConfig: SagemakerFlowDefinitionHumanLoopActivationConfig;
```

- *Type:* <a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfig">SagemakerFlowDefinitionHumanLoopActivationConfig</a>

human_loop_activation_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_flow_definition#human_loop_activation_config SagemakerFlowDefinition#human_loop_activation_config}

---

##### `humanLoopRequestSource`<sup>Optional</sup> <a name="humanLoopRequestSource" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionConfig.property.humanLoopRequestSource"></a>

```typescript
public readonly humanLoopRequestSource: SagemakerFlowDefinitionHumanLoopRequestSource;
```

- *Type:* <a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSource">SagemakerFlowDefinitionHumanLoopRequestSource</a>

human_loop_request_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_flow_definition#human_loop_request_source SagemakerFlowDefinition#human_loop_request_source}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_flow_definition#id SagemakerFlowDefinition#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_flow_definition#tags SagemakerFlowDefinition#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_flow_definition#tags_all SagemakerFlowDefinition#tags_all}.

---

### SagemakerFlowDefinitionHumanLoopActivationConfig <a name="SagemakerFlowDefinitionHumanLoopActivationConfig" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfig.Initializer"></a>

```typescript
import { sagemakerFlowDefinition } from '@cdktf/aws-cdk'

const sagemakerFlowDefinitionHumanLoopActivationConfig: sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfig.property.humanLoopActivationConditionsConfig">humanLoopActivationConditionsConfig</a></code> | <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfig">SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfig</a></code> | human_loop_activation_conditions_config block. |

---

##### `humanLoopActivationConditionsConfig`<sup>Optional</sup> <a name="humanLoopActivationConditionsConfig" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfig.property.humanLoopActivationConditionsConfig"></a>

```typescript
public readonly humanLoopActivationConditionsConfig: SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfig;
```

- *Type:* <a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfig">SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfig</a>

human_loop_activation_conditions_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_flow_definition#human_loop_activation_conditions_config SagemakerFlowDefinition#human_loop_activation_conditions_config}

---

### SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfig <a name="SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfig" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfig.Initializer"></a>

```typescript
import { sagemakerFlowDefinition } from '@cdktf/aws-cdk'

const sagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfig: sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfig.property.humanLoopActivationConditions">humanLoopActivationConditions</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_flow_definition#human_loop_activation_conditions SagemakerFlowDefinition#human_loop_activation_conditions}. |

---

##### `humanLoopActivationConditions`<sup>Required</sup> <a name="humanLoopActivationConditions" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfig.property.humanLoopActivationConditions"></a>

```typescript
public readonly humanLoopActivationConditions: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_flow_definition#human_loop_activation_conditions SagemakerFlowDefinition#human_loop_activation_conditions}.

---

### SagemakerFlowDefinitionHumanLoopConfig <a name="SagemakerFlowDefinitionHumanLoopConfig" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfig.Initializer"></a>

```typescript
import { sagemakerFlowDefinition } from '@cdktf/aws-cdk'

const sagemakerFlowDefinitionHumanLoopConfig: sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfig.property.humanTaskUiArn">humanTaskUiArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_flow_definition#human_task_ui_arn SagemakerFlowDefinition#human_task_ui_arn}. |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfig.property.taskCount">taskCount</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_flow_definition#task_count SagemakerFlowDefinition#task_count}. |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfig.property.taskDescription">taskDescription</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_flow_definition#task_description SagemakerFlowDefinition#task_description}. |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfig.property.taskTitle">taskTitle</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_flow_definition#task_title SagemakerFlowDefinition#task_title}. |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfig.property.workteamArn">workteamArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_flow_definition#workteam_arn SagemakerFlowDefinition#workteam_arn}. |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfig.property.publicWorkforceTaskPrice">publicWorkforceTaskPrice</a></code> | <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPrice">SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPrice</a></code> | public_workforce_task_price block. |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfig.property.taskAvailabilityLifetimeInSeconds">taskAvailabilityLifetimeInSeconds</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_flow_definition#task_availability_lifetime_in_seconds SagemakerFlowDefinition#task_availability_lifetime_in_seconds}. |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfig.property.taskKeywords">taskKeywords</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_flow_definition#task_keywords SagemakerFlowDefinition#task_keywords}. |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfig.property.taskTimeLimitInSeconds">taskTimeLimitInSeconds</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_flow_definition#task_time_limit_in_seconds SagemakerFlowDefinition#task_time_limit_in_seconds}. |

---

##### `humanTaskUiArn`<sup>Required</sup> <a name="humanTaskUiArn" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfig.property.humanTaskUiArn"></a>

```typescript
public readonly humanTaskUiArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_flow_definition#human_task_ui_arn SagemakerFlowDefinition#human_task_ui_arn}.

---

##### `taskCount`<sup>Required</sup> <a name="taskCount" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfig.property.taskCount"></a>

```typescript
public readonly taskCount: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_flow_definition#task_count SagemakerFlowDefinition#task_count}.

---

##### `taskDescription`<sup>Required</sup> <a name="taskDescription" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfig.property.taskDescription"></a>

```typescript
public readonly taskDescription: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_flow_definition#task_description SagemakerFlowDefinition#task_description}.

---

##### `taskTitle`<sup>Required</sup> <a name="taskTitle" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfig.property.taskTitle"></a>

```typescript
public readonly taskTitle: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_flow_definition#task_title SagemakerFlowDefinition#task_title}.

---

##### `workteamArn`<sup>Required</sup> <a name="workteamArn" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfig.property.workteamArn"></a>

```typescript
public readonly workteamArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_flow_definition#workteam_arn SagemakerFlowDefinition#workteam_arn}.

---

##### `publicWorkforceTaskPrice`<sup>Optional</sup> <a name="publicWorkforceTaskPrice" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfig.property.publicWorkforceTaskPrice"></a>

```typescript
public readonly publicWorkforceTaskPrice: SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPrice;
```

- *Type:* <a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPrice">SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPrice</a>

public_workforce_task_price block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_flow_definition#public_workforce_task_price SagemakerFlowDefinition#public_workforce_task_price}

---

##### `taskAvailabilityLifetimeInSeconds`<sup>Optional</sup> <a name="taskAvailabilityLifetimeInSeconds" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfig.property.taskAvailabilityLifetimeInSeconds"></a>

```typescript
public readonly taskAvailabilityLifetimeInSeconds: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_flow_definition#task_availability_lifetime_in_seconds SagemakerFlowDefinition#task_availability_lifetime_in_seconds}.

---

##### `taskKeywords`<sup>Optional</sup> <a name="taskKeywords" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfig.property.taskKeywords"></a>

```typescript
public readonly taskKeywords: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_flow_definition#task_keywords SagemakerFlowDefinition#task_keywords}.

---

##### `taskTimeLimitInSeconds`<sup>Optional</sup> <a name="taskTimeLimitInSeconds" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfig.property.taskTimeLimitInSeconds"></a>

```typescript
public readonly taskTimeLimitInSeconds: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_flow_definition#task_time_limit_in_seconds SagemakerFlowDefinition#task_time_limit_in_seconds}.

---

### SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPrice <a name="SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPrice" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPrice"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPrice.Initializer"></a>

```typescript
import { sagemakerFlowDefinition } from '@cdktf/aws-cdk'

const sagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPrice: sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPrice = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPrice.property.amountInUsd">amountInUsd</a></code> | <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsd">SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsd</a></code> | amount_in_usd block. |

---

##### `amountInUsd`<sup>Optional</sup> <a name="amountInUsd" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPrice.property.amountInUsd"></a>

```typescript
public readonly amountInUsd: SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsd;
```

- *Type:* <a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsd">SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsd</a>

amount_in_usd block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_flow_definition#amount_in_usd SagemakerFlowDefinition#amount_in_usd}

---

### SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsd <a name="SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsd" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsd"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsd.Initializer"></a>

```typescript
import { sagemakerFlowDefinition } from '@cdktf/aws-cdk'

const sagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsd: sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsd = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsd.property.cents">cents</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_flow_definition#cents SagemakerFlowDefinition#cents}. |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsd.property.dollars">dollars</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_flow_definition#dollars SagemakerFlowDefinition#dollars}. |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsd.property.tenthFractionsOfACent">tenthFractionsOfACent</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_flow_definition#tenth_fractions_of_a_cent SagemakerFlowDefinition#tenth_fractions_of_a_cent}. |

---

##### `cents`<sup>Optional</sup> <a name="cents" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsd.property.cents"></a>

```typescript
public readonly cents: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_flow_definition#cents SagemakerFlowDefinition#cents}.

---

##### `dollars`<sup>Optional</sup> <a name="dollars" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsd.property.dollars"></a>

```typescript
public readonly dollars: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_flow_definition#dollars SagemakerFlowDefinition#dollars}.

---

##### `tenthFractionsOfACent`<sup>Optional</sup> <a name="tenthFractionsOfACent" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsd.property.tenthFractionsOfACent"></a>

```typescript
public readonly tenthFractionsOfACent: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_flow_definition#tenth_fractions_of_a_cent SagemakerFlowDefinition#tenth_fractions_of_a_cent}.

---

### SagemakerFlowDefinitionHumanLoopRequestSource <a name="SagemakerFlowDefinitionHumanLoopRequestSource" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSource.Initializer"></a>

```typescript
import { sagemakerFlowDefinition } from '@cdktf/aws-cdk'

const sagemakerFlowDefinitionHumanLoopRequestSource: sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSource = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSource.property.awsManagedHumanLoopRequestSource">awsManagedHumanLoopRequestSource</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_flow_definition#aws_managed_human_loop_request_source SagemakerFlowDefinition#aws_managed_human_loop_request_source}. |

---

##### `awsManagedHumanLoopRequestSource`<sup>Required</sup> <a name="awsManagedHumanLoopRequestSource" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSource.property.awsManagedHumanLoopRequestSource"></a>

```typescript
public readonly awsManagedHumanLoopRequestSource: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_flow_definition#aws_managed_human_loop_request_source SagemakerFlowDefinition#aws_managed_human_loop_request_source}.

---

### SagemakerFlowDefinitionOutputConfig <a name="SagemakerFlowDefinitionOutputConfig" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfig.Initializer"></a>

```typescript
import { sagemakerFlowDefinition } from '@cdktf/aws-cdk'

const sagemakerFlowDefinitionOutputConfig: sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfig.property.s3OutputPath">s3OutputPath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_flow_definition#s3_output_path SagemakerFlowDefinition#s3_output_path}. |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfig.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_flow_definition#kms_key_id SagemakerFlowDefinition#kms_key_id}. |

---

##### `s3OutputPath`<sup>Required</sup> <a name="s3OutputPath" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfig.property.s3OutputPath"></a>

```typescript
public readonly s3OutputPath: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_flow_definition#s3_output_path SagemakerFlowDefinition#s3_output_path}.

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfig.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_flow_definition#kms_key_id SagemakerFlowDefinition#kms_key_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference <a name="SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference.Initializer"></a>

```typescript
import { sagemakerFlowDefinition } from '@cdktf/aws-cdk'

new sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference.property.humanLoopActivationConditionsInput">humanLoopActivationConditionsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference.property.humanLoopActivationConditions">humanLoopActivationConditions</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfig">SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `humanLoopActivationConditionsInput`<sup>Optional</sup> <a name="humanLoopActivationConditionsInput" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference.property.humanLoopActivationConditionsInput"></a>

```typescript
public readonly humanLoopActivationConditionsInput: string;
```

- *Type:* string

---

##### `humanLoopActivationConditions`<sup>Required</sup> <a name="humanLoopActivationConditions" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference.property.humanLoopActivationConditions"></a>

```typescript
public readonly humanLoopActivationConditions: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfig;
```

- *Type:* <a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfig">SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfig</a>

---


### SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference <a name="SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.Initializer"></a>

```typescript
import { sagemakerFlowDefinition } from '@cdktf/aws-cdk'

new sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.putHumanLoopActivationConditionsConfig">putHumanLoopActivationConditionsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.resetHumanLoopActivationConditionsConfig">resetHumanLoopActivationConditionsConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putHumanLoopActivationConditionsConfig` <a name="putHumanLoopActivationConditionsConfig" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.putHumanLoopActivationConditionsConfig"></a>

```typescript
public putHumanLoopActivationConditionsConfig(value: SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.putHumanLoopActivationConditionsConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfig">SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfig</a>

---

##### `resetHumanLoopActivationConditionsConfig` <a name="resetHumanLoopActivationConditionsConfig" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.resetHumanLoopActivationConditionsConfig"></a>

```typescript
public resetHumanLoopActivationConditionsConfig(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.property.humanLoopActivationConditionsConfig">humanLoopActivationConditionsConfig</a></code> | <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference">SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.property.humanLoopActivationConditionsConfigInput">humanLoopActivationConditionsConfigInput</a></code> | <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfig">SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfig">SagemakerFlowDefinitionHumanLoopActivationConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `humanLoopActivationConditionsConfig`<sup>Required</sup> <a name="humanLoopActivationConditionsConfig" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.property.humanLoopActivationConditionsConfig"></a>

```typescript
public readonly humanLoopActivationConditionsConfig: SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference">SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfigOutputReference</a>

---

##### `humanLoopActivationConditionsConfigInput`<sup>Optional</sup> <a name="humanLoopActivationConditionsConfigInput" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.property.humanLoopActivationConditionsConfigInput"></a>

```typescript
public readonly humanLoopActivationConditionsConfigInput: SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfig;
```

- *Type:* <a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfig">SagemakerFlowDefinitionHumanLoopActivationConfigHumanLoopActivationConditionsConfig</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SagemakerFlowDefinitionHumanLoopActivationConfig;
```

- *Type:* <a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopActivationConfig">SagemakerFlowDefinitionHumanLoopActivationConfig</a>

---


### SagemakerFlowDefinitionHumanLoopConfigOutputReference <a name="SagemakerFlowDefinitionHumanLoopConfigOutputReference" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.Initializer"></a>

```typescript
import { sagemakerFlowDefinition } from '@cdktf/aws-cdk'

new sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.putPublicWorkforceTaskPrice">putPublicWorkforceTaskPrice</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.resetPublicWorkforceTaskPrice">resetPublicWorkforceTaskPrice</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.resetTaskAvailabilityLifetimeInSeconds">resetTaskAvailabilityLifetimeInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.resetTaskKeywords">resetTaskKeywords</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.resetTaskTimeLimitInSeconds">resetTaskTimeLimitInSeconds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPublicWorkforceTaskPrice` <a name="putPublicWorkforceTaskPrice" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.putPublicWorkforceTaskPrice"></a>

```typescript
public putPublicWorkforceTaskPrice(value: SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPrice): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.putPublicWorkforceTaskPrice.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPrice">SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPrice</a>

---

##### `resetPublicWorkforceTaskPrice` <a name="resetPublicWorkforceTaskPrice" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.resetPublicWorkforceTaskPrice"></a>

```typescript
public resetPublicWorkforceTaskPrice(): void
```

##### `resetTaskAvailabilityLifetimeInSeconds` <a name="resetTaskAvailabilityLifetimeInSeconds" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.resetTaskAvailabilityLifetimeInSeconds"></a>

```typescript
public resetTaskAvailabilityLifetimeInSeconds(): void
```

##### `resetTaskKeywords` <a name="resetTaskKeywords" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.resetTaskKeywords"></a>

```typescript
public resetTaskKeywords(): void
```

##### `resetTaskTimeLimitInSeconds` <a name="resetTaskTimeLimitInSeconds" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.resetTaskTimeLimitInSeconds"></a>

```typescript
public resetTaskTimeLimitInSeconds(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.property.publicWorkforceTaskPrice">publicWorkforceTaskPrice</a></code> | <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference">SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.property.humanTaskUiArnInput">humanTaskUiArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.property.publicWorkforceTaskPriceInput">publicWorkforceTaskPriceInput</a></code> | <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPrice">SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPrice</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.property.taskAvailabilityLifetimeInSecondsInput">taskAvailabilityLifetimeInSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.property.taskCountInput">taskCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.property.taskDescriptionInput">taskDescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.property.taskKeywordsInput">taskKeywordsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.property.taskTimeLimitInSecondsInput">taskTimeLimitInSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.property.taskTitleInput">taskTitleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.property.workteamArnInput">workteamArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.property.humanTaskUiArn">humanTaskUiArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.property.taskAvailabilityLifetimeInSeconds">taskAvailabilityLifetimeInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.property.taskCount">taskCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.property.taskDescription">taskDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.property.taskKeywords">taskKeywords</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.property.taskTimeLimitInSeconds">taskTimeLimitInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.property.taskTitle">taskTitle</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.property.workteamArn">workteamArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfig">SagemakerFlowDefinitionHumanLoopConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `publicWorkforceTaskPrice`<sup>Required</sup> <a name="publicWorkforceTaskPrice" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.property.publicWorkforceTaskPrice"></a>

```typescript
public readonly publicWorkforceTaskPrice: SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference">SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference</a>

---

##### `humanTaskUiArnInput`<sup>Optional</sup> <a name="humanTaskUiArnInput" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.property.humanTaskUiArnInput"></a>

```typescript
public readonly humanTaskUiArnInput: string;
```

- *Type:* string

---

##### `publicWorkforceTaskPriceInput`<sup>Optional</sup> <a name="publicWorkforceTaskPriceInput" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.property.publicWorkforceTaskPriceInput"></a>

```typescript
public readonly publicWorkforceTaskPriceInput: SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPrice;
```

- *Type:* <a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPrice">SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPrice</a>

---

##### `taskAvailabilityLifetimeInSecondsInput`<sup>Optional</sup> <a name="taskAvailabilityLifetimeInSecondsInput" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.property.taskAvailabilityLifetimeInSecondsInput"></a>

```typescript
public readonly taskAvailabilityLifetimeInSecondsInput: number;
```

- *Type:* number

---

##### `taskCountInput`<sup>Optional</sup> <a name="taskCountInput" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.property.taskCountInput"></a>

```typescript
public readonly taskCountInput: number;
```

- *Type:* number

---

##### `taskDescriptionInput`<sup>Optional</sup> <a name="taskDescriptionInput" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.property.taskDescriptionInput"></a>

```typescript
public readonly taskDescriptionInput: string;
```

- *Type:* string

---

##### `taskKeywordsInput`<sup>Optional</sup> <a name="taskKeywordsInput" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.property.taskKeywordsInput"></a>

```typescript
public readonly taskKeywordsInput: string[];
```

- *Type:* string[]

---

##### `taskTimeLimitInSecondsInput`<sup>Optional</sup> <a name="taskTimeLimitInSecondsInput" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.property.taskTimeLimitInSecondsInput"></a>

```typescript
public readonly taskTimeLimitInSecondsInput: number;
```

- *Type:* number

---

##### `taskTitleInput`<sup>Optional</sup> <a name="taskTitleInput" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.property.taskTitleInput"></a>

```typescript
public readonly taskTitleInput: string;
```

- *Type:* string

---

##### `workteamArnInput`<sup>Optional</sup> <a name="workteamArnInput" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.property.workteamArnInput"></a>

```typescript
public readonly workteamArnInput: string;
```

- *Type:* string

---

##### `humanTaskUiArn`<sup>Required</sup> <a name="humanTaskUiArn" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.property.humanTaskUiArn"></a>

```typescript
public readonly humanTaskUiArn: string;
```

- *Type:* string

---

##### `taskAvailabilityLifetimeInSeconds`<sup>Required</sup> <a name="taskAvailabilityLifetimeInSeconds" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.property.taskAvailabilityLifetimeInSeconds"></a>

```typescript
public readonly taskAvailabilityLifetimeInSeconds: number;
```

- *Type:* number

---

##### `taskCount`<sup>Required</sup> <a name="taskCount" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.property.taskCount"></a>

```typescript
public readonly taskCount: number;
```

- *Type:* number

---

##### `taskDescription`<sup>Required</sup> <a name="taskDescription" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.property.taskDescription"></a>

```typescript
public readonly taskDescription: string;
```

- *Type:* string

---

##### `taskKeywords`<sup>Required</sup> <a name="taskKeywords" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.property.taskKeywords"></a>

```typescript
public readonly taskKeywords: string[];
```

- *Type:* string[]

---

##### `taskTimeLimitInSeconds`<sup>Required</sup> <a name="taskTimeLimitInSeconds" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.property.taskTimeLimitInSeconds"></a>

```typescript
public readonly taskTimeLimitInSeconds: number;
```

- *Type:* number

---

##### `taskTitle`<sup>Required</sup> <a name="taskTitle" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.property.taskTitle"></a>

```typescript
public readonly taskTitle: string;
```

- *Type:* string

---

##### `workteamArn`<sup>Required</sup> <a name="workteamArn" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.property.workteamArn"></a>

```typescript
public readonly workteamArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SagemakerFlowDefinitionHumanLoopConfig;
```

- *Type:* <a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfig">SagemakerFlowDefinitionHumanLoopConfig</a>

---


### SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference <a name="SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.Initializer"></a>

```typescript
import { sagemakerFlowDefinition } from '@cdktf/aws-cdk'

new sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.resetCents">resetCents</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.resetDollars">resetDollars</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.resetTenthFractionsOfACent">resetTenthFractionsOfACent</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCents` <a name="resetCents" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.resetCents"></a>

```typescript
public resetCents(): void
```

##### `resetDollars` <a name="resetDollars" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.resetDollars"></a>

```typescript
public resetDollars(): void
```

##### `resetTenthFractionsOfACent` <a name="resetTenthFractionsOfACent" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.resetTenthFractionsOfACent"></a>

```typescript
public resetTenthFractionsOfACent(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.property.centsInput">centsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.property.dollarsInput">dollarsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.property.tenthFractionsOfACentInput">tenthFractionsOfACentInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.property.cents">cents</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.property.dollars">dollars</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.property.tenthFractionsOfACent">tenthFractionsOfACent</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsd">SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsd</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `centsInput`<sup>Optional</sup> <a name="centsInput" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.property.centsInput"></a>

```typescript
public readonly centsInput: number;
```

- *Type:* number

---

##### `dollarsInput`<sup>Optional</sup> <a name="dollarsInput" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.property.dollarsInput"></a>

```typescript
public readonly dollarsInput: number;
```

- *Type:* number

---

##### `tenthFractionsOfACentInput`<sup>Optional</sup> <a name="tenthFractionsOfACentInput" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.property.tenthFractionsOfACentInput"></a>

```typescript
public readonly tenthFractionsOfACentInput: number;
```

- *Type:* number

---

##### `cents`<sup>Required</sup> <a name="cents" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.property.cents"></a>

```typescript
public readonly cents: number;
```

- *Type:* number

---

##### `dollars`<sup>Required</sup> <a name="dollars" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.property.dollars"></a>

```typescript
public readonly dollars: number;
```

- *Type:* number

---

##### `tenthFractionsOfACent`<sup>Required</sup> <a name="tenthFractionsOfACent" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.property.tenthFractionsOfACent"></a>

```typescript
public readonly tenthFractionsOfACent: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsd;
```

- *Type:* <a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsd">SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsd</a>

---


### SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference <a name="SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.Initializer"></a>

```typescript
import { sagemakerFlowDefinition } from '@cdktf/aws-cdk'

new sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.putAmountInUsd">putAmountInUsd</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.resetAmountInUsd">resetAmountInUsd</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAmountInUsd` <a name="putAmountInUsd" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.putAmountInUsd"></a>

```typescript
public putAmountInUsd(value: SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsd): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.putAmountInUsd.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsd">SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsd</a>

---

##### `resetAmountInUsd` <a name="resetAmountInUsd" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.resetAmountInUsd"></a>

```typescript
public resetAmountInUsd(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.property.amountInUsd">amountInUsd</a></code> | <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference">SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.property.amountInUsdInput">amountInUsdInput</a></code> | <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsd">SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsd</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPrice">SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPrice</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `amountInUsd`<sup>Required</sup> <a name="amountInUsd" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.property.amountInUsd"></a>

```typescript
public readonly amountInUsd: SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference">SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsdOutputReference</a>

---

##### `amountInUsdInput`<sup>Optional</sup> <a name="amountInUsdInput" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.property.amountInUsdInput"></a>

```typescript
public readonly amountInUsdInput: SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsd;
```

- *Type:* <a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsd">SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceAmountInUsd</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPriceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPrice;
```

- *Type:* <a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPrice">SagemakerFlowDefinitionHumanLoopConfigPublicWorkforceTaskPrice</a>

---


### SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference <a name="SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference.Initializer"></a>

```typescript
import { sagemakerFlowDefinition } from '@cdktf/aws-cdk'

new sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference.property.awsManagedHumanLoopRequestSourceInput">awsManagedHumanLoopRequestSourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference.property.awsManagedHumanLoopRequestSource">awsManagedHumanLoopRequestSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSource">SagemakerFlowDefinitionHumanLoopRequestSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `awsManagedHumanLoopRequestSourceInput`<sup>Optional</sup> <a name="awsManagedHumanLoopRequestSourceInput" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference.property.awsManagedHumanLoopRequestSourceInput"></a>

```typescript
public readonly awsManagedHumanLoopRequestSourceInput: string;
```

- *Type:* string

---

##### `awsManagedHumanLoopRequestSource`<sup>Required</sup> <a name="awsManagedHumanLoopRequestSource" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference.property.awsManagedHumanLoopRequestSource"></a>

```typescript
public readonly awsManagedHumanLoopRequestSource: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSourceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SagemakerFlowDefinitionHumanLoopRequestSource;
```

- *Type:* <a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionHumanLoopRequestSource">SagemakerFlowDefinitionHumanLoopRequestSource</a>

---


### SagemakerFlowDefinitionOutputConfigOutputReference <a name="SagemakerFlowDefinitionOutputConfigOutputReference" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.Initializer"></a>

```typescript
import { sagemakerFlowDefinition } from '@cdktf/aws-cdk'

new sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.resetKmsKeyId">resetKmsKeyId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKmsKeyId` <a name="resetKmsKeyId" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.resetKmsKeyId"></a>

```typescript
public resetKmsKeyId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.property.kmsKeyIdInput">kmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.property.s3OutputPathInput">s3OutputPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.property.s3OutputPath">s3OutputPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfig">SagemakerFlowDefinitionOutputConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `kmsKeyIdInput`<sup>Optional</sup> <a name="kmsKeyIdInput" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.property.kmsKeyIdInput"></a>

```typescript
public readonly kmsKeyIdInput: string;
```

- *Type:* string

---

##### `s3OutputPathInput`<sup>Optional</sup> <a name="s3OutputPathInput" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.property.s3OutputPathInput"></a>

```typescript
public readonly s3OutputPathInput: string;
```

- *Type:* string

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

---

##### `s3OutputPath`<sup>Required</sup> <a name="s3OutputPath" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.property.s3OutputPath"></a>

```typescript
public readonly s3OutputPath: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SagemakerFlowDefinitionOutputConfig;
```

- *Type:* <a href="#@cdktf/aws-cdk.sagemakerFlowDefinition.SagemakerFlowDefinitionOutputConfig">SagemakerFlowDefinitionOutputConfig</a>

---



