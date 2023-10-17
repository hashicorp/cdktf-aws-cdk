# `aws_appconfig_configuration_profile`

Refer to the Terraform Registory for docs: [`aws_appconfig_configuration_profile`](https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appconfig_configuration_profile).

# `appconfigConfigurationProfile` Submodule <a name="`appconfigConfigurationProfile` Submodule" id="@cdktf/aws-cdk.appconfigConfigurationProfile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppconfigConfigurationProfile <a name="AppconfigConfigurationProfile" id="@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfile"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appconfig_configuration_profile aws_appconfig_configuration_profile}.

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfile.Initializer"></a>

```typescript
import { appconfigConfigurationProfile } from '@cdktf/aws-cdk'

new appconfigConfigurationProfile.AppconfigConfigurationProfile(scope: Construct, id: string, config: AppconfigConfigurationProfileConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfile.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfile.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfile.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfileConfig">AppconfigConfigurationProfileConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfile.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfile.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfile.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfileConfig">AppconfigConfigurationProfileConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfile.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfile.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfile.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfile.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfile.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfile.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfile.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfile.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfile.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfile.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfile.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfile.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfile.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfile.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfile.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfile.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfile.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfile.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfile.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfile.putValidator">putValidator</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfile.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfile.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfile.resetRetrievalRoleArn">resetRetrievalRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfile.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfile.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfile.resetValidator">resetValidator</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfile.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfile.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfile.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfile.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfile.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfile.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfile.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfile.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfile.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfile.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfile.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfile.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfile.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfile.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfile.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfile.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfile.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfile.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfile.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `importFrom` <a name="importFrom" id="@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfile.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfile.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfile.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfile.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveTo` <a name="moveTo" id="@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfile.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfile.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfile.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `putValidator` <a name="putValidator" id="@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfile.putValidator"></a>

```typescript
public putValidator(value: IResolvable | AppconfigConfigurationProfileValidator[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfile.putValidator.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfileValidator">AppconfigConfigurationProfileValidator</a>[]

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfile.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfile.resetId"></a>

```typescript
public resetId(): void
```

##### `resetRetrievalRoleArn` <a name="resetRetrievalRoleArn" id="@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfile.resetRetrievalRoleArn"></a>

```typescript
public resetRetrievalRoleArn(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfile.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfile.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

##### `resetValidator` <a name="resetValidator" id="@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfile.resetValidator"></a>

```typescript
public resetValidator(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfile.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfile.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfile.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfile.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a AppconfigConfigurationProfile resource upon running "cdktf plan <stack-name>". |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfile.isConstruct"></a>

```typescript
import { appconfigConfigurationProfile } from '@cdktf/aws-cdk'

appconfigConfigurationProfile.AppconfigConfigurationProfile.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfile.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfile.isTerraformElement"></a>

```typescript
import { appconfigConfigurationProfile } from '@cdktf/aws-cdk'

appconfigConfigurationProfile.AppconfigConfigurationProfile.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfile.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfile.isTerraformResource"></a>

```typescript
import { appconfigConfigurationProfile } from '@cdktf/aws-cdk'

appconfigConfigurationProfile.AppconfigConfigurationProfile.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfile.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfile.generateConfigForImport"></a>

```typescript
import { appconfigConfigurationProfile } from '@cdktf/aws-cdk'

appconfigConfigurationProfile.AppconfigConfigurationProfile.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a AppconfigConfigurationProfile resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfile.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfile.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AppconfigConfigurationProfile to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfile.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AppconfigConfigurationProfile that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appconfig_configuration_profile#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfile.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the AppconfigConfigurationProfile to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.configurationProfileId">configurationProfileId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.validator">validator</a></code> | <code><a href="#@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorList">AppconfigConfigurationProfileValidatorList</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.applicationIdInput">applicationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.locationUriInput">locationUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.retrievalRoleArnInput">retrievalRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.validatorInput">validatorInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfileValidator">AppconfigConfigurationProfileValidator</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.applicationId">applicationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.locationUri">locationUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.retrievalRoleArn">retrievalRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `configurationProfileId`<sup>Required</sup> <a name="configurationProfileId" id="@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.configurationProfileId"></a>

```typescript
public readonly configurationProfileId: string;
```

- *Type:* string

---

##### `validator`<sup>Required</sup> <a name="validator" id="@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.validator"></a>

```typescript
public readonly validator: AppconfigConfigurationProfileValidatorList;
```

- *Type:* <a href="#@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorList">AppconfigConfigurationProfileValidatorList</a>

---

##### `applicationIdInput`<sup>Optional</sup> <a name="applicationIdInput" id="@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.applicationIdInput"></a>

```typescript
public readonly applicationIdInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationUriInput`<sup>Optional</sup> <a name="locationUriInput" id="@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.locationUriInput"></a>

```typescript
public readonly locationUriInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `retrievalRoleArnInput`<sup>Optional</sup> <a name="retrievalRoleArnInput" id="@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.retrievalRoleArnInput"></a>

```typescript
public readonly retrievalRoleArnInput: string;
```

- *Type:* string

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `validatorInput`<sup>Optional</sup> <a name="validatorInput" id="@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.validatorInput"></a>

```typescript
public readonly validatorInput: IResolvable | AppconfigConfigurationProfileValidator[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfileValidator">AppconfigConfigurationProfileValidator</a>[]

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.applicationId"></a>

```typescript
public readonly applicationId: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `locationUri`<sup>Required</sup> <a name="locationUri" id="@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.locationUri"></a>

```typescript
public readonly locationUri: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `retrievalRoleArn`<sup>Required</sup> <a name="retrievalRoleArn" id="@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.retrievalRoleArn"></a>

```typescript
public readonly retrievalRoleArn: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfile.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AppconfigConfigurationProfileConfig <a name="AppconfigConfigurationProfileConfig" id="@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfileConfig.Initializer"></a>

```typescript
import { appconfigConfigurationProfile } from '@cdktf/aws-cdk'

const appconfigConfigurationProfileConfig: appconfigConfigurationProfile.AppconfigConfigurationProfileConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfileConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfileConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfileConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfileConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfileConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfileConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfileConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfileConfig.property.applicationId">applicationId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appconfig_configuration_profile#application_id AppconfigConfigurationProfile#application_id}. |
| <code><a href="#@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfileConfig.property.locationUri">locationUri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appconfig_configuration_profile#location_uri AppconfigConfigurationProfile#location_uri}. |
| <code><a href="#@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfileConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appconfig_configuration_profile#name AppconfigConfigurationProfile#name}. |
| <code><a href="#@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfileConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appconfig_configuration_profile#description AppconfigConfigurationProfile#description}. |
| <code><a href="#@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfileConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appconfig_configuration_profile#id AppconfigConfigurationProfile#id}. |
| <code><a href="#@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfileConfig.property.retrievalRoleArn">retrievalRoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appconfig_configuration_profile#retrieval_role_arn AppconfigConfigurationProfile#retrieval_role_arn}. |
| <code><a href="#@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfileConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appconfig_configuration_profile#tags AppconfigConfigurationProfile#tags}. |
| <code><a href="#@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfileConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appconfig_configuration_profile#tags_all AppconfigConfigurationProfile#tags_all}. |
| <code><a href="#@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfileConfig.property.validator">validator</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfileValidator">AppconfigConfigurationProfileValidator</a>[]</code> | validator block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfileConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfileConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfileConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfileConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfileConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfileConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfileConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfileConfig.property.applicationId"></a>

```typescript
public readonly applicationId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appconfig_configuration_profile#application_id AppconfigConfigurationProfile#application_id}.

---

##### `locationUri`<sup>Required</sup> <a name="locationUri" id="@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfileConfig.property.locationUri"></a>

```typescript
public readonly locationUri: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appconfig_configuration_profile#location_uri AppconfigConfigurationProfile#location_uri}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfileConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appconfig_configuration_profile#name AppconfigConfigurationProfile#name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfileConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appconfig_configuration_profile#description AppconfigConfigurationProfile#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfileConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appconfig_configuration_profile#id AppconfigConfigurationProfile#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `retrievalRoleArn`<sup>Optional</sup> <a name="retrievalRoleArn" id="@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfileConfig.property.retrievalRoleArn"></a>

```typescript
public readonly retrievalRoleArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appconfig_configuration_profile#retrieval_role_arn AppconfigConfigurationProfile#retrieval_role_arn}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfileConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appconfig_configuration_profile#tags AppconfigConfigurationProfile#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfileConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appconfig_configuration_profile#tags_all AppconfigConfigurationProfile#tags_all}.

---

##### `validator`<sup>Optional</sup> <a name="validator" id="@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfileConfig.property.validator"></a>

```typescript
public readonly validator: IResolvable | AppconfigConfigurationProfileValidator[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfileValidator">AppconfigConfigurationProfileValidator</a>[]

validator block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appconfig_configuration_profile#validator AppconfigConfigurationProfile#validator}

---

### AppconfigConfigurationProfileValidator <a name="AppconfigConfigurationProfileValidator" id="@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfileValidator"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfileValidator.Initializer"></a>

```typescript
import { appconfigConfigurationProfile } from '@cdktf/aws-cdk'

const appconfigConfigurationProfileValidator: appconfigConfigurationProfile.AppconfigConfigurationProfileValidator = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfileValidator.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appconfig_configuration_profile#type AppconfigConfigurationProfile#type}. |
| <code><a href="#@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfileValidator.property.content">content</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appconfig_configuration_profile#content AppconfigConfigurationProfile#content}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfileValidator.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appconfig_configuration_profile#type AppconfigConfigurationProfile#type}.

---

##### `content`<sup>Optional</sup> <a name="content" id="@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfileValidator.property.content"></a>

```typescript
public readonly content: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/appconfig_configuration_profile#content AppconfigConfigurationProfile#content}.

---

## Classes <a name="Classes" id="Classes"></a>

### AppconfigConfigurationProfileValidatorList <a name="AppconfigConfigurationProfileValidatorList" id="@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorList"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorList.Initializer"></a>

```typescript
import { appconfigConfigurationProfile } from '@cdktf/aws-cdk'

new appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorList.get"></a>

```typescript
public get(index: number): AppconfigConfigurationProfileValidatorOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfileValidator">AppconfigConfigurationProfileValidator</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppconfigConfigurationProfileValidator[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfileValidator">AppconfigConfigurationProfileValidator</a>[]

---


### AppconfigConfigurationProfileValidatorOutputReference <a name="AppconfigConfigurationProfileValidatorOutputReference" id="@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorOutputReference.Initializer"></a>

```typescript
import { appconfigConfigurationProfile } from '@cdktf/aws-cdk'

new appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorOutputReference.resetContent">resetContent</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetContent` <a name="resetContent" id="@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorOutputReference.resetContent"></a>

```typescript
public resetContent(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorOutputReference.property.contentInput">contentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorOutputReference.property.content">content</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfileValidator">AppconfigConfigurationProfileValidator</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `contentInput`<sup>Optional</sup> <a name="contentInput" id="@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorOutputReference.property.contentInput"></a>

```typescript
public readonly contentInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorOutputReference.property.content"></a>

```typescript
public readonly content: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfileValidatorOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppconfigConfigurationProfileValidator;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.appconfigConfigurationProfile.AppconfigConfigurationProfileValidator">AppconfigConfigurationProfileValidator</a>

---



