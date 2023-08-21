# `aws_lex_intent`

Refer to the Terraform Registory for docs: [`aws_lex_intent`](https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lex_intent).

# `lexIntent` Submodule <a name="`lexIntent` Submodule" id="@cdktf/aws-cdk.lexIntent"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LexIntent <a name="LexIntent" id="@cdktf/aws-cdk.lexIntent.LexIntent"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lex_intent aws_lex_intent}.

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.lexIntent.LexIntent.Initializer"></a>

```typescript
import { lexIntent } from '@cdktf/aws-cdk'

new lexIntent.LexIntent(scope: Construct, id: string, config: LexIntentConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntent.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntent.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntent.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentConfig">LexIntentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.lexIntent.LexIntent.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.lexIntent.LexIntent.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/aws-cdk.lexIntent.LexIntent.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/aws-cdk.lexIntent.LexIntentConfig">LexIntentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntent.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntent.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntent.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntent.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntent.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntent.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntent.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntent.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntent.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntent.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntent.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntent.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntent.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntent.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntent.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntent.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntent.putConclusionStatement">putConclusionStatement</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntent.putConfirmationPrompt">putConfirmationPrompt</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntent.putDialogCodeHook">putDialogCodeHook</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntent.putFollowUpPrompt">putFollowUpPrompt</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntent.putFulfillmentActivity">putFulfillmentActivity</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntent.putRejectionStatement">putRejectionStatement</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntent.putSlot">putSlot</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntent.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntent.resetConclusionStatement">resetConclusionStatement</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntent.resetConfirmationPrompt">resetConfirmationPrompt</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntent.resetCreateVersion">resetCreateVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntent.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntent.resetDialogCodeHook">resetDialogCodeHook</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntent.resetFollowUpPrompt">resetFollowUpPrompt</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntent.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntent.resetParentIntentSignature">resetParentIntentSignature</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntent.resetRejectionStatement">resetRejectionStatement</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntent.resetSampleUtterances">resetSampleUtterances</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntent.resetSlot">resetSlot</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntent.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.lexIntent.LexIntent.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/aws-cdk.lexIntent.LexIntent.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/aws-cdk.lexIntent.LexIntent.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.lexIntent.LexIntent.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/aws-cdk.lexIntent.LexIntent.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/aws-cdk.lexIntent.LexIntent.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/aws-cdk.lexIntent.LexIntent.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/aws-cdk.lexIntent.LexIntent.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/aws-cdk.lexIntent.LexIntent.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntent.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntent.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntent.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntent.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntent.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntent.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntent.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntent.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntent.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntent.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntent.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntent.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntent.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntent.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntent.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntent.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntent.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntent.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntent.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntent.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putConclusionStatement` <a name="putConclusionStatement" id="@cdktf/aws-cdk.lexIntent.LexIntent.putConclusionStatement"></a>

```typescript
public putConclusionStatement(value: LexIntentConclusionStatement): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.lexIntent.LexIntent.putConclusionStatement.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.lexIntent.LexIntentConclusionStatement">LexIntentConclusionStatement</a>

---

##### `putConfirmationPrompt` <a name="putConfirmationPrompt" id="@cdktf/aws-cdk.lexIntent.LexIntent.putConfirmationPrompt"></a>

```typescript
public putConfirmationPrompt(value: LexIntentConfirmationPrompt): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.lexIntent.LexIntent.putConfirmationPrompt.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.lexIntent.LexIntentConfirmationPrompt">LexIntentConfirmationPrompt</a>

---

##### `putDialogCodeHook` <a name="putDialogCodeHook" id="@cdktf/aws-cdk.lexIntent.LexIntent.putDialogCodeHook"></a>

```typescript
public putDialogCodeHook(value: LexIntentDialogCodeHook): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.lexIntent.LexIntent.putDialogCodeHook.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.lexIntent.LexIntentDialogCodeHook">LexIntentDialogCodeHook</a>

---

##### `putFollowUpPrompt` <a name="putFollowUpPrompt" id="@cdktf/aws-cdk.lexIntent.LexIntent.putFollowUpPrompt"></a>

```typescript
public putFollowUpPrompt(value: LexIntentFollowUpPrompt): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.lexIntent.LexIntent.putFollowUpPrompt.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPrompt">LexIntentFollowUpPrompt</a>

---

##### `putFulfillmentActivity` <a name="putFulfillmentActivity" id="@cdktf/aws-cdk.lexIntent.LexIntent.putFulfillmentActivity"></a>

```typescript
public putFulfillmentActivity(value: LexIntentFulfillmentActivity): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.lexIntent.LexIntent.putFulfillmentActivity.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.lexIntent.LexIntentFulfillmentActivity">LexIntentFulfillmentActivity</a>

---

##### `putRejectionStatement` <a name="putRejectionStatement" id="@cdktf/aws-cdk.lexIntent.LexIntent.putRejectionStatement"></a>

```typescript
public putRejectionStatement(value: LexIntentRejectionStatement): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.lexIntent.LexIntent.putRejectionStatement.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.lexIntent.LexIntentRejectionStatement">LexIntentRejectionStatement</a>

---

##### `putSlot` <a name="putSlot" id="@cdktf/aws-cdk.lexIntent.LexIntent.putSlot"></a>

```typescript
public putSlot(value: IResolvable | LexIntentSlot[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.lexIntent.LexIntent.putSlot.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.lexIntent.LexIntentSlot">LexIntentSlot</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/aws-cdk.lexIntent.LexIntent.putTimeouts"></a>

```typescript
public putTimeouts(value: LexIntentTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.lexIntent.LexIntent.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.lexIntent.LexIntentTimeouts">LexIntentTimeouts</a>

---

##### `resetConclusionStatement` <a name="resetConclusionStatement" id="@cdktf/aws-cdk.lexIntent.LexIntent.resetConclusionStatement"></a>

```typescript
public resetConclusionStatement(): void
```

##### `resetConfirmationPrompt` <a name="resetConfirmationPrompt" id="@cdktf/aws-cdk.lexIntent.LexIntent.resetConfirmationPrompt"></a>

```typescript
public resetConfirmationPrompt(): void
```

##### `resetCreateVersion` <a name="resetCreateVersion" id="@cdktf/aws-cdk.lexIntent.LexIntent.resetCreateVersion"></a>

```typescript
public resetCreateVersion(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/aws-cdk.lexIntent.LexIntent.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDialogCodeHook` <a name="resetDialogCodeHook" id="@cdktf/aws-cdk.lexIntent.LexIntent.resetDialogCodeHook"></a>

```typescript
public resetDialogCodeHook(): void
```

##### `resetFollowUpPrompt` <a name="resetFollowUpPrompt" id="@cdktf/aws-cdk.lexIntent.LexIntent.resetFollowUpPrompt"></a>

```typescript
public resetFollowUpPrompt(): void
```

##### `resetId` <a name="resetId" id="@cdktf/aws-cdk.lexIntent.LexIntent.resetId"></a>

```typescript
public resetId(): void
```

##### `resetParentIntentSignature` <a name="resetParentIntentSignature" id="@cdktf/aws-cdk.lexIntent.LexIntent.resetParentIntentSignature"></a>

```typescript
public resetParentIntentSignature(): void
```

##### `resetRejectionStatement` <a name="resetRejectionStatement" id="@cdktf/aws-cdk.lexIntent.LexIntent.resetRejectionStatement"></a>

```typescript
public resetRejectionStatement(): void
```

##### `resetSampleUtterances` <a name="resetSampleUtterances" id="@cdktf/aws-cdk.lexIntent.LexIntent.resetSampleUtterances"></a>

```typescript
public resetSampleUtterances(): void
```

##### `resetSlot` <a name="resetSlot" id="@cdktf/aws-cdk.lexIntent.LexIntent.resetSlot"></a>

```typescript
public resetSlot(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/aws-cdk.lexIntent.LexIntent.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntent.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntent.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntent.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/aws-cdk.lexIntent.LexIntent.isConstruct"></a>

```typescript
import { lexIntent } from '@cdktf/aws-cdk'

lexIntent.LexIntent.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.lexIntent.LexIntent.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/aws-cdk.lexIntent.LexIntent.isTerraformElement"></a>

```typescript
import { lexIntent } from '@cdktf/aws-cdk'

lexIntent.LexIntent.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.lexIntent.LexIntent.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/aws-cdk.lexIntent.LexIntent.isTerraformResource"></a>

```typescript
import { lexIntent } from '@cdktf/aws-cdk'

lexIntent.LexIntent.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.lexIntent.LexIntent.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntent.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntent.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntent.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntent.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntent.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntent.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntent.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntent.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntent.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntent.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntent.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntent.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntent.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntent.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntent.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntent.property.checksum">checksum</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntent.property.conclusionStatement">conclusionStatement</a></code> | <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentConclusionStatementOutputReference">LexIntentConclusionStatementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntent.property.confirmationPrompt">confirmationPrompt</a></code> | <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentConfirmationPromptOutputReference">LexIntentConfirmationPromptOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntent.property.createdDate">createdDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntent.property.dialogCodeHook">dialogCodeHook</a></code> | <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentDialogCodeHookOutputReference">LexIntentDialogCodeHookOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntent.property.followUpPrompt">followUpPrompt</a></code> | <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptOutputReference">LexIntentFollowUpPromptOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntent.property.fulfillmentActivity">fulfillmentActivity</a></code> | <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentFulfillmentActivityOutputReference">LexIntentFulfillmentActivityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntent.property.lastUpdatedDate">lastUpdatedDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntent.property.rejectionStatement">rejectionStatement</a></code> | <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentRejectionStatementOutputReference">LexIntentRejectionStatementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntent.property.slot">slot</a></code> | <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentSlotList">LexIntentSlotList</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntent.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentTimeoutsOutputReference">LexIntentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntent.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntent.property.conclusionStatementInput">conclusionStatementInput</a></code> | <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentConclusionStatement">LexIntentConclusionStatement</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntent.property.confirmationPromptInput">confirmationPromptInput</a></code> | <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentConfirmationPrompt">LexIntentConfirmationPrompt</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntent.property.createVersionInput">createVersionInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntent.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntent.property.dialogCodeHookInput">dialogCodeHookInput</a></code> | <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentDialogCodeHook">LexIntentDialogCodeHook</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntent.property.followUpPromptInput">followUpPromptInput</a></code> | <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPrompt">LexIntentFollowUpPrompt</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntent.property.fulfillmentActivityInput">fulfillmentActivityInput</a></code> | <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentFulfillmentActivity">LexIntentFulfillmentActivity</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntent.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntent.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntent.property.parentIntentSignatureInput">parentIntentSignatureInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntent.property.rejectionStatementInput">rejectionStatementInput</a></code> | <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentRejectionStatement">LexIntentRejectionStatement</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntent.property.sampleUtterancesInput">sampleUtterancesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntent.property.slotInput">slotInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.lexIntent.LexIntentSlot">LexIntentSlot</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntent.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentTimeouts">LexIntentTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntent.property.createVersion">createVersion</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntent.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntent.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntent.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntent.property.parentIntentSignature">parentIntentSignature</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntent.property.sampleUtterances">sampleUtterances</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/aws-cdk.lexIntent.LexIntent.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/aws-cdk.lexIntent.LexIntent.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.lexIntent.LexIntent.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/aws-cdk.lexIntent.LexIntent.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/aws-cdk.lexIntent.LexIntent.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/aws-cdk.lexIntent.LexIntent.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/aws-cdk.lexIntent.LexIntent.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.lexIntent.LexIntent.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.lexIntent.LexIntent.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.lexIntent.LexIntent.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.lexIntent.LexIntent.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.lexIntent.LexIntent.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.lexIntent.LexIntent.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.lexIntent.LexIntent.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/aws-cdk.lexIntent.LexIntent.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `checksum`<sup>Required</sup> <a name="checksum" id="@cdktf/aws-cdk.lexIntent.LexIntent.property.checksum"></a>

```typescript
public readonly checksum: string;
```

- *Type:* string

---

##### `conclusionStatement`<sup>Required</sup> <a name="conclusionStatement" id="@cdktf/aws-cdk.lexIntent.LexIntent.property.conclusionStatement"></a>

```typescript
public readonly conclusionStatement: LexIntentConclusionStatementOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.lexIntent.LexIntentConclusionStatementOutputReference">LexIntentConclusionStatementOutputReference</a>

---

##### `confirmationPrompt`<sup>Required</sup> <a name="confirmationPrompt" id="@cdktf/aws-cdk.lexIntent.LexIntent.property.confirmationPrompt"></a>

```typescript
public readonly confirmationPrompt: LexIntentConfirmationPromptOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.lexIntent.LexIntentConfirmationPromptOutputReference">LexIntentConfirmationPromptOutputReference</a>

---

##### `createdDate`<sup>Required</sup> <a name="createdDate" id="@cdktf/aws-cdk.lexIntent.LexIntent.property.createdDate"></a>

```typescript
public readonly createdDate: string;
```

- *Type:* string

---

##### `dialogCodeHook`<sup>Required</sup> <a name="dialogCodeHook" id="@cdktf/aws-cdk.lexIntent.LexIntent.property.dialogCodeHook"></a>

```typescript
public readonly dialogCodeHook: LexIntentDialogCodeHookOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.lexIntent.LexIntentDialogCodeHookOutputReference">LexIntentDialogCodeHookOutputReference</a>

---

##### `followUpPrompt`<sup>Required</sup> <a name="followUpPrompt" id="@cdktf/aws-cdk.lexIntent.LexIntent.property.followUpPrompt"></a>

```typescript
public readonly followUpPrompt: LexIntentFollowUpPromptOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptOutputReference">LexIntentFollowUpPromptOutputReference</a>

---

##### `fulfillmentActivity`<sup>Required</sup> <a name="fulfillmentActivity" id="@cdktf/aws-cdk.lexIntent.LexIntent.property.fulfillmentActivity"></a>

```typescript
public readonly fulfillmentActivity: LexIntentFulfillmentActivityOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.lexIntent.LexIntentFulfillmentActivityOutputReference">LexIntentFulfillmentActivityOutputReference</a>

---

##### `lastUpdatedDate`<sup>Required</sup> <a name="lastUpdatedDate" id="@cdktf/aws-cdk.lexIntent.LexIntent.property.lastUpdatedDate"></a>

```typescript
public readonly lastUpdatedDate: string;
```

- *Type:* string

---

##### `rejectionStatement`<sup>Required</sup> <a name="rejectionStatement" id="@cdktf/aws-cdk.lexIntent.LexIntent.property.rejectionStatement"></a>

```typescript
public readonly rejectionStatement: LexIntentRejectionStatementOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.lexIntent.LexIntentRejectionStatementOutputReference">LexIntentRejectionStatementOutputReference</a>

---

##### `slot`<sup>Required</sup> <a name="slot" id="@cdktf/aws-cdk.lexIntent.LexIntent.property.slot"></a>

```typescript
public readonly slot: LexIntentSlotList;
```

- *Type:* <a href="#@cdktf/aws-cdk.lexIntent.LexIntentSlotList">LexIntentSlotList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/aws-cdk.lexIntent.LexIntent.property.timeouts"></a>

```typescript
public readonly timeouts: LexIntentTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.lexIntent.LexIntentTimeoutsOutputReference">LexIntentTimeoutsOutputReference</a>

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/aws-cdk.lexIntent.LexIntent.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `conclusionStatementInput`<sup>Optional</sup> <a name="conclusionStatementInput" id="@cdktf/aws-cdk.lexIntent.LexIntent.property.conclusionStatementInput"></a>

```typescript
public readonly conclusionStatementInput: LexIntentConclusionStatement;
```

- *Type:* <a href="#@cdktf/aws-cdk.lexIntent.LexIntentConclusionStatement">LexIntentConclusionStatement</a>

---

##### `confirmationPromptInput`<sup>Optional</sup> <a name="confirmationPromptInput" id="@cdktf/aws-cdk.lexIntent.LexIntent.property.confirmationPromptInput"></a>

```typescript
public readonly confirmationPromptInput: LexIntentConfirmationPrompt;
```

- *Type:* <a href="#@cdktf/aws-cdk.lexIntent.LexIntentConfirmationPrompt">LexIntentConfirmationPrompt</a>

---

##### `createVersionInput`<sup>Optional</sup> <a name="createVersionInput" id="@cdktf/aws-cdk.lexIntent.LexIntent.property.createVersionInput"></a>

```typescript
public readonly createVersionInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/aws-cdk.lexIntent.LexIntent.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `dialogCodeHookInput`<sup>Optional</sup> <a name="dialogCodeHookInput" id="@cdktf/aws-cdk.lexIntent.LexIntent.property.dialogCodeHookInput"></a>

```typescript
public readonly dialogCodeHookInput: LexIntentDialogCodeHook;
```

- *Type:* <a href="#@cdktf/aws-cdk.lexIntent.LexIntentDialogCodeHook">LexIntentDialogCodeHook</a>

---

##### `followUpPromptInput`<sup>Optional</sup> <a name="followUpPromptInput" id="@cdktf/aws-cdk.lexIntent.LexIntent.property.followUpPromptInput"></a>

```typescript
public readonly followUpPromptInput: LexIntentFollowUpPrompt;
```

- *Type:* <a href="#@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPrompt">LexIntentFollowUpPrompt</a>

---

##### `fulfillmentActivityInput`<sup>Optional</sup> <a name="fulfillmentActivityInput" id="@cdktf/aws-cdk.lexIntent.LexIntent.property.fulfillmentActivityInput"></a>

```typescript
public readonly fulfillmentActivityInput: LexIntentFulfillmentActivity;
```

- *Type:* <a href="#@cdktf/aws-cdk.lexIntent.LexIntentFulfillmentActivity">LexIntentFulfillmentActivity</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/aws-cdk.lexIntent.LexIntent.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/aws-cdk.lexIntent.LexIntent.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `parentIntentSignatureInput`<sup>Optional</sup> <a name="parentIntentSignatureInput" id="@cdktf/aws-cdk.lexIntent.LexIntent.property.parentIntentSignatureInput"></a>

```typescript
public readonly parentIntentSignatureInput: string;
```

- *Type:* string

---

##### `rejectionStatementInput`<sup>Optional</sup> <a name="rejectionStatementInput" id="@cdktf/aws-cdk.lexIntent.LexIntent.property.rejectionStatementInput"></a>

```typescript
public readonly rejectionStatementInput: LexIntentRejectionStatement;
```

- *Type:* <a href="#@cdktf/aws-cdk.lexIntent.LexIntentRejectionStatement">LexIntentRejectionStatement</a>

---

##### `sampleUtterancesInput`<sup>Optional</sup> <a name="sampleUtterancesInput" id="@cdktf/aws-cdk.lexIntent.LexIntent.property.sampleUtterancesInput"></a>

```typescript
public readonly sampleUtterancesInput: string[];
```

- *Type:* string[]

---

##### `slotInput`<sup>Optional</sup> <a name="slotInput" id="@cdktf/aws-cdk.lexIntent.LexIntent.property.slotInput"></a>

```typescript
public readonly slotInput: IResolvable | LexIntentSlot[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.lexIntent.LexIntentSlot">LexIntentSlot</a>[]

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/aws-cdk.lexIntent.LexIntent.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: LexIntentTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/aws-cdk.lexIntent.LexIntentTimeouts">LexIntentTimeouts</a> | cdktf.IResolvable

---

##### `createVersion`<sup>Required</sup> <a name="createVersion" id="@cdktf/aws-cdk.lexIntent.LexIntent.property.createVersion"></a>

```typescript
public readonly createVersion: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/aws-cdk.lexIntent.LexIntent.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.lexIntent.LexIntent.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/aws-cdk.lexIntent.LexIntent.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `parentIntentSignature`<sup>Required</sup> <a name="parentIntentSignature" id="@cdktf/aws-cdk.lexIntent.LexIntent.property.parentIntentSignature"></a>

```typescript
public readonly parentIntentSignature: string;
```

- *Type:* string

---

##### `sampleUtterances`<sup>Required</sup> <a name="sampleUtterances" id="@cdktf/aws-cdk.lexIntent.LexIntent.property.sampleUtterances"></a>

```typescript
public readonly sampleUtterances: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntent.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/aws-cdk.lexIntent.LexIntent.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LexIntentConclusionStatement <a name="LexIntentConclusionStatement" id="@cdktf/aws-cdk.lexIntent.LexIntentConclusionStatement"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.lexIntent.LexIntentConclusionStatement.Initializer"></a>

```typescript
import { lexIntent } from '@cdktf/aws-cdk'

const lexIntentConclusionStatement: lexIntent.LexIntentConclusionStatement = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentConclusionStatement.property.message">message</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.lexIntent.LexIntentConclusionStatementMessage">LexIntentConclusionStatementMessage</a>[]</code> | message block. |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentConclusionStatement.property.responseCard">responseCard</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lex_intent#response_card LexIntent#response_card}. |

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/aws-cdk.lexIntent.LexIntentConclusionStatement.property.message"></a>

```typescript
public readonly message: IResolvable | LexIntentConclusionStatementMessage[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.lexIntent.LexIntentConclusionStatementMessage">LexIntentConclusionStatementMessage</a>[]

message block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lex_intent#message LexIntent#message}

---

##### `responseCard`<sup>Optional</sup> <a name="responseCard" id="@cdktf/aws-cdk.lexIntent.LexIntentConclusionStatement.property.responseCard"></a>

```typescript
public readonly responseCard: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lex_intent#response_card LexIntent#response_card}.

---

### LexIntentConclusionStatementMessage <a name="LexIntentConclusionStatementMessage" id="@cdktf/aws-cdk.lexIntent.LexIntentConclusionStatementMessage"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.lexIntent.LexIntentConclusionStatementMessage.Initializer"></a>

```typescript
import { lexIntent } from '@cdktf/aws-cdk'

const lexIntentConclusionStatementMessage: lexIntent.LexIntentConclusionStatementMessage = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentConclusionStatementMessage.property.content">content</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lex_intent#content LexIntent#content}. |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentConclusionStatementMessage.property.contentType">contentType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lex_intent#content_type LexIntent#content_type}. |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentConclusionStatementMessage.property.groupNumber">groupNumber</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lex_intent#group_number LexIntent#group_number}. |

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/aws-cdk.lexIntent.LexIntentConclusionStatementMessage.property.content"></a>

```typescript
public readonly content: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lex_intent#content LexIntent#content}.

---

##### `contentType`<sup>Required</sup> <a name="contentType" id="@cdktf/aws-cdk.lexIntent.LexIntentConclusionStatementMessage.property.contentType"></a>

```typescript
public readonly contentType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lex_intent#content_type LexIntent#content_type}.

---

##### `groupNumber`<sup>Optional</sup> <a name="groupNumber" id="@cdktf/aws-cdk.lexIntent.LexIntentConclusionStatementMessage.property.groupNumber"></a>

```typescript
public readonly groupNumber: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lex_intent#group_number LexIntent#group_number}.

---

### LexIntentConfig <a name="LexIntentConfig" id="@cdktf/aws-cdk.lexIntent.LexIntentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.lexIntent.LexIntentConfig.Initializer"></a>

```typescript
import { lexIntent } from '@cdktf/aws-cdk'

const lexIntentConfig: lexIntent.LexIntentConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentConfig.property.fulfillmentActivity">fulfillmentActivity</a></code> | <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentFulfillmentActivity">LexIntentFulfillmentActivity</a></code> | fulfillment_activity block. |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lex_intent#name LexIntent#name}. |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentConfig.property.conclusionStatement">conclusionStatement</a></code> | <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentConclusionStatement">LexIntentConclusionStatement</a></code> | conclusion_statement block. |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentConfig.property.confirmationPrompt">confirmationPrompt</a></code> | <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentConfirmationPrompt">LexIntentConfirmationPrompt</a></code> | confirmation_prompt block. |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentConfig.property.createVersion">createVersion</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lex_intent#create_version LexIntent#create_version}. |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lex_intent#description LexIntent#description}. |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentConfig.property.dialogCodeHook">dialogCodeHook</a></code> | <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentDialogCodeHook">LexIntentDialogCodeHook</a></code> | dialog_code_hook block. |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentConfig.property.followUpPrompt">followUpPrompt</a></code> | <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPrompt">LexIntentFollowUpPrompt</a></code> | follow_up_prompt block. |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lex_intent#id LexIntent#id}. |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentConfig.property.parentIntentSignature">parentIntentSignature</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lex_intent#parent_intent_signature LexIntent#parent_intent_signature}. |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentConfig.property.rejectionStatement">rejectionStatement</a></code> | <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentRejectionStatement">LexIntentRejectionStatement</a></code> | rejection_statement block. |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentConfig.property.sampleUtterances">sampleUtterances</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lex_intent#sample_utterances LexIntent#sample_utterances}. |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentConfig.property.slot">slot</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.lexIntent.LexIntentSlot">LexIntentSlot</a>[]</code> | slot block. |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentTimeouts">LexIntentTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.lexIntent.LexIntentConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.lexIntent.LexIntentConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.lexIntent.LexIntentConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.lexIntent.LexIntentConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.lexIntent.LexIntentConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.lexIntent.LexIntentConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.lexIntent.LexIntentConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `fulfillmentActivity`<sup>Required</sup> <a name="fulfillmentActivity" id="@cdktf/aws-cdk.lexIntent.LexIntentConfig.property.fulfillmentActivity"></a>

```typescript
public readonly fulfillmentActivity: LexIntentFulfillmentActivity;
```

- *Type:* <a href="#@cdktf/aws-cdk.lexIntent.LexIntentFulfillmentActivity">LexIntentFulfillmentActivity</a>

fulfillment_activity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lex_intent#fulfillment_activity LexIntent#fulfillment_activity}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/aws-cdk.lexIntent.LexIntentConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lex_intent#name LexIntent#name}.

---

##### `conclusionStatement`<sup>Optional</sup> <a name="conclusionStatement" id="@cdktf/aws-cdk.lexIntent.LexIntentConfig.property.conclusionStatement"></a>

```typescript
public readonly conclusionStatement: LexIntentConclusionStatement;
```

- *Type:* <a href="#@cdktf/aws-cdk.lexIntent.LexIntentConclusionStatement">LexIntentConclusionStatement</a>

conclusion_statement block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lex_intent#conclusion_statement LexIntent#conclusion_statement}

---

##### `confirmationPrompt`<sup>Optional</sup> <a name="confirmationPrompt" id="@cdktf/aws-cdk.lexIntent.LexIntentConfig.property.confirmationPrompt"></a>

```typescript
public readonly confirmationPrompt: LexIntentConfirmationPrompt;
```

- *Type:* <a href="#@cdktf/aws-cdk.lexIntent.LexIntentConfirmationPrompt">LexIntentConfirmationPrompt</a>

confirmation_prompt block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lex_intent#confirmation_prompt LexIntent#confirmation_prompt}

---

##### `createVersion`<sup>Optional</sup> <a name="createVersion" id="@cdktf/aws-cdk.lexIntent.LexIntentConfig.property.createVersion"></a>

```typescript
public readonly createVersion: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lex_intent#create_version LexIntent#create_version}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/aws-cdk.lexIntent.LexIntentConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lex_intent#description LexIntent#description}.

---

##### `dialogCodeHook`<sup>Optional</sup> <a name="dialogCodeHook" id="@cdktf/aws-cdk.lexIntent.LexIntentConfig.property.dialogCodeHook"></a>

```typescript
public readonly dialogCodeHook: LexIntentDialogCodeHook;
```

- *Type:* <a href="#@cdktf/aws-cdk.lexIntent.LexIntentDialogCodeHook">LexIntentDialogCodeHook</a>

dialog_code_hook block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lex_intent#dialog_code_hook LexIntent#dialog_code_hook}

---

##### `followUpPrompt`<sup>Optional</sup> <a name="followUpPrompt" id="@cdktf/aws-cdk.lexIntent.LexIntentConfig.property.followUpPrompt"></a>

```typescript
public readonly followUpPrompt: LexIntentFollowUpPrompt;
```

- *Type:* <a href="#@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPrompt">LexIntentFollowUpPrompt</a>

follow_up_prompt block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lex_intent#follow_up_prompt LexIntent#follow_up_prompt}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/aws-cdk.lexIntent.LexIntentConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lex_intent#id LexIntent#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `parentIntentSignature`<sup>Optional</sup> <a name="parentIntentSignature" id="@cdktf/aws-cdk.lexIntent.LexIntentConfig.property.parentIntentSignature"></a>

```typescript
public readonly parentIntentSignature: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lex_intent#parent_intent_signature LexIntent#parent_intent_signature}.

---

##### `rejectionStatement`<sup>Optional</sup> <a name="rejectionStatement" id="@cdktf/aws-cdk.lexIntent.LexIntentConfig.property.rejectionStatement"></a>

```typescript
public readonly rejectionStatement: LexIntentRejectionStatement;
```

- *Type:* <a href="#@cdktf/aws-cdk.lexIntent.LexIntentRejectionStatement">LexIntentRejectionStatement</a>

rejection_statement block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lex_intent#rejection_statement LexIntent#rejection_statement}

---

##### `sampleUtterances`<sup>Optional</sup> <a name="sampleUtterances" id="@cdktf/aws-cdk.lexIntent.LexIntentConfig.property.sampleUtterances"></a>

```typescript
public readonly sampleUtterances: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lex_intent#sample_utterances LexIntent#sample_utterances}.

---

##### `slot`<sup>Optional</sup> <a name="slot" id="@cdktf/aws-cdk.lexIntent.LexIntentConfig.property.slot"></a>

```typescript
public readonly slot: IResolvable | LexIntentSlot[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.lexIntent.LexIntentSlot">LexIntentSlot</a>[]

slot block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lex_intent#slot LexIntent#slot}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/aws-cdk.lexIntent.LexIntentConfig.property.timeouts"></a>

```typescript
public readonly timeouts: LexIntentTimeouts;
```

- *Type:* <a href="#@cdktf/aws-cdk.lexIntent.LexIntentTimeouts">LexIntentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lex_intent#timeouts LexIntent#timeouts}

---

### LexIntentConfirmationPrompt <a name="LexIntentConfirmationPrompt" id="@cdktf/aws-cdk.lexIntent.LexIntentConfirmationPrompt"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.lexIntent.LexIntentConfirmationPrompt.Initializer"></a>

```typescript
import { lexIntent } from '@cdktf/aws-cdk'

const lexIntentConfirmationPrompt: lexIntent.LexIntentConfirmationPrompt = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentConfirmationPrompt.property.maxAttempts">maxAttempts</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lex_intent#max_attempts LexIntent#max_attempts}. |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentConfirmationPrompt.property.message">message</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.lexIntent.LexIntentConfirmationPromptMessage">LexIntentConfirmationPromptMessage</a>[]</code> | message block. |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentConfirmationPrompt.property.responseCard">responseCard</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lex_intent#response_card LexIntent#response_card}. |

---

##### `maxAttempts`<sup>Required</sup> <a name="maxAttempts" id="@cdktf/aws-cdk.lexIntent.LexIntentConfirmationPrompt.property.maxAttempts"></a>

```typescript
public readonly maxAttempts: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lex_intent#max_attempts LexIntent#max_attempts}.

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/aws-cdk.lexIntent.LexIntentConfirmationPrompt.property.message"></a>

```typescript
public readonly message: IResolvable | LexIntentConfirmationPromptMessage[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.lexIntent.LexIntentConfirmationPromptMessage">LexIntentConfirmationPromptMessage</a>[]

message block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lex_intent#message LexIntent#message}

---

##### `responseCard`<sup>Optional</sup> <a name="responseCard" id="@cdktf/aws-cdk.lexIntent.LexIntentConfirmationPrompt.property.responseCard"></a>

```typescript
public readonly responseCard: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lex_intent#response_card LexIntent#response_card}.

---

### LexIntentConfirmationPromptMessage <a name="LexIntentConfirmationPromptMessage" id="@cdktf/aws-cdk.lexIntent.LexIntentConfirmationPromptMessage"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.lexIntent.LexIntentConfirmationPromptMessage.Initializer"></a>

```typescript
import { lexIntent } from '@cdktf/aws-cdk'

const lexIntentConfirmationPromptMessage: lexIntent.LexIntentConfirmationPromptMessage = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentConfirmationPromptMessage.property.content">content</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lex_intent#content LexIntent#content}. |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentConfirmationPromptMessage.property.contentType">contentType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lex_intent#content_type LexIntent#content_type}. |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentConfirmationPromptMessage.property.groupNumber">groupNumber</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lex_intent#group_number LexIntent#group_number}. |

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/aws-cdk.lexIntent.LexIntentConfirmationPromptMessage.property.content"></a>

```typescript
public readonly content: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lex_intent#content LexIntent#content}.

---

##### `contentType`<sup>Required</sup> <a name="contentType" id="@cdktf/aws-cdk.lexIntent.LexIntentConfirmationPromptMessage.property.contentType"></a>

```typescript
public readonly contentType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lex_intent#content_type LexIntent#content_type}.

---

##### `groupNumber`<sup>Optional</sup> <a name="groupNumber" id="@cdktf/aws-cdk.lexIntent.LexIntentConfirmationPromptMessage.property.groupNumber"></a>

```typescript
public readonly groupNumber: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lex_intent#group_number LexIntent#group_number}.

---

### LexIntentDialogCodeHook <a name="LexIntentDialogCodeHook" id="@cdktf/aws-cdk.lexIntent.LexIntentDialogCodeHook"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.lexIntent.LexIntentDialogCodeHook.Initializer"></a>

```typescript
import { lexIntent } from '@cdktf/aws-cdk'

const lexIntentDialogCodeHook: lexIntent.LexIntentDialogCodeHook = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentDialogCodeHook.property.messageVersion">messageVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lex_intent#message_version LexIntent#message_version}. |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentDialogCodeHook.property.uri">uri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lex_intent#uri LexIntent#uri}. |

---

##### `messageVersion`<sup>Required</sup> <a name="messageVersion" id="@cdktf/aws-cdk.lexIntent.LexIntentDialogCodeHook.property.messageVersion"></a>

```typescript
public readonly messageVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lex_intent#message_version LexIntent#message_version}.

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/aws-cdk.lexIntent.LexIntentDialogCodeHook.property.uri"></a>

```typescript
public readonly uri: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lex_intent#uri LexIntent#uri}.

---

### LexIntentFollowUpPrompt <a name="LexIntentFollowUpPrompt" id="@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPrompt"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPrompt.Initializer"></a>

```typescript
import { lexIntent } from '@cdktf/aws-cdk'

const lexIntentFollowUpPrompt: lexIntent.LexIntentFollowUpPrompt = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPrompt.property.prompt">prompt</a></code> | <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptPrompt">LexIntentFollowUpPromptPrompt</a></code> | prompt block. |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPrompt.property.rejectionStatement">rejectionStatement</a></code> | <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptRejectionStatement">LexIntentFollowUpPromptRejectionStatement</a></code> | rejection_statement block. |

---

##### `prompt`<sup>Required</sup> <a name="prompt" id="@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPrompt.property.prompt"></a>

```typescript
public readonly prompt: LexIntentFollowUpPromptPrompt;
```

- *Type:* <a href="#@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptPrompt">LexIntentFollowUpPromptPrompt</a>

prompt block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lex_intent#prompt LexIntent#prompt}

---

##### `rejectionStatement`<sup>Required</sup> <a name="rejectionStatement" id="@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPrompt.property.rejectionStatement"></a>

```typescript
public readonly rejectionStatement: LexIntentFollowUpPromptRejectionStatement;
```

- *Type:* <a href="#@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptRejectionStatement">LexIntentFollowUpPromptRejectionStatement</a>

rejection_statement block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lex_intent#rejection_statement LexIntent#rejection_statement}

---

### LexIntentFollowUpPromptPrompt <a name="LexIntentFollowUpPromptPrompt" id="@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptPrompt"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptPrompt.Initializer"></a>

```typescript
import { lexIntent } from '@cdktf/aws-cdk'

const lexIntentFollowUpPromptPrompt: lexIntent.LexIntentFollowUpPromptPrompt = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptPrompt.property.maxAttempts">maxAttempts</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lex_intent#max_attempts LexIntent#max_attempts}. |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptPrompt.property.message">message</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptPromptMessage">LexIntentFollowUpPromptPromptMessage</a>[]</code> | message block. |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptPrompt.property.responseCard">responseCard</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lex_intent#response_card LexIntent#response_card}. |

---

##### `maxAttempts`<sup>Required</sup> <a name="maxAttempts" id="@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptPrompt.property.maxAttempts"></a>

```typescript
public readonly maxAttempts: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lex_intent#max_attempts LexIntent#max_attempts}.

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptPrompt.property.message"></a>

```typescript
public readonly message: IResolvable | LexIntentFollowUpPromptPromptMessage[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptPromptMessage">LexIntentFollowUpPromptPromptMessage</a>[]

message block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lex_intent#message LexIntent#message}

---

##### `responseCard`<sup>Optional</sup> <a name="responseCard" id="@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptPrompt.property.responseCard"></a>

```typescript
public readonly responseCard: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lex_intent#response_card LexIntent#response_card}.

---

### LexIntentFollowUpPromptPromptMessage <a name="LexIntentFollowUpPromptPromptMessage" id="@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptPromptMessage"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptPromptMessage.Initializer"></a>

```typescript
import { lexIntent } from '@cdktf/aws-cdk'

const lexIntentFollowUpPromptPromptMessage: lexIntent.LexIntentFollowUpPromptPromptMessage = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptPromptMessage.property.content">content</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lex_intent#content LexIntent#content}. |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptPromptMessage.property.contentType">contentType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lex_intent#content_type LexIntent#content_type}. |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptPromptMessage.property.groupNumber">groupNumber</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lex_intent#group_number LexIntent#group_number}. |

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptPromptMessage.property.content"></a>

```typescript
public readonly content: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lex_intent#content LexIntent#content}.

---

##### `contentType`<sup>Required</sup> <a name="contentType" id="@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptPromptMessage.property.contentType"></a>

```typescript
public readonly contentType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lex_intent#content_type LexIntent#content_type}.

---

##### `groupNumber`<sup>Optional</sup> <a name="groupNumber" id="@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptPromptMessage.property.groupNumber"></a>

```typescript
public readonly groupNumber: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lex_intent#group_number LexIntent#group_number}.

---

### LexIntentFollowUpPromptRejectionStatement <a name="LexIntentFollowUpPromptRejectionStatement" id="@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptRejectionStatement"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptRejectionStatement.Initializer"></a>

```typescript
import { lexIntent } from '@cdktf/aws-cdk'

const lexIntentFollowUpPromptRejectionStatement: lexIntent.LexIntentFollowUpPromptRejectionStatement = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptRejectionStatement.property.message">message</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptRejectionStatementMessage">LexIntentFollowUpPromptRejectionStatementMessage</a>[]</code> | message block. |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptRejectionStatement.property.responseCard">responseCard</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lex_intent#response_card LexIntent#response_card}. |

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptRejectionStatement.property.message"></a>

```typescript
public readonly message: IResolvable | LexIntentFollowUpPromptRejectionStatementMessage[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptRejectionStatementMessage">LexIntentFollowUpPromptRejectionStatementMessage</a>[]

message block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lex_intent#message LexIntent#message}

---

##### `responseCard`<sup>Optional</sup> <a name="responseCard" id="@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptRejectionStatement.property.responseCard"></a>

```typescript
public readonly responseCard: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lex_intent#response_card LexIntent#response_card}.

---

### LexIntentFollowUpPromptRejectionStatementMessage <a name="LexIntentFollowUpPromptRejectionStatementMessage" id="@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptRejectionStatementMessage"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptRejectionStatementMessage.Initializer"></a>

```typescript
import { lexIntent } from '@cdktf/aws-cdk'

const lexIntentFollowUpPromptRejectionStatementMessage: lexIntent.LexIntentFollowUpPromptRejectionStatementMessage = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptRejectionStatementMessage.property.content">content</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lex_intent#content LexIntent#content}. |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptRejectionStatementMessage.property.contentType">contentType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lex_intent#content_type LexIntent#content_type}. |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptRejectionStatementMessage.property.groupNumber">groupNumber</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lex_intent#group_number LexIntent#group_number}. |

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptRejectionStatementMessage.property.content"></a>

```typescript
public readonly content: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lex_intent#content LexIntent#content}.

---

##### `contentType`<sup>Required</sup> <a name="contentType" id="@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptRejectionStatementMessage.property.contentType"></a>

```typescript
public readonly contentType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lex_intent#content_type LexIntent#content_type}.

---

##### `groupNumber`<sup>Optional</sup> <a name="groupNumber" id="@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptRejectionStatementMessage.property.groupNumber"></a>

```typescript
public readonly groupNumber: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lex_intent#group_number LexIntent#group_number}.

---

### LexIntentFulfillmentActivity <a name="LexIntentFulfillmentActivity" id="@cdktf/aws-cdk.lexIntent.LexIntentFulfillmentActivity"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.lexIntent.LexIntentFulfillmentActivity.Initializer"></a>

```typescript
import { lexIntent } from '@cdktf/aws-cdk'

const lexIntentFulfillmentActivity: lexIntent.LexIntentFulfillmentActivity = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentFulfillmentActivity.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lex_intent#type LexIntent#type}. |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentFulfillmentActivity.property.codeHook">codeHook</a></code> | <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentFulfillmentActivityCodeHook">LexIntentFulfillmentActivityCodeHook</a></code> | code_hook block. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/aws-cdk.lexIntent.LexIntentFulfillmentActivity.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lex_intent#type LexIntent#type}.

---

##### `codeHook`<sup>Optional</sup> <a name="codeHook" id="@cdktf/aws-cdk.lexIntent.LexIntentFulfillmentActivity.property.codeHook"></a>

```typescript
public readonly codeHook: LexIntentFulfillmentActivityCodeHook;
```

- *Type:* <a href="#@cdktf/aws-cdk.lexIntent.LexIntentFulfillmentActivityCodeHook">LexIntentFulfillmentActivityCodeHook</a>

code_hook block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lex_intent#code_hook LexIntent#code_hook}

---

### LexIntentFulfillmentActivityCodeHook <a name="LexIntentFulfillmentActivityCodeHook" id="@cdktf/aws-cdk.lexIntent.LexIntentFulfillmentActivityCodeHook"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.lexIntent.LexIntentFulfillmentActivityCodeHook.Initializer"></a>

```typescript
import { lexIntent } from '@cdktf/aws-cdk'

const lexIntentFulfillmentActivityCodeHook: lexIntent.LexIntentFulfillmentActivityCodeHook = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentFulfillmentActivityCodeHook.property.messageVersion">messageVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lex_intent#message_version LexIntent#message_version}. |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentFulfillmentActivityCodeHook.property.uri">uri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lex_intent#uri LexIntent#uri}. |

---

##### `messageVersion`<sup>Required</sup> <a name="messageVersion" id="@cdktf/aws-cdk.lexIntent.LexIntentFulfillmentActivityCodeHook.property.messageVersion"></a>

```typescript
public readonly messageVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lex_intent#message_version LexIntent#message_version}.

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/aws-cdk.lexIntent.LexIntentFulfillmentActivityCodeHook.property.uri"></a>

```typescript
public readonly uri: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lex_intent#uri LexIntent#uri}.

---

### LexIntentRejectionStatement <a name="LexIntentRejectionStatement" id="@cdktf/aws-cdk.lexIntent.LexIntentRejectionStatement"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.lexIntent.LexIntentRejectionStatement.Initializer"></a>

```typescript
import { lexIntent } from '@cdktf/aws-cdk'

const lexIntentRejectionStatement: lexIntent.LexIntentRejectionStatement = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentRejectionStatement.property.message">message</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.lexIntent.LexIntentRejectionStatementMessage">LexIntentRejectionStatementMessage</a>[]</code> | message block. |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentRejectionStatement.property.responseCard">responseCard</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lex_intent#response_card LexIntent#response_card}. |

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/aws-cdk.lexIntent.LexIntentRejectionStatement.property.message"></a>

```typescript
public readonly message: IResolvable | LexIntentRejectionStatementMessage[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.lexIntent.LexIntentRejectionStatementMessage">LexIntentRejectionStatementMessage</a>[]

message block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lex_intent#message LexIntent#message}

---

##### `responseCard`<sup>Optional</sup> <a name="responseCard" id="@cdktf/aws-cdk.lexIntent.LexIntentRejectionStatement.property.responseCard"></a>

```typescript
public readonly responseCard: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lex_intent#response_card LexIntent#response_card}.

---

### LexIntentRejectionStatementMessage <a name="LexIntentRejectionStatementMessage" id="@cdktf/aws-cdk.lexIntent.LexIntentRejectionStatementMessage"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.lexIntent.LexIntentRejectionStatementMessage.Initializer"></a>

```typescript
import { lexIntent } from '@cdktf/aws-cdk'

const lexIntentRejectionStatementMessage: lexIntent.LexIntentRejectionStatementMessage = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentRejectionStatementMessage.property.content">content</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lex_intent#content LexIntent#content}. |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentRejectionStatementMessage.property.contentType">contentType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lex_intent#content_type LexIntent#content_type}. |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentRejectionStatementMessage.property.groupNumber">groupNumber</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lex_intent#group_number LexIntent#group_number}. |

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/aws-cdk.lexIntent.LexIntentRejectionStatementMessage.property.content"></a>

```typescript
public readonly content: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lex_intent#content LexIntent#content}.

---

##### `contentType`<sup>Required</sup> <a name="contentType" id="@cdktf/aws-cdk.lexIntent.LexIntentRejectionStatementMessage.property.contentType"></a>

```typescript
public readonly contentType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lex_intent#content_type LexIntent#content_type}.

---

##### `groupNumber`<sup>Optional</sup> <a name="groupNumber" id="@cdktf/aws-cdk.lexIntent.LexIntentRejectionStatementMessage.property.groupNumber"></a>

```typescript
public readonly groupNumber: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lex_intent#group_number LexIntent#group_number}.

---

### LexIntentSlot <a name="LexIntentSlot" id="@cdktf/aws-cdk.lexIntent.LexIntentSlot"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.lexIntent.LexIntentSlot.Initializer"></a>

```typescript
import { lexIntent } from '@cdktf/aws-cdk'

const lexIntentSlot: lexIntent.LexIntentSlot = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentSlot.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lex_intent#name LexIntent#name}. |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentSlot.property.slotConstraint">slotConstraint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lex_intent#slot_constraint LexIntent#slot_constraint}. |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentSlot.property.slotType">slotType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lex_intent#slot_type LexIntent#slot_type}. |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentSlot.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lex_intent#description LexIntent#description}. |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentSlot.property.priority">priority</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lex_intent#priority LexIntent#priority}. |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentSlot.property.responseCard">responseCard</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lex_intent#response_card LexIntent#response_card}. |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentSlot.property.sampleUtterances">sampleUtterances</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lex_intent#sample_utterances LexIntent#sample_utterances}. |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentSlot.property.slotTypeVersion">slotTypeVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lex_intent#slot_type_version LexIntent#slot_type_version}. |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentSlot.property.valueElicitationPrompt">valueElicitationPrompt</a></code> | <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentSlotValueElicitationPrompt">LexIntentSlotValueElicitationPrompt</a></code> | value_elicitation_prompt block. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/aws-cdk.lexIntent.LexIntentSlot.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lex_intent#name LexIntent#name}.

---

##### `slotConstraint`<sup>Required</sup> <a name="slotConstraint" id="@cdktf/aws-cdk.lexIntent.LexIntentSlot.property.slotConstraint"></a>

```typescript
public readonly slotConstraint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lex_intent#slot_constraint LexIntent#slot_constraint}.

---

##### `slotType`<sup>Required</sup> <a name="slotType" id="@cdktf/aws-cdk.lexIntent.LexIntentSlot.property.slotType"></a>

```typescript
public readonly slotType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lex_intent#slot_type LexIntent#slot_type}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/aws-cdk.lexIntent.LexIntentSlot.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lex_intent#description LexIntent#description}.

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/aws-cdk.lexIntent.LexIntentSlot.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lex_intent#priority LexIntent#priority}.

---

##### `responseCard`<sup>Optional</sup> <a name="responseCard" id="@cdktf/aws-cdk.lexIntent.LexIntentSlot.property.responseCard"></a>

```typescript
public readonly responseCard: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lex_intent#response_card LexIntent#response_card}.

---

##### `sampleUtterances`<sup>Optional</sup> <a name="sampleUtterances" id="@cdktf/aws-cdk.lexIntent.LexIntentSlot.property.sampleUtterances"></a>

```typescript
public readonly sampleUtterances: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lex_intent#sample_utterances LexIntent#sample_utterances}.

---

##### `slotTypeVersion`<sup>Optional</sup> <a name="slotTypeVersion" id="@cdktf/aws-cdk.lexIntent.LexIntentSlot.property.slotTypeVersion"></a>

```typescript
public readonly slotTypeVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lex_intent#slot_type_version LexIntent#slot_type_version}.

---

##### `valueElicitationPrompt`<sup>Optional</sup> <a name="valueElicitationPrompt" id="@cdktf/aws-cdk.lexIntent.LexIntentSlot.property.valueElicitationPrompt"></a>

```typescript
public readonly valueElicitationPrompt: LexIntentSlotValueElicitationPrompt;
```

- *Type:* <a href="#@cdktf/aws-cdk.lexIntent.LexIntentSlotValueElicitationPrompt">LexIntentSlotValueElicitationPrompt</a>

value_elicitation_prompt block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lex_intent#value_elicitation_prompt LexIntent#value_elicitation_prompt}

---

### LexIntentSlotValueElicitationPrompt <a name="LexIntentSlotValueElicitationPrompt" id="@cdktf/aws-cdk.lexIntent.LexIntentSlotValueElicitationPrompt"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.lexIntent.LexIntentSlotValueElicitationPrompt.Initializer"></a>

```typescript
import { lexIntent } from '@cdktf/aws-cdk'

const lexIntentSlotValueElicitationPrompt: lexIntent.LexIntentSlotValueElicitationPrompt = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentSlotValueElicitationPrompt.property.maxAttempts">maxAttempts</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lex_intent#max_attempts LexIntent#max_attempts}. |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentSlotValueElicitationPrompt.property.message">message</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.lexIntent.LexIntentSlotValueElicitationPromptMessage">LexIntentSlotValueElicitationPromptMessage</a>[]</code> | message block. |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentSlotValueElicitationPrompt.property.responseCard">responseCard</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lex_intent#response_card LexIntent#response_card}. |

---

##### `maxAttempts`<sup>Required</sup> <a name="maxAttempts" id="@cdktf/aws-cdk.lexIntent.LexIntentSlotValueElicitationPrompt.property.maxAttempts"></a>

```typescript
public readonly maxAttempts: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lex_intent#max_attempts LexIntent#max_attempts}.

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/aws-cdk.lexIntent.LexIntentSlotValueElicitationPrompt.property.message"></a>

```typescript
public readonly message: IResolvable | LexIntentSlotValueElicitationPromptMessage[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.lexIntent.LexIntentSlotValueElicitationPromptMessage">LexIntentSlotValueElicitationPromptMessage</a>[]

message block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lex_intent#message LexIntent#message}

---

##### `responseCard`<sup>Optional</sup> <a name="responseCard" id="@cdktf/aws-cdk.lexIntent.LexIntentSlotValueElicitationPrompt.property.responseCard"></a>

```typescript
public readonly responseCard: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lex_intent#response_card LexIntent#response_card}.

---

### LexIntentSlotValueElicitationPromptMessage <a name="LexIntentSlotValueElicitationPromptMessage" id="@cdktf/aws-cdk.lexIntent.LexIntentSlotValueElicitationPromptMessage"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.lexIntent.LexIntentSlotValueElicitationPromptMessage.Initializer"></a>

```typescript
import { lexIntent } from '@cdktf/aws-cdk'

const lexIntentSlotValueElicitationPromptMessage: lexIntent.LexIntentSlotValueElicitationPromptMessage = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentSlotValueElicitationPromptMessage.property.content">content</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lex_intent#content LexIntent#content}. |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentSlotValueElicitationPromptMessage.property.contentType">contentType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lex_intent#content_type LexIntent#content_type}. |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentSlotValueElicitationPromptMessage.property.groupNumber">groupNumber</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lex_intent#group_number LexIntent#group_number}. |

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/aws-cdk.lexIntent.LexIntentSlotValueElicitationPromptMessage.property.content"></a>

```typescript
public readonly content: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lex_intent#content LexIntent#content}.

---

##### `contentType`<sup>Required</sup> <a name="contentType" id="@cdktf/aws-cdk.lexIntent.LexIntentSlotValueElicitationPromptMessage.property.contentType"></a>

```typescript
public readonly contentType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lex_intent#content_type LexIntent#content_type}.

---

##### `groupNumber`<sup>Optional</sup> <a name="groupNumber" id="@cdktf/aws-cdk.lexIntent.LexIntentSlotValueElicitationPromptMessage.property.groupNumber"></a>

```typescript
public readonly groupNumber: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lex_intent#group_number LexIntent#group_number}.

---

### LexIntentTimeouts <a name="LexIntentTimeouts" id="@cdktf/aws-cdk.lexIntent.LexIntentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.lexIntent.LexIntentTimeouts.Initializer"></a>

```typescript
import { lexIntent } from '@cdktf/aws-cdk'

const lexIntentTimeouts: lexIntent.LexIntentTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lex_intent#create LexIntent#create}. |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lex_intent#delete LexIntent#delete}. |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lex_intent#update LexIntent#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/aws-cdk.lexIntent.LexIntentTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lex_intent#create LexIntent#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/aws-cdk.lexIntent.LexIntentTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lex_intent#delete LexIntent#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/aws-cdk.lexIntent.LexIntentTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lex_intent#update LexIntent#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### LexIntentConclusionStatementMessageList <a name="LexIntentConclusionStatementMessageList" id="@cdktf/aws-cdk.lexIntent.LexIntentConclusionStatementMessageList"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.lexIntent.LexIntentConclusionStatementMessageList.Initializer"></a>

```typescript
import { lexIntent } from '@cdktf/aws-cdk'

new lexIntent.LexIntentConclusionStatementMessageList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentConclusionStatementMessageList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentConclusionStatementMessageList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentConclusionStatementMessageList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.lexIntent.LexIntentConclusionStatementMessageList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentConclusionStatementMessageList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/aws-cdk.lexIntent.LexIntentConclusionStatementMessageList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentConclusionStatementMessageList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentConclusionStatementMessageList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentConclusionStatementMessageList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentConclusionStatementMessageList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.lexIntent.LexIntentConclusionStatementMessageList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.lexIntent.LexIntentConclusionStatementMessageList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.lexIntent.LexIntentConclusionStatementMessageList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.lexIntent.LexIntentConclusionStatementMessageList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/aws-cdk.lexIntent.LexIntentConclusionStatementMessageList.get"></a>

```typescript
public get(index: number): LexIntentConclusionStatementMessageOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/aws-cdk.lexIntent.LexIntentConclusionStatementMessageList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentConclusionStatementMessageList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentConclusionStatementMessageList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentConclusionStatementMessageList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.lexIntent.LexIntentConclusionStatementMessage">LexIntentConclusionStatementMessage</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.lexIntent.LexIntentConclusionStatementMessageList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.lexIntent.LexIntentConclusionStatementMessageList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.lexIntent.LexIntentConclusionStatementMessageList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LexIntentConclusionStatementMessage[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.lexIntent.LexIntentConclusionStatementMessage">LexIntentConclusionStatementMessage</a>[]

---


### LexIntentConclusionStatementMessageOutputReference <a name="LexIntentConclusionStatementMessageOutputReference" id="@cdktf/aws-cdk.lexIntent.LexIntentConclusionStatementMessageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.lexIntent.LexIntentConclusionStatementMessageOutputReference.Initializer"></a>

```typescript
import { lexIntent } from '@cdktf/aws-cdk'

new lexIntent.LexIntentConclusionStatementMessageOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentConclusionStatementMessageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentConclusionStatementMessageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentConclusionStatementMessageOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentConclusionStatementMessageOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.lexIntent.LexIntentConclusionStatementMessageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentConclusionStatementMessageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/aws-cdk.lexIntent.LexIntentConclusionStatementMessageOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/aws-cdk.lexIntent.LexIntentConclusionStatementMessageOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentConclusionStatementMessageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentConclusionStatementMessageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentConclusionStatementMessageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentConclusionStatementMessageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentConclusionStatementMessageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentConclusionStatementMessageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentConclusionStatementMessageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentConclusionStatementMessageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentConclusionStatementMessageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentConclusionStatementMessageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentConclusionStatementMessageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentConclusionStatementMessageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentConclusionStatementMessageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentConclusionStatementMessageOutputReference.resetGroupNumber">resetGroupNumber</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.lexIntent.LexIntentConclusionStatementMessageOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentConclusionStatementMessageOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentConclusionStatementMessageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentConclusionStatementMessageOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentConclusionStatementMessageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentConclusionStatementMessageOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentConclusionStatementMessageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentConclusionStatementMessageOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentConclusionStatementMessageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentConclusionStatementMessageOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentConclusionStatementMessageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentConclusionStatementMessageOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentConclusionStatementMessageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentConclusionStatementMessageOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentConclusionStatementMessageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentConclusionStatementMessageOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentConclusionStatementMessageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentConclusionStatementMessageOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentConclusionStatementMessageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentConclusionStatementMessageOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.lexIntent.LexIntentConclusionStatementMessageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.lexIntent.LexIntentConclusionStatementMessageOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.lexIntent.LexIntentConclusionStatementMessageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.lexIntent.LexIntentConclusionStatementMessageOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetGroupNumber` <a name="resetGroupNumber" id="@cdktf/aws-cdk.lexIntent.LexIntentConclusionStatementMessageOutputReference.resetGroupNumber"></a>

```typescript
public resetGroupNumber(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentConclusionStatementMessageOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentConclusionStatementMessageOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentConclusionStatementMessageOutputReference.property.contentInput">contentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentConclusionStatementMessageOutputReference.property.contentTypeInput">contentTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentConclusionStatementMessageOutputReference.property.groupNumberInput">groupNumberInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentConclusionStatementMessageOutputReference.property.content">content</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentConclusionStatementMessageOutputReference.property.contentType">contentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentConclusionStatementMessageOutputReference.property.groupNumber">groupNumber</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentConclusionStatementMessageOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentConclusionStatementMessage">LexIntentConclusionStatementMessage</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.lexIntent.LexIntentConclusionStatementMessageOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.lexIntent.LexIntentConclusionStatementMessageOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `contentInput`<sup>Optional</sup> <a name="contentInput" id="@cdktf/aws-cdk.lexIntent.LexIntentConclusionStatementMessageOutputReference.property.contentInput"></a>

```typescript
public readonly contentInput: string;
```

- *Type:* string

---

##### `contentTypeInput`<sup>Optional</sup> <a name="contentTypeInput" id="@cdktf/aws-cdk.lexIntent.LexIntentConclusionStatementMessageOutputReference.property.contentTypeInput"></a>

```typescript
public readonly contentTypeInput: string;
```

- *Type:* string

---

##### `groupNumberInput`<sup>Optional</sup> <a name="groupNumberInput" id="@cdktf/aws-cdk.lexIntent.LexIntentConclusionStatementMessageOutputReference.property.groupNumberInput"></a>

```typescript
public readonly groupNumberInput: number;
```

- *Type:* number

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/aws-cdk.lexIntent.LexIntentConclusionStatementMessageOutputReference.property.content"></a>

```typescript
public readonly content: string;
```

- *Type:* string

---

##### `contentType`<sup>Required</sup> <a name="contentType" id="@cdktf/aws-cdk.lexIntent.LexIntentConclusionStatementMessageOutputReference.property.contentType"></a>

```typescript
public readonly contentType: string;
```

- *Type:* string

---

##### `groupNumber`<sup>Required</sup> <a name="groupNumber" id="@cdktf/aws-cdk.lexIntent.LexIntentConclusionStatementMessageOutputReference.property.groupNumber"></a>

```typescript
public readonly groupNumber: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.lexIntent.LexIntentConclusionStatementMessageOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LexIntentConclusionStatementMessage | IResolvable;
```

- *Type:* <a href="#@cdktf/aws-cdk.lexIntent.LexIntentConclusionStatementMessage">LexIntentConclusionStatementMessage</a> | cdktf.IResolvable

---


### LexIntentConclusionStatementOutputReference <a name="LexIntentConclusionStatementOutputReference" id="@cdktf/aws-cdk.lexIntent.LexIntentConclusionStatementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.lexIntent.LexIntentConclusionStatementOutputReference.Initializer"></a>

```typescript
import { lexIntent } from '@cdktf/aws-cdk'

new lexIntent.LexIntentConclusionStatementOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentConclusionStatementOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentConclusionStatementOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.lexIntent.LexIntentConclusionStatementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentConclusionStatementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentConclusionStatementOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentConclusionStatementOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentConclusionStatementOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentConclusionStatementOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentConclusionStatementOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentConclusionStatementOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentConclusionStatementOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentConclusionStatementOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentConclusionStatementOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentConclusionStatementOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentConclusionStatementOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentConclusionStatementOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentConclusionStatementOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentConclusionStatementOutputReference.putMessage">putMessage</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentConclusionStatementOutputReference.resetResponseCard">resetResponseCard</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.lexIntent.LexIntentConclusionStatementOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentConclusionStatementOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentConclusionStatementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentConclusionStatementOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentConclusionStatementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentConclusionStatementOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentConclusionStatementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentConclusionStatementOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentConclusionStatementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentConclusionStatementOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentConclusionStatementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentConclusionStatementOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentConclusionStatementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentConclusionStatementOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentConclusionStatementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentConclusionStatementOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentConclusionStatementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentConclusionStatementOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentConclusionStatementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentConclusionStatementOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.lexIntent.LexIntentConclusionStatementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.lexIntent.LexIntentConclusionStatementOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.lexIntent.LexIntentConclusionStatementOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.lexIntent.LexIntentConclusionStatementOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMessage` <a name="putMessage" id="@cdktf/aws-cdk.lexIntent.LexIntentConclusionStatementOutputReference.putMessage"></a>

```typescript
public putMessage(value: IResolvable | LexIntentConclusionStatementMessage[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.lexIntent.LexIntentConclusionStatementOutputReference.putMessage.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.lexIntent.LexIntentConclusionStatementMessage">LexIntentConclusionStatementMessage</a>[]

---

##### `resetResponseCard` <a name="resetResponseCard" id="@cdktf/aws-cdk.lexIntent.LexIntentConclusionStatementOutputReference.resetResponseCard"></a>

```typescript
public resetResponseCard(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentConclusionStatementOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentConclusionStatementOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentConclusionStatementOutputReference.property.message">message</a></code> | <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentConclusionStatementMessageList">LexIntentConclusionStatementMessageList</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentConclusionStatementOutputReference.property.messageInput">messageInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.lexIntent.LexIntentConclusionStatementMessage">LexIntentConclusionStatementMessage</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentConclusionStatementOutputReference.property.responseCardInput">responseCardInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentConclusionStatementOutputReference.property.responseCard">responseCard</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentConclusionStatementOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentConclusionStatement">LexIntentConclusionStatement</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.lexIntent.LexIntentConclusionStatementOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.lexIntent.LexIntentConclusionStatementOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/aws-cdk.lexIntent.LexIntentConclusionStatementOutputReference.property.message"></a>

```typescript
public readonly message: LexIntentConclusionStatementMessageList;
```

- *Type:* <a href="#@cdktf/aws-cdk.lexIntent.LexIntentConclusionStatementMessageList">LexIntentConclusionStatementMessageList</a>

---

##### `messageInput`<sup>Optional</sup> <a name="messageInput" id="@cdktf/aws-cdk.lexIntent.LexIntentConclusionStatementOutputReference.property.messageInput"></a>

```typescript
public readonly messageInput: IResolvable | LexIntentConclusionStatementMessage[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.lexIntent.LexIntentConclusionStatementMessage">LexIntentConclusionStatementMessage</a>[]

---

##### `responseCardInput`<sup>Optional</sup> <a name="responseCardInput" id="@cdktf/aws-cdk.lexIntent.LexIntentConclusionStatementOutputReference.property.responseCardInput"></a>

```typescript
public readonly responseCardInput: string;
```

- *Type:* string

---

##### `responseCard`<sup>Required</sup> <a name="responseCard" id="@cdktf/aws-cdk.lexIntent.LexIntentConclusionStatementOutputReference.property.responseCard"></a>

```typescript
public readonly responseCard: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.lexIntent.LexIntentConclusionStatementOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LexIntentConclusionStatement;
```

- *Type:* <a href="#@cdktf/aws-cdk.lexIntent.LexIntentConclusionStatement">LexIntentConclusionStatement</a>

---


### LexIntentConfirmationPromptMessageList <a name="LexIntentConfirmationPromptMessageList" id="@cdktf/aws-cdk.lexIntent.LexIntentConfirmationPromptMessageList"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.lexIntent.LexIntentConfirmationPromptMessageList.Initializer"></a>

```typescript
import { lexIntent } from '@cdktf/aws-cdk'

new lexIntent.LexIntentConfirmationPromptMessageList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentConfirmationPromptMessageList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentConfirmationPromptMessageList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentConfirmationPromptMessageList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.lexIntent.LexIntentConfirmationPromptMessageList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentConfirmationPromptMessageList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/aws-cdk.lexIntent.LexIntentConfirmationPromptMessageList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentConfirmationPromptMessageList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentConfirmationPromptMessageList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentConfirmationPromptMessageList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentConfirmationPromptMessageList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.lexIntent.LexIntentConfirmationPromptMessageList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.lexIntent.LexIntentConfirmationPromptMessageList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.lexIntent.LexIntentConfirmationPromptMessageList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.lexIntent.LexIntentConfirmationPromptMessageList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/aws-cdk.lexIntent.LexIntentConfirmationPromptMessageList.get"></a>

```typescript
public get(index: number): LexIntentConfirmationPromptMessageOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/aws-cdk.lexIntent.LexIntentConfirmationPromptMessageList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentConfirmationPromptMessageList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentConfirmationPromptMessageList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentConfirmationPromptMessageList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.lexIntent.LexIntentConfirmationPromptMessage">LexIntentConfirmationPromptMessage</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.lexIntent.LexIntentConfirmationPromptMessageList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.lexIntent.LexIntentConfirmationPromptMessageList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.lexIntent.LexIntentConfirmationPromptMessageList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LexIntentConfirmationPromptMessage[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.lexIntent.LexIntentConfirmationPromptMessage">LexIntentConfirmationPromptMessage</a>[]

---


### LexIntentConfirmationPromptMessageOutputReference <a name="LexIntentConfirmationPromptMessageOutputReference" id="@cdktf/aws-cdk.lexIntent.LexIntentConfirmationPromptMessageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.lexIntent.LexIntentConfirmationPromptMessageOutputReference.Initializer"></a>

```typescript
import { lexIntent } from '@cdktf/aws-cdk'

new lexIntent.LexIntentConfirmationPromptMessageOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentConfirmationPromptMessageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentConfirmationPromptMessageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentConfirmationPromptMessageOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentConfirmationPromptMessageOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.lexIntent.LexIntentConfirmationPromptMessageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentConfirmationPromptMessageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/aws-cdk.lexIntent.LexIntentConfirmationPromptMessageOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/aws-cdk.lexIntent.LexIntentConfirmationPromptMessageOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentConfirmationPromptMessageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentConfirmationPromptMessageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentConfirmationPromptMessageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentConfirmationPromptMessageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentConfirmationPromptMessageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentConfirmationPromptMessageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentConfirmationPromptMessageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentConfirmationPromptMessageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentConfirmationPromptMessageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentConfirmationPromptMessageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentConfirmationPromptMessageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentConfirmationPromptMessageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentConfirmationPromptMessageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentConfirmationPromptMessageOutputReference.resetGroupNumber">resetGroupNumber</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.lexIntent.LexIntentConfirmationPromptMessageOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentConfirmationPromptMessageOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentConfirmationPromptMessageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentConfirmationPromptMessageOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentConfirmationPromptMessageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentConfirmationPromptMessageOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentConfirmationPromptMessageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentConfirmationPromptMessageOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentConfirmationPromptMessageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentConfirmationPromptMessageOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentConfirmationPromptMessageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentConfirmationPromptMessageOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentConfirmationPromptMessageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentConfirmationPromptMessageOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentConfirmationPromptMessageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentConfirmationPromptMessageOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentConfirmationPromptMessageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentConfirmationPromptMessageOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentConfirmationPromptMessageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentConfirmationPromptMessageOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.lexIntent.LexIntentConfirmationPromptMessageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.lexIntent.LexIntentConfirmationPromptMessageOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.lexIntent.LexIntentConfirmationPromptMessageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.lexIntent.LexIntentConfirmationPromptMessageOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetGroupNumber` <a name="resetGroupNumber" id="@cdktf/aws-cdk.lexIntent.LexIntentConfirmationPromptMessageOutputReference.resetGroupNumber"></a>

```typescript
public resetGroupNumber(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentConfirmationPromptMessageOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentConfirmationPromptMessageOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentConfirmationPromptMessageOutputReference.property.contentInput">contentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentConfirmationPromptMessageOutputReference.property.contentTypeInput">contentTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentConfirmationPromptMessageOutputReference.property.groupNumberInput">groupNumberInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentConfirmationPromptMessageOutputReference.property.content">content</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentConfirmationPromptMessageOutputReference.property.contentType">contentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentConfirmationPromptMessageOutputReference.property.groupNumber">groupNumber</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentConfirmationPromptMessageOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentConfirmationPromptMessage">LexIntentConfirmationPromptMessage</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.lexIntent.LexIntentConfirmationPromptMessageOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.lexIntent.LexIntentConfirmationPromptMessageOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `contentInput`<sup>Optional</sup> <a name="contentInput" id="@cdktf/aws-cdk.lexIntent.LexIntentConfirmationPromptMessageOutputReference.property.contentInput"></a>

```typescript
public readonly contentInput: string;
```

- *Type:* string

---

##### `contentTypeInput`<sup>Optional</sup> <a name="contentTypeInput" id="@cdktf/aws-cdk.lexIntent.LexIntentConfirmationPromptMessageOutputReference.property.contentTypeInput"></a>

```typescript
public readonly contentTypeInput: string;
```

- *Type:* string

---

##### `groupNumberInput`<sup>Optional</sup> <a name="groupNumberInput" id="@cdktf/aws-cdk.lexIntent.LexIntentConfirmationPromptMessageOutputReference.property.groupNumberInput"></a>

```typescript
public readonly groupNumberInput: number;
```

- *Type:* number

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/aws-cdk.lexIntent.LexIntentConfirmationPromptMessageOutputReference.property.content"></a>

```typescript
public readonly content: string;
```

- *Type:* string

---

##### `contentType`<sup>Required</sup> <a name="contentType" id="@cdktf/aws-cdk.lexIntent.LexIntentConfirmationPromptMessageOutputReference.property.contentType"></a>

```typescript
public readonly contentType: string;
```

- *Type:* string

---

##### `groupNumber`<sup>Required</sup> <a name="groupNumber" id="@cdktf/aws-cdk.lexIntent.LexIntentConfirmationPromptMessageOutputReference.property.groupNumber"></a>

```typescript
public readonly groupNumber: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.lexIntent.LexIntentConfirmationPromptMessageOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LexIntentConfirmationPromptMessage | IResolvable;
```

- *Type:* <a href="#@cdktf/aws-cdk.lexIntent.LexIntentConfirmationPromptMessage">LexIntentConfirmationPromptMessage</a> | cdktf.IResolvable

---


### LexIntentConfirmationPromptOutputReference <a name="LexIntentConfirmationPromptOutputReference" id="@cdktf/aws-cdk.lexIntent.LexIntentConfirmationPromptOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.lexIntent.LexIntentConfirmationPromptOutputReference.Initializer"></a>

```typescript
import { lexIntent } from '@cdktf/aws-cdk'

new lexIntent.LexIntentConfirmationPromptOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentConfirmationPromptOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentConfirmationPromptOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.lexIntent.LexIntentConfirmationPromptOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentConfirmationPromptOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentConfirmationPromptOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentConfirmationPromptOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentConfirmationPromptOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentConfirmationPromptOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentConfirmationPromptOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentConfirmationPromptOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentConfirmationPromptOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentConfirmationPromptOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentConfirmationPromptOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentConfirmationPromptOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentConfirmationPromptOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentConfirmationPromptOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentConfirmationPromptOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentConfirmationPromptOutputReference.putMessage">putMessage</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentConfirmationPromptOutputReference.resetResponseCard">resetResponseCard</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.lexIntent.LexIntentConfirmationPromptOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentConfirmationPromptOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentConfirmationPromptOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentConfirmationPromptOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentConfirmationPromptOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentConfirmationPromptOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentConfirmationPromptOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentConfirmationPromptOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentConfirmationPromptOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentConfirmationPromptOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentConfirmationPromptOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentConfirmationPromptOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentConfirmationPromptOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentConfirmationPromptOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentConfirmationPromptOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentConfirmationPromptOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentConfirmationPromptOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentConfirmationPromptOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentConfirmationPromptOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentConfirmationPromptOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.lexIntent.LexIntentConfirmationPromptOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.lexIntent.LexIntentConfirmationPromptOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.lexIntent.LexIntentConfirmationPromptOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.lexIntent.LexIntentConfirmationPromptOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMessage` <a name="putMessage" id="@cdktf/aws-cdk.lexIntent.LexIntentConfirmationPromptOutputReference.putMessage"></a>

```typescript
public putMessage(value: IResolvable | LexIntentConfirmationPromptMessage[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.lexIntent.LexIntentConfirmationPromptOutputReference.putMessage.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.lexIntent.LexIntentConfirmationPromptMessage">LexIntentConfirmationPromptMessage</a>[]

---

##### `resetResponseCard` <a name="resetResponseCard" id="@cdktf/aws-cdk.lexIntent.LexIntentConfirmationPromptOutputReference.resetResponseCard"></a>

```typescript
public resetResponseCard(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentConfirmationPromptOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentConfirmationPromptOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentConfirmationPromptOutputReference.property.message">message</a></code> | <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentConfirmationPromptMessageList">LexIntentConfirmationPromptMessageList</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentConfirmationPromptOutputReference.property.maxAttemptsInput">maxAttemptsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentConfirmationPromptOutputReference.property.messageInput">messageInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.lexIntent.LexIntentConfirmationPromptMessage">LexIntentConfirmationPromptMessage</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentConfirmationPromptOutputReference.property.responseCardInput">responseCardInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentConfirmationPromptOutputReference.property.maxAttempts">maxAttempts</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentConfirmationPromptOutputReference.property.responseCard">responseCard</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentConfirmationPromptOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentConfirmationPrompt">LexIntentConfirmationPrompt</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.lexIntent.LexIntentConfirmationPromptOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.lexIntent.LexIntentConfirmationPromptOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/aws-cdk.lexIntent.LexIntentConfirmationPromptOutputReference.property.message"></a>

```typescript
public readonly message: LexIntentConfirmationPromptMessageList;
```

- *Type:* <a href="#@cdktf/aws-cdk.lexIntent.LexIntentConfirmationPromptMessageList">LexIntentConfirmationPromptMessageList</a>

---

##### `maxAttemptsInput`<sup>Optional</sup> <a name="maxAttemptsInput" id="@cdktf/aws-cdk.lexIntent.LexIntentConfirmationPromptOutputReference.property.maxAttemptsInput"></a>

```typescript
public readonly maxAttemptsInput: number;
```

- *Type:* number

---

##### `messageInput`<sup>Optional</sup> <a name="messageInput" id="@cdktf/aws-cdk.lexIntent.LexIntentConfirmationPromptOutputReference.property.messageInput"></a>

```typescript
public readonly messageInput: IResolvable | LexIntentConfirmationPromptMessage[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.lexIntent.LexIntentConfirmationPromptMessage">LexIntentConfirmationPromptMessage</a>[]

---

##### `responseCardInput`<sup>Optional</sup> <a name="responseCardInput" id="@cdktf/aws-cdk.lexIntent.LexIntentConfirmationPromptOutputReference.property.responseCardInput"></a>

```typescript
public readonly responseCardInput: string;
```

- *Type:* string

---

##### `maxAttempts`<sup>Required</sup> <a name="maxAttempts" id="@cdktf/aws-cdk.lexIntent.LexIntentConfirmationPromptOutputReference.property.maxAttempts"></a>

```typescript
public readonly maxAttempts: number;
```

- *Type:* number

---

##### `responseCard`<sup>Required</sup> <a name="responseCard" id="@cdktf/aws-cdk.lexIntent.LexIntentConfirmationPromptOutputReference.property.responseCard"></a>

```typescript
public readonly responseCard: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.lexIntent.LexIntentConfirmationPromptOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LexIntentConfirmationPrompt;
```

- *Type:* <a href="#@cdktf/aws-cdk.lexIntent.LexIntentConfirmationPrompt">LexIntentConfirmationPrompt</a>

---


### LexIntentDialogCodeHookOutputReference <a name="LexIntentDialogCodeHookOutputReference" id="@cdktf/aws-cdk.lexIntent.LexIntentDialogCodeHookOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.lexIntent.LexIntentDialogCodeHookOutputReference.Initializer"></a>

```typescript
import { lexIntent } from '@cdktf/aws-cdk'

new lexIntent.LexIntentDialogCodeHookOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentDialogCodeHookOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentDialogCodeHookOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.lexIntent.LexIntentDialogCodeHookOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentDialogCodeHookOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentDialogCodeHookOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentDialogCodeHookOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentDialogCodeHookOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentDialogCodeHookOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentDialogCodeHookOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentDialogCodeHookOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentDialogCodeHookOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentDialogCodeHookOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentDialogCodeHookOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentDialogCodeHookOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentDialogCodeHookOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentDialogCodeHookOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentDialogCodeHookOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.lexIntent.LexIntentDialogCodeHookOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentDialogCodeHookOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentDialogCodeHookOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentDialogCodeHookOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentDialogCodeHookOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentDialogCodeHookOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentDialogCodeHookOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentDialogCodeHookOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentDialogCodeHookOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentDialogCodeHookOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentDialogCodeHookOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentDialogCodeHookOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentDialogCodeHookOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentDialogCodeHookOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentDialogCodeHookOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentDialogCodeHookOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentDialogCodeHookOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentDialogCodeHookOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentDialogCodeHookOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentDialogCodeHookOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.lexIntent.LexIntentDialogCodeHookOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.lexIntent.LexIntentDialogCodeHookOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.lexIntent.LexIntentDialogCodeHookOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.lexIntent.LexIntentDialogCodeHookOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentDialogCodeHookOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentDialogCodeHookOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentDialogCodeHookOutputReference.property.messageVersionInput">messageVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentDialogCodeHookOutputReference.property.uriInput">uriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentDialogCodeHookOutputReference.property.messageVersion">messageVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentDialogCodeHookOutputReference.property.uri">uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentDialogCodeHookOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentDialogCodeHook">LexIntentDialogCodeHook</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.lexIntent.LexIntentDialogCodeHookOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.lexIntent.LexIntentDialogCodeHookOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `messageVersionInput`<sup>Optional</sup> <a name="messageVersionInput" id="@cdktf/aws-cdk.lexIntent.LexIntentDialogCodeHookOutputReference.property.messageVersionInput"></a>

```typescript
public readonly messageVersionInput: string;
```

- *Type:* string

---

##### `uriInput`<sup>Optional</sup> <a name="uriInput" id="@cdktf/aws-cdk.lexIntent.LexIntentDialogCodeHookOutputReference.property.uriInput"></a>

```typescript
public readonly uriInput: string;
```

- *Type:* string

---

##### `messageVersion`<sup>Required</sup> <a name="messageVersion" id="@cdktf/aws-cdk.lexIntent.LexIntentDialogCodeHookOutputReference.property.messageVersion"></a>

```typescript
public readonly messageVersion: string;
```

- *Type:* string

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/aws-cdk.lexIntent.LexIntentDialogCodeHookOutputReference.property.uri"></a>

```typescript
public readonly uri: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.lexIntent.LexIntentDialogCodeHookOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LexIntentDialogCodeHook;
```

- *Type:* <a href="#@cdktf/aws-cdk.lexIntent.LexIntentDialogCodeHook">LexIntentDialogCodeHook</a>

---


### LexIntentFollowUpPromptOutputReference <a name="LexIntentFollowUpPromptOutputReference" id="@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptOutputReference.Initializer"></a>

```typescript
import { lexIntent } from '@cdktf/aws-cdk'

new lexIntent.LexIntentFollowUpPromptOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptOutputReference.putPrompt">putPrompt</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptOutputReference.putRejectionStatement">putRejectionStatement</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPrompt` <a name="putPrompt" id="@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptOutputReference.putPrompt"></a>

```typescript
public putPrompt(value: LexIntentFollowUpPromptPrompt): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptOutputReference.putPrompt.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptPrompt">LexIntentFollowUpPromptPrompt</a>

---

##### `putRejectionStatement` <a name="putRejectionStatement" id="@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptOutputReference.putRejectionStatement"></a>

```typescript
public putRejectionStatement(value: LexIntentFollowUpPromptRejectionStatement): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptOutputReference.putRejectionStatement.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptRejectionStatement">LexIntentFollowUpPromptRejectionStatement</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptOutputReference.property.prompt">prompt</a></code> | <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptPromptOutputReference">LexIntentFollowUpPromptPromptOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptOutputReference.property.rejectionStatement">rejectionStatement</a></code> | <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference">LexIntentFollowUpPromptRejectionStatementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptOutputReference.property.promptInput">promptInput</a></code> | <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptPrompt">LexIntentFollowUpPromptPrompt</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptOutputReference.property.rejectionStatementInput">rejectionStatementInput</a></code> | <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptRejectionStatement">LexIntentFollowUpPromptRejectionStatement</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPrompt">LexIntentFollowUpPrompt</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `prompt`<sup>Required</sup> <a name="prompt" id="@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptOutputReference.property.prompt"></a>

```typescript
public readonly prompt: LexIntentFollowUpPromptPromptOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptPromptOutputReference">LexIntentFollowUpPromptPromptOutputReference</a>

---

##### `rejectionStatement`<sup>Required</sup> <a name="rejectionStatement" id="@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptOutputReference.property.rejectionStatement"></a>

```typescript
public readonly rejectionStatement: LexIntentFollowUpPromptRejectionStatementOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference">LexIntentFollowUpPromptRejectionStatementOutputReference</a>

---

##### `promptInput`<sup>Optional</sup> <a name="promptInput" id="@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptOutputReference.property.promptInput"></a>

```typescript
public readonly promptInput: LexIntentFollowUpPromptPrompt;
```

- *Type:* <a href="#@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptPrompt">LexIntentFollowUpPromptPrompt</a>

---

##### `rejectionStatementInput`<sup>Optional</sup> <a name="rejectionStatementInput" id="@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptOutputReference.property.rejectionStatementInput"></a>

```typescript
public readonly rejectionStatementInput: LexIntentFollowUpPromptRejectionStatement;
```

- *Type:* <a href="#@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptRejectionStatement">LexIntentFollowUpPromptRejectionStatement</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LexIntentFollowUpPrompt;
```

- *Type:* <a href="#@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPrompt">LexIntentFollowUpPrompt</a>

---


### LexIntentFollowUpPromptPromptMessageList <a name="LexIntentFollowUpPromptPromptMessageList" id="@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptPromptMessageList"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptPromptMessageList.Initializer"></a>

```typescript
import { lexIntent } from '@cdktf/aws-cdk'

new lexIntent.LexIntentFollowUpPromptPromptMessageList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptPromptMessageList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptPromptMessageList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptPromptMessageList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptPromptMessageList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptPromptMessageList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptPromptMessageList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptPromptMessageList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptPromptMessageList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptPromptMessageList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptPromptMessageList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptPromptMessageList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptPromptMessageList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptPromptMessageList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptPromptMessageList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptPromptMessageList.get"></a>

```typescript
public get(index: number): LexIntentFollowUpPromptPromptMessageOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptPromptMessageList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptPromptMessageList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptPromptMessageList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptPromptMessageList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptPromptMessage">LexIntentFollowUpPromptPromptMessage</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptPromptMessageList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptPromptMessageList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptPromptMessageList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LexIntentFollowUpPromptPromptMessage[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptPromptMessage">LexIntentFollowUpPromptPromptMessage</a>[]

---


### LexIntentFollowUpPromptPromptMessageOutputReference <a name="LexIntentFollowUpPromptPromptMessageOutputReference" id="@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.Initializer"></a>

```typescript
import { lexIntent } from '@cdktf/aws-cdk'

new lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.resetGroupNumber">resetGroupNumber</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetGroupNumber` <a name="resetGroupNumber" id="@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.resetGroupNumber"></a>

```typescript
public resetGroupNumber(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.property.contentInput">contentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.property.contentTypeInput">contentTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.property.groupNumberInput">groupNumberInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.property.content">content</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.property.contentType">contentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.property.groupNumber">groupNumber</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptPromptMessage">LexIntentFollowUpPromptPromptMessage</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `contentInput`<sup>Optional</sup> <a name="contentInput" id="@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.property.contentInput"></a>

```typescript
public readonly contentInput: string;
```

- *Type:* string

---

##### `contentTypeInput`<sup>Optional</sup> <a name="contentTypeInput" id="@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.property.contentTypeInput"></a>

```typescript
public readonly contentTypeInput: string;
```

- *Type:* string

---

##### `groupNumberInput`<sup>Optional</sup> <a name="groupNumberInput" id="@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.property.groupNumberInput"></a>

```typescript
public readonly groupNumberInput: number;
```

- *Type:* number

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.property.content"></a>

```typescript
public readonly content: string;
```

- *Type:* string

---

##### `contentType`<sup>Required</sup> <a name="contentType" id="@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.property.contentType"></a>

```typescript
public readonly contentType: string;
```

- *Type:* string

---

##### `groupNumber`<sup>Required</sup> <a name="groupNumber" id="@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.property.groupNumber"></a>

```typescript
public readonly groupNumber: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptPromptMessageOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LexIntentFollowUpPromptPromptMessage | IResolvable;
```

- *Type:* <a href="#@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptPromptMessage">LexIntentFollowUpPromptPromptMessage</a> | cdktf.IResolvable

---


### LexIntentFollowUpPromptPromptOutputReference <a name="LexIntentFollowUpPromptPromptOutputReference" id="@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptPromptOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptPromptOutputReference.Initializer"></a>

```typescript
import { lexIntent } from '@cdktf/aws-cdk'

new lexIntent.LexIntentFollowUpPromptPromptOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptPromptOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptPromptOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptPromptOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptPromptOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptPromptOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptPromptOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptPromptOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptPromptOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptPromptOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptPromptOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptPromptOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptPromptOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptPromptOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptPromptOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptPromptOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptPromptOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptPromptOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptPromptOutputReference.putMessage">putMessage</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptPromptOutputReference.resetResponseCard">resetResponseCard</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptPromptOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptPromptOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptPromptOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptPromptOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptPromptOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptPromptOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptPromptOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptPromptOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptPromptOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptPromptOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptPromptOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptPromptOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptPromptOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptPromptOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptPromptOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptPromptOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptPromptOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptPromptOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptPromptOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptPromptOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptPromptOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptPromptOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptPromptOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptPromptOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMessage` <a name="putMessage" id="@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptPromptOutputReference.putMessage"></a>

```typescript
public putMessage(value: IResolvable | LexIntentFollowUpPromptPromptMessage[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptPromptOutputReference.putMessage.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptPromptMessage">LexIntentFollowUpPromptPromptMessage</a>[]

---

##### `resetResponseCard` <a name="resetResponseCard" id="@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptPromptOutputReference.resetResponseCard"></a>

```typescript
public resetResponseCard(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptPromptOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptPromptOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptPromptOutputReference.property.message">message</a></code> | <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptPromptMessageList">LexIntentFollowUpPromptPromptMessageList</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptPromptOutputReference.property.maxAttemptsInput">maxAttemptsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptPromptOutputReference.property.messageInput">messageInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptPromptMessage">LexIntentFollowUpPromptPromptMessage</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptPromptOutputReference.property.responseCardInput">responseCardInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptPromptOutputReference.property.maxAttempts">maxAttempts</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptPromptOutputReference.property.responseCard">responseCard</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptPromptOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptPrompt">LexIntentFollowUpPromptPrompt</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptPromptOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptPromptOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptPromptOutputReference.property.message"></a>

```typescript
public readonly message: LexIntentFollowUpPromptPromptMessageList;
```

- *Type:* <a href="#@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptPromptMessageList">LexIntentFollowUpPromptPromptMessageList</a>

---

##### `maxAttemptsInput`<sup>Optional</sup> <a name="maxAttemptsInput" id="@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptPromptOutputReference.property.maxAttemptsInput"></a>

```typescript
public readonly maxAttemptsInput: number;
```

- *Type:* number

---

##### `messageInput`<sup>Optional</sup> <a name="messageInput" id="@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptPromptOutputReference.property.messageInput"></a>

```typescript
public readonly messageInput: IResolvable | LexIntentFollowUpPromptPromptMessage[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptPromptMessage">LexIntentFollowUpPromptPromptMessage</a>[]

---

##### `responseCardInput`<sup>Optional</sup> <a name="responseCardInput" id="@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptPromptOutputReference.property.responseCardInput"></a>

```typescript
public readonly responseCardInput: string;
```

- *Type:* string

---

##### `maxAttempts`<sup>Required</sup> <a name="maxAttempts" id="@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptPromptOutputReference.property.maxAttempts"></a>

```typescript
public readonly maxAttempts: number;
```

- *Type:* number

---

##### `responseCard`<sup>Required</sup> <a name="responseCard" id="@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptPromptOutputReference.property.responseCard"></a>

```typescript
public readonly responseCard: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptPromptOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LexIntentFollowUpPromptPrompt;
```

- *Type:* <a href="#@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptPrompt">LexIntentFollowUpPromptPrompt</a>

---


### LexIntentFollowUpPromptRejectionStatementMessageList <a name="LexIntentFollowUpPromptRejectionStatementMessageList" id="@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageList"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageList.Initializer"></a>

```typescript
import { lexIntent } from '@cdktf/aws-cdk'

new lexIntent.LexIntentFollowUpPromptRejectionStatementMessageList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageList.get"></a>

```typescript
public get(index: number): LexIntentFollowUpPromptRejectionStatementMessageOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptRejectionStatementMessage">LexIntentFollowUpPromptRejectionStatementMessage</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LexIntentFollowUpPromptRejectionStatementMessage[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptRejectionStatementMessage">LexIntentFollowUpPromptRejectionStatementMessage</a>[]

---


### LexIntentFollowUpPromptRejectionStatementMessageOutputReference <a name="LexIntentFollowUpPromptRejectionStatementMessageOutputReference" id="@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.Initializer"></a>

```typescript
import { lexIntent } from '@cdktf/aws-cdk'

new lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.resetGroupNumber">resetGroupNumber</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetGroupNumber` <a name="resetGroupNumber" id="@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.resetGroupNumber"></a>

```typescript
public resetGroupNumber(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.property.contentInput">contentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.property.contentTypeInput">contentTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.property.groupNumberInput">groupNumberInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.property.content">content</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.property.contentType">contentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.property.groupNumber">groupNumber</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptRejectionStatementMessage">LexIntentFollowUpPromptRejectionStatementMessage</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `contentInput`<sup>Optional</sup> <a name="contentInput" id="@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.property.contentInput"></a>

```typescript
public readonly contentInput: string;
```

- *Type:* string

---

##### `contentTypeInput`<sup>Optional</sup> <a name="contentTypeInput" id="@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.property.contentTypeInput"></a>

```typescript
public readonly contentTypeInput: string;
```

- *Type:* string

---

##### `groupNumberInput`<sup>Optional</sup> <a name="groupNumberInput" id="@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.property.groupNumberInput"></a>

```typescript
public readonly groupNumberInput: number;
```

- *Type:* number

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.property.content"></a>

```typescript
public readonly content: string;
```

- *Type:* string

---

##### `contentType`<sup>Required</sup> <a name="contentType" id="@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.property.contentType"></a>

```typescript
public readonly contentType: string;
```

- *Type:* string

---

##### `groupNumber`<sup>Required</sup> <a name="groupNumber" id="@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.property.groupNumber"></a>

```typescript
public readonly groupNumber: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LexIntentFollowUpPromptRejectionStatementMessage | IResolvable;
```

- *Type:* <a href="#@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptRejectionStatementMessage">LexIntentFollowUpPromptRejectionStatementMessage</a> | cdktf.IResolvable

---


### LexIntentFollowUpPromptRejectionStatementOutputReference <a name="LexIntentFollowUpPromptRejectionStatementOutputReference" id="@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.Initializer"></a>

```typescript
import { lexIntent } from '@cdktf/aws-cdk'

new lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.putMessage">putMessage</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.resetResponseCard">resetResponseCard</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMessage` <a name="putMessage" id="@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.putMessage"></a>

```typescript
public putMessage(value: IResolvable | LexIntentFollowUpPromptRejectionStatementMessage[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.putMessage.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptRejectionStatementMessage">LexIntentFollowUpPromptRejectionStatementMessage</a>[]

---

##### `resetResponseCard` <a name="resetResponseCard" id="@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.resetResponseCard"></a>

```typescript
public resetResponseCard(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.property.message">message</a></code> | <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageList">LexIntentFollowUpPromptRejectionStatementMessageList</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.property.messageInput">messageInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptRejectionStatementMessage">LexIntentFollowUpPromptRejectionStatementMessage</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.property.responseCardInput">responseCardInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.property.responseCard">responseCard</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptRejectionStatement">LexIntentFollowUpPromptRejectionStatement</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.property.message"></a>

```typescript
public readonly message: LexIntentFollowUpPromptRejectionStatementMessageList;
```

- *Type:* <a href="#@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptRejectionStatementMessageList">LexIntentFollowUpPromptRejectionStatementMessageList</a>

---

##### `messageInput`<sup>Optional</sup> <a name="messageInput" id="@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.property.messageInput"></a>

```typescript
public readonly messageInput: IResolvable | LexIntentFollowUpPromptRejectionStatementMessage[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptRejectionStatementMessage">LexIntentFollowUpPromptRejectionStatementMessage</a>[]

---

##### `responseCardInput`<sup>Optional</sup> <a name="responseCardInput" id="@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.property.responseCardInput"></a>

```typescript
public readonly responseCardInput: string;
```

- *Type:* string

---

##### `responseCard`<sup>Required</sup> <a name="responseCard" id="@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.property.responseCard"></a>

```typescript
public readonly responseCard: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptRejectionStatementOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LexIntentFollowUpPromptRejectionStatement;
```

- *Type:* <a href="#@cdktf/aws-cdk.lexIntent.LexIntentFollowUpPromptRejectionStatement">LexIntentFollowUpPromptRejectionStatement</a>

---


### LexIntentFulfillmentActivityCodeHookOutputReference <a name="LexIntentFulfillmentActivityCodeHookOutputReference" id="@cdktf/aws-cdk.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.Initializer"></a>

```typescript
import { lexIntent } from '@cdktf/aws-cdk'

new lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.property.messageVersionInput">messageVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.property.uriInput">uriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.property.messageVersion">messageVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.property.uri">uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentFulfillmentActivityCodeHook">LexIntentFulfillmentActivityCodeHook</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `messageVersionInput`<sup>Optional</sup> <a name="messageVersionInput" id="@cdktf/aws-cdk.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.property.messageVersionInput"></a>

```typescript
public readonly messageVersionInput: string;
```

- *Type:* string

---

##### `uriInput`<sup>Optional</sup> <a name="uriInput" id="@cdktf/aws-cdk.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.property.uriInput"></a>

```typescript
public readonly uriInput: string;
```

- *Type:* string

---

##### `messageVersion`<sup>Required</sup> <a name="messageVersion" id="@cdktf/aws-cdk.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.property.messageVersion"></a>

```typescript
public readonly messageVersion: string;
```

- *Type:* string

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/aws-cdk.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.property.uri"></a>

```typescript
public readonly uri: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LexIntentFulfillmentActivityCodeHook;
```

- *Type:* <a href="#@cdktf/aws-cdk.lexIntent.LexIntentFulfillmentActivityCodeHook">LexIntentFulfillmentActivityCodeHook</a>

---


### LexIntentFulfillmentActivityOutputReference <a name="LexIntentFulfillmentActivityOutputReference" id="@cdktf/aws-cdk.lexIntent.LexIntentFulfillmentActivityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.lexIntent.LexIntentFulfillmentActivityOutputReference.Initializer"></a>

```typescript
import { lexIntent } from '@cdktf/aws-cdk'

new lexIntent.LexIntentFulfillmentActivityOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentFulfillmentActivityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentFulfillmentActivityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.lexIntent.LexIntentFulfillmentActivityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentFulfillmentActivityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentFulfillmentActivityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentFulfillmentActivityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentFulfillmentActivityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentFulfillmentActivityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentFulfillmentActivityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentFulfillmentActivityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentFulfillmentActivityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentFulfillmentActivityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentFulfillmentActivityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentFulfillmentActivityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentFulfillmentActivityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentFulfillmentActivityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentFulfillmentActivityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentFulfillmentActivityOutputReference.putCodeHook">putCodeHook</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentFulfillmentActivityOutputReference.resetCodeHook">resetCodeHook</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.lexIntent.LexIntentFulfillmentActivityOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentFulfillmentActivityOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentFulfillmentActivityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentFulfillmentActivityOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentFulfillmentActivityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentFulfillmentActivityOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentFulfillmentActivityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentFulfillmentActivityOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentFulfillmentActivityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentFulfillmentActivityOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentFulfillmentActivityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentFulfillmentActivityOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentFulfillmentActivityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentFulfillmentActivityOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentFulfillmentActivityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentFulfillmentActivityOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentFulfillmentActivityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentFulfillmentActivityOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentFulfillmentActivityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentFulfillmentActivityOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.lexIntent.LexIntentFulfillmentActivityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.lexIntent.LexIntentFulfillmentActivityOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.lexIntent.LexIntentFulfillmentActivityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.lexIntent.LexIntentFulfillmentActivityOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCodeHook` <a name="putCodeHook" id="@cdktf/aws-cdk.lexIntent.LexIntentFulfillmentActivityOutputReference.putCodeHook"></a>

```typescript
public putCodeHook(value: LexIntentFulfillmentActivityCodeHook): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.lexIntent.LexIntentFulfillmentActivityOutputReference.putCodeHook.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.lexIntent.LexIntentFulfillmentActivityCodeHook">LexIntentFulfillmentActivityCodeHook</a>

---

##### `resetCodeHook` <a name="resetCodeHook" id="@cdktf/aws-cdk.lexIntent.LexIntentFulfillmentActivityOutputReference.resetCodeHook"></a>

```typescript
public resetCodeHook(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentFulfillmentActivityOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentFulfillmentActivityOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentFulfillmentActivityOutputReference.property.codeHook">codeHook</a></code> | <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference">LexIntentFulfillmentActivityCodeHookOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentFulfillmentActivityOutputReference.property.codeHookInput">codeHookInput</a></code> | <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentFulfillmentActivityCodeHook">LexIntentFulfillmentActivityCodeHook</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentFulfillmentActivityOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentFulfillmentActivityOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentFulfillmentActivityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentFulfillmentActivity">LexIntentFulfillmentActivity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.lexIntent.LexIntentFulfillmentActivityOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.lexIntent.LexIntentFulfillmentActivityOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `codeHook`<sup>Required</sup> <a name="codeHook" id="@cdktf/aws-cdk.lexIntent.LexIntentFulfillmentActivityOutputReference.property.codeHook"></a>

```typescript
public readonly codeHook: LexIntentFulfillmentActivityCodeHookOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.lexIntent.LexIntentFulfillmentActivityCodeHookOutputReference">LexIntentFulfillmentActivityCodeHookOutputReference</a>

---

##### `codeHookInput`<sup>Optional</sup> <a name="codeHookInput" id="@cdktf/aws-cdk.lexIntent.LexIntentFulfillmentActivityOutputReference.property.codeHookInput"></a>

```typescript
public readonly codeHookInput: LexIntentFulfillmentActivityCodeHook;
```

- *Type:* <a href="#@cdktf/aws-cdk.lexIntent.LexIntentFulfillmentActivityCodeHook">LexIntentFulfillmentActivityCodeHook</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/aws-cdk.lexIntent.LexIntentFulfillmentActivityOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/aws-cdk.lexIntent.LexIntentFulfillmentActivityOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.lexIntent.LexIntentFulfillmentActivityOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LexIntentFulfillmentActivity;
```

- *Type:* <a href="#@cdktf/aws-cdk.lexIntent.LexIntentFulfillmentActivity">LexIntentFulfillmentActivity</a>

---


### LexIntentRejectionStatementMessageList <a name="LexIntentRejectionStatementMessageList" id="@cdktf/aws-cdk.lexIntent.LexIntentRejectionStatementMessageList"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.lexIntent.LexIntentRejectionStatementMessageList.Initializer"></a>

```typescript
import { lexIntent } from '@cdktf/aws-cdk'

new lexIntent.LexIntentRejectionStatementMessageList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentRejectionStatementMessageList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentRejectionStatementMessageList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentRejectionStatementMessageList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.lexIntent.LexIntentRejectionStatementMessageList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentRejectionStatementMessageList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/aws-cdk.lexIntent.LexIntentRejectionStatementMessageList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentRejectionStatementMessageList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentRejectionStatementMessageList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentRejectionStatementMessageList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentRejectionStatementMessageList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.lexIntent.LexIntentRejectionStatementMessageList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.lexIntent.LexIntentRejectionStatementMessageList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.lexIntent.LexIntentRejectionStatementMessageList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.lexIntent.LexIntentRejectionStatementMessageList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/aws-cdk.lexIntent.LexIntentRejectionStatementMessageList.get"></a>

```typescript
public get(index: number): LexIntentRejectionStatementMessageOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/aws-cdk.lexIntent.LexIntentRejectionStatementMessageList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentRejectionStatementMessageList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentRejectionStatementMessageList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentRejectionStatementMessageList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.lexIntent.LexIntentRejectionStatementMessage">LexIntentRejectionStatementMessage</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.lexIntent.LexIntentRejectionStatementMessageList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.lexIntent.LexIntentRejectionStatementMessageList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.lexIntent.LexIntentRejectionStatementMessageList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LexIntentRejectionStatementMessage[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.lexIntent.LexIntentRejectionStatementMessage">LexIntentRejectionStatementMessage</a>[]

---


### LexIntentRejectionStatementMessageOutputReference <a name="LexIntentRejectionStatementMessageOutputReference" id="@cdktf/aws-cdk.lexIntent.LexIntentRejectionStatementMessageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.lexIntent.LexIntentRejectionStatementMessageOutputReference.Initializer"></a>

```typescript
import { lexIntent } from '@cdktf/aws-cdk'

new lexIntent.LexIntentRejectionStatementMessageOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentRejectionStatementMessageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentRejectionStatementMessageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentRejectionStatementMessageOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentRejectionStatementMessageOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.lexIntent.LexIntentRejectionStatementMessageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentRejectionStatementMessageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/aws-cdk.lexIntent.LexIntentRejectionStatementMessageOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/aws-cdk.lexIntent.LexIntentRejectionStatementMessageOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentRejectionStatementMessageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentRejectionStatementMessageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentRejectionStatementMessageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentRejectionStatementMessageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentRejectionStatementMessageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentRejectionStatementMessageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentRejectionStatementMessageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentRejectionStatementMessageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentRejectionStatementMessageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentRejectionStatementMessageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentRejectionStatementMessageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentRejectionStatementMessageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentRejectionStatementMessageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentRejectionStatementMessageOutputReference.resetGroupNumber">resetGroupNumber</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.lexIntent.LexIntentRejectionStatementMessageOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentRejectionStatementMessageOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentRejectionStatementMessageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentRejectionStatementMessageOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentRejectionStatementMessageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentRejectionStatementMessageOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentRejectionStatementMessageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentRejectionStatementMessageOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentRejectionStatementMessageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentRejectionStatementMessageOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentRejectionStatementMessageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentRejectionStatementMessageOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentRejectionStatementMessageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentRejectionStatementMessageOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentRejectionStatementMessageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentRejectionStatementMessageOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentRejectionStatementMessageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentRejectionStatementMessageOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentRejectionStatementMessageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentRejectionStatementMessageOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.lexIntent.LexIntentRejectionStatementMessageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.lexIntent.LexIntentRejectionStatementMessageOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.lexIntent.LexIntentRejectionStatementMessageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.lexIntent.LexIntentRejectionStatementMessageOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetGroupNumber` <a name="resetGroupNumber" id="@cdktf/aws-cdk.lexIntent.LexIntentRejectionStatementMessageOutputReference.resetGroupNumber"></a>

```typescript
public resetGroupNumber(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentRejectionStatementMessageOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentRejectionStatementMessageOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentRejectionStatementMessageOutputReference.property.contentInput">contentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentRejectionStatementMessageOutputReference.property.contentTypeInput">contentTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentRejectionStatementMessageOutputReference.property.groupNumberInput">groupNumberInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentRejectionStatementMessageOutputReference.property.content">content</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentRejectionStatementMessageOutputReference.property.contentType">contentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentRejectionStatementMessageOutputReference.property.groupNumber">groupNumber</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentRejectionStatementMessageOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentRejectionStatementMessage">LexIntentRejectionStatementMessage</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.lexIntent.LexIntentRejectionStatementMessageOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.lexIntent.LexIntentRejectionStatementMessageOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `contentInput`<sup>Optional</sup> <a name="contentInput" id="@cdktf/aws-cdk.lexIntent.LexIntentRejectionStatementMessageOutputReference.property.contentInput"></a>

```typescript
public readonly contentInput: string;
```

- *Type:* string

---

##### `contentTypeInput`<sup>Optional</sup> <a name="contentTypeInput" id="@cdktf/aws-cdk.lexIntent.LexIntentRejectionStatementMessageOutputReference.property.contentTypeInput"></a>

```typescript
public readonly contentTypeInput: string;
```

- *Type:* string

---

##### `groupNumberInput`<sup>Optional</sup> <a name="groupNumberInput" id="@cdktf/aws-cdk.lexIntent.LexIntentRejectionStatementMessageOutputReference.property.groupNumberInput"></a>

```typescript
public readonly groupNumberInput: number;
```

- *Type:* number

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/aws-cdk.lexIntent.LexIntentRejectionStatementMessageOutputReference.property.content"></a>

```typescript
public readonly content: string;
```

- *Type:* string

---

##### `contentType`<sup>Required</sup> <a name="contentType" id="@cdktf/aws-cdk.lexIntent.LexIntentRejectionStatementMessageOutputReference.property.contentType"></a>

```typescript
public readonly contentType: string;
```

- *Type:* string

---

##### `groupNumber`<sup>Required</sup> <a name="groupNumber" id="@cdktf/aws-cdk.lexIntent.LexIntentRejectionStatementMessageOutputReference.property.groupNumber"></a>

```typescript
public readonly groupNumber: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.lexIntent.LexIntentRejectionStatementMessageOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LexIntentRejectionStatementMessage | IResolvable;
```

- *Type:* <a href="#@cdktf/aws-cdk.lexIntent.LexIntentRejectionStatementMessage">LexIntentRejectionStatementMessage</a> | cdktf.IResolvable

---


### LexIntentRejectionStatementOutputReference <a name="LexIntentRejectionStatementOutputReference" id="@cdktf/aws-cdk.lexIntent.LexIntentRejectionStatementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.lexIntent.LexIntentRejectionStatementOutputReference.Initializer"></a>

```typescript
import { lexIntent } from '@cdktf/aws-cdk'

new lexIntent.LexIntentRejectionStatementOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentRejectionStatementOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentRejectionStatementOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.lexIntent.LexIntentRejectionStatementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentRejectionStatementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentRejectionStatementOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentRejectionStatementOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentRejectionStatementOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentRejectionStatementOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentRejectionStatementOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentRejectionStatementOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentRejectionStatementOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentRejectionStatementOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentRejectionStatementOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentRejectionStatementOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentRejectionStatementOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentRejectionStatementOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentRejectionStatementOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentRejectionStatementOutputReference.putMessage">putMessage</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentRejectionStatementOutputReference.resetResponseCard">resetResponseCard</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.lexIntent.LexIntentRejectionStatementOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentRejectionStatementOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentRejectionStatementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentRejectionStatementOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentRejectionStatementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentRejectionStatementOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentRejectionStatementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentRejectionStatementOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentRejectionStatementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentRejectionStatementOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentRejectionStatementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentRejectionStatementOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentRejectionStatementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentRejectionStatementOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentRejectionStatementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentRejectionStatementOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentRejectionStatementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentRejectionStatementOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentRejectionStatementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentRejectionStatementOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.lexIntent.LexIntentRejectionStatementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.lexIntent.LexIntentRejectionStatementOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.lexIntent.LexIntentRejectionStatementOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.lexIntent.LexIntentRejectionStatementOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMessage` <a name="putMessage" id="@cdktf/aws-cdk.lexIntent.LexIntentRejectionStatementOutputReference.putMessage"></a>

```typescript
public putMessage(value: IResolvable | LexIntentRejectionStatementMessage[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.lexIntent.LexIntentRejectionStatementOutputReference.putMessage.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.lexIntent.LexIntentRejectionStatementMessage">LexIntentRejectionStatementMessage</a>[]

---

##### `resetResponseCard` <a name="resetResponseCard" id="@cdktf/aws-cdk.lexIntent.LexIntentRejectionStatementOutputReference.resetResponseCard"></a>

```typescript
public resetResponseCard(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentRejectionStatementOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentRejectionStatementOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentRejectionStatementOutputReference.property.message">message</a></code> | <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentRejectionStatementMessageList">LexIntentRejectionStatementMessageList</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentRejectionStatementOutputReference.property.messageInput">messageInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.lexIntent.LexIntentRejectionStatementMessage">LexIntentRejectionStatementMessage</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentRejectionStatementOutputReference.property.responseCardInput">responseCardInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentRejectionStatementOutputReference.property.responseCard">responseCard</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentRejectionStatementOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentRejectionStatement">LexIntentRejectionStatement</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.lexIntent.LexIntentRejectionStatementOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.lexIntent.LexIntentRejectionStatementOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/aws-cdk.lexIntent.LexIntentRejectionStatementOutputReference.property.message"></a>

```typescript
public readonly message: LexIntentRejectionStatementMessageList;
```

- *Type:* <a href="#@cdktf/aws-cdk.lexIntent.LexIntentRejectionStatementMessageList">LexIntentRejectionStatementMessageList</a>

---

##### `messageInput`<sup>Optional</sup> <a name="messageInput" id="@cdktf/aws-cdk.lexIntent.LexIntentRejectionStatementOutputReference.property.messageInput"></a>

```typescript
public readonly messageInput: IResolvable | LexIntentRejectionStatementMessage[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.lexIntent.LexIntentRejectionStatementMessage">LexIntentRejectionStatementMessage</a>[]

---

##### `responseCardInput`<sup>Optional</sup> <a name="responseCardInput" id="@cdktf/aws-cdk.lexIntent.LexIntentRejectionStatementOutputReference.property.responseCardInput"></a>

```typescript
public readonly responseCardInput: string;
```

- *Type:* string

---

##### `responseCard`<sup>Required</sup> <a name="responseCard" id="@cdktf/aws-cdk.lexIntent.LexIntentRejectionStatementOutputReference.property.responseCard"></a>

```typescript
public readonly responseCard: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.lexIntent.LexIntentRejectionStatementOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LexIntentRejectionStatement;
```

- *Type:* <a href="#@cdktf/aws-cdk.lexIntent.LexIntentRejectionStatement">LexIntentRejectionStatement</a>

---


### LexIntentSlotList <a name="LexIntentSlotList" id="@cdktf/aws-cdk.lexIntent.LexIntentSlotList"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.lexIntent.LexIntentSlotList.Initializer"></a>

```typescript
import { lexIntent } from '@cdktf/aws-cdk'

new lexIntent.LexIntentSlotList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentSlotList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentSlotList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentSlotList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.lexIntent.LexIntentSlotList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentSlotList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/aws-cdk.lexIntent.LexIntentSlotList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentSlotList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentSlotList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentSlotList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentSlotList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.lexIntent.LexIntentSlotList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.lexIntent.LexIntentSlotList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.lexIntent.LexIntentSlotList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.lexIntent.LexIntentSlotList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/aws-cdk.lexIntent.LexIntentSlotList.get"></a>

```typescript
public get(index: number): LexIntentSlotOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/aws-cdk.lexIntent.LexIntentSlotList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentSlotList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentSlotList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentSlotList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.lexIntent.LexIntentSlot">LexIntentSlot</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.lexIntent.LexIntentSlotList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.lexIntent.LexIntentSlotList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.lexIntent.LexIntentSlotList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LexIntentSlot[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.lexIntent.LexIntentSlot">LexIntentSlot</a>[]

---


### LexIntentSlotOutputReference <a name="LexIntentSlotOutputReference" id="@cdktf/aws-cdk.lexIntent.LexIntentSlotOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.lexIntent.LexIntentSlotOutputReference.Initializer"></a>

```typescript
import { lexIntent } from '@cdktf/aws-cdk'

new lexIntent.LexIntentSlotOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentSlotOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentSlotOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentSlotOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentSlotOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.lexIntent.LexIntentSlotOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentSlotOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/aws-cdk.lexIntent.LexIntentSlotOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/aws-cdk.lexIntent.LexIntentSlotOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentSlotOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentSlotOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentSlotOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentSlotOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentSlotOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentSlotOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentSlotOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentSlotOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentSlotOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentSlotOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentSlotOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentSlotOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentSlotOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentSlotOutputReference.putValueElicitationPrompt">putValueElicitationPrompt</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentSlotOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentSlotOutputReference.resetPriority">resetPriority</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentSlotOutputReference.resetResponseCard">resetResponseCard</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentSlotOutputReference.resetSampleUtterances">resetSampleUtterances</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentSlotOutputReference.resetSlotTypeVersion">resetSlotTypeVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentSlotOutputReference.resetValueElicitationPrompt">resetValueElicitationPrompt</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.lexIntent.LexIntentSlotOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentSlotOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentSlotOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentSlotOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentSlotOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentSlotOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentSlotOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentSlotOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentSlotOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentSlotOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentSlotOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentSlotOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentSlotOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentSlotOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentSlotOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentSlotOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentSlotOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentSlotOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentSlotOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentSlotOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.lexIntent.LexIntentSlotOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.lexIntent.LexIntentSlotOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.lexIntent.LexIntentSlotOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.lexIntent.LexIntentSlotOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putValueElicitationPrompt` <a name="putValueElicitationPrompt" id="@cdktf/aws-cdk.lexIntent.LexIntentSlotOutputReference.putValueElicitationPrompt"></a>

```typescript
public putValueElicitationPrompt(value: LexIntentSlotValueElicitationPrompt): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.lexIntent.LexIntentSlotOutputReference.putValueElicitationPrompt.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.lexIntent.LexIntentSlotValueElicitationPrompt">LexIntentSlotValueElicitationPrompt</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/aws-cdk.lexIntent.LexIntentSlotOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetPriority` <a name="resetPriority" id="@cdktf/aws-cdk.lexIntent.LexIntentSlotOutputReference.resetPriority"></a>

```typescript
public resetPriority(): void
```

##### `resetResponseCard` <a name="resetResponseCard" id="@cdktf/aws-cdk.lexIntent.LexIntentSlotOutputReference.resetResponseCard"></a>

```typescript
public resetResponseCard(): void
```

##### `resetSampleUtterances` <a name="resetSampleUtterances" id="@cdktf/aws-cdk.lexIntent.LexIntentSlotOutputReference.resetSampleUtterances"></a>

```typescript
public resetSampleUtterances(): void
```

##### `resetSlotTypeVersion` <a name="resetSlotTypeVersion" id="@cdktf/aws-cdk.lexIntent.LexIntentSlotOutputReference.resetSlotTypeVersion"></a>

```typescript
public resetSlotTypeVersion(): void
```

##### `resetValueElicitationPrompt` <a name="resetValueElicitationPrompt" id="@cdktf/aws-cdk.lexIntent.LexIntentSlotOutputReference.resetValueElicitationPrompt"></a>

```typescript
public resetValueElicitationPrompt(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentSlotOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentSlotOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentSlotOutputReference.property.valueElicitationPrompt">valueElicitationPrompt</a></code> | <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentSlotValueElicitationPromptOutputReference">LexIntentSlotValueElicitationPromptOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentSlotOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentSlotOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentSlotOutputReference.property.priorityInput">priorityInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentSlotOutputReference.property.responseCardInput">responseCardInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentSlotOutputReference.property.sampleUtterancesInput">sampleUtterancesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentSlotOutputReference.property.slotConstraintInput">slotConstraintInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentSlotOutputReference.property.slotTypeInput">slotTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentSlotOutputReference.property.slotTypeVersionInput">slotTypeVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentSlotOutputReference.property.valueElicitationPromptInput">valueElicitationPromptInput</a></code> | <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentSlotValueElicitationPrompt">LexIntentSlotValueElicitationPrompt</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentSlotOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentSlotOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentSlotOutputReference.property.priority">priority</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentSlotOutputReference.property.responseCard">responseCard</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentSlotOutputReference.property.sampleUtterances">sampleUtterances</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentSlotOutputReference.property.slotConstraint">slotConstraint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentSlotOutputReference.property.slotType">slotType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentSlotOutputReference.property.slotTypeVersion">slotTypeVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentSlotOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentSlot">LexIntentSlot</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.lexIntent.LexIntentSlotOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.lexIntent.LexIntentSlotOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `valueElicitationPrompt`<sup>Required</sup> <a name="valueElicitationPrompt" id="@cdktf/aws-cdk.lexIntent.LexIntentSlotOutputReference.property.valueElicitationPrompt"></a>

```typescript
public readonly valueElicitationPrompt: LexIntentSlotValueElicitationPromptOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.lexIntent.LexIntentSlotValueElicitationPromptOutputReference">LexIntentSlotValueElicitationPromptOutputReference</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/aws-cdk.lexIntent.LexIntentSlotOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/aws-cdk.lexIntent.LexIntentSlotOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktf/aws-cdk.lexIntent.LexIntentSlotOutputReference.property.priorityInput"></a>

```typescript
public readonly priorityInput: number;
```

- *Type:* number

---

##### `responseCardInput`<sup>Optional</sup> <a name="responseCardInput" id="@cdktf/aws-cdk.lexIntent.LexIntentSlotOutputReference.property.responseCardInput"></a>

```typescript
public readonly responseCardInput: string;
```

- *Type:* string

---

##### `sampleUtterancesInput`<sup>Optional</sup> <a name="sampleUtterancesInput" id="@cdktf/aws-cdk.lexIntent.LexIntentSlotOutputReference.property.sampleUtterancesInput"></a>

```typescript
public readonly sampleUtterancesInput: string[];
```

- *Type:* string[]

---

##### `slotConstraintInput`<sup>Optional</sup> <a name="slotConstraintInput" id="@cdktf/aws-cdk.lexIntent.LexIntentSlotOutputReference.property.slotConstraintInput"></a>

```typescript
public readonly slotConstraintInput: string;
```

- *Type:* string

---

##### `slotTypeInput`<sup>Optional</sup> <a name="slotTypeInput" id="@cdktf/aws-cdk.lexIntent.LexIntentSlotOutputReference.property.slotTypeInput"></a>

```typescript
public readonly slotTypeInput: string;
```

- *Type:* string

---

##### `slotTypeVersionInput`<sup>Optional</sup> <a name="slotTypeVersionInput" id="@cdktf/aws-cdk.lexIntent.LexIntentSlotOutputReference.property.slotTypeVersionInput"></a>

```typescript
public readonly slotTypeVersionInput: string;
```

- *Type:* string

---

##### `valueElicitationPromptInput`<sup>Optional</sup> <a name="valueElicitationPromptInput" id="@cdktf/aws-cdk.lexIntent.LexIntentSlotOutputReference.property.valueElicitationPromptInput"></a>

```typescript
public readonly valueElicitationPromptInput: LexIntentSlotValueElicitationPrompt;
```

- *Type:* <a href="#@cdktf/aws-cdk.lexIntent.LexIntentSlotValueElicitationPrompt">LexIntentSlotValueElicitationPrompt</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/aws-cdk.lexIntent.LexIntentSlotOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/aws-cdk.lexIntent.LexIntentSlotOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/aws-cdk.lexIntent.LexIntentSlotOutputReference.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

---

##### `responseCard`<sup>Required</sup> <a name="responseCard" id="@cdktf/aws-cdk.lexIntent.LexIntentSlotOutputReference.property.responseCard"></a>

```typescript
public readonly responseCard: string;
```

- *Type:* string

---

##### `sampleUtterances`<sup>Required</sup> <a name="sampleUtterances" id="@cdktf/aws-cdk.lexIntent.LexIntentSlotOutputReference.property.sampleUtterances"></a>

```typescript
public readonly sampleUtterances: string[];
```

- *Type:* string[]

---

##### `slotConstraint`<sup>Required</sup> <a name="slotConstraint" id="@cdktf/aws-cdk.lexIntent.LexIntentSlotOutputReference.property.slotConstraint"></a>

```typescript
public readonly slotConstraint: string;
```

- *Type:* string

---

##### `slotType`<sup>Required</sup> <a name="slotType" id="@cdktf/aws-cdk.lexIntent.LexIntentSlotOutputReference.property.slotType"></a>

```typescript
public readonly slotType: string;
```

- *Type:* string

---

##### `slotTypeVersion`<sup>Required</sup> <a name="slotTypeVersion" id="@cdktf/aws-cdk.lexIntent.LexIntentSlotOutputReference.property.slotTypeVersion"></a>

```typescript
public readonly slotTypeVersion: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.lexIntent.LexIntentSlotOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LexIntentSlot | IResolvable;
```

- *Type:* <a href="#@cdktf/aws-cdk.lexIntent.LexIntentSlot">LexIntentSlot</a> | cdktf.IResolvable

---


### LexIntentSlotValueElicitationPromptMessageList <a name="LexIntentSlotValueElicitationPromptMessageList" id="@cdktf/aws-cdk.lexIntent.LexIntentSlotValueElicitationPromptMessageList"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.lexIntent.LexIntentSlotValueElicitationPromptMessageList.Initializer"></a>

```typescript
import { lexIntent } from '@cdktf/aws-cdk'

new lexIntent.LexIntentSlotValueElicitationPromptMessageList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentSlotValueElicitationPromptMessageList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentSlotValueElicitationPromptMessageList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentSlotValueElicitationPromptMessageList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.lexIntent.LexIntentSlotValueElicitationPromptMessageList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentSlotValueElicitationPromptMessageList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/aws-cdk.lexIntent.LexIntentSlotValueElicitationPromptMessageList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentSlotValueElicitationPromptMessageList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentSlotValueElicitationPromptMessageList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentSlotValueElicitationPromptMessageList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentSlotValueElicitationPromptMessageList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.lexIntent.LexIntentSlotValueElicitationPromptMessageList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.lexIntent.LexIntentSlotValueElicitationPromptMessageList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.lexIntent.LexIntentSlotValueElicitationPromptMessageList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.lexIntent.LexIntentSlotValueElicitationPromptMessageList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/aws-cdk.lexIntent.LexIntentSlotValueElicitationPromptMessageList.get"></a>

```typescript
public get(index: number): LexIntentSlotValueElicitationPromptMessageOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/aws-cdk.lexIntent.LexIntentSlotValueElicitationPromptMessageList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentSlotValueElicitationPromptMessageList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentSlotValueElicitationPromptMessageList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentSlotValueElicitationPromptMessageList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.lexIntent.LexIntentSlotValueElicitationPromptMessage">LexIntentSlotValueElicitationPromptMessage</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.lexIntent.LexIntentSlotValueElicitationPromptMessageList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.lexIntent.LexIntentSlotValueElicitationPromptMessageList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.lexIntent.LexIntentSlotValueElicitationPromptMessageList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LexIntentSlotValueElicitationPromptMessage[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.lexIntent.LexIntentSlotValueElicitationPromptMessage">LexIntentSlotValueElicitationPromptMessage</a>[]

---


### LexIntentSlotValueElicitationPromptMessageOutputReference <a name="LexIntentSlotValueElicitationPromptMessageOutputReference" id="@cdktf/aws-cdk.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.Initializer"></a>

```typescript
import { lexIntent } from '@cdktf/aws-cdk'

new lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/aws-cdk.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/aws-cdk.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.resetGroupNumber">resetGroupNumber</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetGroupNumber` <a name="resetGroupNumber" id="@cdktf/aws-cdk.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.resetGroupNumber"></a>

```typescript
public resetGroupNumber(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.property.contentInput">contentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.property.contentTypeInput">contentTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.property.groupNumberInput">groupNumberInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.property.content">content</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.property.contentType">contentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.property.groupNumber">groupNumber</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentSlotValueElicitationPromptMessage">LexIntentSlotValueElicitationPromptMessage</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `contentInput`<sup>Optional</sup> <a name="contentInput" id="@cdktf/aws-cdk.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.property.contentInput"></a>

```typescript
public readonly contentInput: string;
```

- *Type:* string

---

##### `contentTypeInput`<sup>Optional</sup> <a name="contentTypeInput" id="@cdktf/aws-cdk.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.property.contentTypeInput"></a>

```typescript
public readonly contentTypeInput: string;
```

- *Type:* string

---

##### `groupNumberInput`<sup>Optional</sup> <a name="groupNumberInput" id="@cdktf/aws-cdk.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.property.groupNumberInput"></a>

```typescript
public readonly groupNumberInput: number;
```

- *Type:* number

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/aws-cdk.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.property.content"></a>

```typescript
public readonly content: string;
```

- *Type:* string

---

##### `contentType`<sup>Required</sup> <a name="contentType" id="@cdktf/aws-cdk.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.property.contentType"></a>

```typescript
public readonly contentType: string;
```

- *Type:* string

---

##### `groupNumber`<sup>Required</sup> <a name="groupNumber" id="@cdktf/aws-cdk.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.property.groupNumber"></a>

```typescript
public readonly groupNumber: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.lexIntent.LexIntentSlotValueElicitationPromptMessageOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LexIntentSlotValueElicitationPromptMessage | IResolvable;
```

- *Type:* <a href="#@cdktf/aws-cdk.lexIntent.LexIntentSlotValueElicitationPromptMessage">LexIntentSlotValueElicitationPromptMessage</a> | cdktf.IResolvable

---


### LexIntentSlotValueElicitationPromptOutputReference <a name="LexIntentSlotValueElicitationPromptOutputReference" id="@cdktf/aws-cdk.lexIntent.LexIntentSlotValueElicitationPromptOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.Initializer"></a>

```typescript
import { lexIntent } from '@cdktf/aws-cdk'

new lexIntent.LexIntentSlotValueElicitationPromptOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.putMessage">putMessage</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.resetResponseCard">resetResponseCard</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMessage` <a name="putMessage" id="@cdktf/aws-cdk.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.putMessage"></a>

```typescript
public putMessage(value: IResolvable | LexIntentSlotValueElicitationPromptMessage[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.putMessage.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.lexIntent.LexIntentSlotValueElicitationPromptMessage">LexIntentSlotValueElicitationPromptMessage</a>[]

---

##### `resetResponseCard` <a name="resetResponseCard" id="@cdktf/aws-cdk.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.resetResponseCard"></a>

```typescript
public resetResponseCard(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.property.message">message</a></code> | <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentSlotValueElicitationPromptMessageList">LexIntentSlotValueElicitationPromptMessageList</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.property.maxAttemptsInput">maxAttemptsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.property.messageInput">messageInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.lexIntent.LexIntentSlotValueElicitationPromptMessage">LexIntentSlotValueElicitationPromptMessage</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.property.responseCardInput">responseCardInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.property.maxAttempts">maxAttempts</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.property.responseCard">responseCard</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentSlotValueElicitationPrompt">LexIntentSlotValueElicitationPrompt</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/aws-cdk.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.property.message"></a>

```typescript
public readonly message: LexIntentSlotValueElicitationPromptMessageList;
```

- *Type:* <a href="#@cdktf/aws-cdk.lexIntent.LexIntentSlotValueElicitationPromptMessageList">LexIntentSlotValueElicitationPromptMessageList</a>

---

##### `maxAttemptsInput`<sup>Optional</sup> <a name="maxAttemptsInput" id="@cdktf/aws-cdk.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.property.maxAttemptsInput"></a>

```typescript
public readonly maxAttemptsInput: number;
```

- *Type:* number

---

##### `messageInput`<sup>Optional</sup> <a name="messageInput" id="@cdktf/aws-cdk.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.property.messageInput"></a>

```typescript
public readonly messageInput: IResolvable | LexIntentSlotValueElicitationPromptMessage[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.lexIntent.LexIntentSlotValueElicitationPromptMessage">LexIntentSlotValueElicitationPromptMessage</a>[]

---

##### `responseCardInput`<sup>Optional</sup> <a name="responseCardInput" id="@cdktf/aws-cdk.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.property.responseCardInput"></a>

```typescript
public readonly responseCardInput: string;
```

- *Type:* string

---

##### `maxAttempts`<sup>Required</sup> <a name="maxAttempts" id="@cdktf/aws-cdk.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.property.maxAttempts"></a>

```typescript
public readonly maxAttempts: number;
```

- *Type:* number

---

##### `responseCard`<sup>Required</sup> <a name="responseCard" id="@cdktf/aws-cdk.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.property.responseCard"></a>

```typescript
public readonly responseCard: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.lexIntent.LexIntentSlotValueElicitationPromptOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LexIntentSlotValueElicitationPrompt;
```

- *Type:* <a href="#@cdktf/aws-cdk.lexIntent.LexIntentSlotValueElicitationPrompt">LexIntentSlotValueElicitationPrompt</a>

---


### LexIntentTimeoutsOutputReference <a name="LexIntentTimeoutsOutputReference" id="@cdktf/aws-cdk.lexIntent.LexIntentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.lexIntent.LexIntentTimeoutsOutputReference.Initializer"></a>

```typescript
import { lexIntent } from '@cdktf/aws-cdk'

new lexIntent.LexIntentTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.lexIntent.LexIntentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.lexIntent.LexIntentTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.lexIntent.LexIntentTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.lexIntent.LexIntentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.lexIntent.LexIntentTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.lexIntent.LexIntentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.lexIntent.LexIntentTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/aws-cdk.lexIntent.LexIntentTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/aws-cdk.lexIntent.LexIntentTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/aws-cdk.lexIntent.LexIntentTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.lexIntent.LexIntentTimeouts">LexIntentTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.lexIntent.LexIntentTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.lexIntent.LexIntentTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/aws-cdk.lexIntent.LexIntentTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/aws-cdk.lexIntent.LexIntentTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/aws-cdk.lexIntent.LexIntentTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/aws-cdk.lexIntent.LexIntentTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/aws-cdk.lexIntent.LexIntentTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/aws-cdk.lexIntent.LexIntentTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.lexIntent.LexIntentTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LexIntentTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/aws-cdk.lexIntent.LexIntentTimeouts">LexIntentTimeouts</a> | cdktf.IResolvable

---



