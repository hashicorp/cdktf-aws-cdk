# `acmCertificate` Submodule <a name="`acmCertificate` Submodule" id="@cdktf/aws-cdk.acmCertificate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AcmCertificate <a name="AcmCertificate" id="@cdktf/aws-cdk.acmCertificate.AcmCertificate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/acm_certificate aws_acm_certificate}.

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.acmCertificate.AcmCertificate.Initializer"></a>

```typescript
import { acmCertificate } from '@cdktf/aws-cdk'

new acmCertificate.AcmCertificate(scope: Construct, id: string, config?: AcmCertificateConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.acmCertificate.AcmCertificate.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/aws-cdk.acmCertificate.AcmCertificate.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/aws-cdk.acmCertificate.AcmCertificate.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/aws-cdk.acmCertificate.AcmCertificateConfig">AcmCertificateConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.acmCertificate.AcmCertificate.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.acmCertificate.AcmCertificate.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/aws-cdk.acmCertificate.AcmCertificate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/aws-cdk.acmCertificate.AcmCertificateConfig">AcmCertificateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.acmCertificate.AcmCertificate.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/aws-cdk.acmCertificate.AcmCertificate.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.acmCertificate.AcmCertificate.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/aws-cdk.acmCertificate.AcmCertificate.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/aws-cdk.acmCertificate.AcmCertificate.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.acmCertificate.AcmCertificate.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.acmCertificate.AcmCertificate.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/aws-cdk.acmCertificate.AcmCertificate.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/aws-cdk.acmCertificate.AcmCertificate.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.acmCertificate.AcmCertificate.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.acmCertificate.AcmCertificate.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.acmCertificate.AcmCertificate.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.acmCertificate.AcmCertificate.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.acmCertificate.AcmCertificate.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.acmCertificate.AcmCertificate.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.acmCertificate.AcmCertificate.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.acmCertificate.AcmCertificate.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.acmCertificate.AcmCertificate.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.acmCertificate.AcmCertificate.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.acmCertificate.AcmCertificate.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.acmCertificate.AcmCertificate.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/aws-cdk.acmCertificate.AcmCertificate.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/aws-cdk.acmCertificate.AcmCertificate.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/aws-cdk.acmCertificate.AcmCertificate.putOptions">putOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.acmCertificate.AcmCertificate.resetCertificateAuthorityArn">resetCertificateAuthorityArn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.acmCertificate.AcmCertificate.resetCertificateBody">resetCertificateBody</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.acmCertificate.AcmCertificate.resetCertificateChain">resetCertificateChain</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.acmCertificate.AcmCertificate.resetDomainName">resetDomainName</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.acmCertificate.AcmCertificate.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.acmCertificate.AcmCertificate.resetOptions">resetOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.acmCertificate.AcmCertificate.resetPrivateKey">resetPrivateKey</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.acmCertificate.AcmCertificate.resetSubjectAlternativeNames">resetSubjectAlternativeNames</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.acmCertificate.AcmCertificate.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.acmCertificate.AcmCertificate.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.acmCertificate.AcmCertificate.resetValidationMethod">resetValidationMethod</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.acmCertificate.AcmCertificate.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/aws-cdk.acmCertificate.AcmCertificate.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/aws-cdk.acmCertificate.AcmCertificate.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.acmCertificate.AcmCertificate.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/aws-cdk.acmCertificate.AcmCertificate.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/aws-cdk.acmCertificate.AcmCertificate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/aws-cdk.acmCertificate.AcmCertificate.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/aws-cdk.acmCertificate.AcmCertificate.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/aws-cdk.acmCertificate.AcmCertificate.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/aws-cdk.acmCertificate.AcmCertificate.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/aws-cdk.acmCertificate.AcmCertificate.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/aws-cdk.acmCertificate.AcmCertificate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.acmCertificate.AcmCertificate.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.acmCertificate.AcmCertificate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.acmCertificate.AcmCertificate.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.acmCertificate.AcmCertificate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.acmCertificate.AcmCertificate.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.acmCertificate.AcmCertificate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.acmCertificate.AcmCertificate.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.acmCertificate.AcmCertificate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.acmCertificate.AcmCertificate.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.acmCertificate.AcmCertificate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.acmCertificate.AcmCertificate.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.acmCertificate.AcmCertificate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.acmCertificate.AcmCertificate.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.acmCertificate.AcmCertificate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.acmCertificate.AcmCertificate.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.acmCertificate.AcmCertificate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.acmCertificate.AcmCertificate.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.acmCertificate.AcmCertificate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/aws-cdk.acmCertificate.AcmCertificate.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/aws-cdk.acmCertificate.AcmCertificate.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.acmCertificate.AcmCertificate.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.acmCertificate.AcmCertificate.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.acmCertificate.AcmCertificate.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.acmCertificate.AcmCertificate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/aws-cdk.acmCertificate.AcmCertificate.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.acmCertificate.AcmCertificate.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/aws-cdk.acmCertificate.AcmCertificate.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/aws-cdk.acmCertificate.AcmCertificate.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/aws-cdk.acmCertificate.AcmCertificate.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/aws-cdk.acmCertificate.AcmCertificate.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.acmCertificate.AcmCertificate.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putOptions` <a name="putOptions" id="@cdktf/aws-cdk.acmCertificate.AcmCertificate.putOptions"></a>

```typescript
public putOptions(value: AcmCertificateOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.acmCertificate.AcmCertificate.putOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.acmCertificate.AcmCertificateOptions">AcmCertificateOptions</a>

---

##### `resetCertificateAuthorityArn` <a name="resetCertificateAuthorityArn" id="@cdktf/aws-cdk.acmCertificate.AcmCertificate.resetCertificateAuthorityArn"></a>

```typescript
public resetCertificateAuthorityArn(): void
```

##### `resetCertificateBody` <a name="resetCertificateBody" id="@cdktf/aws-cdk.acmCertificate.AcmCertificate.resetCertificateBody"></a>

```typescript
public resetCertificateBody(): void
```

##### `resetCertificateChain` <a name="resetCertificateChain" id="@cdktf/aws-cdk.acmCertificate.AcmCertificate.resetCertificateChain"></a>

```typescript
public resetCertificateChain(): void
```

##### `resetDomainName` <a name="resetDomainName" id="@cdktf/aws-cdk.acmCertificate.AcmCertificate.resetDomainName"></a>

```typescript
public resetDomainName(): void
```

##### `resetId` <a name="resetId" id="@cdktf/aws-cdk.acmCertificate.AcmCertificate.resetId"></a>

```typescript
public resetId(): void
```

##### `resetOptions` <a name="resetOptions" id="@cdktf/aws-cdk.acmCertificate.AcmCertificate.resetOptions"></a>

```typescript
public resetOptions(): void
```

##### `resetPrivateKey` <a name="resetPrivateKey" id="@cdktf/aws-cdk.acmCertificate.AcmCertificate.resetPrivateKey"></a>

```typescript
public resetPrivateKey(): void
```

##### `resetSubjectAlternativeNames` <a name="resetSubjectAlternativeNames" id="@cdktf/aws-cdk.acmCertificate.AcmCertificate.resetSubjectAlternativeNames"></a>

```typescript
public resetSubjectAlternativeNames(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/aws-cdk.acmCertificate.AcmCertificate.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/aws-cdk.acmCertificate.AcmCertificate.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

##### `resetValidationMethod` <a name="resetValidationMethod" id="@cdktf/aws-cdk.acmCertificate.AcmCertificate.resetValidationMethod"></a>

```typescript
public resetValidationMethod(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.acmCertificate.AcmCertificate.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/aws-cdk.acmCertificate.AcmCertificate.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.acmCertificate.AcmCertificate.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.acmCertificate.AcmCertificate.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a AcmCertificate resource upon running "cdktf plan <stack-name>". |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@cdktf/aws-cdk.acmCertificate.AcmCertificate.isConstruct"></a>

```typescript
import { acmCertificate } from '@cdktf/aws-cdk'

acmCertificate.AcmCertificate.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.acmCertificate.AcmCertificate.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/aws-cdk.acmCertificate.AcmCertificate.isTerraformElement"></a>

```typescript
import { acmCertificate } from '@cdktf/aws-cdk'

acmCertificate.AcmCertificate.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.acmCertificate.AcmCertificate.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/aws-cdk.acmCertificate.AcmCertificate.isTerraformResource"></a>

```typescript
import { acmCertificate } from '@cdktf/aws-cdk'

acmCertificate.AcmCertificate.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.acmCertificate.AcmCertificate.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/aws-cdk.acmCertificate.AcmCertificate.generateConfigForImport"></a>

```typescript
import { acmCertificate } from '@cdktf/aws-cdk'

acmCertificate.AcmCertificate.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a AcmCertificate resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.acmCertificate.AcmCertificate.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/aws-cdk.acmCertificate.AcmCertificate.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AcmCertificate to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/aws-cdk.acmCertificate.AcmCertificate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AcmCertificate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/acm_certificate#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.acmCertificate.AcmCertificate.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the AcmCertificate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.acmCertificate.AcmCertificate.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/aws-cdk.acmCertificate.AcmCertificate.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.acmCertificate.AcmCertificate.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.acmCertificate.AcmCertificate.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.acmCertificate.AcmCertificate.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.acmCertificate.AcmCertificate.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.acmCertificate.AcmCertificate.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.acmCertificate.AcmCertificate.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.acmCertificate.AcmCertificate.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.acmCertificate.AcmCertificate.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.acmCertificate.AcmCertificate.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.acmCertificate.AcmCertificate.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.acmCertificate.AcmCertificate.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.acmCertificate.AcmCertificate.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.acmCertificate.AcmCertificate.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.acmCertificate.AcmCertificate.property.domainValidationOptions">domainValidationOptions</a></code> | <code><a href="#@cdktf/aws-cdk.acmCertificate.AcmCertificateDomainValidationOptionsList">AcmCertificateDomainValidationOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.acmCertificate.AcmCertificate.property.options">options</a></code> | <code><a href="#@cdktf/aws-cdk.acmCertificate.AcmCertificateOptionsOutputReference">AcmCertificateOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.acmCertificate.AcmCertificate.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.acmCertificate.AcmCertificate.property.validationEmails">validationEmails</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.acmCertificate.AcmCertificate.property.certificateAuthorityArnInput">certificateAuthorityArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.acmCertificate.AcmCertificate.property.certificateBodyInput">certificateBodyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.acmCertificate.AcmCertificate.property.certificateChainInput">certificateChainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.acmCertificate.AcmCertificate.property.domainNameInput">domainNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.acmCertificate.AcmCertificate.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.acmCertificate.AcmCertificate.property.optionsInput">optionsInput</a></code> | <code><a href="#@cdktf/aws-cdk.acmCertificate.AcmCertificateOptions">AcmCertificateOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.acmCertificate.AcmCertificate.property.privateKeyInput">privateKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.acmCertificate.AcmCertificate.property.subjectAlternativeNamesInput">subjectAlternativeNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.acmCertificate.AcmCertificate.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.acmCertificate.AcmCertificate.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.acmCertificate.AcmCertificate.property.validationMethodInput">validationMethodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.acmCertificate.AcmCertificate.property.certificateAuthorityArn">certificateAuthorityArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.acmCertificate.AcmCertificate.property.certificateBody">certificateBody</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.acmCertificate.AcmCertificate.property.certificateChain">certificateChain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.acmCertificate.AcmCertificate.property.domainName">domainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.acmCertificate.AcmCertificate.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.acmCertificate.AcmCertificate.property.privateKey">privateKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.acmCertificate.AcmCertificate.property.subjectAlternativeNames">subjectAlternativeNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.acmCertificate.AcmCertificate.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.acmCertificate.AcmCertificate.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.acmCertificate.AcmCertificate.property.validationMethod">validationMethod</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/aws-cdk.acmCertificate.AcmCertificate.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/aws-cdk.acmCertificate.AcmCertificate.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.acmCertificate.AcmCertificate.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/aws-cdk.acmCertificate.AcmCertificate.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/aws-cdk.acmCertificate.AcmCertificate.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/aws-cdk.acmCertificate.AcmCertificate.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/aws-cdk.acmCertificate.AcmCertificate.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.acmCertificate.AcmCertificate.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.acmCertificate.AcmCertificate.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.acmCertificate.AcmCertificate.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.acmCertificate.AcmCertificate.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.acmCertificate.AcmCertificate.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.acmCertificate.AcmCertificate.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.acmCertificate.AcmCertificate.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/aws-cdk.acmCertificate.AcmCertificate.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `domainValidationOptions`<sup>Required</sup> <a name="domainValidationOptions" id="@cdktf/aws-cdk.acmCertificate.AcmCertificate.property.domainValidationOptions"></a>

```typescript
public readonly domainValidationOptions: AcmCertificateDomainValidationOptionsList;
```

- *Type:* <a href="#@cdktf/aws-cdk.acmCertificate.AcmCertificateDomainValidationOptionsList">AcmCertificateDomainValidationOptionsList</a>

---

##### `options`<sup>Required</sup> <a name="options" id="@cdktf/aws-cdk.acmCertificate.AcmCertificate.property.options"></a>

```typescript
public readonly options: AcmCertificateOptionsOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.acmCertificate.AcmCertificateOptionsOutputReference">AcmCertificateOptionsOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/aws-cdk.acmCertificate.AcmCertificate.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `validationEmails`<sup>Required</sup> <a name="validationEmails" id="@cdktf/aws-cdk.acmCertificate.AcmCertificate.property.validationEmails"></a>

```typescript
public readonly validationEmails: string[];
```

- *Type:* string[]

---

##### `certificateAuthorityArnInput`<sup>Optional</sup> <a name="certificateAuthorityArnInput" id="@cdktf/aws-cdk.acmCertificate.AcmCertificate.property.certificateAuthorityArnInput"></a>

```typescript
public readonly certificateAuthorityArnInput: string;
```

- *Type:* string

---

##### `certificateBodyInput`<sup>Optional</sup> <a name="certificateBodyInput" id="@cdktf/aws-cdk.acmCertificate.AcmCertificate.property.certificateBodyInput"></a>

```typescript
public readonly certificateBodyInput: string;
```

- *Type:* string

---

##### `certificateChainInput`<sup>Optional</sup> <a name="certificateChainInput" id="@cdktf/aws-cdk.acmCertificate.AcmCertificate.property.certificateChainInput"></a>

```typescript
public readonly certificateChainInput: string;
```

- *Type:* string

---

##### `domainNameInput`<sup>Optional</sup> <a name="domainNameInput" id="@cdktf/aws-cdk.acmCertificate.AcmCertificate.property.domainNameInput"></a>

```typescript
public readonly domainNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/aws-cdk.acmCertificate.AcmCertificate.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `optionsInput`<sup>Optional</sup> <a name="optionsInput" id="@cdktf/aws-cdk.acmCertificate.AcmCertificate.property.optionsInput"></a>

```typescript
public readonly optionsInput: AcmCertificateOptions;
```

- *Type:* <a href="#@cdktf/aws-cdk.acmCertificate.AcmCertificateOptions">AcmCertificateOptions</a>

---

##### `privateKeyInput`<sup>Optional</sup> <a name="privateKeyInput" id="@cdktf/aws-cdk.acmCertificate.AcmCertificate.property.privateKeyInput"></a>

```typescript
public readonly privateKeyInput: string;
```

- *Type:* string

---

##### `subjectAlternativeNamesInput`<sup>Optional</sup> <a name="subjectAlternativeNamesInput" id="@cdktf/aws-cdk.acmCertificate.AcmCertificate.property.subjectAlternativeNamesInput"></a>

```typescript
public readonly subjectAlternativeNamesInput: string[];
```

- *Type:* string[]

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/aws-cdk.acmCertificate.AcmCertificate.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/aws-cdk.acmCertificate.AcmCertificate.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `validationMethodInput`<sup>Optional</sup> <a name="validationMethodInput" id="@cdktf/aws-cdk.acmCertificate.AcmCertificate.property.validationMethodInput"></a>

```typescript
public readonly validationMethodInput: string;
```

- *Type:* string

---

##### `certificateAuthorityArn`<sup>Required</sup> <a name="certificateAuthorityArn" id="@cdktf/aws-cdk.acmCertificate.AcmCertificate.property.certificateAuthorityArn"></a>

```typescript
public readonly certificateAuthorityArn: string;
```

- *Type:* string

---

##### `certificateBody`<sup>Required</sup> <a name="certificateBody" id="@cdktf/aws-cdk.acmCertificate.AcmCertificate.property.certificateBody"></a>

```typescript
public readonly certificateBody: string;
```

- *Type:* string

---

##### `certificateChain`<sup>Required</sup> <a name="certificateChain" id="@cdktf/aws-cdk.acmCertificate.AcmCertificate.property.certificateChain"></a>

```typescript
public readonly certificateChain: string;
```

- *Type:* string

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktf/aws-cdk.acmCertificate.AcmCertificate.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.acmCertificate.AcmCertificate.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `privateKey`<sup>Required</sup> <a name="privateKey" id="@cdktf/aws-cdk.acmCertificate.AcmCertificate.property.privateKey"></a>

```typescript
public readonly privateKey: string;
```

- *Type:* string

---

##### `subjectAlternativeNames`<sup>Required</sup> <a name="subjectAlternativeNames" id="@cdktf/aws-cdk.acmCertificate.AcmCertificate.property.subjectAlternativeNames"></a>

```typescript
public readonly subjectAlternativeNames: string[];
```

- *Type:* string[]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/aws-cdk.acmCertificate.AcmCertificate.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/aws-cdk.acmCertificate.AcmCertificate.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `validationMethod`<sup>Required</sup> <a name="validationMethod" id="@cdktf/aws-cdk.acmCertificate.AcmCertificate.property.validationMethod"></a>

```typescript
public readonly validationMethod: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.acmCertificate.AcmCertificate.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/aws-cdk.acmCertificate.AcmCertificate.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AcmCertificateConfig <a name="AcmCertificateConfig" id="@cdktf/aws-cdk.acmCertificate.AcmCertificateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.acmCertificate.AcmCertificateConfig.Initializer"></a>

```typescript
import { acmCertificate } from '@cdktf/aws-cdk'

const acmCertificateConfig: acmCertificate.AcmCertificateConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.acmCertificate.AcmCertificateConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.acmCertificate.AcmCertificateConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.acmCertificate.AcmCertificateConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.acmCertificate.AcmCertificateConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.acmCertificate.AcmCertificateConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.acmCertificate.AcmCertificateConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.acmCertificate.AcmCertificateConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.acmCertificate.AcmCertificateConfig.property.certificateAuthorityArn">certificateAuthorityArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/acm_certificate#certificate_authority_arn AcmCertificate#certificate_authority_arn}. |
| <code><a href="#@cdktf/aws-cdk.acmCertificate.AcmCertificateConfig.property.certificateBody">certificateBody</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/acm_certificate#certificate_body AcmCertificate#certificate_body}. |
| <code><a href="#@cdktf/aws-cdk.acmCertificate.AcmCertificateConfig.property.certificateChain">certificateChain</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/acm_certificate#certificate_chain AcmCertificate#certificate_chain}. |
| <code><a href="#@cdktf/aws-cdk.acmCertificate.AcmCertificateConfig.property.domainName">domainName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/acm_certificate#domain_name AcmCertificate#domain_name}. |
| <code><a href="#@cdktf/aws-cdk.acmCertificate.AcmCertificateConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/acm_certificate#id AcmCertificate#id}. |
| <code><a href="#@cdktf/aws-cdk.acmCertificate.AcmCertificateConfig.property.options">options</a></code> | <code><a href="#@cdktf/aws-cdk.acmCertificate.AcmCertificateOptions">AcmCertificateOptions</a></code> | options block. |
| <code><a href="#@cdktf/aws-cdk.acmCertificate.AcmCertificateConfig.property.privateKey">privateKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/acm_certificate#private_key AcmCertificate#private_key}. |
| <code><a href="#@cdktf/aws-cdk.acmCertificate.AcmCertificateConfig.property.subjectAlternativeNames">subjectAlternativeNames</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/acm_certificate#subject_alternative_names AcmCertificate#subject_alternative_names}. |
| <code><a href="#@cdktf/aws-cdk.acmCertificate.AcmCertificateConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/acm_certificate#tags AcmCertificate#tags}. |
| <code><a href="#@cdktf/aws-cdk.acmCertificate.AcmCertificateConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/acm_certificate#tags_all AcmCertificate#tags_all}. |
| <code><a href="#@cdktf/aws-cdk.acmCertificate.AcmCertificateConfig.property.validationMethod">validationMethod</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/acm_certificate#validation_method AcmCertificate#validation_method}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.acmCertificate.AcmCertificateConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.acmCertificate.AcmCertificateConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.acmCertificate.AcmCertificateConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.acmCertificate.AcmCertificateConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.acmCertificate.AcmCertificateConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.acmCertificate.AcmCertificateConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.acmCertificate.AcmCertificateConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `certificateAuthorityArn`<sup>Optional</sup> <a name="certificateAuthorityArn" id="@cdktf/aws-cdk.acmCertificate.AcmCertificateConfig.property.certificateAuthorityArn"></a>

```typescript
public readonly certificateAuthorityArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/acm_certificate#certificate_authority_arn AcmCertificate#certificate_authority_arn}.

---

##### `certificateBody`<sup>Optional</sup> <a name="certificateBody" id="@cdktf/aws-cdk.acmCertificate.AcmCertificateConfig.property.certificateBody"></a>

```typescript
public readonly certificateBody: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/acm_certificate#certificate_body AcmCertificate#certificate_body}.

---

##### `certificateChain`<sup>Optional</sup> <a name="certificateChain" id="@cdktf/aws-cdk.acmCertificate.AcmCertificateConfig.property.certificateChain"></a>

```typescript
public readonly certificateChain: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/acm_certificate#certificate_chain AcmCertificate#certificate_chain}.

---

##### `domainName`<sup>Optional</sup> <a name="domainName" id="@cdktf/aws-cdk.acmCertificate.AcmCertificateConfig.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/acm_certificate#domain_name AcmCertificate#domain_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/aws-cdk.acmCertificate.AcmCertificateConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/acm_certificate#id AcmCertificate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `options`<sup>Optional</sup> <a name="options" id="@cdktf/aws-cdk.acmCertificate.AcmCertificateConfig.property.options"></a>

```typescript
public readonly options: AcmCertificateOptions;
```

- *Type:* <a href="#@cdktf/aws-cdk.acmCertificate.AcmCertificateOptions">AcmCertificateOptions</a>

options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/acm_certificate#options AcmCertificate#options}

---

##### `privateKey`<sup>Optional</sup> <a name="privateKey" id="@cdktf/aws-cdk.acmCertificate.AcmCertificateConfig.property.privateKey"></a>

```typescript
public readonly privateKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/acm_certificate#private_key AcmCertificate#private_key}.

---

##### `subjectAlternativeNames`<sup>Optional</sup> <a name="subjectAlternativeNames" id="@cdktf/aws-cdk.acmCertificate.AcmCertificateConfig.property.subjectAlternativeNames"></a>

```typescript
public readonly subjectAlternativeNames: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/acm_certificate#subject_alternative_names AcmCertificate#subject_alternative_names}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/aws-cdk.acmCertificate.AcmCertificateConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/acm_certificate#tags AcmCertificate#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/aws-cdk.acmCertificate.AcmCertificateConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/acm_certificate#tags_all AcmCertificate#tags_all}.

---

##### `validationMethod`<sup>Optional</sup> <a name="validationMethod" id="@cdktf/aws-cdk.acmCertificate.AcmCertificateConfig.property.validationMethod"></a>

```typescript
public readonly validationMethod: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/acm_certificate#validation_method AcmCertificate#validation_method}.

---

### AcmCertificateDomainValidationOptions <a name="AcmCertificateDomainValidationOptions" id="@cdktf/aws-cdk.acmCertificate.AcmCertificateDomainValidationOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.acmCertificate.AcmCertificateDomainValidationOptions.Initializer"></a>

```typescript
import { acmCertificate } from '@cdktf/aws-cdk'

const acmCertificateDomainValidationOptions: acmCertificate.AcmCertificateDomainValidationOptions = { ... }
```


### AcmCertificateOptions <a name="AcmCertificateOptions" id="@cdktf/aws-cdk.acmCertificate.AcmCertificateOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.acmCertificate.AcmCertificateOptions.Initializer"></a>

```typescript
import { acmCertificate } from '@cdktf/aws-cdk'

const acmCertificateOptions: acmCertificate.AcmCertificateOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.acmCertificate.AcmCertificateOptions.property.certificateTransparencyLoggingPreference">certificateTransparencyLoggingPreference</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/acm_certificate#certificate_transparency_logging_preference AcmCertificate#certificate_transparency_logging_preference}. |

---

##### `certificateTransparencyLoggingPreference`<sup>Optional</sup> <a name="certificateTransparencyLoggingPreference" id="@cdktf/aws-cdk.acmCertificate.AcmCertificateOptions.property.certificateTransparencyLoggingPreference"></a>

```typescript
public readonly certificateTransparencyLoggingPreference: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/acm_certificate#certificate_transparency_logging_preference AcmCertificate#certificate_transparency_logging_preference}.

---

## Classes <a name="Classes" id="Classes"></a>

### AcmCertificateDomainValidationOptionsList <a name="AcmCertificateDomainValidationOptionsList" id="@cdktf/aws-cdk.acmCertificate.AcmCertificateDomainValidationOptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.acmCertificate.AcmCertificateDomainValidationOptionsList.Initializer"></a>

```typescript
import { acmCertificate } from '@cdktf/aws-cdk'

new acmCertificate.AcmCertificateDomainValidationOptionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.acmCertificate.AcmCertificateDomainValidationOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.acmCertificate.AcmCertificateDomainValidationOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.acmCertificate.AcmCertificateDomainValidationOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.acmCertificate.AcmCertificateDomainValidationOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.acmCertificate.AcmCertificateDomainValidationOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/aws-cdk.acmCertificate.AcmCertificateDomainValidationOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.acmCertificate.AcmCertificateDomainValidationOptionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/aws-cdk.acmCertificate.AcmCertificateDomainValidationOptionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.acmCertificate.AcmCertificateDomainValidationOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.acmCertificate.AcmCertificateDomainValidationOptionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.acmCertificate.AcmCertificateDomainValidationOptionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/aws-cdk.acmCertificate.AcmCertificateDomainValidationOptionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/aws-cdk.acmCertificate.AcmCertificateDomainValidationOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.acmCertificate.AcmCertificateDomainValidationOptionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.acmCertificate.AcmCertificateDomainValidationOptionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.acmCertificate.AcmCertificateDomainValidationOptionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.acmCertificate.AcmCertificateDomainValidationOptionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/aws-cdk.acmCertificate.AcmCertificateDomainValidationOptionsList.get"></a>

```typescript
public get(index: number): AcmCertificateDomainValidationOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/aws-cdk.acmCertificate.AcmCertificateDomainValidationOptionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.acmCertificate.AcmCertificateDomainValidationOptionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.acmCertificate.AcmCertificateDomainValidationOptionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.acmCertificate.AcmCertificateDomainValidationOptionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.acmCertificate.AcmCertificateDomainValidationOptionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### AcmCertificateDomainValidationOptionsOutputReference <a name="AcmCertificateDomainValidationOptionsOutputReference" id="@cdktf/aws-cdk.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.Initializer"></a>

```typescript
import { acmCertificate } from '@cdktf/aws-cdk'

new acmCertificate.AcmCertificateDomainValidationOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/aws-cdk.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/aws-cdk.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/aws-cdk.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.property.domainName">domainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.property.resourceRecordName">resourceRecordName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.property.resourceRecordType">resourceRecordType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.property.resourceRecordValue">resourceRecordValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.acmCertificate.AcmCertificateDomainValidationOptions">AcmCertificateDomainValidationOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktf/aws-cdk.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

---

##### `resourceRecordName`<sup>Required</sup> <a name="resourceRecordName" id="@cdktf/aws-cdk.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.property.resourceRecordName"></a>

```typescript
public readonly resourceRecordName: string;
```

- *Type:* string

---

##### `resourceRecordType`<sup>Required</sup> <a name="resourceRecordType" id="@cdktf/aws-cdk.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.property.resourceRecordType"></a>

```typescript
public readonly resourceRecordType: string;
```

- *Type:* string

---

##### `resourceRecordValue`<sup>Required</sup> <a name="resourceRecordValue" id="@cdktf/aws-cdk.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.property.resourceRecordValue"></a>

```typescript
public readonly resourceRecordValue: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.acmCertificate.AcmCertificateDomainValidationOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AcmCertificateDomainValidationOptions;
```

- *Type:* <a href="#@cdktf/aws-cdk.acmCertificate.AcmCertificateDomainValidationOptions">AcmCertificateDomainValidationOptions</a>

---


### AcmCertificateOptionsOutputReference <a name="AcmCertificateOptionsOutputReference" id="@cdktf/aws-cdk.acmCertificate.AcmCertificateOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.acmCertificate.AcmCertificateOptionsOutputReference.Initializer"></a>

```typescript
import { acmCertificate } from '@cdktf/aws-cdk'

new acmCertificate.AcmCertificateOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.acmCertificate.AcmCertificateOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.acmCertificate.AcmCertificateOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.acmCertificate.AcmCertificateOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.acmCertificate.AcmCertificateOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.acmCertificate.AcmCertificateOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.acmCertificate.AcmCertificateOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.acmCertificate.AcmCertificateOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.acmCertificate.AcmCertificateOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.acmCertificate.AcmCertificateOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.acmCertificate.AcmCertificateOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.acmCertificate.AcmCertificateOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.acmCertificate.AcmCertificateOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.acmCertificate.AcmCertificateOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.acmCertificate.AcmCertificateOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.acmCertificate.AcmCertificateOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.acmCertificate.AcmCertificateOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.acmCertificate.AcmCertificateOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.acmCertificate.AcmCertificateOptionsOutputReference.resetCertificateTransparencyLoggingPreference">resetCertificateTransparencyLoggingPreference</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.acmCertificate.AcmCertificateOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.acmCertificate.AcmCertificateOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.acmCertificate.AcmCertificateOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.acmCertificate.AcmCertificateOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.acmCertificate.AcmCertificateOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.acmCertificate.AcmCertificateOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.acmCertificate.AcmCertificateOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.acmCertificate.AcmCertificateOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.acmCertificate.AcmCertificateOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.acmCertificate.AcmCertificateOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.acmCertificate.AcmCertificateOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.acmCertificate.AcmCertificateOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.acmCertificate.AcmCertificateOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.acmCertificate.AcmCertificateOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.acmCertificate.AcmCertificateOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.acmCertificate.AcmCertificateOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.acmCertificate.AcmCertificateOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.acmCertificate.AcmCertificateOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.acmCertificate.AcmCertificateOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.acmCertificate.AcmCertificateOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.acmCertificate.AcmCertificateOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.acmCertificate.AcmCertificateOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.acmCertificate.AcmCertificateOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.acmCertificate.AcmCertificateOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCertificateTransparencyLoggingPreference` <a name="resetCertificateTransparencyLoggingPreference" id="@cdktf/aws-cdk.acmCertificate.AcmCertificateOptionsOutputReference.resetCertificateTransparencyLoggingPreference"></a>

```typescript
public resetCertificateTransparencyLoggingPreference(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.acmCertificate.AcmCertificateOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.acmCertificate.AcmCertificateOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.acmCertificate.AcmCertificateOptionsOutputReference.property.certificateTransparencyLoggingPreferenceInput">certificateTransparencyLoggingPreferenceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.acmCertificate.AcmCertificateOptionsOutputReference.property.certificateTransparencyLoggingPreference">certificateTransparencyLoggingPreference</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.acmCertificate.AcmCertificateOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.acmCertificate.AcmCertificateOptions">AcmCertificateOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.acmCertificate.AcmCertificateOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.acmCertificate.AcmCertificateOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `certificateTransparencyLoggingPreferenceInput`<sup>Optional</sup> <a name="certificateTransparencyLoggingPreferenceInput" id="@cdktf/aws-cdk.acmCertificate.AcmCertificateOptionsOutputReference.property.certificateTransparencyLoggingPreferenceInput"></a>

```typescript
public readonly certificateTransparencyLoggingPreferenceInput: string;
```

- *Type:* string

---

##### `certificateTransparencyLoggingPreference`<sup>Required</sup> <a name="certificateTransparencyLoggingPreference" id="@cdktf/aws-cdk.acmCertificate.AcmCertificateOptionsOutputReference.property.certificateTransparencyLoggingPreference"></a>

```typescript
public readonly certificateTransparencyLoggingPreference: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.acmCertificate.AcmCertificateOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AcmCertificateOptions;
```

- *Type:* <a href="#@cdktf/aws-cdk.acmCertificate.AcmCertificateOptions">AcmCertificateOptions</a>

---



