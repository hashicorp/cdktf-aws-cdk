# `aws_sagemaker_workteam`

Refer to the Terraform Registory for docs: [`aws_sagemaker_workteam`](https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_workteam).

# `sagemakerWorkteam` Submodule <a name="`sagemakerWorkteam` Submodule" id="@cdktf/aws-cdk.sagemakerWorkteam"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SagemakerWorkteam <a name="SagemakerWorkteam" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteam"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_workteam aws_sagemaker_workteam}.

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteam.Initializer"></a>

```typescript
import { sagemakerWorkteam } from '@cdktf/aws-cdk'

new sagemakerWorkteam.SagemakerWorkteam(scope: Construct, id: string, config: SagemakerWorkteamConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteam.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteam.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteam.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamConfig">SagemakerWorkteamConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteam.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteam.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteam.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamConfig">SagemakerWorkteamConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteam.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteam.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteam.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteam.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteam.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteam.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteam.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteam.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteam.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteam.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteam.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteam.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteam.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteam.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteam.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteam.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteam.putMemberDefinition">putMemberDefinition</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteam.putNotificationConfiguration">putNotificationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteam.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteam.resetNotificationConfiguration">resetNotificationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteam.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteam.resetTagsAll">resetTagsAll</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteam.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteam.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteam.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteam.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteam.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteam.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteam.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteam.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteam.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteam.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteam.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteam.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteam.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteam.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteam.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteam.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteam.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteam.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteam.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteam.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteam.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteam.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteam.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteam.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteam.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteam.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteam.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteam.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteam.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putMemberDefinition` <a name="putMemberDefinition" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteam.putMemberDefinition"></a>

```typescript
public putMemberDefinition(value: IResolvable | SagemakerWorkteamMemberDefinition[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteam.putMemberDefinition.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamMemberDefinition">SagemakerWorkteamMemberDefinition</a>[]

---

##### `putNotificationConfiguration` <a name="putNotificationConfiguration" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteam.putNotificationConfiguration"></a>

```typescript
public putNotificationConfiguration(value: SagemakerWorkteamNotificationConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteam.putNotificationConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamNotificationConfiguration">SagemakerWorkteamNotificationConfiguration</a>

---

##### `resetId` <a name="resetId" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteam.resetId"></a>

```typescript
public resetId(): void
```

##### `resetNotificationConfiguration` <a name="resetNotificationConfiguration" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteam.resetNotificationConfiguration"></a>

```typescript
public resetNotificationConfiguration(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteam.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteam.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteam.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteam.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteam.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteam.isConstruct"></a>

```typescript
import { sagemakerWorkteam } from '@cdktf/aws-cdk'

sagemakerWorkteam.SagemakerWorkteam.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteam.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteam.isTerraformElement"></a>

```typescript
import { sagemakerWorkteam } from '@cdktf/aws-cdk'

sagemakerWorkteam.SagemakerWorkteam.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteam.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteam.isTerraformResource"></a>

```typescript
import { sagemakerWorkteam } from '@cdktf/aws-cdk'

sagemakerWorkteam.SagemakerWorkteam.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteam.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteam.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteam.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteam.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteam.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteam.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteam.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteam.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteam.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteam.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteam.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteam.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteam.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteam.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteam.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteam.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteam.property.memberDefinition">memberDefinition</a></code> | <code><a href="#@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionList">SagemakerWorkteamMemberDefinitionList</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteam.property.notificationConfiguration">notificationConfiguration</a></code> | <code><a href="#@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference">SagemakerWorkteamNotificationConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteam.property.subdomain">subdomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteam.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteam.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteam.property.memberDefinitionInput">memberDefinitionInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamMemberDefinition">SagemakerWorkteamMemberDefinition</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteam.property.notificationConfigurationInput">notificationConfigurationInput</a></code> | <code><a href="#@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamNotificationConfiguration">SagemakerWorkteamNotificationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteam.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteam.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteam.property.workforceNameInput">workforceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteam.property.workteamNameInput">workteamNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteam.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteam.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteam.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteam.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteam.property.workforceName">workforceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteam.property.workteamName">workteamName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteam.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteam.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteam.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteam.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteam.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteam.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteam.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteam.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteam.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteam.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteam.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteam.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteam.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteam.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteam.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `memberDefinition`<sup>Required</sup> <a name="memberDefinition" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteam.property.memberDefinition"></a>

```typescript
public readonly memberDefinition: SagemakerWorkteamMemberDefinitionList;
```

- *Type:* <a href="#@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionList">SagemakerWorkteamMemberDefinitionList</a>

---

##### `notificationConfiguration`<sup>Required</sup> <a name="notificationConfiguration" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteam.property.notificationConfiguration"></a>

```typescript
public readonly notificationConfiguration: SagemakerWorkteamNotificationConfigurationOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference">SagemakerWorkteamNotificationConfigurationOutputReference</a>

---

##### `subdomain`<sup>Required</sup> <a name="subdomain" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteam.property.subdomain"></a>

```typescript
public readonly subdomain: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteam.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteam.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `memberDefinitionInput`<sup>Optional</sup> <a name="memberDefinitionInput" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteam.property.memberDefinitionInput"></a>

```typescript
public readonly memberDefinitionInput: IResolvable | SagemakerWorkteamMemberDefinition[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamMemberDefinition">SagemakerWorkteamMemberDefinition</a>[]

---

##### `notificationConfigurationInput`<sup>Optional</sup> <a name="notificationConfigurationInput" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteam.property.notificationConfigurationInput"></a>

```typescript
public readonly notificationConfigurationInput: SagemakerWorkteamNotificationConfiguration;
```

- *Type:* <a href="#@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamNotificationConfiguration">SagemakerWorkteamNotificationConfiguration</a>

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteam.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteam.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `workforceNameInput`<sup>Optional</sup> <a name="workforceNameInput" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteam.property.workforceNameInput"></a>

```typescript
public readonly workforceNameInput: string;
```

- *Type:* string

---

##### `workteamNameInput`<sup>Optional</sup> <a name="workteamNameInput" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteam.property.workteamNameInput"></a>

```typescript
public readonly workteamNameInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteam.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteam.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteam.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteam.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `workforceName`<sup>Required</sup> <a name="workforceName" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteam.property.workforceName"></a>

```typescript
public readonly workforceName: string;
```

- *Type:* string

---

##### `workteamName`<sup>Required</sup> <a name="workteamName" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteam.property.workteamName"></a>

```typescript
public readonly workteamName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteam.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteam.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SagemakerWorkteamConfig <a name="SagemakerWorkteamConfig" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamConfig.Initializer"></a>

```typescript
import { sagemakerWorkteam } from '@cdktf/aws-cdk'

const sagemakerWorkteamConfig: sagemakerWorkteam.SagemakerWorkteamConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_workteam#description SagemakerWorkteam#description}. |
| <code><a href="#@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamConfig.property.memberDefinition">memberDefinition</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamMemberDefinition">SagemakerWorkteamMemberDefinition</a>[]</code> | member_definition block. |
| <code><a href="#@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamConfig.property.workforceName">workforceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_workteam#workforce_name SagemakerWorkteam#workforce_name}. |
| <code><a href="#@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamConfig.property.workteamName">workteamName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_workteam#workteam_name SagemakerWorkteam#workteam_name}. |
| <code><a href="#@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_workteam#id SagemakerWorkteam#id}. |
| <code><a href="#@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamConfig.property.notificationConfiguration">notificationConfiguration</a></code> | <code><a href="#@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamNotificationConfiguration">SagemakerWorkteamNotificationConfiguration</a></code> | notification_configuration block. |
| <code><a href="#@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_workteam#tags SagemakerWorkteam#tags}. |
| <code><a href="#@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_workteam#tags_all SagemakerWorkteam#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_workteam#description SagemakerWorkteam#description}.

---

##### `memberDefinition`<sup>Required</sup> <a name="memberDefinition" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamConfig.property.memberDefinition"></a>

```typescript
public readonly memberDefinition: IResolvable | SagemakerWorkteamMemberDefinition[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamMemberDefinition">SagemakerWorkteamMemberDefinition</a>[]

member_definition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_workteam#member_definition SagemakerWorkteam#member_definition}

---

##### `workforceName`<sup>Required</sup> <a name="workforceName" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamConfig.property.workforceName"></a>

```typescript
public readonly workforceName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_workteam#workforce_name SagemakerWorkteam#workforce_name}.

---

##### `workteamName`<sup>Required</sup> <a name="workteamName" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamConfig.property.workteamName"></a>

```typescript
public readonly workteamName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_workteam#workteam_name SagemakerWorkteam#workteam_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_workteam#id SagemakerWorkteam#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `notificationConfiguration`<sup>Optional</sup> <a name="notificationConfiguration" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamConfig.property.notificationConfiguration"></a>

```typescript
public readonly notificationConfiguration: SagemakerWorkteamNotificationConfiguration;
```

- *Type:* <a href="#@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamNotificationConfiguration">SagemakerWorkteamNotificationConfiguration</a>

notification_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_workteam#notification_configuration SagemakerWorkteam#notification_configuration}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_workteam#tags SagemakerWorkteam#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_workteam#tags_all SagemakerWorkteam#tags_all}.

---

### SagemakerWorkteamMemberDefinition <a name="SagemakerWorkteamMemberDefinition" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamMemberDefinition"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamMemberDefinition.Initializer"></a>

```typescript
import { sagemakerWorkteam } from '@cdktf/aws-cdk'

const sagemakerWorkteamMemberDefinition: sagemakerWorkteam.SagemakerWorkteamMemberDefinition = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamMemberDefinition.property.cognitoMemberDefinition">cognitoMemberDefinition</a></code> | <code><a href="#@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionCognitoMemberDefinition">SagemakerWorkteamMemberDefinitionCognitoMemberDefinition</a></code> | cognito_member_definition block. |
| <code><a href="#@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamMemberDefinition.property.oidcMemberDefinition">oidcMemberDefinition</a></code> | <code><a href="#@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOidcMemberDefinition">SagemakerWorkteamMemberDefinitionOidcMemberDefinition</a></code> | oidc_member_definition block. |

---

##### `cognitoMemberDefinition`<sup>Optional</sup> <a name="cognitoMemberDefinition" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamMemberDefinition.property.cognitoMemberDefinition"></a>

```typescript
public readonly cognitoMemberDefinition: SagemakerWorkteamMemberDefinitionCognitoMemberDefinition;
```

- *Type:* <a href="#@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionCognitoMemberDefinition">SagemakerWorkteamMemberDefinitionCognitoMemberDefinition</a>

cognito_member_definition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_workteam#cognito_member_definition SagemakerWorkteam#cognito_member_definition}

---

##### `oidcMemberDefinition`<sup>Optional</sup> <a name="oidcMemberDefinition" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamMemberDefinition.property.oidcMemberDefinition"></a>

```typescript
public readonly oidcMemberDefinition: SagemakerWorkteamMemberDefinitionOidcMemberDefinition;
```

- *Type:* <a href="#@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOidcMemberDefinition">SagemakerWorkteamMemberDefinitionOidcMemberDefinition</a>

oidc_member_definition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_workteam#oidc_member_definition SagemakerWorkteam#oidc_member_definition}

---

### SagemakerWorkteamMemberDefinitionCognitoMemberDefinition <a name="SagemakerWorkteamMemberDefinitionCognitoMemberDefinition" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionCognitoMemberDefinition"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionCognitoMemberDefinition.Initializer"></a>

```typescript
import { sagemakerWorkteam } from '@cdktf/aws-cdk'

const sagemakerWorkteamMemberDefinitionCognitoMemberDefinition: sagemakerWorkteam.SagemakerWorkteamMemberDefinitionCognitoMemberDefinition = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionCognitoMemberDefinition.property.clientId">clientId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_workteam#client_id SagemakerWorkteam#client_id}. |
| <code><a href="#@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionCognitoMemberDefinition.property.userGroup">userGroup</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_workteam#user_group SagemakerWorkteam#user_group}. |
| <code><a href="#@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionCognitoMemberDefinition.property.userPool">userPool</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_workteam#user_pool SagemakerWorkteam#user_pool}. |

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionCognitoMemberDefinition.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_workteam#client_id SagemakerWorkteam#client_id}.

---

##### `userGroup`<sup>Required</sup> <a name="userGroup" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionCognitoMemberDefinition.property.userGroup"></a>

```typescript
public readonly userGroup: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_workteam#user_group SagemakerWorkteam#user_group}.

---

##### `userPool`<sup>Required</sup> <a name="userPool" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionCognitoMemberDefinition.property.userPool"></a>

```typescript
public readonly userPool: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_workteam#user_pool SagemakerWorkteam#user_pool}.

---

### SagemakerWorkteamMemberDefinitionOidcMemberDefinition <a name="SagemakerWorkteamMemberDefinitionOidcMemberDefinition" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOidcMemberDefinition"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOidcMemberDefinition.Initializer"></a>

```typescript
import { sagemakerWorkteam } from '@cdktf/aws-cdk'

const sagemakerWorkteamMemberDefinitionOidcMemberDefinition: sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOidcMemberDefinition = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOidcMemberDefinition.property.groups">groups</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_workteam#groups SagemakerWorkteam#groups}. |

---

##### `groups`<sup>Required</sup> <a name="groups" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOidcMemberDefinition.property.groups"></a>

```typescript
public readonly groups: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_workteam#groups SagemakerWorkteam#groups}.

---

### SagemakerWorkteamNotificationConfiguration <a name="SagemakerWorkteamNotificationConfiguration" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamNotificationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamNotificationConfiguration.Initializer"></a>

```typescript
import { sagemakerWorkteam } from '@cdktf/aws-cdk'

const sagemakerWorkteamNotificationConfiguration: sagemakerWorkteam.SagemakerWorkteamNotificationConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamNotificationConfiguration.property.notificationTopicArn">notificationTopicArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_workteam#notification_topic_arn SagemakerWorkteam#notification_topic_arn}. |

---

##### `notificationTopicArn`<sup>Optional</sup> <a name="notificationTopicArn" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamNotificationConfiguration.property.notificationTopicArn"></a>

```typescript
public readonly notificationTopicArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/sagemaker_workteam#notification_topic_arn SagemakerWorkteam#notification_topic_arn}.

---

## Classes <a name="Classes" id="Classes"></a>

### SagemakerWorkteamMemberDefinitionCognitoMemberDefinitionOutputReference <a name="SagemakerWorkteamMemberDefinitionCognitoMemberDefinitionOutputReference" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionCognitoMemberDefinitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionCognitoMemberDefinitionOutputReference.Initializer"></a>

```typescript
import { sagemakerWorkteam } from '@cdktf/aws-cdk'

new sagemakerWorkteam.SagemakerWorkteamMemberDefinitionCognitoMemberDefinitionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionCognitoMemberDefinitionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionCognitoMemberDefinitionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionCognitoMemberDefinitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionCognitoMemberDefinitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionCognitoMemberDefinitionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionCognitoMemberDefinitionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionCognitoMemberDefinitionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionCognitoMemberDefinitionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionCognitoMemberDefinitionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionCognitoMemberDefinitionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionCognitoMemberDefinitionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionCognitoMemberDefinitionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionCognitoMemberDefinitionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionCognitoMemberDefinitionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionCognitoMemberDefinitionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionCognitoMemberDefinitionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionCognitoMemberDefinitionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionCognitoMemberDefinitionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionCognitoMemberDefinitionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionCognitoMemberDefinitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionCognitoMemberDefinitionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionCognitoMemberDefinitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionCognitoMemberDefinitionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionCognitoMemberDefinitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionCognitoMemberDefinitionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionCognitoMemberDefinitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionCognitoMemberDefinitionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionCognitoMemberDefinitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionCognitoMemberDefinitionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionCognitoMemberDefinitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionCognitoMemberDefinitionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionCognitoMemberDefinitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionCognitoMemberDefinitionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionCognitoMemberDefinitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionCognitoMemberDefinitionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionCognitoMemberDefinitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionCognitoMemberDefinitionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionCognitoMemberDefinitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionCognitoMemberDefinitionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionCognitoMemberDefinitionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionCognitoMemberDefinitionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionCognitoMemberDefinitionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionCognitoMemberDefinitionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionCognitoMemberDefinitionOutputReference.property.clientIdInput">clientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionCognitoMemberDefinitionOutputReference.property.userGroupInput">userGroupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionCognitoMemberDefinitionOutputReference.property.userPoolInput">userPoolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionCognitoMemberDefinitionOutputReference.property.clientId">clientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionCognitoMemberDefinitionOutputReference.property.userGroup">userGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionCognitoMemberDefinitionOutputReference.property.userPool">userPool</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionCognitoMemberDefinitionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionCognitoMemberDefinition">SagemakerWorkteamMemberDefinitionCognitoMemberDefinition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionCognitoMemberDefinitionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionCognitoMemberDefinitionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionCognitoMemberDefinitionOutputReference.property.clientIdInput"></a>

```typescript
public readonly clientIdInput: string;
```

- *Type:* string

---

##### `userGroupInput`<sup>Optional</sup> <a name="userGroupInput" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionCognitoMemberDefinitionOutputReference.property.userGroupInput"></a>

```typescript
public readonly userGroupInput: string;
```

- *Type:* string

---

##### `userPoolInput`<sup>Optional</sup> <a name="userPoolInput" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionCognitoMemberDefinitionOutputReference.property.userPoolInput"></a>

```typescript
public readonly userPoolInput: string;
```

- *Type:* string

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionCognitoMemberDefinitionOutputReference.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

---

##### `userGroup`<sup>Required</sup> <a name="userGroup" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionCognitoMemberDefinitionOutputReference.property.userGroup"></a>

```typescript
public readonly userGroup: string;
```

- *Type:* string

---

##### `userPool`<sup>Required</sup> <a name="userPool" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionCognitoMemberDefinitionOutputReference.property.userPool"></a>

```typescript
public readonly userPool: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionCognitoMemberDefinitionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SagemakerWorkteamMemberDefinitionCognitoMemberDefinition;
```

- *Type:* <a href="#@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionCognitoMemberDefinition">SagemakerWorkteamMemberDefinitionCognitoMemberDefinition</a>

---


### SagemakerWorkteamMemberDefinitionList <a name="SagemakerWorkteamMemberDefinitionList" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionList.Initializer"></a>

```typescript
import { sagemakerWorkteam } from '@cdktf/aws-cdk'

new sagemakerWorkteam.SagemakerWorkteamMemberDefinitionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionList.get"></a>

```typescript
public get(index: number): SagemakerWorkteamMemberDefinitionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamMemberDefinition">SagemakerWorkteamMemberDefinition</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerWorkteamMemberDefinition[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamMemberDefinition">SagemakerWorkteamMemberDefinition</a>[]

---


### SagemakerWorkteamMemberDefinitionOidcMemberDefinitionOutputReference <a name="SagemakerWorkteamMemberDefinitionOidcMemberDefinitionOutputReference" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOidcMemberDefinitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOidcMemberDefinitionOutputReference.Initializer"></a>

```typescript
import { sagemakerWorkteam } from '@cdktf/aws-cdk'

new sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOidcMemberDefinitionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOidcMemberDefinitionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOidcMemberDefinitionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOidcMemberDefinitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOidcMemberDefinitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOidcMemberDefinitionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOidcMemberDefinitionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOidcMemberDefinitionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOidcMemberDefinitionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOidcMemberDefinitionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOidcMemberDefinitionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOidcMemberDefinitionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOidcMemberDefinitionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOidcMemberDefinitionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOidcMemberDefinitionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOidcMemberDefinitionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOidcMemberDefinitionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOidcMemberDefinitionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOidcMemberDefinitionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOidcMemberDefinitionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOidcMemberDefinitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOidcMemberDefinitionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOidcMemberDefinitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOidcMemberDefinitionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOidcMemberDefinitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOidcMemberDefinitionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOidcMemberDefinitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOidcMemberDefinitionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOidcMemberDefinitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOidcMemberDefinitionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOidcMemberDefinitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOidcMemberDefinitionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOidcMemberDefinitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOidcMemberDefinitionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOidcMemberDefinitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOidcMemberDefinitionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOidcMemberDefinitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOidcMemberDefinitionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOidcMemberDefinitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOidcMemberDefinitionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOidcMemberDefinitionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOidcMemberDefinitionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOidcMemberDefinitionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOidcMemberDefinitionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOidcMemberDefinitionOutputReference.property.groupsInput">groupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOidcMemberDefinitionOutputReference.property.groups">groups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOidcMemberDefinitionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOidcMemberDefinition">SagemakerWorkteamMemberDefinitionOidcMemberDefinition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOidcMemberDefinitionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOidcMemberDefinitionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `groupsInput`<sup>Optional</sup> <a name="groupsInput" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOidcMemberDefinitionOutputReference.property.groupsInput"></a>

```typescript
public readonly groupsInput: string[];
```

- *Type:* string[]

---

##### `groups`<sup>Required</sup> <a name="groups" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOidcMemberDefinitionOutputReference.property.groups"></a>

```typescript
public readonly groups: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOidcMemberDefinitionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SagemakerWorkteamMemberDefinitionOidcMemberDefinition;
```

- *Type:* <a href="#@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOidcMemberDefinition">SagemakerWorkteamMemberDefinitionOidcMemberDefinition</a>

---


### SagemakerWorkteamMemberDefinitionOutputReference <a name="SagemakerWorkteamMemberDefinitionOutputReference" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOutputReference.Initializer"></a>

```typescript
import { sagemakerWorkteam } from '@cdktf/aws-cdk'

new sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOutputReference.putCognitoMemberDefinition">putCognitoMemberDefinition</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOutputReference.putOidcMemberDefinition">putOidcMemberDefinition</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOutputReference.resetCognitoMemberDefinition">resetCognitoMemberDefinition</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOutputReference.resetOidcMemberDefinition">resetOidcMemberDefinition</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCognitoMemberDefinition` <a name="putCognitoMemberDefinition" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOutputReference.putCognitoMemberDefinition"></a>

```typescript
public putCognitoMemberDefinition(value: SagemakerWorkteamMemberDefinitionCognitoMemberDefinition): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOutputReference.putCognitoMemberDefinition.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionCognitoMemberDefinition">SagemakerWorkteamMemberDefinitionCognitoMemberDefinition</a>

---

##### `putOidcMemberDefinition` <a name="putOidcMemberDefinition" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOutputReference.putOidcMemberDefinition"></a>

```typescript
public putOidcMemberDefinition(value: SagemakerWorkteamMemberDefinitionOidcMemberDefinition): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOutputReference.putOidcMemberDefinition.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOidcMemberDefinition">SagemakerWorkteamMemberDefinitionOidcMemberDefinition</a>

---

##### `resetCognitoMemberDefinition` <a name="resetCognitoMemberDefinition" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOutputReference.resetCognitoMemberDefinition"></a>

```typescript
public resetCognitoMemberDefinition(): void
```

##### `resetOidcMemberDefinition` <a name="resetOidcMemberDefinition" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOutputReference.resetOidcMemberDefinition"></a>

```typescript
public resetOidcMemberDefinition(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOutputReference.property.cognitoMemberDefinition">cognitoMemberDefinition</a></code> | <code><a href="#@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionCognitoMemberDefinitionOutputReference">SagemakerWorkteamMemberDefinitionCognitoMemberDefinitionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOutputReference.property.oidcMemberDefinition">oidcMemberDefinition</a></code> | <code><a href="#@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOidcMemberDefinitionOutputReference">SagemakerWorkteamMemberDefinitionOidcMemberDefinitionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOutputReference.property.cognitoMemberDefinitionInput">cognitoMemberDefinitionInput</a></code> | <code><a href="#@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionCognitoMemberDefinition">SagemakerWorkteamMemberDefinitionCognitoMemberDefinition</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOutputReference.property.oidcMemberDefinitionInput">oidcMemberDefinitionInput</a></code> | <code><a href="#@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOidcMemberDefinition">SagemakerWorkteamMemberDefinitionOidcMemberDefinition</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamMemberDefinition">SagemakerWorkteamMemberDefinition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cognitoMemberDefinition`<sup>Required</sup> <a name="cognitoMemberDefinition" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOutputReference.property.cognitoMemberDefinition"></a>

```typescript
public readonly cognitoMemberDefinition: SagemakerWorkteamMemberDefinitionCognitoMemberDefinitionOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionCognitoMemberDefinitionOutputReference">SagemakerWorkteamMemberDefinitionCognitoMemberDefinitionOutputReference</a>

---

##### `oidcMemberDefinition`<sup>Required</sup> <a name="oidcMemberDefinition" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOutputReference.property.oidcMemberDefinition"></a>

```typescript
public readonly oidcMemberDefinition: SagemakerWorkteamMemberDefinitionOidcMemberDefinitionOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOidcMemberDefinitionOutputReference">SagemakerWorkteamMemberDefinitionOidcMemberDefinitionOutputReference</a>

---

##### `cognitoMemberDefinitionInput`<sup>Optional</sup> <a name="cognitoMemberDefinitionInput" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOutputReference.property.cognitoMemberDefinitionInput"></a>

```typescript
public readonly cognitoMemberDefinitionInput: SagemakerWorkteamMemberDefinitionCognitoMemberDefinition;
```

- *Type:* <a href="#@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionCognitoMemberDefinition">SagemakerWorkteamMemberDefinitionCognitoMemberDefinition</a>

---

##### `oidcMemberDefinitionInput`<sup>Optional</sup> <a name="oidcMemberDefinitionInput" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOutputReference.property.oidcMemberDefinitionInput"></a>

```typescript
public readonly oidcMemberDefinitionInput: SagemakerWorkteamMemberDefinitionOidcMemberDefinition;
```

- *Type:* <a href="#@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOidcMemberDefinition">SagemakerWorkteamMemberDefinitionOidcMemberDefinition</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamMemberDefinitionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SagemakerWorkteamMemberDefinition;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamMemberDefinition">SagemakerWorkteamMemberDefinition</a>

---


### SagemakerWorkteamNotificationConfigurationOutputReference <a name="SagemakerWorkteamNotificationConfigurationOutputReference" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.Initializer"></a>

```typescript
import { sagemakerWorkteam } from '@cdktf/aws-cdk'

new sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.resetNotificationTopicArn">resetNotificationTopicArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetNotificationTopicArn` <a name="resetNotificationTopicArn" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.resetNotificationTopicArn"></a>

```typescript
public resetNotificationTopicArn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.property.notificationTopicArnInput">notificationTopicArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.property.notificationTopicArn">notificationTopicArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamNotificationConfiguration">SagemakerWorkteamNotificationConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `notificationTopicArnInput`<sup>Optional</sup> <a name="notificationTopicArnInput" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.property.notificationTopicArnInput"></a>

```typescript
public readonly notificationTopicArnInput: string;
```

- *Type:* string

---

##### `notificationTopicArn`<sup>Required</sup> <a name="notificationTopicArn" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.property.notificationTopicArn"></a>

```typescript
public readonly notificationTopicArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamNotificationConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SagemakerWorkteamNotificationConfiguration;
```

- *Type:* <a href="#@cdktf/aws-cdk.sagemakerWorkteam.SagemakerWorkteamNotificationConfiguration">SagemakerWorkteamNotificationConfiguration</a>

---



