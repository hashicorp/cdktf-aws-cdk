# `aws_guardduty_organization_configuration`

Refer to the Terraform Registory for docs: [`aws_guardduty_organization_configuration`](https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/guardduty_organization_configuration).

# `guarddutyOrganizationConfiguration` Submodule <a name="`guarddutyOrganizationConfiguration` Submodule" id="@cdktf/aws-cdk.guarddutyOrganizationConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GuarddutyOrganizationConfiguration <a name="GuarddutyOrganizationConfiguration" id="@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/guardduty_organization_configuration aws_guardduty_organization_configuration}.

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.Initializer"></a>

```typescript
import { guarddutyOrganizationConfiguration } from '@cdktf/aws-cdk'

new guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration(scope: Construct, id: string, config: GuarddutyOrganizationConfigurationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationConfig">GuarddutyOrganizationConfigurationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationConfig">GuarddutyOrganizationConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.putDatasources">putDatasources</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.resetDatasources">resetDatasources</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putDatasources` <a name="putDatasources" id="@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.putDatasources"></a>

```typescript
public putDatasources(value: GuarddutyOrganizationConfigurationDatasources): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.putDatasources.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasources">GuarddutyOrganizationConfigurationDatasources</a>

---

##### `resetDatasources` <a name="resetDatasources" id="@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.resetDatasources"></a>

```typescript
public resetDatasources(): void
```

##### `resetId` <a name="resetId" id="@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.isConstruct"></a>

```typescript
import { guarddutyOrganizationConfiguration } from '@cdktf/aws-cdk'

guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.isTerraformElement"></a>

```typescript
import { guarddutyOrganizationConfiguration } from '@cdktf/aws-cdk'

guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.isTerraformResource"></a>

```typescript
import { guarddutyOrganizationConfiguration } from '@cdktf/aws-cdk'

guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.property.datasources">datasources</a></code> | <code><a href="#@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesOutputReference">GuarddutyOrganizationConfigurationDatasourcesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.property.autoEnableInput">autoEnableInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.property.datasourcesInput">datasourcesInput</a></code> | <code><a href="#@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasources">GuarddutyOrganizationConfigurationDatasources</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.property.detectorIdInput">detectorIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.property.autoEnable">autoEnable</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.property.detectorId">detectorId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `datasources`<sup>Required</sup> <a name="datasources" id="@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.property.datasources"></a>

```typescript
public readonly datasources: GuarddutyOrganizationConfigurationDatasourcesOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesOutputReference">GuarddutyOrganizationConfigurationDatasourcesOutputReference</a>

---

##### `autoEnableInput`<sup>Optional</sup> <a name="autoEnableInput" id="@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.property.autoEnableInput"></a>

```typescript
public readonly autoEnableInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `datasourcesInput`<sup>Optional</sup> <a name="datasourcesInput" id="@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.property.datasourcesInput"></a>

```typescript
public readonly datasourcesInput: GuarddutyOrganizationConfigurationDatasources;
```

- *Type:* <a href="#@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasources">GuarddutyOrganizationConfigurationDatasources</a>

---

##### `detectorIdInput`<sup>Optional</sup> <a name="detectorIdInput" id="@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.property.detectorIdInput"></a>

```typescript
public readonly detectorIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `autoEnable`<sup>Required</sup> <a name="autoEnable" id="@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.property.autoEnable"></a>

```typescript
public readonly autoEnable: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `detectorId`<sup>Required</sup> <a name="detectorId" id="@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.property.detectorId"></a>

```typescript
public readonly detectorId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfiguration.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GuarddutyOrganizationConfigurationConfig <a name="GuarddutyOrganizationConfigurationConfig" id="@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationConfig.Initializer"></a>

```typescript
import { guarddutyOrganizationConfiguration } from '@cdktf/aws-cdk'

const guarddutyOrganizationConfigurationConfig: guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationConfig.property.autoEnable">autoEnable</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/guardduty_organization_configuration#auto_enable GuarddutyOrganizationConfiguration#auto_enable}. |
| <code><a href="#@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationConfig.property.detectorId">detectorId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/guardduty_organization_configuration#detector_id GuarddutyOrganizationConfiguration#detector_id}. |
| <code><a href="#@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationConfig.property.datasources">datasources</a></code> | <code><a href="#@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasources">GuarddutyOrganizationConfigurationDatasources</a></code> | datasources block. |
| <code><a href="#@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/guardduty_organization_configuration#id GuarddutyOrganizationConfiguration#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `autoEnable`<sup>Required</sup> <a name="autoEnable" id="@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationConfig.property.autoEnable"></a>

```typescript
public readonly autoEnable: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/guardduty_organization_configuration#auto_enable GuarddutyOrganizationConfiguration#auto_enable}.

---

##### `detectorId`<sup>Required</sup> <a name="detectorId" id="@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationConfig.property.detectorId"></a>

```typescript
public readonly detectorId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/guardduty_organization_configuration#detector_id GuarddutyOrganizationConfiguration#detector_id}.

---

##### `datasources`<sup>Optional</sup> <a name="datasources" id="@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationConfig.property.datasources"></a>

```typescript
public readonly datasources: GuarddutyOrganizationConfigurationDatasources;
```

- *Type:* <a href="#@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasources">GuarddutyOrganizationConfigurationDatasources</a>

datasources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/guardduty_organization_configuration#datasources GuarddutyOrganizationConfiguration#datasources}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/guardduty_organization_configuration#id GuarddutyOrganizationConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### GuarddutyOrganizationConfigurationDatasources <a name="GuarddutyOrganizationConfigurationDatasources" id="@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasources"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasources.Initializer"></a>

```typescript
import { guarddutyOrganizationConfiguration } from '@cdktf/aws-cdk'

const guarddutyOrganizationConfigurationDatasources: guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasources = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasources.property.s3Logs">s3Logs</a></code> | <code><a href="#@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesS3Logs">GuarddutyOrganizationConfigurationDatasourcesS3Logs</a></code> | s3_logs block. |

---

##### `s3Logs`<sup>Optional</sup> <a name="s3Logs" id="@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasources.property.s3Logs"></a>

```typescript
public readonly s3Logs: GuarddutyOrganizationConfigurationDatasourcesS3Logs;
```

- *Type:* <a href="#@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesS3Logs">GuarddutyOrganizationConfigurationDatasourcesS3Logs</a>

s3_logs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/guardduty_organization_configuration#s3_logs GuarddutyOrganizationConfiguration#s3_logs}

---

### GuarddutyOrganizationConfigurationDatasourcesS3Logs <a name="GuarddutyOrganizationConfigurationDatasourcesS3Logs" id="@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesS3Logs"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesS3Logs.Initializer"></a>

```typescript
import { guarddutyOrganizationConfiguration } from '@cdktf/aws-cdk'

const guarddutyOrganizationConfigurationDatasourcesS3Logs: guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesS3Logs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesS3Logs.property.autoEnable">autoEnable</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/guardduty_organization_configuration#auto_enable GuarddutyOrganizationConfiguration#auto_enable}. |

---

##### `autoEnable`<sup>Required</sup> <a name="autoEnable" id="@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesS3Logs.property.autoEnable"></a>

```typescript
public readonly autoEnable: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/guardduty_organization_configuration#auto_enable GuarddutyOrganizationConfiguration#auto_enable}.

---

## Classes <a name="Classes" id="Classes"></a>

### GuarddutyOrganizationConfigurationDatasourcesOutputReference <a name="GuarddutyOrganizationConfigurationDatasourcesOutputReference" id="@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesOutputReference.Initializer"></a>

```typescript
import { guarddutyOrganizationConfiguration } from '@cdktf/aws-cdk'

new guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesOutputReference.putS3Logs">putS3Logs</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesOutputReference.resetS3Logs">resetS3Logs</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putS3Logs` <a name="putS3Logs" id="@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesOutputReference.putS3Logs"></a>

```typescript
public putS3Logs(value: GuarddutyOrganizationConfigurationDatasourcesS3Logs): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesOutputReference.putS3Logs.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesS3Logs">GuarddutyOrganizationConfigurationDatasourcesS3Logs</a>

---

##### `resetS3Logs` <a name="resetS3Logs" id="@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesOutputReference.resetS3Logs"></a>

```typescript
public resetS3Logs(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesOutputReference.property.s3Logs">s3Logs</a></code> | <code><a href="#@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesS3LogsOutputReference">GuarddutyOrganizationConfigurationDatasourcesS3LogsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesOutputReference.property.s3LogsInput">s3LogsInput</a></code> | <code><a href="#@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesS3Logs">GuarddutyOrganizationConfigurationDatasourcesS3Logs</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasources">GuarddutyOrganizationConfigurationDatasources</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `s3Logs`<sup>Required</sup> <a name="s3Logs" id="@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesOutputReference.property.s3Logs"></a>

```typescript
public readonly s3Logs: GuarddutyOrganizationConfigurationDatasourcesS3LogsOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesS3LogsOutputReference">GuarddutyOrganizationConfigurationDatasourcesS3LogsOutputReference</a>

---

##### `s3LogsInput`<sup>Optional</sup> <a name="s3LogsInput" id="@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesOutputReference.property.s3LogsInput"></a>

```typescript
public readonly s3LogsInput: GuarddutyOrganizationConfigurationDatasourcesS3Logs;
```

- *Type:* <a href="#@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesS3Logs">GuarddutyOrganizationConfigurationDatasourcesS3Logs</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GuarddutyOrganizationConfigurationDatasources;
```

- *Type:* <a href="#@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasources">GuarddutyOrganizationConfigurationDatasources</a>

---


### GuarddutyOrganizationConfigurationDatasourcesS3LogsOutputReference <a name="GuarddutyOrganizationConfigurationDatasourcesS3LogsOutputReference" id="@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesS3LogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesS3LogsOutputReference.Initializer"></a>

```typescript
import { guarddutyOrganizationConfiguration } from '@cdktf/aws-cdk'

new guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesS3LogsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesS3LogsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesS3LogsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesS3LogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesS3LogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesS3LogsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesS3LogsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesS3LogsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesS3LogsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesS3LogsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesS3LogsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesS3LogsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesS3LogsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesS3LogsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesS3LogsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesS3LogsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesS3LogsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesS3LogsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesS3LogsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesS3LogsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesS3LogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesS3LogsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesS3LogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesS3LogsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesS3LogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesS3LogsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesS3LogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesS3LogsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesS3LogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesS3LogsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesS3LogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesS3LogsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesS3LogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesS3LogsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesS3LogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesS3LogsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesS3LogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesS3LogsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesS3LogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesS3LogsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesS3LogsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesS3LogsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesS3LogsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesS3LogsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesS3LogsOutputReference.property.autoEnableInput">autoEnableInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesS3LogsOutputReference.property.autoEnable">autoEnable</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesS3LogsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesS3Logs">GuarddutyOrganizationConfigurationDatasourcesS3Logs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesS3LogsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesS3LogsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `autoEnableInput`<sup>Optional</sup> <a name="autoEnableInput" id="@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesS3LogsOutputReference.property.autoEnableInput"></a>

```typescript
public readonly autoEnableInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `autoEnable`<sup>Required</sup> <a name="autoEnable" id="@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesS3LogsOutputReference.property.autoEnable"></a>

```typescript
public readonly autoEnable: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesS3LogsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GuarddutyOrganizationConfigurationDatasourcesS3Logs;
```

- *Type:* <a href="#@cdktf/aws-cdk.guarddutyOrganizationConfiguration.GuarddutyOrganizationConfigurationDatasourcesS3Logs">GuarddutyOrganizationConfigurationDatasourcesS3Logs</a>

---



