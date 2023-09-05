# `aws_autoscaling_group_tag`

Refer to the Terraform Registory for docs: [`aws_autoscaling_group_tag`](https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_group_tag).

# `autoscalingGroupTag` Submodule <a name="`autoscalingGroupTag` Submodule" id="@cdktf/aws-cdk.autoscalingGroupTag"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AutoscalingGroupTagA <a name="AutoscalingGroupTagA" id="@cdktf/aws-cdk.autoscalingGroupTag.AutoscalingGroupTagA"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_group_tag aws_autoscaling_group_tag}.

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.autoscalingGroupTag.AutoscalingGroupTagA.Initializer"></a>

```typescript
import { autoscalingGroupTag } from '@cdktf/aws-cdk'

new autoscalingGroupTag.AutoscalingGroupTagA(scope: Construct, id: string, config: AutoscalingGroupTagAConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroupTag.AutoscalingGroupTagA.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroupTag.AutoscalingGroupTagA.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroupTag.AutoscalingGroupTagA.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/aws-cdk.autoscalingGroupTag.AutoscalingGroupTagAConfig">AutoscalingGroupTagAConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.autoscalingGroupTag.AutoscalingGroupTagA.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.autoscalingGroupTag.AutoscalingGroupTagA.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/aws-cdk.autoscalingGroupTag.AutoscalingGroupTagA.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/aws-cdk.autoscalingGroupTag.AutoscalingGroupTagAConfig">AutoscalingGroupTagAConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroupTag.AutoscalingGroupTagA.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroupTag.AutoscalingGroupTagA.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroupTag.AutoscalingGroupTagA.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroupTag.AutoscalingGroupTagA.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroupTag.AutoscalingGroupTagA.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroupTag.AutoscalingGroupTagA.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroupTag.AutoscalingGroupTagA.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroupTag.AutoscalingGroupTagA.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroupTag.AutoscalingGroupTagA.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroupTag.AutoscalingGroupTagA.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroupTag.AutoscalingGroupTagA.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroupTag.AutoscalingGroupTagA.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroupTag.AutoscalingGroupTagA.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroupTag.AutoscalingGroupTagA.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroupTag.AutoscalingGroupTagA.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroupTag.AutoscalingGroupTagA.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroupTag.AutoscalingGroupTagA.putTag">putTag</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroupTag.AutoscalingGroupTagA.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.autoscalingGroupTag.AutoscalingGroupTagA.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/aws-cdk.autoscalingGroupTag.AutoscalingGroupTagA.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/aws-cdk.autoscalingGroupTag.AutoscalingGroupTagA.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.autoscalingGroupTag.AutoscalingGroupTagA.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/aws-cdk.autoscalingGroupTag.AutoscalingGroupTagA.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/aws-cdk.autoscalingGroupTag.AutoscalingGroupTagA.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/aws-cdk.autoscalingGroupTag.AutoscalingGroupTagA.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/aws-cdk.autoscalingGroupTag.AutoscalingGroupTagA.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/aws-cdk.autoscalingGroupTag.AutoscalingGroupTagA.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.autoscalingGroupTag.AutoscalingGroupTagA.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingGroupTag.AutoscalingGroupTagA.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.autoscalingGroupTag.AutoscalingGroupTagA.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingGroupTag.AutoscalingGroupTagA.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.autoscalingGroupTag.AutoscalingGroupTagA.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingGroupTag.AutoscalingGroupTagA.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.autoscalingGroupTag.AutoscalingGroupTagA.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingGroupTag.AutoscalingGroupTagA.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.autoscalingGroupTag.AutoscalingGroupTagA.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingGroupTag.AutoscalingGroupTagA.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.autoscalingGroupTag.AutoscalingGroupTagA.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingGroupTag.AutoscalingGroupTagA.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.autoscalingGroupTag.AutoscalingGroupTagA.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingGroupTag.AutoscalingGroupTagA.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.autoscalingGroupTag.AutoscalingGroupTagA.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingGroupTag.AutoscalingGroupTagA.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.autoscalingGroupTag.AutoscalingGroupTagA.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingGroupTag.AutoscalingGroupTagA.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.autoscalingGroupTag.AutoscalingGroupTagA.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingGroupTag.AutoscalingGroupTagA.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTag` <a name="putTag" id="@cdktf/aws-cdk.autoscalingGroupTag.AutoscalingGroupTagA.putTag"></a>

```typescript
public putTag(value: AutoscalingGroupTagTag): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.autoscalingGroupTag.AutoscalingGroupTagA.putTag.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.autoscalingGroupTag.AutoscalingGroupTagTag">AutoscalingGroupTagTag</a>

---

##### `resetId` <a name="resetId" id="@cdktf/aws-cdk.autoscalingGroupTag.AutoscalingGroupTagA.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroupTag.AutoscalingGroupTagA.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroupTag.AutoscalingGroupTagA.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroupTag.AutoscalingGroupTagA.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@cdktf/aws-cdk.autoscalingGroupTag.AutoscalingGroupTagA.isConstruct"></a>

```typescript
import { autoscalingGroupTag } from '@cdktf/aws-cdk'

autoscalingGroupTag.AutoscalingGroupTagA.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.autoscalingGroupTag.AutoscalingGroupTagA.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/aws-cdk.autoscalingGroupTag.AutoscalingGroupTagA.isTerraformElement"></a>

```typescript
import { autoscalingGroupTag } from '@cdktf/aws-cdk'

autoscalingGroupTag.AutoscalingGroupTagA.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.autoscalingGroupTag.AutoscalingGroupTagA.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/aws-cdk.autoscalingGroupTag.AutoscalingGroupTagA.isTerraformResource"></a>

```typescript
import { autoscalingGroupTag } from '@cdktf/aws-cdk'

autoscalingGroupTag.AutoscalingGroupTagA.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.autoscalingGroupTag.AutoscalingGroupTagA.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroupTag.AutoscalingGroupTagA.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroupTag.AutoscalingGroupTagA.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroupTag.AutoscalingGroupTagA.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroupTag.AutoscalingGroupTagA.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroupTag.AutoscalingGroupTagA.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroupTag.AutoscalingGroupTagA.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroupTag.AutoscalingGroupTagA.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroupTag.AutoscalingGroupTagA.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroupTag.AutoscalingGroupTagA.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroupTag.AutoscalingGroupTagA.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroupTag.AutoscalingGroupTagA.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroupTag.AutoscalingGroupTagA.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroupTag.AutoscalingGroupTagA.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroupTag.AutoscalingGroupTagA.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroupTag.AutoscalingGroupTagA.property.tag">tag</a></code> | <code><a href="#@cdktf/aws-cdk.autoscalingGroupTag.AutoscalingGroupTagTagOutputReference">AutoscalingGroupTagTagOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroupTag.AutoscalingGroupTagA.property.autoscalingGroupNameInput">autoscalingGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroupTag.AutoscalingGroupTagA.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroupTag.AutoscalingGroupTagA.property.tagInput">tagInput</a></code> | <code><a href="#@cdktf/aws-cdk.autoscalingGroupTag.AutoscalingGroupTagTag">AutoscalingGroupTagTag</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroupTag.AutoscalingGroupTagA.property.autoscalingGroupName">autoscalingGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroupTag.AutoscalingGroupTagA.property.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/aws-cdk.autoscalingGroupTag.AutoscalingGroupTagA.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/aws-cdk.autoscalingGroupTag.AutoscalingGroupTagA.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.autoscalingGroupTag.AutoscalingGroupTagA.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/aws-cdk.autoscalingGroupTag.AutoscalingGroupTagA.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/aws-cdk.autoscalingGroupTag.AutoscalingGroupTagA.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/aws-cdk.autoscalingGroupTag.AutoscalingGroupTagA.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/aws-cdk.autoscalingGroupTag.AutoscalingGroupTagA.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.autoscalingGroupTag.AutoscalingGroupTagA.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.autoscalingGroupTag.AutoscalingGroupTagA.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.autoscalingGroupTag.AutoscalingGroupTagA.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.autoscalingGroupTag.AutoscalingGroupTagA.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.autoscalingGroupTag.AutoscalingGroupTagA.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.autoscalingGroupTag.AutoscalingGroupTagA.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.autoscalingGroupTag.AutoscalingGroupTagA.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `tag`<sup>Required</sup> <a name="tag" id="@cdktf/aws-cdk.autoscalingGroupTag.AutoscalingGroupTagA.property.tag"></a>

```typescript
public readonly tag: AutoscalingGroupTagTagOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.autoscalingGroupTag.AutoscalingGroupTagTagOutputReference">AutoscalingGroupTagTagOutputReference</a>

---

##### `autoscalingGroupNameInput`<sup>Optional</sup> <a name="autoscalingGroupNameInput" id="@cdktf/aws-cdk.autoscalingGroupTag.AutoscalingGroupTagA.property.autoscalingGroupNameInput"></a>

```typescript
public readonly autoscalingGroupNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/aws-cdk.autoscalingGroupTag.AutoscalingGroupTagA.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `tagInput`<sup>Optional</sup> <a name="tagInput" id="@cdktf/aws-cdk.autoscalingGroupTag.AutoscalingGroupTagA.property.tagInput"></a>

```typescript
public readonly tagInput: AutoscalingGroupTagTag;
```

- *Type:* <a href="#@cdktf/aws-cdk.autoscalingGroupTag.AutoscalingGroupTagTag">AutoscalingGroupTagTag</a>

---

##### `autoscalingGroupName`<sup>Required</sup> <a name="autoscalingGroupName" id="@cdktf/aws-cdk.autoscalingGroupTag.AutoscalingGroupTagA.property.autoscalingGroupName"></a>

```typescript
public readonly autoscalingGroupName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.autoscalingGroupTag.AutoscalingGroupTagA.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroupTag.AutoscalingGroupTagA.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/aws-cdk.autoscalingGroupTag.AutoscalingGroupTagA.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AutoscalingGroupTagAConfig <a name="AutoscalingGroupTagAConfig" id="@cdktf/aws-cdk.autoscalingGroupTag.AutoscalingGroupTagAConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.autoscalingGroupTag.AutoscalingGroupTagAConfig.Initializer"></a>

```typescript
import { autoscalingGroupTag } from '@cdktf/aws-cdk'

const autoscalingGroupTagAConfig: autoscalingGroupTag.AutoscalingGroupTagAConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroupTag.AutoscalingGroupTagAConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroupTag.AutoscalingGroupTagAConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroupTag.AutoscalingGroupTagAConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroupTag.AutoscalingGroupTagAConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroupTag.AutoscalingGroupTagAConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroupTag.AutoscalingGroupTagAConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroupTag.AutoscalingGroupTagAConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroupTag.AutoscalingGroupTagAConfig.property.autoscalingGroupName">autoscalingGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_group_tag#autoscaling_group_name AutoscalingGroupTagA#autoscaling_group_name}. |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroupTag.AutoscalingGroupTagAConfig.property.tag">tag</a></code> | <code><a href="#@cdktf/aws-cdk.autoscalingGroupTag.AutoscalingGroupTagTag">AutoscalingGroupTagTag</a></code> | tag block. |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroupTag.AutoscalingGroupTagAConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_group_tag#id AutoscalingGroupTagA#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.autoscalingGroupTag.AutoscalingGroupTagAConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.autoscalingGroupTag.AutoscalingGroupTagAConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.autoscalingGroupTag.AutoscalingGroupTagAConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.autoscalingGroupTag.AutoscalingGroupTagAConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.autoscalingGroupTag.AutoscalingGroupTagAConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.autoscalingGroupTag.AutoscalingGroupTagAConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.autoscalingGroupTag.AutoscalingGroupTagAConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `autoscalingGroupName`<sup>Required</sup> <a name="autoscalingGroupName" id="@cdktf/aws-cdk.autoscalingGroupTag.AutoscalingGroupTagAConfig.property.autoscalingGroupName"></a>

```typescript
public readonly autoscalingGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_group_tag#autoscaling_group_name AutoscalingGroupTagA#autoscaling_group_name}.

---

##### `tag`<sup>Required</sup> <a name="tag" id="@cdktf/aws-cdk.autoscalingGroupTag.AutoscalingGroupTagAConfig.property.tag"></a>

```typescript
public readonly tag: AutoscalingGroupTagTag;
```

- *Type:* <a href="#@cdktf/aws-cdk.autoscalingGroupTag.AutoscalingGroupTagTag">AutoscalingGroupTagTag</a>

tag block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_group_tag#tag AutoscalingGroupTagA#tag}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/aws-cdk.autoscalingGroupTag.AutoscalingGroupTagAConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_group_tag#id AutoscalingGroupTagA#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### AutoscalingGroupTagTag <a name="AutoscalingGroupTagTag" id="@cdktf/aws-cdk.autoscalingGroupTag.AutoscalingGroupTagTag"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.autoscalingGroupTag.AutoscalingGroupTagTag.Initializer"></a>

```typescript
import { autoscalingGroupTag } from '@cdktf/aws-cdk'

const autoscalingGroupTagTag: autoscalingGroupTag.AutoscalingGroupTagTag = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroupTag.AutoscalingGroupTagTag.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_group_tag#key AutoscalingGroupTagA#key}. |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroupTag.AutoscalingGroupTagTag.property.propagateAtLaunch">propagateAtLaunch</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_group_tag#propagate_at_launch AutoscalingGroupTagA#propagate_at_launch}. |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroupTag.AutoscalingGroupTagTag.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_group_tag#value AutoscalingGroupTagA#value}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/aws-cdk.autoscalingGroupTag.AutoscalingGroupTagTag.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_group_tag#key AutoscalingGroupTagA#key}.

---

##### `propagateAtLaunch`<sup>Required</sup> <a name="propagateAtLaunch" id="@cdktf/aws-cdk.autoscalingGroupTag.AutoscalingGroupTagTag.property.propagateAtLaunch"></a>

```typescript
public readonly propagateAtLaunch: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_group_tag#propagate_at_launch AutoscalingGroupTagA#propagate_at_launch}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.autoscalingGroupTag.AutoscalingGroupTagTag.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/autoscaling_group_tag#value AutoscalingGroupTagA#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### AutoscalingGroupTagTagOutputReference <a name="AutoscalingGroupTagTagOutputReference" id="@cdktf/aws-cdk.autoscalingGroupTag.AutoscalingGroupTagTagOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.autoscalingGroupTag.AutoscalingGroupTagTagOutputReference.Initializer"></a>

```typescript
import { autoscalingGroupTag } from '@cdktf/aws-cdk'

new autoscalingGroupTag.AutoscalingGroupTagTagOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroupTag.AutoscalingGroupTagTagOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroupTag.AutoscalingGroupTagTagOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.autoscalingGroupTag.AutoscalingGroupTagTagOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingGroupTag.AutoscalingGroupTagTagOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroupTag.AutoscalingGroupTagTagOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroupTag.AutoscalingGroupTagTagOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroupTag.AutoscalingGroupTagTagOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroupTag.AutoscalingGroupTagTagOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroupTag.AutoscalingGroupTagTagOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroupTag.AutoscalingGroupTagTagOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroupTag.AutoscalingGroupTagTagOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroupTag.AutoscalingGroupTagTagOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroupTag.AutoscalingGroupTagTagOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroupTag.AutoscalingGroupTagTagOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroupTag.AutoscalingGroupTagTagOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroupTag.AutoscalingGroupTagTagOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroupTag.AutoscalingGroupTagTagOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.autoscalingGroupTag.AutoscalingGroupTagTagOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.autoscalingGroupTag.AutoscalingGroupTagTagOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingGroupTag.AutoscalingGroupTagTagOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.autoscalingGroupTag.AutoscalingGroupTagTagOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingGroupTag.AutoscalingGroupTagTagOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.autoscalingGroupTag.AutoscalingGroupTagTagOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingGroupTag.AutoscalingGroupTagTagOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.autoscalingGroupTag.AutoscalingGroupTagTagOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingGroupTag.AutoscalingGroupTagTagOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.autoscalingGroupTag.AutoscalingGroupTagTagOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingGroupTag.AutoscalingGroupTagTagOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.autoscalingGroupTag.AutoscalingGroupTagTagOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingGroupTag.AutoscalingGroupTagTagOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.autoscalingGroupTag.AutoscalingGroupTagTagOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingGroupTag.AutoscalingGroupTagTagOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.autoscalingGroupTag.AutoscalingGroupTagTagOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingGroupTag.AutoscalingGroupTagTagOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.autoscalingGroupTag.AutoscalingGroupTagTagOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.autoscalingGroupTag.AutoscalingGroupTagTagOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.autoscalingGroupTag.AutoscalingGroupTagTagOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.autoscalingGroupTag.AutoscalingGroupTagTagOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.autoscalingGroupTag.AutoscalingGroupTagTagOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.autoscalingGroupTag.AutoscalingGroupTagTagOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.autoscalingGroupTag.AutoscalingGroupTagTagOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroupTag.AutoscalingGroupTagTagOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroupTag.AutoscalingGroupTagTagOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroupTag.AutoscalingGroupTagTagOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroupTag.AutoscalingGroupTagTagOutputReference.property.propagateAtLaunchInput">propagateAtLaunchInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroupTag.AutoscalingGroupTagTagOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroupTag.AutoscalingGroupTagTagOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroupTag.AutoscalingGroupTagTagOutputReference.property.propagateAtLaunch">propagateAtLaunch</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroupTag.AutoscalingGroupTagTagOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.autoscalingGroupTag.AutoscalingGroupTagTagOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.autoscalingGroupTag.AutoscalingGroupTagTag">AutoscalingGroupTagTag</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.autoscalingGroupTag.AutoscalingGroupTagTagOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.autoscalingGroupTag.AutoscalingGroupTagTagOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/aws-cdk.autoscalingGroupTag.AutoscalingGroupTagTagOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `propagateAtLaunchInput`<sup>Optional</sup> <a name="propagateAtLaunchInput" id="@cdktf/aws-cdk.autoscalingGroupTag.AutoscalingGroupTagTagOutputReference.property.propagateAtLaunchInput"></a>

```typescript
public readonly propagateAtLaunchInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/aws-cdk.autoscalingGroupTag.AutoscalingGroupTagTagOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/aws-cdk.autoscalingGroupTag.AutoscalingGroupTagTagOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `propagateAtLaunch`<sup>Required</sup> <a name="propagateAtLaunch" id="@cdktf/aws-cdk.autoscalingGroupTag.AutoscalingGroupTagTagOutputReference.property.propagateAtLaunch"></a>

```typescript
public readonly propagateAtLaunch: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.autoscalingGroupTag.AutoscalingGroupTagTagOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.autoscalingGroupTag.AutoscalingGroupTagTagOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AutoscalingGroupTagTag;
```

- *Type:* <a href="#@cdktf/aws-cdk.autoscalingGroupTag.AutoscalingGroupTagTag">AutoscalingGroupTagTag</a>

---



