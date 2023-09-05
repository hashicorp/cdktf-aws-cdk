# `aws_redshift_scheduled_action`

Refer to the Terraform Registory for docs: [`aws_redshift_scheduled_action`](https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/redshift_scheduled_action).

# `redshiftScheduledAction` Submodule <a name="`redshiftScheduledAction` Submodule" id="@cdktf/aws-cdk.redshiftScheduledAction"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RedshiftScheduledAction <a name="RedshiftScheduledAction" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledAction"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/redshift_scheduled_action aws_redshift_scheduled_action}.

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledAction.Initializer"></a>

```typescript
import { redshiftScheduledAction } from '@cdktf/aws-cdk'

new redshiftScheduledAction.RedshiftScheduledAction(scope: Construct, id: string, config: RedshiftScheduledActionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledAction.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledAction.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledAction.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionConfig">RedshiftScheduledActionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledAction.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledAction.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledAction.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionConfig">RedshiftScheduledActionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledAction.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledAction.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledAction.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledAction.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledAction.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledAction.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledAction.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledAction.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledAction.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledAction.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledAction.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledAction.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledAction.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledAction.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledAction.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledAction.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledAction.putTargetAction">putTargetAction</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledAction.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledAction.resetEnable">resetEnable</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledAction.resetEndTime">resetEndTime</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledAction.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledAction.resetStartTime">resetStartTime</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledAction.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledAction.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledAction.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledAction.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledAction.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledAction.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledAction.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledAction.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledAction.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledAction.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledAction.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledAction.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledAction.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledAction.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledAction.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledAction.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledAction.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledAction.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledAction.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledAction.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledAction.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledAction.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledAction.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledAction.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledAction.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledAction.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledAction.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledAction.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledAction.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTargetAction` <a name="putTargetAction" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledAction.putTargetAction"></a>

```typescript
public putTargetAction(value: RedshiftScheduledActionTargetAction): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledAction.putTargetAction.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetAction">RedshiftScheduledActionTargetAction</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledAction.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetEnable` <a name="resetEnable" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledAction.resetEnable"></a>

```typescript
public resetEnable(): void
```

##### `resetEndTime` <a name="resetEndTime" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledAction.resetEndTime"></a>

```typescript
public resetEndTime(): void
```

##### `resetId` <a name="resetId" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledAction.resetId"></a>

```typescript
public resetId(): void
```

##### `resetStartTime` <a name="resetStartTime" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledAction.resetStartTime"></a>

```typescript
public resetStartTime(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledAction.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledAction.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledAction.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledAction.isConstruct"></a>

```typescript
import { redshiftScheduledAction } from '@cdktf/aws-cdk'

redshiftScheduledAction.RedshiftScheduledAction.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledAction.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledAction.isTerraformElement"></a>

```typescript
import { redshiftScheduledAction } from '@cdktf/aws-cdk'

redshiftScheduledAction.RedshiftScheduledAction.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledAction.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledAction.isTerraformResource"></a>

```typescript
import { redshiftScheduledAction } from '@cdktf/aws-cdk'

redshiftScheduledAction.RedshiftScheduledAction.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledAction.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledAction.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledAction.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledAction.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledAction.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledAction.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledAction.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledAction.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledAction.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledAction.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledAction.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledAction.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledAction.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledAction.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledAction.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledAction.property.targetAction">targetAction</a></code> | <code><a href="#@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference">RedshiftScheduledActionTargetActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledAction.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledAction.property.enableInput">enableInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledAction.property.endTimeInput">endTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledAction.property.iamRoleInput">iamRoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledAction.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledAction.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledAction.property.scheduleInput">scheduleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledAction.property.startTimeInput">startTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledAction.property.targetActionInput">targetActionInput</a></code> | <code><a href="#@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetAction">RedshiftScheduledActionTargetAction</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledAction.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledAction.property.enable">enable</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledAction.property.endTime">endTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledAction.property.iamRole">iamRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledAction.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledAction.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledAction.property.schedule">schedule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledAction.property.startTime">startTime</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledAction.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledAction.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledAction.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledAction.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledAction.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledAction.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledAction.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledAction.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledAction.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledAction.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledAction.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledAction.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledAction.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledAction.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `targetAction`<sup>Required</sup> <a name="targetAction" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledAction.property.targetAction"></a>

```typescript
public readonly targetAction: RedshiftScheduledActionTargetActionOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference">RedshiftScheduledActionTargetActionOutputReference</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledAction.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `enableInput`<sup>Optional</sup> <a name="enableInput" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledAction.property.enableInput"></a>

```typescript
public readonly enableInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `endTimeInput`<sup>Optional</sup> <a name="endTimeInput" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledAction.property.endTimeInput"></a>

```typescript
public readonly endTimeInput: string;
```

- *Type:* string

---

##### `iamRoleInput`<sup>Optional</sup> <a name="iamRoleInput" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledAction.property.iamRoleInput"></a>

```typescript
public readonly iamRoleInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledAction.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledAction.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `scheduleInput`<sup>Optional</sup> <a name="scheduleInput" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledAction.property.scheduleInput"></a>

```typescript
public readonly scheduleInput: string;
```

- *Type:* string

---

##### `startTimeInput`<sup>Optional</sup> <a name="startTimeInput" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledAction.property.startTimeInput"></a>

```typescript
public readonly startTimeInput: string;
```

- *Type:* string

---

##### `targetActionInput`<sup>Optional</sup> <a name="targetActionInput" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledAction.property.targetActionInput"></a>

```typescript
public readonly targetActionInput: RedshiftScheduledActionTargetAction;
```

- *Type:* <a href="#@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetAction">RedshiftScheduledActionTargetAction</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledAction.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `enable`<sup>Required</sup> <a name="enable" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledAction.property.enable"></a>

```typescript
public readonly enable: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `endTime`<sup>Required</sup> <a name="endTime" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledAction.property.endTime"></a>

```typescript
public readonly endTime: string;
```

- *Type:* string

---

##### `iamRole`<sup>Required</sup> <a name="iamRole" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledAction.property.iamRole"></a>

```typescript
public readonly iamRole: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledAction.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledAction.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledAction.property.schedule"></a>

```typescript
public readonly schedule: string;
```

- *Type:* string

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledAction.property.startTime"></a>

```typescript
public readonly startTime: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledAction.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledAction.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### RedshiftScheduledActionConfig <a name="RedshiftScheduledActionConfig" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionConfig.Initializer"></a>

```typescript
import { redshiftScheduledAction } from '@cdktf/aws-cdk'

const redshiftScheduledActionConfig: redshiftScheduledAction.RedshiftScheduledActionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionConfig.property.iamRole">iamRole</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/redshift_scheduled_action#iam_role RedshiftScheduledAction#iam_role}. |
| <code><a href="#@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/redshift_scheduled_action#name RedshiftScheduledAction#name}. |
| <code><a href="#@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionConfig.property.schedule">schedule</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/redshift_scheduled_action#schedule RedshiftScheduledAction#schedule}. |
| <code><a href="#@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionConfig.property.targetAction">targetAction</a></code> | <code><a href="#@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetAction">RedshiftScheduledActionTargetAction</a></code> | target_action block. |
| <code><a href="#@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/redshift_scheduled_action#description RedshiftScheduledAction#description}. |
| <code><a href="#@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionConfig.property.enable">enable</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/redshift_scheduled_action#enable RedshiftScheduledAction#enable}. |
| <code><a href="#@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionConfig.property.endTime">endTime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/redshift_scheduled_action#end_time RedshiftScheduledAction#end_time}. |
| <code><a href="#@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/redshift_scheduled_action#id RedshiftScheduledAction#id}. |
| <code><a href="#@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionConfig.property.startTime">startTime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/redshift_scheduled_action#start_time RedshiftScheduledAction#start_time}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `iamRole`<sup>Required</sup> <a name="iamRole" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionConfig.property.iamRole"></a>

```typescript
public readonly iamRole: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/redshift_scheduled_action#iam_role RedshiftScheduledAction#iam_role}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/redshift_scheduled_action#name RedshiftScheduledAction#name}.

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionConfig.property.schedule"></a>

```typescript
public readonly schedule: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/redshift_scheduled_action#schedule RedshiftScheduledAction#schedule}.

---

##### `targetAction`<sup>Required</sup> <a name="targetAction" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionConfig.property.targetAction"></a>

```typescript
public readonly targetAction: RedshiftScheduledActionTargetAction;
```

- *Type:* <a href="#@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetAction">RedshiftScheduledActionTargetAction</a>

target_action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/redshift_scheduled_action#target_action RedshiftScheduledAction#target_action}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/redshift_scheduled_action#description RedshiftScheduledAction#description}.

---

##### `enable`<sup>Optional</sup> <a name="enable" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionConfig.property.enable"></a>

```typescript
public readonly enable: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/redshift_scheduled_action#enable RedshiftScheduledAction#enable}.

---

##### `endTime`<sup>Optional</sup> <a name="endTime" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionConfig.property.endTime"></a>

```typescript
public readonly endTime: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/redshift_scheduled_action#end_time RedshiftScheduledAction#end_time}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/redshift_scheduled_action#id RedshiftScheduledAction#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `startTime`<sup>Optional</sup> <a name="startTime" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionConfig.property.startTime"></a>

```typescript
public readonly startTime: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/redshift_scheduled_action#start_time RedshiftScheduledAction#start_time}.

---

### RedshiftScheduledActionTargetAction <a name="RedshiftScheduledActionTargetAction" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetAction.Initializer"></a>

```typescript
import { redshiftScheduledAction } from '@cdktf/aws-cdk'

const redshiftScheduledActionTargetAction: redshiftScheduledAction.RedshiftScheduledActionTargetAction = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetAction.property.pauseCluster">pauseCluster</a></code> | <code><a href="#@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseCluster">RedshiftScheduledActionTargetActionPauseCluster</a></code> | pause_cluster block. |
| <code><a href="#@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetAction.property.resizeCluster">resizeCluster</a></code> | <code><a href="#@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeCluster">RedshiftScheduledActionTargetActionResizeCluster</a></code> | resize_cluster block. |
| <code><a href="#@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetAction.property.resumeCluster">resumeCluster</a></code> | <code><a href="#@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeCluster">RedshiftScheduledActionTargetActionResumeCluster</a></code> | resume_cluster block. |

---

##### `pauseCluster`<sup>Optional</sup> <a name="pauseCluster" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetAction.property.pauseCluster"></a>

```typescript
public readonly pauseCluster: RedshiftScheduledActionTargetActionPauseCluster;
```

- *Type:* <a href="#@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseCluster">RedshiftScheduledActionTargetActionPauseCluster</a>

pause_cluster block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/redshift_scheduled_action#pause_cluster RedshiftScheduledAction#pause_cluster}

---

##### `resizeCluster`<sup>Optional</sup> <a name="resizeCluster" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetAction.property.resizeCluster"></a>

```typescript
public readonly resizeCluster: RedshiftScheduledActionTargetActionResizeCluster;
```

- *Type:* <a href="#@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeCluster">RedshiftScheduledActionTargetActionResizeCluster</a>

resize_cluster block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/redshift_scheduled_action#resize_cluster RedshiftScheduledAction#resize_cluster}

---

##### `resumeCluster`<sup>Optional</sup> <a name="resumeCluster" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetAction.property.resumeCluster"></a>

```typescript
public readonly resumeCluster: RedshiftScheduledActionTargetActionResumeCluster;
```

- *Type:* <a href="#@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeCluster">RedshiftScheduledActionTargetActionResumeCluster</a>

resume_cluster block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/redshift_scheduled_action#resume_cluster RedshiftScheduledAction#resume_cluster}

---

### RedshiftScheduledActionTargetActionPauseCluster <a name="RedshiftScheduledActionTargetActionPauseCluster" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseCluster"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseCluster.Initializer"></a>

```typescript
import { redshiftScheduledAction } from '@cdktf/aws-cdk'

const redshiftScheduledActionTargetActionPauseCluster: redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseCluster = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseCluster.property.clusterIdentifier">clusterIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/redshift_scheduled_action#cluster_identifier RedshiftScheduledAction#cluster_identifier}. |

---

##### `clusterIdentifier`<sup>Required</sup> <a name="clusterIdentifier" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseCluster.property.clusterIdentifier"></a>

```typescript
public readonly clusterIdentifier: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/redshift_scheduled_action#cluster_identifier RedshiftScheduledAction#cluster_identifier}.

---

### RedshiftScheduledActionTargetActionResizeCluster <a name="RedshiftScheduledActionTargetActionResizeCluster" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeCluster"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeCluster.Initializer"></a>

```typescript
import { redshiftScheduledAction } from '@cdktf/aws-cdk'

const redshiftScheduledActionTargetActionResizeCluster: redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeCluster = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeCluster.property.clusterIdentifier">clusterIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/redshift_scheduled_action#cluster_identifier RedshiftScheduledAction#cluster_identifier}. |
| <code><a href="#@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeCluster.property.classic">classic</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/redshift_scheduled_action#classic RedshiftScheduledAction#classic}. |
| <code><a href="#@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeCluster.property.clusterType">clusterType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/redshift_scheduled_action#cluster_type RedshiftScheduledAction#cluster_type}. |
| <code><a href="#@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeCluster.property.nodeType">nodeType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/redshift_scheduled_action#node_type RedshiftScheduledAction#node_type}. |
| <code><a href="#@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeCluster.property.numberOfNodes">numberOfNodes</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/redshift_scheduled_action#number_of_nodes RedshiftScheduledAction#number_of_nodes}. |

---

##### `clusterIdentifier`<sup>Required</sup> <a name="clusterIdentifier" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeCluster.property.clusterIdentifier"></a>

```typescript
public readonly clusterIdentifier: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/redshift_scheduled_action#cluster_identifier RedshiftScheduledAction#cluster_identifier}.

---

##### `classic`<sup>Optional</sup> <a name="classic" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeCluster.property.classic"></a>

```typescript
public readonly classic: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/redshift_scheduled_action#classic RedshiftScheduledAction#classic}.

---

##### `clusterType`<sup>Optional</sup> <a name="clusterType" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeCluster.property.clusterType"></a>

```typescript
public readonly clusterType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/redshift_scheduled_action#cluster_type RedshiftScheduledAction#cluster_type}.

---

##### `nodeType`<sup>Optional</sup> <a name="nodeType" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeCluster.property.nodeType"></a>

```typescript
public readonly nodeType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/redshift_scheduled_action#node_type RedshiftScheduledAction#node_type}.

---

##### `numberOfNodes`<sup>Optional</sup> <a name="numberOfNodes" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeCluster.property.numberOfNodes"></a>

```typescript
public readonly numberOfNodes: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/redshift_scheduled_action#number_of_nodes RedshiftScheduledAction#number_of_nodes}.

---

### RedshiftScheduledActionTargetActionResumeCluster <a name="RedshiftScheduledActionTargetActionResumeCluster" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeCluster"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeCluster.Initializer"></a>

```typescript
import { redshiftScheduledAction } from '@cdktf/aws-cdk'

const redshiftScheduledActionTargetActionResumeCluster: redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeCluster = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeCluster.property.clusterIdentifier">clusterIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/redshift_scheduled_action#cluster_identifier RedshiftScheduledAction#cluster_identifier}. |

---

##### `clusterIdentifier`<sup>Required</sup> <a name="clusterIdentifier" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeCluster.property.clusterIdentifier"></a>

```typescript
public readonly clusterIdentifier: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/redshift_scheduled_action#cluster_identifier RedshiftScheduledAction#cluster_identifier}.

---

## Classes <a name="Classes" id="Classes"></a>

### RedshiftScheduledActionTargetActionOutputReference <a name="RedshiftScheduledActionTargetActionOutputReference" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.Initializer"></a>

```typescript
import { redshiftScheduledAction } from '@cdktf/aws-cdk'

new redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.putPauseCluster">putPauseCluster</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.putResizeCluster">putResizeCluster</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.putResumeCluster">putResumeCluster</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.resetPauseCluster">resetPauseCluster</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.resetResizeCluster">resetResizeCluster</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.resetResumeCluster">resetResumeCluster</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPauseCluster` <a name="putPauseCluster" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.putPauseCluster"></a>

```typescript
public putPauseCluster(value: RedshiftScheduledActionTargetActionPauseCluster): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.putPauseCluster.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseCluster">RedshiftScheduledActionTargetActionPauseCluster</a>

---

##### `putResizeCluster` <a name="putResizeCluster" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.putResizeCluster"></a>

```typescript
public putResizeCluster(value: RedshiftScheduledActionTargetActionResizeCluster): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.putResizeCluster.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeCluster">RedshiftScheduledActionTargetActionResizeCluster</a>

---

##### `putResumeCluster` <a name="putResumeCluster" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.putResumeCluster"></a>

```typescript
public putResumeCluster(value: RedshiftScheduledActionTargetActionResumeCluster): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.putResumeCluster.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeCluster">RedshiftScheduledActionTargetActionResumeCluster</a>

---

##### `resetPauseCluster` <a name="resetPauseCluster" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.resetPauseCluster"></a>

```typescript
public resetPauseCluster(): void
```

##### `resetResizeCluster` <a name="resetResizeCluster" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.resetResizeCluster"></a>

```typescript
public resetResizeCluster(): void
```

##### `resetResumeCluster` <a name="resetResumeCluster" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.resetResumeCluster"></a>

```typescript
public resetResumeCluster(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.property.pauseCluster">pauseCluster</a></code> | <code><a href="#@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference">RedshiftScheduledActionTargetActionPauseClusterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.property.resizeCluster">resizeCluster</a></code> | <code><a href="#@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference">RedshiftScheduledActionTargetActionResizeClusterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.property.resumeCluster">resumeCluster</a></code> | <code><a href="#@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference">RedshiftScheduledActionTargetActionResumeClusterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.property.pauseClusterInput">pauseClusterInput</a></code> | <code><a href="#@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseCluster">RedshiftScheduledActionTargetActionPauseCluster</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.property.resizeClusterInput">resizeClusterInput</a></code> | <code><a href="#@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeCluster">RedshiftScheduledActionTargetActionResizeCluster</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.property.resumeClusterInput">resumeClusterInput</a></code> | <code><a href="#@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeCluster">RedshiftScheduledActionTargetActionResumeCluster</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetAction">RedshiftScheduledActionTargetAction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `pauseCluster`<sup>Required</sup> <a name="pauseCluster" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.property.pauseCluster"></a>

```typescript
public readonly pauseCluster: RedshiftScheduledActionTargetActionPauseClusterOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference">RedshiftScheduledActionTargetActionPauseClusterOutputReference</a>

---

##### `resizeCluster`<sup>Required</sup> <a name="resizeCluster" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.property.resizeCluster"></a>

```typescript
public readonly resizeCluster: RedshiftScheduledActionTargetActionResizeClusterOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference">RedshiftScheduledActionTargetActionResizeClusterOutputReference</a>

---

##### `resumeCluster`<sup>Required</sup> <a name="resumeCluster" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.property.resumeCluster"></a>

```typescript
public readonly resumeCluster: RedshiftScheduledActionTargetActionResumeClusterOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference">RedshiftScheduledActionTargetActionResumeClusterOutputReference</a>

---

##### `pauseClusterInput`<sup>Optional</sup> <a name="pauseClusterInput" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.property.pauseClusterInput"></a>

```typescript
public readonly pauseClusterInput: RedshiftScheduledActionTargetActionPauseCluster;
```

- *Type:* <a href="#@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseCluster">RedshiftScheduledActionTargetActionPauseCluster</a>

---

##### `resizeClusterInput`<sup>Optional</sup> <a name="resizeClusterInput" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.property.resizeClusterInput"></a>

```typescript
public readonly resizeClusterInput: RedshiftScheduledActionTargetActionResizeCluster;
```

- *Type:* <a href="#@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeCluster">RedshiftScheduledActionTargetActionResizeCluster</a>

---

##### `resumeClusterInput`<sup>Optional</sup> <a name="resumeClusterInput" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.property.resumeClusterInput"></a>

```typescript
public readonly resumeClusterInput: RedshiftScheduledActionTargetActionResumeCluster;
```

- *Type:* <a href="#@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeCluster">RedshiftScheduledActionTargetActionResumeCluster</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: RedshiftScheduledActionTargetAction;
```

- *Type:* <a href="#@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetAction">RedshiftScheduledActionTargetAction</a>

---


### RedshiftScheduledActionTargetActionPauseClusterOutputReference <a name="RedshiftScheduledActionTargetActionPauseClusterOutputReference" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference.Initializer"></a>

```typescript
import { redshiftScheduledAction } from '@cdktf/aws-cdk'

new redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference.property.clusterIdentifierInput">clusterIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference.property.clusterIdentifier">clusterIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseCluster">RedshiftScheduledActionTargetActionPauseCluster</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `clusterIdentifierInput`<sup>Optional</sup> <a name="clusterIdentifierInput" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference.property.clusterIdentifierInput"></a>

```typescript
public readonly clusterIdentifierInput: string;
```

- *Type:* string

---

##### `clusterIdentifier`<sup>Required</sup> <a name="clusterIdentifier" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference.property.clusterIdentifier"></a>

```typescript
public readonly clusterIdentifier: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseClusterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: RedshiftScheduledActionTargetActionPauseCluster;
```

- *Type:* <a href="#@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionPauseCluster">RedshiftScheduledActionTargetActionPauseCluster</a>

---


### RedshiftScheduledActionTargetActionResizeClusterOutputReference <a name="RedshiftScheduledActionTargetActionResizeClusterOutputReference" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.Initializer"></a>

```typescript
import { redshiftScheduledAction } from '@cdktf/aws-cdk'

new redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.resetClassic">resetClassic</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.resetClusterType">resetClusterType</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.resetNodeType">resetNodeType</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.resetNumberOfNodes">resetNumberOfNodes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetClassic` <a name="resetClassic" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.resetClassic"></a>

```typescript
public resetClassic(): void
```

##### `resetClusterType` <a name="resetClusterType" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.resetClusterType"></a>

```typescript
public resetClusterType(): void
```

##### `resetNodeType` <a name="resetNodeType" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.resetNodeType"></a>

```typescript
public resetNodeType(): void
```

##### `resetNumberOfNodes` <a name="resetNumberOfNodes" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.resetNumberOfNodes"></a>

```typescript
public resetNumberOfNodes(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.property.classicInput">classicInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.property.clusterIdentifierInput">clusterIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.property.clusterTypeInput">clusterTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.property.nodeTypeInput">nodeTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.property.numberOfNodesInput">numberOfNodesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.property.classic">classic</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.property.clusterIdentifier">clusterIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.property.clusterType">clusterType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.property.nodeType">nodeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.property.numberOfNodes">numberOfNodes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeCluster">RedshiftScheduledActionTargetActionResizeCluster</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `classicInput`<sup>Optional</sup> <a name="classicInput" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.property.classicInput"></a>

```typescript
public readonly classicInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `clusterIdentifierInput`<sup>Optional</sup> <a name="clusterIdentifierInput" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.property.clusterIdentifierInput"></a>

```typescript
public readonly clusterIdentifierInput: string;
```

- *Type:* string

---

##### `clusterTypeInput`<sup>Optional</sup> <a name="clusterTypeInput" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.property.clusterTypeInput"></a>

```typescript
public readonly clusterTypeInput: string;
```

- *Type:* string

---

##### `nodeTypeInput`<sup>Optional</sup> <a name="nodeTypeInput" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.property.nodeTypeInput"></a>

```typescript
public readonly nodeTypeInput: string;
```

- *Type:* string

---

##### `numberOfNodesInput`<sup>Optional</sup> <a name="numberOfNodesInput" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.property.numberOfNodesInput"></a>

```typescript
public readonly numberOfNodesInput: number;
```

- *Type:* number

---

##### `classic`<sup>Required</sup> <a name="classic" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.property.classic"></a>

```typescript
public readonly classic: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `clusterIdentifier`<sup>Required</sup> <a name="clusterIdentifier" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.property.clusterIdentifier"></a>

```typescript
public readonly clusterIdentifier: string;
```

- *Type:* string

---

##### `clusterType`<sup>Required</sup> <a name="clusterType" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.property.clusterType"></a>

```typescript
public readonly clusterType: string;
```

- *Type:* string

---

##### `nodeType`<sup>Required</sup> <a name="nodeType" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.property.nodeType"></a>

```typescript
public readonly nodeType: string;
```

- *Type:* string

---

##### `numberOfNodes`<sup>Required</sup> <a name="numberOfNodes" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.property.numberOfNodes"></a>

```typescript
public readonly numberOfNodes: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeClusterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: RedshiftScheduledActionTargetActionResizeCluster;
```

- *Type:* <a href="#@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionResizeCluster">RedshiftScheduledActionTargetActionResizeCluster</a>

---


### RedshiftScheduledActionTargetActionResumeClusterOutputReference <a name="RedshiftScheduledActionTargetActionResumeClusterOutputReference" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference.Initializer"></a>

```typescript
import { redshiftScheduledAction } from '@cdktf/aws-cdk'

new redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference.property.clusterIdentifierInput">clusterIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference.property.clusterIdentifier">clusterIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeCluster">RedshiftScheduledActionTargetActionResumeCluster</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `clusterIdentifierInput`<sup>Optional</sup> <a name="clusterIdentifierInput" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference.property.clusterIdentifierInput"></a>

```typescript
public readonly clusterIdentifierInput: string;
```

- *Type:* string

---

##### `clusterIdentifier`<sup>Required</sup> <a name="clusterIdentifier" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference.property.clusterIdentifier"></a>

```typescript
public readonly clusterIdentifier: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeClusterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: RedshiftScheduledActionTargetActionResumeCluster;
```

- *Type:* <a href="#@cdktf/aws-cdk.redshiftScheduledAction.RedshiftScheduledActionTargetActionResumeCluster">RedshiftScheduledActionTargetActionResumeCluster</a>

---



