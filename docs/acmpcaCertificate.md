# `aws_acmpca_certificate`

Refer to the Terraform Registory for docs: [`aws_acmpca_certificate`](https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/acmpca_certificate).

# `acmpcaCertificate` Submodule <a name="`acmpcaCertificate` Submodule" id="@cdktf/aws-cdk.acmpcaCertificate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AcmpcaCertificate <a name="AcmpcaCertificate" id="@cdktf/aws-cdk.acmpcaCertificate.AcmpcaCertificate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/acmpca_certificate aws_acmpca_certificate}.

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.acmpcaCertificate.AcmpcaCertificate.Initializer"></a>

```typescript
import { acmpcaCertificate } from '@cdktf/aws-cdk'

new acmpcaCertificate.AcmpcaCertificate(scope: Construct, id: string, config: AcmpcaCertificateConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.acmpcaCertificate.AcmpcaCertificate.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/aws-cdk.acmpcaCertificate.AcmpcaCertificate.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/aws-cdk.acmpcaCertificate.AcmpcaCertificate.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/aws-cdk.acmpcaCertificate.AcmpcaCertificateConfig">AcmpcaCertificateConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.acmpcaCertificate.AcmpcaCertificate.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.acmpcaCertificate.AcmpcaCertificate.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/aws-cdk.acmpcaCertificate.AcmpcaCertificate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/aws-cdk.acmpcaCertificate.AcmpcaCertificateConfig">AcmpcaCertificateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.acmpcaCertificate.AcmpcaCertificate.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/aws-cdk.acmpcaCertificate.AcmpcaCertificate.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.acmpcaCertificate.AcmpcaCertificate.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/aws-cdk.acmpcaCertificate.AcmpcaCertificate.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/aws-cdk.acmpcaCertificate.AcmpcaCertificate.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.acmpcaCertificate.AcmpcaCertificate.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/aws-cdk.acmpcaCertificate.AcmpcaCertificate.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.acmpcaCertificate.AcmpcaCertificate.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.acmpcaCertificate.AcmpcaCertificate.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.acmpcaCertificate.AcmpcaCertificate.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.acmpcaCertificate.AcmpcaCertificate.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.acmpcaCertificate.AcmpcaCertificate.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.acmpcaCertificate.AcmpcaCertificate.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.acmpcaCertificate.AcmpcaCertificate.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.acmpcaCertificate.AcmpcaCertificate.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.acmpcaCertificate.AcmpcaCertificate.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.acmpcaCertificate.AcmpcaCertificate.putValidity">putValidity</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.acmpcaCertificate.AcmpcaCertificate.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.acmpcaCertificate.AcmpcaCertificate.resetTemplateArn">resetTemplateArn</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.acmpcaCertificate.AcmpcaCertificate.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/aws-cdk.acmpcaCertificate.AcmpcaCertificate.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/aws-cdk.acmpcaCertificate.AcmpcaCertificate.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.acmpcaCertificate.AcmpcaCertificate.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/aws-cdk.acmpcaCertificate.AcmpcaCertificate.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/aws-cdk.acmpcaCertificate.AcmpcaCertificate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/aws-cdk.acmpcaCertificate.AcmpcaCertificate.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/aws-cdk.acmpcaCertificate.AcmpcaCertificate.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/aws-cdk.acmpcaCertificate.AcmpcaCertificate.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.acmpcaCertificate.AcmpcaCertificate.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.acmpcaCertificate.AcmpcaCertificate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.acmpcaCertificate.AcmpcaCertificate.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.acmpcaCertificate.AcmpcaCertificate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.acmpcaCertificate.AcmpcaCertificate.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.acmpcaCertificate.AcmpcaCertificate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.acmpcaCertificate.AcmpcaCertificate.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.acmpcaCertificate.AcmpcaCertificate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.acmpcaCertificate.AcmpcaCertificate.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.acmpcaCertificate.AcmpcaCertificate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.acmpcaCertificate.AcmpcaCertificate.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.acmpcaCertificate.AcmpcaCertificate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.acmpcaCertificate.AcmpcaCertificate.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.acmpcaCertificate.AcmpcaCertificate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.acmpcaCertificate.AcmpcaCertificate.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.acmpcaCertificate.AcmpcaCertificate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.acmpcaCertificate.AcmpcaCertificate.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.acmpcaCertificate.AcmpcaCertificate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.acmpcaCertificate.AcmpcaCertificate.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.acmpcaCertificate.AcmpcaCertificate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putValidity` <a name="putValidity" id="@cdktf/aws-cdk.acmpcaCertificate.AcmpcaCertificate.putValidity"></a>

```typescript
public putValidity(value: AcmpcaCertificateValidity): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.acmpcaCertificate.AcmpcaCertificate.putValidity.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.acmpcaCertificate.AcmpcaCertificateValidity">AcmpcaCertificateValidity</a>

---

##### `resetId` <a name="resetId" id="@cdktf/aws-cdk.acmpcaCertificate.AcmpcaCertificate.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTemplateArn` <a name="resetTemplateArn" id="@cdktf/aws-cdk.acmpcaCertificate.AcmpcaCertificate.resetTemplateArn"></a>

```typescript
public resetTemplateArn(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.acmpcaCertificate.AcmpcaCertificate.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/aws-cdk.acmpcaCertificate.AcmpcaCertificate.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.acmpcaCertificate.AcmpcaCertificate.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/aws-cdk.acmpcaCertificate.AcmpcaCertificate.isConstruct"></a>

```typescript
import { acmpcaCertificate } from '@cdktf/aws-cdk'

acmpcaCertificate.AcmpcaCertificate.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.acmpcaCertificate.AcmpcaCertificate.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/aws-cdk.acmpcaCertificate.AcmpcaCertificate.isTerraformElement"></a>

```typescript
import { acmpcaCertificate } from '@cdktf/aws-cdk'

acmpcaCertificate.AcmpcaCertificate.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.acmpcaCertificate.AcmpcaCertificate.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/aws-cdk.acmpcaCertificate.AcmpcaCertificate.isTerraformResource"></a>

```typescript
import { acmpcaCertificate } from '@cdktf/aws-cdk'

acmpcaCertificate.AcmpcaCertificate.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.acmpcaCertificate.AcmpcaCertificate.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.acmpcaCertificate.AcmpcaCertificate.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/aws-cdk.acmpcaCertificate.AcmpcaCertificate.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.acmpcaCertificate.AcmpcaCertificate.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.acmpcaCertificate.AcmpcaCertificate.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.acmpcaCertificate.AcmpcaCertificate.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.acmpcaCertificate.AcmpcaCertificate.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.acmpcaCertificate.AcmpcaCertificate.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.acmpcaCertificate.AcmpcaCertificate.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.acmpcaCertificate.AcmpcaCertificate.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.acmpcaCertificate.AcmpcaCertificate.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.acmpcaCertificate.AcmpcaCertificate.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.acmpcaCertificate.AcmpcaCertificate.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.acmpcaCertificate.AcmpcaCertificate.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.acmpcaCertificate.AcmpcaCertificate.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.acmpcaCertificate.AcmpcaCertificate.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.acmpcaCertificate.AcmpcaCertificate.property.certificate">certificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.acmpcaCertificate.AcmpcaCertificate.property.certificateChain">certificateChain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.acmpcaCertificate.AcmpcaCertificate.property.validity">validity</a></code> | <code><a href="#@cdktf/aws-cdk.acmpcaCertificate.AcmpcaCertificateValidityOutputReference">AcmpcaCertificateValidityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.acmpcaCertificate.AcmpcaCertificate.property.certificateAuthorityArnInput">certificateAuthorityArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.acmpcaCertificate.AcmpcaCertificate.property.certificateSigningRequestInput">certificateSigningRequestInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.acmpcaCertificate.AcmpcaCertificate.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.acmpcaCertificate.AcmpcaCertificate.property.signingAlgorithmInput">signingAlgorithmInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.acmpcaCertificate.AcmpcaCertificate.property.templateArnInput">templateArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.acmpcaCertificate.AcmpcaCertificate.property.validityInput">validityInput</a></code> | <code><a href="#@cdktf/aws-cdk.acmpcaCertificate.AcmpcaCertificateValidity">AcmpcaCertificateValidity</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.acmpcaCertificate.AcmpcaCertificate.property.certificateAuthorityArn">certificateAuthorityArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.acmpcaCertificate.AcmpcaCertificate.property.certificateSigningRequest">certificateSigningRequest</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.acmpcaCertificate.AcmpcaCertificate.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.acmpcaCertificate.AcmpcaCertificate.property.signingAlgorithm">signingAlgorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.acmpcaCertificate.AcmpcaCertificate.property.templateArn">templateArn</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/aws-cdk.acmpcaCertificate.AcmpcaCertificate.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/aws-cdk.acmpcaCertificate.AcmpcaCertificate.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.acmpcaCertificate.AcmpcaCertificate.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/aws-cdk.acmpcaCertificate.AcmpcaCertificate.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/aws-cdk.acmpcaCertificate.AcmpcaCertificate.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/aws-cdk.acmpcaCertificate.AcmpcaCertificate.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/aws-cdk.acmpcaCertificate.AcmpcaCertificate.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.acmpcaCertificate.AcmpcaCertificate.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.acmpcaCertificate.AcmpcaCertificate.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.acmpcaCertificate.AcmpcaCertificate.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.acmpcaCertificate.AcmpcaCertificate.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.acmpcaCertificate.AcmpcaCertificate.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.acmpcaCertificate.AcmpcaCertificate.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.acmpcaCertificate.AcmpcaCertificate.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/aws-cdk.acmpcaCertificate.AcmpcaCertificate.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="@cdktf/aws-cdk.acmpcaCertificate.AcmpcaCertificate.property.certificate"></a>

```typescript
public readonly certificate: string;
```

- *Type:* string

---

##### `certificateChain`<sup>Required</sup> <a name="certificateChain" id="@cdktf/aws-cdk.acmpcaCertificate.AcmpcaCertificate.property.certificateChain"></a>

```typescript
public readonly certificateChain: string;
```

- *Type:* string

---

##### `validity`<sup>Required</sup> <a name="validity" id="@cdktf/aws-cdk.acmpcaCertificate.AcmpcaCertificate.property.validity"></a>

```typescript
public readonly validity: AcmpcaCertificateValidityOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.acmpcaCertificate.AcmpcaCertificateValidityOutputReference">AcmpcaCertificateValidityOutputReference</a>

---

##### `certificateAuthorityArnInput`<sup>Optional</sup> <a name="certificateAuthorityArnInput" id="@cdktf/aws-cdk.acmpcaCertificate.AcmpcaCertificate.property.certificateAuthorityArnInput"></a>

```typescript
public readonly certificateAuthorityArnInput: string;
```

- *Type:* string

---

##### `certificateSigningRequestInput`<sup>Optional</sup> <a name="certificateSigningRequestInput" id="@cdktf/aws-cdk.acmpcaCertificate.AcmpcaCertificate.property.certificateSigningRequestInput"></a>

```typescript
public readonly certificateSigningRequestInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/aws-cdk.acmpcaCertificate.AcmpcaCertificate.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `signingAlgorithmInput`<sup>Optional</sup> <a name="signingAlgorithmInput" id="@cdktf/aws-cdk.acmpcaCertificate.AcmpcaCertificate.property.signingAlgorithmInput"></a>

```typescript
public readonly signingAlgorithmInput: string;
```

- *Type:* string

---

##### `templateArnInput`<sup>Optional</sup> <a name="templateArnInput" id="@cdktf/aws-cdk.acmpcaCertificate.AcmpcaCertificate.property.templateArnInput"></a>

```typescript
public readonly templateArnInput: string;
```

- *Type:* string

---

##### `validityInput`<sup>Optional</sup> <a name="validityInput" id="@cdktf/aws-cdk.acmpcaCertificate.AcmpcaCertificate.property.validityInput"></a>

```typescript
public readonly validityInput: AcmpcaCertificateValidity;
```

- *Type:* <a href="#@cdktf/aws-cdk.acmpcaCertificate.AcmpcaCertificateValidity">AcmpcaCertificateValidity</a>

---

##### `certificateAuthorityArn`<sup>Required</sup> <a name="certificateAuthorityArn" id="@cdktf/aws-cdk.acmpcaCertificate.AcmpcaCertificate.property.certificateAuthorityArn"></a>

```typescript
public readonly certificateAuthorityArn: string;
```

- *Type:* string

---

##### `certificateSigningRequest`<sup>Required</sup> <a name="certificateSigningRequest" id="@cdktf/aws-cdk.acmpcaCertificate.AcmpcaCertificate.property.certificateSigningRequest"></a>

```typescript
public readonly certificateSigningRequest: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.acmpcaCertificate.AcmpcaCertificate.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `signingAlgorithm`<sup>Required</sup> <a name="signingAlgorithm" id="@cdktf/aws-cdk.acmpcaCertificate.AcmpcaCertificate.property.signingAlgorithm"></a>

```typescript
public readonly signingAlgorithm: string;
```

- *Type:* string

---

##### `templateArn`<sup>Required</sup> <a name="templateArn" id="@cdktf/aws-cdk.acmpcaCertificate.AcmpcaCertificate.property.templateArn"></a>

```typescript
public readonly templateArn: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.acmpcaCertificate.AcmpcaCertificate.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/aws-cdk.acmpcaCertificate.AcmpcaCertificate.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AcmpcaCertificateConfig <a name="AcmpcaCertificateConfig" id="@cdktf/aws-cdk.acmpcaCertificate.AcmpcaCertificateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.acmpcaCertificate.AcmpcaCertificateConfig.Initializer"></a>

```typescript
import { acmpcaCertificate } from '@cdktf/aws-cdk'

const acmpcaCertificateConfig: acmpcaCertificate.AcmpcaCertificateConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.acmpcaCertificate.AcmpcaCertificateConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.acmpcaCertificate.AcmpcaCertificateConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.acmpcaCertificate.AcmpcaCertificateConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.acmpcaCertificate.AcmpcaCertificateConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.acmpcaCertificate.AcmpcaCertificateConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.acmpcaCertificate.AcmpcaCertificateConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.acmpcaCertificate.AcmpcaCertificateConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.acmpcaCertificate.AcmpcaCertificateConfig.property.certificateAuthorityArn">certificateAuthorityArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/acmpca_certificate#certificate_authority_arn AcmpcaCertificate#certificate_authority_arn}. |
| <code><a href="#@cdktf/aws-cdk.acmpcaCertificate.AcmpcaCertificateConfig.property.certificateSigningRequest">certificateSigningRequest</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/acmpca_certificate#certificate_signing_request AcmpcaCertificate#certificate_signing_request}. |
| <code><a href="#@cdktf/aws-cdk.acmpcaCertificate.AcmpcaCertificateConfig.property.signingAlgorithm">signingAlgorithm</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/acmpca_certificate#signing_algorithm AcmpcaCertificate#signing_algorithm}. |
| <code><a href="#@cdktf/aws-cdk.acmpcaCertificate.AcmpcaCertificateConfig.property.validity">validity</a></code> | <code><a href="#@cdktf/aws-cdk.acmpcaCertificate.AcmpcaCertificateValidity">AcmpcaCertificateValidity</a></code> | validity block. |
| <code><a href="#@cdktf/aws-cdk.acmpcaCertificate.AcmpcaCertificateConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/acmpca_certificate#id AcmpcaCertificate#id}. |
| <code><a href="#@cdktf/aws-cdk.acmpcaCertificate.AcmpcaCertificateConfig.property.templateArn">templateArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/acmpca_certificate#template_arn AcmpcaCertificate#template_arn}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.acmpcaCertificate.AcmpcaCertificateConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.acmpcaCertificate.AcmpcaCertificateConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.acmpcaCertificate.AcmpcaCertificateConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.acmpcaCertificate.AcmpcaCertificateConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.acmpcaCertificate.AcmpcaCertificateConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.acmpcaCertificate.AcmpcaCertificateConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.acmpcaCertificate.AcmpcaCertificateConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `certificateAuthorityArn`<sup>Required</sup> <a name="certificateAuthorityArn" id="@cdktf/aws-cdk.acmpcaCertificate.AcmpcaCertificateConfig.property.certificateAuthorityArn"></a>

```typescript
public readonly certificateAuthorityArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/acmpca_certificate#certificate_authority_arn AcmpcaCertificate#certificate_authority_arn}.

---

##### `certificateSigningRequest`<sup>Required</sup> <a name="certificateSigningRequest" id="@cdktf/aws-cdk.acmpcaCertificate.AcmpcaCertificateConfig.property.certificateSigningRequest"></a>

```typescript
public readonly certificateSigningRequest: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/acmpca_certificate#certificate_signing_request AcmpcaCertificate#certificate_signing_request}.

---

##### `signingAlgorithm`<sup>Required</sup> <a name="signingAlgorithm" id="@cdktf/aws-cdk.acmpcaCertificate.AcmpcaCertificateConfig.property.signingAlgorithm"></a>

```typescript
public readonly signingAlgorithm: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/acmpca_certificate#signing_algorithm AcmpcaCertificate#signing_algorithm}.

---

##### `validity`<sup>Required</sup> <a name="validity" id="@cdktf/aws-cdk.acmpcaCertificate.AcmpcaCertificateConfig.property.validity"></a>

```typescript
public readonly validity: AcmpcaCertificateValidity;
```

- *Type:* <a href="#@cdktf/aws-cdk.acmpcaCertificate.AcmpcaCertificateValidity">AcmpcaCertificateValidity</a>

validity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/acmpca_certificate#validity AcmpcaCertificate#validity}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/aws-cdk.acmpcaCertificate.AcmpcaCertificateConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/acmpca_certificate#id AcmpcaCertificate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `templateArn`<sup>Optional</sup> <a name="templateArn" id="@cdktf/aws-cdk.acmpcaCertificate.AcmpcaCertificateConfig.property.templateArn"></a>

```typescript
public readonly templateArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/acmpca_certificate#template_arn AcmpcaCertificate#template_arn}.

---

### AcmpcaCertificateValidity <a name="AcmpcaCertificateValidity" id="@cdktf/aws-cdk.acmpcaCertificate.AcmpcaCertificateValidity"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.acmpcaCertificate.AcmpcaCertificateValidity.Initializer"></a>

```typescript
import { acmpcaCertificate } from '@cdktf/aws-cdk'

const acmpcaCertificateValidity: acmpcaCertificate.AcmpcaCertificateValidity = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.acmpcaCertificate.AcmpcaCertificateValidity.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/acmpca_certificate#type AcmpcaCertificate#type}. |
| <code><a href="#@cdktf/aws-cdk.acmpcaCertificate.AcmpcaCertificateValidity.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/acmpca_certificate#value AcmpcaCertificate#value}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/aws-cdk.acmpcaCertificate.AcmpcaCertificateValidity.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/acmpca_certificate#type AcmpcaCertificate#type}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.acmpcaCertificate.AcmpcaCertificateValidity.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/acmpca_certificate#value AcmpcaCertificate#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### AcmpcaCertificateValidityOutputReference <a name="AcmpcaCertificateValidityOutputReference" id="@cdktf/aws-cdk.acmpcaCertificate.AcmpcaCertificateValidityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.Initializer"></a>

```typescript
import { acmpcaCertificate } from '@cdktf/aws-cdk'

new acmpcaCertificate.AcmpcaCertificateValidityOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.acmpcaCertificate.AcmpcaCertificateValidity">AcmpcaCertificateValidity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/aws-cdk.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/aws-cdk.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/aws-cdk.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.acmpcaCertificate.AcmpcaCertificateValidityOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AcmpcaCertificateValidity;
```

- *Type:* <a href="#@cdktf/aws-cdk.acmpcaCertificate.AcmpcaCertificateValidity">AcmpcaCertificateValidity</a>

---



