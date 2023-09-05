# `aws_config_organization_conformance_pack`

Refer to the Terraform Registory for docs: [`aws_config_organization_conformance_pack`](https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/config_organization_conformance_pack).

# `configOrganizationConformancePack` Submodule <a name="`configOrganizationConformancePack` Submodule" id="@cdktf/aws-cdk.configOrganizationConformancePack"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ConfigOrganizationConformancePack <a name="ConfigOrganizationConformancePack" id="@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePack"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/config_organization_conformance_pack aws_config_organization_conformance_pack}.

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePack.Initializer"></a>

```typescript
import { configOrganizationConformancePack } from '@cdktf/aws-cdk'

new configOrganizationConformancePack.ConfigOrganizationConformancePack(scope: Construct, id: string, config: ConfigOrganizationConformancePackConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePack.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePack.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePack.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePackConfig">ConfigOrganizationConformancePackConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePack.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePack.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePack.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePackConfig">ConfigOrganizationConformancePackConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePack.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePack.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePack.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePack.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePack.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePack.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePack.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePack.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePack.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePack.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePack.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePack.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePack.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePack.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePack.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePack.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePack.putInputParameter">putInputParameter</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePack.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePack.resetDeliveryS3Bucket">resetDeliveryS3Bucket</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePack.resetDeliveryS3KeyPrefix">resetDeliveryS3KeyPrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePack.resetExcludedAccounts">resetExcludedAccounts</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePack.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePack.resetInputParameter">resetInputParameter</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePack.resetTemplateBody">resetTemplateBody</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePack.resetTemplateS3Uri">resetTemplateS3Uri</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePack.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePack.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePack.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePack.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePack.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePack.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePack.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePack.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePack.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePack.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePack.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePack.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePack.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePack.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePack.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePack.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePack.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePack.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePack.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePack.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePack.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePack.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePack.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePack.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePack.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePack.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePack.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePack.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePack.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePack.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putInputParameter` <a name="putInputParameter" id="@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePack.putInputParameter"></a>

```typescript
public putInputParameter(value: IResolvable | ConfigOrganizationConformancePackInputParameter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePack.putInputParameter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameter">ConfigOrganizationConformancePackInputParameter</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePack.putTimeouts"></a>

```typescript
public putTimeouts(value: ConfigOrganizationConformancePackTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePack.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePackTimeouts">ConfigOrganizationConformancePackTimeouts</a>

---

##### `resetDeliveryS3Bucket` <a name="resetDeliveryS3Bucket" id="@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePack.resetDeliveryS3Bucket"></a>

```typescript
public resetDeliveryS3Bucket(): void
```

##### `resetDeliveryS3KeyPrefix` <a name="resetDeliveryS3KeyPrefix" id="@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePack.resetDeliveryS3KeyPrefix"></a>

```typescript
public resetDeliveryS3KeyPrefix(): void
```

##### `resetExcludedAccounts` <a name="resetExcludedAccounts" id="@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePack.resetExcludedAccounts"></a>

```typescript
public resetExcludedAccounts(): void
```

##### `resetId` <a name="resetId" id="@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePack.resetId"></a>

```typescript
public resetId(): void
```

##### `resetInputParameter` <a name="resetInputParameter" id="@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePack.resetInputParameter"></a>

```typescript
public resetInputParameter(): void
```

##### `resetTemplateBody` <a name="resetTemplateBody" id="@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePack.resetTemplateBody"></a>

```typescript
public resetTemplateBody(): void
```

##### `resetTemplateS3Uri` <a name="resetTemplateS3Uri" id="@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePack.resetTemplateS3Uri"></a>

```typescript
public resetTemplateS3Uri(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePack.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePack.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePack.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePack.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePack.isConstruct"></a>

```typescript
import { configOrganizationConformancePack } from '@cdktf/aws-cdk'

configOrganizationConformancePack.ConfigOrganizationConformancePack.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePack.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePack.isTerraformElement"></a>

```typescript
import { configOrganizationConformancePack } from '@cdktf/aws-cdk'

configOrganizationConformancePack.ConfigOrganizationConformancePack.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePack.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePack.isTerraformResource"></a>

```typescript
import { configOrganizationConformancePack } from '@cdktf/aws-cdk'

configOrganizationConformancePack.ConfigOrganizationConformancePack.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePack.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.inputParameter">inputParameter</a></code> | <code><a href="#@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterList">ConfigOrganizationConformancePackInputParameterList</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePackTimeoutsOutputReference">ConfigOrganizationConformancePackTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.deliveryS3BucketInput">deliveryS3BucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.deliveryS3KeyPrefixInput">deliveryS3KeyPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.excludedAccountsInput">excludedAccountsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.inputParameterInput">inputParameterInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameter">ConfigOrganizationConformancePackInputParameter</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.templateBodyInput">templateBodyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.templateS3UriInput">templateS3UriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePackTimeouts">ConfigOrganizationConformancePackTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.deliveryS3Bucket">deliveryS3Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.deliveryS3KeyPrefix">deliveryS3KeyPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.excludedAccounts">excludedAccounts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.templateBody">templateBody</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.templateS3Uri">templateS3Uri</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `inputParameter`<sup>Required</sup> <a name="inputParameter" id="@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.inputParameter"></a>

```typescript
public readonly inputParameter: ConfigOrganizationConformancePackInputParameterList;
```

- *Type:* <a href="#@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterList">ConfigOrganizationConformancePackInputParameterList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.timeouts"></a>

```typescript
public readonly timeouts: ConfigOrganizationConformancePackTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePackTimeoutsOutputReference">ConfigOrganizationConformancePackTimeoutsOutputReference</a>

---

##### `deliveryS3BucketInput`<sup>Optional</sup> <a name="deliveryS3BucketInput" id="@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.deliveryS3BucketInput"></a>

```typescript
public readonly deliveryS3BucketInput: string;
```

- *Type:* string

---

##### `deliveryS3KeyPrefixInput`<sup>Optional</sup> <a name="deliveryS3KeyPrefixInput" id="@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.deliveryS3KeyPrefixInput"></a>

```typescript
public readonly deliveryS3KeyPrefixInput: string;
```

- *Type:* string

---

##### `excludedAccountsInput`<sup>Optional</sup> <a name="excludedAccountsInput" id="@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.excludedAccountsInput"></a>

```typescript
public readonly excludedAccountsInput: string[];
```

- *Type:* string[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `inputParameterInput`<sup>Optional</sup> <a name="inputParameterInput" id="@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.inputParameterInput"></a>

```typescript
public readonly inputParameterInput: IResolvable | ConfigOrganizationConformancePackInputParameter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameter">ConfigOrganizationConformancePackInputParameter</a>[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `templateBodyInput`<sup>Optional</sup> <a name="templateBodyInput" id="@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.templateBodyInput"></a>

```typescript
public readonly templateBodyInput: string;
```

- *Type:* string

---

##### `templateS3UriInput`<sup>Optional</sup> <a name="templateS3UriInput" id="@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.templateS3UriInput"></a>

```typescript
public readonly templateS3UriInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ConfigOrganizationConformancePackTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePackTimeouts">ConfigOrganizationConformancePackTimeouts</a>

---

##### `deliveryS3Bucket`<sup>Required</sup> <a name="deliveryS3Bucket" id="@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.deliveryS3Bucket"></a>

```typescript
public readonly deliveryS3Bucket: string;
```

- *Type:* string

---

##### `deliveryS3KeyPrefix`<sup>Required</sup> <a name="deliveryS3KeyPrefix" id="@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.deliveryS3KeyPrefix"></a>

```typescript
public readonly deliveryS3KeyPrefix: string;
```

- *Type:* string

---

##### `excludedAccounts`<sup>Required</sup> <a name="excludedAccounts" id="@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.excludedAccounts"></a>

```typescript
public readonly excludedAccounts: string[];
```

- *Type:* string[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `templateBody`<sup>Required</sup> <a name="templateBody" id="@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.templateBody"></a>

```typescript
public readonly templateBody: string;
```

- *Type:* string

---

##### `templateS3Uri`<sup>Required</sup> <a name="templateS3Uri" id="@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.templateS3Uri"></a>

```typescript
public readonly templateS3Uri: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePack.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ConfigOrganizationConformancePackConfig <a name="ConfigOrganizationConformancePackConfig" id="@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePackConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePackConfig.Initializer"></a>

```typescript
import { configOrganizationConformancePack } from '@cdktf/aws-cdk'

const configOrganizationConformancePackConfig: configOrganizationConformancePack.ConfigOrganizationConformancePackConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePackConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePackConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePackConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePackConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePackConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePackConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePackConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePackConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/config_organization_conformance_pack#name ConfigOrganizationConformancePack#name}. |
| <code><a href="#@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePackConfig.property.deliveryS3Bucket">deliveryS3Bucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/config_organization_conformance_pack#delivery_s3_bucket ConfigOrganizationConformancePack#delivery_s3_bucket}. |
| <code><a href="#@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePackConfig.property.deliveryS3KeyPrefix">deliveryS3KeyPrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/config_organization_conformance_pack#delivery_s3_key_prefix ConfigOrganizationConformancePack#delivery_s3_key_prefix}. |
| <code><a href="#@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePackConfig.property.excludedAccounts">excludedAccounts</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/config_organization_conformance_pack#excluded_accounts ConfigOrganizationConformancePack#excluded_accounts}. |
| <code><a href="#@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePackConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/config_organization_conformance_pack#id ConfigOrganizationConformancePack#id}. |
| <code><a href="#@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePackConfig.property.inputParameter">inputParameter</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameter">ConfigOrganizationConformancePackInputParameter</a>[]</code> | input_parameter block. |
| <code><a href="#@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePackConfig.property.templateBody">templateBody</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/config_organization_conformance_pack#template_body ConfigOrganizationConformancePack#template_body}. |
| <code><a href="#@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePackConfig.property.templateS3Uri">templateS3Uri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/config_organization_conformance_pack#template_s3_uri ConfigOrganizationConformancePack#template_s3_uri}. |
| <code><a href="#@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePackConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePackTimeouts">ConfigOrganizationConformancePackTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePackConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePackConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePackConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePackConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePackConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePackConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePackConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePackConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/config_organization_conformance_pack#name ConfigOrganizationConformancePack#name}.

---

##### `deliveryS3Bucket`<sup>Optional</sup> <a name="deliveryS3Bucket" id="@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePackConfig.property.deliveryS3Bucket"></a>

```typescript
public readonly deliveryS3Bucket: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/config_organization_conformance_pack#delivery_s3_bucket ConfigOrganizationConformancePack#delivery_s3_bucket}.

---

##### `deliveryS3KeyPrefix`<sup>Optional</sup> <a name="deliveryS3KeyPrefix" id="@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePackConfig.property.deliveryS3KeyPrefix"></a>

```typescript
public readonly deliveryS3KeyPrefix: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/config_organization_conformance_pack#delivery_s3_key_prefix ConfigOrganizationConformancePack#delivery_s3_key_prefix}.

---

##### `excludedAccounts`<sup>Optional</sup> <a name="excludedAccounts" id="@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePackConfig.property.excludedAccounts"></a>

```typescript
public readonly excludedAccounts: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/config_organization_conformance_pack#excluded_accounts ConfigOrganizationConformancePack#excluded_accounts}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePackConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/config_organization_conformance_pack#id ConfigOrganizationConformancePack#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `inputParameter`<sup>Optional</sup> <a name="inputParameter" id="@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePackConfig.property.inputParameter"></a>

```typescript
public readonly inputParameter: IResolvable | ConfigOrganizationConformancePackInputParameter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameter">ConfigOrganizationConformancePackInputParameter</a>[]

input_parameter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/config_organization_conformance_pack#input_parameter ConfigOrganizationConformancePack#input_parameter}

---

##### `templateBody`<sup>Optional</sup> <a name="templateBody" id="@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePackConfig.property.templateBody"></a>

```typescript
public readonly templateBody: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/config_organization_conformance_pack#template_body ConfigOrganizationConformancePack#template_body}.

---

##### `templateS3Uri`<sup>Optional</sup> <a name="templateS3Uri" id="@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePackConfig.property.templateS3Uri"></a>

```typescript
public readonly templateS3Uri: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/config_organization_conformance_pack#template_s3_uri ConfigOrganizationConformancePack#template_s3_uri}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePackConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ConfigOrganizationConformancePackTimeouts;
```

- *Type:* <a href="#@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePackTimeouts">ConfigOrganizationConformancePackTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/config_organization_conformance_pack#timeouts ConfigOrganizationConformancePack#timeouts}

---

### ConfigOrganizationConformancePackInputParameter <a name="ConfigOrganizationConformancePackInputParameter" id="@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameter"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameter.Initializer"></a>

```typescript
import { configOrganizationConformancePack } from '@cdktf/aws-cdk'

const configOrganizationConformancePackInputParameter: configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameter.property.parameterName">parameterName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/config_organization_conformance_pack#parameter_name ConfigOrganizationConformancePack#parameter_name}. |
| <code><a href="#@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameter.property.parameterValue">parameterValue</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/config_organization_conformance_pack#parameter_value ConfigOrganizationConformancePack#parameter_value}. |

---

##### `parameterName`<sup>Required</sup> <a name="parameterName" id="@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameter.property.parameterName"></a>

```typescript
public readonly parameterName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/config_organization_conformance_pack#parameter_name ConfigOrganizationConformancePack#parameter_name}.

---

##### `parameterValue`<sup>Required</sup> <a name="parameterValue" id="@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameter.property.parameterValue"></a>

```typescript
public readonly parameterValue: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/config_organization_conformance_pack#parameter_value ConfigOrganizationConformancePack#parameter_value}.

---

### ConfigOrganizationConformancePackTimeouts <a name="ConfigOrganizationConformancePackTimeouts" id="@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePackTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePackTimeouts.Initializer"></a>

```typescript
import { configOrganizationConformancePack } from '@cdktf/aws-cdk'

const configOrganizationConformancePackTimeouts: configOrganizationConformancePack.ConfigOrganizationConformancePackTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePackTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/config_organization_conformance_pack#create ConfigOrganizationConformancePack#create}. |
| <code><a href="#@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePackTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/config_organization_conformance_pack#delete ConfigOrganizationConformancePack#delete}. |
| <code><a href="#@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePackTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/config_organization_conformance_pack#update ConfigOrganizationConformancePack#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePackTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/config_organization_conformance_pack#create ConfigOrganizationConformancePack#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePackTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/config_organization_conformance_pack#delete ConfigOrganizationConformancePack#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePackTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/config_organization_conformance_pack#update ConfigOrganizationConformancePack#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ConfigOrganizationConformancePackInputParameterList <a name="ConfigOrganizationConformancePackInputParameterList" id="@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterList.Initializer"></a>

```typescript
import { configOrganizationConformancePack } from '@cdktf/aws-cdk'

new configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterList.get"></a>

```typescript
public get(index: number): ConfigOrganizationConformancePackInputParameterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameter">ConfigOrganizationConformancePackInputParameter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConfigOrganizationConformancePackInputParameter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameter">ConfigOrganizationConformancePackInputParameter</a>[]

---


### ConfigOrganizationConformancePackInputParameterOutputReference <a name="ConfigOrganizationConformancePackInputParameterOutputReference" id="@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterOutputReference.Initializer"></a>

```typescript
import { configOrganizationConformancePack } from '@cdktf/aws-cdk'

new configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterOutputReference.property.parameterNameInput">parameterNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterOutputReference.property.parameterValueInput">parameterValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterOutputReference.property.parameterName">parameterName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterOutputReference.property.parameterValue">parameterValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameter">ConfigOrganizationConformancePackInputParameter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `parameterNameInput`<sup>Optional</sup> <a name="parameterNameInput" id="@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterOutputReference.property.parameterNameInput"></a>

```typescript
public readonly parameterNameInput: string;
```

- *Type:* string

---

##### `parameterValueInput`<sup>Optional</sup> <a name="parameterValueInput" id="@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterOutputReference.property.parameterValueInput"></a>

```typescript
public readonly parameterValueInput: string;
```

- *Type:* string

---

##### `parameterName`<sup>Required</sup> <a name="parameterName" id="@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterOutputReference.property.parameterName"></a>

```typescript
public readonly parameterName: string;
```

- *Type:* string

---

##### `parameterValue`<sup>Required</sup> <a name="parameterValue" id="@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterOutputReference.property.parameterValue"></a>

```typescript
public readonly parameterValue: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConfigOrganizationConformancePackInputParameter;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePackInputParameter">ConfigOrganizationConformancePackInputParameter</a>

---


### ConfigOrganizationConformancePackTimeoutsOutputReference <a name="ConfigOrganizationConformancePackTimeoutsOutputReference" id="@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePackTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePackTimeoutsOutputReference.Initializer"></a>

```typescript
import { configOrganizationConformancePack } from '@cdktf/aws-cdk'

new configOrganizationConformancePack.ConfigOrganizationConformancePackTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePackTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePackTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePackTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePackTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePackTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePackTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePackTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePackTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePackTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePackTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePackTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePackTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePackTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePackTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePackTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePackTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePackTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePackTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePackTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePackTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePackTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePackTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePackTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePackTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePackTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePackTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePackTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePackTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePackTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePackTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePackTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePackTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePackTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePackTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePackTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePackTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePackTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePackTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePackTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePackTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePackTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePackTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePackTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePackTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePackTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePackTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePackTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePackTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePackTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePackTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePackTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePackTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePackTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePackTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePackTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePackTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePackTimeouts">ConfigOrganizationConformancePackTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePackTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePackTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePackTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePackTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePackTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePackTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePackTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePackTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePackTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ConfigOrganizationConformancePackTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.configOrganizationConformancePack.ConfigOrganizationConformancePackTimeouts">ConfigOrganizationConformancePackTimeouts</a>

---



