# `eksIdentityProviderConfig` Submodule <a name="`eksIdentityProviderConfig` Submodule" id="@cdktf/aws-cdk.eksIdentityProviderConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EksIdentityProviderConfig <a name="EksIdentityProviderConfig" id="@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/eks_identity_provider_config aws_eks_identity_provider_config}.

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfig.Initializer"></a>

```typescript
import { eksIdentityProviderConfig } from '@cdktf/aws-cdk'

new eksIdentityProviderConfig.EksIdentityProviderConfig(scope: Construct, id: string, config: EksIdentityProviderConfigConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfig.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfigConfig">EksIdentityProviderConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfigConfig">EksIdentityProviderConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfig.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfig.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfig.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfig.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfig.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfig.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfig.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfig.putOidc">putOidc</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfig.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfig.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfig.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfig.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfig.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfig.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfig.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfig.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfig.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfig.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfig.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfig.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfig.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfig.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfig.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfig.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfig.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfig.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfig.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfig.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfig.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfig.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfig.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfig.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfig.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfig.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfig.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfig.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfig.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfig.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfig.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfig.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfig.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfig.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfig.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putOidc` <a name="putOidc" id="@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfig.putOidc"></a>

```typescript
public putOidc(value: EksIdentityProviderConfigOidc): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfig.putOidc.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfigOidc">EksIdentityProviderConfigOidc</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfig.putTimeouts"></a>

```typescript
public putTimeouts(value: EksIdentityProviderConfigTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfigTimeouts">EksIdentityProviderConfigTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfig.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfig.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfig.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfig.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfig.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a EksIdentityProviderConfig resource upon running "cdktf plan <stack-name>". |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfig.isConstruct"></a>

```typescript
import { eksIdentityProviderConfig } from '@cdktf/aws-cdk'

eksIdentityProviderConfig.EksIdentityProviderConfig.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfig.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfig.isTerraformElement"></a>

```typescript
import { eksIdentityProviderConfig } from '@cdktf/aws-cdk'

eksIdentityProviderConfig.EksIdentityProviderConfig.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfig.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfig.isTerraformResource"></a>

```typescript
import { eksIdentityProviderConfig } from '@cdktf/aws-cdk'

eksIdentityProviderConfig.EksIdentityProviderConfig.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfig.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfig.generateConfigForImport"></a>

```typescript
import { eksIdentityProviderConfig } from '@cdktf/aws-cdk'

eksIdentityProviderConfig.EksIdentityProviderConfig.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a EksIdentityProviderConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the EksIdentityProviderConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing EksIdentityProviderConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/eks_identity_provider_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the EksIdentityProviderConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfig.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfig.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfig.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfig.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfig.property.oidc">oidc</a></code> | <code><a href="#@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference">EksIdentityProviderConfigOidcOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfig.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference">EksIdentityProviderConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfig.property.clusterNameInput">clusterNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfig.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfig.property.oidcInput">oidcInput</a></code> | <code><a href="#@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfigOidc">EksIdentityProviderConfigOidc</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfig.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfig.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfig.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfigTimeouts">EksIdentityProviderConfigTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfig.property.clusterName">clusterName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfig.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfig.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfig.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfig.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfig.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfig.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfig.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfig.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfig.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `oidc`<sup>Required</sup> <a name="oidc" id="@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfig.property.oidc"></a>

```typescript
public readonly oidc: EksIdentityProviderConfigOidcOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference">EksIdentityProviderConfigOidcOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfig.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfig.property.timeouts"></a>

```typescript
public readonly timeouts: EksIdentityProviderConfigTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference">EksIdentityProviderConfigTimeoutsOutputReference</a>

---

##### `clusterNameInput`<sup>Optional</sup> <a name="clusterNameInput" id="@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfig.property.clusterNameInput"></a>

```typescript
public readonly clusterNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfig.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `oidcInput`<sup>Optional</sup> <a name="oidcInput" id="@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfig.property.oidcInput"></a>

```typescript
public readonly oidcInput: EksIdentityProviderConfigOidc;
```

- *Type:* <a href="#@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfigOidc">EksIdentityProviderConfigOidc</a>

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfig.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfig.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfig.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | EksIdentityProviderConfigTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfigTimeouts">EksIdentityProviderConfigTimeouts</a>

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfig.property.clusterName"></a>

```typescript
public readonly clusterName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfig.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfig.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### EksIdentityProviderConfigConfig <a name="EksIdentityProviderConfigConfig" id="@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfigConfig.Initializer"></a>

```typescript
import { eksIdentityProviderConfig } from '@cdktf/aws-cdk'

const eksIdentityProviderConfigConfig: eksIdentityProviderConfig.EksIdentityProviderConfigConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfigConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfigConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfigConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfigConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfigConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfigConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfigConfig.property.clusterName">clusterName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/eks_identity_provider_config#cluster_name EksIdentityProviderConfig#cluster_name}. |
| <code><a href="#@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfigConfig.property.oidc">oidc</a></code> | <code><a href="#@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfigOidc">EksIdentityProviderConfigOidc</a></code> | oidc block. |
| <code><a href="#@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfigConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/eks_identity_provider_config#id EksIdentityProviderConfig#id}. |
| <code><a href="#@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfigConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/eks_identity_provider_config#tags EksIdentityProviderConfig#tags}. |
| <code><a href="#@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfigConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/eks_identity_provider_config#tags_all EksIdentityProviderConfig#tags_all}. |
| <code><a href="#@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfigConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfigTimeouts">EksIdentityProviderConfigTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfigConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfigConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfigConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfigConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfigConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfigConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfigConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfigConfig.property.clusterName"></a>

```typescript
public readonly clusterName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/eks_identity_provider_config#cluster_name EksIdentityProviderConfig#cluster_name}.

---

##### `oidc`<sup>Required</sup> <a name="oidc" id="@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfigConfig.property.oidc"></a>

```typescript
public readonly oidc: EksIdentityProviderConfigOidc;
```

- *Type:* <a href="#@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfigOidc">EksIdentityProviderConfigOidc</a>

oidc block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/eks_identity_provider_config#oidc EksIdentityProviderConfig#oidc}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfigConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/eks_identity_provider_config#id EksIdentityProviderConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfigConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/eks_identity_provider_config#tags EksIdentityProviderConfig#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfigConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/eks_identity_provider_config#tags_all EksIdentityProviderConfig#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfigConfig.property.timeouts"></a>

```typescript
public readonly timeouts: EksIdentityProviderConfigTimeouts;
```

- *Type:* <a href="#@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfigTimeouts">EksIdentityProviderConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/eks_identity_provider_config#timeouts EksIdentityProviderConfig#timeouts}

---

### EksIdentityProviderConfigOidc <a name="EksIdentityProviderConfigOidc" id="@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfigOidc"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfigOidc.Initializer"></a>

```typescript
import { eksIdentityProviderConfig } from '@cdktf/aws-cdk'

const eksIdentityProviderConfigOidc: eksIdentityProviderConfig.EksIdentityProviderConfigOidc = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfigOidc.property.clientId">clientId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/eks_identity_provider_config#client_id EksIdentityProviderConfig#client_id}. |
| <code><a href="#@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfigOidc.property.identityProviderConfigName">identityProviderConfigName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/eks_identity_provider_config#identity_provider_config_name EksIdentityProviderConfig#identity_provider_config_name}. |
| <code><a href="#@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfigOidc.property.issuerUrl">issuerUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/eks_identity_provider_config#issuer_url EksIdentityProviderConfig#issuer_url}. |
| <code><a href="#@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfigOidc.property.groupsClaim">groupsClaim</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/eks_identity_provider_config#groups_claim EksIdentityProviderConfig#groups_claim}. |
| <code><a href="#@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfigOidc.property.groupsPrefix">groupsPrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/eks_identity_provider_config#groups_prefix EksIdentityProviderConfig#groups_prefix}. |
| <code><a href="#@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfigOidc.property.requiredClaims">requiredClaims</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/eks_identity_provider_config#required_claims EksIdentityProviderConfig#required_claims}. |
| <code><a href="#@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfigOidc.property.usernameClaim">usernameClaim</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/eks_identity_provider_config#username_claim EksIdentityProviderConfig#username_claim}. |
| <code><a href="#@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfigOidc.property.usernamePrefix">usernamePrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/eks_identity_provider_config#username_prefix EksIdentityProviderConfig#username_prefix}. |

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfigOidc.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/eks_identity_provider_config#client_id EksIdentityProviderConfig#client_id}.

---

##### `identityProviderConfigName`<sup>Required</sup> <a name="identityProviderConfigName" id="@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfigOidc.property.identityProviderConfigName"></a>

```typescript
public readonly identityProviderConfigName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/eks_identity_provider_config#identity_provider_config_name EksIdentityProviderConfig#identity_provider_config_name}.

---

##### `issuerUrl`<sup>Required</sup> <a name="issuerUrl" id="@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfigOidc.property.issuerUrl"></a>

```typescript
public readonly issuerUrl: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/eks_identity_provider_config#issuer_url EksIdentityProviderConfig#issuer_url}.

---

##### `groupsClaim`<sup>Optional</sup> <a name="groupsClaim" id="@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfigOidc.property.groupsClaim"></a>

```typescript
public readonly groupsClaim: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/eks_identity_provider_config#groups_claim EksIdentityProviderConfig#groups_claim}.

---

##### `groupsPrefix`<sup>Optional</sup> <a name="groupsPrefix" id="@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfigOidc.property.groupsPrefix"></a>

```typescript
public readonly groupsPrefix: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/eks_identity_provider_config#groups_prefix EksIdentityProviderConfig#groups_prefix}.

---

##### `requiredClaims`<sup>Optional</sup> <a name="requiredClaims" id="@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfigOidc.property.requiredClaims"></a>

```typescript
public readonly requiredClaims: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/eks_identity_provider_config#required_claims EksIdentityProviderConfig#required_claims}.

---

##### `usernameClaim`<sup>Optional</sup> <a name="usernameClaim" id="@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfigOidc.property.usernameClaim"></a>

```typescript
public readonly usernameClaim: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/eks_identity_provider_config#username_claim EksIdentityProviderConfig#username_claim}.

---

##### `usernamePrefix`<sup>Optional</sup> <a name="usernamePrefix" id="@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfigOidc.property.usernamePrefix"></a>

```typescript
public readonly usernamePrefix: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/eks_identity_provider_config#username_prefix EksIdentityProviderConfig#username_prefix}.

---

### EksIdentityProviderConfigTimeouts <a name="EksIdentityProviderConfigTimeouts" id="@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfigTimeouts.Initializer"></a>

```typescript
import { eksIdentityProviderConfig } from '@cdktf/aws-cdk'

const eksIdentityProviderConfigTimeouts: eksIdentityProviderConfig.EksIdentityProviderConfigTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfigTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/eks_identity_provider_config#create EksIdentityProviderConfig#create}. |
| <code><a href="#@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfigTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/eks_identity_provider_config#delete EksIdentityProviderConfig#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfigTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/eks_identity_provider_config#create EksIdentityProviderConfig#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfigTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/eks_identity_provider_config#delete EksIdentityProviderConfig#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### EksIdentityProviderConfigOidcOutputReference <a name="EksIdentityProviderConfigOidcOutputReference" id="@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.Initializer"></a>

```typescript
import { eksIdentityProviderConfig } from '@cdktf/aws-cdk'

new eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.resetGroupsClaim">resetGroupsClaim</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.resetGroupsPrefix">resetGroupsPrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.resetRequiredClaims">resetRequiredClaims</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.resetUsernameClaim">resetUsernameClaim</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.resetUsernamePrefix">resetUsernamePrefix</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetGroupsClaim` <a name="resetGroupsClaim" id="@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.resetGroupsClaim"></a>

```typescript
public resetGroupsClaim(): void
```

##### `resetGroupsPrefix` <a name="resetGroupsPrefix" id="@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.resetGroupsPrefix"></a>

```typescript
public resetGroupsPrefix(): void
```

##### `resetRequiredClaims` <a name="resetRequiredClaims" id="@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.resetRequiredClaims"></a>

```typescript
public resetRequiredClaims(): void
```

##### `resetUsernameClaim` <a name="resetUsernameClaim" id="@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.resetUsernameClaim"></a>

```typescript
public resetUsernameClaim(): void
```

##### `resetUsernamePrefix` <a name="resetUsernamePrefix" id="@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.resetUsernamePrefix"></a>

```typescript
public resetUsernamePrefix(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.property.clientIdInput">clientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.property.groupsClaimInput">groupsClaimInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.property.groupsPrefixInput">groupsPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.property.identityProviderConfigNameInput">identityProviderConfigNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.property.issuerUrlInput">issuerUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.property.requiredClaimsInput">requiredClaimsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.property.usernameClaimInput">usernameClaimInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.property.usernamePrefixInput">usernamePrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.property.clientId">clientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.property.groupsClaim">groupsClaim</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.property.groupsPrefix">groupsPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.property.identityProviderConfigName">identityProviderConfigName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.property.issuerUrl">issuerUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.property.requiredClaims">requiredClaims</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.property.usernameClaim">usernameClaim</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.property.usernamePrefix">usernamePrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfigOidc">EksIdentityProviderConfigOidc</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.property.clientIdInput"></a>

```typescript
public readonly clientIdInput: string;
```

- *Type:* string

---

##### `groupsClaimInput`<sup>Optional</sup> <a name="groupsClaimInput" id="@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.property.groupsClaimInput"></a>

```typescript
public readonly groupsClaimInput: string;
```

- *Type:* string

---

##### `groupsPrefixInput`<sup>Optional</sup> <a name="groupsPrefixInput" id="@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.property.groupsPrefixInput"></a>

```typescript
public readonly groupsPrefixInput: string;
```

- *Type:* string

---

##### `identityProviderConfigNameInput`<sup>Optional</sup> <a name="identityProviderConfigNameInput" id="@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.property.identityProviderConfigNameInput"></a>

```typescript
public readonly identityProviderConfigNameInput: string;
```

- *Type:* string

---

##### `issuerUrlInput`<sup>Optional</sup> <a name="issuerUrlInput" id="@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.property.issuerUrlInput"></a>

```typescript
public readonly issuerUrlInput: string;
```

- *Type:* string

---

##### `requiredClaimsInput`<sup>Optional</sup> <a name="requiredClaimsInput" id="@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.property.requiredClaimsInput"></a>

```typescript
public readonly requiredClaimsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `usernameClaimInput`<sup>Optional</sup> <a name="usernameClaimInput" id="@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.property.usernameClaimInput"></a>

```typescript
public readonly usernameClaimInput: string;
```

- *Type:* string

---

##### `usernamePrefixInput`<sup>Optional</sup> <a name="usernamePrefixInput" id="@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.property.usernamePrefixInput"></a>

```typescript
public readonly usernamePrefixInput: string;
```

- *Type:* string

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

---

##### `groupsClaim`<sup>Required</sup> <a name="groupsClaim" id="@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.property.groupsClaim"></a>

```typescript
public readonly groupsClaim: string;
```

- *Type:* string

---

##### `groupsPrefix`<sup>Required</sup> <a name="groupsPrefix" id="@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.property.groupsPrefix"></a>

```typescript
public readonly groupsPrefix: string;
```

- *Type:* string

---

##### `identityProviderConfigName`<sup>Required</sup> <a name="identityProviderConfigName" id="@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.property.identityProviderConfigName"></a>

```typescript
public readonly identityProviderConfigName: string;
```

- *Type:* string

---

##### `issuerUrl`<sup>Required</sup> <a name="issuerUrl" id="@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.property.issuerUrl"></a>

```typescript
public readonly issuerUrl: string;
```

- *Type:* string

---

##### `requiredClaims`<sup>Required</sup> <a name="requiredClaims" id="@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.property.requiredClaims"></a>

```typescript
public readonly requiredClaims: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `usernameClaim`<sup>Required</sup> <a name="usernameClaim" id="@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.property.usernameClaim"></a>

```typescript
public readonly usernameClaim: string;
```

- *Type:* string

---

##### `usernamePrefix`<sup>Required</sup> <a name="usernamePrefix" id="@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.property.usernamePrefix"></a>

```typescript
public readonly usernamePrefix: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfigOidcOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: EksIdentityProviderConfigOidc;
```

- *Type:* <a href="#@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfigOidc">EksIdentityProviderConfigOidc</a>

---


### EksIdentityProviderConfigTimeoutsOutputReference <a name="EksIdentityProviderConfigTimeoutsOutputReference" id="@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.Initializer"></a>

```typescript
import { eksIdentityProviderConfig } from '@cdktf/aws-cdk'

new eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfigTimeouts">EksIdentityProviderConfigTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfigTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EksIdentityProviderConfigTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.eksIdentityProviderConfig.EksIdentityProviderConfigTimeouts">EksIdentityProviderConfigTimeouts</a>

---



