# `aws_cloudformation_stack_set_instance`

Refer to the Terraform Registory for docs: [`aws_cloudformation_stack_set_instance`](https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cloudformation_stack_set_instance).

# `cloudformationStackSetInstance` Submodule <a name="`cloudformationStackSetInstance` Submodule" id="@cdktf/aws-cdk.cloudformationStackSetInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudformationStackSetInstance <a name="CloudformationStackSetInstance" id="@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstance"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cloudformation_stack_set_instance aws_cloudformation_stack_set_instance}.

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstance.Initializer"></a>

```typescript
import { cloudformationStackSetInstance } from '@cdktf/aws-cdk'

new cloudformationStackSetInstance.CloudformationStackSetInstance(scope: Construct, id: string, config: CloudformationStackSetInstanceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstance.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstance.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstance.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstanceConfig">CloudformationStackSetInstanceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstance.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstance.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstance.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstanceConfig">CloudformationStackSetInstanceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstance.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstance.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstance.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstance.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstance.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstance.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstance.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstance.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstance.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstance.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstance.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstance.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstance.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstance.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstance.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstance.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstance.putDeploymentTargets">putDeploymentTargets</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstance.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstance.resetAccountId">resetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstance.resetDeploymentTargets">resetDeploymentTargets</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstance.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstance.resetParameterOverrides">resetParameterOverrides</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstance.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstance.resetRetainStack">resetRetainStack</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstance.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstance.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstance.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstance.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstance.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstance.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstance.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstance.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstance.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstance.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstance.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstance.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstance.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstance.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstance.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstance.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstance.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstance.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstance.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putDeploymentTargets` <a name="putDeploymentTargets" id="@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstance.putDeploymentTargets"></a>

```typescript
public putDeploymentTargets(value: CloudformationStackSetInstanceDeploymentTargets): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstance.putDeploymentTargets.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstanceDeploymentTargets">CloudformationStackSetInstanceDeploymentTargets</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstance.putTimeouts"></a>

```typescript
public putTimeouts(value: CloudformationStackSetInstanceTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstance.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstanceTimeouts">CloudformationStackSetInstanceTimeouts</a>

---

##### `resetAccountId` <a name="resetAccountId" id="@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstance.resetAccountId"></a>

```typescript
public resetAccountId(): void
```

##### `resetDeploymentTargets` <a name="resetDeploymentTargets" id="@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstance.resetDeploymentTargets"></a>

```typescript
public resetDeploymentTargets(): void
```

##### `resetId` <a name="resetId" id="@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstance.resetId"></a>

```typescript
public resetId(): void
```

##### `resetParameterOverrides` <a name="resetParameterOverrides" id="@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstance.resetParameterOverrides"></a>

```typescript
public resetParameterOverrides(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstance.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetRetainStack` <a name="resetRetainStack" id="@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstance.resetRetainStack"></a>

```typescript
public resetRetainStack(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstance.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstance.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstance.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstance.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstance.isConstruct"></a>

```typescript
import { cloudformationStackSetInstance } from '@cdktf/aws-cdk'

cloudformationStackSetInstance.CloudformationStackSetInstance.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstance.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstance.isTerraformElement"></a>

```typescript
import { cloudformationStackSetInstance } from '@cdktf/aws-cdk'

cloudformationStackSetInstance.CloudformationStackSetInstance.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstance.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstance.isTerraformResource"></a>

```typescript
import { cloudformationStackSetInstance } from '@cdktf/aws-cdk'

cloudformationStackSetInstance.CloudformationStackSetInstance.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstance.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstance.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstance.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstance.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstance.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstance.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstance.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstance.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstance.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstance.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstance.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstance.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstance.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstance.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstance.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstance.property.deploymentTargets">deploymentTargets</a></code> | <code><a href="#@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstanceDeploymentTargetsOutputReference">CloudformationStackSetInstanceDeploymentTargetsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstance.property.organizationalUnitId">organizationalUnitId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstance.property.stackId">stackId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstance.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstanceTimeoutsOutputReference">CloudformationStackSetInstanceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstance.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstance.property.deploymentTargetsInput">deploymentTargetsInput</a></code> | <code><a href="#@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstanceDeploymentTargets">CloudformationStackSetInstanceDeploymentTargets</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstance.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstance.property.parameterOverridesInput">parameterOverridesInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstance.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstance.property.retainStackInput">retainStackInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstance.property.stackSetNameInput">stackSetNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstance.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstanceTimeouts">CloudformationStackSetInstanceTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstance.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstance.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstance.property.parameterOverrides">parameterOverrides</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstance.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstance.property.retainStack">retainStack</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstance.property.stackSetName">stackSetName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstance.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstance.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstance.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstance.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstance.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstance.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstance.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstance.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstance.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstance.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstance.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstance.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstance.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstance.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `deploymentTargets`<sup>Required</sup> <a name="deploymentTargets" id="@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstance.property.deploymentTargets"></a>

```typescript
public readonly deploymentTargets: CloudformationStackSetInstanceDeploymentTargetsOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstanceDeploymentTargetsOutputReference">CloudformationStackSetInstanceDeploymentTargetsOutputReference</a>

---

##### `organizationalUnitId`<sup>Required</sup> <a name="organizationalUnitId" id="@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstance.property.organizationalUnitId"></a>

```typescript
public readonly organizationalUnitId: string;
```

- *Type:* string

---

##### `stackId`<sup>Required</sup> <a name="stackId" id="@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstance.property.stackId"></a>

```typescript
public readonly stackId: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstance.property.timeouts"></a>

```typescript
public readonly timeouts: CloudformationStackSetInstanceTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstanceTimeoutsOutputReference">CloudformationStackSetInstanceTimeoutsOutputReference</a>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstance.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `deploymentTargetsInput`<sup>Optional</sup> <a name="deploymentTargetsInput" id="@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstance.property.deploymentTargetsInput"></a>

```typescript
public readonly deploymentTargetsInput: CloudformationStackSetInstanceDeploymentTargets;
```

- *Type:* <a href="#@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstanceDeploymentTargets">CloudformationStackSetInstanceDeploymentTargets</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstance.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `parameterOverridesInput`<sup>Optional</sup> <a name="parameterOverridesInput" id="@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstance.property.parameterOverridesInput"></a>

```typescript
public readonly parameterOverridesInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstance.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `retainStackInput`<sup>Optional</sup> <a name="retainStackInput" id="@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstance.property.retainStackInput"></a>

```typescript
public readonly retainStackInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `stackSetNameInput`<sup>Optional</sup> <a name="stackSetNameInput" id="@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstance.property.stackSetNameInput"></a>

```typescript
public readonly stackSetNameInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstance.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | CloudformationStackSetInstanceTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstanceTimeouts">CloudformationStackSetInstanceTimeouts</a>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstance.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstance.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `parameterOverrides`<sup>Required</sup> <a name="parameterOverrides" id="@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstance.property.parameterOverrides"></a>

```typescript
public readonly parameterOverrides: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstance.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `retainStack`<sup>Required</sup> <a name="retainStack" id="@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstance.property.retainStack"></a>

```typescript
public readonly retainStack: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `stackSetName`<sup>Required</sup> <a name="stackSetName" id="@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstance.property.stackSetName"></a>

```typescript
public readonly stackSetName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstance.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstance.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudformationStackSetInstanceConfig <a name="CloudformationStackSetInstanceConfig" id="@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstanceConfig.Initializer"></a>

```typescript
import { cloudformationStackSetInstance } from '@cdktf/aws-cdk'

const cloudformationStackSetInstanceConfig: cloudformationStackSetInstance.CloudformationStackSetInstanceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstanceConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstanceConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstanceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstanceConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstanceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstanceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstanceConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstanceConfig.property.stackSetName">stackSetName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cloudformation_stack_set_instance#stack_set_name CloudformationStackSetInstance#stack_set_name}. |
| <code><a href="#@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstanceConfig.property.accountId">accountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cloudformation_stack_set_instance#account_id CloudformationStackSetInstance#account_id}. |
| <code><a href="#@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstanceConfig.property.deploymentTargets">deploymentTargets</a></code> | <code><a href="#@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstanceDeploymentTargets">CloudformationStackSetInstanceDeploymentTargets</a></code> | deployment_targets block. |
| <code><a href="#@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstanceConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cloudformation_stack_set_instance#id CloudformationStackSetInstance#id}. |
| <code><a href="#@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstanceConfig.property.parameterOverrides">parameterOverrides</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cloudformation_stack_set_instance#parameter_overrides CloudformationStackSetInstance#parameter_overrides}. |
| <code><a href="#@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstanceConfig.property.region">region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cloudformation_stack_set_instance#region CloudformationStackSetInstance#region}. |
| <code><a href="#@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstanceConfig.property.retainStack">retainStack</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cloudformation_stack_set_instance#retain_stack CloudformationStackSetInstance#retain_stack}. |
| <code><a href="#@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstanceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstanceTimeouts">CloudformationStackSetInstanceTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstanceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstanceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstanceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstanceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstanceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstanceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstanceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `stackSetName`<sup>Required</sup> <a name="stackSetName" id="@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstanceConfig.property.stackSetName"></a>

```typescript
public readonly stackSetName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cloudformation_stack_set_instance#stack_set_name CloudformationStackSetInstance#stack_set_name}.

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstanceConfig.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cloudformation_stack_set_instance#account_id CloudformationStackSetInstance#account_id}.

---

##### `deploymentTargets`<sup>Optional</sup> <a name="deploymentTargets" id="@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstanceConfig.property.deploymentTargets"></a>

```typescript
public readonly deploymentTargets: CloudformationStackSetInstanceDeploymentTargets;
```

- *Type:* <a href="#@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstanceDeploymentTargets">CloudformationStackSetInstanceDeploymentTargets</a>

deployment_targets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cloudformation_stack_set_instance#deployment_targets CloudformationStackSetInstance#deployment_targets}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstanceConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cloudformation_stack_set_instance#id CloudformationStackSetInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `parameterOverrides`<sup>Optional</sup> <a name="parameterOverrides" id="@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstanceConfig.property.parameterOverrides"></a>

```typescript
public readonly parameterOverrides: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cloudformation_stack_set_instance#parameter_overrides CloudformationStackSetInstance#parameter_overrides}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstanceConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cloudformation_stack_set_instance#region CloudformationStackSetInstance#region}.

---

##### `retainStack`<sup>Optional</sup> <a name="retainStack" id="@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstanceConfig.property.retainStack"></a>

```typescript
public readonly retainStack: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cloudformation_stack_set_instance#retain_stack CloudformationStackSetInstance#retain_stack}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstanceConfig.property.timeouts"></a>

```typescript
public readonly timeouts: CloudformationStackSetInstanceTimeouts;
```

- *Type:* <a href="#@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstanceTimeouts">CloudformationStackSetInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cloudformation_stack_set_instance#timeouts CloudformationStackSetInstance#timeouts}

---

### CloudformationStackSetInstanceDeploymentTargets <a name="CloudformationStackSetInstanceDeploymentTargets" id="@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstanceDeploymentTargets"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstanceDeploymentTargets.Initializer"></a>

```typescript
import { cloudformationStackSetInstance } from '@cdktf/aws-cdk'

const cloudformationStackSetInstanceDeploymentTargets: cloudformationStackSetInstance.CloudformationStackSetInstanceDeploymentTargets = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstanceDeploymentTargets.property.organizationalUnitIds">organizationalUnitIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cloudformation_stack_set_instance#organizational_unit_ids CloudformationStackSetInstance#organizational_unit_ids}. |

---

##### `organizationalUnitIds`<sup>Optional</sup> <a name="organizationalUnitIds" id="@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstanceDeploymentTargets.property.organizationalUnitIds"></a>

```typescript
public readonly organizationalUnitIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cloudformation_stack_set_instance#organizational_unit_ids CloudformationStackSetInstance#organizational_unit_ids}.

---

### CloudformationStackSetInstanceTimeouts <a name="CloudformationStackSetInstanceTimeouts" id="@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstanceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstanceTimeouts.Initializer"></a>

```typescript
import { cloudformationStackSetInstance } from '@cdktf/aws-cdk'

const cloudformationStackSetInstanceTimeouts: cloudformationStackSetInstance.CloudformationStackSetInstanceTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstanceTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cloudformation_stack_set_instance#create CloudformationStackSetInstance#create}. |
| <code><a href="#@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstanceTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cloudformation_stack_set_instance#delete CloudformationStackSetInstance#delete}. |
| <code><a href="#@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstanceTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cloudformation_stack_set_instance#update CloudformationStackSetInstance#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstanceTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cloudformation_stack_set_instance#create CloudformationStackSetInstance#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstanceTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cloudformation_stack_set_instance#delete CloudformationStackSetInstance#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstanceTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cloudformation_stack_set_instance#update CloudformationStackSetInstance#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CloudformationStackSetInstanceDeploymentTargetsOutputReference <a name="CloudformationStackSetInstanceDeploymentTargetsOutputReference" id="@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstanceDeploymentTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstanceDeploymentTargetsOutputReference.Initializer"></a>

```typescript
import { cloudformationStackSetInstance } from '@cdktf/aws-cdk'

new cloudformationStackSetInstance.CloudformationStackSetInstanceDeploymentTargetsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstanceDeploymentTargetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstanceDeploymentTargetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstanceDeploymentTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstanceDeploymentTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstanceDeploymentTargetsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstanceDeploymentTargetsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstanceDeploymentTargetsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstanceDeploymentTargetsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstanceDeploymentTargetsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstanceDeploymentTargetsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstanceDeploymentTargetsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstanceDeploymentTargetsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstanceDeploymentTargetsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstanceDeploymentTargetsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstanceDeploymentTargetsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstanceDeploymentTargetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstanceDeploymentTargetsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstanceDeploymentTargetsOutputReference.resetOrganizationalUnitIds">resetOrganizationalUnitIds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstanceDeploymentTargetsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstanceDeploymentTargetsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstanceDeploymentTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstanceDeploymentTargetsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstanceDeploymentTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstanceDeploymentTargetsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstanceDeploymentTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstanceDeploymentTargetsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstanceDeploymentTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstanceDeploymentTargetsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstanceDeploymentTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstanceDeploymentTargetsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstanceDeploymentTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstanceDeploymentTargetsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstanceDeploymentTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstanceDeploymentTargetsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstanceDeploymentTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstanceDeploymentTargetsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstanceDeploymentTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstanceDeploymentTargetsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstanceDeploymentTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstanceDeploymentTargetsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstanceDeploymentTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstanceDeploymentTargetsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetOrganizationalUnitIds` <a name="resetOrganizationalUnitIds" id="@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstanceDeploymentTargetsOutputReference.resetOrganizationalUnitIds"></a>

```typescript
public resetOrganizationalUnitIds(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstanceDeploymentTargetsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstanceDeploymentTargetsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstanceDeploymentTargetsOutputReference.property.organizationalUnitIdsInput">organizationalUnitIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstanceDeploymentTargetsOutputReference.property.organizationalUnitIds">organizationalUnitIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstanceDeploymentTargetsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstanceDeploymentTargets">CloudformationStackSetInstanceDeploymentTargets</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstanceDeploymentTargetsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstanceDeploymentTargetsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `organizationalUnitIdsInput`<sup>Optional</sup> <a name="organizationalUnitIdsInput" id="@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstanceDeploymentTargetsOutputReference.property.organizationalUnitIdsInput"></a>

```typescript
public readonly organizationalUnitIdsInput: string[];
```

- *Type:* string[]

---

##### `organizationalUnitIds`<sup>Required</sup> <a name="organizationalUnitIds" id="@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstanceDeploymentTargetsOutputReference.property.organizationalUnitIds"></a>

```typescript
public readonly organizationalUnitIds: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstanceDeploymentTargetsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CloudformationStackSetInstanceDeploymentTargets;
```

- *Type:* <a href="#@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstanceDeploymentTargets">CloudformationStackSetInstanceDeploymentTargets</a>

---


### CloudformationStackSetInstanceTimeoutsOutputReference <a name="CloudformationStackSetInstanceTimeoutsOutputReference" id="@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstanceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstanceTimeoutsOutputReference.Initializer"></a>

```typescript
import { cloudformationStackSetInstance } from '@cdktf/aws-cdk'

new cloudformationStackSetInstance.CloudformationStackSetInstanceTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstanceTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstanceTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstanceTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstanceTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstanceTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstanceTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstanceTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstanceTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstanceTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstanceTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstanceTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstanceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstanceTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstanceTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstanceTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstanceTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstanceTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstanceTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstanceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstanceTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstanceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstanceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstanceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstanceTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstanceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstanceTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstanceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstanceTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstanceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstanceTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstanceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstanceTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstanceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstanceTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstanceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstanceTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstanceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstanceTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstanceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstanceTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstanceTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstanceTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstanceTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstanceTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstanceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstanceTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstanceTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstanceTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstanceTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstanceTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstanceTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstanceTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstanceTimeouts">CloudformationStackSetInstanceTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstanceTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstanceTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstanceTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstanceTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstanceTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstanceTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstanceTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstanceTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstanceTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudformationStackSetInstanceTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.cloudformationStackSetInstance.CloudformationStackSetInstanceTimeouts">CloudformationStackSetInstanceTimeouts</a>

---



