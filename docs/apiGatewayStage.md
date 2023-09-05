# `aws_api_gateway_stage`

Refer to the Terraform Registory for docs: [`aws_api_gateway_stage`](https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/api_gateway_stage).

# `apiGatewayStage` Submodule <a name="`apiGatewayStage` Submodule" id="@cdktf/aws-cdk.apiGatewayStage"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApiGatewayStage <a name="ApiGatewayStage" id="@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStage"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/api_gateway_stage aws_api_gateway_stage}.

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStage.Initializer"></a>

```typescript
import { apiGatewayStage } from '@cdktf/aws-cdk'

new apiGatewayStage.ApiGatewayStage(scope: Construct, id: string, config: ApiGatewayStageConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStage.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStage.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStage.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStageConfig">ApiGatewayStageConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStage.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStage.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStage.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStageConfig">ApiGatewayStageConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStage.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStage.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStage.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStage.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStage.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStage.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStage.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStage.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStage.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStage.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStage.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStage.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStage.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStage.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStage.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStage.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStage.putAccessLogSettings">putAccessLogSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStage.resetAccessLogSettings">resetAccessLogSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStage.resetCacheClusterEnabled">resetCacheClusterEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStage.resetCacheClusterSize">resetCacheClusterSize</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStage.resetClientCertificateId">resetClientCertificateId</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStage.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStage.resetDocumentationVersion">resetDocumentationVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStage.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStage.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStage.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStage.resetVariables">resetVariables</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStage.resetXrayTracingEnabled">resetXrayTracingEnabled</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStage.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStage.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStage.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStage.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStage.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStage.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStage.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStage.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStage.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStage.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStage.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStage.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStage.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStage.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStage.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStage.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStage.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStage.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStage.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStage.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStage.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStage.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStage.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStage.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStage.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStage.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStage.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStage.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStage.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putAccessLogSettings` <a name="putAccessLogSettings" id="@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStage.putAccessLogSettings"></a>

```typescript
public putAccessLogSettings(value: ApiGatewayStageAccessLogSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStage.putAccessLogSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStageAccessLogSettings">ApiGatewayStageAccessLogSettings</a>

---

##### `resetAccessLogSettings` <a name="resetAccessLogSettings" id="@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStage.resetAccessLogSettings"></a>

```typescript
public resetAccessLogSettings(): void
```

##### `resetCacheClusterEnabled` <a name="resetCacheClusterEnabled" id="@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStage.resetCacheClusterEnabled"></a>

```typescript
public resetCacheClusterEnabled(): void
```

##### `resetCacheClusterSize` <a name="resetCacheClusterSize" id="@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStage.resetCacheClusterSize"></a>

```typescript
public resetCacheClusterSize(): void
```

##### `resetClientCertificateId` <a name="resetClientCertificateId" id="@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStage.resetClientCertificateId"></a>

```typescript
public resetClientCertificateId(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStage.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDocumentationVersion` <a name="resetDocumentationVersion" id="@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStage.resetDocumentationVersion"></a>

```typescript
public resetDocumentationVersion(): void
```

##### `resetId` <a name="resetId" id="@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStage.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStage.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStage.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

##### `resetVariables` <a name="resetVariables" id="@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStage.resetVariables"></a>

```typescript
public resetVariables(): void
```

##### `resetXrayTracingEnabled` <a name="resetXrayTracingEnabled" id="@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStage.resetXrayTracingEnabled"></a>

```typescript
public resetXrayTracingEnabled(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStage.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStage.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStage.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStage.isConstruct"></a>

```typescript
import { apiGatewayStage } from '@cdktf/aws-cdk'

apiGatewayStage.ApiGatewayStage.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStage.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStage.isTerraformElement"></a>

```typescript
import { apiGatewayStage } from '@cdktf/aws-cdk'

apiGatewayStage.ApiGatewayStage.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStage.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStage.isTerraformResource"></a>

```typescript
import { apiGatewayStage } from '@cdktf/aws-cdk'

apiGatewayStage.ApiGatewayStage.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStage.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStage.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStage.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStage.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStage.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStage.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStage.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStage.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStage.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStage.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStage.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStage.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStage.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStage.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStage.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStage.property.accessLogSettings">accessLogSettings</a></code> | <code><a href="#@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference">ApiGatewayStageAccessLogSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStage.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStage.property.executionArn">executionArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStage.property.invokeUrl">invokeUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStage.property.webAclArn">webAclArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStage.property.accessLogSettingsInput">accessLogSettingsInput</a></code> | <code><a href="#@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStageAccessLogSettings">ApiGatewayStageAccessLogSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStage.property.cacheClusterEnabledInput">cacheClusterEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStage.property.cacheClusterSizeInput">cacheClusterSizeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStage.property.clientCertificateIdInput">clientCertificateIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStage.property.deploymentIdInput">deploymentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStage.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStage.property.documentationVersionInput">documentationVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStage.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStage.property.restApiIdInput">restApiIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStage.property.stageNameInput">stageNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStage.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStage.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStage.property.variablesInput">variablesInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStage.property.xrayTracingEnabledInput">xrayTracingEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStage.property.cacheClusterEnabled">cacheClusterEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStage.property.cacheClusterSize">cacheClusterSize</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStage.property.clientCertificateId">clientCertificateId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStage.property.deploymentId">deploymentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStage.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStage.property.documentationVersion">documentationVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStage.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStage.property.restApiId">restApiId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStage.property.stageName">stageName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStage.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStage.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStage.property.variables">variables</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStage.property.xrayTracingEnabled">xrayTracingEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStage.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStage.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStage.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStage.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStage.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStage.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStage.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStage.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStage.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStage.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStage.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStage.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStage.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStage.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `accessLogSettings`<sup>Required</sup> <a name="accessLogSettings" id="@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStage.property.accessLogSettings"></a>

```typescript
public readonly accessLogSettings: ApiGatewayStageAccessLogSettingsOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference">ApiGatewayStageAccessLogSettingsOutputReference</a>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStage.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `executionArn`<sup>Required</sup> <a name="executionArn" id="@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStage.property.executionArn"></a>

```typescript
public readonly executionArn: string;
```

- *Type:* string

---

##### `invokeUrl`<sup>Required</sup> <a name="invokeUrl" id="@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStage.property.invokeUrl"></a>

```typescript
public readonly invokeUrl: string;
```

- *Type:* string

---

##### `webAclArn`<sup>Required</sup> <a name="webAclArn" id="@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStage.property.webAclArn"></a>

```typescript
public readonly webAclArn: string;
```

- *Type:* string

---

##### `accessLogSettingsInput`<sup>Optional</sup> <a name="accessLogSettingsInput" id="@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStage.property.accessLogSettingsInput"></a>

```typescript
public readonly accessLogSettingsInput: ApiGatewayStageAccessLogSettings;
```

- *Type:* <a href="#@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStageAccessLogSettings">ApiGatewayStageAccessLogSettings</a>

---

##### `cacheClusterEnabledInput`<sup>Optional</sup> <a name="cacheClusterEnabledInput" id="@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStage.property.cacheClusterEnabledInput"></a>

```typescript
public readonly cacheClusterEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `cacheClusterSizeInput`<sup>Optional</sup> <a name="cacheClusterSizeInput" id="@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStage.property.cacheClusterSizeInput"></a>

```typescript
public readonly cacheClusterSizeInput: string;
```

- *Type:* string

---

##### `clientCertificateIdInput`<sup>Optional</sup> <a name="clientCertificateIdInput" id="@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStage.property.clientCertificateIdInput"></a>

```typescript
public readonly clientCertificateIdInput: string;
```

- *Type:* string

---

##### `deploymentIdInput`<sup>Optional</sup> <a name="deploymentIdInput" id="@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStage.property.deploymentIdInput"></a>

```typescript
public readonly deploymentIdInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStage.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `documentationVersionInput`<sup>Optional</sup> <a name="documentationVersionInput" id="@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStage.property.documentationVersionInput"></a>

```typescript
public readonly documentationVersionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStage.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `restApiIdInput`<sup>Optional</sup> <a name="restApiIdInput" id="@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStage.property.restApiIdInput"></a>

```typescript
public readonly restApiIdInput: string;
```

- *Type:* string

---

##### `stageNameInput`<sup>Optional</sup> <a name="stageNameInput" id="@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStage.property.stageNameInput"></a>

```typescript
public readonly stageNameInput: string;
```

- *Type:* string

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStage.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStage.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `variablesInput`<sup>Optional</sup> <a name="variablesInput" id="@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStage.property.variablesInput"></a>

```typescript
public readonly variablesInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `xrayTracingEnabledInput`<sup>Optional</sup> <a name="xrayTracingEnabledInput" id="@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStage.property.xrayTracingEnabledInput"></a>

```typescript
public readonly xrayTracingEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `cacheClusterEnabled`<sup>Required</sup> <a name="cacheClusterEnabled" id="@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStage.property.cacheClusterEnabled"></a>

```typescript
public readonly cacheClusterEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `cacheClusterSize`<sup>Required</sup> <a name="cacheClusterSize" id="@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStage.property.cacheClusterSize"></a>

```typescript
public readonly cacheClusterSize: string;
```

- *Type:* string

---

##### `clientCertificateId`<sup>Required</sup> <a name="clientCertificateId" id="@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStage.property.clientCertificateId"></a>

```typescript
public readonly clientCertificateId: string;
```

- *Type:* string

---

##### `deploymentId`<sup>Required</sup> <a name="deploymentId" id="@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStage.property.deploymentId"></a>

```typescript
public readonly deploymentId: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStage.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `documentationVersion`<sup>Required</sup> <a name="documentationVersion" id="@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStage.property.documentationVersion"></a>

```typescript
public readonly documentationVersion: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStage.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `restApiId`<sup>Required</sup> <a name="restApiId" id="@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStage.property.restApiId"></a>

```typescript
public readonly restApiId: string;
```

- *Type:* string

---

##### `stageName`<sup>Required</sup> <a name="stageName" id="@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStage.property.stageName"></a>

```typescript
public readonly stageName: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStage.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStage.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `variables`<sup>Required</sup> <a name="variables" id="@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStage.property.variables"></a>

```typescript
public readonly variables: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `xrayTracingEnabled`<sup>Required</sup> <a name="xrayTracingEnabled" id="@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStage.property.xrayTracingEnabled"></a>

```typescript
public readonly xrayTracingEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStage.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStage.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ApiGatewayStageAccessLogSettings <a name="ApiGatewayStageAccessLogSettings" id="@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStageAccessLogSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStageAccessLogSettings.Initializer"></a>

```typescript
import { apiGatewayStage } from '@cdktf/aws-cdk'

const apiGatewayStageAccessLogSettings: apiGatewayStage.ApiGatewayStageAccessLogSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStageAccessLogSettings.property.destinationArn">destinationArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/api_gateway_stage#destination_arn ApiGatewayStage#destination_arn}. |
| <code><a href="#@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStageAccessLogSettings.property.format">format</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/api_gateway_stage#format ApiGatewayStage#format}. |

---

##### `destinationArn`<sup>Required</sup> <a name="destinationArn" id="@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStageAccessLogSettings.property.destinationArn"></a>

```typescript
public readonly destinationArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/api_gateway_stage#destination_arn ApiGatewayStage#destination_arn}.

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStageAccessLogSettings.property.format"></a>

```typescript
public readonly format: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/api_gateway_stage#format ApiGatewayStage#format}.

---

### ApiGatewayStageConfig <a name="ApiGatewayStageConfig" id="@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStageConfig.Initializer"></a>

```typescript
import { apiGatewayStage } from '@cdktf/aws-cdk'

const apiGatewayStageConfig: apiGatewayStage.ApiGatewayStageConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStageConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStageConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStageConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStageConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStageConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStageConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStageConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStageConfig.property.deploymentId">deploymentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/api_gateway_stage#deployment_id ApiGatewayStage#deployment_id}. |
| <code><a href="#@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStageConfig.property.restApiId">restApiId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/api_gateway_stage#rest_api_id ApiGatewayStage#rest_api_id}. |
| <code><a href="#@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStageConfig.property.stageName">stageName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/api_gateway_stage#stage_name ApiGatewayStage#stage_name}. |
| <code><a href="#@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStageConfig.property.accessLogSettings">accessLogSettings</a></code> | <code><a href="#@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStageAccessLogSettings">ApiGatewayStageAccessLogSettings</a></code> | access_log_settings block. |
| <code><a href="#@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStageConfig.property.cacheClusterEnabled">cacheClusterEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/api_gateway_stage#cache_cluster_enabled ApiGatewayStage#cache_cluster_enabled}. |
| <code><a href="#@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStageConfig.property.cacheClusterSize">cacheClusterSize</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/api_gateway_stage#cache_cluster_size ApiGatewayStage#cache_cluster_size}. |
| <code><a href="#@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStageConfig.property.clientCertificateId">clientCertificateId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/api_gateway_stage#client_certificate_id ApiGatewayStage#client_certificate_id}. |
| <code><a href="#@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStageConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/api_gateway_stage#description ApiGatewayStage#description}. |
| <code><a href="#@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStageConfig.property.documentationVersion">documentationVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/api_gateway_stage#documentation_version ApiGatewayStage#documentation_version}. |
| <code><a href="#@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStageConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/api_gateway_stage#id ApiGatewayStage#id}. |
| <code><a href="#@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStageConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/api_gateway_stage#tags ApiGatewayStage#tags}. |
| <code><a href="#@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStageConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/api_gateway_stage#tags_all ApiGatewayStage#tags_all}. |
| <code><a href="#@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStageConfig.property.variables">variables</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/api_gateway_stage#variables ApiGatewayStage#variables}. |
| <code><a href="#@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStageConfig.property.xrayTracingEnabled">xrayTracingEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/api_gateway_stage#xray_tracing_enabled ApiGatewayStage#xray_tracing_enabled}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStageConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStageConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStageConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStageConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStageConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStageConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStageConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `deploymentId`<sup>Required</sup> <a name="deploymentId" id="@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStageConfig.property.deploymentId"></a>

```typescript
public readonly deploymentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/api_gateway_stage#deployment_id ApiGatewayStage#deployment_id}.

---

##### `restApiId`<sup>Required</sup> <a name="restApiId" id="@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStageConfig.property.restApiId"></a>

```typescript
public readonly restApiId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/api_gateway_stage#rest_api_id ApiGatewayStage#rest_api_id}.

---

##### `stageName`<sup>Required</sup> <a name="stageName" id="@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStageConfig.property.stageName"></a>

```typescript
public readonly stageName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/api_gateway_stage#stage_name ApiGatewayStage#stage_name}.

---

##### `accessLogSettings`<sup>Optional</sup> <a name="accessLogSettings" id="@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStageConfig.property.accessLogSettings"></a>

```typescript
public readonly accessLogSettings: ApiGatewayStageAccessLogSettings;
```

- *Type:* <a href="#@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStageAccessLogSettings">ApiGatewayStageAccessLogSettings</a>

access_log_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/api_gateway_stage#access_log_settings ApiGatewayStage#access_log_settings}

---

##### `cacheClusterEnabled`<sup>Optional</sup> <a name="cacheClusterEnabled" id="@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStageConfig.property.cacheClusterEnabled"></a>

```typescript
public readonly cacheClusterEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/api_gateway_stage#cache_cluster_enabled ApiGatewayStage#cache_cluster_enabled}.

---

##### `cacheClusterSize`<sup>Optional</sup> <a name="cacheClusterSize" id="@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStageConfig.property.cacheClusterSize"></a>

```typescript
public readonly cacheClusterSize: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/api_gateway_stage#cache_cluster_size ApiGatewayStage#cache_cluster_size}.

---

##### `clientCertificateId`<sup>Optional</sup> <a name="clientCertificateId" id="@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStageConfig.property.clientCertificateId"></a>

```typescript
public readonly clientCertificateId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/api_gateway_stage#client_certificate_id ApiGatewayStage#client_certificate_id}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStageConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/api_gateway_stage#description ApiGatewayStage#description}.

---

##### `documentationVersion`<sup>Optional</sup> <a name="documentationVersion" id="@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStageConfig.property.documentationVersion"></a>

```typescript
public readonly documentationVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/api_gateway_stage#documentation_version ApiGatewayStage#documentation_version}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStageConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/api_gateway_stage#id ApiGatewayStage#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStageConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/api_gateway_stage#tags ApiGatewayStage#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStageConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/api_gateway_stage#tags_all ApiGatewayStage#tags_all}.

---

##### `variables`<sup>Optional</sup> <a name="variables" id="@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStageConfig.property.variables"></a>

```typescript
public readonly variables: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/api_gateway_stage#variables ApiGatewayStage#variables}.

---

##### `xrayTracingEnabled`<sup>Optional</sup> <a name="xrayTracingEnabled" id="@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStageConfig.property.xrayTracingEnabled"></a>

```typescript
public readonly xrayTracingEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/api_gateway_stage#xray_tracing_enabled ApiGatewayStage#xray_tracing_enabled}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApiGatewayStageAccessLogSettingsOutputReference <a name="ApiGatewayStageAccessLogSettingsOutputReference" id="@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.Initializer"></a>

```typescript
import { apiGatewayStage } from '@cdktf/aws-cdk'

new apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.property.destinationArnInput">destinationArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.property.formatInput">formatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.property.destinationArn">destinationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.property.format">format</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStageAccessLogSettings">ApiGatewayStageAccessLogSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `destinationArnInput`<sup>Optional</sup> <a name="destinationArnInput" id="@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.property.destinationArnInput"></a>

```typescript
public readonly destinationArnInput: string;
```

- *Type:* string

---

##### `formatInput`<sup>Optional</sup> <a name="formatInput" id="@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.property.formatInput"></a>

```typescript
public readonly formatInput: string;
```

- *Type:* string

---

##### `destinationArn`<sup>Required</sup> <a name="destinationArn" id="@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.property.destinationArn"></a>

```typescript
public readonly destinationArn: string;
```

- *Type:* string

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.property.format"></a>

```typescript
public readonly format: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStageAccessLogSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ApiGatewayStageAccessLogSettings;
```

- *Type:* <a href="#@cdktf/aws-cdk.apiGatewayStage.ApiGatewayStageAccessLogSettings">ApiGatewayStageAccessLogSettings</a>

---



