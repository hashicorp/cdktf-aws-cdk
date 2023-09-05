# `aws_guardduty_detector`

Refer to the Terraform Registory for docs: [`aws_guardduty_detector`](https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/guardduty_detector).

# `guarddutyDetector` Submodule <a name="`guarddutyDetector` Submodule" id="@cdktf/aws-cdk.guarddutyDetector"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GuarddutyDetector <a name="GuarddutyDetector" id="@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetector"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/guardduty_detector aws_guardduty_detector}.

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetector.Initializer"></a>

```typescript
import { guarddutyDetector } from '@cdktf/aws-cdk'

new guarddutyDetector.GuarddutyDetector(scope: Construct, id: string, config?: GuarddutyDetectorConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetector.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetector.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetector.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetectorConfig">GuarddutyDetectorConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetector.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetector.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetector.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetectorConfig">GuarddutyDetectorConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetector.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetector.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetector.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetector.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetector.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetector.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetector.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetector.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetector.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetector.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetector.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetector.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetector.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetector.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetector.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetector.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetector.putDatasources">putDatasources</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetector.resetDatasources">resetDatasources</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetector.resetEnable">resetEnable</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetector.resetFindingPublishingFrequency">resetFindingPublishingFrequency</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetector.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetector.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetector.resetTagsAll">resetTagsAll</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetector.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetector.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetector.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetector.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetector.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetector.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetector.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetector.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetector.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetector.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetector.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetector.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetector.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetector.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetector.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetector.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetector.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetector.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetector.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetector.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetector.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetector.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetector.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetector.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetector.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetector.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetector.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetector.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetector.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putDatasources` <a name="putDatasources" id="@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetector.putDatasources"></a>

```typescript
public putDatasources(value: GuarddutyDetectorDatasources): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetector.putDatasources.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetectorDatasources">GuarddutyDetectorDatasources</a>

---

##### `resetDatasources` <a name="resetDatasources" id="@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetector.resetDatasources"></a>

```typescript
public resetDatasources(): void
```

##### `resetEnable` <a name="resetEnable" id="@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetector.resetEnable"></a>

```typescript
public resetEnable(): void
```

##### `resetFindingPublishingFrequency` <a name="resetFindingPublishingFrequency" id="@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetector.resetFindingPublishingFrequency"></a>

```typescript
public resetFindingPublishingFrequency(): void
```

##### `resetId` <a name="resetId" id="@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetector.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetector.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetector.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetector.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetector.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetector.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetector.isConstruct"></a>

```typescript
import { guarddutyDetector } from '@cdktf/aws-cdk'

guarddutyDetector.GuarddutyDetector.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetector.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetector.isTerraformElement"></a>

```typescript
import { guarddutyDetector } from '@cdktf/aws-cdk'

guarddutyDetector.GuarddutyDetector.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetector.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetector.isTerraformResource"></a>

```typescript
import { guarddutyDetector } from '@cdktf/aws-cdk'

guarddutyDetector.GuarddutyDetector.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetector.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetector.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetector.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetector.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetector.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetector.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetector.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetector.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetector.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetector.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetector.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetector.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetector.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetector.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetector.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetector.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetector.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetector.property.datasources">datasources</a></code> | <code><a href="#@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference">GuarddutyDetectorDatasourcesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetector.property.datasourcesInput">datasourcesInput</a></code> | <code><a href="#@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetectorDatasources">GuarddutyDetectorDatasources</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetector.property.enableInput">enableInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetector.property.findingPublishingFrequencyInput">findingPublishingFrequencyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetector.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetector.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetector.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetector.property.enable">enable</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetector.property.findingPublishingFrequency">findingPublishingFrequency</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetector.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetector.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetector.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetector.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetector.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetector.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetector.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetector.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetector.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetector.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetector.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetector.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetector.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetector.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetector.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetector.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetector.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetector.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetector.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `datasources`<sup>Required</sup> <a name="datasources" id="@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetector.property.datasources"></a>

```typescript
public readonly datasources: GuarddutyDetectorDatasourcesOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference">GuarddutyDetectorDatasourcesOutputReference</a>

---

##### `datasourcesInput`<sup>Optional</sup> <a name="datasourcesInput" id="@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetector.property.datasourcesInput"></a>

```typescript
public readonly datasourcesInput: GuarddutyDetectorDatasources;
```

- *Type:* <a href="#@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetectorDatasources">GuarddutyDetectorDatasources</a>

---

##### `enableInput`<sup>Optional</sup> <a name="enableInput" id="@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetector.property.enableInput"></a>

```typescript
public readonly enableInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `findingPublishingFrequencyInput`<sup>Optional</sup> <a name="findingPublishingFrequencyInput" id="@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetector.property.findingPublishingFrequencyInput"></a>

```typescript
public readonly findingPublishingFrequencyInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetector.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetector.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetector.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `enable`<sup>Required</sup> <a name="enable" id="@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetector.property.enable"></a>

```typescript
public readonly enable: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `findingPublishingFrequency`<sup>Required</sup> <a name="findingPublishingFrequency" id="@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetector.property.findingPublishingFrequency"></a>

```typescript
public readonly findingPublishingFrequency: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetector.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetector.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetector.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetector.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetector.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GuarddutyDetectorConfig <a name="GuarddutyDetectorConfig" id="@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetectorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetectorConfig.Initializer"></a>

```typescript
import { guarddutyDetector } from '@cdktf/aws-cdk'

const guarddutyDetectorConfig: guarddutyDetector.GuarddutyDetectorConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetectorConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetectorConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetectorConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetectorConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetectorConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetectorConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetectorConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetectorConfig.property.datasources">datasources</a></code> | <code><a href="#@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetectorDatasources">GuarddutyDetectorDatasources</a></code> | datasources block. |
| <code><a href="#@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetectorConfig.property.enable">enable</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/guardduty_detector#enable GuarddutyDetector#enable}. |
| <code><a href="#@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetectorConfig.property.findingPublishingFrequency">findingPublishingFrequency</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/guardduty_detector#finding_publishing_frequency GuarddutyDetector#finding_publishing_frequency}. |
| <code><a href="#@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetectorConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/guardduty_detector#id GuarddutyDetector#id}. |
| <code><a href="#@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetectorConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/guardduty_detector#tags GuarddutyDetector#tags}. |
| <code><a href="#@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetectorConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/guardduty_detector#tags_all GuarddutyDetector#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetectorConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetectorConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetectorConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetectorConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetectorConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetectorConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetectorConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `datasources`<sup>Optional</sup> <a name="datasources" id="@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetectorConfig.property.datasources"></a>

```typescript
public readonly datasources: GuarddutyDetectorDatasources;
```

- *Type:* <a href="#@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetectorDatasources">GuarddutyDetectorDatasources</a>

datasources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/guardduty_detector#datasources GuarddutyDetector#datasources}

---

##### `enable`<sup>Optional</sup> <a name="enable" id="@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetectorConfig.property.enable"></a>

```typescript
public readonly enable: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/guardduty_detector#enable GuarddutyDetector#enable}.

---

##### `findingPublishingFrequency`<sup>Optional</sup> <a name="findingPublishingFrequency" id="@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetectorConfig.property.findingPublishingFrequency"></a>

```typescript
public readonly findingPublishingFrequency: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/guardduty_detector#finding_publishing_frequency GuarddutyDetector#finding_publishing_frequency}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetectorConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/guardduty_detector#id GuarddutyDetector#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetectorConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/guardduty_detector#tags GuarddutyDetector#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetectorConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/guardduty_detector#tags_all GuarddutyDetector#tags_all}.

---

### GuarddutyDetectorDatasources <a name="GuarddutyDetectorDatasources" id="@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetectorDatasources"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetectorDatasources.Initializer"></a>

```typescript
import { guarddutyDetector } from '@cdktf/aws-cdk'

const guarddutyDetectorDatasources: guarddutyDetector.GuarddutyDetectorDatasources = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetectorDatasources.property.s3Logs">s3Logs</a></code> | <code><a href="#@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetectorDatasourcesS3Logs">GuarddutyDetectorDatasourcesS3Logs</a></code> | s3_logs block. |

---

##### `s3Logs`<sup>Optional</sup> <a name="s3Logs" id="@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetectorDatasources.property.s3Logs"></a>

```typescript
public readonly s3Logs: GuarddutyDetectorDatasourcesS3Logs;
```

- *Type:* <a href="#@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetectorDatasourcesS3Logs">GuarddutyDetectorDatasourcesS3Logs</a>

s3_logs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/guardduty_detector#s3_logs GuarddutyDetector#s3_logs}

---

### GuarddutyDetectorDatasourcesS3Logs <a name="GuarddutyDetectorDatasourcesS3Logs" id="@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetectorDatasourcesS3Logs"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetectorDatasourcesS3Logs.Initializer"></a>

```typescript
import { guarddutyDetector } from '@cdktf/aws-cdk'

const guarddutyDetectorDatasourcesS3Logs: guarddutyDetector.GuarddutyDetectorDatasourcesS3Logs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetectorDatasourcesS3Logs.property.enable">enable</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/guardduty_detector#enable GuarddutyDetector#enable}. |

---

##### `enable`<sup>Required</sup> <a name="enable" id="@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetectorDatasourcesS3Logs.property.enable"></a>

```typescript
public readonly enable: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/guardduty_detector#enable GuarddutyDetector#enable}.

---

## Classes <a name="Classes" id="Classes"></a>

### GuarddutyDetectorDatasourcesOutputReference <a name="GuarddutyDetectorDatasourcesOutputReference" id="@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.Initializer"></a>

```typescript
import { guarddutyDetector } from '@cdktf/aws-cdk'

new guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.putS3Logs">putS3Logs</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.resetS3Logs">resetS3Logs</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putS3Logs` <a name="putS3Logs" id="@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.putS3Logs"></a>

```typescript
public putS3Logs(value: GuarddutyDetectorDatasourcesS3Logs): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.putS3Logs.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetectorDatasourcesS3Logs">GuarddutyDetectorDatasourcesS3Logs</a>

---

##### `resetS3Logs` <a name="resetS3Logs" id="@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.resetS3Logs"></a>

```typescript
public resetS3Logs(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.property.s3Logs">s3Logs</a></code> | <code><a href="#@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetectorDatasourcesS3LogsOutputReference">GuarddutyDetectorDatasourcesS3LogsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.property.s3LogsInput">s3LogsInput</a></code> | <code><a href="#@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetectorDatasourcesS3Logs">GuarddutyDetectorDatasourcesS3Logs</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetectorDatasources">GuarddutyDetectorDatasources</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `s3Logs`<sup>Required</sup> <a name="s3Logs" id="@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.property.s3Logs"></a>

```typescript
public readonly s3Logs: GuarddutyDetectorDatasourcesS3LogsOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetectorDatasourcesS3LogsOutputReference">GuarddutyDetectorDatasourcesS3LogsOutputReference</a>

---

##### `s3LogsInput`<sup>Optional</sup> <a name="s3LogsInput" id="@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.property.s3LogsInput"></a>

```typescript
public readonly s3LogsInput: GuarddutyDetectorDatasourcesS3Logs;
```

- *Type:* <a href="#@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetectorDatasourcesS3Logs">GuarddutyDetectorDatasourcesS3Logs</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetectorDatasourcesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GuarddutyDetectorDatasources;
```

- *Type:* <a href="#@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetectorDatasources">GuarddutyDetectorDatasources</a>

---


### GuarddutyDetectorDatasourcesS3LogsOutputReference <a name="GuarddutyDetectorDatasourcesS3LogsOutputReference" id="@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetectorDatasourcesS3LogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetectorDatasourcesS3LogsOutputReference.Initializer"></a>

```typescript
import { guarddutyDetector } from '@cdktf/aws-cdk'

new guarddutyDetector.GuarddutyDetectorDatasourcesS3LogsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetectorDatasourcesS3LogsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetectorDatasourcesS3LogsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetectorDatasourcesS3LogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetectorDatasourcesS3LogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetectorDatasourcesS3LogsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetectorDatasourcesS3LogsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetectorDatasourcesS3LogsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetectorDatasourcesS3LogsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetectorDatasourcesS3LogsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetectorDatasourcesS3LogsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetectorDatasourcesS3LogsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetectorDatasourcesS3LogsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetectorDatasourcesS3LogsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetectorDatasourcesS3LogsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetectorDatasourcesS3LogsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetectorDatasourcesS3LogsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetectorDatasourcesS3LogsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetectorDatasourcesS3LogsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetectorDatasourcesS3LogsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetectorDatasourcesS3LogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetectorDatasourcesS3LogsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetectorDatasourcesS3LogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetectorDatasourcesS3LogsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetectorDatasourcesS3LogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetectorDatasourcesS3LogsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetectorDatasourcesS3LogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetectorDatasourcesS3LogsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetectorDatasourcesS3LogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetectorDatasourcesS3LogsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetectorDatasourcesS3LogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetectorDatasourcesS3LogsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetectorDatasourcesS3LogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetectorDatasourcesS3LogsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetectorDatasourcesS3LogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetectorDatasourcesS3LogsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetectorDatasourcesS3LogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetectorDatasourcesS3LogsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetectorDatasourcesS3LogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetectorDatasourcesS3LogsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetectorDatasourcesS3LogsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetectorDatasourcesS3LogsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetectorDatasourcesS3LogsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetectorDatasourcesS3LogsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetectorDatasourcesS3LogsOutputReference.property.enableInput">enableInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetectorDatasourcesS3LogsOutputReference.property.enable">enable</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetectorDatasourcesS3LogsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetectorDatasourcesS3Logs">GuarddutyDetectorDatasourcesS3Logs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetectorDatasourcesS3LogsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetectorDatasourcesS3LogsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enableInput`<sup>Optional</sup> <a name="enableInput" id="@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetectorDatasourcesS3LogsOutputReference.property.enableInput"></a>

```typescript
public readonly enableInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enable`<sup>Required</sup> <a name="enable" id="@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetectorDatasourcesS3LogsOutputReference.property.enable"></a>

```typescript
public readonly enable: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetectorDatasourcesS3LogsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GuarddutyDetectorDatasourcesS3Logs;
```

- *Type:* <a href="#@cdktf/aws-cdk.guarddutyDetector.GuarddutyDetectorDatasourcesS3Logs">GuarddutyDetectorDatasourcesS3Logs</a>

---



