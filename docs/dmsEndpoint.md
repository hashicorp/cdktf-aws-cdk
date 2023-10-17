# `aws_dms_endpoint`

Refer to the Terraform Registory for docs: [`aws_dms_endpoint`](https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/dms_endpoint).

# `dmsEndpoint` Submodule <a name="`dmsEndpoint` Submodule" id="@cdktf/aws-cdk.dmsEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DmsEndpoint <a name="DmsEndpoint" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/dms_endpoint aws_dms_endpoint}.

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpoint.Initializer"></a>

```typescript
import { dmsEndpoint } from '@cdktf/aws-cdk'

new dmsEndpoint.DmsEndpoint(scope: Construct, id: string, config: DmsEndpointConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpoint.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpoint.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpoint.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointConfig">DmsEndpointConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpoint.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpoint.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpoint.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointConfig">DmsEndpointConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpoint.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpoint.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpoint.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpoint.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpoint.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpoint.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpoint.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpoint.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpoint.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpoint.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpoint.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpoint.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpoint.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpoint.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpoint.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpoint.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpoint.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpoint.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpoint.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpoint.putElasticsearchSettings">putElasticsearchSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpoint.putKafkaSettings">putKafkaSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpoint.putKinesisSettings">putKinesisSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpoint.putMongodbSettings">putMongodbSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpoint.putS3Settings">putS3Settings</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpoint.resetCertificateArn">resetCertificateArn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpoint.resetDatabaseName">resetDatabaseName</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpoint.resetElasticsearchSettings">resetElasticsearchSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpoint.resetExtraConnectionAttributes">resetExtraConnectionAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpoint.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpoint.resetKafkaSettings">resetKafkaSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpoint.resetKinesisSettings">resetKinesisSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpoint.resetKmsKeyArn">resetKmsKeyArn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpoint.resetMongodbSettings">resetMongodbSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpoint.resetPassword">resetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpoint.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpoint.resetS3Settings">resetS3Settings</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpoint.resetSecretsManagerAccessRoleArn">resetSecretsManagerAccessRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpoint.resetSecretsManagerArn">resetSecretsManagerArn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpoint.resetServerName">resetServerName</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpoint.resetServiceAccessRole">resetServiceAccessRole</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpoint.resetSslMode">resetSslMode</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpoint.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpoint.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpoint.resetUsername">resetUsername</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpoint.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpoint.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpoint.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpoint.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpoint.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpoint.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpoint.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpoint.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpoint.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpoint.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpoint.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpoint.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpoint.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpoint.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpoint.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpoint.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpoint.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpoint.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpoint.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `importFrom` <a name="importFrom" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpoint.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpoint.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpoint.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpoint.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveTo` <a name="moveTo" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpoint.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpoint.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpoint.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `putElasticsearchSettings` <a name="putElasticsearchSettings" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpoint.putElasticsearchSettings"></a>

```typescript
public putElasticsearchSettings(value: DmsEndpointElasticsearchSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpoint.putElasticsearchSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointElasticsearchSettings">DmsEndpointElasticsearchSettings</a>

---

##### `putKafkaSettings` <a name="putKafkaSettings" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpoint.putKafkaSettings"></a>

```typescript
public putKafkaSettings(value: DmsEndpointKafkaSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpoint.putKafkaSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKafkaSettings">DmsEndpointKafkaSettings</a>

---

##### `putKinesisSettings` <a name="putKinesisSettings" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpoint.putKinesisSettings"></a>

```typescript
public putKinesisSettings(value: DmsEndpointKinesisSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpoint.putKinesisSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKinesisSettings">DmsEndpointKinesisSettings</a>

---

##### `putMongodbSettings` <a name="putMongodbSettings" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpoint.putMongodbSettings"></a>

```typescript
public putMongodbSettings(value: DmsEndpointMongodbSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpoint.putMongodbSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointMongodbSettings">DmsEndpointMongodbSettings</a>

---

##### `putS3Settings` <a name="putS3Settings" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpoint.putS3Settings"></a>

```typescript
public putS3Settings(value: DmsEndpointS3Settings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpoint.putS3Settings.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointS3Settings">DmsEndpointS3Settings</a>

---

##### `resetCertificateArn` <a name="resetCertificateArn" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpoint.resetCertificateArn"></a>

```typescript
public resetCertificateArn(): void
```

##### `resetDatabaseName` <a name="resetDatabaseName" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpoint.resetDatabaseName"></a>

```typescript
public resetDatabaseName(): void
```

##### `resetElasticsearchSettings` <a name="resetElasticsearchSettings" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpoint.resetElasticsearchSettings"></a>

```typescript
public resetElasticsearchSettings(): void
```

##### `resetExtraConnectionAttributes` <a name="resetExtraConnectionAttributes" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpoint.resetExtraConnectionAttributes"></a>

```typescript
public resetExtraConnectionAttributes(): void
```

##### `resetId` <a name="resetId" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpoint.resetId"></a>

```typescript
public resetId(): void
```

##### `resetKafkaSettings` <a name="resetKafkaSettings" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpoint.resetKafkaSettings"></a>

```typescript
public resetKafkaSettings(): void
```

##### `resetKinesisSettings` <a name="resetKinesisSettings" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpoint.resetKinesisSettings"></a>

```typescript
public resetKinesisSettings(): void
```

##### `resetKmsKeyArn` <a name="resetKmsKeyArn" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpoint.resetKmsKeyArn"></a>

```typescript
public resetKmsKeyArn(): void
```

##### `resetMongodbSettings` <a name="resetMongodbSettings" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpoint.resetMongodbSettings"></a>

```typescript
public resetMongodbSettings(): void
```

##### `resetPassword` <a name="resetPassword" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpoint.resetPassword"></a>

```typescript
public resetPassword(): void
```

##### `resetPort` <a name="resetPort" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpoint.resetPort"></a>

```typescript
public resetPort(): void
```

##### `resetS3Settings` <a name="resetS3Settings" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpoint.resetS3Settings"></a>

```typescript
public resetS3Settings(): void
```

##### `resetSecretsManagerAccessRoleArn` <a name="resetSecretsManagerAccessRoleArn" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpoint.resetSecretsManagerAccessRoleArn"></a>

```typescript
public resetSecretsManagerAccessRoleArn(): void
```

##### `resetSecretsManagerArn` <a name="resetSecretsManagerArn" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpoint.resetSecretsManagerArn"></a>

```typescript
public resetSecretsManagerArn(): void
```

##### `resetServerName` <a name="resetServerName" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpoint.resetServerName"></a>

```typescript
public resetServerName(): void
```

##### `resetServiceAccessRole` <a name="resetServiceAccessRole" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpoint.resetServiceAccessRole"></a>

```typescript
public resetServiceAccessRole(): void
```

##### `resetSslMode` <a name="resetSslMode" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpoint.resetSslMode"></a>

```typescript
public resetSslMode(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpoint.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpoint.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

##### `resetUsername` <a name="resetUsername" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpoint.resetUsername"></a>

```typescript
public resetUsername(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpoint.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpoint.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpoint.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpoint.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DmsEndpoint resource upon running "cdktf plan <stack-name>". |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpoint.isConstruct"></a>

```typescript
import { dmsEndpoint } from '@cdktf/aws-cdk'

dmsEndpoint.DmsEndpoint.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpoint.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpoint.isTerraformElement"></a>

```typescript
import { dmsEndpoint } from '@cdktf/aws-cdk'

dmsEndpoint.DmsEndpoint.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpoint.isTerraformResource"></a>

```typescript
import { dmsEndpoint } from '@cdktf/aws-cdk'

dmsEndpoint.DmsEndpoint.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpoint.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpoint.generateConfigForImport"></a>

```typescript
import { dmsEndpoint } from '@cdktf/aws-cdk'

dmsEndpoint.DmsEndpoint.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DmsEndpoint resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DmsEndpoint to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DmsEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/dms_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DmsEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpoint.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpoint.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpoint.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpoint.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpoint.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpoint.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpoint.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpoint.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpoint.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpoint.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpoint.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpoint.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpoint.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpoint.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpoint.property.elasticsearchSettings">elasticsearchSettings</a></code> | <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference">DmsEndpointElasticsearchSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpoint.property.endpointArn">endpointArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpoint.property.kafkaSettings">kafkaSettings</a></code> | <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference">DmsEndpointKafkaSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpoint.property.kinesisSettings">kinesisSettings</a></code> | <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference">DmsEndpointKinesisSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpoint.property.mongodbSettings">mongodbSettings</a></code> | <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference">DmsEndpointMongodbSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpoint.property.s3Settings">s3Settings</a></code> | <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointS3SettingsOutputReference">DmsEndpointS3SettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpoint.property.certificateArnInput">certificateArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpoint.property.databaseNameInput">databaseNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpoint.property.elasticsearchSettingsInput">elasticsearchSettingsInput</a></code> | <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointElasticsearchSettings">DmsEndpointElasticsearchSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpoint.property.endpointIdInput">endpointIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpoint.property.endpointTypeInput">endpointTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpoint.property.engineNameInput">engineNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpoint.property.extraConnectionAttributesInput">extraConnectionAttributesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpoint.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpoint.property.kafkaSettingsInput">kafkaSettingsInput</a></code> | <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKafkaSettings">DmsEndpointKafkaSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpoint.property.kinesisSettingsInput">kinesisSettingsInput</a></code> | <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKinesisSettings">DmsEndpointKinesisSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpoint.property.kmsKeyArnInput">kmsKeyArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpoint.property.mongodbSettingsInput">mongodbSettingsInput</a></code> | <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointMongodbSettings">DmsEndpointMongodbSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpoint.property.passwordInput">passwordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpoint.property.portInput">portInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpoint.property.s3SettingsInput">s3SettingsInput</a></code> | <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointS3Settings">DmsEndpointS3Settings</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpoint.property.secretsManagerAccessRoleArnInput">secretsManagerAccessRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpoint.property.secretsManagerArnInput">secretsManagerArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpoint.property.serverNameInput">serverNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpoint.property.serviceAccessRoleInput">serviceAccessRoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpoint.property.sslModeInput">sslModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpoint.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpoint.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpoint.property.usernameInput">usernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpoint.property.certificateArn">certificateArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpoint.property.databaseName">databaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpoint.property.endpointId">endpointId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpoint.property.endpointType">endpointType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpoint.property.engineName">engineName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpoint.property.extraConnectionAttributes">extraConnectionAttributes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpoint.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpoint.property.kmsKeyArn">kmsKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpoint.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpoint.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpoint.property.secretsManagerAccessRoleArn">secretsManagerAccessRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpoint.property.secretsManagerArn">secretsManagerArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpoint.property.serverName">serverName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpoint.property.serviceAccessRole">serviceAccessRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpoint.property.sslMode">sslMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpoint.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpoint.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpoint.property.username">username</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpoint.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpoint.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpoint.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpoint.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpoint.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpoint.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpoint.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpoint.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpoint.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpoint.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpoint.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpoint.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpoint.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpoint.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `elasticsearchSettings`<sup>Required</sup> <a name="elasticsearchSettings" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpoint.property.elasticsearchSettings"></a>

```typescript
public readonly elasticsearchSettings: DmsEndpointElasticsearchSettingsOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference">DmsEndpointElasticsearchSettingsOutputReference</a>

---

##### `endpointArn`<sup>Required</sup> <a name="endpointArn" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpoint.property.endpointArn"></a>

```typescript
public readonly endpointArn: string;
```

- *Type:* string

---

##### `kafkaSettings`<sup>Required</sup> <a name="kafkaSettings" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpoint.property.kafkaSettings"></a>

```typescript
public readonly kafkaSettings: DmsEndpointKafkaSettingsOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference">DmsEndpointKafkaSettingsOutputReference</a>

---

##### `kinesisSettings`<sup>Required</sup> <a name="kinesisSettings" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpoint.property.kinesisSettings"></a>

```typescript
public readonly kinesisSettings: DmsEndpointKinesisSettingsOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference">DmsEndpointKinesisSettingsOutputReference</a>

---

##### `mongodbSettings`<sup>Required</sup> <a name="mongodbSettings" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpoint.property.mongodbSettings"></a>

```typescript
public readonly mongodbSettings: DmsEndpointMongodbSettingsOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference">DmsEndpointMongodbSettingsOutputReference</a>

---

##### `s3Settings`<sup>Required</sup> <a name="s3Settings" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpoint.property.s3Settings"></a>

```typescript
public readonly s3Settings: DmsEndpointS3SettingsOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointS3SettingsOutputReference">DmsEndpointS3SettingsOutputReference</a>

---

##### `certificateArnInput`<sup>Optional</sup> <a name="certificateArnInput" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpoint.property.certificateArnInput"></a>

```typescript
public readonly certificateArnInput: string;
```

- *Type:* string

---

##### `databaseNameInput`<sup>Optional</sup> <a name="databaseNameInput" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpoint.property.databaseNameInput"></a>

```typescript
public readonly databaseNameInput: string;
```

- *Type:* string

---

##### `elasticsearchSettingsInput`<sup>Optional</sup> <a name="elasticsearchSettingsInput" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpoint.property.elasticsearchSettingsInput"></a>

```typescript
public readonly elasticsearchSettingsInput: DmsEndpointElasticsearchSettings;
```

- *Type:* <a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointElasticsearchSettings">DmsEndpointElasticsearchSettings</a>

---

##### `endpointIdInput`<sup>Optional</sup> <a name="endpointIdInput" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpoint.property.endpointIdInput"></a>

```typescript
public readonly endpointIdInput: string;
```

- *Type:* string

---

##### `endpointTypeInput`<sup>Optional</sup> <a name="endpointTypeInput" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpoint.property.endpointTypeInput"></a>

```typescript
public readonly endpointTypeInput: string;
```

- *Type:* string

---

##### `engineNameInput`<sup>Optional</sup> <a name="engineNameInput" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpoint.property.engineNameInput"></a>

```typescript
public readonly engineNameInput: string;
```

- *Type:* string

---

##### `extraConnectionAttributesInput`<sup>Optional</sup> <a name="extraConnectionAttributesInput" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpoint.property.extraConnectionAttributesInput"></a>

```typescript
public readonly extraConnectionAttributesInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpoint.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `kafkaSettingsInput`<sup>Optional</sup> <a name="kafkaSettingsInput" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpoint.property.kafkaSettingsInput"></a>

```typescript
public readonly kafkaSettingsInput: DmsEndpointKafkaSettings;
```

- *Type:* <a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKafkaSettings">DmsEndpointKafkaSettings</a>

---

##### `kinesisSettingsInput`<sup>Optional</sup> <a name="kinesisSettingsInput" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpoint.property.kinesisSettingsInput"></a>

```typescript
public readonly kinesisSettingsInput: DmsEndpointKinesisSettings;
```

- *Type:* <a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKinesisSettings">DmsEndpointKinesisSettings</a>

---

##### `kmsKeyArnInput`<sup>Optional</sup> <a name="kmsKeyArnInput" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpoint.property.kmsKeyArnInput"></a>

```typescript
public readonly kmsKeyArnInput: string;
```

- *Type:* string

---

##### `mongodbSettingsInput`<sup>Optional</sup> <a name="mongodbSettingsInput" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpoint.property.mongodbSettingsInput"></a>

```typescript
public readonly mongodbSettingsInput: DmsEndpointMongodbSettings;
```

- *Type:* <a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointMongodbSettings">DmsEndpointMongodbSettings</a>

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpoint.property.passwordInput"></a>

```typescript
public readonly passwordInput: string;
```

- *Type:* string

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpoint.property.portInput"></a>

```typescript
public readonly portInput: number;
```

- *Type:* number

---

##### `s3SettingsInput`<sup>Optional</sup> <a name="s3SettingsInput" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpoint.property.s3SettingsInput"></a>

```typescript
public readonly s3SettingsInput: DmsEndpointS3Settings;
```

- *Type:* <a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointS3Settings">DmsEndpointS3Settings</a>

---

##### `secretsManagerAccessRoleArnInput`<sup>Optional</sup> <a name="secretsManagerAccessRoleArnInput" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpoint.property.secretsManagerAccessRoleArnInput"></a>

```typescript
public readonly secretsManagerAccessRoleArnInput: string;
```

- *Type:* string

---

##### `secretsManagerArnInput`<sup>Optional</sup> <a name="secretsManagerArnInput" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpoint.property.secretsManagerArnInput"></a>

```typescript
public readonly secretsManagerArnInput: string;
```

- *Type:* string

---

##### `serverNameInput`<sup>Optional</sup> <a name="serverNameInput" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpoint.property.serverNameInput"></a>

```typescript
public readonly serverNameInput: string;
```

- *Type:* string

---

##### `serviceAccessRoleInput`<sup>Optional</sup> <a name="serviceAccessRoleInput" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpoint.property.serviceAccessRoleInput"></a>

```typescript
public readonly serviceAccessRoleInput: string;
```

- *Type:* string

---

##### `sslModeInput`<sup>Optional</sup> <a name="sslModeInput" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpoint.property.sslModeInput"></a>

```typescript
public readonly sslModeInput: string;
```

- *Type:* string

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpoint.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpoint.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpoint.property.usernameInput"></a>

```typescript
public readonly usernameInput: string;
```

- *Type:* string

---

##### `certificateArn`<sup>Required</sup> <a name="certificateArn" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpoint.property.certificateArn"></a>

```typescript
public readonly certificateArn: string;
```

- *Type:* string

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpoint.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

---

##### `endpointId`<sup>Required</sup> <a name="endpointId" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpoint.property.endpointId"></a>

```typescript
public readonly endpointId: string;
```

- *Type:* string

---

##### `endpointType`<sup>Required</sup> <a name="endpointType" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpoint.property.endpointType"></a>

```typescript
public readonly endpointType: string;
```

- *Type:* string

---

##### `engineName`<sup>Required</sup> <a name="engineName" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpoint.property.engineName"></a>

```typescript
public readonly engineName: string;
```

- *Type:* string

---

##### `extraConnectionAttributes`<sup>Required</sup> <a name="extraConnectionAttributes" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpoint.property.extraConnectionAttributes"></a>

```typescript
public readonly extraConnectionAttributes: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpoint.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `kmsKeyArn`<sup>Required</sup> <a name="kmsKeyArn" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpoint.property.kmsKeyArn"></a>

```typescript
public readonly kmsKeyArn: string;
```

- *Type:* string

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpoint.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpoint.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `secretsManagerAccessRoleArn`<sup>Required</sup> <a name="secretsManagerAccessRoleArn" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpoint.property.secretsManagerAccessRoleArn"></a>

```typescript
public readonly secretsManagerAccessRoleArn: string;
```

- *Type:* string

---

##### `secretsManagerArn`<sup>Required</sup> <a name="secretsManagerArn" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpoint.property.secretsManagerArn"></a>

```typescript
public readonly secretsManagerArn: string;
```

- *Type:* string

---

##### `serverName`<sup>Required</sup> <a name="serverName" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpoint.property.serverName"></a>

```typescript
public readonly serverName: string;
```

- *Type:* string

---

##### `serviceAccessRole`<sup>Required</sup> <a name="serviceAccessRole" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpoint.property.serviceAccessRole"></a>

```typescript
public readonly serviceAccessRole: string;
```

- *Type:* string

---

##### `sslMode`<sup>Required</sup> <a name="sslMode" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpoint.property.sslMode"></a>

```typescript
public readonly sslMode: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpoint.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpoint.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpoint.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpoint.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpoint.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DmsEndpointConfig <a name="DmsEndpointConfig" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointConfig.Initializer"></a>

```typescript
import { dmsEndpoint } from '@cdktf/aws-cdk'

const dmsEndpointConfig: dmsEndpoint.DmsEndpointConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointConfig.property.endpointId">endpointId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/dms_endpoint#endpoint_id DmsEndpoint#endpoint_id}. |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointConfig.property.endpointType">endpointType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/dms_endpoint#endpoint_type DmsEndpoint#endpoint_type}. |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointConfig.property.engineName">engineName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/dms_endpoint#engine_name DmsEndpoint#engine_name}. |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointConfig.property.certificateArn">certificateArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/dms_endpoint#certificate_arn DmsEndpoint#certificate_arn}. |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointConfig.property.databaseName">databaseName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/dms_endpoint#database_name DmsEndpoint#database_name}. |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointConfig.property.elasticsearchSettings">elasticsearchSettings</a></code> | <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointElasticsearchSettings">DmsEndpointElasticsearchSettings</a></code> | elasticsearch_settings block. |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointConfig.property.extraConnectionAttributes">extraConnectionAttributes</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/dms_endpoint#extra_connection_attributes DmsEndpoint#extra_connection_attributes}. |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/dms_endpoint#id DmsEndpoint#id}. |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointConfig.property.kafkaSettings">kafkaSettings</a></code> | <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKafkaSettings">DmsEndpointKafkaSettings</a></code> | kafka_settings block. |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointConfig.property.kinesisSettings">kinesisSettings</a></code> | <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKinesisSettings">DmsEndpointKinesisSettings</a></code> | kinesis_settings block. |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointConfig.property.kmsKeyArn">kmsKeyArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/dms_endpoint#kms_key_arn DmsEndpoint#kms_key_arn}. |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointConfig.property.mongodbSettings">mongodbSettings</a></code> | <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointMongodbSettings">DmsEndpointMongodbSettings</a></code> | mongodb_settings block. |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointConfig.property.password">password</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/dms_endpoint#password DmsEndpoint#password}. |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointConfig.property.port">port</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/dms_endpoint#port DmsEndpoint#port}. |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointConfig.property.s3Settings">s3Settings</a></code> | <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointS3Settings">DmsEndpointS3Settings</a></code> | s3_settings block. |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointConfig.property.secretsManagerAccessRoleArn">secretsManagerAccessRoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/dms_endpoint#secrets_manager_access_role_arn DmsEndpoint#secrets_manager_access_role_arn}. |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointConfig.property.secretsManagerArn">secretsManagerArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/dms_endpoint#secrets_manager_arn DmsEndpoint#secrets_manager_arn}. |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointConfig.property.serverName">serverName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/dms_endpoint#server_name DmsEndpoint#server_name}. |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointConfig.property.serviceAccessRole">serviceAccessRole</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/dms_endpoint#service_access_role DmsEndpoint#service_access_role}. |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointConfig.property.sslMode">sslMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/dms_endpoint#ssl_mode DmsEndpoint#ssl_mode}. |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/dms_endpoint#tags DmsEndpoint#tags}. |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/dms_endpoint#tags_all DmsEndpoint#tags_all}. |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointConfig.property.username">username</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/dms_endpoint#username DmsEndpoint#username}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `endpointId`<sup>Required</sup> <a name="endpointId" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointConfig.property.endpointId"></a>

```typescript
public readonly endpointId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/dms_endpoint#endpoint_id DmsEndpoint#endpoint_id}.

---

##### `endpointType`<sup>Required</sup> <a name="endpointType" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointConfig.property.endpointType"></a>

```typescript
public readonly endpointType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/dms_endpoint#endpoint_type DmsEndpoint#endpoint_type}.

---

##### `engineName`<sup>Required</sup> <a name="engineName" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointConfig.property.engineName"></a>

```typescript
public readonly engineName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/dms_endpoint#engine_name DmsEndpoint#engine_name}.

---

##### `certificateArn`<sup>Optional</sup> <a name="certificateArn" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointConfig.property.certificateArn"></a>

```typescript
public readonly certificateArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/dms_endpoint#certificate_arn DmsEndpoint#certificate_arn}.

---

##### `databaseName`<sup>Optional</sup> <a name="databaseName" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointConfig.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/dms_endpoint#database_name DmsEndpoint#database_name}.

---

##### `elasticsearchSettings`<sup>Optional</sup> <a name="elasticsearchSettings" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointConfig.property.elasticsearchSettings"></a>

```typescript
public readonly elasticsearchSettings: DmsEndpointElasticsearchSettings;
```

- *Type:* <a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointElasticsearchSettings">DmsEndpointElasticsearchSettings</a>

elasticsearch_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/dms_endpoint#elasticsearch_settings DmsEndpoint#elasticsearch_settings}

---

##### `extraConnectionAttributes`<sup>Optional</sup> <a name="extraConnectionAttributes" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointConfig.property.extraConnectionAttributes"></a>

```typescript
public readonly extraConnectionAttributes: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/dms_endpoint#extra_connection_attributes DmsEndpoint#extra_connection_attributes}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/dms_endpoint#id DmsEndpoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kafkaSettings`<sup>Optional</sup> <a name="kafkaSettings" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointConfig.property.kafkaSettings"></a>

```typescript
public readonly kafkaSettings: DmsEndpointKafkaSettings;
```

- *Type:* <a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKafkaSettings">DmsEndpointKafkaSettings</a>

kafka_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/dms_endpoint#kafka_settings DmsEndpoint#kafka_settings}

---

##### `kinesisSettings`<sup>Optional</sup> <a name="kinesisSettings" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointConfig.property.kinesisSettings"></a>

```typescript
public readonly kinesisSettings: DmsEndpointKinesisSettings;
```

- *Type:* <a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKinesisSettings">DmsEndpointKinesisSettings</a>

kinesis_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/dms_endpoint#kinesis_settings DmsEndpoint#kinesis_settings}

---

##### `kmsKeyArn`<sup>Optional</sup> <a name="kmsKeyArn" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointConfig.property.kmsKeyArn"></a>

```typescript
public readonly kmsKeyArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/dms_endpoint#kms_key_arn DmsEndpoint#kms_key_arn}.

---

##### `mongodbSettings`<sup>Optional</sup> <a name="mongodbSettings" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointConfig.property.mongodbSettings"></a>

```typescript
public readonly mongodbSettings: DmsEndpointMongodbSettings;
```

- *Type:* <a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointMongodbSettings">DmsEndpointMongodbSettings</a>

mongodb_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/dms_endpoint#mongodb_settings DmsEndpoint#mongodb_settings}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointConfig.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/dms_endpoint#password DmsEndpoint#password}.

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointConfig.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/dms_endpoint#port DmsEndpoint#port}.

---

##### `s3Settings`<sup>Optional</sup> <a name="s3Settings" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointConfig.property.s3Settings"></a>

```typescript
public readonly s3Settings: DmsEndpointS3Settings;
```

- *Type:* <a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointS3Settings">DmsEndpointS3Settings</a>

s3_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/dms_endpoint#s3_settings DmsEndpoint#s3_settings}

---

##### `secretsManagerAccessRoleArn`<sup>Optional</sup> <a name="secretsManagerAccessRoleArn" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointConfig.property.secretsManagerAccessRoleArn"></a>

```typescript
public readonly secretsManagerAccessRoleArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/dms_endpoint#secrets_manager_access_role_arn DmsEndpoint#secrets_manager_access_role_arn}.

---

##### `secretsManagerArn`<sup>Optional</sup> <a name="secretsManagerArn" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointConfig.property.secretsManagerArn"></a>

```typescript
public readonly secretsManagerArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/dms_endpoint#secrets_manager_arn DmsEndpoint#secrets_manager_arn}.

---

##### `serverName`<sup>Optional</sup> <a name="serverName" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointConfig.property.serverName"></a>

```typescript
public readonly serverName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/dms_endpoint#server_name DmsEndpoint#server_name}.

---

##### `serviceAccessRole`<sup>Optional</sup> <a name="serviceAccessRole" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointConfig.property.serviceAccessRole"></a>

```typescript
public readonly serviceAccessRole: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/dms_endpoint#service_access_role DmsEndpoint#service_access_role}.

---

##### `sslMode`<sup>Optional</sup> <a name="sslMode" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointConfig.property.sslMode"></a>

```typescript
public readonly sslMode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/dms_endpoint#ssl_mode DmsEndpoint#ssl_mode}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/dms_endpoint#tags DmsEndpoint#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/dms_endpoint#tags_all DmsEndpoint#tags_all}.

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointConfig.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/dms_endpoint#username DmsEndpoint#username}.

---

### DmsEndpointElasticsearchSettings <a name="DmsEndpointElasticsearchSettings" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointElasticsearchSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointElasticsearchSettings.Initializer"></a>

```typescript
import { dmsEndpoint } from '@cdktf/aws-cdk'

const dmsEndpointElasticsearchSettings: dmsEndpoint.DmsEndpointElasticsearchSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointElasticsearchSettings.property.endpointUri">endpointUri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/dms_endpoint#endpoint_uri DmsEndpoint#endpoint_uri}. |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointElasticsearchSettings.property.serviceAccessRoleArn">serviceAccessRoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/dms_endpoint#service_access_role_arn DmsEndpoint#service_access_role_arn}. |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointElasticsearchSettings.property.errorRetryDuration">errorRetryDuration</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/dms_endpoint#error_retry_duration DmsEndpoint#error_retry_duration}. |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointElasticsearchSettings.property.fullLoadErrorPercentage">fullLoadErrorPercentage</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/dms_endpoint#full_load_error_percentage DmsEndpoint#full_load_error_percentage}. |

---

##### `endpointUri`<sup>Required</sup> <a name="endpointUri" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointElasticsearchSettings.property.endpointUri"></a>

```typescript
public readonly endpointUri: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/dms_endpoint#endpoint_uri DmsEndpoint#endpoint_uri}.

---

##### `serviceAccessRoleArn`<sup>Required</sup> <a name="serviceAccessRoleArn" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointElasticsearchSettings.property.serviceAccessRoleArn"></a>

```typescript
public readonly serviceAccessRoleArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/dms_endpoint#service_access_role_arn DmsEndpoint#service_access_role_arn}.

---

##### `errorRetryDuration`<sup>Optional</sup> <a name="errorRetryDuration" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointElasticsearchSettings.property.errorRetryDuration"></a>

```typescript
public readonly errorRetryDuration: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/dms_endpoint#error_retry_duration DmsEndpoint#error_retry_duration}.

---

##### `fullLoadErrorPercentage`<sup>Optional</sup> <a name="fullLoadErrorPercentage" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointElasticsearchSettings.property.fullLoadErrorPercentage"></a>

```typescript
public readonly fullLoadErrorPercentage: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/dms_endpoint#full_load_error_percentage DmsEndpoint#full_load_error_percentage}.

---

### DmsEndpointKafkaSettings <a name="DmsEndpointKafkaSettings" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKafkaSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKafkaSettings.Initializer"></a>

```typescript
import { dmsEndpoint } from '@cdktf/aws-cdk'

const dmsEndpointKafkaSettings: dmsEndpoint.DmsEndpointKafkaSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKafkaSettings.property.broker">broker</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/dms_endpoint#broker DmsEndpoint#broker}. |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKafkaSettings.property.includeControlDetails">includeControlDetails</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/dms_endpoint#include_control_details DmsEndpoint#include_control_details}. |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKafkaSettings.property.includeNullAndEmpty">includeNullAndEmpty</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/dms_endpoint#include_null_and_empty DmsEndpoint#include_null_and_empty}. |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKafkaSettings.property.includePartitionValue">includePartitionValue</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/dms_endpoint#include_partition_value DmsEndpoint#include_partition_value}. |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKafkaSettings.property.includeTableAlterOperations">includeTableAlterOperations</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/dms_endpoint#include_table_alter_operations DmsEndpoint#include_table_alter_operations}. |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKafkaSettings.property.includeTransactionDetails">includeTransactionDetails</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/dms_endpoint#include_transaction_details DmsEndpoint#include_transaction_details}. |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKafkaSettings.property.messageFormat">messageFormat</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/dms_endpoint#message_format DmsEndpoint#message_format}. |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKafkaSettings.property.messageMaxBytes">messageMaxBytes</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/dms_endpoint#message_max_bytes DmsEndpoint#message_max_bytes}. |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKafkaSettings.property.noHexPrefix">noHexPrefix</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/dms_endpoint#no_hex_prefix DmsEndpoint#no_hex_prefix}. |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKafkaSettings.property.partitionIncludeSchemaTable">partitionIncludeSchemaTable</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/dms_endpoint#partition_include_schema_table DmsEndpoint#partition_include_schema_table}. |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKafkaSettings.property.saslPassword">saslPassword</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/dms_endpoint#sasl_password DmsEndpoint#sasl_password}. |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKafkaSettings.property.saslUsername">saslUsername</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/dms_endpoint#sasl_username DmsEndpoint#sasl_username}. |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKafkaSettings.property.securityProtocol">securityProtocol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/dms_endpoint#security_protocol DmsEndpoint#security_protocol}. |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKafkaSettings.property.sslCaCertificateArn">sslCaCertificateArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/dms_endpoint#ssl_ca_certificate_arn DmsEndpoint#ssl_ca_certificate_arn}. |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKafkaSettings.property.sslClientCertificateArn">sslClientCertificateArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/dms_endpoint#ssl_client_certificate_arn DmsEndpoint#ssl_client_certificate_arn}. |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKafkaSettings.property.sslClientKeyArn">sslClientKeyArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/dms_endpoint#ssl_client_key_arn DmsEndpoint#ssl_client_key_arn}. |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKafkaSettings.property.sslClientKeyPassword">sslClientKeyPassword</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/dms_endpoint#ssl_client_key_password DmsEndpoint#ssl_client_key_password}. |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKafkaSettings.property.topic">topic</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/dms_endpoint#topic DmsEndpoint#topic}. |

---

##### `broker`<sup>Required</sup> <a name="broker" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKafkaSettings.property.broker"></a>

```typescript
public readonly broker: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/dms_endpoint#broker DmsEndpoint#broker}.

---

##### `includeControlDetails`<sup>Optional</sup> <a name="includeControlDetails" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKafkaSettings.property.includeControlDetails"></a>

```typescript
public readonly includeControlDetails: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/dms_endpoint#include_control_details DmsEndpoint#include_control_details}.

---

##### `includeNullAndEmpty`<sup>Optional</sup> <a name="includeNullAndEmpty" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKafkaSettings.property.includeNullAndEmpty"></a>

```typescript
public readonly includeNullAndEmpty: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/dms_endpoint#include_null_and_empty DmsEndpoint#include_null_and_empty}.

---

##### `includePartitionValue`<sup>Optional</sup> <a name="includePartitionValue" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKafkaSettings.property.includePartitionValue"></a>

```typescript
public readonly includePartitionValue: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/dms_endpoint#include_partition_value DmsEndpoint#include_partition_value}.

---

##### `includeTableAlterOperations`<sup>Optional</sup> <a name="includeTableAlterOperations" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKafkaSettings.property.includeTableAlterOperations"></a>

```typescript
public readonly includeTableAlterOperations: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/dms_endpoint#include_table_alter_operations DmsEndpoint#include_table_alter_operations}.

---

##### `includeTransactionDetails`<sup>Optional</sup> <a name="includeTransactionDetails" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKafkaSettings.property.includeTransactionDetails"></a>

```typescript
public readonly includeTransactionDetails: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/dms_endpoint#include_transaction_details DmsEndpoint#include_transaction_details}.

---

##### `messageFormat`<sup>Optional</sup> <a name="messageFormat" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKafkaSettings.property.messageFormat"></a>

```typescript
public readonly messageFormat: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/dms_endpoint#message_format DmsEndpoint#message_format}.

---

##### `messageMaxBytes`<sup>Optional</sup> <a name="messageMaxBytes" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKafkaSettings.property.messageMaxBytes"></a>

```typescript
public readonly messageMaxBytes: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/dms_endpoint#message_max_bytes DmsEndpoint#message_max_bytes}.

---

##### `noHexPrefix`<sup>Optional</sup> <a name="noHexPrefix" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKafkaSettings.property.noHexPrefix"></a>

```typescript
public readonly noHexPrefix: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/dms_endpoint#no_hex_prefix DmsEndpoint#no_hex_prefix}.

---

##### `partitionIncludeSchemaTable`<sup>Optional</sup> <a name="partitionIncludeSchemaTable" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKafkaSettings.property.partitionIncludeSchemaTable"></a>

```typescript
public readonly partitionIncludeSchemaTable: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/dms_endpoint#partition_include_schema_table DmsEndpoint#partition_include_schema_table}.

---

##### `saslPassword`<sup>Optional</sup> <a name="saslPassword" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKafkaSettings.property.saslPassword"></a>

```typescript
public readonly saslPassword: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/dms_endpoint#sasl_password DmsEndpoint#sasl_password}.

---

##### `saslUsername`<sup>Optional</sup> <a name="saslUsername" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKafkaSettings.property.saslUsername"></a>

```typescript
public readonly saslUsername: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/dms_endpoint#sasl_username DmsEndpoint#sasl_username}.

---

##### `securityProtocol`<sup>Optional</sup> <a name="securityProtocol" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKafkaSettings.property.securityProtocol"></a>

```typescript
public readonly securityProtocol: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/dms_endpoint#security_protocol DmsEndpoint#security_protocol}.

---

##### `sslCaCertificateArn`<sup>Optional</sup> <a name="sslCaCertificateArn" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKafkaSettings.property.sslCaCertificateArn"></a>

```typescript
public readonly sslCaCertificateArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/dms_endpoint#ssl_ca_certificate_arn DmsEndpoint#ssl_ca_certificate_arn}.

---

##### `sslClientCertificateArn`<sup>Optional</sup> <a name="sslClientCertificateArn" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKafkaSettings.property.sslClientCertificateArn"></a>

```typescript
public readonly sslClientCertificateArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/dms_endpoint#ssl_client_certificate_arn DmsEndpoint#ssl_client_certificate_arn}.

---

##### `sslClientKeyArn`<sup>Optional</sup> <a name="sslClientKeyArn" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKafkaSettings.property.sslClientKeyArn"></a>

```typescript
public readonly sslClientKeyArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/dms_endpoint#ssl_client_key_arn DmsEndpoint#ssl_client_key_arn}.

---

##### `sslClientKeyPassword`<sup>Optional</sup> <a name="sslClientKeyPassword" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKafkaSettings.property.sslClientKeyPassword"></a>

```typescript
public readonly sslClientKeyPassword: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/dms_endpoint#ssl_client_key_password DmsEndpoint#ssl_client_key_password}.

---

##### `topic`<sup>Optional</sup> <a name="topic" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKafkaSettings.property.topic"></a>

```typescript
public readonly topic: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/dms_endpoint#topic DmsEndpoint#topic}.

---

### DmsEndpointKinesisSettings <a name="DmsEndpointKinesisSettings" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKinesisSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKinesisSettings.Initializer"></a>

```typescript
import { dmsEndpoint } from '@cdktf/aws-cdk'

const dmsEndpointKinesisSettings: dmsEndpoint.DmsEndpointKinesisSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKinesisSettings.property.includeControlDetails">includeControlDetails</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/dms_endpoint#include_control_details DmsEndpoint#include_control_details}. |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKinesisSettings.property.includeNullAndEmpty">includeNullAndEmpty</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/dms_endpoint#include_null_and_empty DmsEndpoint#include_null_and_empty}. |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKinesisSettings.property.includePartitionValue">includePartitionValue</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/dms_endpoint#include_partition_value DmsEndpoint#include_partition_value}. |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKinesisSettings.property.includeTableAlterOperations">includeTableAlterOperations</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/dms_endpoint#include_table_alter_operations DmsEndpoint#include_table_alter_operations}. |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKinesisSettings.property.includeTransactionDetails">includeTransactionDetails</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/dms_endpoint#include_transaction_details DmsEndpoint#include_transaction_details}. |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKinesisSettings.property.messageFormat">messageFormat</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/dms_endpoint#message_format DmsEndpoint#message_format}. |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKinesisSettings.property.partitionIncludeSchemaTable">partitionIncludeSchemaTable</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/dms_endpoint#partition_include_schema_table DmsEndpoint#partition_include_schema_table}. |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKinesisSettings.property.serviceAccessRoleArn">serviceAccessRoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/dms_endpoint#service_access_role_arn DmsEndpoint#service_access_role_arn}. |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKinesisSettings.property.streamArn">streamArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/dms_endpoint#stream_arn DmsEndpoint#stream_arn}. |

---

##### `includeControlDetails`<sup>Optional</sup> <a name="includeControlDetails" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKinesisSettings.property.includeControlDetails"></a>

```typescript
public readonly includeControlDetails: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/dms_endpoint#include_control_details DmsEndpoint#include_control_details}.

---

##### `includeNullAndEmpty`<sup>Optional</sup> <a name="includeNullAndEmpty" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKinesisSettings.property.includeNullAndEmpty"></a>

```typescript
public readonly includeNullAndEmpty: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/dms_endpoint#include_null_and_empty DmsEndpoint#include_null_and_empty}.

---

##### `includePartitionValue`<sup>Optional</sup> <a name="includePartitionValue" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKinesisSettings.property.includePartitionValue"></a>

```typescript
public readonly includePartitionValue: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/dms_endpoint#include_partition_value DmsEndpoint#include_partition_value}.

---

##### `includeTableAlterOperations`<sup>Optional</sup> <a name="includeTableAlterOperations" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKinesisSettings.property.includeTableAlterOperations"></a>

```typescript
public readonly includeTableAlterOperations: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/dms_endpoint#include_table_alter_operations DmsEndpoint#include_table_alter_operations}.

---

##### `includeTransactionDetails`<sup>Optional</sup> <a name="includeTransactionDetails" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKinesisSettings.property.includeTransactionDetails"></a>

```typescript
public readonly includeTransactionDetails: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/dms_endpoint#include_transaction_details DmsEndpoint#include_transaction_details}.

---

##### `messageFormat`<sup>Optional</sup> <a name="messageFormat" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKinesisSettings.property.messageFormat"></a>

```typescript
public readonly messageFormat: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/dms_endpoint#message_format DmsEndpoint#message_format}.

---

##### `partitionIncludeSchemaTable`<sup>Optional</sup> <a name="partitionIncludeSchemaTable" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKinesisSettings.property.partitionIncludeSchemaTable"></a>

```typescript
public readonly partitionIncludeSchemaTable: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/dms_endpoint#partition_include_schema_table DmsEndpoint#partition_include_schema_table}.

---

##### `serviceAccessRoleArn`<sup>Optional</sup> <a name="serviceAccessRoleArn" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKinesisSettings.property.serviceAccessRoleArn"></a>

```typescript
public readonly serviceAccessRoleArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/dms_endpoint#service_access_role_arn DmsEndpoint#service_access_role_arn}.

---

##### `streamArn`<sup>Optional</sup> <a name="streamArn" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKinesisSettings.property.streamArn"></a>

```typescript
public readonly streamArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/dms_endpoint#stream_arn DmsEndpoint#stream_arn}.

---

### DmsEndpointMongodbSettings <a name="DmsEndpointMongodbSettings" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointMongodbSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointMongodbSettings.Initializer"></a>

```typescript
import { dmsEndpoint } from '@cdktf/aws-cdk'

const dmsEndpointMongodbSettings: dmsEndpoint.DmsEndpointMongodbSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointMongodbSettings.property.authMechanism">authMechanism</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/dms_endpoint#auth_mechanism DmsEndpoint#auth_mechanism}. |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointMongodbSettings.property.authSource">authSource</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/dms_endpoint#auth_source DmsEndpoint#auth_source}. |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointMongodbSettings.property.authType">authType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/dms_endpoint#auth_type DmsEndpoint#auth_type}. |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointMongodbSettings.property.docsToInvestigate">docsToInvestigate</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/dms_endpoint#docs_to_investigate DmsEndpoint#docs_to_investigate}. |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointMongodbSettings.property.extractDocId">extractDocId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/dms_endpoint#extract_doc_id DmsEndpoint#extract_doc_id}. |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointMongodbSettings.property.nestingLevel">nestingLevel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/dms_endpoint#nesting_level DmsEndpoint#nesting_level}. |

---

##### `authMechanism`<sup>Optional</sup> <a name="authMechanism" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointMongodbSettings.property.authMechanism"></a>

```typescript
public readonly authMechanism: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/dms_endpoint#auth_mechanism DmsEndpoint#auth_mechanism}.

---

##### `authSource`<sup>Optional</sup> <a name="authSource" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointMongodbSettings.property.authSource"></a>

```typescript
public readonly authSource: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/dms_endpoint#auth_source DmsEndpoint#auth_source}.

---

##### `authType`<sup>Optional</sup> <a name="authType" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointMongodbSettings.property.authType"></a>

```typescript
public readonly authType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/dms_endpoint#auth_type DmsEndpoint#auth_type}.

---

##### `docsToInvestigate`<sup>Optional</sup> <a name="docsToInvestigate" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointMongodbSettings.property.docsToInvestigate"></a>

```typescript
public readonly docsToInvestigate: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/dms_endpoint#docs_to_investigate DmsEndpoint#docs_to_investigate}.

---

##### `extractDocId`<sup>Optional</sup> <a name="extractDocId" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointMongodbSettings.property.extractDocId"></a>

```typescript
public readonly extractDocId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/dms_endpoint#extract_doc_id DmsEndpoint#extract_doc_id}.

---

##### `nestingLevel`<sup>Optional</sup> <a name="nestingLevel" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointMongodbSettings.property.nestingLevel"></a>

```typescript
public readonly nestingLevel: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/dms_endpoint#nesting_level DmsEndpoint#nesting_level}.

---

### DmsEndpointS3Settings <a name="DmsEndpointS3Settings" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointS3Settings"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointS3Settings.Initializer"></a>

```typescript
import { dmsEndpoint } from '@cdktf/aws-cdk'

const dmsEndpointS3Settings: dmsEndpoint.DmsEndpointS3Settings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointS3Settings.property.bucketFolder">bucketFolder</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/dms_endpoint#bucket_folder DmsEndpoint#bucket_folder}. |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointS3Settings.property.bucketName">bucketName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/dms_endpoint#bucket_name DmsEndpoint#bucket_name}. |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointS3Settings.property.compressionType">compressionType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/dms_endpoint#compression_type DmsEndpoint#compression_type}. |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointS3Settings.property.csvDelimiter">csvDelimiter</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/dms_endpoint#csv_delimiter DmsEndpoint#csv_delimiter}. |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointS3Settings.property.csvRowDelimiter">csvRowDelimiter</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/dms_endpoint#csv_row_delimiter DmsEndpoint#csv_row_delimiter}. |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointS3Settings.property.dataFormat">dataFormat</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/dms_endpoint#data_format DmsEndpoint#data_format}. |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointS3Settings.property.datePartitionEnabled">datePartitionEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/dms_endpoint#date_partition_enabled DmsEndpoint#date_partition_enabled}. |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointS3Settings.property.encryptionMode">encryptionMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/dms_endpoint#encryption_mode DmsEndpoint#encryption_mode}. |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointS3Settings.property.externalTableDefinition">externalTableDefinition</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/dms_endpoint#external_table_definition DmsEndpoint#external_table_definition}. |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointS3Settings.property.parquetTimestampInMillisecond">parquetTimestampInMillisecond</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/dms_endpoint#parquet_timestamp_in_millisecond DmsEndpoint#parquet_timestamp_in_millisecond}. |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointS3Settings.property.parquetVersion">parquetVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/dms_endpoint#parquet_version DmsEndpoint#parquet_version}. |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointS3Settings.property.serverSideEncryptionKmsKeyId">serverSideEncryptionKmsKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/dms_endpoint#server_side_encryption_kms_key_id DmsEndpoint#server_side_encryption_kms_key_id}. |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointS3Settings.property.serviceAccessRoleArn">serviceAccessRoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/dms_endpoint#service_access_role_arn DmsEndpoint#service_access_role_arn}. |

---

##### `bucketFolder`<sup>Optional</sup> <a name="bucketFolder" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointS3Settings.property.bucketFolder"></a>

```typescript
public readonly bucketFolder: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/dms_endpoint#bucket_folder DmsEndpoint#bucket_folder}.

---

##### `bucketName`<sup>Optional</sup> <a name="bucketName" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointS3Settings.property.bucketName"></a>

```typescript
public readonly bucketName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/dms_endpoint#bucket_name DmsEndpoint#bucket_name}.

---

##### `compressionType`<sup>Optional</sup> <a name="compressionType" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointS3Settings.property.compressionType"></a>

```typescript
public readonly compressionType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/dms_endpoint#compression_type DmsEndpoint#compression_type}.

---

##### `csvDelimiter`<sup>Optional</sup> <a name="csvDelimiter" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointS3Settings.property.csvDelimiter"></a>

```typescript
public readonly csvDelimiter: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/dms_endpoint#csv_delimiter DmsEndpoint#csv_delimiter}.

---

##### `csvRowDelimiter`<sup>Optional</sup> <a name="csvRowDelimiter" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointS3Settings.property.csvRowDelimiter"></a>

```typescript
public readonly csvRowDelimiter: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/dms_endpoint#csv_row_delimiter DmsEndpoint#csv_row_delimiter}.

---

##### `dataFormat`<sup>Optional</sup> <a name="dataFormat" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointS3Settings.property.dataFormat"></a>

```typescript
public readonly dataFormat: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/dms_endpoint#data_format DmsEndpoint#data_format}.

---

##### `datePartitionEnabled`<sup>Optional</sup> <a name="datePartitionEnabled" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointS3Settings.property.datePartitionEnabled"></a>

```typescript
public readonly datePartitionEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/dms_endpoint#date_partition_enabled DmsEndpoint#date_partition_enabled}.

---

##### `encryptionMode`<sup>Optional</sup> <a name="encryptionMode" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointS3Settings.property.encryptionMode"></a>

```typescript
public readonly encryptionMode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/dms_endpoint#encryption_mode DmsEndpoint#encryption_mode}.

---

##### `externalTableDefinition`<sup>Optional</sup> <a name="externalTableDefinition" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointS3Settings.property.externalTableDefinition"></a>

```typescript
public readonly externalTableDefinition: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/dms_endpoint#external_table_definition DmsEndpoint#external_table_definition}.

---

##### `parquetTimestampInMillisecond`<sup>Optional</sup> <a name="parquetTimestampInMillisecond" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointS3Settings.property.parquetTimestampInMillisecond"></a>

```typescript
public readonly parquetTimestampInMillisecond: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/dms_endpoint#parquet_timestamp_in_millisecond DmsEndpoint#parquet_timestamp_in_millisecond}.

---

##### `parquetVersion`<sup>Optional</sup> <a name="parquetVersion" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointS3Settings.property.parquetVersion"></a>

```typescript
public readonly parquetVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/dms_endpoint#parquet_version DmsEndpoint#parquet_version}.

---

##### `serverSideEncryptionKmsKeyId`<sup>Optional</sup> <a name="serverSideEncryptionKmsKeyId" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointS3Settings.property.serverSideEncryptionKmsKeyId"></a>

```typescript
public readonly serverSideEncryptionKmsKeyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/dms_endpoint#server_side_encryption_kms_key_id DmsEndpoint#server_side_encryption_kms_key_id}.

---

##### `serviceAccessRoleArn`<sup>Optional</sup> <a name="serviceAccessRoleArn" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointS3Settings.property.serviceAccessRoleArn"></a>

```typescript
public readonly serviceAccessRoleArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/dms_endpoint#service_access_role_arn DmsEndpoint#service_access_role_arn}.

---

## Classes <a name="Classes" id="Classes"></a>

### DmsEndpointElasticsearchSettingsOutputReference <a name="DmsEndpointElasticsearchSettingsOutputReference" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.Initializer"></a>

```typescript
import { dmsEndpoint } from '@cdktf/aws-cdk'

new dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.resetErrorRetryDuration">resetErrorRetryDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.resetFullLoadErrorPercentage">resetFullLoadErrorPercentage</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetErrorRetryDuration` <a name="resetErrorRetryDuration" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.resetErrorRetryDuration"></a>

```typescript
public resetErrorRetryDuration(): void
```

##### `resetFullLoadErrorPercentage` <a name="resetFullLoadErrorPercentage" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.resetFullLoadErrorPercentage"></a>

```typescript
public resetFullLoadErrorPercentage(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.property.endpointUriInput">endpointUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.property.errorRetryDurationInput">errorRetryDurationInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.property.fullLoadErrorPercentageInput">fullLoadErrorPercentageInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.property.serviceAccessRoleArnInput">serviceAccessRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.property.endpointUri">endpointUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.property.errorRetryDuration">errorRetryDuration</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.property.fullLoadErrorPercentage">fullLoadErrorPercentage</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.property.serviceAccessRoleArn">serviceAccessRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointElasticsearchSettings">DmsEndpointElasticsearchSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `endpointUriInput`<sup>Optional</sup> <a name="endpointUriInput" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.property.endpointUriInput"></a>

```typescript
public readonly endpointUriInput: string;
```

- *Type:* string

---

##### `errorRetryDurationInput`<sup>Optional</sup> <a name="errorRetryDurationInput" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.property.errorRetryDurationInput"></a>

```typescript
public readonly errorRetryDurationInput: number;
```

- *Type:* number

---

##### `fullLoadErrorPercentageInput`<sup>Optional</sup> <a name="fullLoadErrorPercentageInput" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.property.fullLoadErrorPercentageInput"></a>

```typescript
public readonly fullLoadErrorPercentageInput: number;
```

- *Type:* number

---

##### `serviceAccessRoleArnInput`<sup>Optional</sup> <a name="serviceAccessRoleArnInput" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.property.serviceAccessRoleArnInput"></a>

```typescript
public readonly serviceAccessRoleArnInput: string;
```

- *Type:* string

---

##### `endpointUri`<sup>Required</sup> <a name="endpointUri" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.property.endpointUri"></a>

```typescript
public readonly endpointUri: string;
```

- *Type:* string

---

##### `errorRetryDuration`<sup>Required</sup> <a name="errorRetryDuration" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.property.errorRetryDuration"></a>

```typescript
public readonly errorRetryDuration: number;
```

- *Type:* number

---

##### `fullLoadErrorPercentage`<sup>Required</sup> <a name="fullLoadErrorPercentage" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.property.fullLoadErrorPercentage"></a>

```typescript
public readonly fullLoadErrorPercentage: number;
```

- *Type:* number

---

##### `serviceAccessRoleArn`<sup>Required</sup> <a name="serviceAccessRoleArn" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.property.serviceAccessRoleArn"></a>

```typescript
public readonly serviceAccessRoleArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DmsEndpointElasticsearchSettings;
```

- *Type:* <a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointElasticsearchSettings">DmsEndpointElasticsearchSettings</a>

---


### DmsEndpointKafkaSettingsOutputReference <a name="DmsEndpointKafkaSettingsOutputReference" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.Initializer"></a>

```typescript
import { dmsEndpoint } from '@cdktf/aws-cdk'

new dmsEndpoint.DmsEndpointKafkaSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetIncludeControlDetails">resetIncludeControlDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetIncludeNullAndEmpty">resetIncludeNullAndEmpty</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetIncludePartitionValue">resetIncludePartitionValue</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetIncludeTableAlterOperations">resetIncludeTableAlterOperations</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetIncludeTransactionDetails">resetIncludeTransactionDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetMessageFormat">resetMessageFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetMessageMaxBytes">resetMessageMaxBytes</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetNoHexPrefix">resetNoHexPrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetPartitionIncludeSchemaTable">resetPartitionIncludeSchemaTable</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetSaslPassword">resetSaslPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetSaslUsername">resetSaslUsername</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetSecurityProtocol">resetSecurityProtocol</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetSslCaCertificateArn">resetSslCaCertificateArn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetSslClientCertificateArn">resetSslClientCertificateArn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetSslClientKeyArn">resetSslClientKeyArn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetSslClientKeyPassword">resetSslClientKeyPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetTopic">resetTopic</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIncludeControlDetails` <a name="resetIncludeControlDetails" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetIncludeControlDetails"></a>

```typescript
public resetIncludeControlDetails(): void
```

##### `resetIncludeNullAndEmpty` <a name="resetIncludeNullAndEmpty" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetIncludeNullAndEmpty"></a>

```typescript
public resetIncludeNullAndEmpty(): void
```

##### `resetIncludePartitionValue` <a name="resetIncludePartitionValue" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetIncludePartitionValue"></a>

```typescript
public resetIncludePartitionValue(): void
```

##### `resetIncludeTableAlterOperations` <a name="resetIncludeTableAlterOperations" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetIncludeTableAlterOperations"></a>

```typescript
public resetIncludeTableAlterOperations(): void
```

##### `resetIncludeTransactionDetails` <a name="resetIncludeTransactionDetails" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetIncludeTransactionDetails"></a>

```typescript
public resetIncludeTransactionDetails(): void
```

##### `resetMessageFormat` <a name="resetMessageFormat" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetMessageFormat"></a>

```typescript
public resetMessageFormat(): void
```

##### `resetMessageMaxBytes` <a name="resetMessageMaxBytes" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetMessageMaxBytes"></a>

```typescript
public resetMessageMaxBytes(): void
```

##### `resetNoHexPrefix` <a name="resetNoHexPrefix" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetNoHexPrefix"></a>

```typescript
public resetNoHexPrefix(): void
```

##### `resetPartitionIncludeSchemaTable` <a name="resetPartitionIncludeSchemaTable" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetPartitionIncludeSchemaTable"></a>

```typescript
public resetPartitionIncludeSchemaTable(): void
```

##### `resetSaslPassword` <a name="resetSaslPassword" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetSaslPassword"></a>

```typescript
public resetSaslPassword(): void
```

##### `resetSaslUsername` <a name="resetSaslUsername" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetSaslUsername"></a>

```typescript
public resetSaslUsername(): void
```

##### `resetSecurityProtocol` <a name="resetSecurityProtocol" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetSecurityProtocol"></a>

```typescript
public resetSecurityProtocol(): void
```

##### `resetSslCaCertificateArn` <a name="resetSslCaCertificateArn" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetSslCaCertificateArn"></a>

```typescript
public resetSslCaCertificateArn(): void
```

##### `resetSslClientCertificateArn` <a name="resetSslClientCertificateArn" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetSslClientCertificateArn"></a>

```typescript
public resetSslClientCertificateArn(): void
```

##### `resetSslClientKeyArn` <a name="resetSslClientKeyArn" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetSslClientKeyArn"></a>

```typescript
public resetSslClientKeyArn(): void
```

##### `resetSslClientKeyPassword` <a name="resetSslClientKeyPassword" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetSslClientKeyPassword"></a>

```typescript
public resetSslClientKeyPassword(): void
```

##### `resetTopic` <a name="resetTopic" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetTopic"></a>

```typescript
public resetTopic(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.brokerInput">brokerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.includeControlDetailsInput">includeControlDetailsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.includeNullAndEmptyInput">includeNullAndEmptyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.includePartitionValueInput">includePartitionValueInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.includeTableAlterOperationsInput">includeTableAlterOperationsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.includeTransactionDetailsInput">includeTransactionDetailsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.messageFormatInput">messageFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.messageMaxBytesInput">messageMaxBytesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.noHexPrefixInput">noHexPrefixInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.partitionIncludeSchemaTableInput">partitionIncludeSchemaTableInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.saslPasswordInput">saslPasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.saslUsernameInput">saslUsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.securityProtocolInput">securityProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.sslCaCertificateArnInput">sslCaCertificateArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.sslClientCertificateArnInput">sslClientCertificateArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.sslClientKeyArnInput">sslClientKeyArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.sslClientKeyPasswordInput">sslClientKeyPasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.topicInput">topicInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.broker">broker</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.includeControlDetails">includeControlDetails</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.includeNullAndEmpty">includeNullAndEmpty</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.includePartitionValue">includePartitionValue</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.includeTableAlterOperations">includeTableAlterOperations</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.includeTransactionDetails">includeTransactionDetails</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.messageFormat">messageFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.messageMaxBytes">messageMaxBytes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.noHexPrefix">noHexPrefix</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.partitionIncludeSchemaTable">partitionIncludeSchemaTable</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.saslPassword">saslPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.saslUsername">saslUsername</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.securityProtocol">securityProtocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.sslCaCertificateArn">sslCaCertificateArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.sslClientCertificateArn">sslClientCertificateArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.sslClientKeyArn">sslClientKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.sslClientKeyPassword">sslClientKeyPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.topic">topic</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKafkaSettings">DmsEndpointKafkaSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `brokerInput`<sup>Optional</sup> <a name="brokerInput" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.brokerInput"></a>

```typescript
public readonly brokerInput: string;
```

- *Type:* string

---

##### `includeControlDetailsInput`<sup>Optional</sup> <a name="includeControlDetailsInput" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.includeControlDetailsInput"></a>

```typescript
public readonly includeControlDetailsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `includeNullAndEmptyInput`<sup>Optional</sup> <a name="includeNullAndEmptyInput" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.includeNullAndEmptyInput"></a>

```typescript
public readonly includeNullAndEmptyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `includePartitionValueInput`<sup>Optional</sup> <a name="includePartitionValueInput" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.includePartitionValueInput"></a>

```typescript
public readonly includePartitionValueInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `includeTableAlterOperationsInput`<sup>Optional</sup> <a name="includeTableAlterOperationsInput" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.includeTableAlterOperationsInput"></a>

```typescript
public readonly includeTableAlterOperationsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `includeTransactionDetailsInput`<sup>Optional</sup> <a name="includeTransactionDetailsInput" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.includeTransactionDetailsInput"></a>

```typescript
public readonly includeTransactionDetailsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `messageFormatInput`<sup>Optional</sup> <a name="messageFormatInput" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.messageFormatInput"></a>

```typescript
public readonly messageFormatInput: string;
```

- *Type:* string

---

##### `messageMaxBytesInput`<sup>Optional</sup> <a name="messageMaxBytesInput" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.messageMaxBytesInput"></a>

```typescript
public readonly messageMaxBytesInput: number;
```

- *Type:* number

---

##### `noHexPrefixInput`<sup>Optional</sup> <a name="noHexPrefixInput" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.noHexPrefixInput"></a>

```typescript
public readonly noHexPrefixInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `partitionIncludeSchemaTableInput`<sup>Optional</sup> <a name="partitionIncludeSchemaTableInput" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.partitionIncludeSchemaTableInput"></a>

```typescript
public readonly partitionIncludeSchemaTableInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `saslPasswordInput`<sup>Optional</sup> <a name="saslPasswordInput" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.saslPasswordInput"></a>

```typescript
public readonly saslPasswordInput: string;
```

- *Type:* string

---

##### `saslUsernameInput`<sup>Optional</sup> <a name="saslUsernameInput" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.saslUsernameInput"></a>

```typescript
public readonly saslUsernameInput: string;
```

- *Type:* string

---

##### `securityProtocolInput`<sup>Optional</sup> <a name="securityProtocolInput" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.securityProtocolInput"></a>

```typescript
public readonly securityProtocolInput: string;
```

- *Type:* string

---

##### `sslCaCertificateArnInput`<sup>Optional</sup> <a name="sslCaCertificateArnInput" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.sslCaCertificateArnInput"></a>

```typescript
public readonly sslCaCertificateArnInput: string;
```

- *Type:* string

---

##### `sslClientCertificateArnInput`<sup>Optional</sup> <a name="sslClientCertificateArnInput" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.sslClientCertificateArnInput"></a>

```typescript
public readonly sslClientCertificateArnInput: string;
```

- *Type:* string

---

##### `sslClientKeyArnInput`<sup>Optional</sup> <a name="sslClientKeyArnInput" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.sslClientKeyArnInput"></a>

```typescript
public readonly sslClientKeyArnInput: string;
```

- *Type:* string

---

##### `sslClientKeyPasswordInput`<sup>Optional</sup> <a name="sslClientKeyPasswordInput" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.sslClientKeyPasswordInput"></a>

```typescript
public readonly sslClientKeyPasswordInput: string;
```

- *Type:* string

---

##### `topicInput`<sup>Optional</sup> <a name="topicInput" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.topicInput"></a>

```typescript
public readonly topicInput: string;
```

- *Type:* string

---

##### `broker`<sup>Required</sup> <a name="broker" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.broker"></a>

```typescript
public readonly broker: string;
```

- *Type:* string

---

##### `includeControlDetails`<sup>Required</sup> <a name="includeControlDetails" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.includeControlDetails"></a>

```typescript
public readonly includeControlDetails: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `includeNullAndEmpty`<sup>Required</sup> <a name="includeNullAndEmpty" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.includeNullAndEmpty"></a>

```typescript
public readonly includeNullAndEmpty: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `includePartitionValue`<sup>Required</sup> <a name="includePartitionValue" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.includePartitionValue"></a>

```typescript
public readonly includePartitionValue: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `includeTableAlterOperations`<sup>Required</sup> <a name="includeTableAlterOperations" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.includeTableAlterOperations"></a>

```typescript
public readonly includeTableAlterOperations: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `includeTransactionDetails`<sup>Required</sup> <a name="includeTransactionDetails" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.includeTransactionDetails"></a>

```typescript
public readonly includeTransactionDetails: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `messageFormat`<sup>Required</sup> <a name="messageFormat" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.messageFormat"></a>

```typescript
public readonly messageFormat: string;
```

- *Type:* string

---

##### `messageMaxBytes`<sup>Required</sup> <a name="messageMaxBytes" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.messageMaxBytes"></a>

```typescript
public readonly messageMaxBytes: number;
```

- *Type:* number

---

##### `noHexPrefix`<sup>Required</sup> <a name="noHexPrefix" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.noHexPrefix"></a>

```typescript
public readonly noHexPrefix: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `partitionIncludeSchemaTable`<sup>Required</sup> <a name="partitionIncludeSchemaTable" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.partitionIncludeSchemaTable"></a>

```typescript
public readonly partitionIncludeSchemaTable: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `saslPassword`<sup>Required</sup> <a name="saslPassword" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.saslPassword"></a>

```typescript
public readonly saslPassword: string;
```

- *Type:* string

---

##### `saslUsername`<sup>Required</sup> <a name="saslUsername" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.saslUsername"></a>

```typescript
public readonly saslUsername: string;
```

- *Type:* string

---

##### `securityProtocol`<sup>Required</sup> <a name="securityProtocol" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.securityProtocol"></a>

```typescript
public readonly securityProtocol: string;
```

- *Type:* string

---

##### `sslCaCertificateArn`<sup>Required</sup> <a name="sslCaCertificateArn" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.sslCaCertificateArn"></a>

```typescript
public readonly sslCaCertificateArn: string;
```

- *Type:* string

---

##### `sslClientCertificateArn`<sup>Required</sup> <a name="sslClientCertificateArn" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.sslClientCertificateArn"></a>

```typescript
public readonly sslClientCertificateArn: string;
```

- *Type:* string

---

##### `sslClientKeyArn`<sup>Required</sup> <a name="sslClientKeyArn" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.sslClientKeyArn"></a>

```typescript
public readonly sslClientKeyArn: string;
```

- *Type:* string

---

##### `sslClientKeyPassword`<sup>Required</sup> <a name="sslClientKeyPassword" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.sslClientKeyPassword"></a>

```typescript
public readonly sslClientKeyPassword: string;
```

- *Type:* string

---

##### `topic`<sup>Required</sup> <a name="topic" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.topic"></a>

```typescript
public readonly topic: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DmsEndpointKafkaSettings;
```

- *Type:* <a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKafkaSettings">DmsEndpointKafkaSettings</a>

---


### DmsEndpointKinesisSettingsOutputReference <a name="DmsEndpointKinesisSettingsOutputReference" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.Initializer"></a>

```typescript
import { dmsEndpoint } from '@cdktf/aws-cdk'

new dmsEndpoint.DmsEndpointKinesisSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.resetIncludeControlDetails">resetIncludeControlDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.resetIncludeNullAndEmpty">resetIncludeNullAndEmpty</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.resetIncludePartitionValue">resetIncludePartitionValue</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.resetIncludeTableAlterOperations">resetIncludeTableAlterOperations</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.resetIncludeTransactionDetails">resetIncludeTransactionDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.resetMessageFormat">resetMessageFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.resetPartitionIncludeSchemaTable">resetPartitionIncludeSchemaTable</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.resetServiceAccessRoleArn">resetServiceAccessRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.resetStreamArn">resetStreamArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIncludeControlDetails` <a name="resetIncludeControlDetails" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.resetIncludeControlDetails"></a>

```typescript
public resetIncludeControlDetails(): void
```

##### `resetIncludeNullAndEmpty` <a name="resetIncludeNullAndEmpty" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.resetIncludeNullAndEmpty"></a>

```typescript
public resetIncludeNullAndEmpty(): void
```

##### `resetIncludePartitionValue` <a name="resetIncludePartitionValue" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.resetIncludePartitionValue"></a>

```typescript
public resetIncludePartitionValue(): void
```

##### `resetIncludeTableAlterOperations` <a name="resetIncludeTableAlterOperations" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.resetIncludeTableAlterOperations"></a>

```typescript
public resetIncludeTableAlterOperations(): void
```

##### `resetIncludeTransactionDetails` <a name="resetIncludeTransactionDetails" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.resetIncludeTransactionDetails"></a>

```typescript
public resetIncludeTransactionDetails(): void
```

##### `resetMessageFormat` <a name="resetMessageFormat" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.resetMessageFormat"></a>

```typescript
public resetMessageFormat(): void
```

##### `resetPartitionIncludeSchemaTable` <a name="resetPartitionIncludeSchemaTable" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.resetPartitionIncludeSchemaTable"></a>

```typescript
public resetPartitionIncludeSchemaTable(): void
```

##### `resetServiceAccessRoleArn` <a name="resetServiceAccessRoleArn" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.resetServiceAccessRoleArn"></a>

```typescript
public resetServiceAccessRoleArn(): void
```

##### `resetStreamArn` <a name="resetStreamArn" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.resetStreamArn"></a>

```typescript
public resetStreamArn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.includeControlDetailsInput">includeControlDetailsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.includeNullAndEmptyInput">includeNullAndEmptyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.includePartitionValueInput">includePartitionValueInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.includeTableAlterOperationsInput">includeTableAlterOperationsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.includeTransactionDetailsInput">includeTransactionDetailsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.messageFormatInput">messageFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.partitionIncludeSchemaTableInput">partitionIncludeSchemaTableInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.serviceAccessRoleArnInput">serviceAccessRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.streamArnInput">streamArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.includeControlDetails">includeControlDetails</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.includeNullAndEmpty">includeNullAndEmpty</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.includePartitionValue">includePartitionValue</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.includeTableAlterOperations">includeTableAlterOperations</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.includeTransactionDetails">includeTransactionDetails</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.messageFormat">messageFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.partitionIncludeSchemaTable">partitionIncludeSchemaTable</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.serviceAccessRoleArn">serviceAccessRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.streamArn">streamArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKinesisSettings">DmsEndpointKinesisSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `includeControlDetailsInput`<sup>Optional</sup> <a name="includeControlDetailsInput" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.includeControlDetailsInput"></a>

```typescript
public readonly includeControlDetailsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `includeNullAndEmptyInput`<sup>Optional</sup> <a name="includeNullAndEmptyInput" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.includeNullAndEmptyInput"></a>

```typescript
public readonly includeNullAndEmptyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `includePartitionValueInput`<sup>Optional</sup> <a name="includePartitionValueInput" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.includePartitionValueInput"></a>

```typescript
public readonly includePartitionValueInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `includeTableAlterOperationsInput`<sup>Optional</sup> <a name="includeTableAlterOperationsInput" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.includeTableAlterOperationsInput"></a>

```typescript
public readonly includeTableAlterOperationsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `includeTransactionDetailsInput`<sup>Optional</sup> <a name="includeTransactionDetailsInput" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.includeTransactionDetailsInput"></a>

```typescript
public readonly includeTransactionDetailsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `messageFormatInput`<sup>Optional</sup> <a name="messageFormatInput" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.messageFormatInput"></a>

```typescript
public readonly messageFormatInput: string;
```

- *Type:* string

---

##### `partitionIncludeSchemaTableInput`<sup>Optional</sup> <a name="partitionIncludeSchemaTableInput" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.partitionIncludeSchemaTableInput"></a>

```typescript
public readonly partitionIncludeSchemaTableInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `serviceAccessRoleArnInput`<sup>Optional</sup> <a name="serviceAccessRoleArnInput" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.serviceAccessRoleArnInput"></a>

```typescript
public readonly serviceAccessRoleArnInput: string;
```

- *Type:* string

---

##### `streamArnInput`<sup>Optional</sup> <a name="streamArnInput" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.streamArnInput"></a>

```typescript
public readonly streamArnInput: string;
```

- *Type:* string

---

##### `includeControlDetails`<sup>Required</sup> <a name="includeControlDetails" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.includeControlDetails"></a>

```typescript
public readonly includeControlDetails: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `includeNullAndEmpty`<sup>Required</sup> <a name="includeNullAndEmpty" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.includeNullAndEmpty"></a>

```typescript
public readonly includeNullAndEmpty: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `includePartitionValue`<sup>Required</sup> <a name="includePartitionValue" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.includePartitionValue"></a>

```typescript
public readonly includePartitionValue: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `includeTableAlterOperations`<sup>Required</sup> <a name="includeTableAlterOperations" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.includeTableAlterOperations"></a>

```typescript
public readonly includeTableAlterOperations: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `includeTransactionDetails`<sup>Required</sup> <a name="includeTransactionDetails" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.includeTransactionDetails"></a>

```typescript
public readonly includeTransactionDetails: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `messageFormat`<sup>Required</sup> <a name="messageFormat" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.messageFormat"></a>

```typescript
public readonly messageFormat: string;
```

- *Type:* string

---

##### `partitionIncludeSchemaTable`<sup>Required</sup> <a name="partitionIncludeSchemaTable" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.partitionIncludeSchemaTable"></a>

```typescript
public readonly partitionIncludeSchemaTable: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `serviceAccessRoleArn`<sup>Required</sup> <a name="serviceAccessRoleArn" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.serviceAccessRoleArn"></a>

```typescript
public readonly serviceAccessRoleArn: string;
```

- *Type:* string

---

##### `streamArn`<sup>Required</sup> <a name="streamArn" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.streamArn"></a>

```typescript
public readonly streamArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DmsEndpointKinesisSettings;
```

- *Type:* <a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointKinesisSettings">DmsEndpointKinesisSettings</a>

---


### DmsEndpointMongodbSettingsOutputReference <a name="DmsEndpointMongodbSettingsOutputReference" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.Initializer"></a>

```typescript
import { dmsEndpoint } from '@cdktf/aws-cdk'

new dmsEndpoint.DmsEndpointMongodbSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.resetAuthMechanism">resetAuthMechanism</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.resetAuthSource">resetAuthSource</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.resetAuthType">resetAuthType</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.resetDocsToInvestigate">resetDocsToInvestigate</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.resetExtractDocId">resetExtractDocId</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.resetNestingLevel">resetNestingLevel</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAuthMechanism` <a name="resetAuthMechanism" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.resetAuthMechanism"></a>

```typescript
public resetAuthMechanism(): void
```

##### `resetAuthSource` <a name="resetAuthSource" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.resetAuthSource"></a>

```typescript
public resetAuthSource(): void
```

##### `resetAuthType` <a name="resetAuthType" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.resetAuthType"></a>

```typescript
public resetAuthType(): void
```

##### `resetDocsToInvestigate` <a name="resetDocsToInvestigate" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.resetDocsToInvestigate"></a>

```typescript
public resetDocsToInvestigate(): void
```

##### `resetExtractDocId` <a name="resetExtractDocId" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.resetExtractDocId"></a>

```typescript
public resetExtractDocId(): void
```

##### `resetNestingLevel` <a name="resetNestingLevel" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.resetNestingLevel"></a>

```typescript
public resetNestingLevel(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.property.authMechanismInput">authMechanismInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.property.authSourceInput">authSourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.property.authTypeInput">authTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.property.docsToInvestigateInput">docsToInvestigateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.property.extractDocIdInput">extractDocIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.property.nestingLevelInput">nestingLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.property.authMechanism">authMechanism</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.property.authSource">authSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.property.authType">authType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.property.docsToInvestigate">docsToInvestigate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.property.extractDocId">extractDocId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.property.nestingLevel">nestingLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointMongodbSettings">DmsEndpointMongodbSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `authMechanismInput`<sup>Optional</sup> <a name="authMechanismInput" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.property.authMechanismInput"></a>

```typescript
public readonly authMechanismInput: string;
```

- *Type:* string

---

##### `authSourceInput`<sup>Optional</sup> <a name="authSourceInput" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.property.authSourceInput"></a>

```typescript
public readonly authSourceInput: string;
```

- *Type:* string

---

##### `authTypeInput`<sup>Optional</sup> <a name="authTypeInput" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.property.authTypeInput"></a>

```typescript
public readonly authTypeInput: string;
```

- *Type:* string

---

##### `docsToInvestigateInput`<sup>Optional</sup> <a name="docsToInvestigateInput" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.property.docsToInvestigateInput"></a>

```typescript
public readonly docsToInvestigateInput: string;
```

- *Type:* string

---

##### `extractDocIdInput`<sup>Optional</sup> <a name="extractDocIdInput" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.property.extractDocIdInput"></a>

```typescript
public readonly extractDocIdInput: string;
```

- *Type:* string

---

##### `nestingLevelInput`<sup>Optional</sup> <a name="nestingLevelInput" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.property.nestingLevelInput"></a>

```typescript
public readonly nestingLevelInput: string;
```

- *Type:* string

---

##### `authMechanism`<sup>Required</sup> <a name="authMechanism" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.property.authMechanism"></a>

```typescript
public readonly authMechanism: string;
```

- *Type:* string

---

##### `authSource`<sup>Required</sup> <a name="authSource" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.property.authSource"></a>

```typescript
public readonly authSource: string;
```

- *Type:* string

---

##### `authType`<sup>Required</sup> <a name="authType" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.property.authType"></a>

```typescript
public readonly authType: string;
```

- *Type:* string

---

##### `docsToInvestigate`<sup>Required</sup> <a name="docsToInvestigate" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.property.docsToInvestigate"></a>

```typescript
public readonly docsToInvestigate: string;
```

- *Type:* string

---

##### `extractDocId`<sup>Required</sup> <a name="extractDocId" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.property.extractDocId"></a>

```typescript
public readonly extractDocId: string;
```

- *Type:* string

---

##### `nestingLevel`<sup>Required</sup> <a name="nestingLevel" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.property.nestingLevel"></a>

```typescript
public readonly nestingLevel: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointMongodbSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DmsEndpointMongodbSettings;
```

- *Type:* <a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointMongodbSettings">DmsEndpointMongodbSettings</a>

---


### DmsEndpointS3SettingsOutputReference <a name="DmsEndpointS3SettingsOutputReference" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointS3SettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointS3SettingsOutputReference.Initializer"></a>

```typescript
import { dmsEndpoint } from '@cdktf/aws-cdk'

new dmsEndpoint.DmsEndpointS3SettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointS3SettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointS3SettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointS3SettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointS3SettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointS3SettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointS3SettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointS3SettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointS3SettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointS3SettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointS3SettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointS3SettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointS3SettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointS3SettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointS3SettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointS3SettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointS3SettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetBucketFolder">resetBucketFolder</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetBucketName">resetBucketName</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetCompressionType">resetCompressionType</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetCsvDelimiter">resetCsvDelimiter</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetCsvRowDelimiter">resetCsvRowDelimiter</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetDataFormat">resetDataFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetDatePartitionEnabled">resetDatePartitionEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetEncryptionMode">resetEncryptionMode</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetExternalTableDefinition">resetExternalTableDefinition</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetParquetTimestampInMillisecond">resetParquetTimestampInMillisecond</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetParquetVersion">resetParquetVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetServerSideEncryptionKmsKeyId">resetServerSideEncryptionKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetServiceAccessRoleArn">resetServiceAccessRoleArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointS3SettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointS3SettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointS3SettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointS3SettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointS3SettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointS3SettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointS3SettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointS3SettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointS3SettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointS3SettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointS3SettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointS3SettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointS3SettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointS3SettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointS3SettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointS3SettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointS3SettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointS3SettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointS3SettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointS3SettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointS3SettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointS3SettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBucketFolder` <a name="resetBucketFolder" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetBucketFolder"></a>

```typescript
public resetBucketFolder(): void
```

##### `resetBucketName` <a name="resetBucketName" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetBucketName"></a>

```typescript
public resetBucketName(): void
```

##### `resetCompressionType` <a name="resetCompressionType" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetCompressionType"></a>

```typescript
public resetCompressionType(): void
```

##### `resetCsvDelimiter` <a name="resetCsvDelimiter" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetCsvDelimiter"></a>

```typescript
public resetCsvDelimiter(): void
```

##### `resetCsvRowDelimiter` <a name="resetCsvRowDelimiter" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetCsvRowDelimiter"></a>

```typescript
public resetCsvRowDelimiter(): void
```

##### `resetDataFormat` <a name="resetDataFormat" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetDataFormat"></a>

```typescript
public resetDataFormat(): void
```

##### `resetDatePartitionEnabled` <a name="resetDatePartitionEnabled" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetDatePartitionEnabled"></a>

```typescript
public resetDatePartitionEnabled(): void
```

##### `resetEncryptionMode` <a name="resetEncryptionMode" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetEncryptionMode"></a>

```typescript
public resetEncryptionMode(): void
```

##### `resetExternalTableDefinition` <a name="resetExternalTableDefinition" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetExternalTableDefinition"></a>

```typescript
public resetExternalTableDefinition(): void
```

##### `resetParquetTimestampInMillisecond` <a name="resetParquetTimestampInMillisecond" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetParquetTimestampInMillisecond"></a>

```typescript
public resetParquetTimestampInMillisecond(): void
```

##### `resetParquetVersion` <a name="resetParquetVersion" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetParquetVersion"></a>

```typescript
public resetParquetVersion(): void
```

##### `resetServerSideEncryptionKmsKeyId` <a name="resetServerSideEncryptionKmsKeyId" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetServerSideEncryptionKmsKeyId"></a>

```typescript
public resetServerSideEncryptionKmsKeyId(): void
```

##### `resetServiceAccessRoleArn` <a name="resetServiceAccessRoleArn" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetServiceAccessRoleArn"></a>

```typescript
public resetServiceAccessRoleArn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.bucketFolderInput">bucketFolderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.bucketNameInput">bucketNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.compressionTypeInput">compressionTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.csvDelimiterInput">csvDelimiterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.csvRowDelimiterInput">csvRowDelimiterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.dataFormatInput">dataFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.datePartitionEnabledInput">datePartitionEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.encryptionModeInput">encryptionModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.externalTableDefinitionInput">externalTableDefinitionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.parquetTimestampInMillisecondInput">parquetTimestampInMillisecondInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.parquetVersionInput">parquetVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.serverSideEncryptionKmsKeyIdInput">serverSideEncryptionKmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.serviceAccessRoleArnInput">serviceAccessRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.bucketFolder">bucketFolder</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.bucketName">bucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.compressionType">compressionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.csvDelimiter">csvDelimiter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.csvRowDelimiter">csvRowDelimiter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.dataFormat">dataFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.datePartitionEnabled">datePartitionEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.encryptionMode">encryptionMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.externalTableDefinition">externalTableDefinition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.parquetTimestampInMillisecond">parquetTimestampInMillisecond</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.parquetVersion">parquetVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.serverSideEncryptionKmsKeyId">serverSideEncryptionKmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.serviceAccessRoleArn">serviceAccessRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointS3Settings">DmsEndpointS3Settings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bucketFolderInput`<sup>Optional</sup> <a name="bucketFolderInput" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.bucketFolderInput"></a>

```typescript
public readonly bucketFolderInput: string;
```

- *Type:* string

---

##### `bucketNameInput`<sup>Optional</sup> <a name="bucketNameInput" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.bucketNameInput"></a>

```typescript
public readonly bucketNameInput: string;
```

- *Type:* string

---

##### `compressionTypeInput`<sup>Optional</sup> <a name="compressionTypeInput" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.compressionTypeInput"></a>

```typescript
public readonly compressionTypeInput: string;
```

- *Type:* string

---

##### `csvDelimiterInput`<sup>Optional</sup> <a name="csvDelimiterInput" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.csvDelimiterInput"></a>

```typescript
public readonly csvDelimiterInput: string;
```

- *Type:* string

---

##### `csvRowDelimiterInput`<sup>Optional</sup> <a name="csvRowDelimiterInput" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.csvRowDelimiterInput"></a>

```typescript
public readonly csvRowDelimiterInput: string;
```

- *Type:* string

---

##### `dataFormatInput`<sup>Optional</sup> <a name="dataFormatInput" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.dataFormatInput"></a>

```typescript
public readonly dataFormatInput: string;
```

- *Type:* string

---

##### `datePartitionEnabledInput`<sup>Optional</sup> <a name="datePartitionEnabledInput" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.datePartitionEnabledInput"></a>

```typescript
public readonly datePartitionEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `encryptionModeInput`<sup>Optional</sup> <a name="encryptionModeInput" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.encryptionModeInput"></a>

```typescript
public readonly encryptionModeInput: string;
```

- *Type:* string

---

##### `externalTableDefinitionInput`<sup>Optional</sup> <a name="externalTableDefinitionInput" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.externalTableDefinitionInput"></a>

```typescript
public readonly externalTableDefinitionInput: string;
```

- *Type:* string

---

##### `parquetTimestampInMillisecondInput`<sup>Optional</sup> <a name="parquetTimestampInMillisecondInput" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.parquetTimestampInMillisecondInput"></a>

```typescript
public readonly parquetTimestampInMillisecondInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `parquetVersionInput`<sup>Optional</sup> <a name="parquetVersionInput" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.parquetVersionInput"></a>

```typescript
public readonly parquetVersionInput: string;
```

- *Type:* string

---

##### `serverSideEncryptionKmsKeyIdInput`<sup>Optional</sup> <a name="serverSideEncryptionKmsKeyIdInput" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.serverSideEncryptionKmsKeyIdInput"></a>

```typescript
public readonly serverSideEncryptionKmsKeyIdInput: string;
```

- *Type:* string

---

##### `serviceAccessRoleArnInput`<sup>Optional</sup> <a name="serviceAccessRoleArnInput" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.serviceAccessRoleArnInput"></a>

```typescript
public readonly serviceAccessRoleArnInput: string;
```

- *Type:* string

---

##### `bucketFolder`<sup>Required</sup> <a name="bucketFolder" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.bucketFolder"></a>

```typescript
public readonly bucketFolder: string;
```

- *Type:* string

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.bucketName"></a>

```typescript
public readonly bucketName: string;
```

- *Type:* string

---

##### `compressionType`<sup>Required</sup> <a name="compressionType" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.compressionType"></a>

```typescript
public readonly compressionType: string;
```

- *Type:* string

---

##### `csvDelimiter`<sup>Required</sup> <a name="csvDelimiter" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.csvDelimiter"></a>

```typescript
public readonly csvDelimiter: string;
```

- *Type:* string

---

##### `csvRowDelimiter`<sup>Required</sup> <a name="csvRowDelimiter" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.csvRowDelimiter"></a>

```typescript
public readonly csvRowDelimiter: string;
```

- *Type:* string

---

##### `dataFormat`<sup>Required</sup> <a name="dataFormat" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.dataFormat"></a>

```typescript
public readonly dataFormat: string;
```

- *Type:* string

---

##### `datePartitionEnabled`<sup>Required</sup> <a name="datePartitionEnabled" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.datePartitionEnabled"></a>

```typescript
public readonly datePartitionEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `encryptionMode`<sup>Required</sup> <a name="encryptionMode" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.encryptionMode"></a>

```typescript
public readonly encryptionMode: string;
```

- *Type:* string

---

##### `externalTableDefinition`<sup>Required</sup> <a name="externalTableDefinition" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.externalTableDefinition"></a>

```typescript
public readonly externalTableDefinition: string;
```

- *Type:* string

---

##### `parquetTimestampInMillisecond`<sup>Required</sup> <a name="parquetTimestampInMillisecond" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.parquetTimestampInMillisecond"></a>

```typescript
public readonly parquetTimestampInMillisecond: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `parquetVersion`<sup>Required</sup> <a name="parquetVersion" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.parquetVersion"></a>

```typescript
public readonly parquetVersion: string;
```

- *Type:* string

---

##### `serverSideEncryptionKmsKeyId`<sup>Required</sup> <a name="serverSideEncryptionKmsKeyId" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.serverSideEncryptionKmsKeyId"></a>

```typescript
public readonly serverSideEncryptionKmsKeyId: string;
```

- *Type:* string

---

##### `serviceAccessRoleArn`<sup>Required</sup> <a name="serviceAccessRoleArn" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.serviceAccessRoleArn"></a>

```typescript
public readonly serviceAccessRoleArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DmsEndpointS3Settings;
```

- *Type:* <a href="#@cdktf/aws-cdk.dmsEndpoint.DmsEndpointS3Settings">DmsEndpointS3Settings</a>

---



