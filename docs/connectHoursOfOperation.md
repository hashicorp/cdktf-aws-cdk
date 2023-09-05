# `aws_connect_hours_of_operation`

Refer to the Terraform Registory for docs: [`aws_connect_hours_of_operation`](https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/connect_hours_of_operation).

# `connectHoursOfOperation` Submodule <a name="`connectHoursOfOperation` Submodule" id="@cdktf/aws-cdk.connectHoursOfOperation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ConnectHoursOfOperation <a name="ConnectHoursOfOperation" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/connect_hours_of_operation aws_connect_hours_of_operation}.

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperation.Initializer"></a>

```typescript
import { connectHoursOfOperation } from '@cdktf/aws-cdk'

new connectHoursOfOperation.ConnectHoursOfOperation(scope: Construct, id: string, config: ConnectHoursOfOperationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperation.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfig">ConnectHoursOfOperationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfig">ConnectHoursOfOperationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperation.putConfig">putConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperation.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperation.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperation.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperation.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperation.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperation.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperation.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperation.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperation.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperation.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperation.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperation.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperation.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperation.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperation.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperation.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperation.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperation.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperation.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperation.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperation.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperation.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperation.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putConfig` <a name="putConfig" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperation.putConfig"></a>

```typescript
public putConfig(value: IResolvable | ConnectHoursOfOperationConfigA[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperation.putConfig.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfigA">ConnectHoursOfOperationConfigA</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperation.putTimeouts"></a>

```typescript
public putTimeouts(value: ConnectHoursOfOperationTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperation.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationTimeouts">ConnectHoursOfOperationTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperation.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperation.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperation.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperation.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperation.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperation.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperation.isConstruct"></a>

```typescript
import { connectHoursOfOperation } from '@cdktf/aws-cdk'

connectHoursOfOperation.ConnectHoursOfOperation.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperation.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperation.isTerraformElement"></a>

```typescript
import { connectHoursOfOperation } from '@cdktf/aws-cdk'

connectHoursOfOperation.ConnectHoursOfOperation.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperation.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperation.isTerraformResource"></a>

```typescript
import { connectHoursOfOperation } from '@cdktf/aws-cdk'

connectHoursOfOperation.ConnectHoursOfOperation.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperation.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperation.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperation.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperation.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperation.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperation.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperation.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperation.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperation.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperation.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperation.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperation.property.config">config</a></code> | <code><a href="#@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfigAList">ConnectHoursOfOperationConfigAList</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperation.property.hoursOfOperationArn">hoursOfOperationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperation.property.hoursOfOperationId">hoursOfOperationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperation.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationTimeoutsOutputReference">ConnectHoursOfOperationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperation.property.configInput">configInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfigA">ConnectHoursOfOperationConfigA</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperation.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperation.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperation.property.instanceIdInput">instanceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperation.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperation.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperation.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperation.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationTimeouts">ConnectHoursOfOperationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperation.property.timeZoneInput">timeZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperation.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperation.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperation.property.instanceId">instanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperation.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperation.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperation.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperation.property.timeZone">timeZone</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperation.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperation.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperation.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperation.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperation.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperation.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperation.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperation.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperation.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperation.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperation.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperation.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperation.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperation.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperation.property.config"></a>

```typescript
public readonly config: ConnectHoursOfOperationConfigAList;
```

- *Type:* <a href="#@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfigAList">ConnectHoursOfOperationConfigAList</a>

---

##### `hoursOfOperationArn`<sup>Required</sup> <a name="hoursOfOperationArn" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperation.property.hoursOfOperationArn"></a>

```typescript
public readonly hoursOfOperationArn: string;
```

- *Type:* string

---

##### `hoursOfOperationId`<sup>Required</sup> <a name="hoursOfOperationId" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperation.property.hoursOfOperationId"></a>

```typescript
public readonly hoursOfOperationId: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperation.property.timeouts"></a>

```typescript
public readonly timeouts: ConnectHoursOfOperationTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationTimeoutsOutputReference">ConnectHoursOfOperationTimeoutsOutputReference</a>

---

##### `configInput`<sup>Optional</sup> <a name="configInput" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperation.property.configInput"></a>

```typescript
public readonly configInput: IResolvable | ConnectHoursOfOperationConfigA[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfigA">ConnectHoursOfOperationConfigA</a>[]

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperation.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperation.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `instanceIdInput`<sup>Optional</sup> <a name="instanceIdInput" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperation.property.instanceIdInput"></a>

```typescript
public readonly instanceIdInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperation.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperation.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperation.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperation.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ConnectHoursOfOperationTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationTimeouts">ConnectHoursOfOperationTimeouts</a>

---

##### `timeZoneInput`<sup>Optional</sup> <a name="timeZoneInput" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperation.property.timeZoneInput"></a>

```typescript
public readonly timeZoneInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperation.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperation.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperation.property.instanceId"></a>

```typescript
public readonly instanceId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperation.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperation.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperation.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeZone`<sup>Required</sup> <a name="timeZone" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperation.property.timeZone"></a>

```typescript
public readonly timeZone: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperation.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperation.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ConnectHoursOfOperationConfig <a name="ConnectHoursOfOperationConfig" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfig.Initializer"></a>

```typescript
import { connectHoursOfOperation } from '@cdktf/aws-cdk'

const connectHoursOfOperationConfig: connectHoursOfOperation.ConnectHoursOfOperationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfig.property.config">config</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfigA">ConnectHoursOfOperationConfigA</a>[]</code> | config block. |
| <code><a href="#@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfig.property.instanceId">instanceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/connect_hours_of_operation#instance_id ConnectHoursOfOperation#instance_id}. |
| <code><a href="#@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/connect_hours_of_operation#name ConnectHoursOfOperation#name}. |
| <code><a href="#@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfig.property.timeZone">timeZone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/connect_hours_of_operation#time_zone ConnectHoursOfOperation#time_zone}. |
| <code><a href="#@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/connect_hours_of_operation#description ConnectHoursOfOperation#description}. |
| <code><a href="#@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/connect_hours_of_operation#id ConnectHoursOfOperation#id}. |
| <code><a href="#@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/connect_hours_of_operation#tags ConnectHoursOfOperation#tags}. |
| <code><a href="#@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/connect_hours_of_operation#tags_all ConnectHoursOfOperation#tags_all}. |
| <code><a href="#@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationTimeouts">ConnectHoursOfOperationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfig.property.config"></a>

```typescript
public readonly config: IResolvable | ConnectHoursOfOperationConfigA[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfigA">ConnectHoursOfOperationConfigA</a>[]

config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/connect_hours_of_operation#config ConnectHoursOfOperation#config}

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfig.property.instanceId"></a>

```typescript
public readonly instanceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/connect_hours_of_operation#instance_id ConnectHoursOfOperation#instance_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/connect_hours_of_operation#name ConnectHoursOfOperation#name}.

---

##### `timeZone`<sup>Required</sup> <a name="timeZone" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfig.property.timeZone"></a>

```typescript
public readonly timeZone: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/connect_hours_of_operation#time_zone ConnectHoursOfOperation#time_zone}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/connect_hours_of_operation#description ConnectHoursOfOperation#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/connect_hours_of_operation#id ConnectHoursOfOperation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/connect_hours_of_operation#tags ConnectHoursOfOperation#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/connect_hours_of_operation#tags_all ConnectHoursOfOperation#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ConnectHoursOfOperationTimeouts;
```

- *Type:* <a href="#@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationTimeouts">ConnectHoursOfOperationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/connect_hours_of_operation#timeouts ConnectHoursOfOperation#timeouts}

---

### ConnectHoursOfOperationConfigA <a name="ConnectHoursOfOperationConfigA" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfigA"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfigA.Initializer"></a>

```typescript
import { connectHoursOfOperation } from '@cdktf/aws-cdk'

const connectHoursOfOperationConfigA: connectHoursOfOperation.ConnectHoursOfOperationConfigA = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfigA.property.day">day</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/connect_hours_of_operation#day ConnectHoursOfOperation#day}. |
| <code><a href="#@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfigA.property.endTime">endTime</a></code> | <code><a href="#@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTime">ConnectHoursOfOperationConfigEndTime</a></code> | end_time block. |
| <code><a href="#@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfigA.property.startTime">startTime</a></code> | <code><a href="#@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTime">ConnectHoursOfOperationConfigStartTime</a></code> | start_time block. |

---

##### `day`<sup>Required</sup> <a name="day" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfigA.property.day"></a>

```typescript
public readonly day: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/connect_hours_of_operation#day ConnectHoursOfOperation#day}.

---

##### `endTime`<sup>Required</sup> <a name="endTime" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfigA.property.endTime"></a>

```typescript
public readonly endTime: ConnectHoursOfOperationConfigEndTime;
```

- *Type:* <a href="#@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTime">ConnectHoursOfOperationConfigEndTime</a>

end_time block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/connect_hours_of_operation#end_time ConnectHoursOfOperation#end_time}

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfigA.property.startTime"></a>

```typescript
public readonly startTime: ConnectHoursOfOperationConfigStartTime;
```

- *Type:* <a href="#@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTime">ConnectHoursOfOperationConfigStartTime</a>

start_time block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/connect_hours_of_operation#start_time ConnectHoursOfOperation#start_time}

---

### ConnectHoursOfOperationConfigEndTime <a name="ConnectHoursOfOperationConfigEndTime" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTime"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTime.Initializer"></a>

```typescript
import { connectHoursOfOperation } from '@cdktf/aws-cdk'

const connectHoursOfOperationConfigEndTime: connectHoursOfOperation.ConnectHoursOfOperationConfigEndTime = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTime.property.hours">hours</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/connect_hours_of_operation#hours ConnectHoursOfOperation#hours}. |
| <code><a href="#@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTime.property.minutes">minutes</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/connect_hours_of_operation#minutes ConnectHoursOfOperation#minutes}. |

---

##### `hours`<sup>Required</sup> <a name="hours" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTime.property.hours"></a>

```typescript
public readonly hours: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/connect_hours_of_operation#hours ConnectHoursOfOperation#hours}.

---

##### `minutes`<sup>Required</sup> <a name="minutes" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTime.property.minutes"></a>

```typescript
public readonly minutes: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/connect_hours_of_operation#minutes ConnectHoursOfOperation#minutes}.

---

### ConnectHoursOfOperationConfigStartTime <a name="ConnectHoursOfOperationConfigStartTime" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTime"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTime.Initializer"></a>

```typescript
import { connectHoursOfOperation } from '@cdktf/aws-cdk'

const connectHoursOfOperationConfigStartTime: connectHoursOfOperation.ConnectHoursOfOperationConfigStartTime = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTime.property.hours">hours</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/connect_hours_of_operation#hours ConnectHoursOfOperation#hours}. |
| <code><a href="#@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTime.property.minutes">minutes</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/connect_hours_of_operation#minutes ConnectHoursOfOperation#minutes}. |

---

##### `hours`<sup>Required</sup> <a name="hours" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTime.property.hours"></a>

```typescript
public readonly hours: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/connect_hours_of_operation#hours ConnectHoursOfOperation#hours}.

---

##### `minutes`<sup>Required</sup> <a name="minutes" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTime.property.minutes"></a>

```typescript
public readonly minutes: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/connect_hours_of_operation#minutes ConnectHoursOfOperation#minutes}.

---

### ConnectHoursOfOperationTimeouts <a name="ConnectHoursOfOperationTimeouts" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationTimeouts.Initializer"></a>

```typescript
import { connectHoursOfOperation } from '@cdktf/aws-cdk'

const connectHoursOfOperationTimeouts: connectHoursOfOperation.ConnectHoursOfOperationTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/connect_hours_of_operation#create ConnectHoursOfOperation#create}. |
| <code><a href="#@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/connect_hours_of_operation#delete ConnectHoursOfOperation#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/connect_hours_of_operation#create ConnectHoursOfOperation#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/connect_hours_of_operation#delete ConnectHoursOfOperation#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### ConnectHoursOfOperationConfigAList <a name="ConnectHoursOfOperationConfigAList" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfigAList"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfigAList.Initializer"></a>

```typescript
import { connectHoursOfOperation } from '@cdktf/aws-cdk'

new connectHoursOfOperation.ConnectHoursOfOperationConfigAList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfigAList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfigAList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfigAList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfigAList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfigAList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfigAList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfigAList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfigAList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfigAList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfigAList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfigAList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfigAList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfigAList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfigAList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfigAList.get"></a>

```typescript
public get(index: number): ConnectHoursOfOperationConfigAOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfigAList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfigAList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfigAList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfigAList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfigA">ConnectHoursOfOperationConfigA</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfigAList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfigAList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfigAList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConnectHoursOfOperationConfigA[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfigA">ConnectHoursOfOperationConfigA</a>[]

---


### ConnectHoursOfOperationConfigAOutputReference <a name="ConnectHoursOfOperationConfigAOutputReference" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.Initializer"></a>

```typescript
import { connectHoursOfOperation } from '@cdktf/aws-cdk'

new connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.putEndTime">putEndTime</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.putStartTime">putStartTime</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEndTime` <a name="putEndTime" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.putEndTime"></a>

```typescript
public putEndTime(value: ConnectHoursOfOperationConfigEndTime): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.putEndTime.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTime">ConnectHoursOfOperationConfigEndTime</a>

---

##### `putStartTime` <a name="putStartTime" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.putStartTime"></a>

```typescript
public putStartTime(value: ConnectHoursOfOperationConfigStartTime): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.putStartTime.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTime">ConnectHoursOfOperationConfigStartTime</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.property.endTime">endTime</a></code> | <code><a href="#@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference">ConnectHoursOfOperationConfigEndTimeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.property.startTime">startTime</a></code> | <code><a href="#@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference">ConnectHoursOfOperationConfigStartTimeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.property.dayInput">dayInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.property.endTimeInput">endTimeInput</a></code> | <code><a href="#@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTime">ConnectHoursOfOperationConfigEndTime</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.property.startTimeInput">startTimeInput</a></code> | <code><a href="#@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTime">ConnectHoursOfOperationConfigStartTime</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.property.day">day</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfigA">ConnectHoursOfOperationConfigA</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `endTime`<sup>Required</sup> <a name="endTime" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.property.endTime"></a>

```typescript
public readonly endTime: ConnectHoursOfOperationConfigEndTimeOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference">ConnectHoursOfOperationConfigEndTimeOutputReference</a>

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.property.startTime"></a>

```typescript
public readonly startTime: ConnectHoursOfOperationConfigStartTimeOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference">ConnectHoursOfOperationConfigStartTimeOutputReference</a>

---

##### `dayInput`<sup>Optional</sup> <a name="dayInput" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.property.dayInput"></a>

```typescript
public readonly dayInput: string;
```

- *Type:* string

---

##### `endTimeInput`<sup>Optional</sup> <a name="endTimeInput" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.property.endTimeInput"></a>

```typescript
public readonly endTimeInput: ConnectHoursOfOperationConfigEndTime;
```

- *Type:* <a href="#@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTime">ConnectHoursOfOperationConfigEndTime</a>

---

##### `startTimeInput`<sup>Optional</sup> <a name="startTimeInput" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.property.startTimeInput"></a>

```typescript
public readonly startTimeInput: ConnectHoursOfOperationConfigStartTime;
```

- *Type:* <a href="#@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTime">ConnectHoursOfOperationConfigStartTime</a>

---

##### `day`<sup>Required</sup> <a name="day" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.property.day"></a>

```typescript
public readonly day: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfigAOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConnectHoursOfOperationConfigA;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfigA">ConnectHoursOfOperationConfigA</a>

---


### ConnectHoursOfOperationConfigEndTimeOutputReference <a name="ConnectHoursOfOperationConfigEndTimeOutputReference" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.Initializer"></a>

```typescript
import { connectHoursOfOperation } from '@cdktf/aws-cdk'

new connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.property.hoursInput">hoursInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.property.minutesInput">minutesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.property.hours">hours</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.property.minutes">minutes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTime">ConnectHoursOfOperationConfigEndTime</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `hoursInput`<sup>Optional</sup> <a name="hoursInput" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.property.hoursInput"></a>

```typescript
public readonly hoursInput: number;
```

- *Type:* number

---

##### `minutesInput`<sup>Optional</sup> <a name="minutesInput" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.property.minutesInput"></a>

```typescript
public readonly minutesInput: number;
```

- *Type:* number

---

##### `hours`<sup>Required</sup> <a name="hours" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.property.hours"></a>

```typescript
public readonly hours: number;
```

- *Type:* number

---

##### `minutes`<sup>Required</sup> <a name="minutes" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.property.minutes"></a>

```typescript
public readonly minutes: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTimeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ConnectHoursOfOperationConfigEndTime;
```

- *Type:* <a href="#@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfigEndTime">ConnectHoursOfOperationConfigEndTime</a>

---


### ConnectHoursOfOperationConfigStartTimeOutputReference <a name="ConnectHoursOfOperationConfigStartTimeOutputReference" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.Initializer"></a>

```typescript
import { connectHoursOfOperation } from '@cdktf/aws-cdk'

new connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.property.hoursInput">hoursInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.property.minutesInput">minutesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.property.hours">hours</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.property.minutes">minutes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTime">ConnectHoursOfOperationConfigStartTime</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `hoursInput`<sup>Optional</sup> <a name="hoursInput" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.property.hoursInput"></a>

```typescript
public readonly hoursInput: number;
```

- *Type:* number

---

##### `minutesInput`<sup>Optional</sup> <a name="minutesInput" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.property.minutesInput"></a>

```typescript
public readonly minutesInput: number;
```

- *Type:* number

---

##### `hours`<sup>Required</sup> <a name="hours" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.property.hours"></a>

```typescript
public readonly hours: number;
```

- *Type:* number

---

##### `minutes`<sup>Required</sup> <a name="minutes" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.property.minutes"></a>

```typescript
public readonly minutes: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTimeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ConnectHoursOfOperationConfigStartTime;
```

- *Type:* <a href="#@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationConfigStartTime">ConnectHoursOfOperationConfigStartTime</a>

---


### ConnectHoursOfOperationTimeoutsOutputReference <a name="ConnectHoursOfOperationTimeoutsOutputReference" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationTimeoutsOutputReference.Initializer"></a>

```typescript
import { connectHoursOfOperation } from '@cdktf/aws-cdk'

new connectHoursOfOperation.ConnectHoursOfOperationTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationTimeouts">ConnectHoursOfOperationTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConnectHoursOfOperationTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.connectHoursOfOperation.ConnectHoursOfOperationTimeouts">ConnectHoursOfOperationTimeouts</a>

---



