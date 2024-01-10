# `appconfigDeploymentStrategy` Submodule <a name="`appconfigDeploymentStrategy` Submodule" id="@cdktf/aws-cdk.appconfigDeploymentStrategy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppconfigDeploymentStrategy <a name="AppconfigDeploymentStrategy" id="@cdktf/aws-cdk.appconfigDeploymentStrategy.AppconfigDeploymentStrategy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appconfig_deployment_strategy aws_appconfig_deployment_strategy}.

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.Initializer"></a>

```typescript
import { appconfigDeploymentStrategy } from '@cdktf/aws-cdk'

new appconfigDeploymentStrategy.AppconfigDeploymentStrategy(scope: Construct, id: string, config: AppconfigDeploymentStrategyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/aws-cdk.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/aws-cdk.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/aws-cdk.appconfigDeploymentStrategy.AppconfigDeploymentStrategyConfig">AppconfigDeploymentStrategyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/aws-cdk.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/aws-cdk.appconfigDeploymentStrategy.AppconfigDeploymentStrategyConfig">AppconfigDeploymentStrategyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/aws-cdk.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/aws-cdk.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/aws-cdk.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/aws-cdk.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/aws-cdk.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/aws-cdk.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/aws-cdk.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/aws-cdk.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.resetFinalBakeTimeInMinutes">resetFinalBakeTimeInMinutes</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.resetGrowthType">resetGrowthType</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.resetTagsAll">resetTagsAll</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/aws-cdk.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/aws-cdk.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/aws-cdk.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/aws-cdk.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/aws-cdk.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/aws-cdk.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/aws-cdk.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/aws-cdk.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/aws-cdk.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/aws-cdk.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/aws-cdk.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/aws-cdk.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/aws-cdk.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/aws-cdk.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/aws-cdk.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/aws-cdk.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/aws-cdk.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/aws-cdk.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetFinalBakeTimeInMinutes` <a name="resetFinalBakeTimeInMinutes" id="@cdktf/aws-cdk.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.resetFinalBakeTimeInMinutes"></a>

```typescript
public resetFinalBakeTimeInMinutes(): void
```

##### `resetGrowthType` <a name="resetGrowthType" id="@cdktf/aws-cdk.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.resetGrowthType"></a>

```typescript
public resetGrowthType(): void
```

##### `resetId` <a name="resetId" id="@cdktf/aws-cdk.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/aws-cdk.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/aws-cdk.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/aws-cdk.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a AppconfigDeploymentStrategy resource upon running "cdktf plan <stack-name>". |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@cdktf/aws-cdk.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.isConstruct"></a>

```typescript
import { appconfigDeploymentStrategy } from '@cdktf/aws-cdk'

appconfigDeploymentStrategy.AppconfigDeploymentStrategy.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/aws-cdk.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.isTerraformElement"></a>

```typescript
import { appconfigDeploymentStrategy } from '@cdktf/aws-cdk'

appconfigDeploymentStrategy.AppconfigDeploymentStrategy.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/aws-cdk.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.isTerraformResource"></a>

```typescript
import { appconfigDeploymentStrategy } from '@cdktf/aws-cdk'

appconfigDeploymentStrategy.AppconfigDeploymentStrategy.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/aws-cdk.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.generateConfigForImport"></a>

```typescript
import { appconfigDeploymentStrategy } from '@cdktf/aws-cdk'

appconfigDeploymentStrategy.AppconfigDeploymentStrategy.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a AppconfigDeploymentStrategy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/aws-cdk.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AppconfigDeploymentStrategy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/aws-cdk.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AppconfigDeploymentStrategy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appconfig_deployment_strategy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the AppconfigDeploymentStrategy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/aws-cdk.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.deploymentDurationInMinutesInput">deploymentDurationInMinutesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.finalBakeTimeInMinutesInput">finalBakeTimeInMinutesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.growthFactorInput">growthFactorInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.growthTypeInput">growthTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.replicateToInput">replicateToInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.deploymentDurationInMinutes">deploymentDurationInMinutes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.finalBakeTimeInMinutes">finalBakeTimeInMinutes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.growthFactor">growthFactor</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.growthType">growthType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.replicateTo">replicateTo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/aws-cdk.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/aws-cdk.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/aws-cdk.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/aws-cdk.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/aws-cdk.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/aws-cdk.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/aws-cdk.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `deploymentDurationInMinutesInput`<sup>Optional</sup> <a name="deploymentDurationInMinutesInput" id="@cdktf/aws-cdk.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.deploymentDurationInMinutesInput"></a>

```typescript
public readonly deploymentDurationInMinutesInput: number;
```

- *Type:* number

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/aws-cdk.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `finalBakeTimeInMinutesInput`<sup>Optional</sup> <a name="finalBakeTimeInMinutesInput" id="@cdktf/aws-cdk.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.finalBakeTimeInMinutesInput"></a>

```typescript
public readonly finalBakeTimeInMinutesInput: number;
```

- *Type:* number

---

##### `growthFactorInput`<sup>Optional</sup> <a name="growthFactorInput" id="@cdktf/aws-cdk.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.growthFactorInput"></a>

```typescript
public readonly growthFactorInput: number;
```

- *Type:* number

---

##### `growthTypeInput`<sup>Optional</sup> <a name="growthTypeInput" id="@cdktf/aws-cdk.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.growthTypeInput"></a>

```typescript
public readonly growthTypeInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/aws-cdk.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/aws-cdk.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `replicateToInput`<sup>Optional</sup> <a name="replicateToInput" id="@cdktf/aws-cdk.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.replicateToInput"></a>

```typescript
public readonly replicateToInput: string;
```

- *Type:* string

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/aws-cdk.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/aws-cdk.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `deploymentDurationInMinutes`<sup>Required</sup> <a name="deploymentDurationInMinutes" id="@cdktf/aws-cdk.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.deploymentDurationInMinutes"></a>

```typescript
public readonly deploymentDurationInMinutes: number;
```

- *Type:* number

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/aws-cdk.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `finalBakeTimeInMinutes`<sup>Required</sup> <a name="finalBakeTimeInMinutes" id="@cdktf/aws-cdk.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.finalBakeTimeInMinutes"></a>

```typescript
public readonly finalBakeTimeInMinutes: number;
```

- *Type:* number

---

##### `growthFactor`<sup>Required</sup> <a name="growthFactor" id="@cdktf/aws-cdk.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.growthFactor"></a>

```typescript
public readonly growthFactor: number;
```

- *Type:* number

---

##### `growthType`<sup>Required</sup> <a name="growthType" id="@cdktf/aws-cdk.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.growthType"></a>

```typescript
public readonly growthType: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/aws-cdk.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `replicateTo`<sup>Required</sup> <a name="replicateTo" id="@cdktf/aws-cdk.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.replicateTo"></a>

```typescript
public readonly replicateTo: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/aws-cdk.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/aws-cdk.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/aws-cdk.appconfigDeploymentStrategy.AppconfigDeploymentStrategy.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AppconfigDeploymentStrategyConfig <a name="AppconfigDeploymentStrategyConfig" id="@cdktf/aws-cdk.appconfigDeploymentStrategy.AppconfigDeploymentStrategyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.appconfigDeploymentStrategy.AppconfigDeploymentStrategyConfig.Initializer"></a>

```typescript
import { appconfigDeploymentStrategy } from '@cdktf/aws-cdk'

const appconfigDeploymentStrategyConfig: appconfigDeploymentStrategy.AppconfigDeploymentStrategyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.appconfigDeploymentStrategy.AppconfigDeploymentStrategyConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appconfigDeploymentStrategy.AppconfigDeploymentStrategyConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appconfigDeploymentStrategy.AppconfigDeploymentStrategyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appconfigDeploymentStrategy.AppconfigDeploymentStrategyConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appconfigDeploymentStrategy.AppconfigDeploymentStrategyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appconfigDeploymentStrategy.AppconfigDeploymentStrategyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appconfigDeploymentStrategy.AppconfigDeploymentStrategyConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appconfigDeploymentStrategy.AppconfigDeploymentStrategyConfig.property.deploymentDurationInMinutes">deploymentDurationInMinutes</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appconfig_deployment_strategy#deployment_duration_in_minutes AppconfigDeploymentStrategy#deployment_duration_in_minutes}. |
| <code><a href="#@cdktf/aws-cdk.appconfigDeploymentStrategy.AppconfigDeploymentStrategyConfig.property.growthFactor">growthFactor</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appconfig_deployment_strategy#growth_factor AppconfigDeploymentStrategy#growth_factor}. |
| <code><a href="#@cdktf/aws-cdk.appconfigDeploymentStrategy.AppconfigDeploymentStrategyConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appconfig_deployment_strategy#name AppconfigDeploymentStrategy#name}. |
| <code><a href="#@cdktf/aws-cdk.appconfigDeploymentStrategy.AppconfigDeploymentStrategyConfig.property.replicateTo">replicateTo</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appconfig_deployment_strategy#replicate_to AppconfigDeploymentStrategy#replicate_to}. |
| <code><a href="#@cdktf/aws-cdk.appconfigDeploymentStrategy.AppconfigDeploymentStrategyConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appconfig_deployment_strategy#description AppconfigDeploymentStrategy#description}. |
| <code><a href="#@cdktf/aws-cdk.appconfigDeploymentStrategy.AppconfigDeploymentStrategyConfig.property.finalBakeTimeInMinutes">finalBakeTimeInMinutes</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appconfig_deployment_strategy#final_bake_time_in_minutes AppconfigDeploymentStrategy#final_bake_time_in_minutes}. |
| <code><a href="#@cdktf/aws-cdk.appconfigDeploymentStrategy.AppconfigDeploymentStrategyConfig.property.growthType">growthType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appconfig_deployment_strategy#growth_type AppconfigDeploymentStrategy#growth_type}. |
| <code><a href="#@cdktf/aws-cdk.appconfigDeploymentStrategy.AppconfigDeploymentStrategyConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appconfig_deployment_strategy#id AppconfigDeploymentStrategy#id}. |
| <code><a href="#@cdktf/aws-cdk.appconfigDeploymentStrategy.AppconfigDeploymentStrategyConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appconfig_deployment_strategy#tags AppconfigDeploymentStrategy#tags}. |
| <code><a href="#@cdktf/aws-cdk.appconfigDeploymentStrategy.AppconfigDeploymentStrategyConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appconfig_deployment_strategy#tags_all AppconfigDeploymentStrategy#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.appconfigDeploymentStrategy.AppconfigDeploymentStrategyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.appconfigDeploymentStrategy.AppconfigDeploymentStrategyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.appconfigDeploymentStrategy.AppconfigDeploymentStrategyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.appconfigDeploymentStrategy.AppconfigDeploymentStrategyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.appconfigDeploymentStrategy.AppconfigDeploymentStrategyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.appconfigDeploymentStrategy.AppconfigDeploymentStrategyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.appconfigDeploymentStrategy.AppconfigDeploymentStrategyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `deploymentDurationInMinutes`<sup>Required</sup> <a name="deploymentDurationInMinutes" id="@cdktf/aws-cdk.appconfigDeploymentStrategy.AppconfigDeploymentStrategyConfig.property.deploymentDurationInMinutes"></a>

```typescript
public readonly deploymentDurationInMinutes: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appconfig_deployment_strategy#deployment_duration_in_minutes AppconfigDeploymentStrategy#deployment_duration_in_minutes}.

---

##### `growthFactor`<sup>Required</sup> <a name="growthFactor" id="@cdktf/aws-cdk.appconfigDeploymentStrategy.AppconfigDeploymentStrategyConfig.property.growthFactor"></a>

```typescript
public readonly growthFactor: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appconfig_deployment_strategy#growth_factor AppconfigDeploymentStrategy#growth_factor}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/aws-cdk.appconfigDeploymentStrategy.AppconfigDeploymentStrategyConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appconfig_deployment_strategy#name AppconfigDeploymentStrategy#name}.

---

##### `replicateTo`<sup>Required</sup> <a name="replicateTo" id="@cdktf/aws-cdk.appconfigDeploymentStrategy.AppconfigDeploymentStrategyConfig.property.replicateTo"></a>

```typescript
public readonly replicateTo: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appconfig_deployment_strategy#replicate_to AppconfigDeploymentStrategy#replicate_to}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/aws-cdk.appconfigDeploymentStrategy.AppconfigDeploymentStrategyConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appconfig_deployment_strategy#description AppconfigDeploymentStrategy#description}.

---

##### `finalBakeTimeInMinutes`<sup>Optional</sup> <a name="finalBakeTimeInMinutes" id="@cdktf/aws-cdk.appconfigDeploymentStrategy.AppconfigDeploymentStrategyConfig.property.finalBakeTimeInMinutes"></a>

```typescript
public readonly finalBakeTimeInMinutes: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appconfig_deployment_strategy#final_bake_time_in_minutes AppconfigDeploymentStrategy#final_bake_time_in_minutes}.

---

##### `growthType`<sup>Optional</sup> <a name="growthType" id="@cdktf/aws-cdk.appconfigDeploymentStrategy.AppconfigDeploymentStrategyConfig.property.growthType"></a>

```typescript
public readonly growthType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appconfig_deployment_strategy#growth_type AppconfigDeploymentStrategy#growth_type}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/aws-cdk.appconfigDeploymentStrategy.AppconfigDeploymentStrategyConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appconfig_deployment_strategy#id AppconfigDeploymentStrategy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/aws-cdk.appconfigDeploymentStrategy.AppconfigDeploymentStrategyConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appconfig_deployment_strategy#tags AppconfigDeploymentStrategy#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/aws-cdk.appconfigDeploymentStrategy.AppconfigDeploymentStrategyConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appconfig_deployment_strategy#tags_all AppconfigDeploymentStrategy#tags_all}.

---



