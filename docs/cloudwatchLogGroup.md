# `aws_cloudwatch_log_group`

Refer to the Terraform Registory for docs: [`aws_cloudwatch_log_group`](https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cloudwatch_log_group).

# `cloudwatchLogGroup` Submodule <a name="`cloudwatchLogGroup` Submodule" id="@cdktf/aws-cdk.cloudwatchLogGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudwatchLogGroup <a name="CloudwatchLogGroup" id="@cdktf/aws-cdk.cloudwatchLogGroup.CloudwatchLogGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cloudwatch_log_group aws_cloudwatch_log_group}.

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.cloudwatchLogGroup.CloudwatchLogGroup.Initializer"></a>

```typescript
import { cloudwatchLogGroup } from '@cdktf/aws-cdk'

new cloudwatchLogGroup.CloudwatchLogGroup(scope: Construct, id: string, config?: CloudwatchLogGroupConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.cloudwatchLogGroup.CloudwatchLogGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/aws-cdk.cloudwatchLogGroup.CloudwatchLogGroup.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/aws-cdk.cloudwatchLogGroup.CloudwatchLogGroup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/aws-cdk.cloudwatchLogGroup.CloudwatchLogGroupConfig">CloudwatchLogGroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.cloudwatchLogGroup.CloudwatchLogGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.cloudwatchLogGroup.CloudwatchLogGroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/aws-cdk.cloudwatchLogGroup.CloudwatchLogGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/aws-cdk.cloudwatchLogGroup.CloudwatchLogGroupConfig">CloudwatchLogGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.cloudwatchLogGroup.CloudwatchLogGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/aws-cdk.cloudwatchLogGroup.CloudwatchLogGroup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchLogGroup.CloudwatchLogGroup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/aws-cdk.cloudwatchLogGroup.CloudwatchLogGroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/aws-cdk.cloudwatchLogGroup.CloudwatchLogGroup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchLogGroup.CloudwatchLogGroup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/aws-cdk.cloudwatchLogGroup.CloudwatchLogGroup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchLogGroup.CloudwatchLogGroup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchLogGroup.CloudwatchLogGroup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchLogGroup.CloudwatchLogGroup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchLogGroup.CloudwatchLogGroup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchLogGroup.CloudwatchLogGroup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchLogGroup.CloudwatchLogGroup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchLogGroup.CloudwatchLogGroup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchLogGroup.CloudwatchLogGroup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchLogGroup.CloudwatchLogGroup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchLogGroup.CloudwatchLogGroup.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchLogGroup.CloudwatchLogGroup.resetKmsKeyId">resetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchLogGroup.CloudwatchLogGroup.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchLogGroup.CloudwatchLogGroup.resetNamePrefix">resetNamePrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchLogGroup.CloudwatchLogGroup.resetRetentionInDays">resetRetentionInDays</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchLogGroup.CloudwatchLogGroup.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchLogGroup.CloudwatchLogGroup.resetTagsAll">resetTagsAll</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.cloudwatchLogGroup.CloudwatchLogGroup.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/aws-cdk.cloudwatchLogGroup.CloudwatchLogGroup.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/aws-cdk.cloudwatchLogGroup.CloudwatchLogGroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.cloudwatchLogGroup.CloudwatchLogGroup.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/aws-cdk.cloudwatchLogGroup.CloudwatchLogGroup.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/aws-cdk.cloudwatchLogGroup.CloudwatchLogGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/aws-cdk.cloudwatchLogGroup.CloudwatchLogGroup.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/aws-cdk.cloudwatchLogGroup.CloudwatchLogGroup.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/aws-cdk.cloudwatchLogGroup.CloudwatchLogGroup.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.cloudwatchLogGroup.CloudwatchLogGroup.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.cloudwatchLogGroup.CloudwatchLogGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.cloudwatchLogGroup.CloudwatchLogGroup.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.cloudwatchLogGroup.CloudwatchLogGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.cloudwatchLogGroup.CloudwatchLogGroup.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.cloudwatchLogGroup.CloudwatchLogGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.cloudwatchLogGroup.CloudwatchLogGroup.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.cloudwatchLogGroup.CloudwatchLogGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.cloudwatchLogGroup.CloudwatchLogGroup.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.cloudwatchLogGroup.CloudwatchLogGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.cloudwatchLogGroup.CloudwatchLogGroup.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.cloudwatchLogGroup.CloudwatchLogGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.cloudwatchLogGroup.CloudwatchLogGroup.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.cloudwatchLogGroup.CloudwatchLogGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.cloudwatchLogGroup.CloudwatchLogGroup.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.cloudwatchLogGroup.CloudwatchLogGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.cloudwatchLogGroup.CloudwatchLogGroup.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.cloudwatchLogGroup.CloudwatchLogGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.cloudwatchLogGroup.CloudwatchLogGroup.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.cloudwatchLogGroup.CloudwatchLogGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/aws-cdk.cloudwatchLogGroup.CloudwatchLogGroup.resetId"></a>

```typescript
public resetId(): void
```

##### `resetKmsKeyId` <a name="resetKmsKeyId" id="@cdktf/aws-cdk.cloudwatchLogGroup.CloudwatchLogGroup.resetKmsKeyId"></a>

```typescript
public resetKmsKeyId(): void
```

##### `resetName` <a name="resetName" id="@cdktf/aws-cdk.cloudwatchLogGroup.CloudwatchLogGroup.resetName"></a>

```typescript
public resetName(): void
```

##### `resetNamePrefix` <a name="resetNamePrefix" id="@cdktf/aws-cdk.cloudwatchLogGroup.CloudwatchLogGroup.resetNamePrefix"></a>

```typescript
public resetNamePrefix(): void
```

##### `resetRetentionInDays` <a name="resetRetentionInDays" id="@cdktf/aws-cdk.cloudwatchLogGroup.CloudwatchLogGroup.resetRetentionInDays"></a>

```typescript
public resetRetentionInDays(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/aws-cdk.cloudwatchLogGroup.CloudwatchLogGroup.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/aws-cdk.cloudwatchLogGroup.CloudwatchLogGroup.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.cloudwatchLogGroup.CloudwatchLogGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/aws-cdk.cloudwatchLogGroup.CloudwatchLogGroup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchLogGroup.CloudwatchLogGroup.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/aws-cdk.cloudwatchLogGroup.CloudwatchLogGroup.isConstruct"></a>

```typescript
import { cloudwatchLogGroup } from '@cdktf/aws-cdk'

cloudwatchLogGroup.CloudwatchLogGroup.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.cloudwatchLogGroup.CloudwatchLogGroup.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/aws-cdk.cloudwatchLogGroup.CloudwatchLogGroup.isTerraformElement"></a>

```typescript
import { cloudwatchLogGroup } from '@cdktf/aws-cdk'

cloudwatchLogGroup.CloudwatchLogGroup.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.cloudwatchLogGroup.CloudwatchLogGroup.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/aws-cdk.cloudwatchLogGroup.CloudwatchLogGroup.isTerraformResource"></a>

```typescript
import { cloudwatchLogGroup } from '@cdktf/aws-cdk'

cloudwatchLogGroup.CloudwatchLogGroup.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.cloudwatchLogGroup.CloudwatchLogGroup.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.cloudwatchLogGroup.CloudwatchLogGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/aws-cdk.cloudwatchLogGroup.CloudwatchLogGroup.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchLogGroup.CloudwatchLogGroup.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchLogGroup.CloudwatchLogGroup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchLogGroup.CloudwatchLogGroup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchLogGroup.CloudwatchLogGroup.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchLogGroup.CloudwatchLogGroup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchLogGroup.CloudwatchLogGroup.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchLogGroup.CloudwatchLogGroup.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchLogGroup.CloudwatchLogGroup.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchLogGroup.CloudwatchLogGroup.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchLogGroup.CloudwatchLogGroup.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchLogGroup.CloudwatchLogGroup.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchLogGroup.CloudwatchLogGroup.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchLogGroup.CloudwatchLogGroup.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchLogGroup.CloudwatchLogGroup.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchLogGroup.CloudwatchLogGroup.property.kmsKeyIdInput">kmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchLogGroup.CloudwatchLogGroup.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchLogGroup.CloudwatchLogGroup.property.namePrefixInput">namePrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchLogGroup.CloudwatchLogGroup.property.retentionInDaysInput">retentionInDaysInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchLogGroup.CloudwatchLogGroup.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchLogGroup.CloudwatchLogGroup.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchLogGroup.CloudwatchLogGroup.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchLogGroup.CloudwatchLogGroup.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchLogGroup.CloudwatchLogGroup.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchLogGroup.CloudwatchLogGroup.property.namePrefix">namePrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchLogGroup.CloudwatchLogGroup.property.retentionInDays">retentionInDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchLogGroup.CloudwatchLogGroup.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchLogGroup.CloudwatchLogGroup.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/aws-cdk.cloudwatchLogGroup.CloudwatchLogGroup.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/aws-cdk.cloudwatchLogGroup.CloudwatchLogGroup.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.cloudwatchLogGroup.CloudwatchLogGroup.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/aws-cdk.cloudwatchLogGroup.CloudwatchLogGroup.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/aws-cdk.cloudwatchLogGroup.CloudwatchLogGroup.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/aws-cdk.cloudwatchLogGroup.CloudwatchLogGroup.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/aws-cdk.cloudwatchLogGroup.CloudwatchLogGroup.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.cloudwatchLogGroup.CloudwatchLogGroup.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.cloudwatchLogGroup.CloudwatchLogGroup.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.cloudwatchLogGroup.CloudwatchLogGroup.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.cloudwatchLogGroup.CloudwatchLogGroup.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.cloudwatchLogGroup.CloudwatchLogGroup.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.cloudwatchLogGroup.CloudwatchLogGroup.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.cloudwatchLogGroup.CloudwatchLogGroup.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/aws-cdk.cloudwatchLogGroup.CloudwatchLogGroup.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/aws-cdk.cloudwatchLogGroup.CloudwatchLogGroup.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `kmsKeyIdInput`<sup>Optional</sup> <a name="kmsKeyIdInput" id="@cdktf/aws-cdk.cloudwatchLogGroup.CloudwatchLogGroup.property.kmsKeyIdInput"></a>

```typescript
public readonly kmsKeyIdInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/aws-cdk.cloudwatchLogGroup.CloudwatchLogGroup.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `namePrefixInput`<sup>Optional</sup> <a name="namePrefixInput" id="@cdktf/aws-cdk.cloudwatchLogGroup.CloudwatchLogGroup.property.namePrefixInput"></a>

```typescript
public readonly namePrefixInput: string;
```

- *Type:* string

---

##### `retentionInDaysInput`<sup>Optional</sup> <a name="retentionInDaysInput" id="@cdktf/aws-cdk.cloudwatchLogGroup.CloudwatchLogGroup.property.retentionInDaysInput"></a>

```typescript
public readonly retentionInDaysInput: number;
```

- *Type:* number

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/aws-cdk.cloudwatchLogGroup.CloudwatchLogGroup.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/aws-cdk.cloudwatchLogGroup.CloudwatchLogGroup.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.cloudwatchLogGroup.CloudwatchLogGroup.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktf/aws-cdk.cloudwatchLogGroup.CloudwatchLogGroup.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/aws-cdk.cloudwatchLogGroup.CloudwatchLogGroup.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `namePrefix`<sup>Required</sup> <a name="namePrefix" id="@cdktf/aws-cdk.cloudwatchLogGroup.CloudwatchLogGroup.property.namePrefix"></a>

```typescript
public readonly namePrefix: string;
```

- *Type:* string

---

##### `retentionInDays`<sup>Required</sup> <a name="retentionInDays" id="@cdktf/aws-cdk.cloudwatchLogGroup.CloudwatchLogGroup.property.retentionInDays"></a>

```typescript
public readonly retentionInDays: number;
```

- *Type:* number

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/aws-cdk.cloudwatchLogGroup.CloudwatchLogGroup.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/aws-cdk.cloudwatchLogGroup.CloudwatchLogGroup.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.cloudwatchLogGroup.CloudwatchLogGroup.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/aws-cdk.cloudwatchLogGroup.CloudwatchLogGroup.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudwatchLogGroupConfig <a name="CloudwatchLogGroupConfig" id="@cdktf/aws-cdk.cloudwatchLogGroup.CloudwatchLogGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.cloudwatchLogGroup.CloudwatchLogGroupConfig.Initializer"></a>

```typescript
import { cloudwatchLogGroup } from '@cdktf/aws-cdk'

const cloudwatchLogGroupConfig: cloudwatchLogGroup.CloudwatchLogGroupConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.cloudwatchLogGroup.CloudwatchLogGroupConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchLogGroup.CloudwatchLogGroupConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchLogGroup.CloudwatchLogGroupConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchLogGroup.CloudwatchLogGroupConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchLogGroup.CloudwatchLogGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchLogGroup.CloudwatchLogGroupConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchLogGroup.CloudwatchLogGroupConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.cloudwatchLogGroup.CloudwatchLogGroupConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cloudwatch_log_group#id CloudwatchLogGroup#id}. |
| <code><a href="#@cdktf/aws-cdk.cloudwatchLogGroup.CloudwatchLogGroupConfig.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cloudwatch_log_group#kms_key_id CloudwatchLogGroup#kms_key_id}. |
| <code><a href="#@cdktf/aws-cdk.cloudwatchLogGroup.CloudwatchLogGroupConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cloudwatch_log_group#name CloudwatchLogGroup#name}. |
| <code><a href="#@cdktf/aws-cdk.cloudwatchLogGroup.CloudwatchLogGroupConfig.property.namePrefix">namePrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cloudwatch_log_group#name_prefix CloudwatchLogGroup#name_prefix}. |
| <code><a href="#@cdktf/aws-cdk.cloudwatchLogGroup.CloudwatchLogGroupConfig.property.retentionInDays">retentionInDays</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cloudwatch_log_group#retention_in_days CloudwatchLogGroup#retention_in_days}. |
| <code><a href="#@cdktf/aws-cdk.cloudwatchLogGroup.CloudwatchLogGroupConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cloudwatch_log_group#tags CloudwatchLogGroup#tags}. |
| <code><a href="#@cdktf/aws-cdk.cloudwatchLogGroup.CloudwatchLogGroupConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cloudwatch_log_group#tags_all CloudwatchLogGroup#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.cloudwatchLogGroup.CloudwatchLogGroupConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.cloudwatchLogGroup.CloudwatchLogGroupConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.cloudwatchLogGroup.CloudwatchLogGroupConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.cloudwatchLogGroup.CloudwatchLogGroupConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.cloudwatchLogGroup.CloudwatchLogGroupConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.cloudwatchLogGroup.CloudwatchLogGroupConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.cloudwatchLogGroup.CloudwatchLogGroupConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/aws-cdk.cloudwatchLogGroup.CloudwatchLogGroupConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cloudwatch_log_group#id CloudwatchLogGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="@cdktf/aws-cdk.cloudwatchLogGroup.CloudwatchLogGroupConfig.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cloudwatch_log_group#kms_key_id CloudwatchLogGroup#kms_key_id}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/aws-cdk.cloudwatchLogGroup.CloudwatchLogGroupConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cloudwatch_log_group#name CloudwatchLogGroup#name}.

---

##### `namePrefix`<sup>Optional</sup> <a name="namePrefix" id="@cdktf/aws-cdk.cloudwatchLogGroup.CloudwatchLogGroupConfig.property.namePrefix"></a>

```typescript
public readonly namePrefix: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cloudwatch_log_group#name_prefix CloudwatchLogGroup#name_prefix}.

---

##### `retentionInDays`<sup>Optional</sup> <a name="retentionInDays" id="@cdktf/aws-cdk.cloudwatchLogGroup.CloudwatchLogGroupConfig.property.retentionInDays"></a>

```typescript
public readonly retentionInDays: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cloudwatch_log_group#retention_in_days CloudwatchLogGroup#retention_in_days}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/aws-cdk.cloudwatchLogGroup.CloudwatchLogGroupConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cloudwatch_log_group#tags CloudwatchLogGroup#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/aws-cdk.cloudwatchLogGroup.CloudwatchLogGroupConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/cloudwatch_log_group#tags_all CloudwatchLogGroup#tags_all}.

---


