# `sesActiveReceiptRuleSet` Submodule <a name="`sesActiveReceiptRuleSet` Submodule" id="@cdktf/aws-cdk.sesActiveReceiptRuleSet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SesActiveReceiptRuleSet <a name="SesActiveReceiptRuleSet" id="@cdktf/aws-cdk.sesActiveReceiptRuleSet.SesActiveReceiptRuleSet"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/ses_active_receipt_rule_set aws_ses_active_receipt_rule_set}.

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.sesActiveReceiptRuleSet.SesActiveReceiptRuleSet.Initializer"></a>

```typescript
import { sesActiveReceiptRuleSet } from '@cdktf/aws-cdk'

new sesActiveReceiptRuleSet.SesActiveReceiptRuleSet(scope: Construct, id: string, config: SesActiveReceiptRuleSetConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.sesActiveReceiptRuleSet.SesActiveReceiptRuleSet.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/aws-cdk.sesActiveReceiptRuleSet.SesActiveReceiptRuleSet.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/aws-cdk.sesActiveReceiptRuleSet.SesActiveReceiptRuleSet.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/aws-cdk.sesActiveReceiptRuleSet.SesActiveReceiptRuleSetConfig">SesActiveReceiptRuleSetConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.sesActiveReceiptRuleSet.SesActiveReceiptRuleSet.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.sesActiveReceiptRuleSet.SesActiveReceiptRuleSet.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/aws-cdk.sesActiveReceiptRuleSet.SesActiveReceiptRuleSet.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/aws-cdk.sesActiveReceiptRuleSet.SesActiveReceiptRuleSetConfig">SesActiveReceiptRuleSetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.sesActiveReceiptRuleSet.SesActiveReceiptRuleSet.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/aws-cdk.sesActiveReceiptRuleSet.SesActiveReceiptRuleSet.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sesActiveReceiptRuleSet.SesActiveReceiptRuleSet.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/aws-cdk.sesActiveReceiptRuleSet.SesActiveReceiptRuleSet.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/aws-cdk.sesActiveReceiptRuleSet.SesActiveReceiptRuleSet.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sesActiveReceiptRuleSet.SesActiveReceiptRuleSet.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sesActiveReceiptRuleSet.SesActiveReceiptRuleSet.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/aws-cdk.sesActiveReceiptRuleSet.SesActiveReceiptRuleSet.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/aws-cdk.sesActiveReceiptRuleSet.SesActiveReceiptRuleSet.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sesActiveReceiptRuleSet.SesActiveReceiptRuleSet.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sesActiveReceiptRuleSet.SesActiveReceiptRuleSet.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sesActiveReceiptRuleSet.SesActiveReceiptRuleSet.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sesActiveReceiptRuleSet.SesActiveReceiptRuleSet.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sesActiveReceiptRuleSet.SesActiveReceiptRuleSet.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sesActiveReceiptRuleSet.SesActiveReceiptRuleSet.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sesActiveReceiptRuleSet.SesActiveReceiptRuleSet.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sesActiveReceiptRuleSet.SesActiveReceiptRuleSet.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sesActiveReceiptRuleSet.SesActiveReceiptRuleSet.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sesActiveReceiptRuleSet.SesActiveReceiptRuleSet.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sesActiveReceiptRuleSet.SesActiveReceiptRuleSet.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sesActiveReceiptRuleSet.SesActiveReceiptRuleSet.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/aws-cdk.sesActiveReceiptRuleSet.SesActiveReceiptRuleSet.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/aws-cdk.sesActiveReceiptRuleSet.SesActiveReceiptRuleSet.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/aws-cdk.sesActiveReceiptRuleSet.SesActiveReceiptRuleSet.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.sesActiveReceiptRuleSet.SesActiveReceiptRuleSet.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/aws-cdk.sesActiveReceiptRuleSet.SesActiveReceiptRuleSet.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/aws-cdk.sesActiveReceiptRuleSet.SesActiveReceiptRuleSet.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.sesActiveReceiptRuleSet.SesActiveReceiptRuleSet.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/aws-cdk.sesActiveReceiptRuleSet.SesActiveReceiptRuleSet.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/aws-cdk.sesActiveReceiptRuleSet.SesActiveReceiptRuleSet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/aws-cdk.sesActiveReceiptRuleSet.SesActiveReceiptRuleSet.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/aws-cdk.sesActiveReceiptRuleSet.SesActiveReceiptRuleSet.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/aws-cdk.sesActiveReceiptRuleSet.SesActiveReceiptRuleSet.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/aws-cdk.sesActiveReceiptRuleSet.SesActiveReceiptRuleSet.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/aws-cdk.sesActiveReceiptRuleSet.SesActiveReceiptRuleSet.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/aws-cdk.sesActiveReceiptRuleSet.SesActiveReceiptRuleSet.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.sesActiveReceiptRuleSet.SesActiveReceiptRuleSet.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sesActiveReceiptRuleSet.SesActiveReceiptRuleSet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.sesActiveReceiptRuleSet.SesActiveReceiptRuleSet.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sesActiveReceiptRuleSet.SesActiveReceiptRuleSet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.sesActiveReceiptRuleSet.SesActiveReceiptRuleSet.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sesActiveReceiptRuleSet.SesActiveReceiptRuleSet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.sesActiveReceiptRuleSet.SesActiveReceiptRuleSet.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sesActiveReceiptRuleSet.SesActiveReceiptRuleSet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.sesActiveReceiptRuleSet.SesActiveReceiptRuleSet.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sesActiveReceiptRuleSet.SesActiveReceiptRuleSet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.sesActiveReceiptRuleSet.SesActiveReceiptRuleSet.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sesActiveReceiptRuleSet.SesActiveReceiptRuleSet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.sesActiveReceiptRuleSet.SesActiveReceiptRuleSet.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sesActiveReceiptRuleSet.SesActiveReceiptRuleSet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.sesActiveReceiptRuleSet.SesActiveReceiptRuleSet.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sesActiveReceiptRuleSet.SesActiveReceiptRuleSet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.sesActiveReceiptRuleSet.SesActiveReceiptRuleSet.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sesActiveReceiptRuleSet.SesActiveReceiptRuleSet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/aws-cdk.sesActiveReceiptRuleSet.SesActiveReceiptRuleSet.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/aws-cdk.sesActiveReceiptRuleSet.SesActiveReceiptRuleSet.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.sesActiveReceiptRuleSet.SesActiveReceiptRuleSet.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.sesActiveReceiptRuleSet.SesActiveReceiptRuleSet.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.sesActiveReceiptRuleSet.SesActiveReceiptRuleSet.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sesActiveReceiptRuleSet.SesActiveReceiptRuleSet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/aws-cdk.sesActiveReceiptRuleSet.SesActiveReceiptRuleSet.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.sesActiveReceiptRuleSet.SesActiveReceiptRuleSet.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/aws-cdk.sesActiveReceiptRuleSet.SesActiveReceiptRuleSet.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/aws-cdk.sesActiveReceiptRuleSet.SesActiveReceiptRuleSet.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/aws-cdk.sesActiveReceiptRuleSet.SesActiveReceiptRuleSet.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/aws-cdk.sesActiveReceiptRuleSet.SesActiveReceiptRuleSet.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.sesActiveReceiptRuleSet.SesActiveReceiptRuleSet.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetId` <a name="resetId" id="@cdktf/aws-cdk.sesActiveReceiptRuleSet.SesActiveReceiptRuleSet.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.sesActiveReceiptRuleSet.SesActiveReceiptRuleSet.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/aws-cdk.sesActiveReceiptRuleSet.SesActiveReceiptRuleSet.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sesActiveReceiptRuleSet.SesActiveReceiptRuleSet.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sesActiveReceiptRuleSet.SesActiveReceiptRuleSet.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a SesActiveReceiptRuleSet resource upon running "cdktf plan <stack-name>". |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@cdktf/aws-cdk.sesActiveReceiptRuleSet.SesActiveReceiptRuleSet.isConstruct"></a>

```typescript
import { sesActiveReceiptRuleSet } from '@cdktf/aws-cdk'

sesActiveReceiptRuleSet.SesActiveReceiptRuleSet.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.sesActiveReceiptRuleSet.SesActiveReceiptRuleSet.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/aws-cdk.sesActiveReceiptRuleSet.SesActiveReceiptRuleSet.isTerraformElement"></a>

```typescript
import { sesActiveReceiptRuleSet } from '@cdktf/aws-cdk'

sesActiveReceiptRuleSet.SesActiveReceiptRuleSet.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.sesActiveReceiptRuleSet.SesActiveReceiptRuleSet.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/aws-cdk.sesActiveReceiptRuleSet.SesActiveReceiptRuleSet.isTerraformResource"></a>

```typescript
import { sesActiveReceiptRuleSet } from '@cdktf/aws-cdk'

sesActiveReceiptRuleSet.SesActiveReceiptRuleSet.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.sesActiveReceiptRuleSet.SesActiveReceiptRuleSet.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/aws-cdk.sesActiveReceiptRuleSet.SesActiveReceiptRuleSet.generateConfigForImport"></a>

```typescript
import { sesActiveReceiptRuleSet } from '@cdktf/aws-cdk'

sesActiveReceiptRuleSet.SesActiveReceiptRuleSet.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a SesActiveReceiptRuleSet resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.sesActiveReceiptRuleSet.SesActiveReceiptRuleSet.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/aws-cdk.sesActiveReceiptRuleSet.SesActiveReceiptRuleSet.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SesActiveReceiptRuleSet to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/aws-cdk.sesActiveReceiptRuleSet.SesActiveReceiptRuleSet.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SesActiveReceiptRuleSet that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/ses_active_receipt_rule_set#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.sesActiveReceiptRuleSet.SesActiveReceiptRuleSet.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the SesActiveReceiptRuleSet to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.sesActiveReceiptRuleSet.SesActiveReceiptRuleSet.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/aws-cdk.sesActiveReceiptRuleSet.SesActiveReceiptRuleSet.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sesActiveReceiptRuleSet.SesActiveReceiptRuleSet.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sesActiveReceiptRuleSet.SesActiveReceiptRuleSet.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sesActiveReceiptRuleSet.SesActiveReceiptRuleSet.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sesActiveReceiptRuleSet.SesActiveReceiptRuleSet.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sesActiveReceiptRuleSet.SesActiveReceiptRuleSet.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sesActiveReceiptRuleSet.SesActiveReceiptRuleSet.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sesActiveReceiptRuleSet.SesActiveReceiptRuleSet.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sesActiveReceiptRuleSet.SesActiveReceiptRuleSet.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sesActiveReceiptRuleSet.SesActiveReceiptRuleSet.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sesActiveReceiptRuleSet.SesActiveReceiptRuleSet.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sesActiveReceiptRuleSet.SesActiveReceiptRuleSet.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sesActiveReceiptRuleSet.SesActiveReceiptRuleSet.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sesActiveReceiptRuleSet.SesActiveReceiptRuleSet.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sesActiveReceiptRuleSet.SesActiveReceiptRuleSet.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sesActiveReceiptRuleSet.SesActiveReceiptRuleSet.property.ruleSetNameInput">ruleSetNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sesActiveReceiptRuleSet.SesActiveReceiptRuleSet.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sesActiveReceiptRuleSet.SesActiveReceiptRuleSet.property.ruleSetName">ruleSetName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/aws-cdk.sesActiveReceiptRuleSet.SesActiveReceiptRuleSet.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/aws-cdk.sesActiveReceiptRuleSet.SesActiveReceiptRuleSet.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.sesActiveReceiptRuleSet.SesActiveReceiptRuleSet.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/aws-cdk.sesActiveReceiptRuleSet.SesActiveReceiptRuleSet.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/aws-cdk.sesActiveReceiptRuleSet.SesActiveReceiptRuleSet.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/aws-cdk.sesActiveReceiptRuleSet.SesActiveReceiptRuleSet.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/aws-cdk.sesActiveReceiptRuleSet.SesActiveReceiptRuleSet.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.sesActiveReceiptRuleSet.SesActiveReceiptRuleSet.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.sesActiveReceiptRuleSet.SesActiveReceiptRuleSet.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.sesActiveReceiptRuleSet.SesActiveReceiptRuleSet.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.sesActiveReceiptRuleSet.SesActiveReceiptRuleSet.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.sesActiveReceiptRuleSet.SesActiveReceiptRuleSet.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.sesActiveReceiptRuleSet.SesActiveReceiptRuleSet.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.sesActiveReceiptRuleSet.SesActiveReceiptRuleSet.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/aws-cdk.sesActiveReceiptRuleSet.SesActiveReceiptRuleSet.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/aws-cdk.sesActiveReceiptRuleSet.SesActiveReceiptRuleSet.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `ruleSetNameInput`<sup>Optional</sup> <a name="ruleSetNameInput" id="@cdktf/aws-cdk.sesActiveReceiptRuleSet.SesActiveReceiptRuleSet.property.ruleSetNameInput"></a>

```typescript
public readonly ruleSetNameInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.sesActiveReceiptRuleSet.SesActiveReceiptRuleSet.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `ruleSetName`<sup>Required</sup> <a name="ruleSetName" id="@cdktf/aws-cdk.sesActiveReceiptRuleSet.SesActiveReceiptRuleSet.property.ruleSetName"></a>

```typescript
public readonly ruleSetName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.sesActiveReceiptRuleSet.SesActiveReceiptRuleSet.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/aws-cdk.sesActiveReceiptRuleSet.SesActiveReceiptRuleSet.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SesActiveReceiptRuleSetConfig <a name="SesActiveReceiptRuleSetConfig" id="@cdktf/aws-cdk.sesActiveReceiptRuleSet.SesActiveReceiptRuleSetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.sesActiveReceiptRuleSet.SesActiveReceiptRuleSetConfig.Initializer"></a>

```typescript
import { sesActiveReceiptRuleSet } from '@cdktf/aws-cdk'

const sesActiveReceiptRuleSetConfig: sesActiveReceiptRuleSet.SesActiveReceiptRuleSetConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.sesActiveReceiptRuleSet.SesActiveReceiptRuleSetConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sesActiveReceiptRuleSet.SesActiveReceiptRuleSetConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sesActiveReceiptRuleSet.SesActiveReceiptRuleSetConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sesActiveReceiptRuleSet.SesActiveReceiptRuleSetConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sesActiveReceiptRuleSet.SesActiveReceiptRuleSetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sesActiveReceiptRuleSet.SesActiveReceiptRuleSetConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sesActiveReceiptRuleSet.SesActiveReceiptRuleSetConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sesActiveReceiptRuleSet.SesActiveReceiptRuleSetConfig.property.ruleSetName">ruleSetName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/ses_active_receipt_rule_set#rule_set_name SesActiveReceiptRuleSet#rule_set_name}. |
| <code><a href="#@cdktf/aws-cdk.sesActiveReceiptRuleSet.SesActiveReceiptRuleSetConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/ses_active_receipt_rule_set#id SesActiveReceiptRuleSet#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.sesActiveReceiptRuleSet.SesActiveReceiptRuleSetConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.sesActiveReceiptRuleSet.SesActiveReceiptRuleSetConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.sesActiveReceiptRuleSet.SesActiveReceiptRuleSetConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.sesActiveReceiptRuleSet.SesActiveReceiptRuleSetConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.sesActiveReceiptRuleSet.SesActiveReceiptRuleSetConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.sesActiveReceiptRuleSet.SesActiveReceiptRuleSetConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.sesActiveReceiptRuleSet.SesActiveReceiptRuleSetConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `ruleSetName`<sup>Required</sup> <a name="ruleSetName" id="@cdktf/aws-cdk.sesActiveReceiptRuleSet.SesActiveReceiptRuleSetConfig.property.ruleSetName"></a>

```typescript
public readonly ruleSetName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/ses_active_receipt_rule_set#rule_set_name SesActiveReceiptRuleSet#rule_set_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/aws-cdk.sesActiveReceiptRuleSet.SesActiveReceiptRuleSetConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/ses_active_receipt_rule_set#id SesActiveReceiptRuleSet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



