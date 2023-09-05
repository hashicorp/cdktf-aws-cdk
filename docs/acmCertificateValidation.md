# `aws_acm_certificate_validation`

Refer to the Terraform Registory for docs: [`aws_acm_certificate_validation`](https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/acm_certificate_validation).

# `acmCertificateValidation` Submodule <a name="`acmCertificateValidation` Submodule" id="@cdktf/aws-cdk.acmCertificateValidation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AcmCertificateValidation <a name="AcmCertificateValidation" id="@cdktf/aws-cdk.acmCertificateValidation.AcmCertificateValidation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/acm_certificate_validation aws_acm_certificate_validation}.

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.acmCertificateValidation.AcmCertificateValidation.Initializer"></a>

```typescript
import { acmCertificateValidation } from '@cdktf/aws-cdk'

new acmCertificateValidation.AcmCertificateValidation(scope: Construct, id: string, config: AcmCertificateValidationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.acmCertificateValidation.AcmCertificateValidation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/aws-cdk.acmCertificateValidation.AcmCertificateValidation.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/aws-cdk.acmCertificateValidation.AcmCertificateValidation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/aws-cdk.acmCertificateValidation.AcmCertificateValidationConfig">AcmCertificateValidationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.acmCertificateValidation.AcmCertificateValidation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.acmCertificateValidation.AcmCertificateValidation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/aws-cdk.acmCertificateValidation.AcmCertificateValidation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/aws-cdk.acmCertificateValidation.AcmCertificateValidationConfig">AcmCertificateValidationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.acmCertificateValidation.AcmCertificateValidation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/aws-cdk.acmCertificateValidation.AcmCertificateValidation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.acmCertificateValidation.AcmCertificateValidation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/aws-cdk.acmCertificateValidation.AcmCertificateValidation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/aws-cdk.acmCertificateValidation.AcmCertificateValidation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.acmCertificateValidation.AcmCertificateValidation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/aws-cdk.acmCertificateValidation.AcmCertificateValidation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.acmCertificateValidation.AcmCertificateValidation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.acmCertificateValidation.AcmCertificateValidation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.acmCertificateValidation.AcmCertificateValidation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.acmCertificateValidation.AcmCertificateValidation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.acmCertificateValidation.AcmCertificateValidation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.acmCertificateValidation.AcmCertificateValidation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.acmCertificateValidation.AcmCertificateValidation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.acmCertificateValidation.AcmCertificateValidation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.acmCertificateValidation.AcmCertificateValidation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.acmCertificateValidation.AcmCertificateValidation.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.acmCertificateValidation.AcmCertificateValidation.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.acmCertificateValidation.AcmCertificateValidation.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.acmCertificateValidation.AcmCertificateValidation.resetValidationRecordFqdns">resetValidationRecordFqdns</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.acmCertificateValidation.AcmCertificateValidation.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/aws-cdk.acmCertificateValidation.AcmCertificateValidation.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/aws-cdk.acmCertificateValidation.AcmCertificateValidation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.acmCertificateValidation.AcmCertificateValidation.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/aws-cdk.acmCertificateValidation.AcmCertificateValidation.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/aws-cdk.acmCertificateValidation.AcmCertificateValidation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/aws-cdk.acmCertificateValidation.AcmCertificateValidation.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/aws-cdk.acmCertificateValidation.AcmCertificateValidation.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/aws-cdk.acmCertificateValidation.AcmCertificateValidation.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.acmCertificateValidation.AcmCertificateValidation.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.acmCertificateValidation.AcmCertificateValidation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.acmCertificateValidation.AcmCertificateValidation.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.acmCertificateValidation.AcmCertificateValidation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.acmCertificateValidation.AcmCertificateValidation.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.acmCertificateValidation.AcmCertificateValidation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.acmCertificateValidation.AcmCertificateValidation.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.acmCertificateValidation.AcmCertificateValidation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.acmCertificateValidation.AcmCertificateValidation.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.acmCertificateValidation.AcmCertificateValidation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.acmCertificateValidation.AcmCertificateValidation.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.acmCertificateValidation.AcmCertificateValidation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.acmCertificateValidation.AcmCertificateValidation.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.acmCertificateValidation.AcmCertificateValidation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.acmCertificateValidation.AcmCertificateValidation.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.acmCertificateValidation.AcmCertificateValidation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.acmCertificateValidation.AcmCertificateValidation.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.acmCertificateValidation.AcmCertificateValidation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.acmCertificateValidation.AcmCertificateValidation.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.acmCertificateValidation.AcmCertificateValidation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/aws-cdk.acmCertificateValidation.AcmCertificateValidation.putTimeouts"></a>

```typescript
public putTimeouts(value: AcmCertificateValidationTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.acmCertificateValidation.AcmCertificateValidation.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.acmCertificateValidation.AcmCertificateValidationTimeouts">AcmCertificateValidationTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/aws-cdk.acmCertificateValidation.AcmCertificateValidation.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/aws-cdk.acmCertificateValidation.AcmCertificateValidation.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetValidationRecordFqdns` <a name="resetValidationRecordFqdns" id="@cdktf/aws-cdk.acmCertificateValidation.AcmCertificateValidation.resetValidationRecordFqdns"></a>

```typescript
public resetValidationRecordFqdns(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.acmCertificateValidation.AcmCertificateValidation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/aws-cdk.acmCertificateValidation.AcmCertificateValidation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.acmCertificateValidation.AcmCertificateValidation.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@cdktf/aws-cdk.acmCertificateValidation.AcmCertificateValidation.isConstruct"></a>

```typescript
import { acmCertificateValidation } from '@cdktf/aws-cdk'

acmCertificateValidation.AcmCertificateValidation.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.acmCertificateValidation.AcmCertificateValidation.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/aws-cdk.acmCertificateValidation.AcmCertificateValidation.isTerraformElement"></a>

```typescript
import { acmCertificateValidation } from '@cdktf/aws-cdk'

acmCertificateValidation.AcmCertificateValidation.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.acmCertificateValidation.AcmCertificateValidation.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/aws-cdk.acmCertificateValidation.AcmCertificateValidation.isTerraformResource"></a>

```typescript
import { acmCertificateValidation } from '@cdktf/aws-cdk'

acmCertificateValidation.AcmCertificateValidation.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.acmCertificateValidation.AcmCertificateValidation.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.acmCertificateValidation.AcmCertificateValidation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/aws-cdk.acmCertificateValidation.AcmCertificateValidation.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.acmCertificateValidation.AcmCertificateValidation.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.acmCertificateValidation.AcmCertificateValidation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.acmCertificateValidation.AcmCertificateValidation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.acmCertificateValidation.AcmCertificateValidation.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.acmCertificateValidation.AcmCertificateValidation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.acmCertificateValidation.AcmCertificateValidation.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.acmCertificateValidation.AcmCertificateValidation.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.acmCertificateValidation.AcmCertificateValidation.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.acmCertificateValidation.AcmCertificateValidation.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.acmCertificateValidation.AcmCertificateValidation.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.acmCertificateValidation.AcmCertificateValidation.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.acmCertificateValidation.AcmCertificateValidation.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.acmCertificateValidation.AcmCertificateValidation.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/aws-cdk.acmCertificateValidation.AcmCertificateValidationTimeoutsOutputReference">AcmCertificateValidationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.acmCertificateValidation.AcmCertificateValidation.property.certificateArnInput">certificateArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.acmCertificateValidation.AcmCertificateValidation.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.acmCertificateValidation.AcmCertificateValidation.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.acmCertificateValidation.AcmCertificateValidationTimeouts">AcmCertificateValidationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.acmCertificateValidation.AcmCertificateValidation.property.validationRecordFqdnsInput">validationRecordFqdnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.acmCertificateValidation.AcmCertificateValidation.property.certificateArn">certificateArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.acmCertificateValidation.AcmCertificateValidation.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.acmCertificateValidation.AcmCertificateValidation.property.validationRecordFqdns">validationRecordFqdns</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/aws-cdk.acmCertificateValidation.AcmCertificateValidation.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/aws-cdk.acmCertificateValidation.AcmCertificateValidation.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.acmCertificateValidation.AcmCertificateValidation.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/aws-cdk.acmCertificateValidation.AcmCertificateValidation.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/aws-cdk.acmCertificateValidation.AcmCertificateValidation.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/aws-cdk.acmCertificateValidation.AcmCertificateValidation.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/aws-cdk.acmCertificateValidation.AcmCertificateValidation.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.acmCertificateValidation.AcmCertificateValidation.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.acmCertificateValidation.AcmCertificateValidation.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.acmCertificateValidation.AcmCertificateValidation.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.acmCertificateValidation.AcmCertificateValidation.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.acmCertificateValidation.AcmCertificateValidation.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.acmCertificateValidation.AcmCertificateValidation.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.acmCertificateValidation.AcmCertificateValidation.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/aws-cdk.acmCertificateValidation.AcmCertificateValidation.property.timeouts"></a>

```typescript
public readonly timeouts: AcmCertificateValidationTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.acmCertificateValidation.AcmCertificateValidationTimeoutsOutputReference">AcmCertificateValidationTimeoutsOutputReference</a>

---

##### `certificateArnInput`<sup>Optional</sup> <a name="certificateArnInput" id="@cdktf/aws-cdk.acmCertificateValidation.AcmCertificateValidation.property.certificateArnInput"></a>

```typescript
public readonly certificateArnInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/aws-cdk.acmCertificateValidation.AcmCertificateValidation.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/aws-cdk.acmCertificateValidation.AcmCertificateValidation.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | AcmCertificateValidationTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.acmCertificateValidation.AcmCertificateValidationTimeouts">AcmCertificateValidationTimeouts</a>

---

##### `validationRecordFqdnsInput`<sup>Optional</sup> <a name="validationRecordFqdnsInput" id="@cdktf/aws-cdk.acmCertificateValidation.AcmCertificateValidation.property.validationRecordFqdnsInput"></a>

```typescript
public readonly validationRecordFqdnsInput: string[];
```

- *Type:* string[]

---

##### `certificateArn`<sup>Required</sup> <a name="certificateArn" id="@cdktf/aws-cdk.acmCertificateValidation.AcmCertificateValidation.property.certificateArn"></a>

```typescript
public readonly certificateArn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.acmCertificateValidation.AcmCertificateValidation.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `validationRecordFqdns`<sup>Required</sup> <a name="validationRecordFqdns" id="@cdktf/aws-cdk.acmCertificateValidation.AcmCertificateValidation.property.validationRecordFqdns"></a>

```typescript
public readonly validationRecordFqdns: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.acmCertificateValidation.AcmCertificateValidation.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/aws-cdk.acmCertificateValidation.AcmCertificateValidation.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AcmCertificateValidationConfig <a name="AcmCertificateValidationConfig" id="@cdktf/aws-cdk.acmCertificateValidation.AcmCertificateValidationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.acmCertificateValidation.AcmCertificateValidationConfig.Initializer"></a>

```typescript
import { acmCertificateValidation } from '@cdktf/aws-cdk'

const acmCertificateValidationConfig: acmCertificateValidation.AcmCertificateValidationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.acmCertificateValidation.AcmCertificateValidationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.acmCertificateValidation.AcmCertificateValidationConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.acmCertificateValidation.AcmCertificateValidationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.acmCertificateValidation.AcmCertificateValidationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.acmCertificateValidation.AcmCertificateValidationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.acmCertificateValidation.AcmCertificateValidationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.acmCertificateValidation.AcmCertificateValidationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.acmCertificateValidation.AcmCertificateValidationConfig.property.certificateArn">certificateArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/acm_certificate_validation#certificate_arn AcmCertificateValidation#certificate_arn}. |
| <code><a href="#@cdktf/aws-cdk.acmCertificateValidation.AcmCertificateValidationConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/acm_certificate_validation#id AcmCertificateValidation#id}. |
| <code><a href="#@cdktf/aws-cdk.acmCertificateValidation.AcmCertificateValidationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/aws-cdk.acmCertificateValidation.AcmCertificateValidationTimeouts">AcmCertificateValidationTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/aws-cdk.acmCertificateValidation.AcmCertificateValidationConfig.property.validationRecordFqdns">validationRecordFqdns</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/acm_certificate_validation#validation_record_fqdns AcmCertificateValidation#validation_record_fqdns}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.acmCertificateValidation.AcmCertificateValidationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.acmCertificateValidation.AcmCertificateValidationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.acmCertificateValidation.AcmCertificateValidationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.acmCertificateValidation.AcmCertificateValidationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.acmCertificateValidation.AcmCertificateValidationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.acmCertificateValidation.AcmCertificateValidationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.acmCertificateValidation.AcmCertificateValidationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `certificateArn`<sup>Required</sup> <a name="certificateArn" id="@cdktf/aws-cdk.acmCertificateValidation.AcmCertificateValidationConfig.property.certificateArn"></a>

```typescript
public readonly certificateArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/acm_certificate_validation#certificate_arn AcmCertificateValidation#certificate_arn}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/aws-cdk.acmCertificateValidation.AcmCertificateValidationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/acm_certificate_validation#id AcmCertificateValidation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/aws-cdk.acmCertificateValidation.AcmCertificateValidationConfig.property.timeouts"></a>

```typescript
public readonly timeouts: AcmCertificateValidationTimeouts;
```

- *Type:* <a href="#@cdktf/aws-cdk.acmCertificateValidation.AcmCertificateValidationTimeouts">AcmCertificateValidationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/acm_certificate_validation#timeouts AcmCertificateValidation#timeouts}

---

##### `validationRecordFqdns`<sup>Optional</sup> <a name="validationRecordFqdns" id="@cdktf/aws-cdk.acmCertificateValidation.AcmCertificateValidationConfig.property.validationRecordFqdns"></a>

```typescript
public readonly validationRecordFqdns: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/acm_certificate_validation#validation_record_fqdns AcmCertificateValidation#validation_record_fqdns}.

---

### AcmCertificateValidationTimeouts <a name="AcmCertificateValidationTimeouts" id="@cdktf/aws-cdk.acmCertificateValidation.AcmCertificateValidationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.acmCertificateValidation.AcmCertificateValidationTimeouts.Initializer"></a>

```typescript
import { acmCertificateValidation } from '@cdktf/aws-cdk'

const acmCertificateValidationTimeouts: acmCertificateValidation.AcmCertificateValidationTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.acmCertificateValidation.AcmCertificateValidationTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/acm_certificate_validation#create AcmCertificateValidation#create}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/aws-cdk.acmCertificateValidation.AcmCertificateValidationTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/acm_certificate_validation#create AcmCertificateValidation#create}.

---

## Classes <a name="Classes" id="Classes"></a>

### AcmCertificateValidationTimeoutsOutputReference <a name="AcmCertificateValidationTimeoutsOutputReference" id="@cdktf/aws-cdk.acmCertificateValidation.AcmCertificateValidationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.acmCertificateValidation.AcmCertificateValidationTimeoutsOutputReference.Initializer"></a>

```typescript
import { acmCertificateValidation } from '@cdktf/aws-cdk'

new acmCertificateValidation.AcmCertificateValidationTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.acmCertificateValidation.AcmCertificateValidationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.acmCertificateValidation.AcmCertificateValidationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.acmCertificateValidation.AcmCertificateValidationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.acmCertificateValidation.AcmCertificateValidationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.acmCertificateValidation.AcmCertificateValidationTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.acmCertificateValidation.AcmCertificateValidationTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.acmCertificateValidation.AcmCertificateValidationTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.acmCertificateValidation.AcmCertificateValidationTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.acmCertificateValidation.AcmCertificateValidationTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.acmCertificateValidation.AcmCertificateValidationTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.acmCertificateValidation.AcmCertificateValidationTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.acmCertificateValidation.AcmCertificateValidationTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.acmCertificateValidation.AcmCertificateValidationTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.acmCertificateValidation.AcmCertificateValidationTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.acmCertificateValidation.AcmCertificateValidationTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.acmCertificateValidation.AcmCertificateValidationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.acmCertificateValidation.AcmCertificateValidationTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.acmCertificateValidation.AcmCertificateValidationTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.acmCertificateValidation.AcmCertificateValidationTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.acmCertificateValidation.AcmCertificateValidationTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.acmCertificateValidation.AcmCertificateValidationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.acmCertificateValidation.AcmCertificateValidationTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.acmCertificateValidation.AcmCertificateValidationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.acmCertificateValidation.AcmCertificateValidationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.acmCertificateValidation.AcmCertificateValidationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.acmCertificateValidation.AcmCertificateValidationTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.acmCertificateValidation.AcmCertificateValidationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.acmCertificateValidation.AcmCertificateValidationTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.acmCertificateValidation.AcmCertificateValidationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.acmCertificateValidation.AcmCertificateValidationTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.acmCertificateValidation.AcmCertificateValidationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.acmCertificateValidation.AcmCertificateValidationTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.acmCertificateValidation.AcmCertificateValidationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.acmCertificateValidation.AcmCertificateValidationTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.acmCertificateValidation.AcmCertificateValidationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.acmCertificateValidation.AcmCertificateValidationTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.acmCertificateValidation.AcmCertificateValidationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.acmCertificateValidation.AcmCertificateValidationTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.acmCertificateValidation.AcmCertificateValidationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.acmCertificateValidation.AcmCertificateValidationTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.acmCertificateValidation.AcmCertificateValidationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.acmCertificateValidation.AcmCertificateValidationTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/aws-cdk.acmCertificateValidation.AcmCertificateValidationTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.acmCertificateValidation.AcmCertificateValidationTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.acmCertificateValidation.AcmCertificateValidationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.acmCertificateValidation.AcmCertificateValidationTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.acmCertificateValidation.AcmCertificateValidationTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.acmCertificateValidation.AcmCertificateValidationTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.acmCertificateValidation.AcmCertificateValidationTimeouts">AcmCertificateValidationTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.acmCertificateValidation.AcmCertificateValidationTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.acmCertificateValidation.AcmCertificateValidationTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/aws-cdk.acmCertificateValidation.AcmCertificateValidationTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/aws-cdk.acmCertificateValidation.AcmCertificateValidationTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.acmCertificateValidation.AcmCertificateValidationTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AcmCertificateValidationTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.acmCertificateValidation.AcmCertificateValidationTimeouts">AcmCertificateValidationTimeouts</a>

---



