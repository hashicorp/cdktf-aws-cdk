# `elasticBeanstalkEnvironment` Submodule <a name="`elasticBeanstalkEnvironment` Submodule" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ElasticBeanstalkEnvironment <a name="ElasticBeanstalkEnvironment" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/elastic_beanstalk_environment aws_elastic_beanstalk_environment}.

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.Initializer"></a>

```typescript
import { elasticBeanstalkEnvironment } from '@cdktf/aws-cdk'

new elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment(scope: Construct, id: string, config: ElasticBeanstalkEnvironmentConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentConfig">ElasticBeanstalkEnvironmentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentConfig">ElasticBeanstalkEnvironmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.putSetting">putSetting</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.resetCnamePrefix">resetCnamePrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.resetPlatformArn">resetPlatformArn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.resetPollInterval">resetPollInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.resetSetting">resetSetting</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.resetSolutionStackName">resetSolutionStackName</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.resetTemplateName">resetTemplateName</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.resetTier">resetTier</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.resetVersionLabel">resetVersionLabel</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.resetWaitForReadyTimeout">resetWaitForReadyTimeout</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putSetting` <a name="putSetting" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.putSetting"></a>

```typescript
public putSetting(value: IResolvable | ElasticBeanstalkEnvironmentSetting[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.putSetting.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSetting">ElasticBeanstalkEnvironmentSetting</a>[]

---

##### `resetCnamePrefix` <a name="resetCnamePrefix" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.resetCnamePrefix"></a>

```typescript
public resetCnamePrefix(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.resetId"></a>

```typescript
public resetId(): void
```

##### `resetPlatformArn` <a name="resetPlatformArn" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.resetPlatformArn"></a>

```typescript
public resetPlatformArn(): void
```

##### `resetPollInterval` <a name="resetPollInterval" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.resetPollInterval"></a>

```typescript
public resetPollInterval(): void
```

##### `resetSetting` <a name="resetSetting" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.resetSetting"></a>

```typescript
public resetSetting(): void
```

##### `resetSolutionStackName` <a name="resetSolutionStackName" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.resetSolutionStackName"></a>

```typescript
public resetSolutionStackName(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

##### `resetTemplateName` <a name="resetTemplateName" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.resetTemplateName"></a>

```typescript
public resetTemplateName(): void
```

##### `resetTier` <a name="resetTier" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.resetTier"></a>

```typescript
public resetTier(): void
```

##### `resetVersionLabel` <a name="resetVersionLabel" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.resetVersionLabel"></a>

```typescript
public resetVersionLabel(): void
```

##### `resetWaitForReadyTimeout` <a name="resetWaitForReadyTimeout" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.resetWaitForReadyTimeout"></a>

```typescript
public resetWaitForReadyTimeout(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ElasticBeanstalkEnvironment resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.isConstruct"></a>

```typescript
import { elasticBeanstalkEnvironment } from '@cdktf/aws-cdk'

elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.isTerraformElement"></a>

```typescript
import { elasticBeanstalkEnvironment } from '@cdktf/aws-cdk'

elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.isTerraformResource"></a>

```typescript
import { elasticBeanstalkEnvironment } from '@cdktf/aws-cdk'

elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.generateConfigForImport"></a>

```typescript
import { elasticBeanstalkEnvironment } from '@cdktf/aws-cdk'

elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ElasticBeanstalkEnvironment resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ElasticBeanstalkEnvironment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ElasticBeanstalkEnvironment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/elastic_beanstalk_environment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ElasticBeanstalkEnvironment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.allSettings">allSettings</a></code> | <code><a href="#@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsList">ElasticBeanstalkEnvironmentAllSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.autoscalingGroups">autoscalingGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.cname">cname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.endpointUrl">endpointUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.instances">instances</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.launchConfigurations">launchConfigurations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.loadBalancers">loadBalancers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.queues">queues</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.setting">setting</a></code> | <code><a href="#@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingList">ElasticBeanstalkEnvironmentSettingList</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.triggers">triggers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.applicationInput">applicationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.cnamePrefixInput">cnamePrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.platformArnInput">platformArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.pollIntervalInput">pollIntervalInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.settingInput">settingInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSetting">ElasticBeanstalkEnvironmentSetting</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.solutionStackNameInput">solutionStackNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.templateNameInput">templateNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.tierInput">tierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.versionLabelInput">versionLabelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.waitForReadyTimeoutInput">waitForReadyTimeoutInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.application">application</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.cnamePrefix">cnamePrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.platformArn">platformArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.pollInterval">pollInterval</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.solutionStackName">solutionStackName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.templateName">templateName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.tier">tier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.versionLabel">versionLabel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.waitForReadyTimeout">waitForReadyTimeout</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `allSettings`<sup>Required</sup> <a name="allSettings" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.allSettings"></a>

```typescript
public readonly allSettings: ElasticBeanstalkEnvironmentAllSettingsList;
```

- *Type:* <a href="#@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsList">ElasticBeanstalkEnvironmentAllSettingsList</a>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `autoscalingGroups`<sup>Required</sup> <a name="autoscalingGroups" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.autoscalingGroups"></a>

```typescript
public readonly autoscalingGroups: string[];
```

- *Type:* string[]

---

##### `cname`<sup>Required</sup> <a name="cname" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.cname"></a>

```typescript
public readonly cname: string;
```

- *Type:* string

---

##### `endpointUrl`<sup>Required</sup> <a name="endpointUrl" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.endpointUrl"></a>

```typescript
public readonly endpointUrl: string;
```

- *Type:* string

---

##### `instances`<sup>Required</sup> <a name="instances" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.instances"></a>

```typescript
public readonly instances: string[];
```

- *Type:* string[]

---

##### `launchConfigurations`<sup>Required</sup> <a name="launchConfigurations" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.launchConfigurations"></a>

```typescript
public readonly launchConfigurations: string[];
```

- *Type:* string[]

---

##### `loadBalancers`<sup>Required</sup> <a name="loadBalancers" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.loadBalancers"></a>

```typescript
public readonly loadBalancers: string[];
```

- *Type:* string[]

---

##### `queues`<sup>Required</sup> <a name="queues" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.queues"></a>

```typescript
public readonly queues: string[];
```

- *Type:* string[]

---

##### `setting`<sup>Required</sup> <a name="setting" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.setting"></a>

```typescript
public readonly setting: ElasticBeanstalkEnvironmentSettingList;
```

- *Type:* <a href="#@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingList">ElasticBeanstalkEnvironmentSettingList</a>

---

##### `triggers`<sup>Required</sup> <a name="triggers" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.triggers"></a>

```typescript
public readonly triggers: string[];
```

- *Type:* string[]

---

##### `applicationInput`<sup>Optional</sup> <a name="applicationInput" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.applicationInput"></a>

```typescript
public readonly applicationInput: string;
```

- *Type:* string

---

##### `cnamePrefixInput`<sup>Optional</sup> <a name="cnamePrefixInput" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.cnamePrefixInput"></a>

```typescript
public readonly cnamePrefixInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `platformArnInput`<sup>Optional</sup> <a name="platformArnInput" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.platformArnInput"></a>

```typescript
public readonly platformArnInput: string;
```

- *Type:* string

---

##### `pollIntervalInput`<sup>Optional</sup> <a name="pollIntervalInput" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.pollIntervalInput"></a>

```typescript
public readonly pollIntervalInput: string;
```

- *Type:* string

---

##### `settingInput`<sup>Optional</sup> <a name="settingInput" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.settingInput"></a>

```typescript
public readonly settingInput: IResolvable | ElasticBeanstalkEnvironmentSetting[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSetting">ElasticBeanstalkEnvironmentSetting</a>[]

---

##### `solutionStackNameInput`<sup>Optional</sup> <a name="solutionStackNameInput" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.solutionStackNameInput"></a>

```typescript
public readonly solutionStackNameInput: string;
```

- *Type:* string

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `templateNameInput`<sup>Optional</sup> <a name="templateNameInput" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.templateNameInput"></a>

```typescript
public readonly templateNameInput: string;
```

- *Type:* string

---

##### `tierInput`<sup>Optional</sup> <a name="tierInput" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.tierInput"></a>

```typescript
public readonly tierInput: string;
```

- *Type:* string

---

##### `versionLabelInput`<sup>Optional</sup> <a name="versionLabelInput" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.versionLabelInput"></a>

```typescript
public readonly versionLabelInput: string;
```

- *Type:* string

---

##### `waitForReadyTimeoutInput`<sup>Optional</sup> <a name="waitForReadyTimeoutInput" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.waitForReadyTimeoutInput"></a>

```typescript
public readonly waitForReadyTimeoutInput: string;
```

- *Type:* string

---

##### `application`<sup>Required</sup> <a name="application" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.application"></a>

```typescript
public readonly application: string;
```

- *Type:* string

---

##### `cnamePrefix`<sup>Required</sup> <a name="cnamePrefix" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.cnamePrefix"></a>

```typescript
public readonly cnamePrefix: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `platformArn`<sup>Required</sup> <a name="platformArn" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.platformArn"></a>

```typescript
public readonly platformArn: string;
```

- *Type:* string

---

##### `pollInterval`<sup>Required</sup> <a name="pollInterval" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.pollInterval"></a>

```typescript
public readonly pollInterval: string;
```

- *Type:* string

---

##### `solutionStackName`<sup>Required</sup> <a name="solutionStackName" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.solutionStackName"></a>

```typescript
public readonly solutionStackName: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `templateName`<sup>Required</sup> <a name="templateName" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.templateName"></a>

```typescript
public readonly templateName: string;
```

- *Type:* string

---

##### `tier`<sup>Required</sup> <a name="tier" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.tier"></a>

```typescript
public readonly tier: string;
```

- *Type:* string

---

##### `versionLabel`<sup>Required</sup> <a name="versionLabel" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.versionLabel"></a>

```typescript
public readonly versionLabel: string;
```

- *Type:* string

---

##### `waitForReadyTimeout`<sup>Required</sup> <a name="waitForReadyTimeout" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.waitForReadyTimeout"></a>

```typescript
public readonly waitForReadyTimeout: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironment.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ElasticBeanstalkEnvironmentAllSettings <a name="ElasticBeanstalkEnvironmentAllSettings" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettings.Initializer"></a>

```typescript
import { elasticBeanstalkEnvironment } from '@cdktf/aws-cdk'

const elasticBeanstalkEnvironmentAllSettings: elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettings = { ... }
```


### ElasticBeanstalkEnvironmentConfig <a name="ElasticBeanstalkEnvironmentConfig" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentConfig.Initializer"></a>

```typescript
import { elasticBeanstalkEnvironment } from '@cdktf/aws-cdk'

const elasticBeanstalkEnvironmentConfig: elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentConfig.property.application">application</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/elastic_beanstalk_environment#application ElasticBeanstalkEnvironment#application}. |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/elastic_beanstalk_environment#name ElasticBeanstalkEnvironment#name}. |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentConfig.property.cnamePrefix">cnamePrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/elastic_beanstalk_environment#cname_prefix ElasticBeanstalkEnvironment#cname_prefix}. |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/elastic_beanstalk_environment#description ElasticBeanstalkEnvironment#description}. |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/elastic_beanstalk_environment#id ElasticBeanstalkEnvironment#id}. |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentConfig.property.platformArn">platformArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/elastic_beanstalk_environment#platform_arn ElasticBeanstalkEnvironment#platform_arn}. |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentConfig.property.pollInterval">pollInterval</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/elastic_beanstalk_environment#poll_interval ElasticBeanstalkEnvironment#poll_interval}. |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentConfig.property.setting">setting</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSetting">ElasticBeanstalkEnvironmentSetting</a>[]</code> | setting block. |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentConfig.property.solutionStackName">solutionStackName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/elastic_beanstalk_environment#solution_stack_name ElasticBeanstalkEnvironment#solution_stack_name}. |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/elastic_beanstalk_environment#tags ElasticBeanstalkEnvironment#tags}. |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/elastic_beanstalk_environment#tags_all ElasticBeanstalkEnvironment#tags_all}. |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentConfig.property.templateName">templateName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/elastic_beanstalk_environment#template_name ElasticBeanstalkEnvironment#template_name}. |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentConfig.property.tier">tier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/elastic_beanstalk_environment#tier ElasticBeanstalkEnvironment#tier}. |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentConfig.property.versionLabel">versionLabel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/elastic_beanstalk_environment#version_label ElasticBeanstalkEnvironment#version_label}. |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentConfig.property.waitForReadyTimeout">waitForReadyTimeout</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/elastic_beanstalk_environment#wait_for_ready_timeout ElasticBeanstalkEnvironment#wait_for_ready_timeout}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `application`<sup>Required</sup> <a name="application" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentConfig.property.application"></a>

```typescript
public readonly application: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/elastic_beanstalk_environment#application ElasticBeanstalkEnvironment#application}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/elastic_beanstalk_environment#name ElasticBeanstalkEnvironment#name}.

---

##### `cnamePrefix`<sup>Optional</sup> <a name="cnamePrefix" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentConfig.property.cnamePrefix"></a>

```typescript
public readonly cnamePrefix: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/elastic_beanstalk_environment#cname_prefix ElasticBeanstalkEnvironment#cname_prefix}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/elastic_beanstalk_environment#description ElasticBeanstalkEnvironment#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/elastic_beanstalk_environment#id ElasticBeanstalkEnvironment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `platformArn`<sup>Optional</sup> <a name="platformArn" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentConfig.property.platformArn"></a>

```typescript
public readonly platformArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/elastic_beanstalk_environment#platform_arn ElasticBeanstalkEnvironment#platform_arn}.

---

##### `pollInterval`<sup>Optional</sup> <a name="pollInterval" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentConfig.property.pollInterval"></a>

```typescript
public readonly pollInterval: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/elastic_beanstalk_environment#poll_interval ElasticBeanstalkEnvironment#poll_interval}.

---

##### `setting`<sup>Optional</sup> <a name="setting" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentConfig.property.setting"></a>

```typescript
public readonly setting: IResolvable | ElasticBeanstalkEnvironmentSetting[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSetting">ElasticBeanstalkEnvironmentSetting</a>[]

setting block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/elastic_beanstalk_environment#setting ElasticBeanstalkEnvironment#setting}

---

##### `solutionStackName`<sup>Optional</sup> <a name="solutionStackName" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentConfig.property.solutionStackName"></a>

```typescript
public readonly solutionStackName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/elastic_beanstalk_environment#solution_stack_name ElasticBeanstalkEnvironment#solution_stack_name}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/elastic_beanstalk_environment#tags ElasticBeanstalkEnvironment#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/elastic_beanstalk_environment#tags_all ElasticBeanstalkEnvironment#tags_all}.

---

##### `templateName`<sup>Optional</sup> <a name="templateName" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentConfig.property.templateName"></a>

```typescript
public readonly templateName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/elastic_beanstalk_environment#template_name ElasticBeanstalkEnvironment#template_name}.

---

##### `tier`<sup>Optional</sup> <a name="tier" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentConfig.property.tier"></a>

```typescript
public readonly tier: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/elastic_beanstalk_environment#tier ElasticBeanstalkEnvironment#tier}.

---

##### `versionLabel`<sup>Optional</sup> <a name="versionLabel" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentConfig.property.versionLabel"></a>

```typescript
public readonly versionLabel: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/elastic_beanstalk_environment#version_label ElasticBeanstalkEnvironment#version_label}.

---

##### `waitForReadyTimeout`<sup>Optional</sup> <a name="waitForReadyTimeout" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentConfig.property.waitForReadyTimeout"></a>

```typescript
public readonly waitForReadyTimeout: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/elastic_beanstalk_environment#wait_for_ready_timeout ElasticBeanstalkEnvironment#wait_for_ready_timeout}.

---

### ElasticBeanstalkEnvironmentSetting <a name="ElasticBeanstalkEnvironmentSetting" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSetting"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSetting.Initializer"></a>

```typescript
import { elasticBeanstalkEnvironment } from '@cdktf/aws-cdk'

const elasticBeanstalkEnvironmentSetting: elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSetting = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSetting.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/elastic_beanstalk_environment#name ElasticBeanstalkEnvironment#name}. |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSetting.property.namespace">namespace</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/elastic_beanstalk_environment#namespace ElasticBeanstalkEnvironment#namespace}. |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSetting.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/elastic_beanstalk_environment#value ElasticBeanstalkEnvironment#value}. |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSetting.property.resource">resource</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/elastic_beanstalk_environment#resource ElasticBeanstalkEnvironment#resource}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSetting.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/elastic_beanstalk_environment#name ElasticBeanstalkEnvironment#name}.

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSetting.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/elastic_beanstalk_environment#namespace ElasticBeanstalkEnvironment#namespace}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSetting.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/elastic_beanstalk_environment#value ElasticBeanstalkEnvironment#value}.

---

##### `resource`<sup>Optional</sup> <a name="resource" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSetting.property.resource"></a>

```typescript
public readonly resource: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/elastic_beanstalk_environment#resource ElasticBeanstalkEnvironment#resource}.

---

## Classes <a name="Classes" id="Classes"></a>

### ElasticBeanstalkEnvironmentAllSettingsList <a name="ElasticBeanstalkEnvironmentAllSettingsList" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsList.Initializer"></a>

```typescript
import { elasticBeanstalkEnvironment } from '@cdktf/aws-cdk'

new elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsList.get"></a>

```typescript
public get(index: number): ElasticBeanstalkEnvironmentAllSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### ElasticBeanstalkEnvironmentAllSettingsOutputReference <a name="ElasticBeanstalkEnvironmentAllSettingsOutputReference" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsOutputReference.Initializer"></a>

```typescript
import { elasticBeanstalkEnvironment } from '@cdktf/aws-cdk'

new elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsOutputReference.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsOutputReference.property.resource">resource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettings">ElasticBeanstalkEnvironmentAllSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsOutputReference.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `resource`<sup>Required</sup> <a name="resource" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsOutputReference.property.resource"></a>

```typescript
public readonly resource: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ElasticBeanstalkEnvironmentAllSettings;
```

- *Type:* <a href="#@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentAllSettings">ElasticBeanstalkEnvironmentAllSettings</a>

---


### ElasticBeanstalkEnvironmentSettingList <a name="ElasticBeanstalkEnvironmentSettingList" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingList.Initializer"></a>

```typescript
import { elasticBeanstalkEnvironment } from '@cdktf/aws-cdk'

new elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingList.get"></a>

```typescript
public get(index: number): ElasticBeanstalkEnvironmentSettingOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSetting">ElasticBeanstalkEnvironmentSetting</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ElasticBeanstalkEnvironmentSetting[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSetting">ElasticBeanstalkEnvironmentSetting</a>[]

---


### ElasticBeanstalkEnvironmentSettingOutputReference <a name="ElasticBeanstalkEnvironmentSettingOutputReference" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.Initializer"></a>

```typescript
import { elasticBeanstalkEnvironment } from '@cdktf/aws-cdk'

new elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.resetResource">resetResource</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetResource` <a name="resetResource" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.resetResource"></a>

```typescript
public resetResource(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.property.resourceInput">resourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.property.resource">resource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSetting">ElasticBeanstalkEnvironmentSetting</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `resourceInput`<sup>Optional</sup> <a name="resourceInput" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.property.resourceInput"></a>

```typescript
public readonly resourceInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `resource`<sup>Required</sup> <a name="resource" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.property.resource"></a>

```typescript
public readonly resource: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSettingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ElasticBeanstalkEnvironmentSetting;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.elasticBeanstalkEnvironment.ElasticBeanstalkEnvironmentSetting">ElasticBeanstalkEnvironmentSetting</a>

---



