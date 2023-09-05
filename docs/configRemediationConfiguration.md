# `aws_config_remediation_configuration`

Refer to the Terraform Registory for docs: [`aws_config_remediation_configuration`](https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/config_remediation_configuration).

# `configRemediationConfiguration` Submodule <a name="`configRemediationConfiguration` Submodule" id="@cdktf/aws-cdk.configRemediationConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ConfigRemediationConfiguration <a name="ConfigRemediationConfiguration" id="@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/config_remediation_configuration aws_config_remediation_configuration}.

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfiguration.Initializer"></a>

```typescript
import { configRemediationConfiguration } from '@cdktf/aws-cdk'

new configRemediationConfiguration.ConfigRemediationConfiguration(scope: Construct, id: string, config: ConfigRemediationConfigurationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfiguration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfiguration.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfiguration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationConfig">ConfigRemediationConfigurationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfiguration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfiguration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationConfig">ConfigRemediationConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfiguration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfiguration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfiguration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfiguration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfiguration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfiguration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfiguration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfiguration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfiguration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfiguration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfiguration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfiguration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfiguration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfiguration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfiguration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfiguration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfiguration.putExecutionControls">putExecutionControls</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfiguration.putParameter">putParameter</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfiguration.resetAutomatic">resetAutomatic</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfiguration.resetExecutionControls">resetExecutionControls</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfiguration.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfiguration.resetMaximumAutomaticAttempts">resetMaximumAutomaticAttempts</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfiguration.resetParameter">resetParameter</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfiguration.resetResourceType">resetResourceType</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfiguration.resetRetryAttemptSeconds">resetRetryAttemptSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfiguration.resetTargetVersion">resetTargetVersion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfiguration.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfiguration.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfiguration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfiguration.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfiguration.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfiguration.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfiguration.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfiguration.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfiguration.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfiguration.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfiguration.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfiguration.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfiguration.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfiguration.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfiguration.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfiguration.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfiguration.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfiguration.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putExecutionControls` <a name="putExecutionControls" id="@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfiguration.putExecutionControls"></a>

```typescript
public putExecutionControls(value: ConfigRemediationConfigurationExecutionControls): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfiguration.putExecutionControls.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControls">ConfigRemediationConfigurationExecutionControls</a>

---

##### `putParameter` <a name="putParameter" id="@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfiguration.putParameter"></a>

```typescript
public putParameter(value: IResolvable | ConfigRemediationConfigurationParameter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfiguration.putParameter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationParameter">ConfigRemediationConfigurationParameter</a>[]

---

##### `resetAutomatic` <a name="resetAutomatic" id="@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfiguration.resetAutomatic"></a>

```typescript
public resetAutomatic(): void
```

##### `resetExecutionControls` <a name="resetExecutionControls" id="@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfiguration.resetExecutionControls"></a>

```typescript
public resetExecutionControls(): void
```

##### `resetId` <a name="resetId" id="@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfiguration.resetId"></a>

```typescript
public resetId(): void
```

##### `resetMaximumAutomaticAttempts` <a name="resetMaximumAutomaticAttempts" id="@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfiguration.resetMaximumAutomaticAttempts"></a>

```typescript
public resetMaximumAutomaticAttempts(): void
```

##### `resetParameter` <a name="resetParameter" id="@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfiguration.resetParameter"></a>

```typescript
public resetParameter(): void
```

##### `resetResourceType` <a name="resetResourceType" id="@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfiguration.resetResourceType"></a>

```typescript
public resetResourceType(): void
```

##### `resetRetryAttemptSeconds` <a name="resetRetryAttemptSeconds" id="@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfiguration.resetRetryAttemptSeconds"></a>

```typescript
public resetRetryAttemptSeconds(): void
```

##### `resetTargetVersion` <a name="resetTargetVersion" id="@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfiguration.resetTargetVersion"></a>

```typescript
public resetTargetVersion(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfiguration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfiguration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfiguration.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfiguration.isConstruct"></a>

```typescript
import { configRemediationConfiguration } from '@cdktf/aws-cdk'

configRemediationConfiguration.ConfigRemediationConfiguration.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfiguration.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfiguration.isTerraformElement"></a>

```typescript
import { configRemediationConfiguration } from '@cdktf/aws-cdk'

configRemediationConfiguration.ConfigRemediationConfiguration.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfiguration.isTerraformResource"></a>

```typescript
import { configRemediationConfiguration } from '@cdktf/aws-cdk'

configRemediationConfiguration.ConfigRemediationConfiguration.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfiguration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfiguration.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfiguration.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfiguration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfiguration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfiguration.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfiguration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfiguration.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfiguration.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfiguration.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfiguration.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfiguration.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfiguration.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfiguration.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfiguration.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfiguration.property.executionControls">executionControls</a></code> | <code><a href="#@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference">ConfigRemediationConfigurationExecutionControlsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfiguration.property.parameter">parameter</a></code> | <code><a href="#@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationParameterList">ConfigRemediationConfigurationParameterList</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfiguration.property.automaticInput">automaticInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfiguration.property.configRuleNameInput">configRuleNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfiguration.property.executionControlsInput">executionControlsInput</a></code> | <code><a href="#@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControls">ConfigRemediationConfigurationExecutionControls</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfiguration.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfiguration.property.maximumAutomaticAttemptsInput">maximumAutomaticAttemptsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfiguration.property.parameterInput">parameterInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationParameter">ConfigRemediationConfigurationParameter</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfiguration.property.resourceTypeInput">resourceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfiguration.property.retryAttemptSecondsInput">retryAttemptSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfiguration.property.targetIdInput">targetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfiguration.property.targetTypeInput">targetTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfiguration.property.targetVersionInput">targetVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfiguration.property.automatic">automatic</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfiguration.property.configRuleName">configRuleName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfiguration.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfiguration.property.maximumAutomaticAttempts">maximumAutomaticAttempts</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfiguration.property.resourceType">resourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfiguration.property.retryAttemptSeconds">retryAttemptSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfiguration.property.targetId">targetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfiguration.property.targetType">targetType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfiguration.property.targetVersion">targetVersion</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfiguration.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfiguration.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfiguration.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfiguration.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfiguration.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfiguration.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfiguration.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfiguration.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfiguration.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfiguration.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfiguration.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfiguration.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfiguration.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfiguration.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfiguration.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `executionControls`<sup>Required</sup> <a name="executionControls" id="@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfiguration.property.executionControls"></a>

```typescript
public readonly executionControls: ConfigRemediationConfigurationExecutionControlsOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference">ConfigRemediationConfigurationExecutionControlsOutputReference</a>

---

##### `parameter`<sup>Required</sup> <a name="parameter" id="@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfiguration.property.parameter"></a>

```typescript
public readonly parameter: ConfigRemediationConfigurationParameterList;
```

- *Type:* <a href="#@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationParameterList">ConfigRemediationConfigurationParameterList</a>

---

##### `automaticInput`<sup>Optional</sup> <a name="automaticInput" id="@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfiguration.property.automaticInput"></a>

```typescript
public readonly automaticInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `configRuleNameInput`<sup>Optional</sup> <a name="configRuleNameInput" id="@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfiguration.property.configRuleNameInput"></a>

```typescript
public readonly configRuleNameInput: string;
```

- *Type:* string

---

##### `executionControlsInput`<sup>Optional</sup> <a name="executionControlsInput" id="@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfiguration.property.executionControlsInput"></a>

```typescript
public readonly executionControlsInput: ConfigRemediationConfigurationExecutionControls;
```

- *Type:* <a href="#@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControls">ConfigRemediationConfigurationExecutionControls</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfiguration.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `maximumAutomaticAttemptsInput`<sup>Optional</sup> <a name="maximumAutomaticAttemptsInput" id="@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfiguration.property.maximumAutomaticAttemptsInput"></a>

```typescript
public readonly maximumAutomaticAttemptsInput: number;
```

- *Type:* number

---

##### `parameterInput`<sup>Optional</sup> <a name="parameterInput" id="@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfiguration.property.parameterInput"></a>

```typescript
public readonly parameterInput: IResolvable | ConfigRemediationConfigurationParameter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationParameter">ConfigRemediationConfigurationParameter</a>[]

---

##### `resourceTypeInput`<sup>Optional</sup> <a name="resourceTypeInput" id="@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfiguration.property.resourceTypeInput"></a>

```typescript
public readonly resourceTypeInput: string;
```

- *Type:* string

---

##### `retryAttemptSecondsInput`<sup>Optional</sup> <a name="retryAttemptSecondsInput" id="@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfiguration.property.retryAttemptSecondsInput"></a>

```typescript
public readonly retryAttemptSecondsInput: number;
```

- *Type:* number

---

##### `targetIdInput`<sup>Optional</sup> <a name="targetIdInput" id="@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfiguration.property.targetIdInput"></a>

```typescript
public readonly targetIdInput: string;
```

- *Type:* string

---

##### `targetTypeInput`<sup>Optional</sup> <a name="targetTypeInput" id="@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfiguration.property.targetTypeInput"></a>

```typescript
public readonly targetTypeInput: string;
```

- *Type:* string

---

##### `targetVersionInput`<sup>Optional</sup> <a name="targetVersionInput" id="@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfiguration.property.targetVersionInput"></a>

```typescript
public readonly targetVersionInput: string;
```

- *Type:* string

---

##### `automatic`<sup>Required</sup> <a name="automatic" id="@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfiguration.property.automatic"></a>

```typescript
public readonly automatic: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `configRuleName`<sup>Required</sup> <a name="configRuleName" id="@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfiguration.property.configRuleName"></a>

```typescript
public readonly configRuleName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfiguration.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `maximumAutomaticAttempts`<sup>Required</sup> <a name="maximumAutomaticAttempts" id="@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfiguration.property.maximumAutomaticAttempts"></a>

```typescript
public readonly maximumAutomaticAttempts: number;
```

- *Type:* number

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfiguration.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

---

##### `retryAttemptSeconds`<sup>Required</sup> <a name="retryAttemptSeconds" id="@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfiguration.property.retryAttemptSeconds"></a>

```typescript
public readonly retryAttemptSeconds: number;
```

- *Type:* number

---

##### `targetId`<sup>Required</sup> <a name="targetId" id="@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfiguration.property.targetId"></a>

```typescript
public readonly targetId: string;
```

- *Type:* string

---

##### `targetType`<sup>Required</sup> <a name="targetType" id="@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfiguration.property.targetType"></a>

```typescript
public readonly targetType: string;
```

- *Type:* string

---

##### `targetVersion`<sup>Required</sup> <a name="targetVersion" id="@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfiguration.property.targetVersion"></a>

```typescript
public readonly targetVersion: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfiguration.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ConfigRemediationConfigurationConfig <a name="ConfigRemediationConfigurationConfig" id="@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationConfig.Initializer"></a>

```typescript
import { configRemediationConfiguration } from '@cdktf/aws-cdk'

const configRemediationConfigurationConfig: configRemediationConfiguration.ConfigRemediationConfigurationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationConfig.property.configRuleName">configRuleName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/config_remediation_configuration#config_rule_name ConfigRemediationConfiguration#config_rule_name}. |
| <code><a href="#@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationConfig.property.targetId">targetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/config_remediation_configuration#target_id ConfigRemediationConfiguration#target_id}. |
| <code><a href="#@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationConfig.property.targetType">targetType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/config_remediation_configuration#target_type ConfigRemediationConfiguration#target_type}. |
| <code><a href="#@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationConfig.property.automatic">automatic</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/config_remediation_configuration#automatic ConfigRemediationConfiguration#automatic}. |
| <code><a href="#@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationConfig.property.executionControls">executionControls</a></code> | <code><a href="#@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControls">ConfigRemediationConfigurationExecutionControls</a></code> | execution_controls block. |
| <code><a href="#@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/config_remediation_configuration#id ConfigRemediationConfiguration#id}. |
| <code><a href="#@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationConfig.property.maximumAutomaticAttempts">maximumAutomaticAttempts</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/config_remediation_configuration#maximum_automatic_attempts ConfigRemediationConfiguration#maximum_automatic_attempts}. |
| <code><a href="#@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationConfig.property.parameter">parameter</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationParameter">ConfigRemediationConfigurationParameter</a>[]</code> | parameter block. |
| <code><a href="#@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationConfig.property.resourceType">resourceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/config_remediation_configuration#resource_type ConfigRemediationConfiguration#resource_type}. |
| <code><a href="#@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationConfig.property.retryAttemptSeconds">retryAttemptSeconds</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/config_remediation_configuration#retry_attempt_seconds ConfigRemediationConfiguration#retry_attempt_seconds}. |
| <code><a href="#@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationConfig.property.targetVersion">targetVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/config_remediation_configuration#target_version ConfigRemediationConfiguration#target_version}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `configRuleName`<sup>Required</sup> <a name="configRuleName" id="@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationConfig.property.configRuleName"></a>

```typescript
public readonly configRuleName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/config_remediation_configuration#config_rule_name ConfigRemediationConfiguration#config_rule_name}.

---

##### `targetId`<sup>Required</sup> <a name="targetId" id="@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationConfig.property.targetId"></a>

```typescript
public readonly targetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/config_remediation_configuration#target_id ConfigRemediationConfiguration#target_id}.

---

##### `targetType`<sup>Required</sup> <a name="targetType" id="@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationConfig.property.targetType"></a>

```typescript
public readonly targetType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/config_remediation_configuration#target_type ConfigRemediationConfiguration#target_type}.

---

##### `automatic`<sup>Optional</sup> <a name="automatic" id="@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationConfig.property.automatic"></a>

```typescript
public readonly automatic: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/config_remediation_configuration#automatic ConfigRemediationConfiguration#automatic}.

---

##### `executionControls`<sup>Optional</sup> <a name="executionControls" id="@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationConfig.property.executionControls"></a>

```typescript
public readonly executionControls: ConfigRemediationConfigurationExecutionControls;
```

- *Type:* <a href="#@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControls">ConfigRemediationConfigurationExecutionControls</a>

execution_controls block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/config_remediation_configuration#execution_controls ConfigRemediationConfiguration#execution_controls}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/config_remediation_configuration#id ConfigRemediationConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `maximumAutomaticAttempts`<sup>Optional</sup> <a name="maximumAutomaticAttempts" id="@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationConfig.property.maximumAutomaticAttempts"></a>

```typescript
public readonly maximumAutomaticAttempts: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/config_remediation_configuration#maximum_automatic_attempts ConfigRemediationConfiguration#maximum_automatic_attempts}.

---

##### `parameter`<sup>Optional</sup> <a name="parameter" id="@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationConfig.property.parameter"></a>

```typescript
public readonly parameter: IResolvable | ConfigRemediationConfigurationParameter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationParameter">ConfigRemediationConfigurationParameter</a>[]

parameter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/config_remediation_configuration#parameter ConfigRemediationConfiguration#parameter}

---

##### `resourceType`<sup>Optional</sup> <a name="resourceType" id="@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationConfig.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/config_remediation_configuration#resource_type ConfigRemediationConfiguration#resource_type}.

---

##### `retryAttemptSeconds`<sup>Optional</sup> <a name="retryAttemptSeconds" id="@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationConfig.property.retryAttemptSeconds"></a>

```typescript
public readonly retryAttemptSeconds: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/config_remediation_configuration#retry_attempt_seconds ConfigRemediationConfiguration#retry_attempt_seconds}.

---

##### `targetVersion`<sup>Optional</sup> <a name="targetVersion" id="@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationConfig.property.targetVersion"></a>

```typescript
public readonly targetVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/config_remediation_configuration#target_version ConfigRemediationConfiguration#target_version}.

---

### ConfigRemediationConfigurationExecutionControls <a name="ConfigRemediationConfigurationExecutionControls" id="@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControls"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControls.Initializer"></a>

```typescript
import { configRemediationConfiguration } from '@cdktf/aws-cdk'

const configRemediationConfigurationExecutionControls: configRemediationConfiguration.ConfigRemediationConfigurationExecutionControls = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControls.property.ssmControls">ssmControls</a></code> | <code><a href="#@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControls">ConfigRemediationConfigurationExecutionControlsSsmControls</a></code> | ssm_controls block. |

---

##### `ssmControls`<sup>Optional</sup> <a name="ssmControls" id="@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControls.property.ssmControls"></a>

```typescript
public readonly ssmControls: ConfigRemediationConfigurationExecutionControlsSsmControls;
```

- *Type:* <a href="#@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControls">ConfigRemediationConfigurationExecutionControlsSsmControls</a>

ssm_controls block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/config_remediation_configuration#ssm_controls ConfigRemediationConfiguration#ssm_controls}

---

### ConfigRemediationConfigurationExecutionControlsSsmControls <a name="ConfigRemediationConfigurationExecutionControlsSsmControls" id="@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControls"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControls.Initializer"></a>

```typescript
import { configRemediationConfiguration } from '@cdktf/aws-cdk'

const configRemediationConfigurationExecutionControlsSsmControls: configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControls = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControls.property.concurrentExecutionRatePercentage">concurrentExecutionRatePercentage</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/config_remediation_configuration#concurrent_execution_rate_percentage ConfigRemediationConfiguration#concurrent_execution_rate_percentage}. |
| <code><a href="#@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControls.property.errorPercentage">errorPercentage</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/config_remediation_configuration#error_percentage ConfigRemediationConfiguration#error_percentage}. |

---

##### `concurrentExecutionRatePercentage`<sup>Optional</sup> <a name="concurrentExecutionRatePercentage" id="@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControls.property.concurrentExecutionRatePercentage"></a>

```typescript
public readonly concurrentExecutionRatePercentage: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/config_remediation_configuration#concurrent_execution_rate_percentage ConfigRemediationConfiguration#concurrent_execution_rate_percentage}.

---

##### `errorPercentage`<sup>Optional</sup> <a name="errorPercentage" id="@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControls.property.errorPercentage"></a>

```typescript
public readonly errorPercentage: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/config_remediation_configuration#error_percentage ConfigRemediationConfiguration#error_percentage}.

---

### ConfigRemediationConfigurationParameter <a name="ConfigRemediationConfigurationParameter" id="@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationParameter"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationParameter.Initializer"></a>

```typescript
import { configRemediationConfiguration } from '@cdktf/aws-cdk'

const configRemediationConfigurationParameter: configRemediationConfiguration.ConfigRemediationConfigurationParameter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationParameter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/config_remediation_configuration#name ConfigRemediationConfiguration#name}. |
| <code><a href="#@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationParameter.property.resourceValue">resourceValue</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/config_remediation_configuration#resource_value ConfigRemediationConfiguration#resource_value}. |
| <code><a href="#@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationParameter.property.staticValue">staticValue</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/config_remediation_configuration#static_value ConfigRemediationConfiguration#static_value}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationParameter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/config_remediation_configuration#name ConfigRemediationConfiguration#name}.

---

##### `resourceValue`<sup>Optional</sup> <a name="resourceValue" id="@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationParameter.property.resourceValue"></a>

```typescript
public readonly resourceValue: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/config_remediation_configuration#resource_value ConfigRemediationConfiguration#resource_value}.

---

##### `staticValue`<sup>Optional</sup> <a name="staticValue" id="@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationParameter.property.staticValue"></a>

```typescript
public readonly staticValue: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/config_remediation_configuration#static_value ConfigRemediationConfiguration#static_value}.

---

## Classes <a name="Classes" id="Classes"></a>

### ConfigRemediationConfigurationExecutionControlsOutputReference <a name="ConfigRemediationConfigurationExecutionControlsOutputReference" id="@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.Initializer"></a>

```typescript
import { configRemediationConfiguration } from '@cdktf/aws-cdk'

new configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.putSsmControls">putSsmControls</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.resetSsmControls">resetSsmControls</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSsmControls` <a name="putSsmControls" id="@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.putSsmControls"></a>

```typescript
public putSsmControls(value: ConfigRemediationConfigurationExecutionControlsSsmControls): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.putSsmControls.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControls">ConfigRemediationConfigurationExecutionControlsSsmControls</a>

---

##### `resetSsmControls` <a name="resetSsmControls" id="@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.resetSsmControls"></a>

```typescript
public resetSsmControls(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.property.ssmControls">ssmControls</a></code> | <code><a href="#@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference">ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.property.ssmControlsInput">ssmControlsInput</a></code> | <code><a href="#@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControls">ConfigRemediationConfigurationExecutionControlsSsmControls</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControls">ConfigRemediationConfigurationExecutionControls</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ssmControls`<sup>Required</sup> <a name="ssmControls" id="@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.property.ssmControls"></a>

```typescript
public readonly ssmControls: ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference">ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference</a>

---

##### `ssmControlsInput`<sup>Optional</sup> <a name="ssmControlsInput" id="@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.property.ssmControlsInput"></a>

```typescript
public readonly ssmControlsInput: ConfigRemediationConfigurationExecutionControlsSsmControls;
```

- *Type:* <a href="#@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControls">ConfigRemediationConfigurationExecutionControlsSsmControls</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ConfigRemediationConfigurationExecutionControls;
```

- *Type:* <a href="#@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControls">ConfigRemediationConfigurationExecutionControls</a>

---


### ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference <a name="ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference" id="@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.Initializer"></a>

```typescript
import { configRemediationConfiguration } from '@cdktf/aws-cdk'

new configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.resetConcurrentExecutionRatePercentage">resetConcurrentExecutionRatePercentage</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.resetErrorPercentage">resetErrorPercentage</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetConcurrentExecutionRatePercentage` <a name="resetConcurrentExecutionRatePercentage" id="@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.resetConcurrentExecutionRatePercentage"></a>

```typescript
public resetConcurrentExecutionRatePercentage(): void
```

##### `resetErrorPercentage` <a name="resetErrorPercentage" id="@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.resetErrorPercentage"></a>

```typescript
public resetErrorPercentage(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.property.concurrentExecutionRatePercentageInput">concurrentExecutionRatePercentageInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.property.errorPercentageInput">errorPercentageInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.property.concurrentExecutionRatePercentage">concurrentExecutionRatePercentage</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.property.errorPercentage">errorPercentage</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControls">ConfigRemediationConfigurationExecutionControlsSsmControls</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `concurrentExecutionRatePercentageInput`<sup>Optional</sup> <a name="concurrentExecutionRatePercentageInput" id="@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.property.concurrentExecutionRatePercentageInput"></a>

```typescript
public readonly concurrentExecutionRatePercentageInput: number;
```

- *Type:* number

---

##### `errorPercentageInput`<sup>Optional</sup> <a name="errorPercentageInput" id="@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.property.errorPercentageInput"></a>

```typescript
public readonly errorPercentageInput: number;
```

- *Type:* number

---

##### `concurrentExecutionRatePercentage`<sup>Required</sup> <a name="concurrentExecutionRatePercentage" id="@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.property.concurrentExecutionRatePercentage"></a>

```typescript
public readonly concurrentExecutionRatePercentage: number;
```

- *Type:* number

---

##### `errorPercentage`<sup>Required</sup> <a name="errorPercentage" id="@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.property.errorPercentage"></a>

```typescript
public readonly errorPercentage: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControlsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ConfigRemediationConfigurationExecutionControlsSsmControls;
```

- *Type:* <a href="#@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationExecutionControlsSsmControls">ConfigRemediationConfigurationExecutionControlsSsmControls</a>

---


### ConfigRemediationConfigurationParameterList <a name="ConfigRemediationConfigurationParameterList" id="@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationParameterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationParameterList.Initializer"></a>

```typescript
import { configRemediationConfiguration } from '@cdktf/aws-cdk'

new configRemediationConfiguration.ConfigRemediationConfigurationParameterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationParameterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationParameterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationParameterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationParameterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationParameterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationParameterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationParameterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationParameterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationParameterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationParameterList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationParameterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationParameterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationParameterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationParameterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationParameterList.get"></a>

```typescript
public get(index: number): ConfigRemediationConfigurationParameterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationParameterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationParameterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationParameterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationParameterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationParameter">ConfigRemediationConfigurationParameter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationParameterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationParameterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationParameterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConfigRemediationConfigurationParameter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationParameter">ConfigRemediationConfigurationParameter</a>[]

---


### ConfigRemediationConfigurationParameterOutputReference <a name="ConfigRemediationConfigurationParameterOutputReference" id="@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.Initializer"></a>

```typescript
import { configRemediationConfiguration } from '@cdktf/aws-cdk'

new configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.resetResourceValue">resetResourceValue</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.resetStaticValue">resetStaticValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetResourceValue` <a name="resetResourceValue" id="@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.resetResourceValue"></a>

```typescript
public resetResourceValue(): void
```

##### `resetStaticValue` <a name="resetStaticValue" id="@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.resetStaticValue"></a>

```typescript
public resetStaticValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.property.resourceValueInput">resourceValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.property.staticValueInput">staticValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.property.resourceValue">resourceValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.property.staticValue">staticValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationParameter">ConfigRemediationConfigurationParameter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `resourceValueInput`<sup>Optional</sup> <a name="resourceValueInput" id="@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.property.resourceValueInput"></a>

```typescript
public readonly resourceValueInput: string;
```

- *Type:* string

---

##### `staticValueInput`<sup>Optional</sup> <a name="staticValueInput" id="@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.property.staticValueInput"></a>

```typescript
public readonly staticValueInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `resourceValue`<sup>Required</sup> <a name="resourceValue" id="@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.property.resourceValue"></a>

```typescript
public readonly resourceValue: string;
```

- *Type:* string

---

##### `staticValue`<sup>Required</sup> <a name="staticValue" id="@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.property.staticValue"></a>

```typescript
public readonly staticValue: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationParameterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConfigRemediationConfigurationParameter;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.configRemediationConfiguration.ConfigRemediationConfigurationParameter">ConfigRemediationConfigurationParameter</a>

---



