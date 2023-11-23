# `lambdaProvisionedConcurrencyConfig` Submodule <a name="`lambdaProvisionedConcurrencyConfig` Submodule" id="@cdktf/aws-cdk.lambdaProvisionedConcurrencyConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LambdaProvisionedConcurrencyConfig <a name="LambdaProvisionedConcurrencyConfig" id="@cdktf/aws-cdk.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lambda_provisioned_concurrency_config aws_lambda_provisioned_concurrency_config}.

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.Initializer"></a>

```typescript
import { lambdaProvisionedConcurrencyConfig } from '@cdktf/aws-cdk'

new lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig(scope: Construct, id: string, config: LambdaProvisionedConcurrencyConfigConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/aws-cdk.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/aws-cdk.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/aws-cdk.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigConfig">LambdaProvisionedConcurrencyConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/aws-cdk.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/aws-cdk.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigConfig">LambdaProvisionedConcurrencyConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/aws-cdk.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/aws-cdk.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/aws-cdk.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/aws-cdk.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/aws-cdk.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/aws-cdk.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/aws-cdk.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/aws-cdk.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/aws-cdk.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/aws-cdk.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/aws-cdk.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/aws-cdk.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/aws-cdk.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/aws-cdk.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/aws-cdk.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `importFrom` <a name="importFrom" id="@cdktf/aws-cdk.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveTo` <a name="moveTo" id="@cdktf/aws-cdk.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/aws-cdk.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/aws-cdk.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/aws-cdk.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.putTimeouts"></a>

```typescript
public putTimeouts(value: LambdaProvisionedConcurrencyConfigTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigTimeouts">LambdaProvisionedConcurrencyConfigTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/aws-cdk.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/aws-cdk.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/aws-cdk.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a LambdaProvisionedConcurrencyConfig resource upon running "cdktf plan <stack-name>". |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@cdktf/aws-cdk.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.isConstruct"></a>

```typescript
import { lambdaProvisionedConcurrencyConfig } from '@cdktf/aws-cdk'

lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/aws-cdk.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.isTerraformElement"></a>

```typescript
import { lambdaProvisionedConcurrencyConfig } from '@cdktf/aws-cdk'

lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/aws-cdk.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.isTerraformResource"></a>

```typescript
import { lambdaProvisionedConcurrencyConfig } from '@cdktf/aws-cdk'

lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/aws-cdk.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.generateConfigForImport"></a>

```typescript
import { lambdaProvisionedConcurrencyConfig } from '@cdktf/aws-cdk'

lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a LambdaProvisionedConcurrencyConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/aws-cdk.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the LambdaProvisionedConcurrencyConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/aws-cdk.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing LambdaProvisionedConcurrencyConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lambda_provisioned_concurrency_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the LambdaProvisionedConcurrencyConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/aws-cdk.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/aws-cdk.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigTimeoutsOutputReference">LambdaProvisionedConcurrencyConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.property.functionNameInput">functionNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.property.provisionedConcurrentExecutionsInput">provisionedConcurrentExecutionsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.property.qualifierInput">qualifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigTimeouts">LambdaProvisionedConcurrencyConfigTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.property.functionName">functionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.property.provisionedConcurrentExecutions">provisionedConcurrentExecutions</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.property.qualifier">qualifier</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/aws-cdk.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/aws-cdk.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/aws-cdk.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/aws-cdk.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/aws-cdk.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/aws-cdk.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/aws-cdk.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.property.timeouts"></a>

```typescript
public readonly timeouts: LambdaProvisionedConcurrencyConfigTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigTimeoutsOutputReference">LambdaProvisionedConcurrencyConfigTimeoutsOutputReference</a>

---

##### `functionNameInput`<sup>Optional</sup> <a name="functionNameInput" id="@cdktf/aws-cdk.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.property.functionNameInput"></a>

```typescript
public readonly functionNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/aws-cdk.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `provisionedConcurrentExecutionsInput`<sup>Optional</sup> <a name="provisionedConcurrentExecutionsInput" id="@cdktf/aws-cdk.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.property.provisionedConcurrentExecutionsInput"></a>

```typescript
public readonly provisionedConcurrentExecutionsInput: number;
```

- *Type:* number

---

##### `qualifierInput`<sup>Optional</sup> <a name="qualifierInput" id="@cdktf/aws-cdk.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.property.qualifierInput"></a>

```typescript
public readonly qualifierInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/aws-cdk.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | LambdaProvisionedConcurrencyConfigTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigTimeouts">LambdaProvisionedConcurrencyConfigTimeouts</a>

---

##### `functionName`<sup>Required</sup> <a name="functionName" id="@cdktf/aws-cdk.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.property.functionName"></a>

```typescript
public readonly functionName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `provisionedConcurrentExecutions`<sup>Required</sup> <a name="provisionedConcurrentExecutions" id="@cdktf/aws-cdk.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.property.provisionedConcurrentExecutions"></a>

```typescript
public readonly provisionedConcurrentExecutions: number;
```

- *Type:* number

---

##### `qualifier`<sup>Required</sup> <a name="qualifier" id="@cdktf/aws-cdk.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.property.qualifier"></a>

```typescript
public readonly qualifier: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/aws-cdk.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfig.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LambdaProvisionedConcurrencyConfigConfig <a name="LambdaProvisionedConcurrencyConfigConfig" id="@cdktf/aws-cdk.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigConfig.Initializer"></a>

```typescript
import { lambdaProvisionedConcurrencyConfig } from '@cdktf/aws-cdk'

const lambdaProvisionedConcurrencyConfigConfig: lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigConfig.property.functionName">functionName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lambda_provisioned_concurrency_config#function_name LambdaProvisionedConcurrencyConfig#function_name}. |
| <code><a href="#@cdktf/aws-cdk.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigConfig.property.provisionedConcurrentExecutions">provisionedConcurrentExecutions</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lambda_provisioned_concurrency_config#provisioned_concurrent_executions LambdaProvisionedConcurrencyConfig#provisioned_concurrent_executions}. |
| <code><a href="#@cdktf/aws-cdk.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigConfig.property.qualifier">qualifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lambda_provisioned_concurrency_config#qualifier LambdaProvisionedConcurrencyConfig#qualifier}. |
| <code><a href="#@cdktf/aws-cdk.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lambda_provisioned_concurrency_config#id LambdaProvisionedConcurrencyConfig#id}. |
| <code><a href="#@cdktf/aws-cdk.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/aws-cdk.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigTimeouts">LambdaProvisionedConcurrencyConfigTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `functionName`<sup>Required</sup> <a name="functionName" id="@cdktf/aws-cdk.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigConfig.property.functionName"></a>

```typescript
public readonly functionName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lambda_provisioned_concurrency_config#function_name LambdaProvisionedConcurrencyConfig#function_name}.

---

##### `provisionedConcurrentExecutions`<sup>Required</sup> <a name="provisionedConcurrentExecutions" id="@cdktf/aws-cdk.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigConfig.property.provisionedConcurrentExecutions"></a>

```typescript
public readonly provisionedConcurrentExecutions: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lambda_provisioned_concurrency_config#provisioned_concurrent_executions LambdaProvisionedConcurrencyConfig#provisioned_concurrent_executions}.

---

##### `qualifier`<sup>Required</sup> <a name="qualifier" id="@cdktf/aws-cdk.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigConfig.property.qualifier"></a>

```typescript
public readonly qualifier: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lambda_provisioned_concurrency_config#qualifier LambdaProvisionedConcurrencyConfig#qualifier}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/aws-cdk.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lambda_provisioned_concurrency_config#id LambdaProvisionedConcurrencyConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/aws-cdk.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigConfig.property.timeouts"></a>

```typescript
public readonly timeouts: LambdaProvisionedConcurrencyConfigTimeouts;
```

- *Type:* <a href="#@cdktf/aws-cdk.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigTimeouts">LambdaProvisionedConcurrencyConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lambda_provisioned_concurrency_config#timeouts LambdaProvisionedConcurrencyConfig#timeouts}

---

### LambdaProvisionedConcurrencyConfigTimeouts <a name="LambdaProvisionedConcurrencyConfigTimeouts" id="@cdktf/aws-cdk.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigTimeouts.Initializer"></a>

```typescript
import { lambdaProvisionedConcurrencyConfig } from '@cdktf/aws-cdk'

const lambdaProvisionedConcurrencyConfigTimeouts: lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lambda_provisioned_concurrency_config#create LambdaProvisionedConcurrencyConfig#create}. |
| <code><a href="#@cdktf/aws-cdk.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lambda_provisioned_concurrency_config#update LambdaProvisionedConcurrencyConfig#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/aws-cdk.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lambda_provisioned_concurrency_config#create LambdaProvisionedConcurrencyConfig#create}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/aws-cdk.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lambda_provisioned_concurrency_config#update LambdaProvisionedConcurrencyConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### LambdaProvisionedConcurrencyConfigTimeoutsOutputReference <a name="LambdaProvisionedConcurrencyConfigTimeoutsOutputReference" id="@cdktf/aws-cdk.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigTimeoutsOutputReference.Initializer"></a>

```typescript
import { lambdaProvisionedConcurrencyConfig } from '@cdktf/aws-cdk'

new lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/aws-cdk.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/aws-cdk.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigTimeouts">LambdaProvisionedConcurrencyConfigTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/aws-cdk.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/aws-cdk.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/aws-cdk.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/aws-cdk.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LambdaProvisionedConcurrencyConfigTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.lambdaProvisionedConcurrencyConfig.LambdaProvisionedConcurrencyConfigTimeouts">LambdaProvisionedConcurrencyConfigTimeouts</a>

---



