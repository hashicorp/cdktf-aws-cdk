# `aws_chime_voice_connector_group`

Refer to the Terraform Registory for docs: [`aws_chime_voice_connector_group`](https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/chime_voice_connector_group).

# `chimeVoiceConnectorGroup` Submodule <a name="`chimeVoiceConnectorGroup` Submodule" id="@cdktf/aws-cdk.chimeVoiceConnectorGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ChimeVoiceConnectorGroup <a name="ChimeVoiceConnectorGroup" id="@cdktf/aws-cdk.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/chime_voice_connector_group aws_chime_voice_connector_group}.

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.Initializer"></a>

```typescript
import { chimeVoiceConnectorGroup } from '@cdktf/aws-cdk'

new chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup(scope: Construct, id: string, config: ChimeVoiceConnectorGroupConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/aws-cdk.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/aws-cdk.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/aws-cdk.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConfig">ChimeVoiceConnectorGroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/aws-cdk.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/aws-cdk.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConfig">ChimeVoiceConnectorGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/aws-cdk.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/aws-cdk.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/aws-cdk.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/aws-cdk.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.putConnector">putConnector</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.resetConnector">resetConnector</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/aws-cdk.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/aws-cdk.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/aws-cdk.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/aws-cdk.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/aws-cdk.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/aws-cdk.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/aws-cdk.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putConnector` <a name="putConnector" id="@cdktf/aws-cdk.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.putConnector"></a>

```typescript
public putConnector(value: IResolvable | ChimeVoiceConnectorGroupConnector[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.putConnector.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnector">ChimeVoiceConnectorGroupConnector</a>[]

---

##### `resetConnector` <a name="resetConnector" id="@cdktf/aws-cdk.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.resetConnector"></a>

```typescript
public resetConnector(): void
```

##### `resetId` <a name="resetId" id="@cdktf/aws-cdk.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/aws-cdk.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@cdktf/aws-cdk.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.isConstruct"></a>

```typescript
import { chimeVoiceConnectorGroup } from '@cdktf/aws-cdk'

chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/aws-cdk.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.isTerraformElement"></a>

```typescript
import { chimeVoiceConnectorGroup } from '@cdktf/aws-cdk'

chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/aws-cdk.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.isTerraformResource"></a>

```typescript
import { chimeVoiceConnectorGroup } from '@cdktf/aws-cdk'

chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/aws-cdk.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.property.connector">connector</a></code> | <code><a href="#@cdktf/aws-cdk.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorList">ChimeVoiceConnectorGroupConnectorList</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.property.connectorInput">connectorInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnector">ChimeVoiceConnectorGroupConnector</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/aws-cdk.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/aws-cdk.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/aws-cdk.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/aws-cdk.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/aws-cdk.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/aws-cdk.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `connector`<sup>Required</sup> <a name="connector" id="@cdktf/aws-cdk.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.property.connector"></a>

```typescript
public readonly connector: ChimeVoiceConnectorGroupConnectorList;
```

- *Type:* <a href="#@cdktf/aws-cdk.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorList">ChimeVoiceConnectorGroupConnectorList</a>

---

##### `connectorInput`<sup>Optional</sup> <a name="connectorInput" id="@cdktf/aws-cdk.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.property.connectorInput"></a>

```typescript
public readonly connectorInput: IResolvable | ChimeVoiceConnectorGroupConnector[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnector">ChimeVoiceConnectorGroupConnector</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/aws-cdk.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/aws-cdk.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/aws-cdk.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/aws-cdk.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroup.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ChimeVoiceConnectorGroupConfig <a name="ChimeVoiceConnectorGroupConfig" id="@cdktf/aws-cdk.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConfig.Initializer"></a>

```typescript
import { chimeVoiceConnectorGroup } from '@cdktf/aws-cdk'

const chimeVoiceConnectorGroupConfig: chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/chime_voice_connector_group#name ChimeVoiceConnectorGroup#name}. |
| <code><a href="#@cdktf/aws-cdk.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConfig.property.connector">connector</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnector">ChimeVoiceConnectorGroupConnector</a>[]</code> | connector block. |
| <code><a href="#@cdktf/aws-cdk.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/chime_voice_connector_group#id ChimeVoiceConnectorGroup#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/aws-cdk.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/chime_voice_connector_group#name ChimeVoiceConnectorGroup#name}.

---

##### `connector`<sup>Optional</sup> <a name="connector" id="@cdktf/aws-cdk.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConfig.property.connector"></a>

```typescript
public readonly connector: IResolvable | ChimeVoiceConnectorGroupConnector[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnector">ChimeVoiceConnectorGroupConnector</a>[]

connector block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/chime_voice_connector_group#connector ChimeVoiceConnectorGroup#connector}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/aws-cdk.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/chime_voice_connector_group#id ChimeVoiceConnectorGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### ChimeVoiceConnectorGroupConnector <a name="ChimeVoiceConnectorGroupConnector" id="@cdktf/aws-cdk.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnector"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnector.Initializer"></a>

```typescript
import { chimeVoiceConnectorGroup } from '@cdktf/aws-cdk'

const chimeVoiceConnectorGroupConnector: chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnector = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnector.property.priority">priority</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/chime_voice_connector_group#priority ChimeVoiceConnectorGroup#priority}. |
| <code><a href="#@cdktf/aws-cdk.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnector.property.voiceConnectorId">voiceConnectorId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/chime_voice_connector_group#voice_connector_id ChimeVoiceConnectorGroup#voice_connector_id}. |

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/aws-cdk.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnector.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/chime_voice_connector_group#priority ChimeVoiceConnectorGroup#priority}.

---

##### `voiceConnectorId`<sup>Required</sup> <a name="voiceConnectorId" id="@cdktf/aws-cdk.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnector.property.voiceConnectorId"></a>

```typescript
public readonly voiceConnectorId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/chime_voice_connector_group#voice_connector_id ChimeVoiceConnectorGroup#voice_connector_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### ChimeVoiceConnectorGroupConnectorList <a name="ChimeVoiceConnectorGroupConnectorList" id="@cdktf/aws-cdk.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorList"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorList.Initializer"></a>

```typescript
import { chimeVoiceConnectorGroup } from '@cdktf/aws-cdk'

new chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/aws-cdk.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/aws-cdk.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorList.get"></a>

```typescript
public get(index: number): ChimeVoiceConnectorGroupConnectorOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/aws-cdk.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnector">ChimeVoiceConnectorGroupConnector</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ChimeVoiceConnectorGroupConnector[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnector">ChimeVoiceConnectorGroupConnector</a>[]

---


### ChimeVoiceConnectorGroupConnectorOutputReference <a name="ChimeVoiceConnectorGroupConnectorOutputReference" id="@cdktf/aws-cdk.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorOutputReference.Initializer"></a>

```typescript
import { chimeVoiceConnectorGroup } from '@cdktf/aws-cdk'

new chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/aws-cdk.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/aws-cdk.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/aws-cdk.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorOutputReference.property.priorityInput">priorityInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorOutputReference.property.voiceConnectorIdInput">voiceConnectorIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorOutputReference.property.priority">priority</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorOutputReference.property.voiceConnectorId">voiceConnectorId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnector">ChimeVoiceConnectorGroupConnector</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktf/aws-cdk.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorOutputReference.property.priorityInput"></a>

```typescript
public readonly priorityInput: number;
```

- *Type:* number

---

##### `voiceConnectorIdInput`<sup>Optional</sup> <a name="voiceConnectorIdInput" id="@cdktf/aws-cdk.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorOutputReference.property.voiceConnectorIdInput"></a>

```typescript
public readonly voiceConnectorIdInput: string;
```

- *Type:* string

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/aws-cdk.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorOutputReference.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

---

##### `voiceConnectorId`<sup>Required</sup> <a name="voiceConnectorId" id="@cdktf/aws-cdk.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorOutputReference.property.voiceConnectorId"></a>

```typescript
public readonly voiceConnectorId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnectorOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ChimeVoiceConnectorGroupConnector;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.chimeVoiceConnectorGroup.ChimeVoiceConnectorGroupConnector">ChimeVoiceConnectorGroupConnector</a>

---



