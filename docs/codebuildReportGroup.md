# `aws_codebuild_report_group`

Refer to the Terraform Registory for docs: [`aws_codebuild_report_group`](https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_report_group).

# `codebuildReportGroup` Submodule <a name="`codebuildReportGroup` Submodule" id="@cdktf/aws-cdk.codebuildReportGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CodebuildReportGroup <a name="CodebuildReportGroup" id="@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_report_group aws_codebuild_report_group}.

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroup.Initializer"></a>

```typescript
import { codebuildReportGroup } from '@cdktf/aws-cdk'

new codebuildReportGroup.CodebuildReportGroup(scope: Construct, id: string, config: CodebuildReportGroupConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroup.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroupConfig">CodebuildReportGroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroupConfig">CodebuildReportGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroup.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroup.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroup.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroup.putExportConfig">putExportConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroup.resetDeleteReports">resetDeleteReports</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroup.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroup.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroup.resetTagsAll">resetTagsAll</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroup.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroup.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroup.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroup.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroup.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroup.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroup.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroup.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroup.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroup.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroup.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroup.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroup.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroup.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroup.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroup.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroup.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `importFrom` <a name="importFrom" id="@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroup.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroup.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroup.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroup.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveTo` <a name="moveTo" id="@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroup.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroup.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroup.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `putExportConfig` <a name="putExportConfig" id="@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroup.putExportConfig"></a>

```typescript
public putExportConfig(value: CodebuildReportGroupExportConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroup.putExportConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroupExportConfig">CodebuildReportGroupExportConfig</a>

---

##### `resetDeleteReports` <a name="resetDeleteReports" id="@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroup.resetDeleteReports"></a>

```typescript
public resetDeleteReports(): void
```

##### `resetId` <a name="resetId" id="@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroup.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroup.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroup.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroup.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroup.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a CodebuildReportGroup resource upon running "cdktf plan <stack-name>". |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroup.isConstruct"></a>

```typescript
import { codebuildReportGroup } from '@cdktf/aws-cdk'

codebuildReportGroup.CodebuildReportGroup.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroup.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroup.isTerraformElement"></a>

```typescript
import { codebuildReportGroup } from '@cdktf/aws-cdk'

codebuildReportGroup.CodebuildReportGroup.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroup.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroup.isTerraformResource"></a>

```typescript
import { codebuildReportGroup } from '@cdktf/aws-cdk'

codebuildReportGroup.CodebuildReportGroup.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroup.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroup.generateConfigForImport"></a>

```typescript
import { codebuildReportGroup } from '@cdktf/aws-cdk'

codebuildReportGroup.CodebuildReportGroup.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a CodebuildReportGroup resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CodebuildReportGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CodebuildReportGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_report_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the CodebuildReportGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroup.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroup.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroup.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroup.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroup.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroup.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroup.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroup.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroup.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroup.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroup.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroup.property.created">created</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroup.property.exportConfig">exportConfig</a></code> | <code><a href="#@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroupExportConfigOutputReference">CodebuildReportGroupExportConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroup.property.deleteReportsInput">deleteReportsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroup.property.exportConfigInput">exportConfigInput</a></code> | <code><a href="#@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroupExportConfig">CodebuildReportGroupExportConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroup.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroup.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroup.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroup.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroup.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroup.property.deleteReports">deleteReports</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroup.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroup.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroup.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroup.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroup.property.type">type</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroup.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroup.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroup.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroup.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroup.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroup.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroup.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroup.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroup.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroup.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroup.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroup.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroup.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroup.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroup.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `created`<sup>Required</sup> <a name="created" id="@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroup.property.created"></a>

```typescript
public readonly created: string;
```

- *Type:* string

---

##### `exportConfig`<sup>Required</sup> <a name="exportConfig" id="@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroup.property.exportConfig"></a>

```typescript
public readonly exportConfig: CodebuildReportGroupExportConfigOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroupExportConfigOutputReference">CodebuildReportGroupExportConfigOutputReference</a>

---

##### `deleteReportsInput`<sup>Optional</sup> <a name="deleteReportsInput" id="@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroup.property.deleteReportsInput"></a>

```typescript
public readonly deleteReportsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `exportConfigInput`<sup>Optional</sup> <a name="exportConfigInput" id="@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroup.property.exportConfigInput"></a>

```typescript
public readonly exportConfigInput: CodebuildReportGroupExportConfig;
```

- *Type:* <a href="#@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroupExportConfig">CodebuildReportGroupExportConfig</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroup.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroup.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroup.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroup.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroup.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `deleteReports`<sup>Required</sup> <a name="deleteReports" id="@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroup.property.deleteReports"></a>

```typescript
public readonly deleteReports: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroup.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroup.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroup.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroup.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroup.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroup.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroup.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CodebuildReportGroupConfig <a name="CodebuildReportGroupConfig" id="@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroupConfig.Initializer"></a>

```typescript
import { codebuildReportGroup } from '@cdktf/aws-cdk'

const codebuildReportGroupConfig: codebuildReportGroup.CodebuildReportGroupConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroupConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroupConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroupConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroupConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroupConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroupConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroupConfig.property.exportConfig">exportConfig</a></code> | <code><a href="#@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroupExportConfig">CodebuildReportGroupExportConfig</a></code> | export_config block. |
| <code><a href="#@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroupConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_report_group#name CodebuildReportGroup#name}. |
| <code><a href="#@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroupConfig.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_report_group#type CodebuildReportGroup#type}. |
| <code><a href="#@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroupConfig.property.deleteReports">deleteReports</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_report_group#delete_reports CodebuildReportGroup#delete_reports}. |
| <code><a href="#@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroupConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_report_group#id CodebuildReportGroup#id}. |
| <code><a href="#@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroupConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_report_group#tags CodebuildReportGroup#tags}. |
| <code><a href="#@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroupConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_report_group#tags_all CodebuildReportGroup#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroupConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroupConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroupConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroupConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroupConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroupConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroupConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `exportConfig`<sup>Required</sup> <a name="exportConfig" id="@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroupConfig.property.exportConfig"></a>

```typescript
public readonly exportConfig: CodebuildReportGroupExportConfig;
```

- *Type:* <a href="#@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroupExportConfig">CodebuildReportGroupExportConfig</a>

export_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_report_group#export_config CodebuildReportGroup#export_config}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroupConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_report_group#name CodebuildReportGroup#name}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroupConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_report_group#type CodebuildReportGroup#type}.

---

##### `deleteReports`<sup>Optional</sup> <a name="deleteReports" id="@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroupConfig.property.deleteReports"></a>

```typescript
public readonly deleteReports: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_report_group#delete_reports CodebuildReportGroup#delete_reports}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroupConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_report_group#id CodebuildReportGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroupConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_report_group#tags CodebuildReportGroup#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroupConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_report_group#tags_all CodebuildReportGroup#tags_all}.

---

### CodebuildReportGroupExportConfig <a name="CodebuildReportGroupExportConfig" id="@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroupExportConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroupExportConfig.Initializer"></a>

```typescript
import { codebuildReportGroup } from '@cdktf/aws-cdk'

const codebuildReportGroupExportConfig: codebuildReportGroup.CodebuildReportGroupExportConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroupExportConfig.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_report_group#type CodebuildReportGroup#type}. |
| <code><a href="#@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroupExportConfig.property.s3Destination">s3Destination</a></code> | <code><a href="#@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroupExportConfigS3Destination">CodebuildReportGroupExportConfigS3Destination</a></code> | s3_destination block. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroupExportConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_report_group#type CodebuildReportGroup#type}.

---

##### `s3Destination`<sup>Optional</sup> <a name="s3Destination" id="@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroupExportConfig.property.s3Destination"></a>

```typescript
public readonly s3Destination: CodebuildReportGroupExportConfigS3Destination;
```

- *Type:* <a href="#@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroupExportConfigS3Destination">CodebuildReportGroupExportConfigS3Destination</a>

s3_destination block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_report_group#s3_destination CodebuildReportGroup#s3_destination}

---

### CodebuildReportGroupExportConfigS3Destination <a name="CodebuildReportGroupExportConfigS3Destination" id="@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroupExportConfigS3Destination"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroupExportConfigS3Destination.Initializer"></a>

```typescript
import { codebuildReportGroup } from '@cdktf/aws-cdk'

const codebuildReportGroupExportConfigS3Destination: codebuildReportGroup.CodebuildReportGroupExportConfigS3Destination = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroupExportConfigS3Destination.property.bucket">bucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_report_group#bucket CodebuildReportGroup#bucket}. |
| <code><a href="#@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroupExportConfigS3Destination.property.encryptionKey">encryptionKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_report_group#encryption_key CodebuildReportGroup#encryption_key}. |
| <code><a href="#@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroupExportConfigS3Destination.property.encryptionDisabled">encryptionDisabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_report_group#encryption_disabled CodebuildReportGroup#encryption_disabled}. |
| <code><a href="#@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroupExportConfigS3Destination.property.packaging">packaging</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_report_group#packaging CodebuildReportGroup#packaging}. |
| <code><a href="#@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroupExportConfigS3Destination.property.path">path</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_report_group#path CodebuildReportGroup#path}. |

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroupExportConfigS3Destination.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_report_group#bucket CodebuildReportGroup#bucket}.

---

##### `encryptionKey`<sup>Required</sup> <a name="encryptionKey" id="@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroupExportConfigS3Destination.property.encryptionKey"></a>

```typescript
public readonly encryptionKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_report_group#encryption_key CodebuildReportGroup#encryption_key}.

---

##### `encryptionDisabled`<sup>Optional</sup> <a name="encryptionDisabled" id="@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroupExportConfigS3Destination.property.encryptionDisabled"></a>

```typescript
public readonly encryptionDisabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_report_group#encryption_disabled CodebuildReportGroup#encryption_disabled}.

---

##### `packaging`<sup>Optional</sup> <a name="packaging" id="@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroupExportConfigS3Destination.property.packaging"></a>

```typescript
public readonly packaging: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_report_group#packaging CodebuildReportGroup#packaging}.

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroupExportConfigS3Destination.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_report_group#path CodebuildReportGroup#path}.

---

## Classes <a name="Classes" id="Classes"></a>

### CodebuildReportGroupExportConfigOutputReference <a name="CodebuildReportGroupExportConfigOutputReference" id="@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroupExportConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroupExportConfigOutputReference.Initializer"></a>

```typescript
import { codebuildReportGroup } from '@cdktf/aws-cdk'

new codebuildReportGroup.CodebuildReportGroupExportConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroupExportConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroupExportConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroupExportConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroupExportConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroupExportConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroupExportConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroupExportConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroupExportConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroupExportConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroupExportConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroupExportConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroupExportConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroupExportConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroupExportConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroupExportConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroupExportConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroupExportConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroupExportConfigOutputReference.putS3Destination">putS3Destination</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroupExportConfigOutputReference.resetS3Destination">resetS3Destination</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroupExportConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroupExportConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroupExportConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroupExportConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroupExportConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroupExportConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroupExportConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroupExportConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroupExportConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroupExportConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroupExportConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroupExportConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroupExportConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroupExportConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroupExportConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroupExportConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroupExportConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroupExportConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroupExportConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroupExportConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroupExportConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroupExportConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroupExportConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroupExportConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putS3Destination` <a name="putS3Destination" id="@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroupExportConfigOutputReference.putS3Destination"></a>

```typescript
public putS3Destination(value: CodebuildReportGroupExportConfigS3Destination): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroupExportConfigOutputReference.putS3Destination.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroupExportConfigS3Destination">CodebuildReportGroupExportConfigS3Destination</a>

---

##### `resetS3Destination` <a name="resetS3Destination" id="@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroupExportConfigOutputReference.resetS3Destination"></a>

```typescript
public resetS3Destination(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroupExportConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroupExportConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroupExportConfigOutputReference.property.s3Destination">s3Destination</a></code> | <code><a href="#@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference">CodebuildReportGroupExportConfigS3DestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroupExportConfigOutputReference.property.s3DestinationInput">s3DestinationInput</a></code> | <code><a href="#@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroupExportConfigS3Destination">CodebuildReportGroupExportConfigS3Destination</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroupExportConfigOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroupExportConfigOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroupExportConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroupExportConfig">CodebuildReportGroupExportConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroupExportConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroupExportConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `s3Destination`<sup>Required</sup> <a name="s3Destination" id="@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroupExportConfigOutputReference.property.s3Destination"></a>

```typescript
public readonly s3Destination: CodebuildReportGroupExportConfigS3DestinationOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference">CodebuildReportGroupExportConfigS3DestinationOutputReference</a>

---

##### `s3DestinationInput`<sup>Optional</sup> <a name="s3DestinationInput" id="@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroupExportConfigOutputReference.property.s3DestinationInput"></a>

```typescript
public readonly s3DestinationInput: CodebuildReportGroupExportConfigS3Destination;
```

- *Type:* <a href="#@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroupExportConfigS3Destination">CodebuildReportGroupExportConfigS3Destination</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroupExportConfigOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroupExportConfigOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroupExportConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CodebuildReportGroupExportConfig;
```

- *Type:* <a href="#@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroupExportConfig">CodebuildReportGroupExportConfig</a>

---


### CodebuildReportGroupExportConfigS3DestinationOutputReference <a name="CodebuildReportGroupExportConfigS3DestinationOutputReference" id="@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.Initializer"></a>

```typescript
import { codebuildReportGroup } from '@cdktf/aws-cdk'

new codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.resetEncryptionDisabled">resetEncryptionDisabled</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.resetPackaging">resetPackaging</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.resetPath">resetPath</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEncryptionDisabled` <a name="resetEncryptionDisabled" id="@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.resetEncryptionDisabled"></a>

```typescript
public resetEncryptionDisabled(): void
```

##### `resetPackaging` <a name="resetPackaging" id="@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.resetPackaging"></a>

```typescript
public resetPackaging(): void
```

##### `resetPath` <a name="resetPath" id="@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.resetPath"></a>

```typescript
public resetPath(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.property.bucketInput">bucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.property.encryptionDisabledInput">encryptionDisabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.property.encryptionKeyInput">encryptionKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.property.packagingInput">packagingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.property.pathInput">pathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.property.bucket">bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.property.encryptionDisabled">encryptionDisabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.property.encryptionKey">encryptionKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.property.packaging">packaging</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroupExportConfigS3Destination">CodebuildReportGroupExportConfigS3Destination</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.property.bucketInput"></a>

```typescript
public readonly bucketInput: string;
```

- *Type:* string

---

##### `encryptionDisabledInput`<sup>Optional</sup> <a name="encryptionDisabledInput" id="@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.property.encryptionDisabledInput"></a>

```typescript
public readonly encryptionDisabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `encryptionKeyInput`<sup>Optional</sup> <a name="encryptionKeyInput" id="@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.property.encryptionKeyInput"></a>

```typescript
public readonly encryptionKeyInput: string;
```

- *Type:* string

---

##### `packagingInput`<sup>Optional</sup> <a name="packagingInput" id="@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.property.packagingInput"></a>

```typescript
public readonly packagingInput: string;
```

- *Type:* string

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.property.pathInput"></a>

```typescript
public readonly pathInput: string;
```

- *Type:* string

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

---

##### `encryptionDisabled`<sup>Required</sup> <a name="encryptionDisabled" id="@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.property.encryptionDisabled"></a>

```typescript
public readonly encryptionDisabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `encryptionKey`<sup>Required</sup> <a name="encryptionKey" id="@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.property.encryptionKey"></a>

```typescript
public readonly encryptionKey: string;
```

- *Type:* string

---

##### `packaging`<sup>Required</sup> <a name="packaging" id="@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.property.packaging"></a>

```typescript
public readonly packaging: string;
```

- *Type:* string

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroupExportConfigS3DestinationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CodebuildReportGroupExportConfigS3Destination;
```

- *Type:* <a href="#@cdktf/aws-cdk.codebuildReportGroup.CodebuildReportGroupExportConfigS3Destination">CodebuildReportGroupExportConfigS3Destination</a>

---



