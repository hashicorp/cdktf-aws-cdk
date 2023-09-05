# `aws_api_gateway_account`

Refer to the Terraform Registory for docs: [`aws_api_gateway_account`](https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/api_gateway_account).

# `apiGatewayAccount` Submodule <a name="`apiGatewayAccount` Submodule" id="@cdktf/aws-cdk.apiGatewayAccount"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApiGatewayAccount <a name="ApiGatewayAccount" id="@cdktf/aws-cdk.apiGatewayAccount.ApiGatewayAccount"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/api_gateway_account aws_api_gateway_account}.

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.apiGatewayAccount.ApiGatewayAccount.Initializer"></a>

```typescript
import { apiGatewayAccount } from '@cdktf/aws-cdk'

new apiGatewayAccount.ApiGatewayAccount(scope: Construct, id: string, config?: ApiGatewayAccountConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.apiGatewayAccount.ApiGatewayAccount.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/aws-cdk.apiGatewayAccount.ApiGatewayAccount.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/aws-cdk.apiGatewayAccount.ApiGatewayAccount.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/aws-cdk.apiGatewayAccount.ApiGatewayAccountConfig">ApiGatewayAccountConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.apiGatewayAccount.ApiGatewayAccount.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.apiGatewayAccount.ApiGatewayAccount.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/aws-cdk.apiGatewayAccount.ApiGatewayAccount.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/aws-cdk.apiGatewayAccount.ApiGatewayAccountConfig">ApiGatewayAccountConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.apiGatewayAccount.ApiGatewayAccount.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/aws-cdk.apiGatewayAccount.ApiGatewayAccount.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayAccount.ApiGatewayAccount.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/aws-cdk.apiGatewayAccount.ApiGatewayAccount.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/aws-cdk.apiGatewayAccount.ApiGatewayAccount.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayAccount.ApiGatewayAccount.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/aws-cdk.apiGatewayAccount.ApiGatewayAccount.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayAccount.ApiGatewayAccount.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayAccount.ApiGatewayAccount.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayAccount.ApiGatewayAccount.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayAccount.ApiGatewayAccount.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayAccount.ApiGatewayAccount.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayAccount.ApiGatewayAccount.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayAccount.ApiGatewayAccount.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayAccount.ApiGatewayAccount.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayAccount.ApiGatewayAccount.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayAccount.ApiGatewayAccount.resetCloudwatchRoleArn">resetCloudwatchRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayAccount.ApiGatewayAccount.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.apiGatewayAccount.ApiGatewayAccount.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/aws-cdk.apiGatewayAccount.ApiGatewayAccount.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/aws-cdk.apiGatewayAccount.ApiGatewayAccount.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.apiGatewayAccount.ApiGatewayAccount.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/aws-cdk.apiGatewayAccount.ApiGatewayAccount.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/aws-cdk.apiGatewayAccount.ApiGatewayAccount.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/aws-cdk.apiGatewayAccount.ApiGatewayAccount.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/aws-cdk.apiGatewayAccount.ApiGatewayAccount.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/aws-cdk.apiGatewayAccount.ApiGatewayAccount.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.apiGatewayAccount.ApiGatewayAccount.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.apiGatewayAccount.ApiGatewayAccount.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.apiGatewayAccount.ApiGatewayAccount.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.apiGatewayAccount.ApiGatewayAccount.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.apiGatewayAccount.ApiGatewayAccount.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.apiGatewayAccount.ApiGatewayAccount.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.apiGatewayAccount.ApiGatewayAccount.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.apiGatewayAccount.ApiGatewayAccount.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.apiGatewayAccount.ApiGatewayAccount.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.apiGatewayAccount.ApiGatewayAccount.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.apiGatewayAccount.ApiGatewayAccount.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.apiGatewayAccount.ApiGatewayAccount.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.apiGatewayAccount.ApiGatewayAccount.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.apiGatewayAccount.ApiGatewayAccount.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.apiGatewayAccount.ApiGatewayAccount.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.apiGatewayAccount.ApiGatewayAccount.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.apiGatewayAccount.ApiGatewayAccount.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.apiGatewayAccount.ApiGatewayAccount.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.apiGatewayAccount.ApiGatewayAccount.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.apiGatewayAccount.ApiGatewayAccount.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetCloudwatchRoleArn` <a name="resetCloudwatchRoleArn" id="@cdktf/aws-cdk.apiGatewayAccount.ApiGatewayAccount.resetCloudwatchRoleArn"></a>

```typescript
public resetCloudwatchRoleArn(): void
```

##### `resetId` <a name="resetId" id="@cdktf/aws-cdk.apiGatewayAccount.ApiGatewayAccount.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.apiGatewayAccount.ApiGatewayAccount.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/aws-cdk.apiGatewayAccount.ApiGatewayAccount.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayAccount.ApiGatewayAccount.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@cdktf/aws-cdk.apiGatewayAccount.ApiGatewayAccount.isConstruct"></a>

```typescript
import { apiGatewayAccount } from '@cdktf/aws-cdk'

apiGatewayAccount.ApiGatewayAccount.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.apiGatewayAccount.ApiGatewayAccount.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/aws-cdk.apiGatewayAccount.ApiGatewayAccount.isTerraformElement"></a>

```typescript
import { apiGatewayAccount } from '@cdktf/aws-cdk'

apiGatewayAccount.ApiGatewayAccount.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.apiGatewayAccount.ApiGatewayAccount.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/aws-cdk.apiGatewayAccount.ApiGatewayAccount.isTerraformResource"></a>

```typescript
import { apiGatewayAccount } from '@cdktf/aws-cdk'

apiGatewayAccount.ApiGatewayAccount.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.apiGatewayAccount.ApiGatewayAccount.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.apiGatewayAccount.ApiGatewayAccount.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/aws-cdk.apiGatewayAccount.ApiGatewayAccount.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayAccount.ApiGatewayAccount.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayAccount.ApiGatewayAccount.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayAccount.ApiGatewayAccount.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayAccount.ApiGatewayAccount.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayAccount.ApiGatewayAccount.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayAccount.ApiGatewayAccount.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayAccount.ApiGatewayAccount.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayAccount.ApiGatewayAccount.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayAccount.ApiGatewayAccount.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayAccount.ApiGatewayAccount.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayAccount.ApiGatewayAccount.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayAccount.ApiGatewayAccount.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayAccount.ApiGatewayAccount.property.throttleSettings">throttleSettings</a></code> | <code><a href="#@cdktf/aws-cdk.apiGatewayAccount.ApiGatewayAccountThrottleSettingsList">ApiGatewayAccountThrottleSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayAccount.ApiGatewayAccount.property.cloudwatchRoleArnInput">cloudwatchRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayAccount.ApiGatewayAccount.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayAccount.ApiGatewayAccount.property.cloudwatchRoleArn">cloudwatchRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayAccount.ApiGatewayAccount.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/aws-cdk.apiGatewayAccount.ApiGatewayAccount.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/aws-cdk.apiGatewayAccount.ApiGatewayAccount.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.apiGatewayAccount.ApiGatewayAccount.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/aws-cdk.apiGatewayAccount.ApiGatewayAccount.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/aws-cdk.apiGatewayAccount.ApiGatewayAccount.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/aws-cdk.apiGatewayAccount.ApiGatewayAccount.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/aws-cdk.apiGatewayAccount.ApiGatewayAccount.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.apiGatewayAccount.ApiGatewayAccount.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.apiGatewayAccount.ApiGatewayAccount.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.apiGatewayAccount.ApiGatewayAccount.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.apiGatewayAccount.ApiGatewayAccount.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.apiGatewayAccount.ApiGatewayAccount.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.apiGatewayAccount.ApiGatewayAccount.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.apiGatewayAccount.ApiGatewayAccount.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `throttleSettings`<sup>Required</sup> <a name="throttleSettings" id="@cdktf/aws-cdk.apiGatewayAccount.ApiGatewayAccount.property.throttleSettings"></a>

```typescript
public readonly throttleSettings: ApiGatewayAccountThrottleSettingsList;
```

- *Type:* <a href="#@cdktf/aws-cdk.apiGatewayAccount.ApiGatewayAccountThrottleSettingsList">ApiGatewayAccountThrottleSettingsList</a>

---

##### `cloudwatchRoleArnInput`<sup>Optional</sup> <a name="cloudwatchRoleArnInput" id="@cdktf/aws-cdk.apiGatewayAccount.ApiGatewayAccount.property.cloudwatchRoleArnInput"></a>

```typescript
public readonly cloudwatchRoleArnInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/aws-cdk.apiGatewayAccount.ApiGatewayAccount.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `cloudwatchRoleArn`<sup>Required</sup> <a name="cloudwatchRoleArn" id="@cdktf/aws-cdk.apiGatewayAccount.ApiGatewayAccount.property.cloudwatchRoleArn"></a>

```typescript
public readonly cloudwatchRoleArn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.apiGatewayAccount.ApiGatewayAccount.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.apiGatewayAccount.ApiGatewayAccount.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/aws-cdk.apiGatewayAccount.ApiGatewayAccount.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ApiGatewayAccountConfig <a name="ApiGatewayAccountConfig" id="@cdktf/aws-cdk.apiGatewayAccount.ApiGatewayAccountConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.apiGatewayAccount.ApiGatewayAccountConfig.Initializer"></a>

```typescript
import { apiGatewayAccount } from '@cdktf/aws-cdk'

const apiGatewayAccountConfig: apiGatewayAccount.ApiGatewayAccountConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.apiGatewayAccount.ApiGatewayAccountConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayAccount.ApiGatewayAccountConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayAccount.ApiGatewayAccountConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayAccount.ApiGatewayAccountConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayAccount.ApiGatewayAccountConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayAccount.ApiGatewayAccountConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayAccount.ApiGatewayAccountConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayAccount.ApiGatewayAccountConfig.property.cloudwatchRoleArn">cloudwatchRoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/api_gateway_account#cloudwatch_role_arn ApiGatewayAccount#cloudwatch_role_arn}. |
| <code><a href="#@cdktf/aws-cdk.apiGatewayAccount.ApiGatewayAccountConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/api_gateway_account#id ApiGatewayAccount#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.apiGatewayAccount.ApiGatewayAccountConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.apiGatewayAccount.ApiGatewayAccountConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.apiGatewayAccount.ApiGatewayAccountConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.apiGatewayAccount.ApiGatewayAccountConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.apiGatewayAccount.ApiGatewayAccountConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.apiGatewayAccount.ApiGatewayAccountConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.apiGatewayAccount.ApiGatewayAccountConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `cloudwatchRoleArn`<sup>Optional</sup> <a name="cloudwatchRoleArn" id="@cdktf/aws-cdk.apiGatewayAccount.ApiGatewayAccountConfig.property.cloudwatchRoleArn"></a>

```typescript
public readonly cloudwatchRoleArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/api_gateway_account#cloudwatch_role_arn ApiGatewayAccount#cloudwatch_role_arn}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/aws-cdk.apiGatewayAccount.ApiGatewayAccountConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/api_gateway_account#id ApiGatewayAccount#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### ApiGatewayAccountThrottleSettings <a name="ApiGatewayAccountThrottleSettings" id="@cdktf/aws-cdk.apiGatewayAccount.ApiGatewayAccountThrottleSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.apiGatewayAccount.ApiGatewayAccountThrottleSettings.Initializer"></a>

```typescript
import { apiGatewayAccount } from '@cdktf/aws-cdk'

const apiGatewayAccountThrottleSettings: apiGatewayAccount.ApiGatewayAccountThrottleSettings = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### ApiGatewayAccountThrottleSettingsList <a name="ApiGatewayAccountThrottleSettingsList" id="@cdktf/aws-cdk.apiGatewayAccount.ApiGatewayAccountThrottleSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.apiGatewayAccount.ApiGatewayAccountThrottleSettingsList.Initializer"></a>

```typescript
import { apiGatewayAccount } from '@cdktf/aws-cdk'

new apiGatewayAccount.ApiGatewayAccountThrottleSettingsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.apiGatewayAccount.ApiGatewayAccountThrottleSettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.apiGatewayAccount.ApiGatewayAccountThrottleSettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.apiGatewayAccount.ApiGatewayAccountThrottleSettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.apiGatewayAccount.ApiGatewayAccountThrottleSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.apiGatewayAccount.ApiGatewayAccountThrottleSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/aws-cdk.apiGatewayAccount.ApiGatewayAccountThrottleSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.apiGatewayAccount.ApiGatewayAccountThrottleSettingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayAccount.ApiGatewayAccountThrottleSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.apiGatewayAccount.ApiGatewayAccountThrottleSettingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.apiGatewayAccount.ApiGatewayAccountThrottleSettingsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.apiGatewayAccount.ApiGatewayAccountThrottleSettingsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.apiGatewayAccount.ApiGatewayAccountThrottleSettingsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.apiGatewayAccount.ApiGatewayAccountThrottleSettingsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.apiGatewayAccount.ApiGatewayAccountThrottleSettingsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/aws-cdk.apiGatewayAccount.ApiGatewayAccountThrottleSettingsList.get"></a>

```typescript
public get(index: number): ApiGatewayAccountThrottleSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/aws-cdk.apiGatewayAccount.ApiGatewayAccountThrottleSettingsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.apiGatewayAccount.ApiGatewayAccountThrottleSettingsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.apiGatewayAccount.ApiGatewayAccountThrottleSettingsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.apiGatewayAccount.ApiGatewayAccountThrottleSettingsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.apiGatewayAccount.ApiGatewayAccountThrottleSettingsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### ApiGatewayAccountThrottleSettingsOutputReference <a name="ApiGatewayAccountThrottleSettingsOutputReference" id="@cdktf/aws-cdk.apiGatewayAccount.ApiGatewayAccountThrottleSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.apiGatewayAccount.ApiGatewayAccountThrottleSettingsOutputReference.Initializer"></a>

```typescript
import { apiGatewayAccount } from '@cdktf/aws-cdk'

new apiGatewayAccount.ApiGatewayAccountThrottleSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.apiGatewayAccount.ApiGatewayAccountThrottleSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.apiGatewayAccount.ApiGatewayAccountThrottleSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.apiGatewayAccount.ApiGatewayAccountThrottleSettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/aws-cdk.apiGatewayAccount.ApiGatewayAccountThrottleSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.apiGatewayAccount.ApiGatewayAccountThrottleSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.apiGatewayAccount.ApiGatewayAccountThrottleSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/aws-cdk.apiGatewayAccount.ApiGatewayAccountThrottleSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/aws-cdk.apiGatewayAccount.ApiGatewayAccountThrottleSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.apiGatewayAccount.ApiGatewayAccountThrottleSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayAccount.ApiGatewayAccountThrottleSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayAccount.ApiGatewayAccountThrottleSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayAccount.ApiGatewayAccountThrottleSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayAccount.ApiGatewayAccountThrottleSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayAccount.ApiGatewayAccountThrottleSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayAccount.ApiGatewayAccountThrottleSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayAccount.ApiGatewayAccountThrottleSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayAccount.ApiGatewayAccountThrottleSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayAccount.ApiGatewayAccountThrottleSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayAccount.ApiGatewayAccountThrottleSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayAccount.ApiGatewayAccountThrottleSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.apiGatewayAccount.ApiGatewayAccountThrottleSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.apiGatewayAccount.ApiGatewayAccountThrottleSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.apiGatewayAccount.ApiGatewayAccountThrottleSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.apiGatewayAccount.ApiGatewayAccountThrottleSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.apiGatewayAccount.ApiGatewayAccountThrottleSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.apiGatewayAccount.ApiGatewayAccountThrottleSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.apiGatewayAccount.ApiGatewayAccountThrottleSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.apiGatewayAccount.ApiGatewayAccountThrottleSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.apiGatewayAccount.ApiGatewayAccountThrottleSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.apiGatewayAccount.ApiGatewayAccountThrottleSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.apiGatewayAccount.ApiGatewayAccountThrottleSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.apiGatewayAccount.ApiGatewayAccountThrottleSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.apiGatewayAccount.ApiGatewayAccountThrottleSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.apiGatewayAccount.ApiGatewayAccountThrottleSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.apiGatewayAccount.ApiGatewayAccountThrottleSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.apiGatewayAccount.ApiGatewayAccountThrottleSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.apiGatewayAccount.ApiGatewayAccountThrottleSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.apiGatewayAccount.ApiGatewayAccountThrottleSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.apiGatewayAccount.ApiGatewayAccountThrottleSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.apiGatewayAccount.ApiGatewayAccountThrottleSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.apiGatewayAccount.ApiGatewayAccountThrottleSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.apiGatewayAccount.ApiGatewayAccountThrottleSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.apiGatewayAccount.ApiGatewayAccountThrottleSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.apiGatewayAccount.ApiGatewayAccountThrottleSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.apiGatewayAccount.ApiGatewayAccountThrottleSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.apiGatewayAccount.ApiGatewayAccountThrottleSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.apiGatewayAccount.ApiGatewayAccountThrottleSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayAccount.ApiGatewayAccountThrottleSettingsOutputReference.property.burstLimit">burstLimit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayAccount.ApiGatewayAccountThrottleSettingsOutputReference.property.rateLimit">rateLimit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apiGatewayAccount.ApiGatewayAccountThrottleSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.apiGatewayAccount.ApiGatewayAccountThrottleSettings">ApiGatewayAccountThrottleSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.apiGatewayAccount.ApiGatewayAccountThrottleSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.apiGatewayAccount.ApiGatewayAccountThrottleSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `burstLimit`<sup>Required</sup> <a name="burstLimit" id="@cdktf/aws-cdk.apiGatewayAccount.ApiGatewayAccountThrottleSettingsOutputReference.property.burstLimit"></a>

```typescript
public readonly burstLimit: number;
```

- *Type:* number

---

##### `rateLimit`<sup>Required</sup> <a name="rateLimit" id="@cdktf/aws-cdk.apiGatewayAccount.ApiGatewayAccountThrottleSettingsOutputReference.property.rateLimit"></a>

```typescript
public readonly rateLimit: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.apiGatewayAccount.ApiGatewayAccountThrottleSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ApiGatewayAccountThrottleSettings;
```

- *Type:* <a href="#@cdktf/aws-cdk.apiGatewayAccount.ApiGatewayAccountThrottleSettings">ApiGatewayAccountThrottleSettings</a>

---



