# `aws_apigatewayv2_integration_response`

Refer to the Terraform Registory for docs: [`aws_apigatewayv2_integration_response`](https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/apigatewayv2_integration_response).

# `apigatewayv2IntegrationResponse` Submodule <a name="`apigatewayv2IntegrationResponse` Submodule" id="@cdktf/aws-cdk.apigatewayv2IntegrationResponse"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Apigatewayv2IntegrationResponse <a name="Apigatewayv2IntegrationResponse" id="@cdktf/aws-cdk.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/apigatewayv2_integration_response aws_apigatewayv2_integration_response}.

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.Initializer"></a>

```typescript
import { apigatewayv2IntegrationResponse } from '@cdktf/aws-cdk'

new apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse(scope: Construct, id: string, config: Apigatewayv2IntegrationResponseConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/aws-cdk.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/aws-cdk.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/aws-cdk.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponseConfig">Apigatewayv2IntegrationResponseConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/aws-cdk.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/aws-cdk.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponseConfig">Apigatewayv2IntegrationResponseConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/aws-cdk.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/aws-cdk.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/aws-cdk.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/aws-cdk.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.resetContentHandlingStrategy">resetContentHandlingStrategy</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.resetResponseTemplates">resetResponseTemplates</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.resetTemplateSelectionExpression">resetTemplateSelectionExpression</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/aws-cdk.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/aws-cdk.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/aws-cdk.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/aws-cdk.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/aws-cdk.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/aws-cdk.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/aws-cdk.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetContentHandlingStrategy` <a name="resetContentHandlingStrategy" id="@cdktf/aws-cdk.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.resetContentHandlingStrategy"></a>

```typescript
public resetContentHandlingStrategy(): void
```

##### `resetId` <a name="resetId" id="@cdktf/aws-cdk.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.resetId"></a>

```typescript
public resetId(): void
```

##### `resetResponseTemplates` <a name="resetResponseTemplates" id="@cdktf/aws-cdk.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.resetResponseTemplates"></a>

```typescript
public resetResponseTemplates(): void
```

##### `resetTemplateSelectionExpression` <a name="resetTemplateSelectionExpression" id="@cdktf/aws-cdk.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.resetTemplateSelectionExpression"></a>

```typescript
public resetTemplateSelectionExpression(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/aws-cdk.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@cdktf/aws-cdk.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.isConstruct"></a>

```typescript
import { apigatewayv2IntegrationResponse } from '@cdktf/aws-cdk'

apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/aws-cdk.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.isTerraformElement"></a>

```typescript
import { apigatewayv2IntegrationResponse } from '@cdktf/aws-cdk'

apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/aws-cdk.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.isTerraformResource"></a>

```typescript
import { apigatewayv2IntegrationResponse } from '@cdktf/aws-cdk'

apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/aws-cdk.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.property.apiIdInput">apiIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.property.contentHandlingStrategyInput">contentHandlingStrategyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.property.integrationIdInput">integrationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.property.integrationResponseKeyInput">integrationResponseKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.property.responseTemplatesInput">responseTemplatesInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.property.templateSelectionExpressionInput">templateSelectionExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.property.apiId">apiId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.property.contentHandlingStrategy">contentHandlingStrategy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.property.integrationId">integrationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.property.integrationResponseKey">integrationResponseKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.property.responseTemplates">responseTemplates</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.property.templateSelectionExpression">templateSelectionExpression</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/aws-cdk.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/aws-cdk.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/aws-cdk.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/aws-cdk.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/aws-cdk.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/aws-cdk.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `apiIdInput`<sup>Optional</sup> <a name="apiIdInput" id="@cdktf/aws-cdk.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.property.apiIdInput"></a>

```typescript
public readonly apiIdInput: string;
```

- *Type:* string

---

##### `contentHandlingStrategyInput`<sup>Optional</sup> <a name="contentHandlingStrategyInput" id="@cdktf/aws-cdk.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.property.contentHandlingStrategyInput"></a>

```typescript
public readonly contentHandlingStrategyInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/aws-cdk.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `integrationIdInput`<sup>Optional</sup> <a name="integrationIdInput" id="@cdktf/aws-cdk.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.property.integrationIdInput"></a>

```typescript
public readonly integrationIdInput: string;
```

- *Type:* string

---

##### `integrationResponseKeyInput`<sup>Optional</sup> <a name="integrationResponseKeyInput" id="@cdktf/aws-cdk.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.property.integrationResponseKeyInput"></a>

```typescript
public readonly integrationResponseKeyInput: string;
```

- *Type:* string

---

##### `responseTemplatesInput`<sup>Optional</sup> <a name="responseTemplatesInput" id="@cdktf/aws-cdk.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.property.responseTemplatesInput"></a>

```typescript
public readonly responseTemplatesInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `templateSelectionExpressionInput`<sup>Optional</sup> <a name="templateSelectionExpressionInput" id="@cdktf/aws-cdk.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.property.templateSelectionExpressionInput"></a>

```typescript
public readonly templateSelectionExpressionInput: string;
```

- *Type:* string

---

##### `apiId`<sup>Required</sup> <a name="apiId" id="@cdktf/aws-cdk.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.property.apiId"></a>

```typescript
public readonly apiId: string;
```

- *Type:* string

---

##### `contentHandlingStrategy`<sup>Required</sup> <a name="contentHandlingStrategy" id="@cdktf/aws-cdk.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.property.contentHandlingStrategy"></a>

```typescript
public readonly contentHandlingStrategy: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `integrationId`<sup>Required</sup> <a name="integrationId" id="@cdktf/aws-cdk.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.property.integrationId"></a>

```typescript
public readonly integrationId: string;
```

- *Type:* string

---

##### `integrationResponseKey`<sup>Required</sup> <a name="integrationResponseKey" id="@cdktf/aws-cdk.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.property.integrationResponseKey"></a>

```typescript
public readonly integrationResponseKey: string;
```

- *Type:* string

---

##### `responseTemplates`<sup>Required</sup> <a name="responseTemplates" id="@cdktf/aws-cdk.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.property.responseTemplates"></a>

```typescript
public readonly responseTemplates: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `templateSelectionExpression`<sup>Required</sup> <a name="templateSelectionExpression" id="@cdktf/aws-cdk.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.property.templateSelectionExpression"></a>

```typescript
public readonly templateSelectionExpression: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/aws-cdk.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponse.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Apigatewayv2IntegrationResponseConfig <a name="Apigatewayv2IntegrationResponseConfig" id="@cdktf/aws-cdk.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponseConfig.Initializer"></a>

```typescript
import { apigatewayv2IntegrationResponse } from '@cdktf/aws-cdk'

const apigatewayv2IntegrationResponseConfig: apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponseConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponseConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponseConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponseConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponseConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponseConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponseConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponseConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponseConfig.property.apiId">apiId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/apigatewayv2_integration_response#api_id Apigatewayv2IntegrationResponse#api_id}. |
| <code><a href="#@cdktf/aws-cdk.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponseConfig.property.integrationId">integrationId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/apigatewayv2_integration_response#integration_id Apigatewayv2IntegrationResponse#integration_id}. |
| <code><a href="#@cdktf/aws-cdk.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponseConfig.property.integrationResponseKey">integrationResponseKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/apigatewayv2_integration_response#integration_response_key Apigatewayv2IntegrationResponse#integration_response_key}. |
| <code><a href="#@cdktf/aws-cdk.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponseConfig.property.contentHandlingStrategy">contentHandlingStrategy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/apigatewayv2_integration_response#content_handling_strategy Apigatewayv2IntegrationResponse#content_handling_strategy}. |
| <code><a href="#@cdktf/aws-cdk.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponseConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/apigatewayv2_integration_response#id Apigatewayv2IntegrationResponse#id}. |
| <code><a href="#@cdktf/aws-cdk.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponseConfig.property.responseTemplates">responseTemplates</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/apigatewayv2_integration_response#response_templates Apigatewayv2IntegrationResponse#response_templates}. |
| <code><a href="#@cdktf/aws-cdk.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponseConfig.property.templateSelectionExpression">templateSelectionExpression</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/apigatewayv2_integration_response#template_selection_expression Apigatewayv2IntegrationResponse#template_selection_expression}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponseConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponseConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponseConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponseConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponseConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponseConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponseConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `apiId`<sup>Required</sup> <a name="apiId" id="@cdktf/aws-cdk.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponseConfig.property.apiId"></a>

```typescript
public readonly apiId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/apigatewayv2_integration_response#api_id Apigatewayv2IntegrationResponse#api_id}.

---

##### `integrationId`<sup>Required</sup> <a name="integrationId" id="@cdktf/aws-cdk.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponseConfig.property.integrationId"></a>

```typescript
public readonly integrationId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/apigatewayv2_integration_response#integration_id Apigatewayv2IntegrationResponse#integration_id}.

---

##### `integrationResponseKey`<sup>Required</sup> <a name="integrationResponseKey" id="@cdktf/aws-cdk.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponseConfig.property.integrationResponseKey"></a>

```typescript
public readonly integrationResponseKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/apigatewayv2_integration_response#integration_response_key Apigatewayv2IntegrationResponse#integration_response_key}.

---

##### `contentHandlingStrategy`<sup>Optional</sup> <a name="contentHandlingStrategy" id="@cdktf/aws-cdk.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponseConfig.property.contentHandlingStrategy"></a>

```typescript
public readonly contentHandlingStrategy: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/apigatewayv2_integration_response#content_handling_strategy Apigatewayv2IntegrationResponse#content_handling_strategy}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/aws-cdk.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponseConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/apigatewayv2_integration_response#id Apigatewayv2IntegrationResponse#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `responseTemplates`<sup>Optional</sup> <a name="responseTemplates" id="@cdktf/aws-cdk.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponseConfig.property.responseTemplates"></a>

```typescript
public readonly responseTemplates: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/apigatewayv2_integration_response#response_templates Apigatewayv2IntegrationResponse#response_templates}.

---

##### `templateSelectionExpression`<sup>Optional</sup> <a name="templateSelectionExpression" id="@cdktf/aws-cdk.apigatewayv2IntegrationResponse.Apigatewayv2IntegrationResponseConfig.property.templateSelectionExpression"></a>

```typescript
public readonly templateSelectionExpression: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/apigatewayv2_integration_response#template_selection_expression Apigatewayv2IntegrationResponse#template_selection_expression}.

---



