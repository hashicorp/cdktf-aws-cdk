# `lexBot` Submodule <a name="`lexBot` Submodule" id="@cdktf/aws-cdk.lexBot"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LexBot <a name="LexBot" id="@cdktf/aws-cdk.lexBot.LexBot"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lex_bot aws_lex_bot}.

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.lexBot.LexBot.Initializer"></a>

```typescript
import { lexBot } from '@cdktf/aws-cdk'

new lexBot.LexBot(scope: Construct, id: string, config: LexBotConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBot.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBot.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBot.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/aws-cdk.lexBot.LexBotConfig">LexBotConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.lexBot.LexBot.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.lexBot.LexBot.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/aws-cdk.lexBot.LexBot.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/aws-cdk.lexBot.LexBotConfig">LexBotConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBot.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBot.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBot.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBot.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBot.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBot.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBot.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBot.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBot.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBot.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBot.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBot.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBot.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBot.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBot.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBot.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBot.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBot.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBot.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBot.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBot.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBot.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBot.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBot.putAbortStatement">putAbortStatement</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBot.putClarificationPrompt">putClarificationPrompt</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBot.putIntent">putIntent</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBot.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBot.resetClarificationPrompt">resetClarificationPrompt</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBot.resetCreateVersion">resetCreateVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBot.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBot.resetDetectSentiment">resetDetectSentiment</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBot.resetEnableModelImprovements">resetEnableModelImprovements</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBot.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBot.resetIdleSessionTtlInSeconds">resetIdleSessionTtlInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBot.resetLocale">resetLocale</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBot.resetNluIntentConfidenceThreshold">resetNluIntentConfidenceThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBot.resetProcessBehavior">resetProcessBehavior</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBot.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBot.resetVoiceId">resetVoiceId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.lexBot.LexBot.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/aws-cdk.lexBot.LexBot.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/aws-cdk.lexBot.LexBot.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.lexBot.LexBot.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/aws-cdk.lexBot.LexBot.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/aws-cdk.lexBot.LexBot.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/aws-cdk.lexBot.LexBot.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/aws-cdk.lexBot.LexBot.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/aws-cdk.lexBot.LexBot.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/aws-cdk.lexBot.LexBot.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/aws-cdk.lexBot.LexBot.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/aws-cdk.lexBot.LexBot.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.lexBot.LexBot.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexBot.LexBot.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.lexBot.LexBot.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexBot.LexBot.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.lexBot.LexBot.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexBot.LexBot.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.lexBot.LexBot.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexBot.LexBot.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.lexBot.LexBot.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexBot.LexBot.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.lexBot.LexBot.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexBot.LexBot.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.lexBot.LexBot.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexBot.LexBot.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.lexBot.LexBot.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexBot.LexBot.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.lexBot.LexBot.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexBot.LexBot.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/aws-cdk.lexBot.LexBot.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/aws-cdk.lexBot.LexBot.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.lexBot.LexBot.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.lexBot.LexBot.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.lexBot.LexBot.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexBot.LexBot.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/aws-cdk.lexBot.LexBot.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.lexBot.LexBot.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/aws-cdk.lexBot.LexBot.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/aws-cdk.lexBot.LexBot.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/aws-cdk.lexBot.LexBot.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/aws-cdk.lexBot.LexBot.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.lexBot.LexBot.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAbortStatement` <a name="putAbortStatement" id="@cdktf/aws-cdk.lexBot.LexBot.putAbortStatement"></a>

```typescript
public putAbortStatement(value: LexBotAbortStatement): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.lexBot.LexBot.putAbortStatement.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.lexBot.LexBotAbortStatement">LexBotAbortStatement</a>

---

##### `putClarificationPrompt` <a name="putClarificationPrompt" id="@cdktf/aws-cdk.lexBot.LexBot.putClarificationPrompt"></a>

```typescript
public putClarificationPrompt(value: LexBotClarificationPrompt): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.lexBot.LexBot.putClarificationPrompt.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.lexBot.LexBotClarificationPrompt">LexBotClarificationPrompt</a>

---

##### `putIntent` <a name="putIntent" id="@cdktf/aws-cdk.lexBot.LexBot.putIntent"></a>

```typescript
public putIntent(value: IResolvable | LexBotIntent[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.lexBot.LexBot.putIntent.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.lexBot.LexBotIntent">LexBotIntent</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/aws-cdk.lexBot.LexBot.putTimeouts"></a>

```typescript
public putTimeouts(value: LexBotTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.lexBot.LexBot.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.lexBot.LexBotTimeouts">LexBotTimeouts</a>

---

##### `resetClarificationPrompt` <a name="resetClarificationPrompt" id="@cdktf/aws-cdk.lexBot.LexBot.resetClarificationPrompt"></a>

```typescript
public resetClarificationPrompt(): void
```

##### `resetCreateVersion` <a name="resetCreateVersion" id="@cdktf/aws-cdk.lexBot.LexBot.resetCreateVersion"></a>

```typescript
public resetCreateVersion(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/aws-cdk.lexBot.LexBot.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDetectSentiment` <a name="resetDetectSentiment" id="@cdktf/aws-cdk.lexBot.LexBot.resetDetectSentiment"></a>

```typescript
public resetDetectSentiment(): void
```

##### `resetEnableModelImprovements` <a name="resetEnableModelImprovements" id="@cdktf/aws-cdk.lexBot.LexBot.resetEnableModelImprovements"></a>

```typescript
public resetEnableModelImprovements(): void
```

##### `resetId` <a name="resetId" id="@cdktf/aws-cdk.lexBot.LexBot.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIdleSessionTtlInSeconds` <a name="resetIdleSessionTtlInSeconds" id="@cdktf/aws-cdk.lexBot.LexBot.resetIdleSessionTtlInSeconds"></a>

```typescript
public resetIdleSessionTtlInSeconds(): void
```

##### `resetLocale` <a name="resetLocale" id="@cdktf/aws-cdk.lexBot.LexBot.resetLocale"></a>

```typescript
public resetLocale(): void
```

##### `resetNluIntentConfidenceThreshold` <a name="resetNluIntentConfidenceThreshold" id="@cdktf/aws-cdk.lexBot.LexBot.resetNluIntentConfidenceThreshold"></a>

```typescript
public resetNluIntentConfidenceThreshold(): void
```

##### `resetProcessBehavior` <a name="resetProcessBehavior" id="@cdktf/aws-cdk.lexBot.LexBot.resetProcessBehavior"></a>

```typescript
public resetProcessBehavior(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/aws-cdk.lexBot.LexBot.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetVoiceId` <a name="resetVoiceId" id="@cdktf/aws-cdk.lexBot.LexBot.resetVoiceId"></a>

```typescript
public resetVoiceId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBot.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBot.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBot.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBot.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a LexBot resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/aws-cdk.lexBot.LexBot.isConstruct"></a>

```typescript
import { lexBot } from '@cdktf/aws-cdk'

lexBot.LexBot.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.lexBot.LexBot.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/aws-cdk.lexBot.LexBot.isTerraformElement"></a>

```typescript
import { lexBot } from '@cdktf/aws-cdk'

lexBot.LexBot.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.lexBot.LexBot.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/aws-cdk.lexBot.LexBot.isTerraformResource"></a>

```typescript
import { lexBot } from '@cdktf/aws-cdk'

lexBot.LexBot.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.lexBot.LexBot.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/aws-cdk.lexBot.LexBot.generateConfigForImport"></a>

```typescript
import { lexBot } from '@cdktf/aws-cdk'

lexBot.LexBot.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a LexBot resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.lexBot.LexBot.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/aws-cdk.lexBot.LexBot.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the LexBot to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/aws-cdk.lexBot.LexBot.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing LexBot that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lex_bot#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.lexBot.LexBot.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the LexBot to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBot.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBot.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBot.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBot.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBot.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBot.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBot.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBot.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBot.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBot.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBot.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBot.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBot.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBot.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBot.property.abortStatement">abortStatement</a></code> | <code><a href="#@cdktf/aws-cdk.lexBot.LexBotAbortStatementOutputReference">LexBotAbortStatementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBot.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBot.property.checksum">checksum</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBot.property.clarificationPrompt">clarificationPrompt</a></code> | <code><a href="#@cdktf/aws-cdk.lexBot.LexBotClarificationPromptOutputReference">LexBotClarificationPromptOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBot.property.createdDate">createdDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBot.property.failureReason">failureReason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBot.property.intent">intent</a></code> | <code><a href="#@cdktf/aws-cdk.lexBot.LexBotIntentList">LexBotIntentList</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBot.property.lastUpdatedDate">lastUpdatedDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBot.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBot.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/aws-cdk.lexBot.LexBotTimeoutsOutputReference">LexBotTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBot.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBot.property.abortStatementInput">abortStatementInput</a></code> | <code><a href="#@cdktf/aws-cdk.lexBot.LexBotAbortStatement">LexBotAbortStatement</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBot.property.childDirectedInput">childDirectedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBot.property.clarificationPromptInput">clarificationPromptInput</a></code> | <code><a href="#@cdktf/aws-cdk.lexBot.LexBotClarificationPrompt">LexBotClarificationPrompt</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBot.property.createVersionInput">createVersionInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBot.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBot.property.detectSentimentInput">detectSentimentInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBot.property.enableModelImprovementsInput">enableModelImprovementsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBot.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBot.property.idleSessionTtlInSecondsInput">idleSessionTtlInSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBot.property.intentInput">intentInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.lexBot.LexBotIntent">LexBotIntent</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBot.property.localeInput">localeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBot.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBot.property.nluIntentConfidenceThresholdInput">nluIntentConfidenceThresholdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBot.property.processBehaviorInput">processBehaviorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBot.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.lexBot.LexBotTimeouts">LexBotTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBot.property.voiceIdInput">voiceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBot.property.childDirected">childDirected</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBot.property.createVersion">createVersion</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBot.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBot.property.detectSentiment">detectSentiment</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBot.property.enableModelImprovements">enableModelImprovements</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBot.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBot.property.idleSessionTtlInSeconds">idleSessionTtlInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBot.property.locale">locale</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBot.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBot.property.nluIntentConfidenceThreshold">nluIntentConfidenceThreshold</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBot.property.processBehavior">processBehavior</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBot.property.voiceId">voiceId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/aws-cdk.lexBot.LexBot.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/aws-cdk.lexBot.LexBot.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.lexBot.LexBot.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/aws-cdk.lexBot.LexBot.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/aws-cdk.lexBot.LexBot.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/aws-cdk.lexBot.LexBot.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/aws-cdk.lexBot.LexBot.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.lexBot.LexBot.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.lexBot.LexBot.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.lexBot.LexBot.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.lexBot.LexBot.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.lexBot.LexBot.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.lexBot.LexBot.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.lexBot.LexBot.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `abortStatement`<sup>Required</sup> <a name="abortStatement" id="@cdktf/aws-cdk.lexBot.LexBot.property.abortStatement"></a>

```typescript
public readonly abortStatement: LexBotAbortStatementOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.lexBot.LexBotAbortStatementOutputReference">LexBotAbortStatementOutputReference</a>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/aws-cdk.lexBot.LexBot.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `checksum`<sup>Required</sup> <a name="checksum" id="@cdktf/aws-cdk.lexBot.LexBot.property.checksum"></a>

```typescript
public readonly checksum: string;
```

- *Type:* string

---

##### `clarificationPrompt`<sup>Required</sup> <a name="clarificationPrompt" id="@cdktf/aws-cdk.lexBot.LexBot.property.clarificationPrompt"></a>

```typescript
public readonly clarificationPrompt: LexBotClarificationPromptOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.lexBot.LexBotClarificationPromptOutputReference">LexBotClarificationPromptOutputReference</a>

---

##### `createdDate`<sup>Required</sup> <a name="createdDate" id="@cdktf/aws-cdk.lexBot.LexBot.property.createdDate"></a>

```typescript
public readonly createdDate: string;
```

- *Type:* string

---

##### `failureReason`<sup>Required</sup> <a name="failureReason" id="@cdktf/aws-cdk.lexBot.LexBot.property.failureReason"></a>

```typescript
public readonly failureReason: string;
```

- *Type:* string

---

##### `intent`<sup>Required</sup> <a name="intent" id="@cdktf/aws-cdk.lexBot.LexBot.property.intent"></a>

```typescript
public readonly intent: LexBotIntentList;
```

- *Type:* <a href="#@cdktf/aws-cdk.lexBot.LexBotIntentList">LexBotIntentList</a>

---

##### `lastUpdatedDate`<sup>Required</sup> <a name="lastUpdatedDate" id="@cdktf/aws-cdk.lexBot.LexBot.property.lastUpdatedDate"></a>

```typescript
public readonly lastUpdatedDate: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/aws-cdk.lexBot.LexBot.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/aws-cdk.lexBot.LexBot.property.timeouts"></a>

```typescript
public readonly timeouts: LexBotTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.lexBot.LexBotTimeoutsOutputReference">LexBotTimeoutsOutputReference</a>

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/aws-cdk.lexBot.LexBot.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `abortStatementInput`<sup>Optional</sup> <a name="abortStatementInput" id="@cdktf/aws-cdk.lexBot.LexBot.property.abortStatementInput"></a>

```typescript
public readonly abortStatementInput: LexBotAbortStatement;
```

- *Type:* <a href="#@cdktf/aws-cdk.lexBot.LexBotAbortStatement">LexBotAbortStatement</a>

---

##### `childDirectedInput`<sup>Optional</sup> <a name="childDirectedInput" id="@cdktf/aws-cdk.lexBot.LexBot.property.childDirectedInput"></a>

```typescript
public readonly childDirectedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `clarificationPromptInput`<sup>Optional</sup> <a name="clarificationPromptInput" id="@cdktf/aws-cdk.lexBot.LexBot.property.clarificationPromptInput"></a>

```typescript
public readonly clarificationPromptInput: LexBotClarificationPrompt;
```

- *Type:* <a href="#@cdktf/aws-cdk.lexBot.LexBotClarificationPrompt">LexBotClarificationPrompt</a>

---

##### `createVersionInput`<sup>Optional</sup> <a name="createVersionInput" id="@cdktf/aws-cdk.lexBot.LexBot.property.createVersionInput"></a>

```typescript
public readonly createVersionInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/aws-cdk.lexBot.LexBot.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `detectSentimentInput`<sup>Optional</sup> <a name="detectSentimentInput" id="@cdktf/aws-cdk.lexBot.LexBot.property.detectSentimentInput"></a>

```typescript
public readonly detectSentimentInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableModelImprovementsInput`<sup>Optional</sup> <a name="enableModelImprovementsInput" id="@cdktf/aws-cdk.lexBot.LexBot.property.enableModelImprovementsInput"></a>

```typescript
public readonly enableModelImprovementsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/aws-cdk.lexBot.LexBot.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `idleSessionTtlInSecondsInput`<sup>Optional</sup> <a name="idleSessionTtlInSecondsInput" id="@cdktf/aws-cdk.lexBot.LexBot.property.idleSessionTtlInSecondsInput"></a>

```typescript
public readonly idleSessionTtlInSecondsInput: number;
```

- *Type:* number

---

##### `intentInput`<sup>Optional</sup> <a name="intentInput" id="@cdktf/aws-cdk.lexBot.LexBot.property.intentInput"></a>

```typescript
public readonly intentInput: IResolvable | LexBotIntent[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.lexBot.LexBotIntent">LexBotIntent</a>[]

---

##### `localeInput`<sup>Optional</sup> <a name="localeInput" id="@cdktf/aws-cdk.lexBot.LexBot.property.localeInput"></a>

```typescript
public readonly localeInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/aws-cdk.lexBot.LexBot.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `nluIntentConfidenceThresholdInput`<sup>Optional</sup> <a name="nluIntentConfidenceThresholdInput" id="@cdktf/aws-cdk.lexBot.LexBot.property.nluIntentConfidenceThresholdInput"></a>

```typescript
public readonly nluIntentConfidenceThresholdInput: number;
```

- *Type:* number

---

##### `processBehaviorInput`<sup>Optional</sup> <a name="processBehaviorInput" id="@cdktf/aws-cdk.lexBot.LexBot.property.processBehaviorInput"></a>

```typescript
public readonly processBehaviorInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/aws-cdk.lexBot.LexBot.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | LexBotTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.lexBot.LexBotTimeouts">LexBotTimeouts</a>

---

##### `voiceIdInput`<sup>Optional</sup> <a name="voiceIdInput" id="@cdktf/aws-cdk.lexBot.LexBot.property.voiceIdInput"></a>

```typescript
public readonly voiceIdInput: string;
```

- *Type:* string

---

##### `childDirected`<sup>Required</sup> <a name="childDirected" id="@cdktf/aws-cdk.lexBot.LexBot.property.childDirected"></a>

```typescript
public readonly childDirected: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `createVersion`<sup>Required</sup> <a name="createVersion" id="@cdktf/aws-cdk.lexBot.LexBot.property.createVersion"></a>

```typescript
public readonly createVersion: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/aws-cdk.lexBot.LexBot.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `detectSentiment`<sup>Required</sup> <a name="detectSentiment" id="@cdktf/aws-cdk.lexBot.LexBot.property.detectSentiment"></a>

```typescript
public readonly detectSentiment: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableModelImprovements`<sup>Required</sup> <a name="enableModelImprovements" id="@cdktf/aws-cdk.lexBot.LexBot.property.enableModelImprovements"></a>

```typescript
public readonly enableModelImprovements: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.lexBot.LexBot.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `idleSessionTtlInSeconds`<sup>Required</sup> <a name="idleSessionTtlInSeconds" id="@cdktf/aws-cdk.lexBot.LexBot.property.idleSessionTtlInSeconds"></a>

```typescript
public readonly idleSessionTtlInSeconds: number;
```

- *Type:* number

---

##### `locale`<sup>Required</sup> <a name="locale" id="@cdktf/aws-cdk.lexBot.LexBot.property.locale"></a>

```typescript
public readonly locale: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/aws-cdk.lexBot.LexBot.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `nluIntentConfidenceThreshold`<sup>Required</sup> <a name="nluIntentConfidenceThreshold" id="@cdktf/aws-cdk.lexBot.LexBot.property.nluIntentConfidenceThreshold"></a>

```typescript
public readonly nluIntentConfidenceThreshold: number;
```

- *Type:* number

---

##### `processBehavior`<sup>Required</sup> <a name="processBehavior" id="@cdktf/aws-cdk.lexBot.LexBot.property.processBehavior"></a>

```typescript
public readonly processBehavior: string;
```

- *Type:* string

---

##### `voiceId`<sup>Required</sup> <a name="voiceId" id="@cdktf/aws-cdk.lexBot.LexBot.property.voiceId"></a>

```typescript
public readonly voiceId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBot.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/aws-cdk.lexBot.LexBot.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LexBotAbortStatement <a name="LexBotAbortStatement" id="@cdktf/aws-cdk.lexBot.LexBotAbortStatement"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.lexBot.LexBotAbortStatement.Initializer"></a>

```typescript
import { lexBot } from '@cdktf/aws-cdk'

const lexBotAbortStatement: lexBot.LexBotAbortStatement = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBotAbortStatement.property.message">message</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.lexBot.LexBotAbortStatementMessage">LexBotAbortStatementMessage</a>[]</code> | message block. |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBotAbortStatement.property.responseCard">responseCard</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lex_bot#response_card LexBot#response_card}. |

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/aws-cdk.lexBot.LexBotAbortStatement.property.message"></a>

```typescript
public readonly message: IResolvable | LexBotAbortStatementMessage[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.lexBot.LexBotAbortStatementMessage">LexBotAbortStatementMessage</a>[]

message block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lex_bot#message LexBot#message}

---

##### `responseCard`<sup>Optional</sup> <a name="responseCard" id="@cdktf/aws-cdk.lexBot.LexBotAbortStatement.property.responseCard"></a>

```typescript
public readonly responseCard: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lex_bot#response_card LexBot#response_card}.

---

### LexBotAbortStatementMessage <a name="LexBotAbortStatementMessage" id="@cdktf/aws-cdk.lexBot.LexBotAbortStatementMessage"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.lexBot.LexBotAbortStatementMessage.Initializer"></a>

```typescript
import { lexBot } from '@cdktf/aws-cdk'

const lexBotAbortStatementMessage: lexBot.LexBotAbortStatementMessage = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBotAbortStatementMessage.property.content">content</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lex_bot#content LexBot#content}. |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBotAbortStatementMessage.property.contentType">contentType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lex_bot#content_type LexBot#content_type}. |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBotAbortStatementMessage.property.groupNumber">groupNumber</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lex_bot#group_number LexBot#group_number}. |

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/aws-cdk.lexBot.LexBotAbortStatementMessage.property.content"></a>

```typescript
public readonly content: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lex_bot#content LexBot#content}.

---

##### `contentType`<sup>Required</sup> <a name="contentType" id="@cdktf/aws-cdk.lexBot.LexBotAbortStatementMessage.property.contentType"></a>

```typescript
public readonly contentType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lex_bot#content_type LexBot#content_type}.

---

##### `groupNumber`<sup>Optional</sup> <a name="groupNumber" id="@cdktf/aws-cdk.lexBot.LexBotAbortStatementMessage.property.groupNumber"></a>

```typescript
public readonly groupNumber: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lex_bot#group_number LexBot#group_number}.

---

### LexBotClarificationPrompt <a name="LexBotClarificationPrompt" id="@cdktf/aws-cdk.lexBot.LexBotClarificationPrompt"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.lexBot.LexBotClarificationPrompt.Initializer"></a>

```typescript
import { lexBot } from '@cdktf/aws-cdk'

const lexBotClarificationPrompt: lexBot.LexBotClarificationPrompt = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBotClarificationPrompt.property.maxAttempts">maxAttempts</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lex_bot#max_attempts LexBot#max_attempts}. |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBotClarificationPrompt.property.message">message</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.lexBot.LexBotClarificationPromptMessage">LexBotClarificationPromptMessage</a>[]</code> | message block. |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBotClarificationPrompt.property.responseCard">responseCard</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lex_bot#response_card LexBot#response_card}. |

---

##### `maxAttempts`<sup>Required</sup> <a name="maxAttempts" id="@cdktf/aws-cdk.lexBot.LexBotClarificationPrompt.property.maxAttempts"></a>

```typescript
public readonly maxAttempts: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lex_bot#max_attempts LexBot#max_attempts}.

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/aws-cdk.lexBot.LexBotClarificationPrompt.property.message"></a>

```typescript
public readonly message: IResolvable | LexBotClarificationPromptMessage[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.lexBot.LexBotClarificationPromptMessage">LexBotClarificationPromptMessage</a>[]

message block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lex_bot#message LexBot#message}

---

##### `responseCard`<sup>Optional</sup> <a name="responseCard" id="@cdktf/aws-cdk.lexBot.LexBotClarificationPrompt.property.responseCard"></a>

```typescript
public readonly responseCard: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lex_bot#response_card LexBot#response_card}.

---

### LexBotClarificationPromptMessage <a name="LexBotClarificationPromptMessage" id="@cdktf/aws-cdk.lexBot.LexBotClarificationPromptMessage"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.lexBot.LexBotClarificationPromptMessage.Initializer"></a>

```typescript
import { lexBot } from '@cdktf/aws-cdk'

const lexBotClarificationPromptMessage: lexBot.LexBotClarificationPromptMessage = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBotClarificationPromptMessage.property.content">content</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lex_bot#content LexBot#content}. |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBotClarificationPromptMessage.property.contentType">contentType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lex_bot#content_type LexBot#content_type}. |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBotClarificationPromptMessage.property.groupNumber">groupNumber</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lex_bot#group_number LexBot#group_number}. |

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/aws-cdk.lexBot.LexBotClarificationPromptMessage.property.content"></a>

```typescript
public readonly content: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lex_bot#content LexBot#content}.

---

##### `contentType`<sup>Required</sup> <a name="contentType" id="@cdktf/aws-cdk.lexBot.LexBotClarificationPromptMessage.property.contentType"></a>

```typescript
public readonly contentType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lex_bot#content_type LexBot#content_type}.

---

##### `groupNumber`<sup>Optional</sup> <a name="groupNumber" id="@cdktf/aws-cdk.lexBot.LexBotClarificationPromptMessage.property.groupNumber"></a>

```typescript
public readonly groupNumber: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lex_bot#group_number LexBot#group_number}.

---

### LexBotConfig <a name="LexBotConfig" id="@cdktf/aws-cdk.lexBot.LexBotConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.lexBot.LexBotConfig.Initializer"></a>

```typescript
import { lexBot } from '@cdktf/aws-cdk'

const lexBotConfig: lexBot.LexBotConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBotConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBotConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBotConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBotConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBotConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBotConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBotConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBotConfig.property.abortStatement">abortStatement</a></code> | <code><a href="#@cdktf/aws-cdk.lexBot.LexBotAbortStatement">LexBotAbortStatement</a></code> | abort_statement block. |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBotConfig.property.childDirected">childDirected</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lex_bot#child_directed LexBot#child_directed}. |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBotConfig.property.intent">intent</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.lexBot.LexBotIntent">LexBotIntent</a>[]</code> | intent block. |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBotConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lex_bot#name LexBot#name}. |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBotConfig.property.clarificationPrompt">clarificationPrompt</a></code> | <code><a href="#@cdktf/aws-cdk.lexBot.LexBotClarificationPrompt">LexBotClarificationPrompt</a></code> | clarification_prompt block. |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBotConfig.property.createVersion">createVersion</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lex_bot#create_version LexBot#create_version}. |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBotConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lex_bot#description LexBot#description}. |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBotConfig.property.detectSentiment">detectSentiment</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lex_bot#detect_sentiment LexBot#detect_sentiment}. |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBotConfig.property.enableModelImprovements">enableModelImprovements</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lex_bot#enable_model_improvements LexBot#enable_model_improvements}. |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBotConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lex_bot#id LexBot#id}. |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBotConfig.property.idleSessionTtlInSeconds">idleSessionTtlInSeconds</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lex_bot#idle_session_ttl_in_seconds LexBot#idle_session_ttl_in_seconds}. |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBotConfig.property.locale">locale</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lex_bot#locale LexBot#locale}. |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBotConfig.property.nluIntentConfidenceThreshold">nluIntentConfidenceThreshold</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lex_bot#nlu_intent_confidence_threshold LexBot#nlu_intent_confidence_threshold}. |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBotConfig.property.processBehavior">processBehavior</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lex_bot#process_behavior LexBot#process_behavior}. |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBotConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/aws-cdk.lexBot.LexBotTimeouts">LexBotTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBotConfig.property.voiceId">voiceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lex_bot#voice_id LexBot#voice_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.lexBot.LexBotConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.lexBot.LexBotConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.lexBot.LexBotConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.lexBot.LexBotConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.lexBot.LexBotConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.lexBot.LexBotConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.lexBot.LexBotConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `abortStatement`<sup>Required</sup> <a name="abortStatement" id="@cdktf/aws-cdk.lexBot.LexBotConfig.property.abortStatement"></a>

```typescript
public readonly abortStatement: LexBotAbortStatement;
```

- *Type:* <a href="#@cdktf/aws-cdk.lexBot.LexBotAbortStatement">LexBotAbortStatement</a>

abort_statement block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lex_bot#abort_statement LexBot#abort_statement}

---

##### `childDirected`<sup>Required</sup> <a name="childDirected" id="@cdktf/aws-cdk.lexBot.LexBotConfig.property.childDirected"></a>

```typescript
public readonly childDirected: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lex_bot#child_directed LexBot#child_directed}.

---

##### `intent`<sup>Required</sup> <a name="intent" id="@cdktf/aws-cdk.lexBot.LexBotConfig.property.intent"></a>

```typescript
public readonly intent: IResolvable | LexBotIntent[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.lexBot.LexBotIntent">LexBotIntent</a>[]

intent block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lex_bot#intent LexBot#intent}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/aws-cdk.lexBot.LexBotConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lex_bot#name LexBot#name}.

---

##### `clarificationPrompt`<sup>Optional</sup> <a name="clarificationPrompt" id="@cdktf/aws-cdk.lexBot.LexBotConfig.property.clarificationPrompt"></a>

```typescript
public readonly clarificationPrompt: LexBotClarificationPrompt;
```

- *Type:* <a href="#@cdktf/aws-cdk.lexBot.LexBotClarificationPrompt">LexBotClarificationPrompt</a>

clarification_prompt block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lex_bot#clarification_prompt LexBot#clarification_prompt}

---

##### `createVersion`<sup>Optional</sup> <a name="createVersion" id="@cdktf/aws-cdk.lexBot.LexBotConfig.property.createVersion"></a>

```typescript
public readonly createVersion: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lex_bot#create_version LexBot#create_version}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/aws-cdk.lexBot.LexBotConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lex_bot#description LexBot#description}.

---

##### `detectSentiment`<sup>Optional</sup> <a name="detectSentiment" id="@cdktf/aws-cdk.lexBot.LexBotConfig.property.detectSentiment"></a>

```typescript
public readonly detectSentiment: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lex_bot#detect_sentiment LexBot#detect_sentiment}.

---

##### `enableModelImprovements`<sup>Optional</sup> <a name="enableModelImprovements" id="@cdktf/aws-cdk.lexBot.LexBotConfig.property.enableModelImprovements"></a>

```typescript
public readonly enableModelImprovements: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lex_bot#enable_model_improvements LexBot#enable_model_improvements}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/aws-cdk.lexBot.LexBotConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lex_bot#id LexBot#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `idleSessionTtlInSeconds`<sup>Optional</sup> <a name="idleSessionTtlInSeconds" id="@cdktf/aws-cdk.lexBot.LexBotConfig.property.idleSessionTtlInSeconds"></a>

```typescript
public readonly idleSessionTtlInSeconds: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lex_bot#idle_session_ttl_in_seconds LexBot#idle_session_ttl_in_seconds}.

---

##### `locale`<sup>Optional</sup> <a name="locale" id="@cdktf/aws-cdk.lexBot.LexBotConfig.property.locale"></a>

```typescript
public readonly locale: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lex_bot#locale LexBot#locale}.

---

##### `nluIntentConfidenceThreshold`<sup>Optional</sup> <a name="nluIntentConfidenceThreshold" id="@cdktf/aws-cdk.lexBot.LexBotConfig.property.nluIntentConfidenceThreshold"></a>

```typescript
public readonly nluIntentConfidenceThreshold: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lex_bot#nlu_intent_confidence_threshold LexBot#nlu_intent_confidence_threshold}.

---

##### `processBehavior`<sup>Optional</sup> <a name="processBehavior" id="@cdktf/aws-cdk.lexBot.LexBotConfig.property.processBehavior"></a>

```typescript
public readonly processBehavior: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lex_bot#process_behavior LexBot#process_behavior}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/aws-cdk.lexBot.LexBotConfig.property.timeouts"></a>

```typescript
public readonly timeouts: LexBotTimeouts;
```

- *Type:* <a href="#@cdktf/aws-cdk.lexBot.LexBotTimeouts">LexBotTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lex_bot#timeouts LexBot#timeouts}

---

##### `voiceId`<sup>Optional</sup> <a name="voiceId" id="@cdktf/aws-cdk.lexBot.LexBotConfig.property.voiceId"></a>

```typescript
public readonly voiceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lex_bot#voice_id LexBot#voice_id}.

---

### LexBotIntent <a name="LexBotIntent" id="@cdktf/aws-cdk.lexBot.LexBotIntent"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.lexBot.LexBotIntent.Initializer"></a>

```typescript
import { lexBot } from '@cdktf/aws-cdk'

const lexBotIntent: lexBot.LexBotIntent = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBotIntent.property.intentName">intentName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lex_bot#intent_name LexBot#intent_name}. |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBotIntent.property.intentVersion">intentVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lex_bot#intent_version LexBot#intent_version}. |

---

##### `intentName`<sup>Required</sup> <a name="intentName" id="@cdktf/aws-cdk.lexBot.LexBotIntent.property.intentName"></a>

```typescript
public readonly intentName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lex_bot#intent_name LexBot#intent_name}.

---

##### `intentVersion`<sup>Required</sup> <a name="intentVersion" id="@cdktf/aws-cdk.lexBot.LexBotIntent.property.intentVersion"></a>

```typescript
public readonly intentVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lex_bot#intent_version LexBot#intent_version}.

---

### LexBotTimeouts <a name="LexBotTimeouts" id="@cdktf/aws-cdk.lexBot.LexBotTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.lexBot.LexBotTimeouts.Initializer"></a>

```typescript
import { lexBot } from '@cdktf/aws-cdk'

const lexBotTimeouts: lexBot.LexBotTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBotTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lex_bot#create LexBot#create}. |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBotTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lex_bot#delete LexBot#delete}. |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBotTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lex_bot#update LexBot#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/aws-cdk.lexBot.LexBotTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lex_bot#create LexBot#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/aws-cdk.lexBot.LexBotTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lex_bot#delete LexBot#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/aws-cdk.lexBot.LexBotTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lex_bot#update LexBot#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### LexBotAbortStatementMessageList <a name="LexBotAbortStatementMessageList" id="@cdktf/aws-cdk.lexBot.LexBotAbortStatementMessageList"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.lexBot.LexBotAbortStatementMessageList.Initializer"></a>

```typescript
import { lexBot } from '@cdktf/aws-cdk'

new lexBot.LexBotAbortStatementMessageList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBotAbortStatementMessageList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBotAbortStatementMessageList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBotAbortStatementMessageList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.lexBot.LexBotAbortStatementMessageList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexBot.LexBotAbortStatementMessageList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/aws-cdk.lexBot.LexBotAbortStatementMessageList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBotAbortStatementMessageList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBotAbortStatementMessageList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBotAbortStatementMessageList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBotAbortStatementMessageList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBotAbortStatementMessageList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/aws-cdk.lexBot.LexBotAbortStatementMessageList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/aws-cdk.lexBot.LexBotAbortStatementMessageList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.lexBot.LexBotAbortStatementMessageList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.lexBot.LexBotAbortStatementMessageList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.lexBot.LexBotAbortStatementMessageList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.lexBot.LexBotAbortStatementMessageList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/aws-cdk.lexBot.LexBotAbortStatementMessageList.get"></a>

```typescript
public get(index: number): LexBotAbortStatementMessageOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/aws-cdk.lexBot.LexBotAbortStatementMessageList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBotAbortStatementMessageList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBotAbortStatementMessageList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBotAbortStatementMessageList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.lexBot.LexBotAbortStatementMessage">LexBotAbortStatementMessage</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.lexBot.LexBotAbortStatementMessageList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.lexBot.LexBotAbortStatementMessageList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.lexBot.LexBotAbortStatementMessageList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LexBotAbortStatementMessage[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.lexBot.LexBotAbortStatementMessage">LexBotAbortStatementMessage</a>[]

---


### LexBotAbortStatementMessageOutputReference <a name="LexBotAbortStatementMessageOutputReference" id="@cdktf/aws-cdk.lexBot.LexBotAbortStatementMessageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.lexBot.LexBotAbortStatementMessageOutputReference.Initializer"></a>

```typescript
import { lexBot } from '@cdktf/aws-cdk'

new lexBot.LexBotAbortStatementMessageOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBotAbortStatementMessageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBotAbortStatementMessageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBotAbortStatementMessageOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBotAbortStatementMessageOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.lexBot.LexBotAbortStatementMessageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexBot.LexBotAbortStatementMessageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/aws-cdk.lexBot.LexBotAbortStatementMessageOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/aws-cdk.lexBot.LexBotAbortStatementMessageOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBotAbortStatementMessageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBotAbortStatementMessageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBotAbortStatementMessageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBotAbortStatementMessageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBotAbortStatementMessageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBotAbortStatementMessageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBotAbortStatementMessageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBotAbortStatementMessageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBotAbortStatementMessageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBotAbortStatementMessageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBotAbortStatementMessageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBotAbortStatementMessageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBotAbortStatementMessageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBotAbortStatementMessageOutputReference.resetGroupNumber">resetGroupNumber</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.lexBot.LexBotAbortStatementMessageOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.lexBot.LexBotAbortStatementMessageOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexBot.LexBotAbortStatementMessageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.lexBot.LexBotAbortStatementMessageOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexBot.LexBotAbortStatementMessageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.lexBot.LexBotAbortStatementMessageOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexBot.LexBotAbortStatementMessageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.lexBot.LexBotAbortStatementMessageOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexBot.LexBotAbortStatementMessageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.lexBot.LexBotAbortStatementMessageOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexBot.LexBotAbortStatementMessageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.lexBot.LexBotAbortStatementMessageOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexBot.LexBotAbortStatementMessageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.lexBot.LexBotAbortStatementMessageOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexBot.LexBotAbortStatementMessageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.lexBot.LexBotAbortStatementMessageOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexBot.LexBotAbortStatementMessageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.lexBot.LexBotAbortStatementMessageOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexBot.LexBotAbortStatementMessageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.lexBot.LexBotAbortStatementMessageOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.lexBot.LexBotAbortStatementMessageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.lexBot.LexBotAbortStatementMessageOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.lexBot.LexBotAbortStatementMessageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.lexBot.LexBotAbortStatementMessageOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetGroupNumber` <a name="resetGroupNumber" id="@cdktf/aws-cdk.lexBot.LexBotAbortStatementMessageOutputReference.resetGroupNumber"></a>

```typescript
public resetGroupNumber(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBotAbortStatementMessageOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBotAbortStatementMessageOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBotAbortStatementMessageOutputReference.property.contentInput">contentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBotAbortStatementMessageOutputReference.property.contentTypeInput">contentTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBotAbortStatementMessageOutputReference.property.groupNumberInput">groupNumberInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBotAbortStatementMessageOutputReference.property.content">content</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBotAbortStatementMessageOutputReference.property.contentType">contentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBotAbortStatementMessageOutputReference.property.groupNumber">groupNumber</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBotAbortStatementMessageOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.lexBot.LexBotAbortStatementMessage">LexBotAbortStatementMessage</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.lexBot.LexBotAbortStatementMessageOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.lexBot.LexBotAbortStatementMessageOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `contentInput`<sup>Optional</sup> <a name="contentInput" id="@cdktf/aws-cdk.lexBot.LexBotAbortStatementMessageOutputReference.property.contentInput"></a>

```typescript
public readonly contentInput: string;
```

- *Type:* string

---

##### `contentTypeInput`<sup>Optional</sup> <a name="contentTypeInput" id="@cdktf/aws-cdk.lexBot.LexBotAbortStatementMessageOutputReference.property.contentTypeInput"></a>

```typescript
public readonly contentTypeInput: string;
```

- *Type:* string

---

##### `groupNumberInput`<sup>Optional</sup> <a name="groupNumberInput" id="@cdktf/aws-cdk.lexBot.LexBotAbortStatementMessageOutputReference.property.groupNumberInput"></a>

```typescript
public readonly groupNumberInput: number;
```

- *Type:* number

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/aws-cdk.lexBot.LexBotAbortStatementMessageOutputReference.property.content"></a>

```typescript
public readonly content: string;
```

- *Type:* string

---

##### `contentType`<sup>Required</sup> <a name="contentType" id="@cdktf/aws-cdk.lexBot.LexBotAbortStatementMessageOutputReference.property.contentType"></a>

```typescript
public readonly contentType: string;
```

- *Type:* string

---

##### `groupNumber`<sup>Required</sup> <a name="groupNumber" id="@cdktf/aws-cdk.lexBot.LexBotAbortStatementMessageOutputReference.property.groupNumber"></a>

```typescript
public readonly groupNumber: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.lexBot.LexBotAbortStatementMessageOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LexBotAbortStatementMessage;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.lexBot.LexBotAbortStatementMessage">LexBotAbortStatementMessage</a>

---


### LexBotAbortStatementOutputReference <a name="LexBotAbortStatementOutputReference" id="@cdktf/aws-cdk.lexBot.LexBotAbortStatementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.lexBot.LexBotAbortStatementOutputReference.Initializer"></a>

```typescript
import { lexBot } from '@cdktf/aws-cdk'

new lexBot.LexBotAbortStatementOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBotAbortStatementOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBotAbortStatementOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.lexBot.LexBotAbortStatementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexBot.LexBotAbortStatementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBotAbortStatementOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBotAbortStatementOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBotAbortStatementOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBotAbortStatementOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBotAbortStatementOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBotAbortStatementOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBotAbortStatementOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBotAbortStatementOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBotAbortStatementOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBotAbortStatementOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBotAbortStatementOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBotAbortStatementOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBotAbortStatementOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBotAbortStatementOutputReference.putMessage">putMessage</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBotAbortStatementOutputReference.resetResponseCard">resetResponseCard</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.lexBot.LexBotAbortStatementOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.lexBot.LexBotAbortStatementOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexBot.LexBotAbortStatementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.lexBot.LexBotAbortStatementOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexBot.LexBotAbortStatementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.lexBot.LexBotAbortStatementOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexBot.LexBotAbortStatementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.lexBot.LexBotAbortStatementOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexBot.LexBotAbortStatementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.lexBot.LexBotAbortStatementOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexBot.LexBotAbortStatementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.lexBot.LexBotAbortStatementOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexBot.LexBotAbortStatementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.lexBot.LexBotAbortStatementOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexBot.LexBotAbortStatementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.lexBot.LexBotAbortStatementOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexBot.LexBotAbortStatementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.lexBot.LexBotAbortStatementOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexBot.LexBotAbortStatementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.lexBot.LexBotAbortStatementOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.lexBot.LexBotAbortStatementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.lexBot.LexBotAbortStatementOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.lexBot.LexBotAbortStatementOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.lexBot.LexBotAbortStatementOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMessage` <a name="putMessage" id="@cdktf/aws-cdk.lexBot.LexBotAbortStatementOutputReference.putMessage"></a>

```typescript
public putMessage(value: IResolvable | LexBotAbortStatementMessage[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.lexBot.LexBotAbortStatementOutputReference.putMessage.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.lexBot.LexBotAbortStatementMessage">LexBotAbortStatementMessage</a>[]

---

##### `resetResponseCard` <a name="resetResponseCard" id="@cdktf/aws-cdk.lexBot.LexBotAbortStatementOutputReference.resetResponseCard"></a>

```typescript
public resetResponseCard(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBotAbortStatementOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBotAbortStatementOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBotAbortStatementOutputReference.property.message">message</a></code> | <code><a href="#@cdktf/aws-cdk.lexBot.LexBotAbortStatementMessageList">LexBotAbortStatementMessageList</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBotAbortStatementOutputReference.property.messageInput">messageInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.lexBot.LexBotAbortStatementMessage">LexBotAbortStatementMessage</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBotAbortStatementOutputReference.property.responseCardInput">responseCardInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBotAbortStatementOutputReference.property.responseCard">responseCard</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBotAbortStatementOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.lexBot.LexBotAbortStatement">LexBotAbortStatement</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.lexBot.LexBotAbortStatementOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.lexBot.LexBotAbortStatementOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/aws-cdk.lexBot.LexBotAbortStatementOutputReference.property.message"></a>

```typescript
public readonly message: LexBotAbortStatementMessageList;
```

- *Type:* <a href="#@cdktf/aws-cdk.lexBot.LexBotAbortStatementMessageList">LexBotAbortStatementMessageList</a>

---

##### `messageInput`<sup>Optional</sup> <a name="messageInput" id="@cdktf/aws-cdk.lexBot.LexBotAbortStatementOutputReference.property.messageInput"></a>

```typescript
public readonly messageInput: IResolvable | LexBotAbortStatementMessage[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.lexBot.LexBotAbortStatementMessage">LexBotAbortStatementMessage</a>[]

---

##### `responseCardInput`<sup>Optional</sup> <a name="responseCardInput" id="@cdktf/aws-cdk.lexBot.LexBotAbortStatementOutputReference.property.responseCardInput"></a>

```typescript
public readonly responseCardInput: string;
```

- *Type:* string

---

##### `responseCard`<sup>Required</sup> <a name="responseCard" id="@cdktf/aws-cdk.lexBot.LexBotAbortStatementOutputReference.property.responseCard"></a>

```typescript
public readonly responseCard: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.lexBot.LexBotAbortStatementOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LexBotAbortStatement;
```

- *Type:* <a href="#@cdktf/aws-cdk.lexBot.LexBotAbortStatement">LexBotAbortStatement</a>

---


### LexBotClarificationPromptMessageList <a name="LexBotClarificationPromptMessageList" id="@cdktf/aws-cdk.lexBot.LexBotClarificationPromptMessageList"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.lexBot.LexBotClarificationPromptMessageList.Initializer"></a>

```typescript
import { lexBot } from '@cdktf/aws-cdk'

new lexBot.LexBotClarificationPromptMessageList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBotClarificationPromptMessageList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBotClarificationPromptMessageList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBotClarificationPromptMessageList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.lexBot.LexBotClarificationPromptMessageList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexBot.LexBotClarificationPromptMessageList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/aws-cdk.lexBot.LexBotClarificationPromptMessageList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBotClarificationPromptMessageList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBotClarificationPromptMessageList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBotClarificationPromptMessageList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBotClarificationPromptMessageList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBotClarificationPromptMessageList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/aws-cdk.lexBot.LexBotClarificationPromptMessageList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/aws-cdk.lexBot.LexBotClarificationPromptMessageList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.lexBot.LexBotClarificationPromptMessageList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.lexBot.LexBotClarificationPromptMessageList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.lexBot.LexBotClarificationPromptMessageList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.lexBot.LexBotClarificationPromptMessageList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/aws-cdk.lexBot.LexBotClarificationPromptMessageList.get"></a>

```typescript
public get(index: number): LexBotClarificationPromptMessageOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/aws-cdk.lexBot.LexBotClarificationPromptMessageList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBotClarificationPromptMessageList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBotClarificationPromptMessageList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBotClarificationPromptMessageList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.lexBot.LexBotClarificationPromptMessage">LexBotClarificationPromptMessage</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.lexBot.LexBotClarificationPromptMessageList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.lexBot.LexBotClarificationPromptMessageList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.lexBot.LexBotClarificationPromptMessageList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LexBotClarificationPromptMessage[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.lexBot.LexBotClarificationPromptMessage">LexBotClarificationPromptMessage</a>[]

---


### LexBotClarificationPromptMessageOutputReference <a name="LexBotClarificationPromptMessageOutputReference" id="@cdktf/aws-cdk.lexBot.LexBotClarificationPromptMessageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.lexBot.LexBotClarificationPromptMessageOutputReference.Initializer"></a>

```typescript
import { lexBot } from '@cdktf/aws-cdk'

new lexBot.LexBotClarificationPromptMessageOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBotClarificationPromptMessageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBotClarificationPromptMessageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBotClarificationPromptMessageOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBotClarificationPromptMessageOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.lexBot.LexBotClarificationPromptMessageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexBot.LexBotClarificationPromptMessageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/aws-cdk.lexBot.LexBotClarificationPromptMessageOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/aws-cdk.lexBot.LexBotClarificationPromptMessageOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBotClarificationPromptMessageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBotClarificationPromptMessageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBotClarificationPromptMessageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBotClarificationPromptMessageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBotClarificationPromptMessageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBotClarificationPromptMessageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBotClarificationPromptMessageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBotClarificationPromptMessageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBotClarificationPromptMessageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBotClarificationPromptMessageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBotClarificationPromptMessageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBotClarificationPromptMessageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBotClarificationPromptMessageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBotClarificationPromptMessageOutputReference.resetGroupNumber">resetGroupNumber</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.lexBot.LexBotClarificationPromptMessageOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.lexBot.LexBotClarificationPromptMessageOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexBot.LexBotClarificationPromptMessageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.lexBot.LexBotClarificationPromptMessageOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexBot.LexBotClarificationPromptMessageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.lexBot.LexBotClarificationPromptMessageOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexBot.LexBotClarificationPromptMessageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.lexBot.LexBotClarificationPromptMessageOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexBot.LexBotClarificationPromptMessageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.lexBot.LexBotClarificationPromptMessageOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexBot.LexBotClarificationPromptMessageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.lexBot.LexBotClarificationPromptMessageOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexBot.LexBotClarificationPromptMessageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.lexBot.LexBotClarificationPromptMessageOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexBot.LexBotClarificationPromptMessageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.lexBot.LexBotClarificationPromptMessageOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexBot.LexBotClarificationPromptMessageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.lexBot.LexBotClarificationPromptMessageOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexBot.LexBotClarificationPromptMessageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.lexBot.LexBotClarificationPromptMessageOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.lexBot.LexBotClarificationPromptMessageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.lexBot.LexBotClarificationPromptMessageOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.lexBot.LexBotClarificationPromptMessageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.lexBot.LexBotClarificationPromptMessageOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetGroupNumber` <a name="resetGroupNumber" id="@cdktf/aws-cdk.lexBot.LexBotClarificationPromptMessageOutputReference.resetGroupNumber"></a>

```typescript
public resetGroupNumber(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBotClarificationPromptMessageOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBotClarificationPromptMessageOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBotClarificationPromptMessageOutputReference.property.contentInput">contentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBotClarificationPromptMessageOutputReference.property.contentTypeInput">contentTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBotClarificationPromptMessageOutputReference.property.groupNumberInput">groupNumberInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBotClarificationPromptMessageOutputReference.property.content">content</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBotClarificationPromptMessageOutputReference.property.contentType">contentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBotClarificationPromptMessageOutputReference.property.groupNumber">groupNumber</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBotClarificationPromptMessageOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.lexBot.LexBotClarificationPromptMessage">LexBotClarificationPromptMessage</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.lexBot.LexBotClarificationPromptMessageOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.lexBot.LexBotClarificationPromptMessageOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `contentInput`<sup>Optional</sup> <a name="contentInput" id="@cdktf/aws-cdk.lexBot.LexBotClarificationPromptMessageOutputReference.property.contentInput"></a>

```typescript
public readonly contentInput: string;
```

- *Type:* string

---

##### `contentTypeInput`<sup>Optional</sup> <a name="contentTypeInput" id="@cdktf/aws-cdk.lexBot.LexBotClarificationPromptMessageOutputReference.property.contentTypeInput"></a>

```typescript
public readonly contentTypeInput: string;
```

- *Type:* string

---

##### `groupNumberInput`<sup>Optional</sup> <a name="groupNumberInput" id="@cdktf/aws-cdk.lexBot.LexBotClarificationPromptMessageOutputReference.property.groupNumberInput"></a>

```typescript
public readonly groupNumberInput: number;
```

- *Type:* number

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/aws-cdk.lexBot.LexBotClarificationPromptMessageOutputReference.property.content"></a>

```typescript
public readonly content: string;
```

- *Type:* string

---

##### `contentType`<sup>Required</sup> <a name="contentType" id="@cdktf/aws-cdk.lexBot.LexBotClarificationPromptMessageOutputReference.property.contentType"></a>

```typescript
public readonly contentType: string;
```

- *Type:* string

---

##### `groupNumber`<sup>Required</sup> <a name="groupNumber" id="@cdktf/aws-cdk.lexBot.LexBotClarificationPromptMessageOutputReference.property.groupNumber"></a>

```typescript
public readonly groupNumber: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.lexBot.LexBotClarificationPromptMessageOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LexBotClarificationPromptMessage;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.lexBot.LexBotClarificationPromptMessage">LexBotClarificationPromptMessage</a>

---


### LexBotClarificationPromptOutputReference <a name="LexBotClarificationPromptOutputReference" id="@cdktf/aws-cdk.lexBot.LexBotClarificationPromptOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.lexBot.LexBotClarificationPromptOutputReference.Initializer"></a>

```typescript
import { lexBot } from '@cdktf/aws-cdk'

new lexBot.LexBotClarificationPromptOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBotClarificationPromptOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBotClarificationPromptOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.lexBot.LexBotClarificationPromptOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexBot.LexBotClarificationPromptOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBotClarificationPromptOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBotClarificationPromptOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBotClarificationPromptOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBotClarificationPromptOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBotClarificationPromptOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBotClarificationPromptOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBotClarificationPromptOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBotClarificationPromptOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBotClarificationPromptOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBotClarificationPromptOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBotClarificationPromptOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBotClarificationPromptOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBotClarificationPromptOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBotClarificationPromptOutputReference.putMessage">putMessage</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBotClarificationPromptOutputReference.resetResponseCard">resetResponseCard</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.lexBot.LexBotClarificationPromptOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.lexBot.LexBotClarificationPromptOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexBot.LexBotClarificationPromptOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.lexBot.LexBotClarificationPromptOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexBot.LexBotClarificationPromptOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.lexBot.LexBotClarificationPromptOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexBot.LexBotClarificationPromptOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.lexBot.LexBotClarificationPromptOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexBot.LexBotClarificationPromptOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.lexBot.LexBotClarificationPromptOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexBot.LexBotClarificationPromptOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.lexBot.LexBotClarificationPromptOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexBot.LexBotClarificationPromptOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.lexBot.LexBotClarificationPromptOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexBot.LexBotClarificationPromptOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.lexBot.LexBotClarificationPromptOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexBot.LexBotClarificationPromptOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.lexBot.LexBotClarificationPromptOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexBot.LexBotClarificationPromptOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.lexBot.LexBotClarificationPromptOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.lexBot.LexBotClarificationPromptOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.lexBot.LexBotClarificationPromptOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.lexBot.LexBotClarificationPromptOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.lexBot.LexBotClarificationPromptOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMessage` <a name="putMessage" id="@cdktf/aws-cdk.lexBot.LexBotClarificationPromptOutputReference.putMessage"></a>

```typescript
public putMessage(value: IResolvable | LexBotClarificationPromptMessage[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.lexBot.LexBotClarificationPromptOutputReference.putMessage.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.lexBot.LexBotClarificationPromptMessage">LexBotClarificationPromptMessage</a>[]

---

##### `resetResponseCard` <a name="resetResponseCard" id="@cdktf/aws-cdk.lexBot.LexBotClarificationPromptOutputReference.resetResponseCard"></a>

```typescript
public resetResponseCard(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBotClarificationPromptOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBotClarificationPromptOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBotClarificationPromptOutputReference.property.message">message</a></code> | <code><a href="#@cdktf/aws-cdk.lexBot.LexBotClarificationPromptMessageList">LexBotClarificationPromptMessageList</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBotClarificationPromptOutputReference.property.maxAttemptsInput">maxAttemptsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBotClarificationPromptOutputReference.property.messageInput">messageInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.lexBot.LexBotClarificationPromptMessage">LexBotClarificationPromptMessage</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBotClarificationPromptOutputReference.property.responseCardInput">responseCardInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBotClarificationPromptOutputReference.property.maxAttempts">maxAttempts</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBotClarificationPromptOutputReference.property.responseCard">responseCard</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBotClarificationPromptOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.lexBot.LexBotClarificationPrompt">LexBotClarificationPrompt</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.lexBot.LexBotClarificationPromptOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.lexBot.LexBotClarificationPromptOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/aws-cdk.lexBot.LexBotClarificationPromptOutputReference.property.message"></a>

```typescript
public readonly message: LexBotClarificationPromptMessageList;
```

- *Type:* <a href="#@cdktf/aws-cdk.lexBot.LexBotClarificationPromptMessageList">LexBotClarificationPromptMessageList</a>

---

##### `maxAttemptsInput`<sup>Optional</sup> <a name="maxAttemptsInput" id="@cdktf/aws-cdk.lexBot.LexBotClarificationPromptOutputReference.property.maxAttemptsInput"></a>

```typescript
public readonly maxAttemptsInput: number;
```

- *Type:* number

---

##### `messageInput`<sup>Optional</sup> <a name="messageInput" id="@cdktf/aws-cdk.lexBot.LexBotClarificationPromptOutputReference.property.messageInput"></a>

```typescript
public readonly messageInput: IResolvable | LexBotClarificationPromptMessage[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.lexBot.LexBotClarificationPromptMessage">LexBotClarificationPromptMessage</a>[]

---

##### `responseCardInput`<sup>Optional</sup> <a name="responseCardInput" id="@cdktf/aws-cdk.lexBot.LexBotClarificationPromptOutputReference.property.responseCardInput"></a>

```typescript
public readonly responseCardInput: string;
```

- *Type:* string

---

##### `maxAttempts`<sup>Required</sup> <a name="maxAttempts" id="@cdktf/aws-cdk.lexBot.LexBotClarificationPromptOutputReference.property.maxAttempts"></a>

```typescript
public readonly maxAttempts: number;
```

- *Type:* number

---

##### `responseCard`<sup>Required</sup> <a name="responseCard" id="@cdktf/aws-cdk.lexBot.LexBotClarificationPromptOutputReference.property.responseCard"></a>

```typescript
public readonly responseCard: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.lexBot.LexBotClarificationPromptOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LexBotClarificationPrompt;
```

- *Type:* <a href="#@cdktf/aws-cdk.lexBot.LexBotClarificationPrompt">LexBotClarificationPrompt</a>

---


### LexBotIntentList <a name="LexBotIntentList" id="@cdktf/aws-cdk.lexBot.LexBotIntentList"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.lexBot.LexBotIntentList.Initializer"></a>

```typescript
import { lexBot } from '@cdktf/aws-cdk'

new lexBot.LexBotIntentList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBotIntentList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBotIntentList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBotIntentList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.lexBot.LexBotIntentList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexBot.LexBotIntentList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/aws-cdk.lexBot.LexBotIntentList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBotIntentList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBotIntentList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBotIntentList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBotIntentList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBotIntentList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/aws-cdk.lexBot.LexBotIntentList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/aws-cdk.lexBot.LexBotIntentList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.lexBot.LexBotIntentList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.lexBot.LexBotIntentList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.lexBot.LexBotIntentList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.lexBot.LexBotIntentList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/aws-cdk.lexBot.LexBotIntentList.get"></a>

```typescript
public get(index: number): LexBotIntentOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/aws-cdk.lexBot.LexBotIntentList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBotIntentList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBotIntentList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBotIntentList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.lexBot.LexBotIntent">LexBotIntent</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.lexBot.LexBotIntentList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.lexBot.LexBotIntentList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.lexBot.LexBotIntentList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LexBotIntent[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.lexBot.LexBotIntent">LexBotIntent</a>[]

---


### LexBotIntentOutputReference <a name="LexBotIntentOutputReference" id="@cdktf/aws-cdk.lexBot.LexBotIntentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.lexBot.LexBotIntentOutputReference.Initializer"></a>

```typescript
import { lexBot } from '@cdktf/aws-cdk'

new lexBot.LexBotIntentOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBotIntentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBotIntentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBotIntentOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBotIntentOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.lexBot.LexBotIntentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexBot.LexBotIntentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/aws-cdk.lexBot.LexBotIntentOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/aws-cdk.lexBot.LexBotIntentOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBotIntentOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBotIntentOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBotIntentOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBotIntentOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBotIntentOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBotIntentOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBotIntentOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBotIntentOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBotIntentOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBotIntentOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBotIntentOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBotIntentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBotIntentOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.lexBot.LexBotIntentOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.lexBot.LexBotIntentOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexBot.LexBotIntentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.lexBot.LexBotIntentOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexBot.LexBotIntentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.lexBot.LexBotIntentOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexBot.LexBotIntentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.lexBot.LexBotIntentOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexBot.LexBotIntentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.lexBot.LexBotIntentOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexBot.LexBotIntentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.lexBot.LexBotIntentOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexBot.LexBotIntentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.lexBot.LexBotIntentOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexBot.LexBotIntentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.lexBot.LexBotIntentOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexBot.LexBotIntentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.lexBot.LexBotIntentOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexBot.LexBotIntentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.lexBot.LexBotIntentOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.lexBot.LexBotIntentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.lexBot.LexBotIntentOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.lexBot.LexBotIntentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.lexBot.LexBotIntentOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBotIntentOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBotIntentOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBotIntentOutputReference.property.intentNameInput">intentNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBotIntentOutputReference.property.intentVersionInput">intentVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBotIntentOutputReference.property.intentName">intentName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBotIntentOutputReference.property.intentVersion">intentVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBotIntentOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.lexBot.LexBotIntent">LexBotIntent</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.lexBot.LexBotIntentOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.lexBot.LexBotIntentOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `intentNameInput`<sup>Optional</sup> <a name="intentNameInput" id="@cdktf/aws-cdk.lexBot.LexBotIntentOutputReference.property.intentNameInput"></a>

```typescript
public readonly intentNameInput: string;
```

- *Type:* string

---

##### `intentVersionInput`<sup>Optional</sup> <a name="intentVersionInput" id="@cdktf/aws-cdk.lexBot.LexBotIntentOutputReference.property.intentVersionInput"></a>

```typescript
public readonly intentVersionInput: string;
```

- *Type:* string

---

##### `intentName`<sup>Required</sup> <a name="intentName" id="@cdktf/aws-cdk.lexBot.LexBotIntentOutputReference.property.intentName"></a>

```typescript
public readonly intentName: string;
```

- *Type:* string

---

##### `intentVersion`<sup>Required</sup> <a name="intentVersion" id="@cdktf/aws-cdk.lexBot.LexBotIntentOutputReference.property.intentVersion"></a>

```typescript
public readonly intentVersion: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.lexBot.LexBotIntentOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LexBotIntent;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.lexBot.LexBotIntent">LexBotIntent</a>

---


### LexBotTimeoutsOutputReference <a name="LexBotTimeoutsOutputReference" id="@cdktf/aws-cdk.lexBot.LexBotTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.lexBot.LexBotTimeoutsOutputReference.Initializer"></a>

```typescript
import { lexBot } from '@cdktf/aws-cdk'

new lexBot.LexBotTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBotTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBotTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.lexBot.LexBotTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexBot.LexBotTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBotTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBotTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBotTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBotTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBotTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBotTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBotTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBotTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBotTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBotTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBotTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBotTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBotTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBotTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBotTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBotTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.lexBot.LexBotTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.lexBot.LexBotTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexBot.LexBotTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.lexBot.LexBotTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexBot.LexBotTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.lexBot.LexBotTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexBot.LexBotTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.lexBot.LexBotTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexBot.LexBotTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.lexBot.LexBotTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexBot.LexBotTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.lexBot.LexBotTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexBot.LexBotTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.lexBot.LexBotTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexBot.LexBotTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.lexBot.LexBotTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexBot.LexBotTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.lexBot.LexBotTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexBot.LexBotTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.lexBot.LexBotTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.lexBot.LexBotTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.lexBot.LexBotTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.lexBot.LexBotTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.lexBot.LexBotTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/aws-cdk.lexBot.LexBotTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/aws-cdk.lexBot.LexBotTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/aws-cdk.lexBot.LexBotTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBotTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBotTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBotTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBotTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBotTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBotTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBotTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBotTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexBot.LexBotTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.lexBot.LexBotTimeouts">LexBotTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.lexBot.LexBotTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.lexBot.LexBotTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/aws-cdk.lexBot.LexBotTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/aws-cdk.lexBot.LexBotTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/aws-cdk.lexBot.LexBotTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/aws-cdk.lexBot.LexBotTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/aws-cdk.lexBot.LexBotTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/aws-cdk.lexBot.LexBotTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.lexBot.LexBotTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LexBotTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.lexBot.LexBotTimeouts">LexBotTimeouts</a>

---



