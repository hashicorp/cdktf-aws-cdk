# `glueCrawler` Submodule <a name="`glueCrawler` Submodule" id="@cdktf/aws-cdk.glueCrawler"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GlueCrawler <a name="GlueCrawler" id="@cdktf/aws-cdk.glueCrawler.GlueCrawler"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/glue_crawler aws_glue_crawler}.

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.glueCrawler.GlueCrawler.Initializer"></a>

```typescript
import { glueCrawler } from '@cdktf/aws-cdk'

new glueCrawler.GlueCrawler(scope: Construct, id: string, config: GlueCrawlerConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawler.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawler.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawler.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerConfig">GlueCrawlerConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.glueCrawler.GlueCrawler.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.glueCrawler.GlueCrawler.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/aws-cdk.glueCrawler.GlueCrawler.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerConfig">GlueCrawlerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawler.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawler.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawler.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawler.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawler.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawler.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawler.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawler.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawler.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawler.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawler.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawler.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawler.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawler.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawler.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawler.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawler.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawler.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawler.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawler.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawler.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawler.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawler.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawler.putCatalogTarget">putCatalogTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawler.putDeltaTarget">putDeltaTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawler.putDynamodbTarget">putDynamodbTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawler.putJdbcTarget">putJdbcTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawler.putLineageConfiguration">putLineageConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawler.putMongodbTarget">putMongodbTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawler.putRecrawlPolicy">putRecrawlPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawler.putS3Target">putS3Target</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawler.putSchemaChangePolicy">putSchemaChangePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawler.resetCatalogTarget">resetCatalogTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawler.resetClassifiers">resetClassifiers</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawler.resetConfiguration">resetConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawler.resetDeltaTarget">resetDeltaTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawler.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawler.resetDynamodbTarget">resetDynamodbTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawler.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawler.resetJdbcTarget">resetJdbcTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawler.resetLineageConfiguration">resetLineageConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawler.resetMongodbTarget">resetMongodbTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawler.resetRecrawlPolicy">resetRecrawlPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawler.resetS3Target">resetS3Target</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawler.resetSchedule">resetSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawler.resetSchemaChangePolicy">resetSchemaChangePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawler.resetSecurityConfiguration">resetSecurityConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawler.resetTablePrefix">resetTablePrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawler.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawler.resetTagsAll">resetTagsAll</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.glueCrawler.GlueCrawler.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/aws-cdk.glueCrawler.GlueCrawler.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/aws-cdk.glueCrawler.GlueCrawler.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.glueCrawler.GlueCrawler.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/aws-cdk.glueCrawler.GlueCrawler.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/aws-cdk.glueCrawler.GlueCrawler.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/aws-cdk.glueCrawler.GlueCrawler.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/aws-cdk.glueCrawler.GlueCrawler.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/aws-cdk.glueCrawler.GlueCrawler.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/aws-cdk.glueCrawler.GlueCrawler.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/aws-cdk.glueCrawler.GlueCrawler.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/aws-cdk.glueCrawler.GlueCrawler.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.glueCrawler.GlueCrawler.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.glueCrawler.GlueCrawler.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.glueCrawler.GlueCrawler.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.glueCrawler.GlueCrawler.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.glueCrawler.GlueCrawler.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.glueCrawler.GlueCrawler.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.glueCrawler.GlueCrawler.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.glueCrawler.GlueCrawler.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.glueCrawler.GlueCrawler.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.glueCrawler.GlueCrawler.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.glueCrawler.GlueCrawler.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.glueCrawler.GlueCrawler.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.glueCrawler.GlueCrawler.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.glueCrawler.GlueCrawler.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.glueCrawler.GlueCrawler.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.glueCrawler.GlueCrawler.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.glueCrawler.GlueCrawler.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.glueCrawler.GlueCrawler.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/aws-cdk.glueCrawler.GlueCrawler.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/aws-cdk.glueCrawler.GlueCrawler.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.glueCrawler.GlueCrawler.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.glueCrawler.GlueCrawler.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.glueCrawler.GlueCrawler.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.glueCrawler.GlueCrawler.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/aws-cdk.glueCrawler.GlueCrawler.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.glueCrawler.GlueCrawler.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/aws-cdk.glueCrawler.GlueCrawler.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/aws-cdk.glueCrawler.GlueCrawler.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/aws-cdk.glueCrawler.GlueCrawler.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/aws-cdk.glueCrawler.GlueCrawler.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.glueCrawler.GlueCrawler.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCatalogTarget` <a name="putCatalogTarget" id="@cdktf/aws-cdk.glueCrawler.GlueCrawler.putCatalogTarget"></a>

```typescript
public putCatalogTarget(value: IResolvable | GlueCrawlerCatalogTarget[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.glueCrawler.GlueCrawler.putCatalogTarget.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerCatalogTarget">GlueCrawlerCatalogTarget</a>[]

---

##### `putDeltaTarget` <a name="putDeltaTarget" id="@cdktf/aws-cdk.glueCrawler.GlueCrawler.putDeltaTarget"></a>

```typescript
public putDeltaTarget(value: IResolvable | GlueCrawlerDeltaTarget[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.glueCrawler.GlueCrawler.putDeltaTarget.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerDeltaTarget">GlueCrawlerDeltaTarget</a>[]

---

##### `putDynamodbTarget` <a name="putDynamodbTarget" id="@cdktf/aws-cdk.glueCrawler.GlueCrawler.putDynamodbTarget"></a>

```typescript
public putDynamodbTarget(value: IResolvable | GlueCrawlerDynamodbTarget[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.glueCrawler.GlueCrawler.putDynamodbTarget.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerDynamodbTarget">GlueCrawlerDynamodbTarget</a>[]

---

##### `putJdbcTarget` <a name="putJdbcTarget" id="@cdktf/aws-cdk.glueCrawler.GlueCrawler.putJdbcTarget"></a>

```typescript
public putJdbcTarget(value: IResolvable | GlueCrawlerJdbcTarget[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.glueCrawler.GlueCrawler.putJdbcTarget.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerJdbcTarget">GlueCrawlerJdbcTarget</a>[]

---

##### `putLineageConfiguration` <a name="putLineageConfiguration" id="@cdktf/aws-cdk.glueCrawler.GlueCrawler.putLineageConfiguration"></a>

```typescript
public putLineageConfiguration(value: GlueCrawlerLineageConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.glueCrawler.GlueCrawler.putLineageConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerLineageConfiguration">GlueCrawlerLineageConfiguration</a>

---

##### `putMongodbTarget` <a name="putMongodbTarget" id="@cdktf/aws-cdk.glueCrawler.GlueCrawler.putMongodbTarget"></a>

```typescript
public putMongodbTarget(value: IResolvable | GlueCrawlerMongodbTarget[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.glueCrawler.GlueCrawler.putMongodbTarget.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerMongodbTarget">GlueCrawlerMongodbTarget</a>[]

---

##### `putRecrawlPolicy` <a name="putRecrawlPolicy" id="@cdktf/aws-cdk.glueCrawler.GlueCrawler.putRecrawlPolicy"></a>

```typescript
public putRecrawlPolicy(value: GlueCrawlerRecrawlPolicy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.glueCrawler.GlueCrawler.putRecrawlPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerRecrawlPolicy">GlueCrawlerRecrawlPolicy</a>

---

##### `putS3Target` <a name="putS3Target" id="@cdktf/aws-cdk.glueCrawler.GlueCrawler.putS3Target"></a>

```typescript
public putS3Target(value: IResolvable | GlueCrawlerS3Target[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.glueCrawler.GlueCrawler.putS3Target.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerS3Target">GlueCrawlerS3Target</a>[]

---

##### `putSchemaChangePolicy` <a name="putSchemaChangePolicy" id="@cdktf/aws-cdk.glueCrawler.GlueCrawler.putSchemaChangePolicy"></a>

```typescript
public putSchemaChangePolicy(value: GlueCrawlerSchemaChangePolicy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.glueCrawler.GlueCrawler.putSchemaChangePolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerSchemaChangePolicy">GlueCrawlerSchemaChangePolicy</a>

---

##### `resetCatalogTarget` <a name="resetCatalogTarget" id="@cdktf/aws-cdk.glueCrawler.GlueCrawler.resetCatalogTarget"></a>

```typescript
public resetCatalogTarget(): void
```

##### `resetClassifiers` <a name="resetClassifiers" id="@cdktf/aws-cdk.glueCrawler.GlueCrawler.resetClassifiers"></a>

```typescript
public resetClassifiers(): void
```

##### `resetConfiguration` <a name="resetConfiguration" id="@cdktf/aws-cdk.glueCrawler.GlueCrawler.resetConfiguration"></a>

```typescript
public resetConfiguration(): void
```

##### `resetDeltaTarget` <a name="resetDeltaTarget" id="@cdktf/aws-cdk.glueCrawler.GlueCrawler.resetDeltaTarget"></a>

```typescript
public resetDeltaTarget(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/aws-cdk.glueCrawler.GlueCrawler.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDynamodbTarget` <a name="resetDynamodbTarget" id="@cdktf/aws-cdk.glueCrawler.GlueCrawler.resetDynamodbTarget"></a>

```typescript
public resetDynamodbTarget(): void
```

##### `resetId` <a name="resetId" id="@cdktf/aws-cdk.glueCrawler.GlueCrawler.resetId"></a>

```typescript
public resetId(): void
```

##### `resetJdbcTarget` <a name="resetJdbcTarget" id="@cdktf/aws-cdk.glueCrawler.GlueCrawler.resetJdbcTarget"></a>

```typescript
public resetJdbcTarget(): void
```

##### `resetLineageConfiguration` <a name="resetLineageConfiguration" id="@cdktf/aws-cdk.glueCrawler.GlueCrawler.resetLineageConfiguration"></a>

```typescript
public resetLineageConfiguration(): void
```

##### `resetMongodbTarget` <a name="resetMongodbTarget" id="@cdktf/aws-cdk.glueCrawler.GlueCrawler.resetMongodbTarget"></a>

```typescript
public resetMongodbTarget(): void
```

##### `resetRecrawlPolicy` <a name="resetRecrawlPolicy" id="@cdktf/aws-cdk.glueCrawler.GlueCrawler.resetRecrawlPolicy"></a>

```typescript
public resetRecrawlPolicy(): void
```

##### `resetS3Target` <a name="resetS3Target" id="@cdktf/aws-cdk.glueCrawler.GlueCrawler.resetS3Target"></a>

```typescript
public resetS3Target(): void
```

##### `resetSchedule` <a name="resetSchedule" id="@cdktf/aws-cdk.glueCrawler.GlueCrawler.resetSchedule"></a>

```typescript
public resetSchedule(): void
```

##### `resetSchemaChangePolicy` <a name="resetSchemaChangePolicy" id="@cdktf/aws-cdk.glueCrawler.GlueCrawler.resetSchemaChangePolicy"></a>

```typescript
public resetSchemaChangePolicy(): void
```

##### `resetSecurityConfiguration` <a name="resetSecurityConfiguration" id="@cdktf/aws-cdk.glueCrawler.GlueCrawler.resetSecurityConfiguration"></a>

```typescript
public resetSecurityConfiguration(): void
```

##### `resetTablePrefix` <a name="resetTablePrefix" id="@cdktf/aws-cdk.glueCrawler.GlueCrawler.resetTablePrefix"></a>

```typescript
public resetTablePrefix(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/aws-cdk.glueCrawler.GlueCrawler.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/aws-cdk.glueCrawler.GlueCrawler.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawler.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawler.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawler.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawler.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GlueCrawler resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/aws-cdk.glueCrawler.GlueCrawler.isConstruct"></a>

```typescript
import { glueCrawler } from '@cdktf/aws-cdk'

glueCrawler.GlueCrawler.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.glueCrawler.GlueCrawler.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/aws-cdk.glueCrawler.GlueCrawler.isTerraformElement"></a>

```typescript
import { glueCrawler } from '@cdktf/aws-cdk'

glueCrawler.GlueCrawler.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.glueCrawler.GlueCrawler.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/aws-cdk.glueCrawler.GlueCrawler.isTerraformResource"></a>

```typescript
import { glueCrawler } from '@cdktf/aws-cdk'

glueCrawler.GlueCrawler.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.glueCrawler.GlueCrawler.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/aws-cdk.glueCrawler.GlueCrawler.generateConfigForImport"></a>

```typescript
import { glueCrawler } from '@cdktf/aws-cdk'

glueCrawler.GlueCrawler.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GlueCrawler resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.glueCrawler.GlueCrawler.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/aws-cdk.glueCrawler.GlueCrawler.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GlueCrawler to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/aws-cdk.glueCrawler.GlueCrawler.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GlueCrawler that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/glue_crawler#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.glueCrawler.GlueCrawler.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GlueCrawler to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawler.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawler.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawler.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawler.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawler.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawler.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawler.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawler.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawler.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawler.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawler.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawler.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawler.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawler.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawler.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawler.property.catalogTarget">catalogTarget</a></code> | <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerCatalogTargetList">GlueCrawlerCatalogTargetList</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawler.property.deltaTarget">deltaTarget</a></code> | <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerDeltaTargetList">GlueCrawlerDeltaTargetList</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawler.property.dynamodbTarget">dynamodbTarget</a></code> | <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerDynamodbTargetList">GlueCrawlerDynamodbTargetList</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawler.property.jdbcTarget">jdbcTarget</a></code> | <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerJdbcTargetList">GlueCrawlerJdbcTargetList</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawler.property.lineageConfiguration">lineageConfiguration</a></code> | <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerLineageConfigurationOutputReference">GlueCrawlerLineageConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawler.property.mongodbTarget">mongodbTarget</a></code> | <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerMongodbTargetList">GlueCrawlerMongodbTargetList</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawler.property.recrawlPolicy">recrawlPolicy</a></code> | <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference">GlueCrawlerRecrawlPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawler.property.s3Target">s3Target</a></code> | <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerS3TargetList">GlueCrawlerS3TargetList</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawler.property.schemaChangePolicy">schemaChangePolicy</a></code> | <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference">GlueCrawlerSchemaChangePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawler.property.catalogTargetInput">catalogTargetInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerCatalogTarget">GlueCrawlerCatalogTarget</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawler.property.classifiersInput">classifiersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawler.property.configurationInput">configurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawler.property.databaseNameInput">databaseNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawler.property.deltaTargetInput">deltaTargetInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerDeltaTarget">GlueCrawlerDeltaTarget</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawler.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawler.property.dynamodbTargetInput">dynamodbTargetInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerDynamodbTarget">GlueCrawlerDynamodbTarget</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawler.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawler.property.jdbcTargetInput">jdbcTargetInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerJdbcTarget">GlueCrawlerJdbcTarget</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawler.property.lineageConfigurationInput">lineageConfigurationInput</a></code> | <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerLineageConfiguration">GlueCrawlerLineageConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawler.property.mongodbTargetInput">mongodbTargetInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerMongodbTarget">GlueCrawlerMongodbTarget</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawler.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawler.property.recrawlPolicyInput">recrawlPolicyInput</a></code> | <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerRecrawlPolicy">GlueCrawlerRecrawlPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawler.property.roleInput">roleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawler.property.s3TargetInput">s3TargetInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerS3Target">GlueCrawlerS3Target</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawler.property.scheduleInput">scheduleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawler.property.schemaChangePolicyInput">schemaChangePolicyInput</a></code> | <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerSchemaChangePolicy">GlueCrawlerSchemaChangePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawler.property.securityConfigurationInput">securityConfigurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawler.property.tablePrefixInput">tablePrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawler.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawler.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawler.property.classifiers">classifiers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawler.property.configuration">configuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawler.property.databaseName">databaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawler.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawler.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawler.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawler.property.role">role</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawler.property.schedule">schedule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawler.property.securityConfiguration">securityConfiguration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawler.property.tablePrefix">tablePrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawler.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawler.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/aws-cdk.glueCrawler.GlueCrawler.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/aws-cdk.glueCrawler.GlueCrawler.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.glueCrawler.GlueCrawler.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/aws-cdk.glueCrawler.GlueCrawler.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/aws-cdk.glueCrawler.GlueCrawler.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/aws-cdk.glueCrawler.GlueCrawler.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/aws-cdk.glueCrawler.GlueCrawler.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.glueCrawler.GlueCrawler.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.glueCrawler.GlueCrawler.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.glueCrawler.GlueCrawler.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.glueCrawler.GlueCrawler.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.glueCrawler.GlueCrawler.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.glueCrawler.GlueCrawler.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.glueCrawler.GlueCrawler.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/aws-cdk.glueCrawler.GlueCrawler.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `catalogTarget`<sup>Required</sup> <a name="catalogTarget" id="@cdktf/aws-cdk.glueCrawler.GlueCrawler.property.catalogTarget"></a>

```typescript
public readonly catalogTarget: GlueCrawlerCatalogTargetList;
```

- *Type:* <a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerCatalogTargetList">GlueCrawlerCatalogTargetList</a>

---

##### `deltaTarget`<sup>Required</sup> <a name="deltaTarget" id="@cdktf/aws-cdk.glueCrawler.GlueCrawler.property.deltaTarget"></a>

```typescript
public readonly deltaTarget: GlueCrawlerDeltaTargetList;
```

- *Type:* <a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerDeltaTargetList">GlueCrawlerDeltaTargetList</a>

---

##### `dynamodbTarget`<sup>Required</sup> <a name="dynamodbTarget" id="@cdktf/aws-cdk.glueCrawler.GlueCrawler.property.dynamodbTarget"></a>

```typescript
public readonly dynamodbTarget: GlueCrawlerDynamodbTargetList;
```

- *Type:* <a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerDynamodbTargetList">GlueCrawlerDynamodbTargetList</a>

---

##### `jdbcTarget`<sup>Required</sup> <a name="jdbcTarget" id="@cdktf/aws-cdk.glueCrawler.GlueCrawler.property.jdbcTarget"></a>

```typescript
public readonly jdbcTarget: GlueCrawlerJdbcTargetList;
```

- *Type:* <a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerJdbcTargetList">GlueCrawlerJdbcTargetList</a>

---

##### `lineageConfiguration`<sup>Required</sup> <a name="lineageConfiguration" id="@cdktf/aws-cdk.glueCrawler.GlueCrawler.property.lineageConfiguration"></a>

```typescript
public readonly lineageConfiguration: GlueCrawlerLineageConfigurationOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerLineageConfigurationOutputReference">GlueCrawlerLineageConfigurationOutputReference</a>

---

##### `mongodbTarget`<sup>Required</sup> <a name="mongodbTarget" id="@cdktf/aws-cdk.glueCrawler.GlueCrawler.property.mongodbTarget"></a>

```typescript
public readonly mongodbTarget: GlueCrawlerMongodbTargetList;
```

- *Type:* <a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerMongodbTargetList">GlueCrawlerMongodbTargetList</a>

---

##### `recrawlPolicy`<sup>Required</sup> <a name="recrawlPolicy" id="@cdktf/aws-cdk.glueCrawler.GlueCrawler.property.recrawlPolicy"></a>

```typescript
public readonly recrawlPolicy: GlueCrawlerRecrawlPolicyOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference">GlueCrawlerRecrawlPolicyOutputReference</a>

---

##### `s3Target`<sup>Required</sup> <a name="s3Target" id="@cdktf/aws-cdk.glueCrawler.GlueCrawler.property.s3Target"></a>

```typescript
public readonly s3Target: GlueCrawlerS3TargetList;
```

- *Type:* <a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerS3TargetList">GlueCrawlerS3TargetList</a>

---

##### `schemaChangePolicy`<sup>Required</sup> <a name="schemaChangePolicy" id="@cdktf/aws-cdk.glueCrawler.GlueCrawler.property.schemaChangePolicy"></a>

```typescript
public readonly schemaChangePolicy: GlueCrawlerSchemaChangePolicyOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference">GlueCrawlerSchemaChangePolicyOutputReference</a>

---

##### `catalogTargetInput`<sup>Optional</sup> <a name="catalogTargetInput" id="@cdktf/aws-cdk.glueCrawler.GlueCrawler.property.catalogTargetInput"></a>

```typescript
public readonly catalogTargetInput: IResolvable | GlueCrawlerCatalogTarget[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerCatalogTarget">GlueCrawlerCatalogTarget</a>[]

---

##### `classifiersInput`<sup>Optional</sup> <a name="classifiersInput" id="@cdktf/aws-cdk.glueCrawler.GlueCrawler.property.classifiersInput"></a>

```typescript
public readonly classifiersInput: string[];
```

- *Type:* string[]

---

##### `configurationInput`<sup>Optional</sup> <a name="configurationInput" id="@cdktf/aws-cdk.glueCrawler.GlueCrawler.property.configurationInput"></a>

```typescript
public readonly configurationInput: string;
```

- *Type:* string

---

##### `databaseNameInput`<sup>Optional</sup> <a name="databaseNameInput" id="@cdktf/aws-cdk.glueCrawler.GlueCrawler.property.databaseNameInput"></a>

```typescript
public readonly databaseNameInput: string;
```

- *Type:* string

---

##### `deltaTargetInput`<sup>Optional</sup> <a name="deltaTargetInput" id="@cdktf/aws-cdk.glueCrawler.GlueCrawler.property.deltaTargetInput"></a>

```typescript
public readonly deltaTargetInput: IResolvable | GlueCrawlerDeltaTarget[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerDeltaTarget">GlueCrawlerDeltaTarget</a>[]

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/aws-cdk.glueCrawler.GlueCrawler.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `dynamodbTargetInput`<sup>Optional</sup> <a name="dynamodbTargetInput" id="@cdktf/aws-cdk.glueCrawler.GlueCrawler.property.dynamodbTargetInput"></a>

```typescript
public readonly dynamodbTargetInput: IResolvable | GlueCrawlerDynamodbTarget[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerDynamodbTarget">GlueCrawlerDynamodbTarget</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/aws-cdk.glueCrawler.GlueCrawler.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `jdbcTargetInput`<sup>Optional</sup> <a name="jdbcTargetInput" id="@cdktf/aws-cdk.glueCrawler.GlueCrawler.property.jdbcTargetInput"></a>

```typescript
public readonly jdbcTargetInput: IResolvable | GlueCrawlerJdbcTarget[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerJdbcTarget">GlueCrawlerJdbcTarget</a>[]

---

##### `lineageConfigurationInput`<sup>Optional</sup> <a name="lineageConfigurationInput" id="@cdktf/aws-cdk.glueCrawler.GlueCrawler.property.lineageConfigurationInput"></a>

```typescript
public readonly lineageConfigurationInput: GlueCrawlerLineageConfiguration;
```

- *Type:* <a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerLineageConfiguration">GlueCrawlerLineageConfiguration</a>

---

##### `mongodbTargetInput`<sup>Optional</sup> <a name="mongodbTargetInput" id="@cdktf/aws-cdk.glueCrawler.GlueCrawler.property.mongodbTargetInput"></a>

```typescript
public readonly mongodbTargetInput: IResolvable | GlueCrawlerMongodbTarget[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerMongodbTarget">GlueCrawlerMongodbTarget</a>[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/aws-cdk.glueCrawler.GlueCrawler.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `recrawlPolicyInput`<sup>Optional</sup> <a name="recrawlPolicyInput" id="@cdktf/aws-cdk.glueCrawler.GlueCrawler.property.recrawlPolicyInput"></a>

```typescript
public readonly recrawlPolicyInput: GlueCrawlerRecrawlPolicy;
```

- *Type:* <a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerRecrawlPolicy">GlueCrawlerRecrawlPolicy</a>

---

##### `roleInput`<sup>Optional</sup> <a name="roleInput" id="@cdktf/aws-cdk.glueCrawler.GlueCrawler.property.roleInput"></a>

```typescript
public readonly roleInput: string;
```

- *Type:* string

---

##### `s3TargetInput`<sup>Optional</sup> <a name="s3TargetInput" id="@cdktf/aws-cdk.glueCrawler.GlueCrawler.property.s3TargetInput"></a>

```typescript
public readonly s3TargetInput: IResolvable | GlueCrawlerS3Target[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerS3Target">GlueCrawlerS3Target</a>[]

---

##### `scheduleInput`<sup>Optional</sup> <a name="scheduleInput" id="@cdktf/aws-cdk.glueCrawler.GlueCrawler.property.scheduleInput"></a>

```typescript
public readonly scheduleInput: string;
```

- *Type:* string

---

##### `schemaChangePolicyInput`<sup>Optional</sup> <a name="schemaChangePolicyInput" id="@cdktf/aws-cdk.glueCrawler.GlueCrawler.property.schemaChangePolicyInput"></a>

```typescript
public readonly schemaChangePolicyInput: GlueCrawlerSchemaChangePolicy;
```

- *Type:* <a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerSchemaChangePolicy">GlueCrawlerSchemaChangePolicy</a>

---

##### `securityConfigurationInput`<sup>Optional</sup> <a name="securityConfigurationInput" id="@cdktf/aws-cdk.glueCrawler.GlueCrawler.property.securityConfigurationInput"></a>

```typescript
public readonly securityConfigurationInput: string;
```

- *Type:* string

---

##### `tablePrefixInput`<sup>Optional</sup> <a name="tablePrefixInput" id="@cdktf/aws-cdk.glueCrawler.GlueCrawler.property.tablePrefixInput"></a>

```typescript
public readonly tablePrefixInput: string;
```

- *Type:* string

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/aws-cdk.glueCrawler.GlueCrawler.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/aws-cdk.glueCrawler.GlueCrawler.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `classifiers`<sup>Required</sup> <a name="classifiers" id="@cdktf/aws-cdk.glueCrawler.GlueCrawler.property.classifiers"></a>

```typescript
public readonly classifiers: string[];
```

- *Type:* string[]

---

##### `configuration`<sup>Required</sup> <a name="configuration" id="@cdktf/aws-cdk.glueCrawler.GlueCrawler.property.configuration"></a>

```typescript
public readonly configuration: string;
```

- *Type:* string

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktf/aws-cdk.glueCrawler.GlueCrawler.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/aws-cdk.glueCrawler.GlueCrawler.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.glueCrawler.GlueCrawler.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/aws-cdk.glueCrawler.GlueCrawler.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/aws-cdk.glueCrawler.GlueCrawler.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktf/aws-cdk.glueCrawler.GlueCrawler.property.schedule"></a>

```typescript
public readonly schedule: string;
```

- *Type:* string

---

##### `securityConfiguration`<sup>Required</sup> <a name="securityConfiguration" id="@cdktf/aws-cdk.glueCrawler.GlueCrawler.property.securityConfiguration"></a>

```typescript
public readonly securityConfiguration: string;
```

- *Type:* string

---

##### `tablePrefix`<sup>Required</sup> <a name="tablePrefix" id="@cdktf/aws-cdk.glueCrawler.GlueCrawler.property.tablePrefix"></a>

```typescript
public readonly tablePrefix: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/aws-cdk.glueCrawler.GlueCrawler.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/aws-cdk.glueCrawler.GlueCrawler.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawler.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/aws-cdk.glueCrawler.GlueCrawler.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GlueCrawlerCatalogTarget <a name="GlueCrawlerCatalogTarget" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerCatalogTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerCatalogTarget.Initializer"></a>

```typescript
import { glueCrawler } from '@cdktf/aws-cdk'

const glueCrawlerCatalogTarget: glueCrawler.GlueCrawlerCatalogTarget = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerCatalogTarget.property.databaseName">databaseName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/glue_crawler#database_name GlueCrawler#database_name}. |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerCatalogTarget.property.tables">tables</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/glue_crawler#tables GlueCrawler#tables}. |

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerCatalogTarget.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/glue_crawler#database_name GlueCrawler#database_name}.

---

##### `tables`<sup>Required</sup> <a name="tables" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerCatalogTarget.property.tables"></a>

```typescript
public readonly tables: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/glue_crawler#tables GlueCrawler#tables}.

---

### GlueCrawlerConfig <a name="GlueCrawlerConfig" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerConfig.Initializer"></a>

```typescript
import { glueCrawler } from '@cdktf/aws-cdk'

const glueCrawlerConfig: glueCrawler.GlueCrawlerConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerConfig.property.databaseName">databaseName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/glue_crawler#database_name GlueCrawler#database_name}. |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/glue_crawler#name GlueCrawler#name}. |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerConfig.property.role">role</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/glue_crawler#role GlueCrawler#role}. |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerConfig.property.catalogTarget">catalogTarget</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerCatalogTarget">GlueCrawlerCatalogTarget</a>[]</code> | catalog_target block. |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerConfig.property.classifiers">classifiers</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/glue_crawler#classifiers GlueCrawler#classifiers}. |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerConfig.property.configuration">configuration</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/glue_crawler#configuration GlueCrawler#configuration}. |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerConfig.property.deltaTarget">deltaTarget</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerDeltaTarget">GlueCrawlerDeltaTarget</a>[]</code> | delta_target block. |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/glue_crawler#description GlueCrawler#description}. |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerConfig.property.dynamodbTarget">dynamodbTarget</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerDynamodbTarget">GlueCrawlerDynamodbTarget</a>[]</code> | dynamodb_target block. |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/glue_crawler#id GlueCrawler#id}. |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerConfig.property.jdbcTarget">jdbcTarget</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerJdbcTarget">GlueCrawlerJdbcTarget</a>[]</code> | jdbc_target block. |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerConfig.property.lineageConfiguration">lineageConfiguration</a></code> | <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerLineageConfiguration">GlueCrawlerLineageConfiguration</a></code> | lineage_configuration block. |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerConfig.property.mongodbTarget">mongodbTarget</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerMongodbTarget">GlueCrawlerMongodbTarget</a>[]</code> | mongodb_target block. |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerConfig.property.recrawlPolicy">recrawlPolicy</a></code> | <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerRecrawlPolicy">GlueCrawlerRecrawlPolicy</a></code> | recrawl_policy block. |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerConfig.property.s3Target">s3Target</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerS3Target">GlueCrawlerS3Target</a>[]</code> | s3_target block. |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerConfig.property.schedule">schedule</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/glue_crawler#schedule GlueCrawler#schedule}. |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerConfig.property.schemaChangePolicy">schemaChangePolicy</a></code> | <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerSchemaChangePolicy">GlueCrawlerSchemaChangePolicy</a></code> | schema_change_policy block. |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerConfig.property.securityConfiguration">securityConfiguration</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/glue_crawler#security_configuration GlueCrawler#security_configuration}. |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerConfig.property.tablePrefix">tablePrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/glue_crawler#table_prefix GlueCrawler#table_prefix}. |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/glue_crawler#tags GlueCrawler#tags}. |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/glue_crawler#tags_all GlueCrawler#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerConfig.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/glue_crawler#database_name GlueCrawler#database_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/glue_crawler#name GlueCrawler#name}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerConfig.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/glue_crawler#role GlueCrawler#role}.

---

##### `catalogTarget`<sup>Optional</sup> <a name="catalogTarget" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerConfig.property.catalogTarget"></a>

```typescript
public readonly catalogTarget: IResolvable | GlueCrawlerCatalogTarget[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerCatalogTarget">GlueCrawlerCatalogTarget</a>[]

catalog_target block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/glue_crawler#catalog_target GlueCrawler#catalog_target}

---

##### `classifiers`<sup>Optional</sup> <a name="classifiers" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerConfig.property.classifiers"></a>

```typescript
public readonly classifiers: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/glue_crawler#classifiers GlueCrawler#classifiers}.

---

##### `configuration`<sup>Optional</sup> <a name="configuration" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerConfig.property.configuration"></a>

```typescript
public readonly configuration: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/glue_crawler#configuration GlueCrawler#configuration}.

---

##### `deltaTarget`<sup>Optional</sup> <a name="deltaTarget" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerConfig.property.deltaTarget"></a>

```typescript
public readonly deltaTarget: IResolvable | GlueCrawlerDeltaTarget[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerDeltaTarget">GlueCrawlerDeltaTarget</a>[]

delta_target block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/glue_crawler#delta_target GlueCrawler#delta_target}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/glue_crawler#description GlueCrawler#description}.

---

##### `dynamodbTarget`<sup>Optional</sup> <a name="dynamodbTarget" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerConfig.property.dynamodbTarget"></a>

```typescript
public readonly dynamodbTarget: IResolvable | GlueCrawlerDynamodbTarget[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerDynamodbTarget">GlueCrawlerDynamodbTarget</a>[]

dynamodb_target block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/glue_crawler#dynamodb_target GlueCrawler#dynamodb_target}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/glue_crawler#id GlueCrawler#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `jdbcTarget`<sup>Optional</sup> <a name="jdbcTarget" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerConfig.property.jdbcTarget"></a>

```typescript
public readonly jdbcTarget: IResolvable | GlueCrawlerJdbcTarget[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerJdbcTarget">GlueCrawlerJdbcTarget</a>[]

jdbc_target block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/glue_crawler#jdbc_target GlueCrawler#jdbc_target}

---

##### `lineageConfiguration`<sup>Optional</sup> <a name="lineageConfiguration" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerConfig.property.lineageConfiguration"></a>

```typescript
public readonly lineageConfiguration: GlueCrawlerLineageConfiguration;
```

- *Type:* <a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerLineageConfiguration">GlueCrawlerLineageConfiguration</a>

lineage_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/glue_crawler#lineage_configuration GlueCrawler#lineage_configuration}

---

##### `mongodbTarget`<sup>Optional</sup> <a name="mongodbTarget" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerConfig.property.mongodbTarget"></a>

```typescript
public readonly mongodbTarget: IResolvable | GlueCrawlerMongodbTarget[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerMongodbTarget">GlueCrawlerMongodbTarget</a>[]

mongodb_target block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/glue_crawler#mongodb_target GlueCrawler#mongodb_target}

---

##### `recrawlPolicy`<sup>Optional</sup> <a name="recrawlPolicy" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerConfig.property.recrawlPolicy"></a>

```typescript
public readonly recrawlPolicy: GlueCrawlerRecrawlPolicy;
```

- *Type:* <a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerRecrawlPolicy">GlueCrawlerRecrawlPolicy</a>

recrawl_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/glue_crawler#recrawl_policy GlueCrawler#recrawl_policy}

---

##### `s3Target`<sup>Optional</sup> <a name="s3Target" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerConfig.property.s3Target"></a>

```typescript
public readonly s3Target: IResolvable | GlueCrawlerS3Target[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerS3Target">GlueCrawlerS3Target</a>[]

s3_target block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/glue_crawler#s3_target GlueCrawler#s3_target}

---

##### `schedule`<sup>Optional</sup> <a name="schedule" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerConfig.property.schedule"></a>

```typescript
public readonly schedule: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/glue_crawler#schedule GlueCrawler#schedule}.

---

##### `schemaChangePolicy`<sup>Optional</sup> <a name="schemaChangePolicy" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerConfig.property.schemaChangePolicy"></a>

```typescript
public readonly schemaChangePolicy: GlueCrawlerSchemaChangePolicy;
```

- *Type:* <a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerSchemaChangePolicy">GlueCrawlerSchemaChangePolicy</a>

schema_change_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/glue_crawler#schema_change_policy GlueCrawler#schema_change_policy}

---

##### `securityConfiguration`<sup>Optional</sup> <a name="securityConfiguration" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerConfig.property.securityConfiguration"></a>

```typescript
public readonly securityConfiguration: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/glue_crawler#security_configuration GlueCrawler#security_configuration}.

---

##### `tablePrefix`<sup>Optional</sup> <a name="tablePrefix" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerConfig.property.tablePrefix"></a>

```typescript
public readonly tablePrefix: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/glue_crawler#table_prefix GlueCrawler#table_prefix}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/glue_crawler#tags GlueCrawler#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/glue_crawler#tags_all GlueCrawler#tags_all}.

---

### GlueCrawlerDeltaTarget <a name="GlueCrawlerDeltaTarget" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerDeltaTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerDeltaTarget.Initializer"></a>

```typescript
import { glueCrawler } from '@cdktf/aws-cdk'

const glueCrawlerDeltaTarget: glueCrawler.GlueCrawlerDeltaTarget = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerDeltaTarget.property.connectionName">connectionName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/glue_crawler#connection_name GlueCrawler#connection_name}. |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerDeltaTarget.property.deltaTables">deltaTables</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/glue_crawler#delta_tables GlueCrawler#delta_tables}. |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerDeltaTarget.property.writeManifest">writeManifest</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/glue_crawler#write_manifest GlueCrawler#write_manifest}. |

---

##### `connectionName`<sup>Required</sup> <a name="connectionName" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerDeltaTarget.property.connectionName"></a>

```typescript
public readonly connectionName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/glue_crawler#connection_name GlueCrawler#connection_name}.

---

##### `deltaTables`<sup>Required</sup> <a name="deltaTables" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerDeltaTarget.property.deltaTables"></a>

```typescript
public readonly deltaTables: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/glue_crawler#delta_tables GlueCrawler#delta_tables}.

---

##### `writeManifest`<sup>Required</sup> <a name="writeManifest" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerDeltaTarget.property.writeManifest"></a>

```typescript
public readonly writeManifest: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/glue_crawler#write_manifest GlueCrawler#write_manifest}.

---

### GlueCrawlerDynamodbTarget <a name="GlueCrawlerDynamodbTarget" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerDynamodbTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerDynamodbTarget.Initializer"></a>

```typescript
import { glueCrawler } from '@cdktf/aws-cdk'

const glueCrawlerDynamodbTarget: glueCrawler.GlueCrawlerDynamodbTarget = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerDynamodbTarget.property.path">path</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/glue_crawler#path GlueCrawler#path}. |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerDynamodbTarget.property.scanAll">scanAll</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/glue_crawler#scan_all GlueCrawler#scan_all}. |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerDynamodbTarget.property.scanRate">scanRate</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/glue_crawler#scan_rate GlueCrawler#scan_rate}. |

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerDynamodbTarget.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/glue_crawler#path GlueCrawler#path}.

---

##### `scanAll`<sup>Optional</sup> <a name="scanAll" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerDynamodbTarget.property.scanAll"></a>

```typescript
public readonly scanAll: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/glue_crawler#scan_all GlueCrawler#scan_all}.

---

##### `scanRate`<sup>Optional</sup> <a name="scanRate" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerDynamodbTarget.property.scanRate"></a>

```typescript
public readonly scanRate: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/glue_crawler#scan_rate GlueCrawler#scan_rate}.

---

### GlueCrawlerJdbcTarget <a name="GlueCrawlerJdbcTarget" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerJdbcTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerJdbcTarget.Initializer"></a>

```typescript
import { glueCrawler } from '@cdktf/aws-cdk'

const glueCrawlerJdbcTarget: glueCrawler.GlueCrawlerJdbcTarget = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerJdbcTarget.property.connectionName">connectionName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/glue_crawler#connection_name GlueCrawler#connection_name}. |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerJdbcTarget.property.path">path</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/glue_crawler#path GlueCrawler#path}. |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerJdbcTarget.property.exclusions">exclusions</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/glue_crawler#exclusions GlueCrawler#exclusions}. |

---

##### `connectionName`<sup>Required</sup> <a name="connectionName" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerJdbcTarget.property.connectionName"></a>

```typescript
public readonly connectionName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/glue_crawler#connection_name GlueCrawler#connection_name}.

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerJdbcTarget.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/glue_crawler#path GlueCrawler#path}.

---

##### `exclusions`<sup>Optional</sup> <a name="exclusions" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerJdbcTarget.property.exclusions"></a>

```typescript
public readonly exclusions: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/glue_crawler#exclusions GlueCrawler#exclusions}.

---

### GlueCrawlerLineageConfiguration <a name="GlueCrawlerLineageConfiguration" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerLineageConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerLineageConfiguration.Initializer"></a>

```typescript
import { glueCrawler } from '@cdktf/aws-cdk'

const glueCrawlerLineageConfiguration: glueCrawler.GlueCrawlerLineageConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerLineageConfiguration.property.crawlerLineageSettings">crawlerLineageSettings</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/glue_crawler#crawler_lineage_settings GlueCrawler#crawler_lineage_settings}. |

---

##### `crawlerLineageSettings`<sup>Optional</sup> <a name="crawlerLineageSettings" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerLineageConfiguration.property.crawlerLineageSettings"></a>

```typescript
public readonly crawlerLineageSettings: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/glue_crawler#crawler_lineage_settings GlueCrawler#crawler_lineage_settings}.

---

### GlueCrawlerMongodbTarget <a name="GlueCrawlerMongodbTarget" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerMongodbTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerMongodbTarget.Initializer"></a>

```typescript
import { glueCrawler } from '@cdktf/aws-cdk'

const glueCrawlerMongodbTarget: glueCrawler.GlueCrawlerMongodbTarget = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerMongodbTarget.property.connectionName">connectionName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/glue_crawler#connection_name GlueCrawler#connection_name}. |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerMongodbTarget.property.path">path</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/glue_crawler#path GlueCrawler#path}. |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerMongodbTarget.property.scanAll">scanAll</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/glue_crawler#scan_all GlueCrawler#scan_all}. |

---

##### `connectionName`<sup>Required</sup> <a name="connectionName" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerMongodbTarget.property.connectionName"></a>

```typescript
public readonly connectionName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/glue_crawler#connection_name GlueCrawler#connection_name}.

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerMongodbTarget.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/glue_crawler#path GlueCrawler#path}.

---

##### `scanAll`<sup>Optional</sup> <a name="scanAll" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerMongodbTarget.property.scanAll"></a>

```typescript
public readonly scanAll: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/glue_crawler#scan_all GlueCrawler#scan_all}.

---

### GlueCrawlerRecrawlPolicy <a name="GlueCrawlerRecrawlPolicy" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerRecrawlPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerRecrawlPolicy.Initializer"></a>

```typescript
import { glueCrawler } from '@cdktf/aws-cdk'

const glueCrawlerRecrawlPolicy: glueCrawler.GlueCrawlerRecrawlPolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerRecrawlPolicy.property.recrawlBehavior">recrawlBehavior</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/glue_crawler#recrawl_behavior GlueCrawler#recrawl_behavior}. |

---

##### `recrawlBehavior`<sup>Optional</sup> <a name="recrawlBehavior" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerRecrawlPolicy.property.recrawlBehavior"></a>

```typescript
public readonly recrawlBehavior: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/glue_crawler#recrawl_behavior GlueCrawler#recrawl_behavior}.

---

### GlueCrawlerS3Target <a name="GlueCrawlerS3Target" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerS3Target"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerS3Target.Initializer"></a>

```typescript
import { glueCrawler } from '@cdktf/aws-cdk'

const glueCrawlerS3Target: glueCrawler.GlueCrawlerS3Target = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerS3Target.property.path">path</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/glue_crawler#path GlueCrawler#path}. |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerS3Target.property.connectionName">connectionName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/glue_crawler#connection_name GlueCrawler#connection_name}. |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerS3Target.property.dlqEventQueueArn">dlqEventQueueArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/glue_crawler#dlq_event_queue_arn GlueCrawler#dlq_event_queue_arn}. |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerS3Target.property.eventQueueArn">eventQueueArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/glue_crawler#event_queue_arn GlueCrawler#event_queue_arn}. |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerS3Target.property.exclusions">exclusions</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/glue_crawler#exclusions GlueCrawler#exclusions}. |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerS3Target.property.sampleSize">sampleSize</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/glue_crawler#sample_size GlueCrawler#sample_size}. |

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerS3Target.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/glue_crawler#path GlueCrawler#path}.

---

##### `connectionName`<sup>Optional</sup> <a name="connectionName" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerS3Target.property.connectionName"></a>

```typescript
public readonly connectionName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/glue_crawler#connection_name GlueCrawler#connection_name}.

---

##### `dlqEventQueueArn`<sup>Optional</sup> <a name="dlqEventQueueArn" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerS3Target.property.dlqEventQueueArn"></a>

```typescript
public readonly dlqEventQueueArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/glue_crawler#dlq_event_queue_arn GlueCrawler#dlq_event_queue_arn}.

---

##### `eventQueueArn`<sup>Optional</sup> <a name="eventQueueArn" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerS3Target.property.eventQueueArn"></a>

```typescript
public readonly eventQueueArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/glue_crawler#event_queue_arn GlueCrawler#event_queue_arn}.

---

##### `exclusions`<sup>Optional</sup> <a name="exclusions" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerS3Target.property.exclusions"></a>

```typescript
public readonly exclusions: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/glue_crawler#exclusions GlueCrawler#exclusions}.

---

##### `sampleSize`<sup>Optional</sup> <a name="sampleSize" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerS3Target.property.sampleSize"></a>

```typescript
public readonly sampleSize: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/glue_crawler#sample_size GlueCrawler#sample_size}.

---

### GlueCrawlerSchemaChangePolicy <a name="GlueCrawlerSchemaChangePolicy" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerSchemaChangePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerSchemaChangePolicy.Initializer"></a>

```typescript
import { glueCrawler } from '@cdktf/aws-cdk'

const glueCrawlerSchemaChangePolicy: glueCrawler.GlueCrawlerSchemaChangePolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerSchemaChangePolicy.property.deleteBehavior">deleteBehavior</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/glue_crawler#delete_behavior GlueCrawler#delete_behavior}. |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerSchemaChangePolicy.property.updateBehavior">updateBehavior</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/glue_crawler#update_behavior GlueCrawler#update_behavior}. |

---

##### `deleteBehavior`<sup>Optional</sup> <a name="deleteBehavior" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerSchemaChangePolicy.property.deleteBehavior"></a>

```typescript
public readonly deleteBehavior: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/glue_crawler#delete_behavior GlueCrawler#delete_behavior}.

---

##### `updateBehavior`<sup>Optional</sup> <a name="updateBehavior" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerSchemaChangePolicy.property.updateBehavior"></a>

```typescript
public readonly updateBehavior: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/glue_crawler#update_behavior GlueCrawler#update_behavior}.

---

## Classes <a name="Classes" id="Classes"></a>

### GlueCrawlerCatalogTargetList <a name="GlueCrawlerCatalogTargetList" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerCatalogTargetList"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerCatalogTargetList.Initializer"></a>

```typescript
import { glueCrawler } from '@cdktf/aws-cdk'

new glueCrawler.GlueCrawlerCatalogTargetList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerCatalogTargetList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerCatalogTargetList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerCatalogTargetList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerCatalogTargetList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerCatalogTargetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerCatalogTargetList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerCatalogTargetList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerCatalogTargetList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerCatalogTargetList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerCatalogTargetList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerCatalogTargetList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerCatalogTargetList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerCatalogTargetList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerCatalogTargetList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerCatalogTargetList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerCatalogTargetList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerCatalogTargetList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerCatalogTargetList.get"></a>

```typescript
public get(index: number): GlueCrawlerCatalogTargetOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerCatalogTargetList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerCatalogTargetList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerCatalogTargetList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerCatalogTargetList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerCatalogTarget">GlueCrawlerCatalogTarget</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerCatalogTargetList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerCatalogTargetList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerCatalogTargetList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GlueCrawlerCatalogTarget[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerCatalogTarget">GlueCrawlerCatalogTarget</a>[]

---


### GlueCrawlerCatalogTargetOutputReference <a name="GlueCrawlerCatalogTargetOutputReference" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerCatalogTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerCatalogTargetOutputReference.Initializer"></a>

```typescript
import { glueCrawler } from '@cdktf/aws-cdk'

new glueCrawler.GlueCrawlerCatalogTargetOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerCatalogTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerCatalogTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerCatalogTargetOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerCatalogTargetOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerCatalogTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerCatalogTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerCatalogTargetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerCatalogTargetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerCatalogTargetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerCatalogTargetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerCatalogTargetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerCatalogTargetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerCatalogTargetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerCatalogTargetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerCatalogTargetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerCatalogTargetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerCatalogTargetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerCatalogTargetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerCatalogTargetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerCatalogTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerCatalogTargetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerCatalogTargetOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerCatalogTargetOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerCatalogTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerCatalogTargetOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerCatalogTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerCatalogTargetOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerCatalogTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerCatalogTargetOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerCatalogTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerCatalogTargetOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerCatalogTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerCatalogTargetOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerCatalogTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerCatalogTargetOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerCatalogTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerCatalogTargetOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerCatalogTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerCatalogTargetOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerCatalogTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerCatalogTargetOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerCatalogTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerCatalogTargetOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerCatalogTargetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerCatalogTargetOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerCatalogTargetOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerCatalogTargetOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerCatalogTargetOutputReference.property.databaseNameInput">databaseNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerCatalogTargetOutputReference.property.tablesInput">tablesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerCatalogTargetOutputReference.property.databaseName">databaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerCatalogTargetOutputReference.property.tables">tables</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerCatalogTargetOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerCatalogTarget">GlueCrawlerCatalogTarget</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerCatalogTargetOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerCatalogTargetOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `databaseNameInput`<sup>Optional</sup> <a name="databaseNameInput" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerCatalogTargetOutputReference.property.databaseNameInput"></a>

```typescript
public readonly databaseNameInput: string;
```

- *Type:* string

---

##### `tablesInput`<sup>Optional</sup> <a name="tablesInput" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerCatalogTargetOutputReference.property.tablesInput"></a>

```typescript
public readonly tablesInput: string[];
```

- *Type:* string[]

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerCatalogTargetOutputReference.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

---

##### `tables`<sup>Required</sup> <a name="tables" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerCatalogTargetOutputReference.property.tables"></a>

```typescript
public readonly tables: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerCatalogTargetOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GlueCrawlerCatalogTarget;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerCatalogTarget">GlueCrawlerCatalogTarget</a>

---


### GlueCrawlerDeltaTargetList <a name="GlueCrawlerDeltaTargetList" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerDeltaTargetList"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerDeltaTargetList.Initializer"></a>

```typescript
import { glueCrawler } from '@cdktf/aws-cdk'

new glueCrawler.GlueCrawlerDeltaTargetList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerDeltaTargetList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerDeltaTargetList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerDeltaTargetList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerDeltaTargetList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerDeltaTargetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerDeltaTargetList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerDeltaTargetList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerDeltaTargetList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerDeltaTargetList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerDeltaTargetList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerDeltaTargetList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerDeltaTargetList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerDeltaTargetList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerDeltaTargetList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerDeltaTargetList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerDeltaTargetList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerDeltaTargetList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerDeltaTargetList.get"></a>

```typescript
public get(index: number): GlueCrawlerDeltaTargetOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerDeltaTargetList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerDeltaTargetList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerDeltaTargetList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerDeltaTargetList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerDeltaTarget">GlueCrawlerDeltaTarget</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerDeltaTargetList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerDeltaTargetList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerDeltaTargetList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GlueCrawlerDeltaTarget[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerDeltaTarget">GlueCrawlerDeltaTarget</a>[]

---


### GlueCrawlerDeltaTargetOutputReference <a name="GlueCrawlerDeltaTargetOutputReference" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerDeltaTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerDeltaTargetOutputReference.Initializer"></a>

```typescript
import { glueCrawler } from '@cdktf/aws-cdk'

new glueCrawler.GlueCrawlerDeltaTargetOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerDeltaTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerDeltaTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerDeltaTargetOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerDeltaTargetOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerDeltaTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerDeltaTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerDeltaTargetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerDeltaTargetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerDeltaTargetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerDeltaTargetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerDeltaTargetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerDeltaTargetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerDeltaTargetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerDeltaTargetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerDeltaTargetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerDeltaTargetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerDeltaTargetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerDeltaTargetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerDeltaTargetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerDeltaTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerDeltaTargetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerDeltaTargetOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerDeltaTargetOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerDeltaTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerDeltaTargetOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerDeltaTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerDeltaTargetOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerDeltaTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerDeltaTargetOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerDeltaTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerDeltaTargetOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerDeltaTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerDeltaTargetOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerDeltaTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerDeltaTargetOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerDeltaTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerDeltaTargetOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerDeltaTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerDeltaTargetOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerDeltaTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerDeltaTargetOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerDeltaTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerDeltaTargetOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerDeltaTargetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerDeltaTargetOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerDeltaTargetOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerDeltaTargetOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerDeltaTargetOutputReference.property.connectionNameInput">connectionNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerDeltaTargetOutputReference.property.deltaTablesInput">deltaTablesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerDeltaTargetOutputReference.property.writeManifestInput">writeManifestInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerDeltaTargetOutputReference.property.connectionName">connectionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerDeltaTargetOutputReference.property.deltaTables">deltaTables</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerDeltaTargetOutputReference.property.writeManifest">writeManifest</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerDeltaTargetOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerDeltaTarget">GlueCrawlerDeltaTarget</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerDeltaTargetOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerDeltaTargetOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `connectionNameInput`<sup>Optional</sup> <a name="connectionNameInput" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerDeltaTargetOutputReference.property.connectionNameInput"></a>

```typescript
public readonly connectionNameInput: string;
```

- *Type:* string

---

##### `deltaTablesInput`<sup>Optional</sup> <a name="deltaTablesInput" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerDeltaTargetOutputReference.property.deltaTablesInput"></a>

```typescript
public readonly deltaTablesInput: string[];
```

- *Type:* string[]

---

##### `writeManifestInput`<sup>Optional</sup> <a name="writeManifestInput" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerDeltaTargetOutputReference.property.writeManifestInput"></a>

```typescript
public readonly writeManifestInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `connectionName`<sup>Required</sup> <a name="connectionName" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerDeltaTargetOutputReference.property.connectionName"></a>

```typescript
public readonly connectionName: string;
```

- *Type:* string

---

##### `deltaTables`<sup>Required</sup> <a name="deltaTables" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerDeltaTargetOutputReference.property.deltaTables"></a>

```typescript
public readonly deltaTables: string[];
```

- *Type:* string[]

---

##### `writeManifest`<sup>Required</sup> <a name="writeManifest" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerDeltaTargetOutputReference.property.writeManifest"></a>

```typescript
public readonly writeManifest: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerDeltaTargetOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GlueCrawlerDeltaTarget;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerDeltaTarget">GlueCrawlerDeltaTarget</a>

---


### GlueCrawlerDynamodbTargetList <a name="GlueCrawlerDynamodbTargetList" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerDynamodbTargetList"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerDynamodbTargetList.Initializer"></a>

```typescript
import { glueCrawler } from '@cdktf/aws-cdk'

new glueCrawler.GlueCrawlerDynamodbTargetList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerDynamodbTargetList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerDynamodbTargetList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerDynamodbTargetList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerDynamodbTargetList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerDynamodbTargetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerDynamodbTargetList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerDynamodbTargetList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerDynamodbTargetList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerDynamodbTargetList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerDynamodbTargetList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerDynamodbTargetList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerDynamodbTargetList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerDynamodbTargetList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerDynamodbTargetList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerDynamodbTargetList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerDynamodbTargetList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerDynamodbTargetList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerDynamodbTargetList.get"></a>

```typescript
public get(index: number): GlueCrawlerDynamodbTargetOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerDynamodbTargetList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerDynamodbTargetList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerDynamodbTargetList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerDynamodbTargetList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerDynamodbTarget">GlueCrawlerDynamodbTarget</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerDynamodbTargetList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerDynamodbTargetList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerDynamodbTargetList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GlueCrawlerDynamodbTarget[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerDynamodbTarget">GlueCrawlerDynamodbTarget</a>[]

---


### GlueCrawlerDynamodbTargetOutputReference <a name="GlueCrawlerDynamodbTargetOutputReference" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerDynamodbTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.Initializer"></a>

```typescript
import { glueCrawler } from '@cdktf/aws-cdk'

new glueCrawler.GlueCrawlerDynamodbTargetOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.resetScanAll">resetScanAll</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.resetScanRate">resetScanRate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetScanAll` <a name="resetScanAll" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.resetScanAll"></a>

```typescript
public resetScanAll(): void
```

##### `resetScanRate` <a name="resetScanRate" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.resetScanRate"></a>

```typescript
public resetScanRate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.property.pathInput">pathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.property.scanAllInput">scanAllInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.property.scanRateInput">scanRateInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.property.scanAll">scanAll</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.property.scanRate">scanRate</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerDynamodbTarget">GlueCrawlerDynamodbTarget</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.property.pathInput"></a>

```typescript
public readonly pathInput: string;
```

- *Type:* string

---

##### `scanAllInput`<sup>Optional</sup> <a name="scanAllInput" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.property.scanAllInput"></a>

```typescript
public readonly scanAllInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `scanRateInput`<sup>Optional</sup> <a name="scanRateInput" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.property.scanRateInput"></a>

```typescript
public readonly scanRateInput: number;
```

- *Type:* number

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `scanAll`<sup>Required</sup> <a name="scanAll" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.property.scanAll"></a>

```typescript
public readonly scanAll: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `scanRate`<sup>Required</sup> <a name="scanRate" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.property.scanRate"></a>

```typescript
public readonly scanRate: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerDynamodbTargetOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GlueCrawlerDynamodbTarget;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerDynamodbTarget">GlueCrawlerDynamodbTarget</a>

---


### GlueCrawlerJdbcTargetList <a name="GlueCrawlerJdbcTargetList" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerJdbcTargetList"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerJdbcTargetList.Initializer"></a>

```typescript
import { glueCrawler } from '@cdktf/aws-cdk'

new glueCrawler.GlueCrawlerJdbcTargetList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerJdbcTargetList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerJdbcTargetList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerJdbcTargetList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerJdbcTargetList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerJdbcTargetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerJdbcTargetList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerJdbcTargetList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerJdbcTargetList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerJdbcTargetList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerJdbcTargetList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerJdbcTargetList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerJdbcTargetList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerJdbcTargetList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerJdbcTargetList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerJdbcTargetList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerJdbcTargetList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerJdbcTargetList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerJdbcTargetList.get"></a>

```typescript
public get(index: number): GlueCrawlerJdbcTargetOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerJdbcTargetList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerJdbcTargetList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerJdbcTargetList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerJdbcTargetList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerJdbcTarget">GlueCrawlerJdbcTarget</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerJdbcTargetList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerJdbcTargetList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerJdbcTargetList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GlueCrawlerJdbcTarget[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerJdbcTarget">GlueCrawlerJdbcTarget</a>[]

---


### GlueCrawlerJdbcTargetOutputReference <a name="GlueCrawlerJdbcTargetOutputReference" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerJdbcTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerJdbcTargetOutputReference.Initializer"></a>

```typescript
import { glueCrawler } from '@cdktf/aws-cdk'

new glueCrawler.GlueCrawlerJdbcTargetOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerJdbcTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerJdbcTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerJdbcTargetOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerJdbcTargetOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerJdbcTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerJdbcTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerJdbcTargetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerJdbcTargetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerJdbcTargetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerJdbcTargetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerJdbcTargetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerJdbcTargetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerJdbcTargetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerJdbcTargetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerJdbcTargetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerJdbcTargetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerJdbcTargetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerJdbcTargetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerJdbcTargetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerJdbcTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerJdbcTargetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerJdbcTargetOutputReference.resetExclusions">resetExclusions</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerJdbcTargetOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerJdbcTargetOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerJdbcTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerJdbcTargetOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerJdbcTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerJdbcTargetOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerJdbcTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerJdbcTargetOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerJdbcTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerJdbcTargetOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerJdbcTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerJdbcTargetOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerJdbcTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerJdbcTargetOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerJdbcTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerJdbcTargetOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerJdbcTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerJdbcTargetOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerJdbcTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerJdbcTargetOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerJdbcTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerJdbcTargetOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerJdbcTargetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerJdbcTargetOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetExclusions` <a name="resetExclusions" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerJdbcTargetOutputReference.resetExclusions"></a>

```typescript
public resetExclusions(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerJdbcTargetOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerJdbcTargetOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerJdbcTargetOutputReference.property.connectionNameInput">connectionNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerJdbcTargetOutputReference.property.exclusionsInput">exclusionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerJdbcTargetOutputReference.property.pathInput">pathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerJdbcTargetOutputReference.property.connectionName">connectionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerJdbcTargetOutputReference.property.exclusions">exclusions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerJdbcTargetOutputReference.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerJdbcTargetOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerJdbcTarget">GlueCrawlerJdbcTarget</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerJdbcTargetOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerJdbcTargetOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `connectionNameInput`<sup>Optional</sup> <a name="connectionNameInput" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerJdbcTargetOutputReference.property.connectionNameInput"></a>

```typescript
public readonly connectionNameInput: string;
```

- *Type:* string

---

##### `exclusionsInput`<sup>Optional</sup> <a name="exclusionsInput" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerJdbcTargetOutputReference.property.exclusionsInput"></a>

```typescript
public readonly exclusionsInput: string[];
```

- *Type:* string[]

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerJdbcTargetOutputReference.property.pathInput"></a>

```typescript
public readonly pathInput: string;
```

- *Type:* string

---

##### `connectionName`<sup>Required</sup> <a name="connectionName" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerJdbcTargetOutputReference.property.connectionName"></a>

```typescript
public readonly connectionName: string;
```

- *Type:* string

---

##### `exclusions`<sup>Required</sup> <a name="exclusions" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerJdbcTargetOutputReference.property.exclusions"></a>

```typescript
public readonly exclusions: string[];
```

- *Type:* string[]

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerJdbcTargetOutputReference.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerJdbcTargetOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GlueCrawlerJdbcTarget;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerJdbcTarget">GlueCrawlerJdbcTarget</a>

---


### GlueCrawlerLineageConfigurationOutputReference <a name="GlueCrawlerLineageConfigurationOutputReference" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerLineageConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.Initializer"></a>

```typescript
import { glueCrawler } from '@cdktf/aws-cdk'

new glueCrawler.GlueCrawlerLineageConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.resetCrawlerLineageSettings">resetCrawlerLineageSettings</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCrawlerLineageSettings` <a name="resetCrawlerLineageSettings" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.resetCrawlerLineageSettings"></a>

```typescript
public resetCrawlerLineageSettings(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.property.crawlerLineageSettingsInput">crawlerLineageSettingsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.property.crawlerLineageSettings">crawlerLineageSettings</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerLineageConfiguration">GlueCrawlerLineageConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `crawlerLineageSettingsInput`<sup>Optional</sup> <a name="crawlerLineageSettingsInput" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.property.crawlerLineageSettingsInput"></a>

```typescript
public readonly crawlerLineageSettingsInput: string;
```

- *Type:* string

---

##### `crawlerLineageSettings`<sup>Required</sup> <a name="crawlerLineageSettings" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.property.crawlerLineageSettings"></a>

```typescript
public readonly crawlerLineageSettings: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerLineageConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GlueCrawlerLineageConfiguration;
```

- *Type:* <a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerLineageConfiguration">GlueCrawlerLineageConfiguration</a>

---


### GlueCrawlerMongodbTargetList <a name="GlueCrawlerMongodbTargetList" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerMongodbTargetList"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerMongodbTargetList.Initializer"></a>

```typescript
import { glueCrawler } from '@cdktf/aws-cdk'

new glueCrawler.GlueCrawlerMongodbTargetList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerMongodbTargetList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerMongodbTargetList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerMongodbTargetList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerMongodbTargetList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerMongodbTargetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerMongodbTargetList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerMongodbTargetList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerMongodbTargetList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerMongodbTargetList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerMongodbTargetList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerMongodbTargetList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerMongodbTargetList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerMongodbTargetList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerMongodbTargetList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerMongodbTargetList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerMongodbTargetList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerMongodbTargetList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerMongodbTargetList.get"></a>

```typescript
public get(index: number): GlueCrawlerMongodbTargetOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerMongodbTargetList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerMongodbTargetList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerMongodbTargetList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerMongodbTargetList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerMongodbTarget">GlueCrawlerMongodbTarget</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerMongodbTargetList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerMongodbTargetList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerMongodbTargetList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GlueCrawlerMongodbTarget[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerMongodbTarget">GlueCrawlerMongodbTarget</a>[]

---


### GlueCrawlerMongodbTargetOutputReference <a name="GlueCrawlerMongodbTargetOutputReference" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerMongodbTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerMongodbTargetOutputReference.Initializer"></a>

```typescript
import { glueCrawler } from '@cdktf/aws-cdk'

new glueCrawler.GlueCrawlerMongodbTargetOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerMongodbTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerMongodbTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerMongodbTargetOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerMongodbTargetOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerMongodbTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerMongodbTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerMongodbTargetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerMongodbTargetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerMongodbTargetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerMongodbTargetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerMongodbTargetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerMongodbTargetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerMongodbTargetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerMongodbTargetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerMongodbTargetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerMongodbTargetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerMongodbTargetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerMongodbTargetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerMongodbTargetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerMongodbTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerMongodbTargetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerMongodbTargetOutputReference.resetScanAll">resetScanAll</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerMongodbTargetOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerMongodbTargetOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerMongodbTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerMongodbTargetOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerMongodbTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerMongodbTargetOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerMongodbTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerMongodbTargetOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerMongodbTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerMongodbTargetOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerMongodbTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerMongodbTargetOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerMongodbTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerMongodbTargetOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerMongodbTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerMongodbTargetOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerMongodbTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerMongodbTargetOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerMongodbTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerMongodbTargetOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerMongodbTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerMongodbTargetOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerMongodbTargetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerMongodbTargetOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetScanAll` <a name="resetScanAll" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerMongodbTargetOutputReference.resetScanAll"></a>

```typescript
public resetScanAll(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerMongodbTargetOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerMongodbTargetOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerMongodbTargetOutputReference.property.connectionNameInput">connectionNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerMongodbTargetOutputReference.property.pathInput">pathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerMongodbTargetOutputReference.property.scanAllInput">scanAllInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerMongodbTargetOutputReference.property.connectionName">connectionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerMongodbTargetOutputReference.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerMongodbTargetOutputReference.property.scanAll">scanAll</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerMongodbTargetOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerMongodbTarget">GlueCrawlerMongodbTarget</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerMongodbTargetOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerMongodbTargetOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `connectionNameInput`<sup>Optional</sup> <a name="connectionNameInput" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerMongodbTargetOutputReference.property.connectionNameInput"></a>

```typescript
public readonly connectionNameInput: string;
```

- *Type:* string

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerMongodbTargetOutputReference.property.pathInput"></a>

```typescript
public readonly pathInput: string;
```

- *Type:* string

---

##### `scanAllInput`<sup>Optional</sup> <a name="scanAllInput" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerMongodbTargetOutputReference.property.scanAllInput"></a>

```typescript
public readonly scanAllInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `connectionName`<sup>Required</sup> <a name="connectionName" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerMongodbTargetOutputReference.property.connectionName"></a>

```typescript
public readonly connectionName: string;
```

- *Type:* string

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerMongodbTargetOutputReference.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `scanAll`<sup>Required</sup> <a name="scanAll" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerMongodbTargetOutputReference.property.scanAll"></a>

```typescript
public readonly scanAll: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerMongodbTargetOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GlueCrawlerMongodbTarget;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerMongodbTarget">GlueCrawlerMongodbTarget</a>

---


### GlueCrawlerRecrawlPolicyOutputReference <a name="GlueCrawlerRecrawlPolicyOutputReference" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.Initializer"></a>

```typescript
import { glueCrawler } from '@cdktf/aws-cdk'

new glueCrawler.GlueCrawlerRecrawlPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.resetRecrawlBehavior">resetRecrawlBehavior</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRecrawlBehavior` <a name="resetRecrawlBehavior" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.resetRecrawlBehavior"></a>

```typescript
public resetRecrawlBehavior(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.property.recrawlBehaviorInput">recrawlBehaviorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.property.recrawlBehavior">recrawlBehavior</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerRecrawlPolicy">GlueCrawlerRecrawlPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `recrawlBehaviorInput`<sup>Optional</sup> <a name="recrawlBehaviorInput" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.property.recrawlBehaviorInput"></a>

```typescript
public readonly recrawlBehaviorInput: string;
```

- *Type:* string

---

##### `recrawlBehavior`<sup>Required</sup> <a name="recrawlBehavior" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.property.recrawlBehavior"></a>

```typescript
public readonly recrawlBehavior: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerRecrawlPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GlueCrawlerRecrawlPolicy;
```

- *Type:* <a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerRecrawlPolicy">GlueCrawlerRecrawlPolicy</a>

---


### GlueCrawlerS3TargetList <a name="GlueCrawlerS3TargetList" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerS3TargetList"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerS3TargetList.Initializer"></a>

```typescript
import { glueCrawler } from '@cdktf/aws-cdk'

new glueCrawler.GlueCrawlerS3TargetList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerS3TargetList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerS3TargetList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerS3TargetList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerS3TargetList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerS3TargetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerS3TargetList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerS3TargetList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerS3TargetList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerS3TargetList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerS3TargetList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerS3TargetList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerS3TargetList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerS3TargetList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerS3TargetList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerS3TargetList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerS3TargetList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerS3TargetList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerS3TargetList.get"></a>

```typescript
public get(index: number): GlueCrawlerS3TargetOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerS3TargetList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerS3TargetList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerS3TargetList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerS3TargetList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerS3Target">GlueCrawlerS3Target</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerS3TargetList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerS3TargetList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerS3TargetList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GlueCrawlerS3Target[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerS3Target">GlueCrawlerS3Target</a>[]

---


### GlueCrawlerS3TargetOutputReference <a name="GlueCrawlerS3TargetOutputReference" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerS3TargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerS3TargetOutputReference.Initializer"></a>

```typescript
import { glueCrawler } from '@cdktf/aws-cdk'

new glueCrawler.GlueCrawlerS3TargetOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerS3TargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerS3TargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerS3TargetOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerS3TargetOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerS3TargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerS3TargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerS3TargetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerS3TargetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerS3TargetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerS3TargetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerS3TargetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerS3TargetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerS3TargetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerS3TargetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerS3TargetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerS3TargetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerS3TargetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerS3TargetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerS3TargetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerS3TargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerS3TargetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerS3TargetOutputReference.resetConnectionName">resetConnectionName</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerS3TargetOutputReference.resetDlqEventQueueArn">resetDlqEventQueueArn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerS3TargetOutputReference.resetEventQueueArn">resetEventQueueArn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerS3TargetOutputReference.resetExclusions">resetExclusions</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerS3TargetOutputReference.resetSampleSize">resetSampleSize</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerS3TargetOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerS3TargetOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerS3TargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerS3TargetOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerS3TargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerS3TargetOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerS3TargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerS3TargetOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerS3TargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerS3TargetOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerS3TargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerS3TargetOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerS3TargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerS3TargetOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerS3TargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerS3TargetOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerS3TargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerS3TargetOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerS3TargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerS3TargetOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerS3TargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerS3TargetOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerS3TargetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerS3TargetOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetConnectionName` <a name="resetConnectionName" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerS3TargetOutputReference.resetConnectionName"></a>

```typescript
public resetConnectionName(): void
```

##### `resetDlqEventQueueArn` <a name="resetDlqEventQueueArn" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerS3TargetOutputReference.resetDlqEventQueueArn"></a>

```typescript
public resetDlqEventQueueArn(): void
```

##### `resetEventQueueArn` <a name="resetEventQueueArn" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerS3TargetOutputReference.resetEventQueueArn"></a>

```typescript
public resetEventQueueArn(): void
```

##### `resetExclusions` <a name="resetExclusions" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerS3TargetOutputReference.resetExclusions"></a>

```typescript
public resetExclusions(): void
```

##### `resetSampleSize` <a name="resetSampleSize" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerS3TargetOutputReference.resetSampleSize"></a>

```typescript
public resetSampleSize(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerS3TargetOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerS3TargetOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerS3TargetOutputReference.property.connectionNameInput">connectionNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerS3TargetOutputReference.property.dlqEventQueueArnInput">dlqEventQueueArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerS3TargetOutputReference.property.eventQueueArnInput">eventQueueArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerS3TargetOutputReference.property.exclusionsInput">exclusionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerS3TargetOutputReference.property.pathInput">pathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerS3TargetOutputReference.property.sampleSizeInput">sampleSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerS3TargetOutputReference.property.connectionName">connectionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerS3TargetOutputReference.property.dlqEventQueueArn">dlqEventQueueArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerS3TargetOutputReference.property.eventQueueArn">eventQueueArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerS3TargetOutputReference.property.exclusions">exclusions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerS3TargetOutputReference.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerS3TargetOutputReference.property.sampleSize">sampleSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerS3TargetOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerS3Target">GlueCrawlerS3Target</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerS3TargetOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerS3TargetOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `connectionNameInput`<sup>Optional</sup> <a name="connectionNameInput" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerS3TargetOutputReference.property.connectionNameInput"></a>

```typescript
public readonly connectionNameInput: string;
```

- *Type:* string

---

##### `dlqEventQueueArnInput`<sup>Optional</sup> <a name="dlqEventQueueArnInput" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerS3TargetOutputReference.property.dlqEventQueueArnInput"></a>

```typescript
public readonly dlqEventQueueArnInput: string;
```

- *Type:* string

---

##### `eventQueueArnInput`<sup>Optional</sup> <a name="eventQueueArnInput" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerS3TargetOutputReference.property.eventQueueArnInput"></a>

```typescript
public readonly eventQueueArnInput: string;
```

- *Type:* string

---

##### `exclusionsInput`<sup>Optional</sup> <a name="exclusionsInput" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerS3TargetOutputReference.property.exclusionsInput"></a>

```typescript
public readonly exclusionsInput: string[];
```

- *Type:* string[]

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerS3TargetOutputReference.property.pathInput"></a>

```typescript
public readonly pathInput: string;
```

- *Type:* string

---

##### `sampleSizeInput`<sup>Optional</sup> <a name="sampleSizeInput" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerS3TargetOutputReference.property.sampleSizeInput"></a>

```typescript
public readonly sampleSizeInput: number;
```

- *Type:* number

---

##### `connectionName`<sup>Required</sup> <a name="connectionName" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerS3TargetOutputReference.property.connectionName"></a>

```typescript
public readonly connectionName: string;
```

- *Type:* string

---

##### `dlqEventQueueArn`<sup>Required</sup> <a name="dlqEventQueueArn" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerS3TargetOutputReference.property.dlqEventQueueArn"></a>

```typescript
public readonly dlqEventQueueArn: string;
```

- *Type:* string

---

##### `eventQueueArn`<sup>Required</sup> <a name="eventQueueArn" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerS3TargetOutputReference.property.eventQueueArn"></a>

```typescript
public readonly eventQueueArn: string;
```

- *Type:* string

---

##### `exclusions`<sup>Required</sup> <a name="exclusions" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerS3TargetOutputReference.property.exclusions"></a>

```typescript
public readonly exclusions: string[];
```

- *Type:* string[]

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerS3TargetOutputReference.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `sampleSize`<sup>Required</sup> <a name="sampleSize" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerS3TargetOutputReference.property.sampleSize"></a>

```typescript
public readonly sampleSize: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerS3TargetOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GlueCrawlerS3Target;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerS3Target">GlueCrawlerS3Target</a>

---


### GlueCrawlerSchemaChangePolicyOutputReference <a name="GlueCrawlerSchemaChangePolicyOutputReference" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.Initializer"></a>

```typescript
import { glueCrawler } from '@cdktf/aws-cdk'

new glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.resetDeleteBehavior">resetDeleteBehavior</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.resetUpdateBehavior">resetUpdateBehavior</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDeleteBehavior` <a name="resetDeleteBehavior" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.resetDeleteBehavior"></a>

```typescript
public resetDeleteBehavior(): void
```

##### `resetUpdateBehavior` <a name="resetUpdateBehavior" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.resetUpdateBehavior"></a>

```typescript
public resetUpdateBehavior(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.property.deleteBehaviorInput">deleteBehaviorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.property.updateBehaviorInput">updateBehaviorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.property.deleteBehavior">deleteBehavior</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.property.updateBehavior">updateBehavior</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerSchemaChangePolicy">GlueCrawlerSchemaChangePolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `deleteBehaviorInput`<sup>Optional</sup> <a name="deleteBehaviorInput" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.property.deleteBehaviorInput"></a>

```typescript
public readonly deleteBehaviorInput: string;
```

- *Type:* string

---

##### `updateBehaviorInput`<sup>Optional</sup> <a name="updateBehaviorInput" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.property.updateBehaviorInput"></a>

```typescript
public readonly updateBehaviorInput: string;
```

- *Type:* string

---

##### `deleteBehavior`<sup>Required</sup> <a name="deleteBehavior" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.property.deleteBehavior"></a>

```typescript
public readonly deleteBehavior: string;
```

- *Type:* string

---

##### `updateBehavior`<sup>Required</sup> <a name="updateBehavior" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.property.updateBehavior"></a>

```typescript
public readonly updateBehavior: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.glueCrawler.GlueCrawlerSchemaChangePolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GlueCrawlerSchemaChangePolicy;
```

- *Type:* <a href="#@cdktf/aws-cdk.glueCrawler.GlueCrawlerSchemaChangePolicy">GlueCrawlerSchemaChangePolicy</a>

---



