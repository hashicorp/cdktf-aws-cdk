# `aws_iam_service_linked_role`

Refer to the Terraform Registory for docs: [`aws_iam_service_linked_role`](https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iam_service_linked_role).

# `iamServiceLinkedRole` Submodule <a name="`iamServiceLinkedRole` Submodule" id="@cdktf/aws-cdk.iamServiceLinkedRole"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IamServiceLinkedRole <a name="IamServiceLinkedRole" id="@cdktf/aws-cdk.iamServiceLinkedRole.IamServiceLinkedRole"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iam_service_linked_role aws_iam_service_linked_role}.

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.iamServiceLinkedRole.IamServiceLinkedRole.Initializer"></a>

```typescript
import { iamServiceLinkedRole } from '@cdktf/aws-cdk'

new iamServiceLinkedRole.IamServiceLinkedRole(scope: Construct, id: string, config: IamServiceLinkedRoleConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.iamServiceLinkedRole.IamServiceLinkedRole.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/aws-cdk.iamServiceLinkedRole.IamServiceLinkedRole.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/aws-cdk.iamServiceLinkedRole.IamServiceLinkedRole.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/aws-cdk.iamServiceLinkedRole.IamServiceLinkedRoleConfig">IamServiceLinkedRoleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.iamServiceLinkedRole.IamServiceLinkedRole.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.iamServiceLinkedRole.IamServiceLinkedRole.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/aws-cdk.iamServiceLinkedRole.IamServiceLinkedRole.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/aws-cdk.iamServiceLinkedRole.IamServiceLinkedRoleConfig">IamServiceLinkedRoleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.iamServiceLinkedRole.IamServiceLinkedRole.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/aws-cdk.iamServiceLinkedRole.IamServiceLinkedRole.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iamServiceLinkedRole.IamServiceLinkedRole.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/aws-cdk.iamServiceLinkedRole.IamServiceLinkedRole.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/aws-cdk.iamServiceLinkedRole.IamServiceLinkedRole.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iamServiceLinkedRole.IamServiceLinkedRole.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/aws-cdk.iamServiceLinkedRole.IamServiceLinkedRole.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/aws-cdk.iamServiceLinkedRole.IamServiceLinkedRole.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iamServiceLinkedRole.IamServiceLinkedRole.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iamServiceLinkedRole.IamServiceLinkedRole.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iamServiceLinkedRole.IamServiceLinkedRole.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iamServiceLinkedRole.IamServiceLinkedRole.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iamServiceLinkedRole.IamServiceLinkedRole.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iamServiceLinkedRole.IamServiceLinkedRole.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iamServiceLinkedRole.IamServiceLinkedRole.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iamServiceLinkedRole.IamServiceLinkedRole.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iamServiceLinkedRole.IamServiceLinkedRole.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iamServiceLinkedRole.IamServiceLinkedRole.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iamServiceLinkedRole.IamServiceLinkedRole.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/aws-cdk.iamServiceLinkedRole.IamServiceLinkedRole.resetCustomSuffix">resetCustomSuffix</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iamServiceLinkedRole.IamServiceLinkedRole.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iamServiceLinkedRole.IamServiceLinkedRole.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iamServiceLinkedRole.IamServiceLinkedRole.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iamServiceLinkedRole.IamServiceLinkedRole.resetTagsAll">resetTagsAll</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.iamServiceLinkedRole.IamServiceLinkedRole.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/aws-cdk.iamServiceLinkedRole.IamServiceLinkedRole.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/aws-cdk.iamServiceLinkedRole.IamServiceLinkedRole.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.iamServiceLinkedRole.IamServiceLinkedRole.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/aws-cdk.iamServiceLinkedRole.IamServiceLinkedRole.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/aws-cdk.iamServiceLinkedRole.IamServiceLinkedRole.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/aws-cdk.iamServiceLinkedRole.IamServiceLinkedRole.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/aws-cdk.iamServiceLinkedRole.IamServiceLinkedRole.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/aws-cdk.iamServiceLinkedRole.IamServiceLinkedRole.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/aws-cdk.iamServiceLinkedRole.IamServiceLinkedRole.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/aws-cdk.iamServiceLinkedRole.IamServiceLinkedRole.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.iamServiceLinkedRole.IamServiceLinkedRole.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iamServiceLinkedRole.IamServiceLinkedRole.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.iamServiceLinkedRole.IamServiceLinkedRole.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iamServiceLinkedRole.IamServiceLinkedRole.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.iamServiceLinkedRole.IamServiceLinkedRole.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iamServiceLinkedRole.IamServiceLinkedRole.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.iamServiceLinkedRole.IamServiceLinkedRole.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iamServiceLinkedRole.IamServiceLinkedRole.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.iamServiceLinkedRole.IamServiceLinkedRole.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iamServiceLinkedRole.IamServiceLinkedRole.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.iamServiceLinkedRole.IamServiceLinkedRole.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iamServiceLinkedRole.IamServiceLinkedRole.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.iamServiceLinkedRole.IamServiceLinkedRole.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iamServiceLinkedRole.IamServiceLinkedRole.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.iamServiceLinkedRole.IamServiceLinkedRole.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iamServiceLinkedRole.IamServiceLinkedRole.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.iamServiceLinkedRole.IamServiceLinkedRole.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iamServiceLinkedRole.IamServiceLinkedRole.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `importFrom` <a name="importFrom" id="@cdktf/aws-cdk.iamServiceLinkedRole.IamServiceLinkedRole.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.iamServiceLinkedRole.IamServiceLinkedRole.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.iamServiceLinkedRole.IamServiceLinkedRole.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.iamServiceLinkedRole.IamServiceLinkedRole.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iamServiceLinkedRole.IamServiceLinkedRole.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveTo` <a name="moveTo" id="@cdktf/aws-cdk.iamServiceLinkedRole.IamServiceLinkedRole.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/aws-cdk.iamServiceLinkedRole.IamServiceLinkedRole.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/aws-cdk.iamServiceLinkedRole.IamServiceLinkedRole.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `resetCustomSuffix` <a name="resetCustomSuffix" id="@cdktf/aws-cdk.iamServiceLinkedRole.IamServiceLinkedRole.resetCustomSuffix"></a>

```typescript
public resetCustomSuffix(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/aws-cdk.iamServiceLinkedRole.IamServiceLinkedRole.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/aws-cdk.iamServiceLinkedRole.IamServiceLinkedRole.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/aws-cdk.iamServiceLinkedRole.IamServiceLinkedRole.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/aws-cdk.iamServiceLinkedRole.IamServiceLinkedRole.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.iamServiceLinkedRole.IamServiceLinkedRole.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/aws-cdk.iamServiceLinkedRole.IamServiceLinkedRole.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iamServiceLinkedRole.IamServiceLinkedRole.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iamServiceLinkedRole.IamServiceLinkedRole.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a IamServiceLinkedRole resource upon running "cdktf plan <stack-name>". |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@cdktf/aws-cdk.iamServiceLinkedRole.IamServiceLinkedRole.isConstruct"></a>

```typescript
import { iamServiceLinkedRole } from '@cdktf/aws-cdk'

iamServiceLinkedRole.IamServiceLinkedRole.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.iamServiceLinkedRole.IamServiceLinkedRole.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/aws-cdk.iamServiceLinkedRole.IamServiceLinkedRole.isTerraformElement"></a>

```typescript
import { iamServiceLinkedRole } from '@cdktf/aws-cdk'

iamServiceLinkedRole.IamServiceLinkedRole.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.iamServiceLinkedRole.IamServiceLinkedRole.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/aws-cdk.iamServiceLinkedRole.IamServiceLinkedRole.isTerraformResource"></a>

```typescript
import { iamServiceLinkedRole } from '@cdktf/aws-cdk'

iamServiceLinkedRole.IamServiceLinkedRole.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.iamServiceLinkedRole.IamServiceLinkedRole.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/aws-cdk.iamServiceLinkedRole.IamServiceLinkedRole.generateConfigForImport"></a>

```typescript
import { iamServiceLinkedRole } from '@cdktf/aws-cdk'

iamServiceLinkedRole.IamServiceLinkedRole.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a IamServiceLinkedRole resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.iamServiceLinkedRole.IamServiceLinkedRole.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/aws-cdk.iamServiceLinkedRole.IamServiceLinkedRole.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the IamServiceLinkedRole to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/aws-cdk.iamServiceLinkedRole.IamServiceLinkedRole.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing IamServiceLinkedRole that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iam_service_linked_role#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.iamServiceLinkedRole.IamServiceLinkedRole.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the IamServiceLinkedRole to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.iamServiceLinkedRole.IamServiceLinkedRole.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/aws-cdk.iamServiceLinkedRole.IamServiceLinkedRole.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iamServiceLinkedRole.IamServiceLinkedRole.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iamServiceLinkedRole.IamServiceLinkedRole.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iamServiceLinkedRole.IamServiceLinkedRole.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iamServiceLinkedRole.IamServiceLinkedRole.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iamServiceLinkedRole.IamServiceLinkedRole.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iamServiceLinkedRole.IamServiceLinkedRole.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iamServiceLinkedRole.IamServiceLinkedRole.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iamServiceLinkedRole.IamServiceLinkedRole.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iamServiceLinkedRole.IamServiceLinkedRole.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iamServiceLinkedRole.IamServiceLinkedRole.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iamServiceLinkedRole.IamServiceLinkedRole.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iamServiceLinkedRole.IamServiceLinkedRole.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iamServiceLinkedRole.IamServiceLinkedRole.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iamServiceLinkedRole.IamServiceLinkedRole.property.createDate">createDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iamServiceLinkedRole.IamServiceLinkedRole.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iamServiceLinkedRole.IamServiceLinkedRole.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iamServiceLinkedRole.IamServiceLinkedRole.property.uniqueId">uniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iamServiceLinkedRole.IamServiceLinkedRole.property.awsServiceNameInput">awsServiceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iamServiceLinkedRole.IamServiceLinkedRole.property.customSuffixInput">customSuffixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iamServiceLinkedRole.IamServiceLinkedRole.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iamServiceLinkedRole.IamServiceLinkedRole.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iamServiceLinkedRole.IamServiceLinkedRole.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iamServiceLinkedRole.IamServiceLinkedRole.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iamServiceLinkedRole.IamServiceLinkedRole.property.awsServiceName">awsServiceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iamServiceLinkedRole.IamServiceLinkedRole.property.customSuffix">customSuffix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iamServiceLinkedRole.IamServiceLinkedRole.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iamServiceLinkedRole.IamServiceLinkedRole.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iamServiceLinkedRole.IamServiceLinkedRole.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iamServiceLinkedRole.IamServiceLinkedRole.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/aws-cdk.iamServiceLinkedRole.IamServiceLinkedRole.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/aws-cdk.iamServiceLinkedRole.IamServiceLinkedRole.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.iamServiceLinkedRole.IamServiceLinkedRole.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/aws-cdk.iamServiceLinkedRole.IamServiceLinkedRole.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/aws-cdk.iamServiceLinkedRole.IamServiceLinkedRole.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/aws-cdk.iamServiceLinkedRole.IamServiceLinkedRole.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/aws-cdk.iamServiceLinkedRole.IamServiceLinkedRole.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.iamServiceLinkedRole.IamServiceLinkedRole.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.iamServiceLinkedRole.IamServiceLinkedRole.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.iamServiceLinkedRole.IamServiceLinkedRole.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.iamServiceLinkedRole.IamServiceLinkedRole.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.iamServiceLinkedRole.IamServiceLinkedRole.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.iamServiceLinkedRole.IamServiceLinkedRole.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.iamServiceLinkedRole.IamServiceLinkedRole.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/aws-cdk.iamServiceLinkedRole.IamServiceLinkedRole.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `createDate`<sup>Required</sup> <a name="createDate" id="@cdktf/aws-cdk.iamServiceLinkedRole.IamServiceLinkedRole.property.createDate"></a>

```typescript
public readonly createDate: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/aws-cdk.iamServiceLinkedRole.IamServiceLinkedRole.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/aws-cdk.iamServiceLinkedRole.IamServiceLinkedRole.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `uniqueId`<sup>Required</sup> <a name="uniqueId" id="@cdktf/aws-cdk.iamServiceLinkedRole.IamServiceLinkedRole.property.uniqueId"></a>

```typescript
public readonly uniqueId: string;
```

- *Type:* string

---

##### `awsServiceNameInput`<sup>Optional</sup> <a name="awsServiceNameInput" id="@cdktf/aws-cdk.iamServiceLinkedRole.IamServiceLinkedRole.property.awsServiceNameInput"></a>

```typescript
public readonly awsServiceNameInput: string;
```

- *Type:* string

---

##### `customSuffixInput`<sup>Optional</sup> <a name="customSuffixInput" id="@cdktf/aws-cdk.iamServiceLinkedRole.IamServiceLinkedRole.property.customSuffixInput"></a>

```typescript
public readonly customSuffixInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/aws-cdk.iamServiceLinkedRole.IamServiceLinkedRole.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/aws-cdk.iamServiceLinkedRole.IamServiceLinkedRole.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/aws-cdk.iamServiceLinkedRole.IamServiceLinkedRole.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/aws-cdk.iamServiceLinkedRole.IamServiceLinkedRole.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `awsServiceName`<sup>Required</sup> <a name="awsServiceName" id="@cdktf/aws-cdk.iamServiceLinkedRole.IamServiceLinkedRole.property.awsServiceName"></a>

```typescript
public readonly awsServiceName: string;
```

- *Type:* string

---

##### `customSuffix`<sup>Required</sup> <a name="customSuffix" id="@cdktf/aws-cdk.iamServiceLinkedRole.IamServiceLinkedRole.property.customSuffix"></a>

```typescript
public readonly customSuffix: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/aws-cdk.iamServiceLinkedRole.IamServiceLinkedRole.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.iamServiceLinkedRole.IamServiceLinkedRole.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/aws-cdk.iamServiceLinkedRole.IamServiceLinkedRole.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/aws-cdk.iamServiceLinkedRole.IamServiceLinkedRole.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.iamServiceLinkedRole.IamServiceLinkedRole.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/aws-cdk.iamServiceLinkedRole.IamServiceLinkedRole.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IamServiceLinkedRoleConfig <a name="IamServiceLinkedRoleConfig" id="@cdktf/aws-cdk.iamServiceLinkedRole.IamServiceLinkedRoleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.iamServiceLinkedRole.IamServiceLinkedRoleConfig.Initializer"></a>

```typescript
import { iamServiceLinkedRole } from '@cdktf/aws-cdk'

const iamServiceLinkedRoleConfig: iamServiceLinkedRole.IamServiceLinkedRoleConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.iamServiceLinkedRole.IamServiceLinkedRoleConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iamServiceLinkedRole.IamServiceLinkedRoleConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iamServiceLinkedRole.IamServiceLinkedRoleConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iamServiceLinkedRole.IamServiceLinkedRoleConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iamServiceLinkedRole.IamServiceLinkedRoleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iamServiceLinkedRole.IamServiceLinkedRoleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iamServiceLinkedRole.IamServiceLinkedRoleConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iamServiceLinkedRole.IamServiceLinkedRoleConfig.property.awsServiceName">awsServiceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iam_service_linked_role#aws_service_name IamServiceLinkedRole#aws_service_name}. |
| <code><a href="#@cdktf/aws-cdk.iamServiceLinkedRole.IamServiceLinkedRoleConfig.property.customSuffix">customSuffix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iam_service_linked_role#custom_suffix IamServiceLinkedRole#custom_suffix}. |
| <code><a href="#@cdktf/aws-cdk.iamServiceLinkedRole.IamServiceLinkedRoleConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iam_service_linked_role#description IamServiceLinkedRole#description}. |
| <code><a href="#@cdktf/aws-cdk.iamServiceLinkedRole.IamServiceLinkedRoleConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iam_service_linked_role#id IamServiceLinkedRole#id}. |
| <code><a href="#@cdktf/aws-cdk.iamServiceLinkedRole.IamServiceLinkedRoleConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iam_service_linked_role#tags IamServiceLinkedRole#tags}. |
| <code><a href="#@cdktf/aws-cdk.iamServiceLinkedRole.IamServiceLinkedRoleConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iam_service_linked_role#tags_all IamServiceLinkedRole#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.iamServiceLinkedRole.IamServiceLinkedRoleConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.iamServiceLinkedRole.IamServiceLinkedRoleConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.iamServiceLinkedRole.IamServiceLinkedRoleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.iamServiceLinkedRole.IamServiceLinkedRoleConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.iamServiceLinkedRole.IamServiceLinkedRoleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.iamServiceLinkedRole.IamServiceLinkedRoleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.iamServiceLinkedRole.IamServiceLinkedRoleConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `awsServiceName`<sup>Required</sup> <a name="awsServiceName" id="@cdktf/aws-cdk.iamServiceLinkedRole.IamServiceLinkedRoleConfig.property.awsServiceName"></a>

```typescript
public readonly awsServiceName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iam_service_linked_role#aws_service_name IamServiceLinkedRole#aws_service_name}.

---

##### `customSuffix`<sup>Optional</sup> <a name="customSuffix" id="@cdktf/aws-cdk.iamServiceLinkedRole.IamServiceLinkedRoleConfig.property.customSuffix"></a>

```typescript
public readonly customSuffix: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iam_service_linked_role#custom_suffix IamServiceLinkedRole#custom_suffix}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/aws-cdk.iamServiceLinkedRole.IamServiceLinkedRoleConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iam_service_linked_role#description IamServiceLinkedRole#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/aws-cdk.iamServiceLinkedRole.IamServiceLinkedRoleConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iam_service_linked_role#id IamServiceLinkedRole#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/aws-cdk.iamServiceLinkedRole.IamServiceLinkedRoleConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iam_service_linked_role#tags IamServiceLinkedRole#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/aws-cdk.iamServiceLinkedRole.IamServiceLinkedRoleConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iam_service_linked_role#tags_all IamServiceLinkedRole#tags_all}.

---



