# `aws_glue_trigger`

Refer to the Terraform Registory for docs: [`aws_glue_trigger`](https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/glue_trigger).

# `glueTrigger` Submodule <a name="`glueTrigger` Submodule" id="@cdktf/aws-cdk.glueTrigger"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GlueTrigger <a name="GlueTrigger" id="@cdktf/aws-cdk.glueTrigger.GlueTrigger"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/glue_trigger aws_glue_trigger}.

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.glueTrigger.GlueTrigger.Initializer"></a>

```typescript
import { glueTrigger } from '@cdktf/aws-cdk'

new glueTrigger.GlueTrigger(scope: Construct, id: string, config: GlueTriggerConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTrigger.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTrigger.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTrigger.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTriggerConfig">GlueTriggerConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.glueTrigger.GlueTrigger.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.glueTrigger.GlueTrigger.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/aws-cdk.glueTrigger.GlueTrigger.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/aws-cdk.glueTrigger.GlueTriggerConfig">GlueTriggerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTrigger.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTrigger.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTrigger.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTrigger.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTrigger.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTrigger.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTrigger.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTrigger.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTrigger.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTrigger.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTrigger.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTrigger.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTrigger.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTrigger.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTrigger.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTrigger.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTrigger.putActions">putActions</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTrigger.putPredicate">putPredicate</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTrigger.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTrigger.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTrigger.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTrigger.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTrigger.resetPredicate">resetPredicate</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTrigger.resetSchedule">resetSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTrigger.resetStartOnCreation">resetStartOnCreation</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTrigger.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTrigger.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTrigger.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTrigger.resetWorkflowName">resetWorkflowName</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.glueTrigger.GlueTrigger.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/aws-cdk.glueTrigger.GlueTrigger.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/aws-cdk.glueTrigger.GlueTrigger.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.glueTrigger.GlueTrigger.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/aws-cdk.glueTrigger.GlueTrigger.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/aws-cdk.glueTrigger.GlueTrigger.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/aws-cdk.glueTrigger.GlueTrigger.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/aws-cdk.glueTrigger.GlueTrigger.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/aws-cdk.glueTrigger.GlueTrigger.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.glueTrigger.GlueTrigger.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.glueTrigger.GlueTrigger.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.glueTrigger.GlueTrigger.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.glueTrigger.GlueTrigger.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.glueTrigger.GlueTrigger.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.glueTrigger.GlueTrigger.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.glueTrigger.GlueTrigger.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.glueTrigger.GlueTrigger.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.glueTrigger.GlueTrigger.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.glueTrigger.GlueTrigger.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.glueTrigger.GlueTrigger.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.glueTrigger.GlueTrigger.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.glueTrigger.GlueTrigger.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.glueTrigger.GlueTrigger.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.glueTrigger.GlueTrigger.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.glueTrigger.GlueTrigger.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.glueTrigger.GlueTrigger.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.glueTrigger.GlueTrigger.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.glueTrigger.GlueTrigger.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.glueTrigger.GlueTrigger.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putActions` <a name="putActions" id="@cdktf/aws-cdk.glueTrigger.GlueTrigger.putActions"></a>

```typescript
public putActions(value: IResolvable | GlueTriggerActions[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.glueTrigger.GlueTrigger.putActions.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.glueTrigger.GlueTriggerActions">GlueTriggerActions</a>[]

---

##### `putPredicate` <a name="putPredicate" id="@cdktf/aws-cdk.glueTrigger.GlueTrigger.putPredicate"></a>

```typescript
public putPredicate(value: GlueTriggerPredicate): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.glueTrigger.GlueTrigger.putPredicate.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.glueTrigger.GlueTriggerPredicate">GlueTriggerPredicate</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/aws-cdk.glueTrigger.GlueTrigger.putTimeouts"></a>

```typescript
public putTimeouts(value: GlueTriggerTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.glueTrigger.GlueTrigger.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.glueTrigger.GlueTriggerTimeouts">GlueTriggerTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/aws-cdk.glueTrigger.GlueTrigger.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/aws-cdk.glueTrigger.GlueTrigger.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetId` <a name="resetId" id="@cdktf/aws-cdk.glueTrigger.GlueTrigger.resetId"></a>

```typescript
public resetId(): void
```

##### `resetPredicate` <a name="resetPredicate" id="@cdktf/aws-cdk.glueTrigger.GlueTrigger.resetPredicate"></a>

```typescript
public resetPredicate(): void
```

##### `resetSchedule` <a name="resetSchedule" id="@cdktf/aws-cdk.glueTrigger.GlueTrigger.resetSchedule"></a>

```typescript
public resetSchedule(): void
```

##### `resetStartOnCreation` <a name="resetStartOnCreation" id="@cdktf/aws-cdk.glueTrigger.GlueTrigger.resetStartOnCreation"></a>

```typescript
public resetStartOnCreation(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/aws-cdk.glueTrigger.GlueTrigger.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/aws-cdk.glueTrigger.GlueTrigger.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/aws-cdk.glueTrigger.GlueTrigger.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetWorkflowName` <a name="resetWorkflowName" id="@cdktf/aws-cdk.glueTrigger.GlueTrigger.resetWorkflowName"></a>

```typescript
public resetWorkflowName(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTrigger.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTrigger.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTrigger.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/aws-cdk.glueTrigger.GlueTrigger.isConstruct"></a>

```typescript
import { glueTrigger } from '@cdktf/aws-cdk'

glueTrigger.GlueTrigger.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.glueTrigger.GlueTrigger.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/aws-cdk.glueTrigger.GlueTrigger.isTerraformElement"></a>

```typescript
import { glueTrigger } from '@cdktf/aws-cdk'

glueTrigger.GlueTrigger.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.glueTrigger.GlueTrigger.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/aws-cdk.glueTrigger.GlueTrigger.isTerraformResource"></a>

```typescript
import { glueTrigger } from '@cdktf/aws-cdk'

glueTrigger.GlueTrigger.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.glueTrigger.GlueTrigger.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTrigger.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTrigger.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTrigger.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTrigger.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTrigger.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTrigger.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTrigger.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTrigger.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTrigger.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTrigger.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTrigger.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTrigger.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTrigger.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTrigger.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTrigger.property.actions">actions</a></code> | <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTriggerActionsList">GlueTriggerActionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTrigger.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTrigger.property.predicate">predicate</a></code> | <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTriggerPredicateOutputReference">GlueTriggerPredicateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTrigger.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTrigger.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTriggerTimeoutsOutputReference">GlueTriggerTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTrigger.property.actionsInput">actionsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.glueTrigger.GlueTriggerActions">GlueTriggerActions</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTrigger.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTrigger.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTrigger.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTrigger.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTrigger.property.predicateInput">predicateInput</a></code> | <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTriggerPredicate">GlueTriggerPredicate</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTrigger.property.scheduleInput">scheduleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTrigger.property.startOnCreationInput">startOnCreationInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTrigger.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTrigger.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTrigger.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTriggerTimeouts">GlueTriggerTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTrigger.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTrigger.property.workflowNameInput">workflowNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTrigger.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTrigger.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTrigger.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTrigger.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTrigger.property.schedule">schedule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTrigger.property.startOnCreation">startOnCreation</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTrigger.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTrigger.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTrigger.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTrigger.property.workflowName">workflowName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/aws-cdk.glueTrigger.GlueTrigger.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/aws-cdk.glueTrigger.GlueTrigger.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.glueTrigger.GlueTrigger.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/aws-cdk.glueTrigger.GlueTrigger.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/aws-cdk.glueTrigger.GlueTrigger.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/aws-cdk.glueTrigger.GlueTrigger.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/aws-cdk.glueTrigger.GlueTrigger.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.glueTrigger.GlueTrigger.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.glueTrigger.GlueTrigger.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.glueTrigger.GlueTrigger.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.glueTrigger.GlueTrigger.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.glueTrigger.GlueTrigger.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.glueTrigger.GlueTrigger.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.glueTrigger.GlueTrigger.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktf/aws-cdk.glueTrigger.GlueTrigger.property.actions"></a>

```typescript
public readonly actions: GlueTriggerActionsList;
```

- *Type:* <a href="#@cdktf/aws-cdk.glueTrigger.GlueTriggerActionsList">GlueTriggerActionsList</a>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/aws-cdk.glueTrigger.GlueTrigger.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `predicate`<sup>Required</sup> <a name="predicate" id="@cdktf/aws-cdk.glueTrigger.GlueTrigger.property.predicate"></a>

```typescript
public readonly predicate: GlueTriggerPredicateOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.glueTrigger.GlueTriggerPredicateOutputReference">GlueTriggerPredicateOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/aws-cdk.glueTrigger.GlueTrigger.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/aws-cdk.glueTrigger.GlueTrigger.property.timeouts"></a>

```typescript
public readonly timeouts: GlueTriggerTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.glueTrigger.GlueTriggerTimeoutsOutputReference">GlueTriggerTimeoutsOutputReference</a>

---

##### `actionsInput`<sup>Optional</sup> <a name="actionsInput" id="@cdktf/aws-cdk.glueTrigger.GlueTrigger.property.actionsInput"></a>

```typescript
public readonly actionsInput: IResolvable | GlueTriggerActions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.glueTrigger.GlueTriggerActions">GlueTriggerActions</a>[]

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/aws-cdk.glueTrigger.GlueTrigger.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/aws-cdk.glueTrigger.GlueTrigger.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/aws-cdk.glueTrigger.GlueTrigger.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/aws-cdk.glueTrigger.GlueTrigger.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `predicateInput`<sup>Optional</sup> <a name="predicateInput" id="@cdktf/aws-cdk.glueTrigger.GlueTrigger.property.predicateInput"></a>

```typescript
public readonly predicateInput: GlueTriggerPredicate;
```

- *Type:* <a href="#@cdktf/aws-cdk.glueTrigger.GlueTriggerPredicate">GlueTriggerPredicate</a>

---

##### `scheduleInput`<sup>Optional</sup> <a name="scheduleInput" id="@cdktf/aws-cdk.glueTrigger.GlueTrigger.property.scheduleInput"></a>

```typescript
public readonly scheduleInput: string;
```

- *Type:* string

---

##### `startOnCreationInput`<sup>Optional</sup> <a name="startOnCreationInput" id="@cdktf/aws-cdk.glueTrigger.GlueTrigger.property.startOnCreationInput"></a>

```typescript
public readonly startOnCreationInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/aws-cdk.glueTrigger.GlueTrigger.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/aws-cdk.glueTrigger.GlueTrigger.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/aws-cdk.glueTrigger.GlueTrigger.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: GlueTriggerTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/aws-cdk.glueTrigger.GlueTriggerTimeouts">GlueTriggerTimeouts</a> | cdktf.IResolvable

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/aws-cdk.glueTrigger.GlueTrigger.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `workflowNameInput`<sup>Optional</sup> <a name="workflowNameInput" id="@cdktf/aws-cdk.glueTrigger.GlueTrigger.property.workflowNameInput"></a>

```typescript
public readonly workflowNameInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/aws-cdk.glueTrigger.GlueTrigger.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/aws-cdk.glueTrigger.GlueTrigger.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.glueTrigger.GlueTrigger.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/aws-cdk.glueTrigger.GlueTrigger.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktf/aws-cdk.glueTrigger.GlueTrigger.property.schedule"></a>

```typescript
public readonly schedule: string;
```

- *Type:* string

---

##### `startOnCreation`<sup>Required</sup> <a name="startOnCreation" id="@cdktf/aws-cdk.glueTrigger.GlueTrigger.property.startOnCreation"></a>

```typescript
public readonly startOnCreation: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/aws-cdk.glueTrigger.GlueTrigger.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/aws-cdk.glueTrigger.GlueTrigger.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/aws-cdk.glueTrigger.GlueTrigger.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `workflowName`<sup>Required</sup> <a name="workflowName" id="@cdktf/aws-cdk.glueTrigger.GlueTrigger.property.workflowName"></a>

```typescript
public readonly workflowName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTrigger.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/aws-cdk.glueTrigger.GlueTrigger.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GlueTriggerActions <a name="GlueTriggerActions" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerActions"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerActions.Initializer"></a>

```typescript
import { glueTrigger } from '@cdktf/aws-cdk'

const glueTriggerActions: glueTrigger.GlueTriggerActions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTriggerActions.property.arguments">arguments</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/glue_trigger#arguments GlueTrigger#arguments}. |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTriggerActions.property.crawlerName">crawlerName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/glue_trigger#crawler_name GlueTrigger#crawler_name}. |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTriggerActions.property.jobName">jobName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/glue_trigger#job_name GlueTrigger#job_name}. |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTriggerActions.property.notificationProperty">notificationProperty</a></code> | <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTriggerActionsNotificationProperty">GlueTriggerActionsNotificationProperty</a></code> | notification_property block. |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTriggerActions.property.securityConfiguration">securityConfiguration</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/glue_trigger#security_configuration GlueTrigger#security_configuration}. |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTriggerActions.property.timeout">timeout</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/glue_trigger#timeout GlueTrigger#timeout}. |

---

##### `arguments`<sup>Optional</sup> <a name="arguments" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerActions.property.arguments"></a>

```typescript
public readonly arguments: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/glue_trigger#arguments GlueTrigger#arguments}.

---

##### `crawlerName`<sup>Optional</sup> <a name="crawlerName" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerActions.property.crawlerName"></a>

```typescript
public readonly crawlerName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/glue_trigger#crawler_name GlueTrigger#crawler_name}.

---

##### `jobName`<sup>Optional</sup> <a name="jobName" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerActions.property.jobName"></a>

```typescript
public readonly jobName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/glue_trigger#job_name GlueTrigger#job_name}.

---

##### `notificationProperty`<sup>Optional</sup> <a name="notificationProperty" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerActions.property.notificationProperty"></a>

```typescript
public readonly notificationProperty: GlueTriggerActionsNotificationProperty;
```

- *Type:* <a href="#@cdktf/aws-cdk.glueTrigger.GlueTriggerActionsNotificationProperty">GlueTriggerActionsNotificationProperty</a>

notification_property block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/glue_trigger#notification_property GlueTrigger#notification_property}

---

##### `securityConfiguration`<sup>Optional</sup> <a name="securityConfiguration" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerActions.property.securityConfiguration"></a>

```typescript
public readonly securityConfiguration: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/glue_trigger#security_configuration GlueTrigger#security_configuration}.

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerActions.property.timeout"></a>

```typescript
public readonly timeout: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/glue_trigger#timeout GlueTrigger#timeout}.

---

### GlueTriggerActionsNotificationProperty <a name="GlueTriggerActionsNotificationProperty" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerActionsNotificationProperty"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerActionsNotificationProperty.Initializer"></a>

```typescript
import { glueTrigger } from '@cdktf/aws-cdk'

const glueTriggerActionsNotificationProperty: glueTrigger.GlueTriggerActionsNotificationProperty = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTriggerActionsNotificationProperty.property.notifyDelayAfter">notifyDelayAfter</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/glue_trigger#notify_delay_after GlueTrigger#notify_delay_after}. |

---

##### `notifyDelayAfter`<sup>Optional</sup> <a name="notifyDelayAfter" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerActionsNotificationProperty.property.notifyDelayAfter"></a>

```typescript
public readonly notifyDelayAfter: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/glue_trigger#notify_delay_after GlueTrigger#notify_delay_after}.

---

### GlueTriggerConfig <a name="GlueTriggerConfig" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerConfig.Initializer"></a>

```typescript
import { glueTrigger } from '@cdktf/aws-cdk'

const glueTriggerConfig: glueTrigger.GlueTriggerConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTriggerConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTriggerConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTriggerConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTriggerConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTriggerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTriggerConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTriggerConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTriggerConfig.property.actions">actions</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.glueTrigger.GlueTriggerActions">GlueTriggerActions</a>[]</code> | actions block. |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTriggerConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/glue_trigger#name GlueTrigger#name}. |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTriggerConfig.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/glue_trigger#type GlueTrigger#type}. |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTriggerConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/glue_trigger#description GlueTrigger#description}. |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTriggerConfig.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/glue_trigger#enabled GlueTrigger#enabled}. |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTriggerConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/glue_trigger#id GlueTrigger#id}. |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTriggerConfig.property.predicate">predicate</a></code> | <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTriggerPredicate">GlueTriggerPredicate</a></code> | predicate block. |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTriggerConfig.property.schedule">schedule</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/glue_trigger#schedule GlueTrigger#schedule}. |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTriggerConfig.property.startOnCreation">startOnCreation</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/glue_trigger#start_on_creation GlueTrigger#start_on_creation}. |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTriggerConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/glue_trigger#tags GlueTrigger#tags}. |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTriggerConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/glue_trigger#tags_all GlueTrigger#tags_all}. |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTriggerConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTriggerTimeouts">GlueTriggerTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTriggerConfig.property.workflowName">workflowName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/glue_trigger#workflow_name GlueTrigger#workflow_name}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerConfig.property.actions"></a>

```typescript
public readonly actions: IResolvable | GlueTriggerActions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.glueTrigger.GlueTriggerActions">GlueTriggerActions</a>[]

actions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/glue_trigger#actions GlueTrigger#actions}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/glue_trigger#name GlueTrigger#name}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/glue_trigger#type GlueTrigger#type}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/glue_trigger#description GlueTrigger#description}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/glue_trigger#enabled GlueTrigger#enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/glue_trigger#id GlueTrigger#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `predicate`<sup>Optional</sup> <a name="predicate" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerConfig.property.predicate"></a>

```typescript
public readonly predicate: GlueTriggerPredicate;
```

- *Type:* <a href="#@cdktf/aws-cdk.glueTrigger.GlueTriggerPredicate">GlueTriggerPredicate</a>

predicate block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/glue_trigger#predicate GlueTrigger#predicate}

---

##### `schedule`<sup>Optional</sup> <a name="schedule" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerConfig.property.schedule"></a>

```typescript
public readonly schedule: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/glue_trigger#schedule GlueTrigger#schedule}.

---

##### `startOnCreation`<sup>Optional</sup> <a name="startOnCreation" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerConfig.property.startOnCreation"></a>

```typescript
public readonly startOnCreation: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/glue_trigger#start_on_creation GlueTrigger#start_on_creation}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/glue_trigger#tags GlueTrigger#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/glue_trigger#tags_all GlueTrigger#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GlueTriggerTimeouts;
```

- *Type:* <a href="#@cdktf/aws-cdk.glueTrigger.GlueTriggerTimeouts">GlueTriggerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/glue_trigger#timeouts GlueTrigger#timeouts}

---

##### `workflowName`<sup>Optional</sup> <a name="workflowName" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerConfig.property.workflowName"></a>

```typescript
public readonly workflowName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/glue_trigger#workflow_name GlueTrigger#workflow_name}.

---

### GlueTriggerPredicate <a name="GlueTriggerPredicate" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerPredicate"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerPredicate.Initializer"></a>

```typescript
import { glueTrigger } from '@cdktf/aws-cdk'

const glueTriggerPredicate: glueTrigger.GlueTriggerPredicate = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTriggerPredicate.property.conditions">conditions</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.glueTrigger.GlueTriggerPredicateConditions">GlueTriggerPredicateConditions</a>[]</code> | conditions block. |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTriggerPredicate.property.logical">logical</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/glue_trigger#logical GlueTrigger#logical}. |

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerPredicate.property.conditions"></a>

```typescript
public readonly conditions: IResolvable | GlueTriggerPredicateConditions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.glueTrigger.GlueTriggerPredicateConditions">GlueTriggerPredicateConditions</a>[]

conditions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/glue_trigger#conditions GlueTrigger#conditions}

---

##### `logical`<sup>Optional</sup> <a name="logical" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerPredicate.property.logical"></a>

```typescript
public readonly logical: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/glue_trigger#logical GlueTrigger#logical}.

---

### GlueTriggerPredicateConditions <a name="GlueTriggerPredicateConditions" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerPredicateConditions"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerPredicateConditions.Initializer"></a>

```typescript
import { glueTrigger } from '@cdktf/aws-cdk'

const glueTriggerPredicateConditions: glueTrigger.GlueTriggerPredicateConditions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTriggerPredicateConditions.property.crawlerName">crawlerName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/glue_trigger#crawler_name GlueTrigger#crawler_name}. |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTriggerPredicateConditions.property.crawlState">crawlState</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/glue_trigger#crawl_state GlueTrigger#crawl_state}. |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTriggerPredicateConditions.property.jobName">jobName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/glue_trigger#job_name GlueTrigger#job_name}. |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTriggerPredicateConditions.property.logicalOperator">logicalOperator</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/glue_trigger#logical_operator GlueTrigger#logical_operator}. |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTriggerPredicateConditions.property.state">state</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/glue_trigger#state GlueTrigger#state}. |

---

##### `crawlerName`<sup>Optional</sup> <a name="crawlerName" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerPredicateConditions.property.crawlerName"></a>

```typescript
public readonly crawlerName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/glue_trigger#crawler_name GlueTrigger#crawler_name}.

---

##### `crawlState`<sup>Optional</sup> <a name="crawlState" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerPredicateConditions.property.crawlState"></a>

```typescript
public readonly crawlState: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/glue_trigger#crawl_state GlueTrigger#crawl_state}.

---

##### `jobName`<sup>Optional</sup> <a name="jobName" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerPredicateConditions.property.jobName"></a>

```typescript
public readonly jobName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/glue_trigger#job_name GlueTrigger#job_name}.

---

##### `logicalOperator`<sup>Optional</sup> <a name="logicalOperator" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerPredicateConditions.property.logicalOperator"></a>

```typescript
public readonly logicalOperator: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/glue_trigger#logical_operator GlueTrigger#logical_operator}.

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerPredicateConditions.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/glue_trigger#state GlueTrigger#state}.

---

### GlueTriggerTimeouts <a name="GlueTriggerTimeouts" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerTimeouts.Initializer"></a>

```typescript
import { glueTrigger } from '@cdktf/aws-cdk'

const glueTriggerTimeouts: glueTrigger.GlueTriggerTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTriggerTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/glue_trigger#create GlueTrigger#create}. |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTriggerTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/glue_trigger#delete GlueTrigger#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/glue_trigger#create GlueTrigger#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/glue_trigger#delete GlueTrigger#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### GlueTriggerActionsList <a name="GlueTriggerActionsList" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerActionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerActionsList.Initializer"></a>

```typescript
import { glueTrigger } from '@cdktf/aws-cdk'

new glueTrigger.GlueTriggerActionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTriggerActionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTriggerActionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTriggerActionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerActionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerActionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerActionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTriggerActionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTriggerActionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTriggerActionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTriggerActionsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerActionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerActionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerActionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerActionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerActionsList.get"></a>

```typescript
public get(index: number): GlueTriggerActionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerActionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTriggerActionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTriggerActionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTriggerActionsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.glueTrigger.GlueTriggerActions">GlueTriggerActions</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerActionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerActionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerActionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GlueTriggerActions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.glueTrigger.GlueTriggerActions">GlueTriggerActions</a>[]

---


### GlueTriggerActionsNotificationPropertyOutputReference <a name="GlueTriggerActionsNotificationPropertyOutputReference" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.Initializer"></a>

```typescript
import { glueTrigger } from '@cdktf/aws-cdk'

new glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.resetNotifyDelayAfter">resetNotifyDelayAfter</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetNotifyDelayAfter` <a name="resetNotifyDelayAfter" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.resetNotifyDelayAfter"></a>

```typescript
public resetNotifyDelayAfter(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.property.notifyDelayAfterInput">notifyDelayAfterInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.property.notifyDelayAfter">notifyDelayAfter</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTriggerActionsNotificationProperty">GlueTriggerActionsNotificationProperty</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `notifyDelayAfterInput`<sup>Optional</sup> <a name="notifyDelayAfterInput" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.property.notifyDelayAfterInput"></a>

```typescript
public readonly notifyDelayAfterInput: number;
```

- *Type:* number

---

##### `notifyDelayAfter`<sup>Required</sup> <a name="notifyDelayAfter" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.property.notifyDelayAfter"></a>

```typescript
public readonly notifyDelayAfter: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GlueTriggerActionsNotificationProperty;
```

- *Type:* <a href="#@cdktf/aws-cdk.glueTrigger.GlueTriggerActionsNotificationProperty">GlueTriggerActionsNotificationProperty</a>

---


### GlueTriggerActionsOutputReference <a name="GlueTriggerActionsOutputReference" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerActionsOutputReference.Initializer"></a>

```typescript
import { glueTrigger } from '@cdktf/aws-cdk'

new glueTrigger.GlueTriggerActionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTriggerActionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTriggerActionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTriggerActionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTriggerActionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerActionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerActionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTriggerActionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTriggerActionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTriggerActionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTriggerActionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTriggerActionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTriggerActionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTriggerActionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTriggerActionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTriggerActionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTriggerActionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTriggerActionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTriggerActionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTriggerActionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTriggerActionsOutputReference.putNotificationProperty">putNotificationProperty</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTriggerActionsOutputReference.resetArguments">resetArguments</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTriggerActionsOutputReference.resetCrawlerName">resetCrawlerName</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTriggerActionsOutputReference.resetJobName">resetJobName</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTriggerActionsOutputReference.resetNotificationProperty">resetNotificationProperty</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTriggerActionsOutputReference.resetSecurityConfiguration">resetSecurityConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTriggerActionsOutputReference.resetTimeout">resetTimeout</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerActionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerActionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerActionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerActionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerActionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerActionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerActionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerActionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerActionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerActionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerActionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerActionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerActionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerActionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putNotificationProperty` <a name="putNotificationProperty" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerActionsOutputReference.putNotificationProperty"></a>

```typescript
public putNotificationProperty(value: GlueTriggerActionsNotificationProperty): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerActionsOutputReference.putNotificationProperty.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.glueTrigger.GlueTriggerActionsNotificationProperty">GlueTriggerActionsNotificationProperty</a>

---

##### `resetArguments` <a name="resetArguments" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerActionsOutputReference.resetArguments"></a>

```typescript
public resetArguments(): void
```

##### `resetCrawlerName` <a name="resetCrawlerName" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerActionsOutputReference.resetCrawlerName"></a>

```typescript
public resetCrawlerName(): void
```

##### `resetJobName` <a name="resetJobName" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerActionsOutputReference.resetJobName"></a>

```typescript
public resetJobName(): void
```

##### `resetNotificationProperty` <a name="resetNotificationProperty" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerActionsOutputReference.resetNotificationProperty"></a>

```typescript
public resetNotificationProperty(): void
```

##### `resetSecurityConfiguration` <a name="resetSecurityConfiguration" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerActionsOutputReference.resetSecurityConfiguration"></a>

```typescript
public resetSecurityConfiguration(): void
```

##### `resetTimeout` <a name="resetTimeout" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerActionsOutputReference.resetTimeout"></a>

```typescript
public resetTimeout(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTriggerActionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTriggerActionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTriggerActionsOutputReference.property.notificationProperty">notificationProperty</a></code> | <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference">GlueTriggerActionsNotificationPropertyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTriggerActionsOutputReference.property.argumentsInput">argumentsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTriggerActionsOutputReference.property.crawlerNameInput">crawlerNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTriggerActionsOutputReference.property.jobNameInput">jobNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTriggerActionsOutputReference.property.notificationPropertyInput">notificationPropertyInput</a></code> | <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTriggerActionsNotificationProperty">GlueTriggerActionsNotificationProperty</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTriggerActionsOutputReference.property.securityConfigurationInput">securityConfigurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTriggerActionsOutputReference.property.timeoutInput">timeoutInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTriggerActionsOutputReference.property.arguments">arguments</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTriggerActionsOutputReference.property.crawlerName">crawlerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTriggerActionsOutputReference.property.jobName">jobName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTriggerActionsOutputReference.property.securityConfiguration">securityConfiguration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTriggerActionsOutputReference.property.timeout">timeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTriggerActionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTriggerActions">GlueTriggerActions</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerActionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerActionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `notificationProperty`<sup>Required</sup> <a name="notificationProperty" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerActionsOutputReference.property.notificationProperty"></a>

```typescript
public readonly notificationProperty: GlueTriggerActionsNotificationPropertyOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.glueTrigger.GlueTriggerActionsNotificationPropertyOutputReference">GlueTriggerActionsNotificationPropertyOutputReference</a>

---

##### `argumentsInput`<sup>Optional</sup> <a name="argumentsInput" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerActionsOutputReference.property.argumentsInput"></a>

```typescript
public readonly argumentsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `crawlerNameInput`<sup>Optional</sup> <a name="crawlerNameInput" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerActionsOutputReference.property.crawlerNameInput"></a>

```typescript
public readonly crawlerNameInput: string;
```

- *Type:* string

---

##### `jobNameInput`<sup>Optional</sup> <a name="jobNameInput" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerActionsOutputReference.property.jobNameInput"></a>

```typescript
public readonly jobNameInput: string;
```

- *Type:* string

---

##### `notificationPropertyInput`<sup>Optional</sup> <a name="notificationPropertyInput" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerActionsOutputReference.property.notificationPropertyInput"></a>

```typescript
public readonly notificationPropertyInput: GlueTriggerActionsNotificationProperty;
```

- *Type:* <a href="#@cdktf/aws-cdk.glueTrigger.GlueTriggerActionsNotificationProperty">GlueTriggerActionsNotificationProperty</a>

---

##### `securityConfigurationInput`<sup>Optional</sup> <a name="securityConfigurationInput" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerActionsOutputReference.property.securityConfigurationInput"></a>

```typescript
public readonly securityConfigurationInput: string;
```

- *Type:* string

---

##### `timeoutInput`<sup>Optional</sup> <a name="timeoutInput" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerActionsOutputReference.property.timeoutInput"></a>

```typescript
public readonly timeoutInput: number;
```

- *Type:* number

---

##### `arguments`<sup>Required</sup> <a name="arguments" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerActionsOutputReference.property.arguments"></a>

```typescript
public readonly arguments: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `crawlerName`<sup>Required</sup> <a name="crawlerName" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerActionsOutputReference.property.crawlerName"></a>

```typescript
public readonly crawlerName: string;
```

- *Type:* string

---

##### `jobName`<sup>Required</sup> <a name="jobName" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerActionsOutputReference.property.jobName"></a>

```typescript
public readonly jobName: string;
```

- *Type:* string

---

##### `securityConfiguration`<sup>Required</sup> <a name="securityConfiguration" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerActionsOutputReference.property.securityConfiguration"></a>

```typescript
public readonly securityConfiguration: string;
```

- *Type:* string

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerActionsOutputReference.property.timeout"></a>

```typescript
public readonly timeout: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerActionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GlueTriggerActions | IResolvable;
```

- *Type:* <a href="#@cdktf/aws-cdk.glueTrigger.GlueTriggerActions">GlueTriggerActions</a> | cdktf.IResolvable

---


### GlueTriggerPredicateConditionsList <a name="GlueTriggerPredicateConditionsList" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerPredicateConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerPredicateConditionsList.Initializer"></a>

```typescript
import { glueTrigger } from '@cdktf/aws-cdk'

new glueTrigger.GlueTriggerPredicateConditionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTriggerPredicateConditionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTriggerPredicateConditionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTriggerPredicateConditionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerPredicateConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerPredicateConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerPredicateConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTriggerPredicateConditionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTriggerPredicateConditionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTriggerPredicateConditionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTriggerPredicateConditionsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerPredicateConditionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerPredicateConditionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerPredicateConditionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerPredicateConditionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerPredicateConditionsList.get"></a>

```typescript
public get(index: number): GlueTriggerPredicateConditionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerPredicateConditionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTriggerPredicateConditionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTriggerPredicateConditionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTriggerPredicateConditionsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.glueTrigger.GlueTriggerPredicateConditions">GlueTriggerPredicateConditions</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerPredicateConditionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerPredicateConditionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerPredicateConditionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GlueTriggerPredicateConditions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.glueTrigger.GlueTriggerPredicateConditions">GlueTriggerPredicateConditions</a>[]

---


### GlueTriggerPredicateConditionsOutputReference <a name="GlueTriggerPredicateConditionsOutputReference" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerPredicateConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerPredicateConditionsOutputReference.Initializer"></a>

```typescript
import { glueTrigger } from '@cdktf/aws-cdk'

new glueTrigger.GlueTriggerPredicateConditionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTriggerPredicateConditionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTriggerPredicateConditionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTriggerPredicateConditionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTriggerPredicateConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerPredicateConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerPredicateConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerPredicateConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerPredicateConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTriggerPredicateConditionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTriggerPredicateConditionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTriggerPredicateConditionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTriggerPredicateConditionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTriggerPredicateConditionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTriggerPredicateConditionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTriggerPredicateConditionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTriggerPredicateConditionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTriggerPredicateConditionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTriggerPredicateConditionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTriggerPredicateConditionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTriggerPredicateConditionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTriggerPredicateConditionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTriggerPredicateConditionsOutputReference.resetCrawlerName">resetCrawlerName</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTriggerPredicateConditionsOutputReference.resetCrawlState">resetCrawlState</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTriggerPredicateConditionsOutputReference.resetJobName">resetJobName</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTriggerPredicateConditionsOutputReference.resetLogicalOperator">resetLogicalOperator</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTriggerPredicateConditionsOutputReference.resetState">resetState</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerPredicateConditionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerPredicateConditionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerPredicateConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerPredicateConditionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerPredicateConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerPredicateConditionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerPredicateConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerPredicateConditionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerPredicateConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerPredicateConditionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerPredicateConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerPredicateConditionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerPredicateConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerPredicateConditionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerPredicateConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerPredicateConditionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerPredicateConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerPredicateConditionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerPredicateConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerPredicateConditionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerPredicateConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerPredicateConditionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerPredicateConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerPredicateConditionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCrawlerName` <a name="resetCrawlerName" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerPredicateConditionsOutputReference.resetCrawlerName"></a>

```typescript
public resetCrawlerName(): void
```

##### `resetCrawlState` <a name="resetCrawlState" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerPredicateConditionsOutputReference.resetCrawlState"></a>

```typescript
public resetCrawlState(): void
```

##### `resetJobName` <a name="resetJobName" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerPredicateConditionsOutputReference.resetJobName"></a>

```typescript
public resetJobName(): void
```

##### `resetLogicalOperator` <a name="resetLogicalOperator" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerPredicateConditionsOutputReference.resetLogicalOperator"></a>

```typescript
public resetLogicalOperator(): void
```

##### `resetState` <a name="resetState" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerPredicateConditionsOutputReference.resetState"></a>

```typescript
public resetState(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTriggerPredicateConditionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTriggerPredicateConditionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTriggerPredicateConditionsOutputReference.property.crawlerNameInput">crawlerNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTriggerPredicateConditionsOutputReference.property.crawlStateInput">crawlStateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTriggerPredicateConditionsOutputReference.property.jobNameInput">jobNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTriggerPredicateConditionsOutputReference.property.logicalOperatorInput">logicalOperatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTriggerPredicateConditionsOutputReference.property.stateInput">stateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTriggerPredicateConditionsOutputReference.property.crawlerName">crawlerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTriggerPredicateConditionsOutputReference.property.crawlState">crawlState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTriggerPredicateConditionsOutputReference.property.jobName">jobName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTriggerPredicateConditionsOutputReference.property.logicalOperator">logicalOperator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTriggerPredicateConditionsOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTriggerPredicateConditionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTriggerPredicateConditions">GlueTriggerPredicateConditions</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerPredicateConditionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerPredicateConditionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `crawlerNameInput`<sup>Optional</sup> <a name="crawlerNameInput" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerPredicateConditionsOutputReference.property.crawlerNameInput"></a>

```typescript
public readonly crawlerNameInput: string;
```

- *Type:* string

---

##### `crawlStateInput`<sup>Optional</sup> <a name="crawlStateInput" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerPredicateConditionsOutputReference.property.crawlStateInput"></a>

```typescript
public readonly crawlStateInput: string;
```

- *Type:* string

---

##### `jobNameInput`<sup>Optional</sup> <a name="jobNameInput" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerPredicateConditionsOutputReference.property.jobNameInput"></a>

```typescript
public readonly jobNameInput: string;
```

- *Type:* string

---

##### `logicalOperatorInput`<sup>Optional</sup> <a name="logicalOperatorInput" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerPredicateConditionsOutputReference.property.logicalOperatorInput"></a>

```typescript
public readonly logicalOperatorInput: string;
```

- *Type:* string

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerPredicateConditionsOutputReference.property.stateInput"></a>

```typescript
public readonly stateInput: string;
```

- *Type:* string

---

##### `crawlerName`<sup>Required</sup> <a name="crawlerName" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerPredicateConditionsOutputReference.property.crawlerName"></a>

```typescript
public readonly crawlerName: string;
```

- *Type:* string

---

##### `crawlState`<sup>Required</sup> <a name="crawlState" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerPredicateConditionsOutputReference.property.crawlState"></a>

```typescript
public readonly crawlState: string;
```

- *Type:* string

---

##### `jobName`<sup>Required</sup> <a name="jobName" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerPredicateConditionsOutputReference.property.jobName"></a>

```typescript
public readonly jobName: string;
```

- *Type:* string

---

##### `logicalOperator`<sup>Required</sup> <a name="logicalOperator" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerPredicateConditionsOutputReference.property.logicalOperator"></a>

```typescript
public readonly logicalOperator: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerPredicateConditionsOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerPredicateConditionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GlueTriggerPredicateConditions | IResolvable;
```

- *Type:* <a href="#@cdktf/aws-cdk.glueTrigger.GlueTriggerPredicateConditions">GlueTriggerPredicateConditions</a> | cdktf.IResolvable

---


### GlueTriggerPredicateOutputReference <a name="GlueTriggerPredicateOutputReference" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerPredicateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerPredicateOutputReference.Initializer"></a>

```typescript
import { glueTrigger } from '@cdktf/aws-cdk'

new glueTrigger.GlueTriggerPredicateOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTriggerPredicateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTriggerPredicateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerPredicateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerPredicateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTriggerPredicateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTriggerPredicateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTriggerPredicateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTriggerPredicateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTriggerPredicateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTriggerPredicateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTriggerPredicateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTriggerPredicateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTriggerPredicateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTriggerPredicateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTriggerPredicateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTriggerPredicateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTriggerPredicateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTriggerPredicateOutputReference.putConditions">putConditions</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTriggerPredicateOutputReference.resetLogical">resetLogical</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerPredicateOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerPredicateOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerPredicateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerPredicateOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerPredicateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerPredicateOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerPredicateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerPredicateOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerPredicateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerPredicateOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerPredicateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerPredicateOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerPredicateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerPredicateOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerPredicateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerPredicateOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerPredicateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerPredicateOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerPredicateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerPredicateOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerPredicateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerPredicateOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerPredicateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerPredicateOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putConditions` <a name="putConditions" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerPredicateOutputReference.putConditions"></a>

```typescript
public putConditions(value: IResolvable | GlueTriggerPredicateConditions[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerPredicateOutputReference.putConditions.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.glueTrigger.GlueTriggerPredicateConditions">GlueTriggerPredicateConditions</a>[]

---

##### `resetLogical` <a name="resetLogical" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerPredicateOutputReference.resetLogical"></a>

```typescript
public resetLogical(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTriggerPredicateOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTriggerPredicateOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTriggerPredicateOutputReference.property.conditions">conditions</a></code> | <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTriggerPredicateConditionsList">GlueTriggerPredicateConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTriggerPredicateOutputReference.property.conditionsInput">conditionsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.glueTrigger.GlueTriggerPredicateConditions">GlueTriggerPredicateConditions</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTriggerPredicateOutputReference.property.logicalInput">logicalInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTriggerPredicateOutputReference.property.logical">logical</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTriggerPredicateOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTriggerPredicate">GlueTriggerPredicate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerPredicateOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerPredicateOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerPredicateOutputReference.property.conditions"></a>

```typescript
public readonly conditions: GlueTriggerPredicateConditionsList;
```

- *Type:* <a href="#@cdktf/aws-cdk.glueTrigger.GlueTriggerPredicateConditionsList">GlueTriggerPredicateConditionsList</a>

---

##### `conditionsInput`<sup>Optional</sup> <a name="conditionsInput" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerPredicateOutputReference.property.conditionsInput"></a>

```typescript
public readonly conditionsInput: IResolvable | GlueTriggerPredicateConditions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.glueTrigger.GlueTriggerPredicateConditions">GlueTriggerPredicateConditions</a>[]

---

##### `logicalInput`<sup>Optional</sup> <a name="logicalInput" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerPredicateOutputReference.property.logicalInput"></a>

```typescript
public readonly logicalInput: string;
```

- *Type:* string

---

##### `logical`<sup>Required</sup> <a name="logical" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerPredicateOutputReference.property.logical"></a>

```typescript
public readonly logical: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerPredicateOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GlueTriggerPredicate;
```

- *Type:* <a href="#@cdktf/aws-cdk.glueTrigger.GlueTriggerPredicate">GlueTriggerPredicate</a>

---


### GlueTriggerTimeoutsOutputReference <a name="GlueTriggerTimeoutsOutputReference" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerTimeoutsOutputReference.Initializer"></a>

```typescript
import { glueTrigger } from '@cdktf/aws-cdk'

new glueTrigger.GlueTriggerTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTriggerTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTriggerTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTriggerTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTriggerTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTriggerTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTriggerTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTriggerTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTriggerTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTriggerTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTriggerTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTriggerTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTriggerTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTriggerTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTriggerTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTriggerTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTriggerTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTriggerTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTriggerTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTriggerTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTriggerTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTriggerTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTriggerTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTriggerTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTriggerTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.glueTrigger.GlueTriggerTimeouts">GlueTriggerTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.glueTrigger.GlueTriggerTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GlueTriggerTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/aws-cdk.glueTrigger.GlueTriggerTimeouts">GlueTriggerTimeouts</a> | cdktf.IResolvable

---



