# `aws_cloudwatch_metric_stream`

Refer to the Terraform Registory for docs: [`aws_cloudwatch_metric_stream`](https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cloudwatch_metric_stream).

# `cloudwatchMetricStream` Submodule <a name="`cloudwatchMetricStream` Submodule" id="@cdktf/aws-cdk.cloudwatchMetricStream"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudwatchMetricStream <a name="CloudwatchMetricStream" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStream"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cloudwatch_metric_stream aws_cloudwatch_metric_stream}.

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStream.Initializer"></a>

```typescript
import { cloudwatchMetricStream } from '@cdktf/aws-cdk'

new cloudwatchMetricStream.CloudwatchMetricStream(scope: Construct, id: string, config: CloudwatchMetricStreamConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStream.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStream.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStream.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamConfig">CloudwatchMetricStreamConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStream.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStream.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStream.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamConfig">CloudwatchMetricStreamConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStream.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStream.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStream.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStream.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStream.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStream.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStream.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStream.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStream.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStream.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStream.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStream.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStream.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStream.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStream.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStream.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStream.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStream.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStream.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStream.putExcludeFilter">putExcludeFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStream.putIncludeFilter">putIncludeFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStream.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStream.resetExcludeFilter">resetExcludeFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStream.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStream.resetIncludeFilter">resetIncludeFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStream.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStream.resetNamePrefix">resetNamePrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStream.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStream.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStream.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStream.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStream.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStream.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStream.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStream.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStream.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStream.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStream.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStream.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStream.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStream.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStream.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStream.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStream.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStream.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStream.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStream.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStream.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStream.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStream.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStream.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStream.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStream.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStream.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStream.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStream.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStream.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStream.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStream.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `importFrom` <a name="importFrom" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStream.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStream.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStream.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStream.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStream.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveTo` <a name="moveTo" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStream.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStream.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStream.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `putExcludeFilter` <a name="putExcludeFilter" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStream.putExcludeFilter"></a>

```typescript
public putExcludeFilter(value: IResolvable | CloudwatchMetricStreamExcludeFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStream.putExcludeFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilter">CloudwatchMetricStreamExcludeFilter</a>[]

---

##### `putIncludeFilter` <a name="putIncludeFilter" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStream.putIncludeFilter"></a>

```typescript
public putIncludeFilter(value: IResolvable | CloudwatchMetricStreamIncludeFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStream.putIncludeFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilter">CloudwatchMetricStreamIncludeFilter</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStream.putTimeouts"></a>

```typescript
public putTimeouts(value: CloudwatchMetricStreamTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStream.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamTimeouts">CloudwatchMetricStreamTimeouts</a>

---

##### `resetExcludeFilter` <a name="resetExcludeFilter" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStream.resetExcludeFilter"></a>

```typescript
public resetExcludeFilter(): void
```

##### `resetId` <a name="resetId" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStream.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIncludeFilter` <a name="resetIncludeFilter" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStream.resetIncludeFilter"></a>

```typescript
public resetIncludeFilter(): void
```

##### `resetName` <a name="resetName" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStream.resetName"></a>

```typescript
public resetName(): void
```

##### `resetNamePrefix` <a name="resetNamePrefix" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStream.resetNamePrefix"></a>

```typescript
public resetNamePrefix(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStream.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStream.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStream.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStream.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStream.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStream.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStream.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a CloudwatchMetricStream resource upon running "cdktf plan <stack-name>". |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStream.isConstruct"></a>

```typescript
import { cloudwatchMetricStream } from '@cdktf/aws-cdk'

cloudwatchMetricStream.CloudwatchMetricStream.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStream.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStream.isTerraformElement"></a>

```typescript
import { cloudwatchMetricStream } from '@cdktf/aws-cdk'

cloudwatchMetricStream.CloudwatchMetricStream.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStream.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStream.isTerraformResource"></a>

```typescript
import { cloudwatchMetricStream } from '@cdktf/aws-cdk'

cloudwatchMetricStream.CloudwatchMetricStream.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStream.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStream.generateConfigForImport"></a>

```typescript
import { cloudwatchMetricStream } from '@cdktf/aws-cdk'

cloudwatchMetricStream.CloudwatchMetricStream.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a CloudwatchMetricStream resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStream.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStream.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CloudwatchMetricStream to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStream.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CloudwatchMetricStream that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cloudwatch_metric_stream#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStream.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the CloudwatchMetricStream to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStream.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStream.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStream.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStream.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStream.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStream.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStream.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStream.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStream.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStream.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStream.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStream.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStream.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStream.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStream.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStream.property.creationDate">creationDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStream.property.excludeFilter">excludeFilter</a></code> | <code><a href="#@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterList">CloudwatchMetricStreamExcludeFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStream.property.includeFilter">includeFilter</a></code> | <code><a href="#@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterList">CloudwatchMetricStreamIncludeFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStream.property.lastUpdateDate">lastUpdateDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStream.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStream.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference">CloudwatchMetricStreamTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStream.property.excludeFilterInput">excludeFilterInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilter">CloudwatchMetricStreamExcludeFilter</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStream.property.firehoseArnInput">firehoseArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStream.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStream.property.includeFilterInput">includeFilterInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilter">CloudwatchMetricStreamIncludeFilter</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStream.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStream.property.namePrefixInput">namePrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStream.property.outputFormatInput">outputFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStream.property.roleArnInput">roleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStream.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStream.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStream.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamTimeouts">CloudwatchMetricStreamTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStream.property.firehoseArn">firehoseArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStream.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStream.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStream.property.namePrefix">namePrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStream.property.outputFormat">outputFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStream.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStream.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStream.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStream.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStream.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStream.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStream.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStream.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStream.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStream.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStream.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStream.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStream.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStream.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStream.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStream.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStream.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStream.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `creationDate`<sup>Required</sup> <a name="creationDate" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStream.property.creationDate"></a>

```typescript
public readonly creationDate: string;
```

- *Type:* string

---

##### `excludeFilter`<sup>Required</sup> <a name="excludeFilter" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStream.property.excludeFilter"></a>

```typescript
public readonly excludeFilter: CloudwatchMetricStreamExcludeFilterList;
```

- *Type:* <a href="#@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterList">CloudwatchMetricStreamExcludeFilterList</a>

---

##### `includeFilter`<sup>Required</sup> <a name="includeFilter" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStream.property.includeFilter"></a>

```typescript
public readonly includeFilter: CloudwatchMetricStreamIncludeFilterList;
```

- *Type:* <a href="#@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterList">CloudwatchMetricStreamIncludeFilterList</a>

---

##### `lastUpdateDate`<sup>Required</sup> <a name="lastUpdateDate" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStream.property.lastUpdateDate"></a>

```typescript
public readonly lastUpdateDate: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStream.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStream.property.timeouts"></a>

```typescript
public readonly timeouts: CloudwatchMetricStreamTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference">CloudwatchMetricStreamTimeoutsOutputReference</a>

---

##### `excludeFilterInput`<sup>Optional</sup> <a name="excludeFilterInput" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStream.property.excludeFilterInput"></a>

```typescript
public readonly excludeFilterInput: IResolvable | CloudwatchMetricStreamExcludeFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilter">CloudwatchMetricStreamExcludeFilter</a>[]

---

##### `firehoseArnInput`<sup>Optional</sup> <a name="firehoseArnInput" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStream.property.firehoseArnInput"></a>

```typescript
public readonly firehoseArnInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStream.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `includeFilterInput`<sup>Optional</sup> <a name="includeFilterInput" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStream.property.includeFilterInput"></a>

```typescript
public readonly includeFilterInput: IResolvable | CloudwatchMetricStreamIncludeFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilter">CloudwatchMetricStreamIncludeFilter</a>[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStream.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `namePrefixInput`<sup>Optional</sup> <a name="namePrefixInput" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStream.property.namePrefixInput"></a>

```typescript
public readonly namePrefixInput: string;
```

- *Type:* string

---

##### `outputFormatInput`<sup>Optional</sup> <a name="outputFormatInput" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStream.property.outputFormatInput"></a>

```typescript
public readonly outputFormatInput: string;
```

- *Type:* string

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStream.property.roleArnInput"></a>

```typescript
public readonly roleArnInput: string;
```

- *Type:* string

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStream.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStream.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStream.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | CloudwatchMetricStreamTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamTimeouts">CloudwatchMetricStreamTimeouts</a>

---

##### `firehoseArn`<sup>Required</sup> <a name="firehoseArn" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStream.property.firehoseArn"></a>

```typescript
public readonly firehoseArn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStream.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStream.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `namePrefix`<sup>Required</sup> <a name="namePrefix" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStream.property.namePrefix"></a>

```typescript
public readonly namePrefix: string;
```

- *Type:* string

---

##### `outputFormat`<sup>Required</sup> <a name="outputFormat" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStream.property.outputFormat"></a>

```typescript
public readonly outputFormat: string;
```

- *Type:* string

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStream.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStream.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStream.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStream.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStream.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudwatchMetricStreamConfig <a name="CloudwatchMetricStreamConfig" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamConfig.Initializer"></a>

```typescript
import { cloudwatchMetricStream } from '@cdktf/aws-cdk'

const cloudwatchMetricStreamConfig: cloudwatchMetricStream.CloudwatchMetricStreamConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.firehoseArn">firehoseArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cloudwatch_metric_stream#firehose_arn CloudwatchMetricStream#firehose_arn}. |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.outputFormat">outputFormat</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cloudwatch_metric_stream#output_format CloudwatchMetricStream#output_format}. |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.roleArn">roleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cloudwatch_metric_stream#role_arn CloudwatchMetricStream#role_arn}. |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.excludeFilter">excludeFilter</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilter">CloudwatchMetricStreamExcludeFilter</a>[]</code> | exclude_filter block. |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cloudwatch_metric_stream#id CloudwatchMetricStream#id}. |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.includeFilter">includeFilter</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilter">CloudwatchMetricStreamIncludeFilter</a>[]</code> | include_filter block. |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cloudwatch_metric_stream#name CloudwatchMetricStream#name}. |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.namePrefix">namePrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cloudwatch_metric_stream#name_prefix CloudwatchMetricStream#name_prefix}. |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cloudwatch_metric_stream#tags CloudwatchMetricStream#tags}. |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cloudwatch_metric_stream#tags_all CloudwatchMetricStream#tags_all}. |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamTimeouts">CloudwatchMetricStreamTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `firehoseArn`<sup>Required</sup> <a name="firehoseArn" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.firehoseArn"></a>

```typescript
public readonly firehoseArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cloudwatch_metric_stream#firehose_arn CloudwatchMetricStream#firehose_arn}.

---

##### `outputFormat`<sup>Required</sup> <a name="outputFormat" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.outputFormat"></a>

```typescript
public readonly outputFormat: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cloudwatch_metric_stream#output_format CloudwatchMetricStream#output_format}.

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cloudwatch_metric_stream#role_arn CloudwatchMetricStream#role_arn}.

---

##### `excludeFilter`<sup>Optional</sup> <a name="excludeFilter" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.excludeFilter"></a>

```typescript
public readonly excludeFilter: IResolvable | CloudwatchMetricStreamExcludeFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilter">CloudwatchMetricStreamExcludeFilter</a>[]

exclude_filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cloudwatch_metric_stream#exclude_filter CloudwatchMetricStream#exclude_filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cloudwatch_metric_stream#id CloudwatchMetricStream#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `includeFilter`<sup>Optional</sup> <a name="includeFilter" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.includeFilter"></a>

```typescript
public readonly includeFilter: IResolvable | CloudwatchMetricStreamIncludeFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilter">CloudwatchMetricStreamIncludeFilter</a>[]

include_filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cloudwatch_metric_stream#include_filter CloudwatchMetricStream#include_filter}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cloudwatch_metric_stream#name CloudwatchMetricStream#name}.

---

##### `namePrefix`<sup>Optional</sup> <a name="namePrefix" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.namePrefix"></a>

```typescript
public readonly namePrefix: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cloudwatch_metric_stream#name_prefix CloudwatchMetricStream#name_prefix}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cloudwatch_metric_stream#tags CloudwatchMetricStream#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cloudwatch_metric_stream#tags_all CloudwatchMetricStream#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamConfig.property.timeouts"></a>

```typescript
public readonly timeouts: CloudwatchMetricStreamTimeouts;
```

- *Type:* <a href="#@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamTimeouts">CloudwatchMetricStreamTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cloudwatch_metric_stream#timeouts CloudwatchMetricStream#timeouts}

---

### CloudwatchMetricStreamExcludeFilter <a name="CloudwatchMetricStreamExcludeFilter" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilter.Initializer"></a>

```typescript
import { cloudwatchMetricStream } from '@cdktf/aws-cdk'

const cloudwatchMetricStreamExcludeFilter: cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilter.property.namespace">namespace</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cloudwatch_metric_stream#namespace CloudwatchMetricStream#namespace}. |

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilter.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cloudwatch_metric_stream#namespace CloudwatchMetricStream#namespace}.

---

### CloudwatchMetricStreamIncludeFilter <a name="CloudwatchMetricStreamIncludeFilter" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilter.Initializer"></a>

```typescript
import { cloudwatchMetricStream } from '@cdktf/aws-cdk'

const cloudwatchMetricStreamIncludeFilter: cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilter.property.namespace">namespace</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cloudwatch_metric_stream#namespace CloudwatchMetricStream#namespace}. |

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilter.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cloudwatch_metric_stream#namespace CloudwatchMetricStream#namespace}.

---

### CloudwatchMetricStreamTimeouts <a name="CloudwatchMetricStreamTimeouts" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamTimeouts.Initializer"></a>

```typescript
import { cloudwatchMetricStream } from '@cdktf/aws-cdk'

const cloudwatchMetricStreamTimeouts: cloudwatchMetricStream.CloudwatchMetricStreamTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cloudwatch_metric_stream#create CloudwatchMetricStream#create}. |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cloudwatch_metric_stream#delete CloudwatchMetricStream#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cloudwatch_metric_stream#create CloudwatchMetricStream#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cloudwatch_metric_stream#delete CloudwatchMetricStream#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### CloudwatchMetricStreamExcludeFilterList <a name="CloudwatchMetricStreamExcludeFilterList" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterList.Initializer"></a>

```typescript
import { cloudwatchMetricStream } from '@cdktf/aws-cdk'

new cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterList.get"></a>

```typescript
public get(index: number): CloudwatchMetricStreamExcludeFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilter">CloudwatchMetricStreamExcludeFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudwatchMetricStreamExcludeFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilter">CloudwatchMetricStreamExcludeFilter</a>[]

---


### CloudwatchMetricStreamExcludeFilterOutputReference <a name="CloudwatchMetricStreamExcludeFilterOutputReference" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.Initializer"></a>

```typescript
import { cloudwatchMetricStream } from '@cdktf/aws-cdk'

new cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilter">CloudwatchMetricStreamExcludeFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudwatchMetricStreamExcludeFilter;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamExcludeFilter">CloudwatchMetricStreamExcludeFilter</a>

---


### CloudwatchMetricStreamIncludeFilterList <a name="CloudwatchMetricStreamIncludeFilterList" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterList.Initializer"></a>

```typescript
import { cloudwatchMetricStream } from '@cdktf/aws-cdk'

new cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterList.get"></a>

```typescript
public get(index: number): CloudwatchMetricStreamIncludeFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilter">CloudwatchMetricStreamIncludeFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudwatchMetricStreamIncludeFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilter">CloudwatchMetricStreamIncludeFilter</a>[]

---


### CloudwatchMetricStreamIncludeFilterOutputReference <a name="CloudwatchMetricStreamIncludeFilterOutputReference" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.Initializer"></a>

```typescript
import { cloudwatchMetricStream } from '@cdktf/aws-cdk'

new cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilter">CloudwatchMetricStreamIncludeFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudwatchMetricStreamIncludeFilter;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamIncludeFilter">CloudwatchMetricStreamIncludeFilter</a>

---


### CloudwatchMetricStreamTimeoutsOutputReference <a name="CloudwatchMetricStreamTimeoutsOutputReference" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.Initializer"></a>

```typescript
import { cloudwatchMetricStream } from '@cdktf/aws-cdk'

new cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamTimeouts">CloudwatchMetricStreamTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudwatchMetricStreamTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.cloudwatchMetricStream.CloudwatchMetricStreamTimeouts">CloudwatchMetricStreamTimeouts</a>

---



