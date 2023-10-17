# `aws_accessanalyzer_analyzer`

Refer to the Terraform Registory for docs: [`aws_accessanalyzer_analyzer`](https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/accessanalyzer_analyzer).

# `accessanalyzerAnalyzer` Submodule <a name="`accessanalyzerAnalyzer` Submodule" id="@cdktf/aws-cdk.accessanalyzerAnalyzer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AccessanalyzerAnalyzer <a name="AccessanalyzerAnalyzer" id="@cdktf/aws-cdk.accessanalyzerAnalyzer.AccessanalyzerAnalyzer"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/accessanalyzer_analyzer aws_accessanalyzer_analyzer}.

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.Initializer"></a>

```typescript
import { accessanalyzerAnalyzer } from '@cdktf/aws-cdk'

new accessanalyzerAnalyzer.AccessanalyzerAnalyzer(scope: Construct, id: string, config: AccessanalyzerAnalyzerConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/aws-cdk.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/aws-cdk.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/aws-cdk.accessanalyzerAnalyzer.AccessanalyzerAnalyzerConfig">AccessanalyzerAnalyzerConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/aws-cdk.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/aws-cdk.accessanalyzerAnalyzer.AccessanalyzerAnalyzerConfig">AccessanalyzerAnalyzerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/aws-cdk.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/aws-cdk.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/aws-cdk.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/aws-cdk.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/aws-cdk.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/aws-cdk.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.resetType">resetType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/aws-cdk.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/aws-cdk.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/aws-cdk.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/aws-cdk.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/aws-cdk.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/aws-cdk.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/aws-cdk.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/aws-cdk.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/aws-cdk.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `importFrom` <a name="importFrom" id="@cdktf/aws-cdk.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveTo` <a name="moveTo" id="@cdktf/aws-cdk.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/aws-cdk.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/aws-cdk.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `resetId` <a name="resetId" id="@cdktf/aws-cdk.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/aws-cdk.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/aws-cdk.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

##### `resetType` <a name="resetType" id="@cdktf/aws-cdk.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.resetType"></a>

```typescript
public resetType(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/aws-cdk.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a AccessanalyzerAnalyzer resource upon running "cdktf plan <stack-name>". |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@cdktf/aws-cdk.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.isConstruct"></a>

```typescript
import { accessanalyzerAnalyzer } from '@cdktf/aws-cdk'

accessanalyzerAnalyzer.AccessanalyzerAnalyzer.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/aws-cdk.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.isTerraformElement"></a>

```typescript
import { accessanalyzerAnalyzer } from '@cdktf/aws-cdk'

accessanalyzerAnalyzer.AccessanalyzerAnalyzer.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/aws-cdk.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.isTerraformResource"></a>

```typescript
import { accessanalyzerAnalyzer } from '@cdktf/aws-cdk'

accessanalyzerAnalyzer.AccessanalyzerAnalyzer.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/aws-cdk.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.generateConfigForImport"></a>

```typescript
import { accessanalyzerAnalyzer } from '@cdktf/aws-cdk'

accessanalyzerAnalyzer.AccessanalyzerAnalyzer.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a AccessanalyzerAnalyzer resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/aws-cdk.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AccessanalyzerAnalyzer to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/aws-cdk.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AccessanalyzerAnalyzer that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/accessanalyzer_analyzer#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the AccessanalyzerAnalyzer to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/aws-cdk.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.property.analyzerNameInput">analyzerNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.property.analyzerName">analyzerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.property.type">type</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/aws-cdk.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/aws-cdk.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/aws-cdk.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/aws-cdk.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/aws-cdk.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/aws-cdk.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/aws-cdk.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `analyzerNameInput`<sup>Optional</sup> <a name="analyzerNameInput" id="@cdktf/aws-cdk.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.property.analyzerNameInput"></a>

```typescript
public readonly analyzerNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/aws-cdk.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/aws-cdk.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/aws-cdk.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/aws-cdk.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `analyzerName`<sup>Required</sup> <a name="analyzerName" id="@cdktf/aws-cdk.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.property.analyzerName"></a>

```typescript
public readonly analyzerName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/aws-cdk.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/aws-cdk.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/aws-cdk.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/aws-cdk.accessanalyzerAnalyzer.AccessanalyzerAnalyzer.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AccessanalyzerAnalyzerConfig <a name="AccessanalyzerAnalyzerConfig" id="@cdktf/aws-cdk.accessanalyzerAnalyzer.AccessanalyzerAnalyzerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.accessanalyzerAnalyzer.AccessanalyzerAnalyzerConfig.Initializer"></a>

```typescript
import { accessanalyzerAnalyzer } from '@cdktf/aws-cdk'

const accessanalyzerAnalyzerConfig: accessanalyzerAnalyzer.AccessanalyzerAnalyzerConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.accessanalyzerAnalyzer.AccessanalyzerAnalyzerConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.accessanalyzerAnalyzer.AccessanalyzerAnalyzerConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.accessanalyzerAnalyzer.AccessanalyzerAnalyzerConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.accessanalyzerAnalyzer.AccessanalyzerAnalyzerConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.accessanalyzerAnalyzer.AccessanalyzerAnalyzerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.accessanalyzerAnalyzer.AccessanalyzerAnalyzerConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.accessanalyzerAnalyzer.AccessanalyzerAnalyzerConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.accessanalyzerAnalyzer.AccessanalyzerAnalyzerConfig.property.analyzerName">analyzerName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/accessanalyzer_analyzer#analyzer_name AccessanalyzerAnalyzer#analyzer_name}. |
| <code><a href="#@cdktf/aws-cdk.accessanalyzerAnalyzer.AccessanalyzerAnalyzerConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/accessanalyzer_analyzer#id AccessanalyzerAnalyzer#id}. |
| <code><a href="#@cdktf/aws-cdk.accessanalyzerAnalyzer.AccessanalyzerAnalyzerConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/accessanalyzer_analyzer#tags AccessanalyzerAnalyzer#tags}. |
| <code><a href="#@cdktf/aws-cdk.accessanalyzerAnalyzer.AccessanalyzerAnalyzerConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/accessanalyzer_analyzer#tags_all AccessanalyzerAnalyzer#tags_all}. |
| <code><a href="#@cdktf/aws-cdk.accessanalyzerAnalyzer.AccessanalyzerAnalyzerConfig.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/accessanalyzer_analyzer#type AccessanalyzerAnalyzer#type}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.accessanalyzerAnalyzer.AccessanalyzerAnalyzerConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.accessanalyzerAnalyzer.AccessanalyzerAnalyzerConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.accessanalyzerAnalyzer.AccessanalyzerAnalyzerConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.accessanalyzerAnalyzer.AccessanalyzerAnalyzerConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.accessanalyzerAnalyzer.AccessanalyzerAnalyzerConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.accessanalyzerAnalyzer.AccessanalyzerAnalyzerConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.accessanalyzerAnalyzer.AccessanalyzerAnalyzerConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `analyzerName`<sup>Required</sup> <a name="analyzerName" id="@cdktf/aws-cdk.accessanalyzerAnalyzer.AccessanalyzerAnalyzerConfig.property.analyzerName"></a>

```typescript
public readonly analyzerName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/accessanalyzer_analyzer#analyzer_name AccessanalyzerAnalyzer#analyzer_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/aws-cdk.accessanalyzerAnalyzer.AccessanalyzerAnalyzerConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/accessanalyzer_analyzer#id AccessanalyzerAnalyzer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/aws-cdk.accessanalyzerAnalyzer.AccessanalyzerAnalyzerConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/accessanalyzer_analyzer#tags AccessanalyzerAnalyzer#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/aws-cdk.accessanalyzerAnalyzer.AccessanalyzerAnalyzerConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/accessanalyzer_analyzer#tags_all AccessanalyzerAnalyzer#tags_all}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/aws-cdk.accessanalyzerAnalyzer.AccessanalyzerAnalyzerConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/accessanalyzer_analyzer#type AccessanalyzerAnalyzer#type}.

---



