# `aws_redshift_snapshot_schedule_association`

Refer to the Terraform Registory for docs: [`aws_redshift_snapshot_schedule_association`](https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/redshift_snapshot_schedule_association).

# `redshiftSnapshotScheduleAssociation` Submodule <a name="`redshiftSnapshotScheduleAssociation` Submodule" id="@cdktf/aws-cdk.redshiftSnapshotScheduleAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RedshiftSnapshotScheduleAssociation <a name="RedshiftSnapshotScheduleAssociation" id="@cdktf/aws-cdk.redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/redshift_snapshot_schedule_association aws_redshift_snapshot_schedule_association}.

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociation.Initializer"></a>

```typescript
import { redshiftSnapshotScheduleAssociation } from '@cdktf/aws-cdk'

new redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociation(scope: Construct, id: string, config: RedshiftSnapshotScheduleAssociationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/aws-cdk.redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociation.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/aws-cdk.redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/aws-cdk.redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociationConfig">RedshiftSnapshotScheduleAssociationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/aws-cdk.redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/aws-cdk.redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociationConfig">RedshiftSnapshotScheduleAssociationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/aws-cdk.redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/aws-cdk.redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/aws-cdk.redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/aws-cdk.redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociation.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociation.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/aws-cdk.redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociation.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/aws-cdk.redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociation.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/aws-cdk.redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociation.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/aws-cdk.redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/aws-cdk.redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociation.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/aws-cdk.redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociation.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/aws-cdk.redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociation.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociation.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociation.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociation.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociation.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociation.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociation.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociation.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociation.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociation.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociation.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/aws-cdk.redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociation.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/aws-cdk.redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociation.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/aws-cdk.redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociation.isConstruct"></a>

```typescript
import { redshiftSnapshotScheduleAssociation } from '@cdktf/aws-cdk'

redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociation.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociation.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/aws-cdk.redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociation.isTerraformElement"></a>

```typescript
import { redshiftSnapshotScheduleAssociation } from '@cdktf/aws-cdk'

redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociation.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociation.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/aws-cdk.redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociation.isTerraformResource"></a>

```typescript
import { redshiftSnapshotScheduleAssociation } from '@cdktf/aws-cdk'

redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociation.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociation.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/aws-cdk.redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociation.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociation.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociation.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociation.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociation.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociation.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociation.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociation.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociation.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociation.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociation.property.clusterIdentifierInput">clusterIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociation.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociation.property.scheduleIdentifierInput">scheduleIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociation.property.clusterIdentifier">clusterIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociation.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociation.property.scheduleIdentifier">scheduleIdentifier</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/aws-cdk.redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociation.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/aws-cdk.redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociation.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociation.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/aws-cdk.redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociation.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/aws-cdk.redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociation.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/aws-cdk.redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociation.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/aws-cdk.redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociation.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociation.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociation.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociation.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociation.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociation.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociation.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociation.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `clusterIdentifierInput`<sup>Optional</sup> <a name="clusterIdentifierInput" id="@cdktf/aws-cdk.redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociation.property.clusterIdentifierInput"></a>

```typescript
public readonly clusterIdentifierInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/aws-cdk.redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociation.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `scheduleIdentifierInput`<sup>Optional</sup> <a name="scheduleIdentifierInput" id="@cdktf/aws-cdk.redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociation.property.scheduleIdentifierInput"></a>

```typescript
public readonly scheduleIdentifierInput: string;
```

- *Type:* string

---

##### `clusterIdentifier`<sup>Required</sup> <a name="clusterIdentifier" id="@cdktf/aws-cdk.redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociation.property.clusterIdentifier"></a>

```typescript
public readonly clusterIdentifier: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociation.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `scheduleIdentifier`<sup>Required</sup> <a name="scheduleIdentifier" id="@cdktf/aws-cdk.redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociation.property.scheduleIdentifier"></a>

```typescript
public readonly scheduleIdentifier: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociation.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/aws-cdk.redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociation.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### RedshiftSnapshotScheduleAssociationConfig <a name="RedshiftSnapshotScheduleAssociationConfig" id="@cdktf/aws-cdk.redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociationConfig.Initializer"></a>

```typescript
import { redshiftSnapshotScheduleAssociation } from '@cdktf/aws-cdk'

const redshiftSnapshotScheduleAssociationConfig: redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociationConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociationConfig.property.clusterIdentifier">clusterIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/redshift_snapshot_schedule_association#cluster_identifier RedshiftSnapshotScheduleAssociation#cluster_identifier}. |
| <code><a href="#@cdktf/aws-cdk.redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociationConfig.property.scheduleIdentifier">scheduleIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/redshift_snapshot_schedule_association#schedule_identifier RedshiftSnapshotScheduleAssociation#schedule_identifier}. |
| <code><a href="#@cdktf/aws-cdk.redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociationConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/redshift_snapshot_schedule_association#id RedshiftSnapshotScheduleAssociation#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `clusterIdentifier`<sup>Required</sup> <a name="clusterIdentifier" id="@cdktf/aws-cdk.redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociationConfig.property.clusterIdentifier"></a>

```typescript
public readonly clusterIdentifier: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/redshift_snapshot_schedule_association#cluster_identifier RedshiftSnapshotScheduleAssociation#cluster_identifier}.

---

##### `scheduleIdentifier`<sup>Required</sup> <a name="scheduleIdentifier" id="@cdktf/aws-cdk.redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociationConfig.property.scheduleIdentifier"></a>

```typescript
public readonly scheduleIdentifier: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/redshift_snapshot_schedule_association#schedule_identifier RedshiftSnapshotScheduleAssociation#schedule_identifier}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/aws-cdk.redshiftSnapshotScheduleAssociation.RedshiftSnapshotScheduleAssociationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/redshift_snapshot_schedule_association#id RedshiftSnapshotScheduleAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



