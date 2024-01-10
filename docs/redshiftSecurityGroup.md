# `redshiftSecurityGroup` Submodule <a name="`redshiftSecurityGroup` Submodule" id="@cdktf/aws-cdk.redshiftSecurityGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RedshiftSecurityGroup <a name="RedshiftSecurityGroup" id="@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/redshift_security_group aws_redshift_security_group}.

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroup.Initializer"></a>

```typescript
import { redshiftSecurityGroup } from '@cdktf/aws-cdk'

new redshiftSecurityGroup.RedshiftSecurityGroup(scope: Construct, id: string, config: RedshiftSecurityGroupConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroup.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroupConfig">RedshiftSecurityGroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroupConfig">RedshiftSecurityGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroup.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroup.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroup.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroup.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroup.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroup.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroup.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroup.putIngress">putIngress</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroup.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroup.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroup.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroup.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroup.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroup.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroup.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroup.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroup.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroup.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroup.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroup.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroup.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroup.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroup.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroup.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroup.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroup.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroup.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroup.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroup.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroup.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroup.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroup.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroup.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroup.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroup.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroup.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroup.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroup.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroup.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroup.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putIngress` <a name="putIngress" id="@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroup.putIngress"></a>

```typescript
public putIngress(value: IResolvable | RedshiftSecurityGroupIngress[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroup.putIngress.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroupIngress">RedshiftSecurityGroupIngress</a>[]

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroup.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroup.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroup.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroup.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a RedshiftSecurityGroup resource upon running "cdktf plan <stack-name>". |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroup.isConstruct"></a>

```typescript
import { redshiftSecurityGroup } from '@cdktf/aws-cdk'

redshiftSecurityGroup.RedshiftSecurityGroup.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroup.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroup.isTerraformElement"></a>

```typescript
import { redshiftSecurityGroup } from '@cdktf/aws-cdk'

redshiftSecurityGroup.RedshiftSecurityGroup.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroup.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroup.isTerraformResource"></a>

```typescript
import { redshiftSecurityGroup } from '@cdktf/aws-cdk'

redshiftSecurityGroup.RedshiftSecurityGroup.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroup.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroup.generateConfigForImport"></a>

```typescript
import { redshiftSecurityGroup } from '@cdktf/aws-cdk'

redshiftSecurityGroup.RedshiftSecurityGroup.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a RedshiftSecurityGroup resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the RedshiftSecurityGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing RedshiftSecurityGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/redshift_security_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the RedshiftSecurityGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroup.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroup.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroup.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroup.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroup.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroup.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroup.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroup.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroup.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroup.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroup.property.ingress">ingress</a></code> | <code><a href="#@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroupIngressList">RedshiftSecurityGroupIngressList</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroup.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroup.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroup.property.ingressInput">ingressInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroupIngress">RedshiftSecurityGroupIngress</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroup.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroup.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroup.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroup.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroup.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroup.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroup.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroup.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroup.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroup.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroup.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroup.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroup.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroup.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroup.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroup.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroup.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroup.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `ingress`<sup>Required</sup> <a name="ingress" id="@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroup.property.ingress"></a>

```typescript
public readonly ingress: RedshiftSecurityGroupIngressList;
```

- *Type:* <a href="#@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroupIngressList">RedshiftSecurityGroupIngressList</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroup.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroup.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `ingressInput`<sup>Optional</sup> <a name="ingressInput" id="@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroup.property.ingressInput"></a>

```typescript
public readonly ingressInput: IResolvable | RedshiftSecurityGroupIngress[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroupIngress">RedshiftSecurityGroupIngress</a>[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroup.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroup.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroup.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroup.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroup.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroup.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### RedshiftSecurityGroupConfig <a name="RedshiftSecurityGroupConfig" id="@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroupConfig.Initializer"></a>

```typescript
import { redshiftSecurityGroup } from '@cdktf/aws-cdk'

const redshiftSecurityGroupConfig: redshiftSecurityGroup.RedshiftSecurityGroupConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroupConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroupConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroupConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroupConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroupConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroupConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroupConfig.property.ingress">ingress</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroupIngress">RedshiftSecurityGroupIngress</a>[]</code> | ingress block. |
| <code><a href="#@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroupConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/redshift_security_group#name RedshiftSecurityGroup#name}. |
| <code><a href="#@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroupConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/redshift_security_group#description RedshiftSecurityGroup#description}. |
| <code><a href="#@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroupConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/redshift_security_group#id RedshiftSecurityGroup#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroupConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroupConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroupConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroupConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroupConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroupConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroupConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `ingress`<sup>Required</sup> <a name="ingress" id="@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroupConfig.property.ingress"></a>

```typescript
public readonly ingress: IResolvable | RedshiftSecurityGroupIngress[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroupIngress">RedshiftSecurityGroupIngress</a>[]

ingress block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/redshift_security_group#ingress RedshiftSecurityGroup#ingress}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroupConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/redshift_security_group#name RedshiftSecurityGroup#name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroupConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/redshift_security_group#description RedshiftSecurityGroup#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroupConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/redshift_security_group#id RedshiftSecurityGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### RedshiftSecurityGroupIngress <a name="RedshiftSecurityGroupIngress" id="@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroupIngress"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroupIngress.Initializer"></a>

```typescript
import { redshiftSecurityGroup } from '@cdktf/aws-cdk'

const redshiftSecurityGroupIngress: redshiftSecurityGroup.RedshiftSecurityGroupIngress = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroupIngress.property.cidr">cidr</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/redshift_security_group#cidr RedshiftSecurityGroup#cidr}. |
| <code><a href="#@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroupIngress.property.securityGroupName">securityGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/redshift_security_group#security_group_name RedshiftSecurityGroup#security_group_name}. |
| <code><a href="#@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroupIngress.property.securityGroupOwnerId">securityGroupOwnerId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/redshift_security_group#security_group_owner_id RedshiftSecurityGroup#security_group_owner_id}. |

---

##### `cidr`<sup>Optional</sup> <a name="cidr" id="@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroupIngress.property.cidr"></a>

```typescript
public readonly cidr: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/redshift_security_group#cidr RedshiftSecurityGroup#cidr}.

---

##### `securityGroupName`<sup>Optional</sup> <a name="securityGroupName" id="@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroupIngress.property.securityGroupName"></a>

```typescript
public readonly securityGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/redshift_security_group#security_group_name RedshiftSecurityGroup#security_group_name}.

---

##### `securityGroupOwnerId`<sup>Optional</sup> <a name="securityGroupOwnerId" id="@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroupIngress.property.securityGroupOwnerId"></a>

```typescript
public readonly securityGroupOwnerId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/redshift_security_group#security_group_owner_id RedshiftSecurityGroup#security_group_owner_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### RedshiftSecurityGroupIngressList <a name="RedshiftSecurityGroupIngressList" id="@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroupIngressList"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroupIngressList.Initializer"></a>

```typescript
import { redshiftSecurityGroup } from '@cdktf/aws-cdk'

new redshiftSecurityGroup.RedshiftSecurityGroupIngressList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroupIngressList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroupIngressList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroupIngressList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroupIngressList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroupIngressList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroupIngressList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroupIngressList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroupIngressList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroupIngressList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroupIngressList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroupIngressList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroupIngressList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroupIngressList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroupIngressList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroupIngressList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroupIngressList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroupIngressList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroupIngressList.get"></a>

```typescript
public get(index: number): RedshiftSecurityGroupIngressOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroupIngressList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroupIngressList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroupIngressList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroupIngressList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroupIngress">RedshiftSecurityGroupIngress</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroupIngressList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroupIngressList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroupIngressList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RedshiftSecurityGroupIngress[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroupIngress">RedshiftSecurityGroupIngress</a>[]

---


### RedshiftSecurityGroupIngressOutputReference <a name="RedshiftSecurityGroupIngressOutputReference" id="@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroupIngressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroupIngressOutputReference.Initializer"></a>

```typescript
import { redshiftSecurityGroup } from '@cdktf/aws-cdk'

new redshiftSecurityGroup.RedshiftSecurityGroupIngressOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroupIngressOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroupIngressOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroupIngressOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroupIngressOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroupIngressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroupIngressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroupIngressOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroupIngressOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroupIngressOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroupIngressOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroupIngressOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroupIngressOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroupIngressOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroupIngressOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroupIngressOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroupIngressOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroupIngressOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroupIngressOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroupIngressOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroupIngressOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroupIngressOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroupIngressOutputReference.resetCidr">resetCidr</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroupIngressOutputReference.resetSecurityGroupName">resetSecurityGroupName</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroupIngressOutputReference.resetSecurityGroupOwnerId">resetSecurityGroupOwnerId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroupIngressOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroupIngressOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroupIngressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroupIngressOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroupIngressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroupIngressOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroupIngressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroupIngressOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroupIngressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroupIngressOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroupIngressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroupIngressOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroupIngressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroupIngressOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroupIngressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroupIngressOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroupIngressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroupIngressOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroupIngressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroupIngressOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroupIngressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroupIngressOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroupIngressOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroupIngressOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCidr` <a name="resetCidr" id="@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroupIngressOutputReference.resetCidr"></a>

```typescript
public resetCidr(): void
```

##### `resetSecurityGroupName` <a name="resetSecurityGroupName" id="@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroupIngressOutputReference.resetSecurityGroupName"></a>

```typescript
public resetSecurityGroupName(): void
```

##### `resetSecurityGroupOwnerId` <a name="resetSecurityGroupOwnerId" id="@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroupIngressOutputReference.resetSecurityGroupOwnerId"></a>

```typescript
public resetSecurityGroupOwnerId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroupIngressOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroupIngressOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroupIngressOutputReference.property.cidrInput">cidrInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroupIngressOutputReference.property.securityGroupNameInput">securityGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroupIngressOutputReference.property.securityGroupOwnerIdInput">securityGroupOwnerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroupIngressOutputReference.property.cidr">cidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroupIngressOutputReference.property.securityGroupName">securityGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroupIngressOutputReference.property.securityGroupOwnerId">securityGroupOwnerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroupIngressOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroupIngress">RedshiftSecurityGroupIngress</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroupIngressOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroupIngressOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cidrInput`<sup>Optional</sup> <a name="cidrInput" id="@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroupIngressOutputReference.property.cidrInput"></a>

```typescript
public readonly cidrInput: string;
```

- *Type:* string

---

##### `securityGroupNameInput`<sup>Optional</sup> <a name="securityGroupNameInput" id="@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroupIngressOutputReference.property.securityGroupNameInput"></a>

```typescript
public readonly securityGroupNameInput: string;
```

- *Type:* string

---

##### `securityGroupOwnerIdInput`<sup>Optional</sup> <a name="securityGroupOwnerIdInput" id="@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroupIngressOutputReference.property.securityGroupOwnerIdInput"></a>

```typescript
public readonly securityGroupOwnerIdInput: string;
```

- *Type:* string

---

##### `cidr`<sup>Required</sup> <a name="cidr" id="@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroupIngressOutputReference.property.cidr"></a>

```typescript
public readonly cidr: string;
```

- *Type:* string

---

##### `securityGroupName`<sup>Required</sup> <a name="securityGroupName" id="@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroupIngressOutputReference.property.securityGroupName"></a>

```typescript
public readonly securityGroupName: string;
```

- *Type:* string

---

##### `securityGroupOwnerId`<sup>Required</sup> <a name="securityGroupOwnerId" id="@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroupIngressOutputReference.property.securityGroupOwnerId"></a>

```typescript
public readonly securityGroupOwnerId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroupIngressOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RedshiftSecurityGroupIngress;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.redshiftSecurityGroup.RedshiftSecurityGroupIngress">RedshiftSecurityGroupIngress</a>

---



