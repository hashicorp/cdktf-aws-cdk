# `resourcegroupsGroup` Submodule <a name="`resourcegroupsGroup` Submodule" id="@cdktf/aws-cdk.resourcegroupsGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ResourcegroupsGroup <a name="ResourcegroupsGroup" id="@cdktf/aws-cdk.resourcegroupsGroup.ResourcegroupsGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/resourcegroups_group aws_resourcegroups_group}.

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.resourcegroupsGroup.ResourcegroupsGroup.Initializer"></a>

```typescript
import { resourcegroupsGroup } from '@cdktf/aws-cdk'

new resourcegroupsGroup.ResourcegroupsGroup(scope: Construct, id: string, config: ResourcegroupsGroupConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.resourcegroupsGroup.ResourcegroupsGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/aws-cdk.resourcegroupsGroup.ResourcegroupsGroup.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/aws-cdk.resourcegroupsGroup.ResourcegroupsGroup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/aws-cdk.resourcegroupsGroup.ResourcegroupsGroupConfig">ResourcegroupsGroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.resourcegroupsGroup.ResourcegroupsGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.resourcegroupsGroup.ResourcegroupsGroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/aws-cdk.resourcegroupsGroup.ResourcegroupsGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/aws-cdk.resourcegroupsGroup.ResourcegroupsGroupConfig">ResourcegroupsGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.resourcegroupsGroup.ResourcegroupsGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/aws-cdk.resourcegroupsGroup.ResourcegroupsGroup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.resourcegroupsGroup.ResourcegroupsGroup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/aws-cdk.resourcegroupsGroup.ResourcegroupsGroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/aws-cdk.resourcegroupsGroup.ResourcegroupsGroup.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.resourcegroupsGroup.ResourcegroupsGroup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.resourcegroupsGroup.ResourcegroupsGroup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/aws-cdk.resourcegroupsGroup.ResourcegroupsGroup.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/aws-cdk.resourcegroupsGroup.ResourcegroupsGroup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.resourcegroupsGroup.ResourcegroupsGroup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.resourcegroupsGroup.ResourcegroupsGroup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.resourcegroupsGroup.ResourcegroupsGroup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.resourcegroupsGroup.ResourcegroupsGroup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.resourcegroupsGroup.ResourcegroupsGroup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.resourcegroupsGroup.ResourcegroupsGroup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.resourcegroupsGroup.ResourcegroupsGroup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.resourcegroupsGroup.ResourcegroupsGroup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.resourcegroupsGroup.ResourcegroupsGroup.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.resourcegroupsGroup.ResourcegroupsGroup.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.resourcegroupsGroup.ResourcegroupsGroup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.resourcegroupsGroup.ResourcegroupsGroup.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/aws-cdk.resourcegroupsGroup.ResourcegroupsGroup.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/aws-cdk.resourcegroupsGroup.ResourcegroupsGroup.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/aws-cdk.resourcegroupsGroup.ResourcegroupsGroup.putResourceQuery">putResourceQuery</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.resourcegroupsGroup.ResourcegroupsGroup.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.resourcegroupsGroup.ResourcegroupsGroup.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.resourcegroupsGroup.ResourcegroupsGroup.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.resourcegroupsGroup.ResourcegroupsGroup.resetTagsAll">resetTagsAll</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.resourcegroupsGroup.ResourcegroupsGroup.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/aws-cdk.resourcegroupsGroup.ResourcegroupsGroup.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/aws-cdk.resourcegroupsGroup.ResourcegroupsGroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.resourcegroupsGroup.ResourcegroupsGroup.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/aws-cdk.resourcegroupsGroup.ResourcegroupsGroup.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/aws-cdk.resourcegroupsGroup.ResourcegroupsGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/aws-cdk.resourcegroupsGroup.ResourcegroupsGroup.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/aws-cdk.resourcegroupsGroup.ResourcegroupsGroup.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/aws-cdk.resourcegroupsGroup.ResourcegroupsGroup.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/aws-cdk.resourcegroupsGroup.ResourcegroupsGroup.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/aws-cdk.resourcegroupsGroup.ResourcegroupsGroup.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/aws-cdk.resourcegroupsGroup.ResourcegroupsGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.resourcegroupsGroup.ResourcegroupsGroup.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.resourcegroupsGroup.ResourcegroupsGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.resourcegroupsGroup.ResourcegroupsGroup.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.resourcegroupsGroup.ResourcegroupsGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.resourcegroupsGroup.ResourcegroupsGroup.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.resourcegroupsGroup.ResourcegroupsGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.resourcegroupsGroup.ResourcegroupsGroup.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.resourcegroupsGroup.ResourcegroupsGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.resourcegroupsGroup.ResourcegroupsGroup.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.resourcegroupsGroup.ResourcegroupsGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.resourcegroupsGroup.ResourcegroupsGroup.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.resourcegroupsGroup.ResourcegroupsGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.resourcegroupsGroup.ResourcegroupsGroup.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.resourcegroupsGroup.ResourcegroupsGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.resourcegroupsGroup.ResourcegroupsGroup.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.resourcegroupsGroup.ResourcegroupsGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.resourcegroupsGroup.ResourcegroupsGroup.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.resourcegroupsGroup.ResourcegroupsGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/aws-cdk.resourcegroupsGroup.ResourcegroupsGroup.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/aws-cdk.resourcegroupsGroup.ResourcegroupsGroup.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.resourcegroupsGroup.ResourcegroupsGroup.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.resourcegroupsGroup.ResourcegroupsGroup.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.resourcegroupsGroup.ResourcegroupsGroup.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.resourcegroupsGroup.ResourcegroupsGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/aws-cdk.resourcegroupsGroup.ResourcegroupsGroup.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.resourcegroupsGroup.ResourcegroupsGroup.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/aws-cdk.resourcegroupsGroup.ResourcegroupsGroup.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/aws-cdk.resourcegroupsGroup.ResourcegroupsGroup.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/aws-cdk.resourcegroupsGroup.ResourcegroupsGroup.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/aws-cdk.resourcegroupsGroup.ResourcegroupsGroup.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.resourcegroupsGroup.ResourcegroupsGroup.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putResourceQuery` <a name="putResourceQuery" id="@cdktf/aws-cdk.resourcegroupsGroup.ResourcegroupsGroup.putResourceQuery"></a>

```typescript
public putResourceQuery(value: ResourcegroupsGroupResourceQuery): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.resourcegroupsGroup.ResourcegroupsGroup.putResourceQuery.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.resourcegroupsGroup.ResourcegroupsGroupResourceQuery">ResourcegroupsGroupResourceQuery</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/aws-cdk.resourcegroupsGroup.ResourcegroupsGroup.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/aws-cdk.resourcegroupsGroup.ResourcegroupsGroup.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/aws-cdk.resourcegroupsGroup.ResourcegroupsGroup.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/aws-cdk.resourcegroupsGroup.ResourcegroupsGroup.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.resourcegroupsGroup.ResourcegroupsGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/aws-cdk.resourcegroupsGroup.ResourcegroupsGroup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.resourcegroupsGroup.ResourcegroupsGroup.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.resourcegroupsGroup.ResourcegroupsGroup.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ResourcegroupsGroup resource upon running "cdktf plan <stack-name>". |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@cdktf/aws-cdk.resourcegroupsGroup.ResourcegroupsGroup.isConstruct"></a>

```typescript
import { resourcegroupsGroup } from '@cdktf/aws-cdk'

resourcegroupsGroup.ResourcegroupsGroup.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.resourcegroupsGroup.ResourcegroupsGroup.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/aws-cdk.resourcegroupsGroup.ResourcegroupsGroup.isTerraformElement"></a>

```typescript
import { resourcegroupsGroup } from '@cdktf/aws-cdk'

resourcegroupsGroup.ResourcegroupsGroup.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.resourcegroupsGroup.ResourcegroupsGroup.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/aws-cdk.resourcegroupsGroup.ResourcegroupsGroup.isTerraformResource"></a>

```typescript
import { resourcegroupsGroup } from '@cdktf/aws-cdk'

resourcegroupsGroup.ResourcegroupsGroup.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.resourcegroupsGroup.ResourcegroupsGroup.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/aws-cdk.resourcegroupsGroup.ResourcegroupsGroup.generateConfigForImport"></a>

```typescript
import { resourcegroupsGroup } from '@cdktf/aws-cdk'

resourcegroupsGroup.ResourcegroupsGroup.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ResourcegroupsGroup resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.resourcegroupsGroup.ResourcegroupsGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/aws-cdk.resourcegroupsGroup.ResourcegroupsGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ResourcegroupsGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/aws-cdk.resourcegroupsGroup.ResourcegroupsGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ResourcegroupsGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/resourcegroups_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.resourcegroupsGroup.ResourcegroupsGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ResourcegroupsGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.resourcegroupsGroup.ResourcegroupsGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/aws-cdk.resourcegroupsGroup.ResourcegroupsGroup.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.resourcegroupsGroup.ResourcegroupsGroup.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.resourcegroupsGroup.ResourcegroupsGroup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.resourcegroupsGroup.ResourcegroupsGroup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.resourcegroupsGroup.ResourcegroupsGroup.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.resourcegroupsGroup.ResourcegroupsGroup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.resourcegroupsGroup.ResourcegroupsGroup.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.resourcegroupsGroup.ResourcegroupsGroup.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.resourcegroupsGroup.ResourcegroupsGroup.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.resourcegroupsGroup.ResourcegroupsGroup.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.resourcegroupsGroup.ResourcegroupsGroup.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.resourcegroupsGroup.ResourcegroupsGroup.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.resourcegroupsGroup.ResourcegroupsGroup.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.resourcegroupsGroup.ResourcegroupsGroup.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.resourcegroupsGroup.ResourcegroupsGroup.property.resourceQuery">resourceQuery</a></code> | <code><a href="#@cdktf/aws-cdk.resourcegroupsGroup.ResourcegroupsGroupResourceQueryOutputReference">ResourcegroupsGroupResourceQueryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.resourcegroupsGroup.ResourcegroupsGroup.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.resourcegroupsGroup.ResourcegroupsGroup.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.resourcegroupsGroup.ResourcegroupsGroup.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.resourcegroupsGroup.ResourcegroupsGroup.property.resourceQueryInput">resourceQueryInput</a></code> | <code><a href="#@cdktf/aws-cdk.resourcegroupsGroup.ResourcegroupsGroupResourceQuery">ResourcegroupsGroupResourceQuery</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.resourcegroupsGroup.ResourcegroupsGroup.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.resourcegroupsGroup.ResourcegroupsGroup.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.resourcegroupsGroup.ResourcegroupsGroup.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.resourcegroupsGroup.ResourcegroupsGroup.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.resourcegroupsGroup.ResourcegroupsGroup.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.resourcegroupsGroup.ResourcegroupsGroup.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.resourcegroupsGroup.ResourcegroupsGroup.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/aws-cdk.resourcegroupsGroup.ResourcegroupsGroup.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/aws-cdk.resourcegroupsGroup.ResourcegroupsGroup.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.resourcegroupsGroup.ResourcegroupsGroup.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/aws-cdk.resourcegroupsGroup.ResourcegroupsGroup.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/aws-cdk.resourcegroupsGroup.ResourcegroupsGroup.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/aws-cdk.resourcegroupsGroup.ResourcegroupsGroup.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/aws-cdk.resourcegroupsGroup.ResourcegroupsGroup.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.resourcegroupsGroup.ResourcegroupsGroup.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.resourcegroupsGroup.ResourcegroupsGroup.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.resourcegroupsGroup.ResourcegroupsGroup.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.resourcegroupsGroup.ResourcegroupsGroup.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.resourcegroupsGroup.ResourcegroupsGroup.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.resourcegroupsGroup.ResourcegroupsGroup.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.resourcegroupsGroup.ResourcegroupsGroup.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/aws-cdk.resourcegroupsGroup.ResourcegroupsGroup.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `resourceQuery`<sup>Required</sup> <a name="resourceQuery" id="@cdktf/aws-cdk.resourcegroupsGroup.ResourcegroupsGroup.property.resourceQuery"></a>

```typescript
public readonly resourceQuery: ResourcegroupsGroupResourceQueryOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.resourcegroupsGroup.ResourcegroupsGroupResourceQueryOutputReference">ResourcegroupsGroupResourceQueryOutputReference</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/aws-cdk.resourcegroupsGroup.ResourcegroupsGroup.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/aws-cdk.resourcegroupsGroup.ResourcegroupsGroup.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/aws-cdk.resourcegroupsGroup.ResourcegroupsGroup.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `resourceQueryInput`<sup>Optional</sup> <a name="resourceQueryInput" id="@cdktf/aws-cdk.resourcegroupsGroup.ResourcegroupsGroup.property.resourceQueryInput"></a>

```typescript
public readonly resourceQueryInput: ResourcegroupsGroupResourceQuery;
```

- *Type:* <a href="#@cdktf/aws-cdk.resourcegroupsGroup.ResourcegroupsGroupResourceQuery">ResourcegroupsGroupResourceQuery</a>

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/aws-cdk.resourcegroupsGroup.ResourcegroupsGroup.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/aws-cdk.resourcegroupsGroup.ResourcegroupsGroup.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/aws-cdk.resourcegroupsGroup.ResourcegroupsGroup.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.resourcegroupsGroup.ResourcegroupsGroup.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/aws-cdk.resourcegroupsGroup.ResourcegroupsGroup.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/aws-cdk.resourcegroupsGroup.ResourcegroupsGroup.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/aws-cdk.resourcegroupsGroup.ResourcegroupsGroup.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.resourcegroupsGroup.ResourcegroupsGroup.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/aws-cdk.resourcegroupsGroup.ResourcegroupsGroup.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ResourcegroupsGroupConfig <a name="ResourcegroupsGroupConfig" id="@cdktf/aws-cdk.resourcegroupsGroup.ResourcegroupsGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.resourcegroupsGroup.ResourcegroupsGroupConfig.Initializer"></a>

```typescript
import { resourcegroupsGroup } from '@cdktf/aws-cdk'

const resourcegroupsGroupConfig: resourcegroupsGroup.ResourcegroupsGroupConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.resourcegroupsGroup.ResourcegroupsGroupConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.resourcegroupsGroup.ResourcegroupsGroupConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.resourcegroupsGroup.ResourcegroupsGroupConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.resourcegroupsGroup.ResourcegroupsGroupConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.resourcegroupsGroup.ResourcegroupsGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.resourcegroupsGroup.ResourcegroupsGroupConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.resourcegroupsGroup.ResourcegroupsGroupConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.resourcegroupsGroup.ResourcegroupsGroupConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/resourcegroups_group#name ResourcegroupsGroup#name}. |
| <code><a href="#@cdktf/aws-cdk.resourcegroupsGroup.ResourcegroupsGroupConfig.property.resourceQuery">resourceQuery</a></code> | <code><a href="#@cdktf/aws-cdk.resourcegroupsGroup.ResourcegroupsGroupResourceQuery">ResourcegroupsGroupResourceQuery</a></code> | resource_query block. |
| <code><a href="#@cdktf/aws-cdk.resourcegroupsGroup.ResourcegroupsGroupConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/resourcegroups_group#description ResourcegroupsGroup#description}. |
| <code><a href="#@cdktf/aws-cdk.resourcegroupsGroup.ResourcegroupsGroupConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/resourcegroups_group#id ResourcegroupsGroup#id}. |
| <code><a href="#@cdktf/aws-cdk.resourcegroupsGroup.ResourcegroupsGroupConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/resourcegroups_group#tags ResourcegroupsGroup#tags}. |
| <code><a href="#@cdktf/aws-cdk.resourcegroupsGroup.ResourcegroupsGroupConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/resourcegroups_group#tags_all ResourcegroupsGroup#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.resourcegroupsGroup.ResourcegroupsGroupConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.resourcegroupsGroup.ResourcegroupsGroupConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.resourcegroupsGroup.ResourcegroupsGroupConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.resourcegroupsGroup.ResourcegroupsGroupConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.resourcegroupsGroup.ResourcegroupsGroupConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.resourcegroupsGroup.ResourcegroupsGroupConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.resourcegroupsGroup.ResourcegroupsGroupConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/aws-cdk.resourcegroupsGroup.ResourcegroupsGroupConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/resourcegroups_group#name ResourcegroupsGroup#name}.

---

##### `resourceQuery`<sup>Required</sup> <a name="resourceQuery" id="@cdktf/aws-cdk.resourcegroupsGroup.ResourcegroupsGroupConfig.property.resourceQuery"></a>

```typescript
public readonly resourceQuery: ResourcegroupsGroupResourceQuery;
```

- *Type:* <a href="#@cdktf/aws-cdk.resourcegroupsGroup.ResourcegroupsGroupResourceQuery">ResourcegroupsGroupResourceQuery</a>

resource_query block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/resourcegroups_group#resource_query ResourcegroupsGroup#resource_query}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/aws-cdk.resourcegroupsGroup.ResourcegroupsGroupConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/resourcegroups_group#description ResourcegroupsGroup#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/aws-cdk.resourcegroupsGroup.ResourcegroupsGroupConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/resourcegroups_group#id ResourcegroupsGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/aws-cdk.resourcegroupsGroup.ResourcegroupsGroupConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/resourcegroups_group#tags ResourcegroupsGroup#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/aws-cdk.resourcegroupsGroup.ResourcegroupsGroupConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/resourcegroups_group#tags_all ResourcegroupsGroup#tags_all}.

---

### ResourcegroupsGroupResourceQuery <a name="ResourcegroupsGroupResourceQuery" id="@cdktf/aws-cdk.resourcegroupsGroup.ResourcegroupsGroupResourceQuery"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.resourcegroupsGroup.ResourcegroupsGroupResourceQuery.Initializer"></a>

```typescript
import { resourcegroupsGroup } from '@cdktf/aws-cdk'

const resourcegroupsGroupResourceQuery: resourcegroupsGroup.ResourcegroupsGroupResourceQuery = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.resourcegroupsGroup.ResourcegroupsGroupResourceQuery.property.query">query</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/resourcegroups_group#query ResourcegroupsGroup#query}. |
| <code><a href="#@cdktf/aws-cdk.resourcegroupsGroup.ResourcegroupsGroupResourceQuery.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/resourcegroups_group#type ResourcegroupsGroup#type}. |

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/aws-cdk.resourcegroupsGroup.ResourcegroupsGroupResourceQuery.property.query"></a>

```typescript
public readonly query: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/resourcegroups_group#query ResourcegroupsGroup#query}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/aws-cdk.resourcegroupsGroup.ResourcegroupsGroupResourceQuery.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/resourcegroups_group#type ResourcegroupsGroup#type}.

---

## Classes <a name="Classes" id="Classes"></a>

### ResourcegroupsGroupResourceQueryOutputReference <a name="ResourcegroupsGroupResourceQueryOutputReference" id="@cdktf/aws-cdk.resourcegroupsGroup.ResourcegroupsGroupResourceQueryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.resourcegroupsGroup.ResourcegroupsGroupResourceQueryOutputReference.Initializer"></a>

```typescript
import { resourcegroupsGroup } from '@cdktf/aws-cdk'

new resourcegroupsGroup.ResourcegroupsGroupResourceQueryOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.resourcegroupsGroup.ResourcegroupsGroupResourceQueryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.resourcegroupsGroup.ResourcegroupsGroupResourceQueryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.resourcegroupsGroup.ResourcegroupsGroupResourceQueryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.resourcegroupsGroup.ResourcegroupsGroupResourceQueryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.resourcegroupsGroup.ResourcegroupsGroupResourceQueryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.resourcegroupsGroup.ResourcegroupsGroupResourceQueryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.resourcegroupsGroup.ResourcegroupsGroupResourceQueryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.resourcegroupsGroup.ResourcegroupsGroupResourceQueryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.resourcegroupsGroup.ResourcegroupsGroupResourceQueryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.resourcegroupsGroup.ResourcegroupsGroupResourceQueryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.resourcegroupsGroup.ResourcegroupsGroupResourceQueryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.resourcegroupsGroup.ResourcegroupsGroupResourceQueryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.resourcegroupsGroup.ResourcegroupsGroupResourceQueryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.resourcegroupsGroup.ResourcegroupsGroupResourceQueryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.resourcegroupsGroup.ResourcegroupsGroupResourceQueryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.resourcegroupsGroup.ResourcegroupsGroupResourceQueryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.resourcegroupsGroup.ResourcegroupsGroupResourceQueryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.resourcegroupsGroup.ResourcegroupsGroupResourceQueryOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.resourcegroupsGroup.ResourcegroupsGroupResourceQueryOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.resourcegroupsGroup.ResourcegroupsGroupResourceQueryOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.resourcegroupsGroup.ResourcegroupsGroupResourceQueryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.resourcegroupsGroup.ResourcegroupsGroupResourceQueryOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.resourcegroupsGroup.ResourcegroupsGroupResourceQueryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.resourcegroupsGroup.ResourcegroupsGroupResourceQueryOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.resourcegroupsGroup.ResourcegroupsGroupResourceQueryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.resourcegroupsGroup.ResourcegroupsGroupResourceQueryOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.resourcegroupsGroup.ResourcegroupsGroupResourceQueryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.resourcegroupsGroup.ResourcegroupsGroupResourceQueryOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.resourcegroupsGroup.ResourcegroupsGroupResourceQueryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.resourcegroupsGroup.ResourcegroupsGroupResourceQueryOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.resourcegroupsGroup.ResourcegroupsGroupResourceQueryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.resourcegroupsGroup.ResourcegroupsGroupResourceQueryOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.resourcegroupsGroup.ResourcegroupsGroupResourceQueryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.resourcegroupsGroup.ResourcegroupsGroupResourceQueryOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.resourcegroupsGroup.ResourcegroupsGroupResourceQueryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.resourcegroupsGroup.ResourcegroupsGroupResourceQueryOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.resourcegroupsGroup.ResourcegroupsGroupResourceQueryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.resourcegroupsGroup.ResourcegroupsGroupResourceQueryOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.resourcegroupsGroup.ResourcegroupsGroupResourceQueryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.resourcegroupsGroup.ResourcegroupsGroupResourceQueryOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.resourcegroupsGroup.ResourcegroupsGroupResourceQueryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.resourcegroupsGroup.ResourcegroupsGroupResourceQueryOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetType` <a name="resetType" id="@cdktf/aws-cdk.resourcegroupsGroup.ResourcegroupsGroupResourceQueryOutputReference.resetType"></a>

```typescript
public resetType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.resourcegroupsGroup.ResourcegroupsGroupResourceQueryOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.resourcegroupsGroup.ResourcegroupsGroupResourceQueryOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.resourcegroupsGroup.ResourcegroupsGroupResourceQueryOutputReference.property.queryInput">queryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.resourcegroupsGroup.ResourcegroupsGroupResourceQueryOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.resourcegroupsGroup.ResourcegroupsGroupResourceQueryOutputReference.property.query">query</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.resourcegroupsGroup.ResourcegroupsGroupResourceQueryOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.resourcegroupsGroup.ResourcegroupsGroupResourceQueryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.resourcegroupsGroup.ResourcegroupsGroupResourceQuery">ResourcegroupsGroupResourceQuery</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.resourcegroupsGroup.ResourcegroupsGroupResourceQueryOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.resourcegroupsGroup.ResourcegroupsGroupResourceQueryOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `queryInput`<sup>Optional</sup> <a name="queryInput" id="@cdktf/aws-cdk.resourcegroupsGroup.ResourcegroupsGroupResourceQueryOutputReference.property.queryInput"></a>

```typescript
public readonly queryInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/aws-cdk.resourcegroupsGroup.ResourcegroupsGroupResourceQueryOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/aws-cdk.resourcegroupsGroup.ResourcegroupsGroupResourceQueryOutputReference.property.query"></a>

```typescript
public readonly query: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/aws-cdk.resourcegroupsGroup.ResourcegroupsGroupResourceQueryOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.resourcegroupsGroup.ResourcegroupsGroupResourceQueryOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ResourcegroupsGroupResourceQuery;
```

- *Type:* <a href="#@cdktf/aws-cdk.resourcegroupsGroup.ResourcegroupsGroupResourceQuery">ResourcegroupsGroupResourceQuery</a>

---



