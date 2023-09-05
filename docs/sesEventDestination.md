# `aws_ses_event_destination`

Refer to the Terraform Registory for docs: [`aws_ses_event_destination`](https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/ses_event_destination).

# `sesEventDestination` Submodule <a name="`sesEventDestination` Submodule" id="@cdktf/aws-cdk.sesEventDestination"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SesEventDestination <a name="SesEventDestination" id="@cdktf/aws-cdk.sesEventDestination.SesEventDestination"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/ses_event_destination aws_ses_event_destination}.

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.sesEventDestination.SesEventDestination.Initializer"></a>

```typescript
import { sesEventDestination } from '@cdktf/aws-cdk'

new sesEventDestination.SesEventDestination(scope: Construct, id: string, config: SesEventDestinationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.sesEventDestination.SesEventDestination.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/aws-cdk.sesEventDestination.SesEventDestination.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/aws-cdk.sesEventDestination.SesEventDestination.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/aws-cdk.sesEventDestination.SesEventDestinationConfig">SesEventDestinationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.sesEventDestination.SesEventDestination.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.sesEventDestination.SesEventDestination.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/aws-cdk.sesEventDestination.SesEventDestination.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/aws-cdk.sesEventDestination.SesEventDestinationConfig">SesEventDestinationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.sesEventDestination.SesEventDestination.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/aws-cdk.sesEventDestination.SesEventDestination.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sesEventDestination.SesEventDestination.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/aws-cdk.sesEventDestination.SesEventDestination.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/aws-cdk.sesEventDestination.SesEventDestination.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sesEventDestination.SesEventDestination.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/aws-cdk.sesEventDestination.SesEventDestination.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sesEventDestination.SesEventDestination.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sesEventDestination.SesEventDestination.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sesEventDestination.SesEventDestination.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sesEventDestination.SesEventDestination.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sesEventDestination.SesEventDestination.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sesEventDestination.SesEventDestination.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sesEventDestination.SesEventDestination.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sesEventDestination.SesEventDestination.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sesEventDestination.SesEventDestination.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sesEventDestination.SesEventDestination.putCloudwatchDestination">putCloudwatchDestination</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sesEventDestination.SesEventDestination.putKinesisDestination">putKinesisDestination</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sesEventDestination.SesEventDestination.putSnsDestination">putSnsDestination</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sesEventDestination.SesEventDestination.resetCloudwatchDestination">resetCloudwatchDestination</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sesEventDestination.SesEventDestination.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sesEventDestination.SesEventDestination.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sesEventDestination.SesEventDestination.resetKinesisDestination">resetKinesisDestination</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sesEventDestination.SesEventDestination.resetSnsDestination">resetSnsDestination</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.sesEventDestination.SesEventDestination.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/aws-cdk.sesEventDestination.SesEventDestination.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/aws-cdk.sesEventDestination.SesEventDestination.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.sesEventDestination.SesEventDestination.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/aws-cdk.sesEventDestination.SesEventDestination.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/aws-cdk.sesEventDestination.SesEventDestination.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/aws-cdk.sesEventDestination.SesEventDestination.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/aws-cdk.sesEventDestination.SesEventDestination.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/aws-cdk.sesEventDestination.SesEventDestination.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.sesEventDestination.SesEventDestination.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sesEventDestination.SesEventDestination.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.sesEventDestination.SesEventDestination.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sesEventDestination.SesEventDestination.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.sesEventDestination.SesEventDestination.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sesEventDestination.SesEventDestination.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.sesEventDestination.SesEventDestination.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sesEventDestination.SesEventDestination.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.sesEventDestination.SesEventDestination.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sesEventDestination.SesEventDestination.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.sesEventDestination.SesEventDestination.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sesEventDestination.SesEventDestination.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.sesEventDestination.SesEventDestination.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sesEventDestination.SesEventDestination.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.sesEventDestination.SesEventDestination.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sesEventDestination.SesEventDestination.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.sesEventDestination.SesEventDestination.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sesEventDestination.SesEventDestination.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.sesEventDestination.SesEventDestination.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sesEventDestination.SesEventDestination.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putCloudwatchDestination` <a name="putCloudwatchDestination" id="@cdktf/aws-cdk.sesEventDestination.SesEventDestination.putCloudwatchDestination"></a>

```typescript
public putCloudwatchDestination(value: IResolvable | SesEventDestinationCloudwatchDestination[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.sesEventDestination.SesEventDestination.putCloudwatchDestination.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.sesEventDestination.SesEventDestinationCloudwatchDestination">SesEventDestinationCloudwatchDestination</a>[]

---

##### `putKinesisDestination` <a name="putKinesisDestination" id="@cdktf/aws-cdk.sesEventDestination.SesEventDestination.putKinesisDestination"></a>

```typescript
public putKinesisDestination(value: SesEventDestinationKinesisDestination): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.sesEventDestination.SesEventDestination.putKinesisDestination.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.sesEventDestination.SesEventDestinationKinesisDestination">SesEventDestinationKinesisDestination</a>

---

##### `putSnsDestination` <a name="putSnsDestination" id="@cdktf/aws-cdk.sesEventDestination.SesEventDestination.putSnsDestination"></a>

```typescript
public putSnsDestination(value: SesEventDestinationSnsDestination): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.sesEventDestination.SesEventDestination.putSnsDestination.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.sesEventDestination.SesEventDestinationSnsDestination">SesEventDestinationSnsDestination</a>

---

##### `resetCloudwatchDestination` <a name="resetCloudwatchDestination" id="@cdktf/aws-cdk.sesEventDestination.SesEventDestination.resetCloudwatchDestination"></a>

```typescript
public resetCloudwatchDestination(): void
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/aws-cdk.sesEventDestination.SesEventDestination.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetId` <a name="resetId" id="@cdktf/aws-cdk.sesEventDestination.SesEventDestination.resetId"></a>

```typescript
public resetId(): void
```

##### `resetKinesisDestination` <a name="resetKinesisDestination" id="@cdktf/aws-cdk.sesEventDestination.SesEventDestination.resetKinesisDestination"></a>

```typescript
public resetKinesisDestination(): void
```

##### `resetSnsDestination` <a name="resetSnsDestination" id="@cdktf/aws-cdk.sesEventDestination.SesEventDestination.resetSnsDestination"></a>

```typescript
public resetSnsDestination(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.sesEventDestination.SesEventDestination.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/aws-cdk.sesEventDestination.SesEventDestination.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sesEventDestination.SesEventDestination.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@cdktf/aws-cdk.sesEventDestination.SesEventDestination.isConstruct"></a>

```typescript
import { sesEventDestination } from '@cdktf/aws-cdk'

sesEventDestination.SesEventDestination.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.sesEventDestination.SesEventDestination.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/aws-cdk.sesEventDestination.SesEventDestination.isTerraformElement"></a>

```typescript
import { sesEventDestination } from '@cdktf/aws-cdk'

sesEventDestination.SesEventDestination.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.sesEventDestination.SesEventDestination.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/aws-cdk.sesEventDestination.SesEventDestination.isTerraformResource"></a>

```typescript
import { sesEventDestination } from '@cdktf/aws-cdk'

sesEventDestination.SesEventDestination.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.sesEventDestination.SesEventDestination.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.sesEventDestination.SesEventDestination.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/aws-cdk.sesEventDestination.SesEventDestination.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sesEventDestination.SesEventDestination.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sesEventDestination.SesEventDestination.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sesEventDestination.SesEventDestination.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sesEventDestination.SesEventDestination.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sesEventDestination.SesEventDestination.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sesEventDestination.SesEventDestination.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sesEventDestination.SesEventDestination.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sesEventDestination.SesEventDestination.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sesEventDestination.SesEventDestination.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sesEventDestination.SesEventDestination.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sesEventDestination.SesEventDestination.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sesEventDestination.SesEventDestination.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sesEventDestination.SesEventDestination.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sesEventDestination.SesEventDestination.property.cloudwatchDestination">cloudwatchDestination</a></code> | <code><a href="#@cdktf/aws-cdk.sesEventDestination.SesEventDestinationCloudwatchDestinationList">SesEventDestinationCloudwatchDestinationList</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sesEventDestination.SesEventDestination.property.kinesisDestination">kinesisDestination</a></code> | <code><a href="#@cdktf/aws-cdk.sesEventDestination.SesEventDestinationKinesisDestinationOutputReference">SesEventDestinationKinesisDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sesEventDestination.SesEventDestination.property.snsDestination">snsDestination</a></code> | <code><a href="#@cdktf/aws-cdk.sesEventDestination.SesEventDestinationSnsDestinationOutputReference">SesEventDestinationSnsDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sesEventDestination.SesEventDestination.property.cloudwatchDestinationInput">cloudwatchDestinationInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.sesEventDestination.SesEventDestinationCloudwatchDestination">SesEventDestinationCloudwatchDestination</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sesEventDestination.SesEventDestination.property.configurationSetNameInput">configurationSetNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sesEventDestination.SesEventDestination.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sesEventDestination.SesEventDestination.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sesEventDestination.SesEventDestination.property.kinesisDestinationInput">kinesisDestinationInput</a></code> | <code><a href="#@cdktf/aws-cdk.sesEventDestination.SesEventDestinationKinesisDestination">SesEventDestinationKinesisDestination</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sesEventDestination.SesEventDestination.property.matchingTypesInput">matchingTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sesEventDestination.SesEventDestination.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sesEventDestination.SesEventDestination.property.snsDestinationInput">snsDestinationInput</a></code> | <code><a href="#@cdktf/aws-cdk.sesEventDestination.SesEventDestinationSnsDestination">SesEventDestinationSnsDestination</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sesEventDestination.SesEventDestination.property.configurationSetName">configurationSetName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sesEventDestination.SesEventDestination.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sesEventDestination.SesEventDestination.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sesEventDestination.SesEventDestination.property.matchingTypes">matchingTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sesEventDestination.SesEventDestination.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/aws-cdk.sesEventDestination.SesEventDestination.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/aws-cdk.sesEventDestination.SesEventDestination.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.sesEventDestination.SesEventDestination.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/aws-cdk.sesEventDestination.SesEventDestination.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/aws-cdk.sesEventDestination.SesEventDestination.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/aws-cdk.sesEventDestination.SesEventDestination.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/aws-cdk.sesEventDestination.SesEventDestination.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.sesEventDestination.SesEventDestination.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.sesEventDestination.SesEventDestination.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.sesEventDestination.SesEventDestination.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.sesEventDestination.SesEventDestination.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.sesEventDestination.SesEventDestination.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.sesEventDestination.SesEventDestination.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.sesEventDestination.SesEventDestination.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/aws-cdk.sesEventDestination.SesEventDestination.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `cloudwatchDestination`<sup>Required</sup> <a name="cloudwatchDestination" id="@cdktf/aws-cdk.sesEventDestination.SesEventDestination.property.cloudwatchDestination"></a>

```typescript
public readonly cloudwatchDestination: SesEventDestinationCloudwatchDestinationList;
```

- *Type:* <a href="#@cdktf/aws-cdk.sesEventDestination.SesEventDestinationCloudwatchDestinationList">SesEventDestinationCloudwatchDestinationList</a>

---

##### `kinesisDestination`<sup>Required</sup> <a name="kinesisDestination" id="@cdktf/aws-cdk.sesEventDestination.SesEventDestination.property.kinesisDestination"></a>

```typescript
public readonly kinesisDestination: SesEventDestinationKinesisDestinationOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.sesEventDestination.SesEventDestinationKinesisDestinationOutputReference">SesEventDestinationKinesisDestinationOutputReference</a>

---

##### `snsDestination`<sup>Required</sup> <a name="snsDestination" id="@cdktf/aws-cdk.sesEventDestination.SesEventDestination.property.snsDestination"></a>

```typescript
public readonly snsDestination: SesEventDestinationSnsDestinationOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.sesEventDestination.SesEventDestinationSnsDestinationOutputReference">SesEventDestinationSnsDestinationOutputReference</a>

---

##### `cloudwatchDestinationInput`<sup>Optional</sup> <a name="cloudwatchDestinationInput" id="@cdktf/aws-cdk.sesEventDestination.SesEventDestination.property.cloudwatchDestinationInput"></a>

```typescript
public readonly cloudwatchDestinationInput: IResolvable | SesEventDestinationCloudwatchDestination[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.sesEventDestination.SesEventDestinationCloudwatchDestination">SesEventDestinationCloudwatchDestination</a>[]

---

##### `configurationSetNameInput`<sup>Optional</sup> <a name="configurationSetNameInput" id="@cdktf/aws-cdk.sesEventDestination.SesEventDestination.property.configurationSetNameInput"></a>

```typescript
public readonly configurationSetNameInput: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/aws-cdk.sesEventDestination.SesEventDestination.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/aws-cdk.sesEventDestination.SesEventDestination.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `kinesisDestinationInput`<sup>Optional</sup> <a name="kinesisDestinationInput" id="@cdktf/aws-cdk.sesEventDestination.SesEventDestination.property.kinesisDestinationInput"></a>

```typescript
public readonly kinesisDestinationInput: SesEventDestinationKinesisDestination;
```

- *Type:* <a href="#@cdktf/aws-cdk.sesEventDestination.SesEventDestinationKinesisDestination">SesEventDestinationKinesisDestination</a>

---

##### `matchingTypesInput`<sup>Optional</sup> <a name="matchingTypesInput" id="@cdktf/aws-cdk.sesEventDestination.SesEventDestination.property.matchingTypesInput"></a>

```typescript
public readonly matchingTypesInput: string[];
```

- *Type:* string[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/aws-cdk.sesEventDestination.SesEventDestination.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `snsDestinationInput`<sup>Optional</sup> <a name="snsDestinationInput" id="@cdktf/aws-cdk.sesEventDestination.SesEventDestination.property.snsDestinationInput"></a>

```typescript
public readonly snsDestinationInput: SesEventDestinationSnsDestination;
```

- *Type:* <a href="#@cdktf/aws-cdk.sesEventDestination.SesEventDestinationSnsDestination">SesEventDestinationSnsDestination</a>

---

##### `configurationSetName`<sup>Required</sup> <a name="configurationSetName" id="@cdktf/aws-cdk.sesEventDestination.SesEventDestination.property.configurationSetName"></a>

```typescript
public readonly configurationSetName: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/aws-cdk.sesEventDestination.SesEventDestination.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.sesEventDestination.SesEventDestination.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `matchingTypes`<sup>Required</sup> <a name="matchingTypes" id="@cdktf/aws-cdk.sesEventDestination.SesEventDestination.property.matchingTypes"></a>

```typescript
public readonly matchingTypes: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/aws-cdk.sesEventDestination.SesEventDestination.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.sesEventDestination.SesEventDestination.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/aws-cdk.sesEventDestination.SesEventDestination.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SesEventDestinationCloudwatchDestination <a name="SesEventDestinationCloudwatchDestination" id="@cdktf/aws-cdk.sesEventDestination.SesEventDestinationCloudwatchDestination"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.sesEventDestination.SesEventDestinationCloudwatchDestination.Initializer"></a>

```typescript
import { sesEventDestination } from '@cdktf/aws-cdk'

const sesEventDestinationCloudwatchDestination: sesEventDestination.SesEventDestinationCloudwatchDestination = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.sesEventDestination.SesEventDestinationCloudwatchDestination.property.defaultValue">defaultValue</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/ses_event_destination#default_value SesEventDestination#default_value}. |
| <code><a href="#@cdktf/aws-cdk.sesEventDestination.SesEventDestinationCloudwatchDestination.property.dimensionName">dimensionName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/ses_event_destination#dimension_name SesEventDestination#dimension_name}. |
| <code><a href="#@cdktf/aws-cdk.sesEventDestination.SesEventDestinationCloudwatchDestination.property.valueSource">valueSource</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/ses_event_destination#value_source SesEventDestination#value_source}. |

---

##### `defaultValue`<sup>Required</sup> <a name="defaultValue" id="@cdktf/aws-cdk.sesEventDestination.SesEventDestinationCloudwatchDestination.property.defaultValue"></a>

```typescript
public readonly defaultValue: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/ses_event_destination#default_value SesEventDestination#default_value}.

---

##### `dimensionName`<sup>Required</sup> <a name="dimensionName" id="@cdktf/aws-cdk.sesEventDestination.SesEventDestinationCloudwatchDestination.property.dimensionName"></a>

```typescript
public readonly dimensionName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/ses_event_destination#dimension_name SesEventDestination#dimension_name}.

---

##### `valueSource`<sup>Required</sup> <a name="valueSource" id="@cdktf/aws-cdk.sesEventDestination.SesEventDestinationCloudwatchDestination.property.valueSource"></a>

```typescript
public readonly valueSource: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/ses_event_destination#value_source SesEventDestination#value_source}.

---

### SesEventDestinationConfig <a name="SesEventDestinationConfig" id="@cdktf/aws-cdk.sesEventDestination.SesEventDestinationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.sesEventDestination.SesEventDestinationConfig.Initializer"></a>

```typescript
import { sesEventDestination } from '@cdktf/aws-cdk'

const sesEventDestinationConfig: sesEventDestination.SesEventDestinationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.sesEventDestination.SesEventDestinationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sesEventDestination.SesEventDestinationConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sesEventDestination.SesEventDestinationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sesEventDestination.SesEventDestinationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sesEventDestination.SesEventDestinationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sesEventDestination.SesEventDestinationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sesEventDestination.SesEventDestinationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sesEventDestination.SesEventDestinationConfig.property.configurationSetName">configurationSetName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/ses_event_destination#configuration_set_name SesEventDestination#configuration_set_name}. |
| <code><a href="#@cdktf/aws-cdk.sesEventDestination.SesEventDestinationConfig.property.matchingTypes">matchingTypes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/ses_event_destination#matching_types SesEventDestination#matching_types}. |
| <code><a href="#@cdktf/aws-cdk.sesEventDestination.SesEventDestinationConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/ses_event_destination#name SesEventDestination#name}. |
| <code><a href="#@cdktf/aws-cdk.sesEventDestination.SesEventDestinationConfig.property.cloudwatchDestination">cloudwatchDestination</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.sesEventDestination.SesEventDestinationCloudwatchDestination">SesEventDestinationCloudwatchDestination</a>[]</code> | cloudwatch_destination block. |
| <code><a href="#@cdktf/aws-cdk.sesEventDestination.SesEventDestinationConfig.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/ses_event_destination#enabled SesEventDestination#enabled}. |
| <code><a href="#@cdktf/aws-cdk.sesEventDestination.SesEventDestinationConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/ses_event_destination#id SesEventDestination#id}. |
| <code><a href="#@cdktf/aws-cdk.sesEventDestination.SesEventDestinationConfig.property.kinesisDestination">kinesisDestination</a></code> | <code><a href="#@cdktf/aws-cdk.sesEventDestination.SesEventDestinationKinesisDestination">SesEventDestinationKinesisDestination</a></code> | kinesis_destination block. |
| <code><a href="#@cdktf/aws-cdk.sesEventDestination.SesEventDestinationConfig.property.snsDestination">snsDestination</a></code> | <code><a href="#@cdktf/aws-cdk.sesEventDestination.SesEventDestinationSnsDestination">SesEventDestinationSnsDestination</a></code> | sns_destination block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.sesEventDestination.SesEventDestinationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.sesEventDestination.SesEventDestinationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.sesEventDestination.SesEventDestinationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.sesEventDestination.SesEventDestinationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.sesEventDestination.SesEventDestinationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.sesEventDestination.SesEventDestinationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.sesEventDestination.SesEventDestinationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `configurationSetName`<sup>Required</sup> <a name="configurationSetName" id="@cdktf/aws-cdk.sesEventDestination.SesEventDestinationConfig.property.configurationSetName"></a>

```typescript
public readonly configurationSetName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/ses_event_destination#configuration_set_name SesEventDestination#configuration_set_name}.

---

##### `matchingTypes`<sup>Required</sup> <a name="matchingTypes" id="@cdktf/aws-cdk.sesEventDestination.SesEventDestinationConfig.property.matchingTypes"></a>

```typescript
public readonly matchingTypes: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/ses_event_destination#matching_types SesEventDestination#matching_types}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/aws-cdk.sesEventDestination.SesEventDestinationConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/ses_event_destination#name SesEventDestination#name}.

---

##### `cloudwatchDestination`<sup>Optional</sup> <a name="cloudwatchDestination" id="@cdktf/aws-cdk.sesEventDestination.SesEventDestinationConfig.property.cloudwatchDestination"></a>

```typescript
public readonly cloudwatchDestination: IResolvable | SesEventDestinationCloudwatchDestination[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.sesEventDestination.SesEventDestinationCloudwatchDestination">SesEventDestinationCloudwatchDestination</a>[]

cloudwatch_destination block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/ses_event_destination#cloudwatch_destination SesEventDestination#cloudwatch_destination}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/aws-cdk.sesEventDestination.SesEventDestinationConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/ses_event_destination#enabled SesEventDestination#enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/aws-cdk.sesEventDestination.SesEventDestinationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/ses_event_destination#id SesEventDestination#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kinesisDestination`<sup>Optional</sup> <a name="kinesisDestination" id="@cdktf/aws-cdk.sesEventDestination.SesEventDestinationConfig.property.kinesisDestination"></a>

```typescript
public readonly kinesisDestination: SesEventDestinationKinesisDestination;
```

- *Type:* <a href="#@cdktf/aws-cdk.sesEventDestination.SesEventDestinationKinesisDestination">SesEventDestinationKinesisDestination</a>

kinesis_destination block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/ses_event_destination#kinesis_destination SesEventDestination#kinesis_destination}

---

##### `snsDestination`<sup>Optional</sup> <a name="snsDestination" id="@cdktf/aws-cdk.sesEventDestination.SesEventDestinationConfig.property.snsDestination"></a>

```typescript
public readonly snsDestination: SesEventDestinationSnsDestination;
```

- *Type:* <a href="#@cdktf/aws-cdk.sesEventDestination.SesEventDestinationSnsDestination">SesEventDestinationSnsDestination</a>

sns_destination block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/ses_event_destination#sns_destination SesEventDestination#sns_destination}

---

### SesEventDestinationKinesisDestination <a name="SesEventDestinationKinesisDestination" id="@cdktf/aws-cdk.sesEventDestination.SesEventDestinationKinesisDestination"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.sesEventDestination.SesEventDestinationKinesisDestination.Initializer"></a>

```typescript
import { sesEventDestination } from '@cdktf/aws-cdk'

const sesEventDestinationKinesisDestination: sesEventDestination.SesEventDestinationKinesisDestination = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.sesEventDestination.SesEventDestinationKinesisDestination.property.roleArn">roleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/ses_event_destination#role_arn SesEventDestination#role_arn}. |
| <code><a href="#@cdktf/aws-cdk.sesEventDestination.SesEventDestinationKinesisDestination.property.streamArn">streamArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/ses_event_destination#stream_arn SesEventDestination#stream_arn}. |

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/aws-cdk.sesEventDestination.SesEventDestinationKinesisDestination.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/ses_event_destination#role_arn SesEventDestination#role_arn}.

---

##### `streamArn`<sup>Required</sup> <a name="streamArn" id="@cdktf/aws-cdk.sesEventDestination.SesEventDestinationKinesisDestination.property.streamArn"></a>

```typescript
public readonly streamArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/ses_event_destination#stream_arn SesEventDestination#stream_arn}.

---

### SesEventDestinationSnsDestination <a name="SesEventDestinationSnsDestination" id="@cdktf/aws-cdk.sesEventDestination.SesEventDestinationSnsDestination"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.sesEventDestination.SesEventDestinationSnsDestination.Initializer"></a>

```typescript
import { sesEventDestination } from '@cdktf/aws-cdk'

const sesEventDestinationSnsDestination: sesEventDestination.SesEventDestinationSnsDestination = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.sesEventDestination.SesEventDestinationSnsDestination.property.topicArn">topicArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/ses_event_destination#topic_arn SesEventDestination#topic_arn}. |

---

##### `topicArn`<sup>Required</sup> <a name="topicArn" id="@cdktf/aws-cdk.sesEventDestination.SesEventDestinationSnsDestination.property.topicArn"></a>

```typescript
public readonly topicArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/ses_event_destination#topic_arn SesEventDestination#topic_arn}.

---

## Classes <a name="Classes" id="Classes"></a>

### SesEventDestinationCloudwatchDestinationList <a name="SesEventDestinationCloudwatchDestinationList" id="@cdktf/aws-cdk.sesEventDestination.SesEventDestinationCloudwatchDestinationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.sesEventDestination.SesEventDestinationCloudwatchDestinationList.Initializer"></a>

```typescript
import { sesEventDestination } from '@cdktf/aws-cdk'

new sesEventDestination.SesEventDestinationCloudwatchDestinationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.sesEventDestination.SesEventDestinationCloudwatchDestinationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.sesEventDestination.SesEventDestinationCloudwatchDestinationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.sesEventDestination.SesEventDestinationCloudwatchDestinationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.sesEventDestination.SesEventDestinationCloudwatchDestinationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sesEventDestination.SesEventDestinationCloudwatchDestinationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/aws-cdk.sesEventDestination.SesEventDestinationCloudwatchDestinationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.sesEventDestination.SesEventDestinationCloudwatchDestinationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sesEventDestination.SesEventDestinationCloudwatchDestinationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.sesEventDestination.SesEventDestinationCloudwatchDestinationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.sesEventDestination.SesEventDestinationCloudwatchDestinationList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.sesEventDestination.SesEventDestinationCloudwatchDestinationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.sesEventDestination.SesEventDestinationCloudwatchDestinationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.sesEventDestination.SesEventDestinationCloudwatchDestinationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.sesEventDestination.SesEventDestinationCloudwatchDestinationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/aws-cdk.sesEventDestination.SesEventDestinationCloudwatchDestinationList.get"></a>

```typescript
public get(index: number): SesEventDestinationCloudwatchDestinationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/aws-cdk.sesEventDestination.SesEventDestinationCloudwatchDestinationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.sesEventDestination.SesEventDestinationCloudwatchDestinationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.sesEventDestination.SesEventDestinationCloudwatchDestinationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sesEventDestination.SesEventDestinationCloudwatchDestinationList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.sesEventDestination.SesEventDestinationCloudwatchDestination">SesEventDestinationCloudwatchDestination</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.sesEventDestination.SesEventDestinationCloudwatchDestinationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.sesEventDestination.SesEventDestinationCloudwatchDestinationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.sesEventDestination.SesEventDestinationCloudwatchDestinationList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SesEventDestinationCloudwatchDestination[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.sesEventDestination.SesEventDestinationCloudwatchDestination">SesEventDestinationCloudwatchDestination</a>[]

---


### SesEventDestinationCloudwatchDestinationOutputReference <a name="SesEventDestinationCloudwatchDestinationOutputReference" id="@cdktf/aws-cdk.sesEventDestination.SesEventDestinationCloudwatchDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.sesEventDestination.SesEventDestinationCloudwatchDestinationOutputReference.Initializer"></a>

```typescript
import { sesEventDestination } from '@cdktf/aws-cdk'

new sesEventDestination.SesEventDestinationCloudwatchDestinationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.sesEventDestination.SesEventDestinationCloudwatchDestinationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.sesEventDestination.SesEventDestinationCloudwatchDestinationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.sesEventDestination.SesEventDestinationCloudwatchDestinationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/aws-cdk.sesEventDestination.SesEventDestinationCloudwatchDestinationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.sesEventDestination.SesEventDestinationCloudwatchDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sesEventDestination.SesEventDestinationCloudwatchDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/aws-cdk.sesEventDestination.SesEventDestinationCloudwatchDestinationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/aws-cdk.sesEventDestination.SesEventDestinationCloudwatchDestinationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.sesEventDestination.SesEventDestinationCloudwatchDestinationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sesEventDestination.SesEventDestinationCloudwatchDestinationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sesEventDestination.SesEventDestinationCloudwatchDestinationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sesEventDestination.SesEventDestinationCloudwatchDestinationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sesEventDestination.SesEventDestinationCloudwatchDestinationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sesEventDestination.SesEventDestinationCloudwatchDestinationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sesEventDestination.SesEventDestinationCloudwatchDestinationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sesEventDestination.SesEventDestinationCloudwatchDestinationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sesEventDestination.SesEventDestinationCloudwatchDestinationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sesEventDestination.SesEventDestinationCloudwatchDestinationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sesEventDestination.SesEventDestinationCloudwatchDestinationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sesEventDestination.SesEventDestinationCloudwatchDestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.sesEventDestination.SesEventDestinationCloudwatchDestinationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.sesEventDestination.SesEventDestinationCloudwatchDestinationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.sesEventDestination.SesEventDestinationCloudwatchDestinationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sesEventDestination.SesEventDestinationCloudwatchDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.sesEventDestination.SesEventDestinationCloudwatchDestinationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sesEventDestination.SesEventDestinationCloudwatchDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.sesEventDestination.SesEventDestinationCloudwatchDestinationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sesEventDestination.SesEventDestinationCloudwatchDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.sesEventDestination.SesEventDestinationCloudwatchDestinationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sesEventDestination.SesEventDestinationCloudwatchDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.sesEventDestination.SesEventDestinationCloudwatchDestinationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sesEventDestination.SesEventDestinationCloudwatchDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.sesEventDestination.SesEventDestinationCloudwatchDestinationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sesEventDestination.SesEventDestinationCloudwatchDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.sesEventDestination.SesEventDestinationCloudwatchDestinationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sesEventDestination.SesEventDestinationCloudwatchDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.sesEventDestination.SesEventDestinationCloudwatchDestinationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sesEventDestination.SesEventDestinationCloudwatchDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.sesEventDestination.SesEventDestinationCloudwatchDestinationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sesEventDestination.SesEventDestinationCloudwatchDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.sesEventDestination.SesEventDestinationCloudwatchDestinationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.sesEventDestination.SesEventDestinationCloudwatchDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.sesEventDestination.SesEventDestinationCloudwatchDestinationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.sesEventDestination.SesEventDestinationCloudwatchDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.sesEventDestination.SesEventDestinationCloudwatchDestinationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.sesEventDestination.SesEventDestinationCloudwatchDestinationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.sesEventDestination.SesEventDestinationCloudwatchDestinationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sesEventDestination.SesEventDestinationCloudwatchDestinationOutputReference.property.defaultValueInput">defaultValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sesEventDestination.SesEventDestinationCloudwatchDestinationOutputReference.property.dimensionNameInput">dimensionNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sesEventDestination.SesEventDestinationCloudwatchDestinationOutputReference.property.valueSourceInput">valueSourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sesEventDestination.SesEventDestinationCloudwatchDestinationOutputReference.property.defaultValue">defaultValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sesEventDestination.SesEventDestinationCloudwatchDestinationOutputReference.property.dimensionName">dimensionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sesEventDestination.SesEventDestinationCloudwatchDestinationOutputReference.property.valueSource">valueSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sesEventDestination.SesEventDestinationCloudwatchDestinationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.sesEventDestination.SesEventDestinationCloudwatchDestination">SesEventDestinationCloudwatchDestination</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.sesEventDestination.SesEventDestinationCloudwatchDestinationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.sesEventDestination.SesEventDestinationCloudwatchDestinationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `defaultValueInput`<sup>Optional</sup> <a name="defaultValueInput" id="@cdktf/aws-cdk.sesEventDestination.SesEventDestinationCloudwatchDestinationOutputReference.property.defaultValueInput"></a>

```typescript
public readonly defaultValueInput: string;
```

- *Type:* string

---

##### `dimensionNameInput`<sup>Optional</sup> <a name="dimensionNameInput" id="@cdktf/aws-cdk.sesEventDestination.SesEventDestinationCloudwatchDestinationOutputReference.property.dimensionNameInput"></a>

```typescript
public readonly dimensionNameInput: string;
```

- *Type:* string

---

##### `valueSourceInput`<sup>Optional</sup> <a name="valueSourceInput" id="@cdktf/aws-cdk.sesEventDestination.SesEventDestinationCloudwatchDestinationOutputReference.property.valueSourceInput"></a>

```typescript
public readonly valueSourceInput: string;
```

- *Type:* string

---

##### `defaultValue`<sup>Required</sup> <a name="defaultValue" id="@cdktf/aws-cdk.sesEventDestination.SesEventDestinationCloudwatchDestinationOutputReference.property.defaultValue"></a>

```typescript
public readonly defaultValue: string;
```

- *Type:* string

---

##### `dimensionName`<sup>Required</sup> <a name="dimensionName" id="@cdktf/aws-cdk.sesEventDestination.SesEventDestinationCloudwatchDestinationOutputReference.property.dimensionName"></a>

```typescript
public readonly dimensionName: string;
```

- *Type:* string

---

##### `valueSource`<sup>Required</sup> <a name="valueSource" id="@cdktf/aws-cdk.sesEventDestination.SesEventDestinationCloudwatchDestinationOutputReference.property.valueSource"></a>

```typescript
public readonly valueSource: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.sesEventDestination.SesEventDestinationCloudwatchDestinationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SesEventDestinationCloudwatchDestination;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.sesEventDestination.SesEventDestinationCloudwatchDestination">SesEventDestinationCloudwatchDestination</a>

---


### SesEventDestinationKinesisDestinationOutputReference <a name="SesEventDestinationKinesisDestinationOutputReference" id="@cdktf/aws-cdk.sesEventDestination.SesEventDestinationKinesisDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.sesEventDestination.SesEventDestinationKinesisDestinationOutputReference.Initializer"></a>

```typescript
import { sesEventDestination } from '@cdktf/aws-cdk'

new sesEventDestination.SesEventDestinationKinesisDestinationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.sesEventDestination.SesEventDestinationKinesisDestinationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.sesEventDestination.SesEventDestinationKinesisDestinationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.sesEventDestination.SesEventDestinationKinesisDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sesEventDestination.SesEventDestinationKinesisDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.sesEventDestination.SesEventDestinationKinesisDestinationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sesEventDestination.SesEventDestinationKinesisDestinationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sesEventDestination.SesEventDestinationKinesisDestinationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sesEventDestination.SesEventDestinationKinesisDestinationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sesEventDestination.SesEventDestinationKinesisDestinationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sesEventDestination.SesEventDestinationKinesisDestinationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sesEventDestination.SesEventDestinationKinesisDestinationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sesEventDestination.SesEventDestinationKinesisDestinationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sesEventDestination.SesEventDestinationKinesisDestinationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sesEventDestination.SesEventDestinationKinesisDestinationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sesEventDestination.SesEventDestinationKinesisDestinationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sesEventDestination.SesEventDestinationKinesisDestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.sesEventDestination.SesEventDestinationKinesisDestinationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.sesEventDestination.SesEventDestinationKinesisDestinationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.sesEventDestination.SesEventDestinationKinesisDestinationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sesEventDestination.SesEventDestinationKinesisDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.sesEventDestination.SesEventDestinationKinesisDestinationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sesEventDestination.SesEventDestinationKinesisDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.sesEventDestination.SesEventDestinationKinesisDestinationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sesEventDestination.SesEventDestinationKinesisDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.sesEventDestination.SesEventDestinationKinesisDestinationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sesEventDestination.SesEventDestinationKinesisDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.sesEventDestination.SesEventDestinationKinesisDestinationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sesEventDestination.SesEventDestinationKinesisDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.sesEventDestination.SesEventDestinationKinesisDestinationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sesEventDestination.SesEventDestinationKinesisDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.sesEventDestination.SesEventDestinationKinesisDestinationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sesEventDestination.SesEventDestinationKinesisDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.sesEventDestination.SesEventDestinationKinesisDestinationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sesEventDestination.SesEventDestinationKinesisDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.sesEventDestination.SesEventDestinationKinesisDestinationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sesEventDestination.SesEventDestinationKinesisDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.sesEventDestination.SesEventDestinationKinesisDestinationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.sesEventDestination.SesEventDestinationKinesisDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.sesEventDestination.SesEventDestinationKinesisDestinationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.sesEventDestination.SesEventDestinationKinesisDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.sesEventDestination.SesEventDestinationKinesisDestinationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.sesEventDestination.SesEventDestinationKinesisDestinationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.sesEventDestination.SesEventDestinationKinesisDestinationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sesEventDestination.SesEventDestinationKinesisDestinationOutputReference.property.roleArnInput">roleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sesEventDestination.SesEventDestinationKinesisDestinationOutputReference.property.streamArnInput">streamArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sesEventDestination.SesEventDestinationKinesisDestinationOutputReference.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sesEventDestination.SesEventDestinationKinesisDestinationOutputReference.property.streamArn">streamArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sesEventDestination.SesEventDestinationKinesisDestinationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.sesEventDestination.SesEventDestinationKinesisDestination">SesEventDestinationKinesisDestination</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.sesEventDestination.SesEventDestinationKinesisDestinationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.sesEventDestination.SesEventDestinationKinesisDestinationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktf/aws-cdk.sesEventDestination.SesEventDestinationKinesisDestinationOutputReference.property.roleArnInput"></a>

```typescript
public readonly roleArnInput: string;
```

- *Type:* string

---

##### `streamArnInput`<sup>Optional</sup> <a name="streamArnInput" id="@cdktf/aws-cdk.sesEventDestination.SesEventDestinationKinesisDestinationOutputReference.property.streamArnInput"></a>

```typescript
public readonly streamArnInput: string;
```

- *Type:* string

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/aws-cdk.sesEventDestination.SesEventDestinationKinesisDestinationOutputReference.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `streamArn`<sup>Required</sup> <a name="streamArn" id="@cdktf/aws-cdk.sesEventDestination.SesEventDestinationKinesisDestinationOutputReference.property.streamArn"></a>

```typescript
public readonly streamArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.sesEventDestination.SesEventDestinationKinesisDestinationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SesEventDestinationKinesisDestination;
```

- *Type:* <a href="#@cdktf/aws-cdk.sesEventDestination.SesEventDestinationKinesisDestination">SesEventDestinationKinesisDestination</a>

---


### SesEventDestinationSnsDestinationOutputReference <a name="SesEventDestinationSnsDestinationOutputReference" id="@cdktf/aws-cdk.sesEventDestination.SesEventDestinationSnsDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.sesEventDestination.SesEventDestinationSnsDestinationOutputReference.Initializer"></a>

```typescript
import { sesEventDestination } from '@cdktf/aws-cdk'

new sesEventDestination.SesEventDestinationSnsDestinationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.sesEventDestination.SesEventDestinationSnsDestinationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.sesEventDestination.SesEventDestinationSnsDestinationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.sesEventDestination.SesEventDestinationSnsDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sesEventDestination.SesEventDestinationSnsDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.sesEventDestination.SesEventDestinationSnsDestinationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sesEventDestination.SesEventDestinationSnsDestinationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sesEventDestination.SesEventDestinationSnsDestinationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sesEventDestination.SesEventDestinationSnsDestinationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sesEventDestination.SesEventDestinationSnsDestinationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sesEventDestination.SesEventDestinationSnsDestinationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sesEventDestination.SesEventDestinationSnsDestinationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sesEventDestination.SesEventDestinationSnsDestinationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sesEventDestination.SesEventDestinationSnsDestinationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sesEventDestination.SesEventDestinationSnsDestinationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sesEventDestination.SesEventDestinationSnsDestinationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sesEventDestination.SesEventDestinationSnsDestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.sesEventDestination.SesEventDestinationSnsDestinationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.sesEventDestination.SesEventDestinationSnsDestinationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.sesEventDestination.SesEventDestinationSnsDestinationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sesEventDestination.SesEventDestinationSnsDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.sesEventDestination.SesEventDestinationSnsDestinationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sesEventDestination.SesEventDestinationSnsDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.sesEventDestination.SesEventDestinationSnsDestinationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sesEventDestination.SesEventDestinationSnsDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.sesEventDestination.SesEventDestinationSnsDestinationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sesEventDestination.SesEventDestinationSnsDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.sesEventDestination.SesEventDestinationSnsDestinationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sesEventDestination.SesEventDestinationSnsDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.sesEventDestination.SesEventDestinationSnsDestinationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sesEventDestination.SesEventDestinationSnsDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.sesEventDestination.SesEventDestinationSnsDestinationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sesEventDestination.SesEventDestinationSnsDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.sesEventDestination.SesEventDestinationSnsDestinationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sesEventDestination.SesEventDestinationSnsDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.sesEventDestination.SesEventDestinationSnsDestinationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.sesEventDestination.SesEventDestinationSnsDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.sesEventDestination.SesEventDestinationSnsDestinationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.sesEventDestination.SesEventDestinationSnsDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.sesEventDestination.SesEventDestinationSnsDestinationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.sesEventDestination.SesEventDestinationSnsDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.sesEventDestination.SesEventDestinationSnsDestinationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.sesEventDestination.SesEventDestinationSnsDestinationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.sesEventDestination.SesEventDestinationSnsDestinationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sesEventDestination.SesEventDestinationSnsDestinationOutputReference.property.topicArnInput">topicArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sesEventDestination.SesEventDestinationSnsDestinationOutputReference.property.topicArn">topicArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.sesEventDestination.SesEventDestinationSnsDestinationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.sesEventDestination.SesEventDestinationSnsDestination">SesEventDestinationSnsDestination</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.sesEventDestination.SesEventDestinationSnsDestinationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.sesEventDestination.SesEventDestinationSnsDestinationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `topicArnInput`<sup>Optional</sup> <a name="topicArnInput" id="@cdktf/aws-cdk.sesEventDestination.SesEventDestinationSnsDestinationOutputReference.property.topicArnInput"></a>

```typescript
public readonly topicArnInput: string;
```

- *Type:* string

---

##### `topicArn`<sup>Required</sup> <a name="topicArn" id="@cdktf/aws-cdk.sesEventDestination.SesEventDestinationSnsDestinationOutputReference.property.topicArn"></a>

```typescript
public readonly topicArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.sesEventDestination.SesEventDestinationSnsDestinationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: SesEventDestinationSnsDestination;
```

- *Type:* <a href="#@cdktf/aws-cdk.sesEventDestination.SesEventDestinationSnsDestination">SesEventDestinationSnsDestination</a>

---



