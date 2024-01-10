# `codebuildProject` Submodule <a name="`codebuildProject` Submodule" id="@cdktf/aws-cdk.codebuildProject"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CodebuildProject <a name="CodebuildProject" id="@cdktf/aws-cdk.codebuildProject.CodebuildProject"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_project aws_codebuild_project}.

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.codebuildProject.CodebuildProject.Initializer"></a>

```typescript
import { codebuildProject } from '@cdktf/aws-cdk'

new codebuildProject.CodebuildProject(scope: Construct, id: string, config: CodebuildProjectConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProject.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProject.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProject.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectConfig">CodebuildProjectConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.codebuildProject.CodebuildProject.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.codebuildProject.CodebuildProject.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/aws-cdk.codebuildProject.CodebuildProject.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectConfig">CodebuildProjectConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProject.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProject.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProject.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProject.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProject.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProject.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProject.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProject.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProject.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProject.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProject.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProject.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProject.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProject.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProject.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProject.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProject.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProject.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProject.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProject.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProject.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProject.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProject.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProject.putArtifacts">putArtifacts</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProject.putBuildBatchConfig">putBuildBatchConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProject.putCache">putCache</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProject.putEnvironment">putEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProject.putFileSystemLocations">putFileSystemLocations</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProject.putLogsConfig">putLogsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProject.putSecondaryArtifacts">putSecondaryArtifacts</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProject.putSecondarySources">putSecondarySources</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProject.putSecondarySourceVersion">putSecondarySourceVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProject.putSource">putSource</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProject.putVpcConfig">putVpcConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProject.resetBadgeEnabled">resetBadgeEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProject.resetBuildBatchConfig">resetBuildBatchConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProject.resetBuildTimeout">resetBuildTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProject.resetCache">resetCache</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProject.resetConcurrentBuildLimit">resetConcurrentBuildLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProject.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProject.resetEncryptionKey">resetEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProject.resetFileSystemLocations">resetFileSystemLocations</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProject.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProject.resetLogsConfig">resetLogsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProject.resetProjectVisibility">resetProjectVisibility</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProject.resetQueuedTimeout">resetQueuedTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProject.resetResourceAccessRole">resetResourceAccessRole</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProject.resetSecondaryArtifacts">resetSecondaryArtifacts</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProject.resetSecondarySources">resetSecondarySources</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProject.resetSecondarySourceVersion">resetSecondarySourceVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProject.resetSourceVersion">resetSourceVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProject.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProject.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProject.resetVpcConfig">resetVpcConfig</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.codebuildProject.CodebuildProject.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/aws-cdk.codebuildProject.CodebuildProject.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/aws-cdk.codebuildProject.CodebuildProject.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.codebuildProject.CodebuildProject.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/aws-cdk.codebuildProject.CodebuildProject.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/aws-cdk.codebuildProject.CodebuildProject.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/aws-cdk.codebuildProject.CodebuildProject.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/aws-cdk.codebuildProject.CodebuildProject.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/aws-cdk.codebuildProject.CodebuildProject.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/aws-cdk.codebuildProject.CodebuildProject.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/aws-cdk.codebuildProject.CodebuildProject.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/aws-cdk.codebuildProject.CodebuildProject.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProject.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProject.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProject.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProject.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProject.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProject.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProject.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProject.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProject.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProject.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProject.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProject.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProject.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProject.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProject.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProject.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProject.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProject.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/aws-cdk.codebuildProject.CodebuildProject.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/aws-cdk.codebuildProject.CodebuildProject.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.codebuildProject.CodebuildProject.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.codebuildProject.CodebuildProject.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProject.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProject.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/aws-cdk.codebuildProject.CodebuildProject.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.codebuildProject.CodebuildProject.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/aws-cdk.codebuildProject.CodebuildProject.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/aws-cdk.codebuildProject.CodebuildProject.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/aws-cdk.codebuildProject.CodebuildProject.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/aws-cdk.codebuildProject.CodebuildProject.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.codebuildProject.CodebuildProject.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putArtifacts` <a name="putArtifacts" id="@cdktf/aws-cdk.codebuildProject.CodebuildProject.putArtifacts"></a>

```typescript
public putArtifacts(value: CodebuildProjectArtifacts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.codebuildProject.CodebuildProject.putArtifacts.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectArtifacts">CodebuildProjectArtifacts</a>

---

##### `putBuildBatchConfig` <a name="putBuildBatchConfig" id="@cdktf/aws-cdk.codebuildProject.CodebuildProject.putBuildBatchConfig"></a>

```typescript
public putBuildBatchConfig(value: CodebuildProjectBuildBatchConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.codebuildProject.CodebuildProject.putBuildBatchConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectBuildBatchConfig">CodebuildProjectBuildBatchConfig</a>

---

##### `putCache` <a name="putCache" id="@cdktf/aws-cdk.codebuildProject.CodebuildProject.putCache"></a>

```typescript
public putCache(value: CodebuildProjectCache): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.codebuildProject.CodebuildProject.putCache.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectCache">CodebuildProjectCache</a>

---

##### `putEnvironment` <a name="putEnvironment" id="@cdktf/aws-cdk.codebuildProject.CodebuildProject.putEnvironment"></a>

```typescript
public putEnvironment(value: CodebuildProjectEnvironment): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.codebuildProject.CodebuildProject.putEnvironment.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironment">CodebuildProjectEnvironment</a>

---

##### `putFileSystemLocations` <a name="putFileSystemLocations" id="@cdktf/aws-cdk.codebuildProject.CodebuildProject.putFileSystemLocations"></a>

```typescript
public putFileSystemLocations(value: IResolvable | CodebuildProjectFileSystemLocations[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.codebuildProject.CodebuildProject.putFileSystemLocations.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectFileSystemLocations">CodebuildProjectFileSystemLocations</a>[]

---

##### `putLogsConfig` <a name="putLogsConfig" id="@cdktf/aws-cdk.codebuildProject.CodebuildProject.putLogsConfig"></a>

```typescript
public putLogsConfig(value: CodebuildProjectLogsConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.codebuildProject.CodebuildProject.putLogsConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectLogsConfig">CodebuildProjectLogsConfig</a>

---

##### `putSecondaryArtifacts` <a name="putSecondaryArtifacts" id="@cdktf/aws-cdk.codebuildProject.CodebuildProject.putSecondaryArtifacts"></a>

```typescript
public putSecondaryArtifacts(value: IResolvable | CodebuildProjectSecondaryArtifacts[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.codebuildProject.CodebuildProject.putSecondaryArtifacts.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondaryArtifacts">CodebuildProjectSecondaryArtifacts</a>[]

---

##### `putSecondarySources` <a name="putSecondarySources" id="@cdktf/aws-cdk.codebuildProject.CodebuildProject.putSecondarySources"></a>

```typescript
public putSecondarySources(value: IResolvable | CodebuildProjectSecondarySources[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.codebuildProject.CodebuildProject.putSecondarySources.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySources">CodebuildProjectSecondarySources</a>[]

---

##### `putSecondarySourceVersion` <a name="putSecondarySourceVersion" id="@cdktf/aws-cdk.codebuildProject.CodebuildProject.putSecondarySourceVersion"></a>

```typescript
public putSecondarySourceVersion(value: IResolvable | CodebuildProjectSecondarySourceVersion[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.codebuildProject.CodebuildProject.putSecondarySourceVersion.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourceVersion">CodebuildProjectSecondarySourceVersion</a>[]

---

##### `putSource` <a name="putSource" id="@cdktf/aws-cdk.codebuildProject.CodebuildProject.putSource"></a>

```typescript
public putSource(value: CodebuildProjectSource): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.codebuildProject.CodebuildProject.putSource.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSource">CodebuildProjectSource</a>

---

##### `putVpcConfig` <a name="putVpcConfig" id="@cdktf/aws-cdk.codebuildProject.CodebuildProject.putVpcConfig"></a>

```typescript
public putVpcConfig(value: CodebuildProjectVpcConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.codebuildProject.CodebuildProject.putVpcConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectVpcConfig">CodebuildProjectVpcConfig</a>

---

##### `resetBadgeEnabled` <a name="resetBadgeEnabled" id="@cdktf/aws-cdk.codebuildProject.CodebuildProject.resetBadgeEnabled"></a>

```typescript
public resetBadgeEnabled(): void
```

##### `resetBuildBatchConfig` <a name="resetBuildBatchConfig" id="@cdktf/aws-cdk.codebuildProject.CodebuildProject.resetBuildBatchConfig"></a>

```typescript
public resetBuildBatchConfig(): void
```

##### `resetBuildTimeout` <a name="resetBuildTimeout" id="@cdktf/aws-cdk.codebuildProject.CodebuildProject.resetBuildTimeout"></a>

```typescript
public resetBuildTimeout(): void
```

##### `resetCache` <a name="resetCache" id="@cdktf/aws-cdk.codebuildProject.CodebuildProject.resetCache"></a>

```typescript
public resetCache(): void
```

##### `resetConcurrentBuildLimit` <a name="resetConcurrentBuildLimit" id="@cdktf/aws-cdk.codebuildProject.CodebuildProject.resetConcurrentBuildLimit"></a>

```typescript
public resetConcurrentBuildLimit(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/aws-cdk.codebuildProject.CodebuildProject.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetEncryptionKey` <a name="resetEncryptionKey" id="@cdktf/aws-cdk.codebuildProject.CodebuildProject.resetEncryptionKey"></a>

```typescript
public resetEncryptionKey(): void
```

##### `resetFileSystemLocations` <a name="resetFileSystemLocations" id="@cdktf/aws-cdk.codebuildProject.CodebuildProject.resetFileSystemLocations"></a>

```typescript
public resetFileSystemLocations(): void
```

##### `resetId` <a name="resetId" id="@cdktf/aws-cdk.codebuildProject.CodebuildProject.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLogsConfig` <a name="resetLogsConfig" id="@cdktf/aws-cdk.codebuildProject.CodebuildProject.resetLogsConfig"></a>

```typescript
public resetLogsConfig(): void
```

##### `resetProjectVisibility` <a name="resetProjectVisibility" id="@cdktf/aws-cdk.codebuildProject.CodebuildProject.resetProjectVisibility"></a>

```typescript
public resetProjectVisibility(): void
```

##### `resetQueuedTimeout` <a name="resetQueuedTimeout" id="@cdktf/aws-cdk.codebuildProject.CodebuildProject.resetQueuedTimeout"></a>

```typescript
public resetQueuedTimeout(): void
```

##### `resetResourceAccessRole` <a name="resetResourceAccessRole" id="@cdktf/aws-cdk.codebuildProject.CodebuildProject.resetResourceAccessRole"></a>

```typescript
public resetResourceAccessRole(): void
```

##### `resetSecondaryArtifacts` <a name="resetSecondaryArtifacts" id="@cdktf/aws-cdk.codebuildProject.CodebuildProject.resetSecondaryArtifacts"></a>

```typescript
public resetSecondaryArtifacts(): void
```

##### `resetSecondarySources` <a name="resetSecondarySources" id="@cdktf/aws-cdk.codebuildProject.CodebuildProject.resetSecondarySources"></a>

```typescript
public resetSecondarySources(): void
```

##### `resetSecondarySourceVersion` <a name="resetSecondarySourceVersion" id="@cdktf/aws-cdk.codebuildProject.CodebuildProject.resetSecondarySourceVersion"></a>

```typescript
public resetSecondarySourceVersion(): void
```

##### `resetSourceVersion` <a name="resetSourceVersion" id="@cdktf/aws-cdk.codebuildProject.CodebuildProject.resetSourceVersion"></a>

```typescript
public resetSourceVersion(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/aws-cdk.codebuildProject.CodebuildProject.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/aws-cdk.codebuildProject.CodebuildProject.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

##### `resetVpcConfig` <a name="resetVpcConfig" id="@cdktf/aws-cdk.codebuildProject.CodebuildProject.resetVpcConfig"></a>

```typescript
public resetVpcConfig(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProject.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProject.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProject.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProject.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a CodebuildProject resource upon running "cdktf plan <stack-name>". |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@cdktf/aws-cdk.codebuildProject.CodebuildProject.isConstruct"></a>

```typescript
import { codebuildProject } from '@cdktf/aws-cdk'

codebuildProject.CodebuildProject.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.codebuildProject.CodebuildProject.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/aws-cdk.codebuildProject.CodebuildProject.isTerraformElement"></a>

```typescript
import { codebuildProject } from '@cdktf/aws-cdk'

codebuildProject.CodebuildProject.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.codebuildProject.CodebuildProject.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/aws-cdk.codebuildProject.CodebuildProject.isTerraformResource"></a>

```typescript
import { codebuildProject } from '@cdktf/aws-cdk'

codebuildProject.CodebuildProject.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.codebuildProject.CodebuildProject.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/aws-cdk.codebuildProject.CodebuildProject.generateConfigForImport"></a>

```typescript
import { codebuildProject } from '@cdktf/aws-cdk'

codebuildProject.CodebuildProject.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a CodebuildProject resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.codebuildProject.CodebuildProject.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/aws-cdk.codebuildProject.CodebuildProject.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CodebuildProject to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/aws-cdk.codebuildProject.CodebuildProject.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CodebuildProject that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_project#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.codebuildProject.CodebuildProject.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the CodebuildProject to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProject.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProject.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProject.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProject.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProject.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProject.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProject.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProject.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProject.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProject.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProject.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProject.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProject.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProject.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProject.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProject.property.artifacts">artifacts</a></code> | <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectArtifactsOutputReference">CodebuildProjectArtifactsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProject.property.badgeUrl">badgeUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProject.property.buildBatchConfig">buildBatchConfig</a></code> | <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference">CodebuildProjectBuildBatchConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProject.property.cache">cache</a></code> | <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectCacheOutputReference">CodebuildProjectCacheOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProject.property.environment">environment</a></code> | <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentOutputReference">CodebuildProjectEnvironmentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProject.property.fileSystemLocations">fileSystemLocations</a></code> | <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectFileSystemLocationsList">CodebuildProjectFileSystemLocationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProject.property.logsConfig">logsConfig</a></code> | <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectLogsConfigOutputReference">CodebuildProjectLogsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProject.property.publicProjectAlias">publicProjectAlias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProject.property.secondaryArtifacts">secondaryArtifacts</a></code> | <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondaryArtifactsList">CodebuildProjectSecondaryArtifactsList</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProject.property.secondarySources">secondarySources</a></code> | <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesList">CodebuildProjectSecondarySourcesList</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProject.property.secondarySourceVersion">secondarySourceVersion</a></code> | <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourceVersionList">CodebuildProjectSecondarySourceVersionList</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProject.property.source">source</a></code> | <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceOutputReference">CodebuildProjectSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProject.property.vpcConfig">vpcConfig</a></code> | <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectVpcConfigOutputReference">CodebuildProjectVpcConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProject.property.artifactsInput">artifactsInput</a></code> | <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectArtifacts">CodebuildProjectArtifacts</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProject.property.badgeEnabledInput">badgeEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProject.property.buildBatchConfigInput">buildBatchConfigInput</a></code> | <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectBuildBatchConfig">CodebuildProjectBuildBatchConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProject.property.buildTimeoutInput">buildTimeoutInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProject.property.cacheInput">cacheInput</a></code> | <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectCache">CodebuildProjectCache</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProject.property.concurrentBuildLimitInput">concurrentBuildLimitInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProject.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProject.property.encryptionKeyInput">encryptionKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProject.property.environmentInput">environmentInput</a></code> | <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironment">CodebuildProjectEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProject.property.fileSystemLocationsInput">fileSystemLocationsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectFileSystemLocations">CodebuildProjectFileSystemLocations</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProject.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProject.property.logsConfigInput">logsConfigInput</a></code> | <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectLogsConfig">CodebuildProjectLogsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProject.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProject.property.projectVisibilityInput">projectVisibilityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProject.property.queuedTimeoutInput">queuedTimeoutInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProject.property.resourceAccessRoleInput">resourceAccessRoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProject.property.secondaryArtifactsInput">secondaryArtifactsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondaryArtifacts">CodebuildProjectSecondaryArtifacts</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProject.property.secondarySourcesInput">secondarySourcesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySources">CodebuildProjectSecondarySources</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProject.property.secondarySourceVersionInput">secondarySourceVersionInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourceVersion">CodebuildProjectSecondarySourceVersion</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProject.property.serviceRoleInput">serviceRoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProject.property.sourceInput">sourceInput</a></code> | <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSource">CodebuildProjectSource</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProject.property.sourceVersionInput">sourceVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProject.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProject.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProject.property.vpcConfigInput">vpcConfigInput</a></code> | <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectVpcConfig">CodebuildProjectVpcConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProject.property.badgeEnabled">badgeEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProject.property.buildTimeout">buildTimeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProject.property.concurrentBuildLimit">concurrentBuildLimit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProject.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProject.property.encryptionKey">encryptionKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProject.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProject.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProject.property.projectVisibility">projectVisibility</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProject.property.queuedTimeout">queuedTimeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProject.property.resourceAccessRole">resourceAccessRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProject.property.serviceRole">serviceRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProject.property.sourceVersion">sourceVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProject.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProject.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/aws-cdk.codebuildProject.CodebuildProject.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/aws-cdk.codebuildProject.CodebuildProject.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.codebuildProject.CodebuildProject.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/aws-cdk.codebuildProject.CodebuildProject.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/aws-cdk.codebuildProject.CodebuildProject.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/aws-cdk.codebuildProject.CodebuildProject.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/aws-cdk.codebuildProject.CodebuildProject.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.codebuildProject.CodebuildProject.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.codebuildProject.CodebuildProject.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.codebuildProject.CodebuildProject.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.codebuildProject.CodebuildProject.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.codebuildProject.CodebuildProject.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.codebuildProject.CodebuildProject.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.codebuildProject.CodebuildProject.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/aws-cdk.codebuildProject.CodebuildProject.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `artifacts`<sup>Required</sup> <a name="artifacts" id="@cdktf/aws-cdk.codebuildProject.CodebuildProject.property.artifacts"></a>

```typescript
public readonly artifacts: CodebuildProjectArtifactsOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectArtifactsOutputReference">CodebuildProjectArtifactsOutputReference</a>

---

##### `badgeUrl`<sup>Required</sup> <a name="badgeUrl" id="@cdktf/aws-cdk.codebuildProject.CodebuildProject.property.badgeUrl"></a>

```typescript
public readonly badgeUrl: string;
```

- *Type:* string

---

##### `buildBatchConfig`<sup>Required</sup> <a name="buildBatchConfig" id="@cdktf/aws-cdk.codebuildProject.CodebuildProject.property.buildBatchConfig"></a>

```typescript
public readonly buildBatchConfig: CodebuildProjectBuildBatchConfigOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference">CodebuildProjectBuildBatchConfigOutputReference</a>

---

##### `cache`<sup>Required</sup> <a name="cache" id="@cdktf/aws-cdk.codebuildProject.CodebuildProject.property.cache"></a>

```typescript
public readonly cache: CodebuildProjectCacheOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectCacheOutputReference">CodebuildProjectCacheOutputReference</a>

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktf/aws-cdk.codebuildProject.CodebuildProject.property.environment"></a>

```typescript
public readonly environment: CodebuildProjectEnvironmentOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentOutputReference">CodebuildProjectEnvironmentOutputReference</a>

---

##### `fileSystemLocations`<sup>Required</sup> <a name="fileSystemLocations" id="@cdktf/aws-cdk.codebuildProject.CodebuildProject.property.fileSystemLocations"></a>

```typescript
public readonly fileSystemLocations: CodebuildProjectFileSystemLocationsList;
```

- *Type:* <a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectFileSystemLocationsList">CodebuildProjectFileSystemLocationsList</a>

---

##### `logsConfig`<sup>Required</sup> <a name="logsConfig" id="@cdktf/aws-cdk.codebuildProject.CodebuildProject.property.logsConfig"></a>

```typescript
public readonly logsConfig: CodebuildProjectLogsConfigOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectLogsConfigOutputReference">CodebuildProjectLogsConfigOutputReference</a>

---

##### `publicProjectAlias`<sup>Required</sup> <a name="publicProjectAlias" id="@cdktf/aws-cdk.codebuildProject.CodebuildProject.property.publicProjectAlias"></a>

```typescript
public readonly publicProjectAlias: string;
```

- *Type:* string

---

##### `secondaryArtifacts`<sup>Required</sup> <a name="secondaryArtifacts" id="@cdktf/aws-cdk.codebuildProject.CodebuildProject.property.secondaryArtifacts"></a>

```typescript
public readonly secondaryArtifacts: CodebuildProjectSecondaryArtifactsList;
```

- *Type:* <a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondaryArtifactsList">CodebuildProjectSecondaryArtifactsList</a>

---

##### `secondarySources`<sup>Required</sup> <a name="secondarySources" id="@cdktf/aws-cdk.codebuildProject.CodebuildProject.property.secondarySources"></a>

```typescript
public readonly secondarySources: CodebuildProjectSecondarySourcesList;
```

- *Type:* <a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesList">CodebuildProjectSecondarySourcesList</a>

---

##### `secondarySourceVersion`<sup>Required</sup> <a name="secondarySourceVersion" id="@cdktf/aws-cdk.codebuildProject.CodebuildProject.property.secondarySourceVersion"></a>

```typescript
public readonly secondarySourceVersion: CodebuildProjectSecondarySourceVersionList;
```

- *Type:* <a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourceVersionList">CodebuildProjectSecondarySourceVersionList</a>

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/aws-cdk.codebuildProject.CodebuildProject.property.source"></a>

```typescript
public readonly source: CodebuildProjectSourceOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceOutputReference">CodebuildProjectSourceOutputReference</a>

---

##### `vpcConfig`<sup>Required</sup> <a name="vpcConfig" id="@cdktf/aws-cdk.codebuildProject.CodebuildProject.property.vpcConfig"></a>

```typescript
public readonly vpcConfig: CodebuildProjectVpcConfigOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectVpcConfigOutputReference">CodebuildProjectVpcConfigOutputReference</a>

---

##### `artifactsInput`<sup>Optional</sup> <a name="artifactsInput" id="@cdktf/aws-cdk.codebuildProject.CodebuildProject.property.artifactsInput"></a>

```typescript
public readonly artifactsInput: CodebuildProjectArtifacts;
```

- *Type:* <a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectArtifacts">CodebuildProjectArtifacts</a>

---

##### `badgeEnabledInput`<sup>Optional</sup> <a name="badgeEnabledInput" id="@cdktf/aws-cdk.codebuildProject.CodebuildProject.property.badgeEnabledInput"></a>

```typescript
public readonly badgeEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `buildBatchConfigInput`<sup>Optional</sup> <a name="buildBatchConfigInput" id="@cdktf/aws-cdk.codebuildProject.CodebuildProject.property.buildBatchConfigInput"></a>

```typescript
public readonly buildBatchConfigInput: CodebuildProjectBuildBatchConfig;
```

- *Type:* <a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectBuildBatchConfig">CodebuildProjectBuildBatchConfig</a>

---

##### `buildTimeoutInput`<sup>Optional</sup> <a name="buildTimeoutInput" id="@cdktf/aws-cdk.codebuildProject.CodebuildProject.property.buildTimeoutInput"></a>

```typescript
public readonly buildTimeoutInput: number;
```

- *Type:* number

---

##### `cacheInput`<sup>Optional</sup> <a name="cacheInput" id="@cdktf/aws-cdk.codebuildProject.CodebuildProject.property.cacheInput"></a>

```typescript
public readonly cacheInput: CodebuildProjectCache;
```

- *Type:* <a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectCache">CodebuildProjectCache</a>

---

##### `concurrentBuildLimitInput`<sup>Optional</sup> <a name="concurrentBuildLimitInput" id="@cdktf/aws-cdk.codebuildProject.CodebuildProject.property.concurrentBuildLimitInput"></a>

```typescript
public readonly concurrentBuildLimitInput: number;
```

- *Type:* number

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/aws-cdk.codebuildProject.CodebuildProject.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `encryptionKeyInput`<sup>Optional</sup> <a name="encryptionKeyInput" id="@cdktf/aws-cdk.codebuildProject.CodebuildProject.property.encryptionKeyInput"></a>

```typescript
public readonly encryptionKeyInput: string;
```

- *Type:* string

---

##### `environmentInput`<sup>Optional</sup> <a name="environmentInput" id="@cdktf/aws-cdk.codebuildProject.CodebuildProject.property.environmentInput"></a>

```typescript
public readonly environmentInput: CodebuildProjectEnvironment;
```

- *Type:* <a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironment">CodebuildProjectEnvironment</a>

---

##### `fileSystemLocationsInput`<sup>Optional</sup> <a name="fileSystemLocationsInput" id="@cdktf/aws-cdk.codebuildProject.CodebuildProject.property.fileSystemLocationsInput"></a>

```typescript
public readonly fileSystemLocationsInput: IResolvable | CodebuildProjectFileSystemLocations[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectFileSystemLocations">CodebuildProjectFileSystemLocations</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/aws-cdk.codebuildProject.CodebuildProject.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `logsConfigInput`<sup>Optional</sup> <a name="logsConfigInput" id="@cdktf/aws-cdk.codebuildProject.CodebuildProject.property.logsConfigInput"></a>

```typescript
public readonly logsConfigInput: CodebuildProjectLogsConfig;
```

- *Type:* <a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectLogsConfig">CodebuildProjectLogsConfig</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/aws-cdk.codebuildProject.CodebuildProject.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectVisibilityInput`<sup>Optional</sup> <a name="projectVisibilityInput" id="@cdktf/aws-cdk.codebuildProject.CodebuildProject.property.projectVisibilityInput"></a>

```typescript
public readonly projectVisibilityInput: string;
```

- *Type:* string

---

##### `queuedTimeoutInput`<sup>Optional</sup> <a name="queuedTimeoutInput" id="@cdktf/aws-cdk.codebuildProject.CodebuildProject.property.queuedTimeoutInput"></a>

```typescript
public readonly queuedTimeoutInput: number;
```

- *Type:* number

---

##### `resourceAccessRoleInput`<sup>Optional</sup> <a name="resourceAccessRoleInput" id="@cdktf/aws-cdk.codebuildProject.CodebuildProject.property.resourceAccessRoleInput"></a>

```typescript
public readonly resourceAccessRoleInput: string;
```

- *Type:* string

---

##### `secondaryArtifactsInput`<sup>Optional</sup> <a name="secondaryArtifactsInput" id="@cdktf/aws-cdk.codebuildProject.CodebuildProject.property.secondaryArtifactsInput"></a>

```typescript
public readonly secondaryArtifactsInput: IResolvable | CodebuildProjectSecondaryArtifacts[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondaryArtifacts">CodebuildProjectSecondaryArtifacts</a>[]

---

##### `secondarySourcesInput`<sup>Optional</sup> <a name="secondarySourcesInput" id="@cdktf/aws-cdk.codebuildProject.CodebuildProject.property.secondarySourcesInput"></a>

```typescript
public readonly secondarySourcesInput: IResolvable | CodebuildProjectSecondarySources[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySources">CodebuildProjectSecondarySources</a>[]

---

##### `secondarySourceVersionInput`<sup>Optional</sup> <a name="secondarySourceVersionInput" id="@cdktf/aws-cdk.codebuildProject.CodebuildProject.property.secondarySourceVersionInput"></a>

```typescript
public readonly secondarySourceVersionInput: IResolvable | CodebuildProjectSecondarySourceVersion[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourceVersion">CodebuildProjectSecondarySourceVersion</a>[]

---

##### `serviceRoleInput`<sup>Optional</sup> <a name="serviceRoleInput" id="@cdktf/aws-cdk.codebuildProject.CodebuildProject.property.serviceRoleInput"></a>

```typescript
public readonly serviceRoleInput: string;
```

- *Type:* string

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="@cdktf/aws-cdk.codebuildProject.CodebuildProject.property.sourceInput"></a>

```typescript
public readonly sourceInput: CodebuildProjectSource;
```

- *Type:* <a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSource">CodebuildProjectSource</a>

---

##### `sourceVersionInput`<sup>Optional</sup> <a name="sourceVersionInput" id="@cdktf/aws-cdk.codebuildProject.CodebuildProject.property.sourceVersionInput"></a>

```typescript
public readonly sourceVersionInput: string;
```

- *Type:* string

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/aws-cdk.codebuildProject.CodebuildProject.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/aws-cdk.codebuildProject.CodebuildProject.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `vpcConfigInput`<sup>Optional</sup> <a name="vpcConfigInput" id="@cdktf/aws-cdk.codebuildProject.CodebuildProject.property.vpcConfigInput"></a>

```typescript
public readonly vpcConfigInput: CodebuildProjectVpcConfig;
```

- *Type:* <a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectVpcConfig">CodebuildProjectVpcConfig</a>

---

##### `badgeEnabled`<sup>Required</sup> <a name="badgeEnabled" id="@cdktf/aws-cdk.codebuildProject.CodebuildProject.property.badgeEnabled"></a>

```typescript
public readonly badgeEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `buildTimeout`<sup>Required</sup> <a name="buildTimeout" id="@cdktf/aws-cdk.codebuildProject.CodebuildProject.property.buildTimeout"></a>

```typescript
public readonly buildTimeout: number;
```

- *Type:* number

---

##### `concurrentBuildLimit`<sup>Required</sup> <a name="concurrentBuildLimit" id="@cdktf/aws-cdk.codebuildProject.CodebuildProject.property.concurrentBuildLimit"></a>

```typescript
public readonly concurrentBuildLimit: number;
```

- *Type:* number

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/aws-cdk.codebuildProject.CodebuildProject.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `encryptionKey`<sup>Required</sup> <a name="encryptionKey" id="@cdktf/aws-cdk.codebuildProject.CodebuildProject.property.encryptionKey"></a>

```typescript
public readonly encryptionKey: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.codebuildProject.CodebuildProject.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/aws-cdk.codebuildProject.CodebuildProject.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `projectVisibility`<sup>Required</sup> <a name="projectVisibility" id="@cdktf/aws-cdk.codebuildProject.CodebuildProject.property.projectVisibility"></a>

```typescript
public readonly projectVisibility: string;
```

- *Type:* string

---

##### `queuedTimeout`<sup>Required</sup> <a name="queuedTimeout" id="@cdktf/aws-cdk.codebuildProject.CodebuildProject.property.queuedTimeout"></a>

```typescript
public readonly queuedTimeout: number;
```

- *Type:* number

---

##### `resourceAccessRole`<sup>Required</sup> <a name="resourceAccessRole" id="@cdktf/aws-cdk.codebuildProject.CodebuildProject.property.resourceAccessRole"></a>

```typescript
public readonly resourceAccessRole: string;
```

- *Type:* string

---

##### `serviceRole`<sup>Required</sup> <a name="serviceRole" id="@cdktf/aws-cdk.codebuildProject.CodebuildProject.property.serviceRole"></a>

```typescript
public readonly serviceRole: string;
```

- *Type:* string

---

##### `sourceVersion`<sup>Required</sup> <a name="sourceVersion" id="@cdktf/aws-cdk.codebuildProject.CodebuildProject.property.sourceVersion"></a>

```typescript
public readonly sourceVersion: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/aws-cdk.codebuildProject.CodebuildProject.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/aws-cdk.codebuildProject.CodebuildProject.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProject.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/aws-cdk.codebuildProject.CodebuildProject.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CodebuildProjectArtifacts <a name="CodebuildProjectArtifacts" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectArtifacts"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectArtifacts.Initializer"></a>

```typescript
import { codebuildProject } from '@cdktf/aws-cdk'

const codebuildProjectArtifacts: codebuildProject.CodebuildProjectArtifacts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectArtifacts.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_project#type CodebuildProject#type}. |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectArtifacts.property.artifactIdentifier">artifactIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_project#artifact_identifier CodebuildProject#artifact_identifier}. |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectArtifacts.property.bucketOwnerAccess">bucketOwnerAccess</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_project#bucket_owner_access CodebuildProject#bucket_owner_access}. |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectArtifacts.property.encryptionDisabled">encryptionDisabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_project#encryption_disabled CodebuildProject#encryption_disabled}. |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectArtifacts.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_project#location CodebuildProject#location}. |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectArtifacts.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_project#name CodebuildProject#name}. |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectArtifacts.property.namespaceType">namespaceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_project#namespace_type CodebuildProject#namespace_type}. |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectArtifacts.property.overrideArtifactName">overrideArtifactName</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_project#override_artifact_name CodebuildProject#override_artifact_name}. |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectArtifacts.property.packaging">packaging</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_project#packaging CodebuildProject#packaging}. |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectArtifacts.property.path">path</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_project#path CodebuildProject#path}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectArtifacts.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_project#type CodebuildProject#type}.

---

##### `artifactIdentifier`<sup>Optional</sup> <a name="artifactIdentifier" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectArtifacts.property.artifactIdentifier"></a>

```typescript
public readonly artifactIdentifier: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_project#artifact_identifier CodebuildProject#artifact_identifier}.

---

##### `bucketOwnerAccess`<sup>Optional</sup> <a name="bucketOwnerAccess" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectArtifacts.property.bucketOwnerAccess"></a>

```typescript
public readonly bucketOwnerAccess: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_project#bucket_owner_access CodebuildProject#bucket_owner_access}.

---

##### `encryptionDisabled`<sup>Optional</sup> <a name="encryptionDisabled" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectArtifacts.property.encryptionDisabled"></a>

```typescript
public readonly encryptionDisabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_project#encryption_disabled CodebuildProject#encryption_disabled}.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectArtifacts.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_project#location CodebuildProject#location}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectArtifacts.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_project#name CodebuildProject#name}.

---

##### `namespaceType`<sup>Optional</sup> <a name="namespaceType" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectArtifacts.property.namespaceType"></a>

```typescript
public readonly namespaceType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_project#namespace_type CodebuildProject#namespace_type}.

---

##### `overrideArtifactName`<sup>Optional</sup> <a name="overrideArtifactName" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectArtifacts.property.overrideArtifactName"></a>

```typescript
public readonly overrideArtifactName: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_project#override_artifact_name CodebuildProject#override_artifact_name}.

---

##### `packaging`<sup>Optional</sup> <a name="packaging" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectArtifacts.property.packaging"></a>

```typescript
public readonly packaging: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_project#packaging CodebuildProject#packaging}.

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectArtifacts.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_project#path CodebuildProject#path}.

---

### CodebuildProjectBuildBatchConfig <a name="CodebuildProjectBuildBatchConfig" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectBuildBatchConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectBuildBatchConfig.Initializer"></a>

```typescript
import { codebuildProject } from '@cdktf/aws-cdk'

const codebuildProjectBuildBatchConfig: codebuildProject.CodebuildProjectBuildBatchConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectBuildBatchConfig.property.serviceRole">serviceRole</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_project#service_role CodebuildProject#service_role}. |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectBuildBatchConfig.property.combineArtifacts">combineArtifacts</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_project#combine_artifacts CodebuildProject#combine_artifacts}. |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectBuildBatchConfig.property.restrictions">restrictions</a></code> | <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectBuildBatchConfigRestrictions">CodebuildProjectBuildBatchConfigRestrictions</a></code> | restrictions block. |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectBuildBatchConfig.property.timeoutInMins">timeoutInMins</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_project#timeout_in_mins CodebuildProject#timeout_in_mins}. |

---

##### `serviceRole`<sup>Required</sup> <a name="serviceRole" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectBuildBatchConfig.property.serviceRole"></a>

```typescript
public readonly serviceRole: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_project#service_role CodebuildProject#service_role}.

---

##### `combineArtifacts`<sup>Optional</sup> <a name="combineArtifacts" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectBuildBatchConfig.property.combineArtifacts"></a>

```typescript
public readonly combineArtifacts: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_project#combine_artifacts CodebuildProject#combine_artifacts}.

---

##### `restrictions`<sup>Optional</sup> <a name="restrictions" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectBuildBatchConfig.property.restrictions"></a>

```typescript
public readonly restrictions: CodebuildProjectBuildBatchConfigRestrictions;
```

- *Type:* <a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectBuildBatchConfigRestrictions">CodebuildProjectBuildBatchConfigRestrictions</a>

restrictions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_project#restrictions CodebuildProject#restrictions}

---

##### `timeoutInMins`<sup>Optional</sup> <a name="timeoutInMins" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectBuildBatchConfig.property.timeoutInMins"></a>

```typescript
public readonly timeoutInMins: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_project#timeout_in_mins CodebuildProject#timeout_in_mins}.

---

### CodebuildProjectBuildBatchConfigRestrictions <a name="CodebuildProjectBuildBatchConfigRestrictions" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectBuildBatchConfigRestrictions"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectBuildBatchConfigRestrictions.Initializer"></a>

```typescript
import { codebuildProject } from '@cdktf/aws-cdk'

const codebuildProjectBuildBatchConfigRestrictions: codebuildProject.CodebuildProjectBuildBatchConfigRestrictions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectBuildBatchConfigRestrictions.property.computeTypesAllowed">computeTypesAllowed</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_project#compute_types_allowed CodebuildProject#compute_types_allowed}. |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectBuildBatchConfigRestrictions.property.maximumBuildsAllowed">maximumBuildsAllowed</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_project#maximum_builds_allowed CodebuildProject#maximum_builds_allowed}. |

---

##### `computeTypesAllowed`<sup>Optional</sup> <a name="computeTypesAllowed" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectBuildBatchConfigRestrictions.property.computeTypesAllowed"></a>

```typescript
public readonly computeTypesAllowed: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_project#compute_types_allowed CodebuildProject#compute_types_allowed}.

---

##### `maximumBuildsAllowed`<sup>Optional</sup> <a name="maximumBuildsAllowed" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectBuildBatchConfigRestrictions.property.maximumBuildsAllowed"></a>

```typescript
public readonly maximumBuildsAllowed: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_project#maximum_builds_allowed CodebuildProject#maximum_builds_allowed}.

---

### CodebuildProjectCache <a name="CodebuildProjectCache" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectCache"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectCache.Initializer"></a>

```typescript
import { codebuildProject } from '@cdktf/aws-cdk'

const codebuildProjectCache: codebuildProject.CodebuildProjectCache = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectCache.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_project#location CodebuildProject#location}. |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectCache.property.modes">modes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_project#modes CodebuildProject#modes}. |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectCache.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_project#type CodebuildProject#type}. |

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectCache.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_project#location CodebuildProject#location}.

---

##### `modes`<sup>Optional</sup> <a name="modes" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectCache.property.modes"></a>

```typescript
public readonly modes: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_project#modes CodebuildProject#modes}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectCache.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_project#type CodebuildProject#type}.

---

### CodebuildProjectConfig <a name="CodebuildProjectConfig" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectConfig.Initializer"></a>

```typescript
import { codebuildProject } from '@cdktf/aws-cdk'

const codebuildProjectConfig: codebuildProject.CodebuildProjectConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectConfig.property.artifacts">artifacts</a></code> | <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectArtifacts">CodebuildProjectArtifacts</a></code> | artifacts block. |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectConfig.property.environment">environment</a></code> | <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironment">CodebuildProjectEnvironment</a></code> | environment block. |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_project#name CodebuildProject#name}. |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectConfig.property.serviceRole">serviceRole</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_project#service_role CodebuildProject#service_role}. |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectConfig.property.source">source</a></code> | <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSource">CodebuildProjectSource</a></code> | source block. |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectConfig.property.badgeEnabled">badgeEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_project#badge_enabled CodebuildProject#badge_enabled}. |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectConfig.property.buildBatchConfig">buildBatchConfig</a></code> | <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectBuildBatchConfig">CodebuildProjectBuildBatchConfig</a></code> | build_batch_config block. |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectConfig.property.buildTimeout">buildTimeout</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_project#build_timeout CodebuildProject#build_timeout}. |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectConfig.property.cache">cache</a></code> | <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectCache">CodebuildProjectCache</a></code> | cache block. |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectConfig.property.concurrentBuildLimit">concurrentBuildLimit</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_project#concurrent_build_limit CodebuildProject#concurrent_build_limit}. |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_project#description CodebuildProject#description}. |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectConfig.property.encryptionKey">encryptionKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_project#encryption_key CodebuildProject#encryption_key}. |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectConfig.property.fileSystemLocations">fileSystemLocations</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectFileSystemLocations">CodebuildProjectFileSystemLocations</a>[]</code> | file_system_locations block. |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_project#id CodebuildProject#id}. |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectConfig.property.logsConfig">logsConfig</a></code> | <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectLogsConfig">CodebuildProjectLogsConfig</a></code> | logs_config block. |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectConfig.property.projectVisibility">projectVisibility</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_project#project_visibility CodebuildProject#project_visibility}. |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectConfig.property.queuedTimeout">queuedTimeout</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_project#queued_timeout CodebuildProject#queued_timeout}. |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectConfig.property.resourceAccessRole">resourceAccessRole</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_project#resource_access_role CodebuildProject#resource_access_role}. |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectConfig.property.secondaryArtifacts">secondaryArtifacts</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondaryArtifacts">CodebuildProjectSecondaryArtifacts</a>[]</code> | secondary_artifacts block. |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectConfig.property.secondarySources">secondarySources</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySources">CodebuildProjectSecondarySources</a>[]</code> | secondary_sources block. |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectConfig.property.secondarySourceVersion">secondarySourceVersion</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourceVersion">CodebuildProjectSecondarySourceVersion</a>[]</code> | secondary_source_version block. |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectConfig.property.sourceVersion">sourceVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_project#source_version CodebuildProject#source_version}. |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_project#tags CodebuildProject#tags}. |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_project#tags_all CodebuildProject#tags_all}. |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectConfig.property.vpcConfig">vpcConfig</a></code> | <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectVpcConfig">CodebuildProjectVpcConfig</a></code> | vpc_config block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `artifacts`<sup>Required</sup> <a name="artifacts" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectConfig.property.artifacts"></a>

```typescript
public readonly artifacts: CodebuildProjectArtifacts;
```

- *Type:* <a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectArtifacts">CodebuildProjectArtifacts</a>

artifacts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_project#artifacts CodebuildProject#artifacts}

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectConfig.property.environment"></a>

```typescript
public readonly environment: CodebuildProjectEnvironment;
```

- *Type:* <a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironment">CodebuildProjectEnvironment</a>

environment block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_project#environment CodebuildProject#environment}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_project#name CodebuildProject#name}.

---

##### `serviceRole`<sup>Required</sup> <a name="serviceRole" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectConfig.property.serviceRole"></a>

```typescript
public readonly serviceRole: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_project#service_role CodebuildProject#service_role}.

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectConfig.property.source"></a>

```typescript
public readonly source: CodebuildProjectSource;
```

- *Type:* <a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSource">CodebuildProjectSource</a>

source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_project#source CodebuildProject#source}

---

##### `badgeEnabled`<sup>Optional</sup> <a name="badgeEnabled" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectConfig.property.badgeEnabled"></a>

```typescript
public readonly badgeEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_project#badge_enabled CodebuildProject#badge_enabled}.

---

##### `buildBatchConfig`<sup>Optional</sup> <a name="buildBatchConfig" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectConfig.property.buildBatchConfig"></a>

```typescript
public readonly buildBatchConfig: CodebuildProjectBuildBatchConfig;
```

- *Type:* <a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectBuildBatchConfig">CodebuildProjectBuildBatchConfig</a>

build_batch_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_project#build_batch_config CodebuildProject#build_batch_config}

---

##### `buildTimeout`<sup>Optional</sup> <a name="buildTimeout" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectConfig.property.buildTimeout"></a>

```typescript
public readonly buildTimeout: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_project#build_timeout CodebuildProject#build_timeout}.

---

##### `cache`<sup>Optional</sup> <a name="cache" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectConfig.property.cache"></a>

```typescript
public readonly cache: CodebuildProjectCache;
```

- *Type:* <a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectCache">CodebuildProjectCache</a>

cache block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_project#cache CodebuildProject#cache}

---

##### `concurrentBuildLimit`<sup>Optional</sup> <a name="concurrentBuildLimit" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectConfig.property.concurrentBuildLimit"></a>

```typescript
public readonly concurrentBuildLimit: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_project#concurrent_build_limit CodebuildProject#concurrent_build_limit}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_project#description CodebuildProject#description}.

---

##### `encryptionKey`<sup>Optional</sup> <a name="encryptionKey" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectConfig.property.encryptionKey"></a>

```typescript
public readonly encryptionKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_project#encryption_key CodebuildProject#encryption_key}.

---

##### `fileSystemLocations`<sup>Optional</sup> <a name="fileSystemLocations" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectConfig.property.fileSystemLocations"></a>

```typescript
public readonly fileSystemLocations: IResolvable | CodebuildProjectFileSystemLocations[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectFileSystemLocations">CodebuildProjectFileSystemLocations</a>[]

file_system_locations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_project#file_system_locations CodebuildProject#file_system_locations}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_project#id CodebuildProject#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `logsConfig`<sup>Optional</sup> <a name="logsConfig" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectConfig.property.logsConfig"></a>

```typescript
public readonly logsConfig: CodebuildProjectLogsConfig;
```

- *Type:* <a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectLogsConfig">CodebuildProjectLogsConfig</a>

logs_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_project#logs_config CodebuildProject#logs_config}

---

##### `projectVisibility`<sup>Optional</sup> <a name="projectVisibility" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectConfig.property.projectVisibility"></a>

```typescript
public readonly projectVisibility: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_project#project_visibility CodebuildProject#project_visibility}.

---

##### `queuedTimeout`<sup>Optional</sup> <a name="queuedTimeout" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectConfig.property.queuedTimeout"></a>

```typescript
public readonly queuedTimeout: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_project#queued_timeout CodebuildProject#queued_timeout}.

---

##### `resourceAccessRole`<sup>Optional</sup> <a name="resourceAccessRole" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectConfig.property.resourceAccessRole"></a>

```typescript
public readonly resourceAccessRole: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_project#resource_access_role CodebuildProject#resource_access_role}.

---

##### `secondaryArtifacts`<sup>Optional</sup> <a name="secondaryArtifacts" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectConfig.property.secondaryArtifacts"></a>

```typescript
public readonly secondaryArtifacts: IResolvable | CodebuildProjectSecondaryArtifacts[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondaryArtifacts">CodebuildProjectSecondaryArtifacts</a>[]

secondary_artifacts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_project#secondary_artifacts CodebuildProject#secondary_artifacts}

---

##### `secondarySources`<sup>Optional</sup> <a name="secondarySources" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectConfig.property.secondarySources"></a>

```typescript
public readonly secondarySources: IResolvable | CodebuildProjectSecondarySources[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySources">CodebuildProjectSecondarySources</a>[]

secondary_sources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_project#secondary_sources CodebuildProject#secondary_sources}

---

##### `secondarySourceVersion`<sup>Optional</sup> <a name="secondarySourceVersion" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectConfig.property.secondarySourceVersion"></a>

```typescript
public readonly secondarySourceVersion: IResolvable | CodebuildProjectSecondarySourceVersion[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourceVersion">CodebuildProjectSecondarySourceVersion</a>[]

secondary_source_version block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_project#secondary_source_version CodebuildProject#secondary_source_version}

---

##### `sourceVersion`<sup>Optional</sup> <a name="sourceVersion" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectConfig.property.sourceVersion"></a>

```typescript
public readonly sourceVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_project#source_version CodebuildProject#source_version}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_project#tags CodebuildProject#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_project#tags_all CodebuildProject#tags_all}.

---

##### `vpcConfig`<sup>Optional</sup> <a name="vpcConfig" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectConfig.property.vpcConfig"></a>

```typescript
public readonly vpcConfig: CodebuildProjectVpcConfig;
```

- *Type:* <a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectVpcConfig">CodebuildProjectVpcConfig</a>

vpc_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_project#vpc_config CodebuildProject#vpc_config}

---

### CodebuildProjectEnvironment <a name="CodebuildProjectEnvironment" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironment"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironment.Initializer"></a>

```typescript
import { codebuildProject } from '@cdktf/aws-cdk'

const codebuildProjectEnvironment: codebuildProject.CodebuildProjectEnvironment = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironment.property.computeType">computeType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_project#compute_type CodebuildProject#compute_type}. |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironment.property.image">image</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_project#image CodebuildProject#image}. |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironment.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_project#type CodebuildProject#type}. |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironment.property.certificate">certificate</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_project#certificate CodebuildProject#certificate}. |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironment.property.environmentVariable">environmentVariable</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariable">CodebuildProjectEnvironmentEnvironmentVariable</a>[]</code> | environment_variable block. |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironment.property.imagePullCredentialsType">imagePullCredentialsType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_project#image_pull_credentials_type CodebuildProject#image_pull_credentials_type}. |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironment.property.privilegedMode">privilegedMode</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_project#privileged_mode CodebuildProject#privileged_mode}. |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironment.property.registryCredential">registryCredential</a></code> | <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentRegistryCredential">CodebuildProjectEnvironmentRegistryCredential</a></code> | registry_credential block. |

---

##### `computeType`<sup>Required</sup> <a name="computeType" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironment.property.computeType"></a>

```typescript
public readonly computeType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_project#compute_type CodebuildProject#compute_type}.

---

##### `image`<sup>Required</sup> <a name="image" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironment.property.image"></a>

```typescript
public readonly image: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_project#image CodebuildProject#image}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironment.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_project#type CodebuildProject#type}.

---

##### `certificate`<sup>Optional</sup> <a name="certificate" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironment.property.certificate"></a>

```typescript
public readonly certificate: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_project#certificate CodebuildProject#certificate}.

---

##### `environmentVariable`<sup>Optional</sup> <a name="environmentVariable" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironment.property.environmentVariable"></a>

```typescript
public readonly environmentVariable: IResolvable | CodebuildProjectEnvironmentEnvironmentVariable[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariable">CodebuildProjectEnvironmentEnvironmentVariable</a>[]

environment_variable block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_project#environment_variable CodebuildProject#environment_variable}

---

##### `imagePullCredentialsType`<sup>Optional</sup> <a name="imagePullCredentialsType" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironment.property.imagePullCredentialsType"></a>

```typescript
public readonly imagePullCredentialsType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_project#image_pull_credentials_type CodebuildProject#image_pull_credentials_type}.

---

##### `privilegedMode`<sup>Optional</sup> <a name="privilegedMode" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironment.property.privilegedMode"></a>

```typescript
public readonly privilegedMode: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_project#privileged_mode CodebuildProject#privileged_mode}.

---

##### `registryCredential`<sup>Optional</sup> <a name="registryCredential" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironment.property.registryCredential"></a>

```typescript
public readonly registryCredential: CodebuildProjectEnvironmentRegistryCredential;
```

- *Type:* <a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentRegistryCredential">CodebuildProjectEnvironmentRegistryCredential</a>

registry_credential block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_project#registry_credential CodebuildProject#registry_credential}

---

### CodebuildProjectEnvironmentEnvironmentVariable <a name="CodebuildProjectEnvironmentEnvironmentVariable" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariable"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariable.Initializer"></a>

```typescript
import { codebuildProject } from '@cdktf/aws-cdk'

const codebuildProjectEnvironmentEnvironmentVariable: codebuildProject.CodebuildProjectEnvironmentEnvironmentVariable = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariable.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_project#name CodebuildProject#name}. |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariable.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_project#value CodebuildProject#value}. |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariable.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_project#type CodebuildProject#type}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariable.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_project#name CodebuildProject#name}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariable.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_project#value CodebuildProject#value}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariable.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_project#type CodebuildProject#type}.

---

### CodebuildProjectEnvironmentRegistryCredential <a name="CodebuildProjectEnvironmentRegistryCredential" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentRegistryCredential"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentRegistryCredential.Initializer"></a>

```typescript
import { codebuildProject } from '@cdktf/aws-cdk'

const codebuildProjectEnvironmentRegistryCredential: codebuildProject.CodebuildProjectEnvironmentRegistryCredential = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentRegistryCredential.property.credential">credential</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_project#credential CodebuildProject#credential}. |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentRegistryCredential.property.credentialProvider">credentialProvider</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_project#credential_provider CodebuildProject#credential_provider}. |

---

##### `credential`<sup>Required</sup> <a name="credential" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentRegistryCredential.property.credential"></a>

```typescript
public readonly credential: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_project#credential CodebuildProject#credential}.

---

##### `credentialProvider`<sup>Required</sup> <a name="credentialProvider" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentRegistryCredential.property.credentialProvider"></a>

```typescript
public readonly credentialProvider: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_project#credential_provider CodebuildProject#credential_provider}.

---

### CodebuildProjectFileSystemLocations <a name="CodebuildProjectFileSystemLocations" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectFileSystemLocations"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectFileSystemLocations.Initializer"></a>

```typescript
import { codebuildProject } from '@cdktf/aws-cdk'

const codebuildProjectFileSystemLocations: codebuildProject.CodebuildProjectFileSystemLocations = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectFileSystemLocations.property.identifier">identifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_project#identifier CodebuildProject#identifier}. |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectFileSystemLocations.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_project#location CodebuildProject#location}. |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectFileSystemLocations.property.mountOptions">mountOptions</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_project#mount_options CodebuildProject#mount_options}. |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectFileSystemLocations.property.mountPoint">mountPoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_project#mount_point CodebuildProject#mount_point}. |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectFileSystemLocations.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_project#type CodebuildProject#type}. |

---

##### `identifier`<sup>Optional</sup> <a name="identifier" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectFileSystemLocations.property.identifier"></a>

```typescript
public readonly identifier: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_project#identifier CodebuildProject#identifier}.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectFileSystemLocations.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_project#location CodebuildProject#location}.

---

##### `mountOptions`<sup>Optional</sup> <a name="mountOptions" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectFileSystemLocations.property.mountOptions"></a>

```typescript
public readonly mountOptions: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_project#mount_options CodebuildProject#mount_options}.

---

##### `mountPoint`<sup>Optional</sup> <a name="mountPoint" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectFileSystemLocations.property.mountPoint"></a>

```typescript
public readonly mountPoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_project#mount_point CodebuildProject#mount_point}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectFileSystemLocations.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_project#type CodebuildProject#type}.

---

### CodebuildProjectLogsConfig <a name="CodebuildProjectLogsConfig" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectLogsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectLogsConfig.Initializer"></a>

```typescript
import { codebuildProject } from '@cdktf/aws-cdk'

const codebuildProjectLogsConfig: codebuildProject.CodebuildProjectLogsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectLogsConfig.property.cloudwatchLogs">cloudwatchLogs</a></code> | <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogs">CodebuildProjectLogsConfigCloudwatchLogs</a></code> | cloudwatch_logs block. |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectLogsConfig.property.s3Logs">s3Logs</a></code> | <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectLogsConfigS3Logs">CodebuildProjectLogsConfigS3Logs</a></code> | s3_logs block. |

---

##### `cloudwatchLogs`<sup>Optional</sup> <a name="cloudwatchLogs" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectLogsConfig.property.cloudwatchLogs"></a>

```typescript
public readonly cloudwatchLogs: CodebuildProjectLogsConfigCloudwatchLogs;
```

- *Type:* <a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogs">CodebuildProjectLogsConfigCloudwatchLogs</a>

cloudwatch_logs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_project#cloudwatch_logs CodebuildProject#cloudwatch_logs}

---

##### `s3Logs`<sup>Optional</sup> <a name="s3Logs" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectLogsConfig.property.s3Logs"></a>

```typescript
public readonly s3Logs: CodebuildProjectLogsConfigS3Logs;
```

- *Type:* <a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectLogsConfigS3Logs">CodebuildProjectLogsConfigS3Logs</a>

s3_logs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_project#s3_logs CodebuildProject#s3_logs}

---

### CodebuildProjectLogsConfigCloudwatchLogs <a name="CodebuildProjectLogsConfigCloudwatchLogs" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogs"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogs.Initializer"></a>

```typescript
import { codebuildProject } from '@cdktf/aws-cdk'

const codebuildProjectLogsConfigCloudwatchLogs: codebuildProject.CodebuildProjectLogsConfigCloudwatchLogs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogs.property.groupName">groupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_project#group_name CodebuildProject#group_name}. |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogs.property.status">status</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_project#status CodebuildProject#status}. |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogs.property.streamName">streamName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_project#stream_name CodebuildProject#stream_name}. |

---

##### `groupName`<sup>Optional</sup> <a name="groupName" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogs.property.groupName"></a>

```typescript
public readonly groupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_project#group_name CodebuildProject#group_name}.

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogs.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_project#status CodebuildProject#status}.

---

##### `streamName`<sup>Optional</sup> <a name="streamName" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogs.property.streamName"></a>

```typescript
public readonly streamName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_project#stream_name CodebuildProject#stream_name}.

---

### CodebuildProjectLogsConfigS3Logs <a name="CodebuildProjectLogsConfigS3Logs" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectLogsConfigS3Logs"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectLogsConfigS3Logs.Initializer"></a>

```typescript
import { codebuildProject } from '@cdktf/aws-cdk'

const codebuildProjectLogsConfigS3Logs: codebuildProject.CodebuildProjectLogsConfigS3Logs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectLogsConfigS3Logs.property.bucketOwnerAccess">bucketOwnerAccess</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_project#bucket_owner_access CodebuildProject#bucket_owner_access}. |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectLogsConfigS3Logs.property.encryptionDisabled">encryptionDisabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_project#encryption_disabled CodebuildProject#encryption_disabled}. |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectLogsConfigS3Logs.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_project#location CodebuildProject#location}. |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectLogsConfigS3Logs.property.status">status</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_project#status CodebuildProject#status}. |

---

##### `bucketOwnerAccess`<sup>Optional</sup> <a name="bucketOwnerAccess" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectLogsConfigS3Logs.property.bucketOwnerAccess"></a>

```typescript
public readonly bucketOwnerAccess: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_project#bucket_owner_access CodebuildProject#bucket_owner_access}.

---

##### `encryptionDisabled`<sup>Optional</sup> <a name="encryptionDisabled" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectLogsConfigS3Logs.property.encryptionDisabled"></a>

```typescript
public readonly encryptionDisabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_project#encryption_disabled CodebuildProject#encryption_disabled}.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectLogsConfigS3Logs.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_project#location CodebuildProject#location}.

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectLogsConfigS3Logs.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_project#status CodebuildProject#status}.

---

### CodebuildProjectSecondaryArtifacts <a name="CodebuildProjectSecondaryArtifacts" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondaryArtifacts"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondaryArtifacts.Initializer"></a>

```typescript
import { codebuildProject } from '@cdktf/aws-cdk'

const codebuildProjectSecondaryArtifacts: codebuildProject.CodebuildProjectSecondaryArtifacts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondaryArtifacts.property.artifactIdentifier">artifactIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_project#artifact_identifier CodebuildProject#artifact_identifier}. |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondaryArtifacts.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_project#type CodebuildProject#type}. |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondaryArtifacts.property.bucketOwnerAccess">bucketOwnerAccess</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_project#bucket_owner_access CodebuildProject#bucket_owner_access}. |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondaryArtifacts.property.encryptionDisabled">encryptionDisabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_project#encryption_disabled CodebuildProject#encryption_disabled}. |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondaryArtifacts.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_project#location CodebuildProject#location}. |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondaryArtifacts.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_project#name CodebuildProject#name}. |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondaryArtifacts.property.namespaceType">namespaceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_project#namespace_type CodebuildProject#namespace_type}. |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondaryArtifacts.property.overrideArtifactName">overrideArtifactName</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_project#override_artifact_name CodebuildProject#override_artifact_name}. |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondaryArtifacts.property.packaging">packaging</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_project#packaging CodebuildProject#packaging}. |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondaryArtifacts.property.path">path</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_project#path CodebuildProject#path}. |

---

##### `artifactIdentifier`<sup>Required</sup> <a name="artifactIdentifier" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondaryArtifacts.property.artifactIdentifier"></a>

```typescript
public readonly artifactIdentifier: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_project#artifact_identifier CodebuildProject#artifact_identifier}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondaryArtifacts.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_project#type CodebuildProject#type}.

---

##### `bucketOwnerAccess`<sup>Optional</sup> <a name="bucketOwnerAccess" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondaryArtifacts.property.bucketOwnerAccess"></a>

```typescript
public readonly bucketOwnerAccess: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_project#bucket_owner_access CodebuildProject#bucket_owner_access}.

---

##### `encryptionDisabled`<sup>Optional</sup> <a name="encryptionDisabled" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondaryArtifacts.property.encryptionDisabled"></a>

```typescript
public readonly encryptionDisabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_project#encryption_disabled CodebuildProject#encryption_disabled}.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondaryArtifacts.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_project#location CodebuildProject#location}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondaryArtifacts.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_project#name CodebuildProject#name}.

---

##### `namespaceType`<sup>Optional</sup> <a name="namespaceType" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondaryArtifacts.property.namespaceType"></a>

```typescript
public readonly namespaceType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_project#namespace_type CodebuildProject#namespace_type}.

---

##### `overrideArtifactName`<sup>Optional</sup> <a name="overrideArtifactName" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondaryArtifacts.property.overrideArtifactName"></a>

```typescript
public readonly overrideArtifactName: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_project#override_artifact_name CodebuildProject#override_artifact_name}.

---

##### `packaging`<sup>Optional</sup> <a name="packaging" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondaryArtifacts.property.packaging"></a>

```typescript
public readonly packaging: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_project#packaging CodebuildProject#packaging}.

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondaryArtifacts.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_project#path CodebuildProject#path}.

---

### CodebuildProjectSecondarySources <a name="CodebuildProjectSecondarySources" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySources"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySources.Initializer"></a>

```typescript
import { codebuildProject } from '@cdktf/aws-cdk'

const codebuildProjectSecondarySources: codebuildProject.CodebuildProjectSecondarySources = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySources.property.sourceIdentifier">sourceIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_project#source_identifier CodebuildProject#source_identifier}. |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySources.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_project#type CodebuildProject#type}. |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySources.property.auth">auth</a></code> | <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesAuth">CodebuildProjectSecondarySourcesAuth</a></code> | auth block. |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySources.property.buildspec">buildspec</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_project#buildspec CodebuildProject#buildspec}. |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySources.property.buildStatusConfig">buildStatusConfig</a></code> | <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfig">CodebuildProjectSecondarySourcesBuildStatusConfig</a></code> | build_status_config block. |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySources.property.gitCloneDepth">gitCloneDepth</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_project#git_clone_depth CodebuildProject#git_clone_depth}. |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySources.property.gitSubmodulesConfig">gitSubmodulesConfig</a></code> | <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesGitSubmodulesConfig">CodebuildProjectSecondarySourcesGitSubmodulesConfig</a></code> | git_submodules_config block. |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySources.property.insecureSsl">insecureSsl</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_project#insecure_ssl CodebuildProject#insecure_ssl}. |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySources.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_project#location CodebuildProject#location}. |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySources.property.reportBuildStatus">reportBuildStatus</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_project#report_build_status CodebuildProject#report_build_status}. |

---

##### `sourceIdentifier`<sup>Required</sup> <a name="sourceIdentifier" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySources.property.sourceIdentifier"></a>

```typescript
public readonly sourceIdentifier: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_project#source_identifier CodebuildProject#source_identifier}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySources.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_project#type CodebuildProject#type}.

---

##### `auth`<sup>Optional</sup> <a name="auth" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySources.property.auth"></a>

```typescript
public readonly auth: CodebuildProjectSecondarySourcesAuth;
```

- *Type:* <a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesAuth">CodebuildProjectSecondarySourcesAuth</a>

auth block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_project#auth CodebuildProject#auth}

---

##### `buildspec`<sup>Optional</sup> <a name="buildspec" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySources.property.buildspec"></a>

```typescript
public readonly buildspec: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_project#buildspec CodebuildProject#buildspec}.

---

##### `buildStatusConfig`<sup>Optional</sup> <a name="buildStatusConfig" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySources.property.buildStatusConfig"></a>

```typescript
public readonly buildStatusConfig: CodebuildProjectSecondarySourcesBuildStatusConfig;
```

- *Type:* <a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfig">CodebuildProjectSecondarySourcesBuildStatusConfig</a>

build_status_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_project#build_status_config CodebuildProject#build_status_config}

---

##### `gitCloneDepth`<sup>Optional</sup> <a name="gitCloneDepth" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySources.property.gitCloneDepth"></a>

```typescript
public readonly gitCloneDepth: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_project#git_clone_depth CodebuildProject#git_clone_depth}.

---

##### `gitSubmodulesConfig`<sup>Optional</sup> <a name="gitSubmodulesConfig" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySources.property.gitSubmodulesConfig"></a>

```typescript
public readonly gitSubmodulesConfig: CodebuildProjectSecondarySourcesGitSubmodulesConfig;
```

- *Type:* <a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesGitSubmodulesConfig">CodebuildProjectSecondarySourcesGitSubmodulesConfig</a>

git_submodules_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_project#git_submodules_config CodebuildProject#git_submodules_config}

---

##### `insecureSsl`<sup>Optional</sup> <a name="insecureSsl" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySources.property.insecureSsl"></a>

```typescript
public readonly insecureSsl: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_project#insecure_ssl CodebuildProject#insecure_ssl}.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySources.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_project#location CodebuildProject#location}.

---

##### `reportBuildStatus`<sup>Optional</sup> <a name="reportBuildStatus" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySources.property.reportBuildStatus"></a>

```typescript
public readonly reportBuildStatus: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_project#report_build_status CodebuildProject#report_build_status}.

---

### CodebuildProjectSecondarySourcesAuth <a name="CodebuildProjectSecondarySourcesAuth" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesAuth"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesAuth.Initializer"></a>

```typescript
import { codebuildProject } from '@cdktf/aws-cdk'

const codebuildProjectSecondarySourcesAuth: codebuildProject.CodebuildProjectSecondarySourcesAuth = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesAuth.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_project#type CodebuildProject#type}. |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesAuth.property.resource">resource</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_project#resource CodebuildProject#resource}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesAuth.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_project#type CodebuildProject#type}.

---

##### `resource`<sup>Optional</sup> <a name="resource" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesAuth.property.resource"></a>

```typescript
public readonly resource: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_project#resource CodebuildProject#resource}.

---

### CodebuildProjectSecondarySourcesBuildStatusConfig <a name="CodebuildProjectSecondarySourcesBuildStatusConfig" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfig.Initializer"></a>

```typescript
import { codebuildProject } from '@cdktf/aws-cdk'

const codebuildProjectSecondarySourcesBuildStatusConfig: codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfig.property.context">context</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_project#context CodebuildProject#context}. |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfig.property.targetUrl">targetUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_project#target_url CodebuildProject#target_url}. |

---

##### `context`<sup>Optional</sup> <a name="context" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfig.property.context"></a>

```typescript
public readonly context: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_project#context CodebuildProject#context}.

---

##### `targetUrl`<sup>Optional</sup> <a name="targetUrl" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfig.property.targetUrl"></a>

```typescript
public readonly targetUrl: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_project#target_url CodebuildProject#target_url}.

---

### CodebuildProjectSecondarySourcesGitSubmodulesConfig <a name="CodebuildProjectSecondarySourcesGitSubmodulesConfig" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesGitSubmodulesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesGitSubmodulesConfig.Initializer"></a>

```typescript
import { codebuildProject } from '@cdktf/aws-cdk'

const codebuildProjectSecondarySourcesGitSubmodulesConfig: codebuildProject.CodebuildProjectSecondarySourcesGitSubmodulesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesGitSubmodulesConfig.property.fetchSubmodules">fetchSubmodules</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_project#fetch_submodules CodebuildProject#fetch_submodules}. |

---

##### `fetchSubmodules`<sup>Required</sup> <a name="fetchSubmodules" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesGitSubmodulesConfig.property.fetchSubmodules"></a>

```typescript
public readonly fetchSubmodules: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_project#fetch_submodules CodebuildProject#fetch_submodules}.

---

### CodebuildProjectSecondarySourceVersion <a name="CodebuildProjectSecondarySourceVersion" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourceVersion"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourceVersion.Initializer"></a>

```typescript
import { codebuildProject } from '@cdktf/aws-cdk'

const codebuildProjectSecondarySourceVersion: codebuildProject.CodebuildProjectSecondarySourceVersion = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourceVersion.property.sourceIdentifier">sourceIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_project#source_identifier CodebuildProject#source_identifier}. |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourceVersion.property.sourceVersion">sourceVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_project#source_version CodebuildProject#source_version}. |

---

##### `sourceIdentifier`<sup>Required</sup> <a name="sourceIdentifier" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourceVersion.property.sourceIdentifier"></a>

```typescript
public readonly sourceIdentifier: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_project#source_identifier CodebuildProject#source_identifier}.

---

##### `sourceVersion`<sup>Required</sup> <a name="sourceVersion" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourceVersion.property.sourceVersion"></a>

```typescript
public readonly sourceVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_project#source_version CodebuildProject#source_version}.

---

### CodebuildProjectSource <a name="CodebuildProjectSource" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSource.Initializer"></a>

```typescript
import { codebuildProject } from '@cdktf/aws-cdk'

const codebuildProjectSource: codebuildProject.CodebuildProjectSource = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSource.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_project#type CodebuildProject#type}. |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSource.property.auth">auth</a></code> | <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceAuth">CodebuildProjectSourceAuth</a></code> | auth block. |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSource.property.buildspec">buildspec</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_project#buildspec CodebuildProject#buildspec}. |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSource.property.buildStatusConfig">buildStatusConfig</a></code> | <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceBuildStatusConfig">CodebuildProjectSourceBuildStatusConfig</a></code> | build_status_config block. |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSource.property.gitCloneDepth">gitCloneDepth</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_project#git_clone_depth CodebuildProject#git_clone_depth}. |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSource.property.gitSubmodulesConfig">gitSubmodulesConfig</a></code> | <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceGitSubmodulesConfig">CodebuildProjectSourceGitSubmodulesConfig</a></code> | git_submodules_config block. |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSource.property.insecureSsl">insecureSsl</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_project#insecure_ssl CodebuildProject#insecure_ssl}. |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSource.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_project#location CodebuildProject#location}. |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSource.property.reportBuildStatus">reportBuildStatus</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_project#report_build_status CodebuildProject#report_build_status}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSource.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_project#type CodebuildProject#type}.

---

##### `auth`<sup>Optional</sup> <a name="auth" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSource.property.auth"></a>

```typescript
public readonly auth: CodebuildProjectSourceAuth;
```

- *Type:* <a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceAuth">CodebuildProjectSourceAuth</a>

auth block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_project#auth CodebuildProject#auth}

---

##### `buildspec`<sup>Optional</sup> <a name="buildspec" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSource.property.buildspec"></a>

```typescript
public readonly buildspec: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_project#buildspec CodebuildProject#buildspec}.

---

##### `buildStatusConfig`<sup>Optional</sup> <a name="buildStatusConfig" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSource.property.buildStatusConfig"></a>

```typescript
public readonly buildStatusConfig: CodebuildProjectSourceBuildStatusConfig;
```

- *Type:* <a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceBuildStatusConfig">CodebuildProjectSourceBuildStatusConfig</a>

build_status_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_project#build_status_config CodebuildProject#build_status_config}

---

##### `gitCloneDepth`<sup>Optional</sup> <a name="gitCloneDepth" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSource.property.gitCloneDepth"></a>

```typescript
public readonly gitCloneDepth: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_project#git_clone_depth CodebuildProject#git_clone_depth}.

---

##### `gitSubmodulesConfig`<sup>Optional</sup> <a name="gitSubmodulesConfig" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSource.property.gitSubmodulesConfig"></a>

```typescript
public readonly gitSubmodulesConfig: CodebuildProjectSourceGitSubmodulesConfig;
```

- *Type:* <a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceGitSubmodulesConfig">CodebuildProjectSourceGitSubmodulesConfig</a>

git_submodules_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_project#git_submodules_config CodebuildProject#git_submodules_config}

---

##### `insecureSsl`<sup>Optional</sup> <a name="insecureSsl" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSource.property.insecureSsl"></a>

```typescript
public readonly insecureSsl: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_project#insecure_ssl CodebuildProject#insecure_ssl}.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSource.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_project#location CodebuildProject#location}.

---

##### `reportBuildStatus`<sup>Optional</sup> <a name="reportBuildStatus" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSource.property.reportBuildStatus"></a>

```typescript
public readonly reportBuildStatus: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_project#report_build_status CodebuildProject#report_build_status}.

---

### CodebuildProjectSourceAuth <a name="CodebuildProjectSourceAuth" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceAuth"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceAuth.Initializer"></a>

```typescript
import { codebuildProject } from '@cdktf/aws-cdk'

const codebuildProjectSourceAuth: codebuildProject.CodebuildProjectSourceAuth = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceAuth.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_project#type CodebuildProject#type}. |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceAuth.property.resource">resource</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_project#resource CodebuildProject#resource}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceAuth.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_project#type CodebuildProject#type}.

---

##### `resource`<sup>Optional</sup> <a name="resource" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceAuth.property.resource"></a>

```typescript
public readonly resource: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_project#resource CodebuildProject#resource}.

---

### CodebuildProjectSourceBuildStatusConfig <a name="CodebuildProjectSourceBuildStatusConfig" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceBuildStatusConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceBuildStatusConfig.Initializer"></a>

```typescript
import { codebuildProject } from '@cdktf/aws-cdk'

const codebuildProjectSourceBuildStatusConfig: codebuildProject.CodebuildProjectSourceBuildStatusConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceBuildStatusConfig.property.context">context</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_project#context CodebuildProject#context}. |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceBuildStatusConfig.property.targetUrl">targetUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_project#target_url CodebuildProject#target_url}. |

---

##### `context`<sup>Optional</sup> <a name="context" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceBuildStatusConfig.property.context"></a>

```typescript
public readonly context: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_project#context CodebuildProject#context}.

---

##### `targetUrl`<sup>Optional</sup> <a name="targetUrl" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceBuildStatusConfig.property.targetUrl"></a>

```typescript
public readonly targetUrl: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_project#target_url CodebuildProject#target_url}.

---

### CodebuildProjectSourceGitSubmodulesConfig <a name="CodebuildProjectSourceGitSubmodulesConfig" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceGitSubmodulesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceGitSubmodulesConfig.Initializer"></a>

```typescript
import { codebuildProject } from '@cdktf/aws-cdk'

const codebuildProjectSourceGitSubmodulesConfig: codebuildProject.CodebuildProjectSourceGitSubmodulesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceGitSubmodulesConfig.property.fetchSubmodules">fetchSubmodules</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_project#fetch_submodules CodebuildProject#fetch_submodules}. |

---

##### `fetchSubmodules`<sup>Required</sup> <a name="fetchSubmodules" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceGitSubmodulesConfig.property.fetchSubmodules"></a>

```typescript
public readonly fetchSubmodules: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_project#fetch_submodules CodebuildProject#fetch_submodules}.

---

### CodebuildProjectVpcConfig <a name="CodebuildProjectVpcConfig" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectVpcConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectVpcConfig.Initializer"></a>

```typescript
import { codebuildProject } from '@cdktf/aws-cdk'

const codebuildProjectVpcConfig: codebuildProject.CodebuildProjectVpcConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectVpcConfig.property.securityGroupIds">securityGroupIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_project#security_group_ids CodebuildProject#security_group_ids}. |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectVpcConfig.property.subnets">subnets</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_project#subnets CodebuildProject#subnets}. |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectVpcConfig.property.vpcId">vpcId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_project#vpc_id CodebuildProject#vpc_id}. |

---

##### `securityGroupIds`<sup>Required</sup> <a name="securityGroupIds" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectVpcConfig.property.securityGroupIds"></a>

```typescript
public readonly securityGroupIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_project#security_group_ids CodebuildProject#security_group_ids}.

---

##### `subnets`<sup>Required</sup> <a name="subnets" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectVpcConfig.property.subnets"></a>

```typescript
public readonly subnets: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_project#subnets CodebuildProject#subnets}.

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectVpcConfig.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/codebuild_project#vpc_id CodebuildProject#vpc_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### CodebuildProjectArtifactsOutputReference <a name="CodebuildProjectArtifactsOutputReference" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectArtifactsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectArtifactsOutputReference.Initializer"></a>

```typescript
import { codebuildProject } from '@cdktf/aws-cdk'

new codebuildProject.CodebuildProjectArtifactsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectArtifactsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectArtifactsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectArtifactsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectArtifactsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectArtifactsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectArtifactsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectArtifactsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectArtifactsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectArtifactsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectArtifactsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectArtifactsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectArtifactsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectArtifactsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectArtifactsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectArtifactsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectArtifactsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectArtifactsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectArtifactsOutputReference.resetArtifactIdentifier">resetArtifactIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectArtifactsOutputReference.resetBucketOwnerAccess">resetBucketOwnerAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectArtifactsOutputReference.resetEncryptionDisabled">resetEncryptionDisabled</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectArtifactsOutputReference.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectArtifactsOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectArtifactsOutputReference.resetNamespaceType">resetNamespaceType</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectArtifactsOutputReference.resetOverrideArtifactName">resetOverrideArtifactName</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectArtifactsOutputReference.resetPackaging">resetPackaging</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectArtifactsOutputReference.resetPath">resetPath</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectArtifactsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectArtifactsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectArtifactsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectArtifactsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectArtifactsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectArtifactsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectArtifactsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectArtifactsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectArtifactsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectArtifactsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectArtifactsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectArtifactsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectArtifactsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectArtifactsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectArtifactsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectArtifactsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectArtifactsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectArtifactsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectArtifactsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectArtifactsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectArtifactsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectArtifactsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectArtifactsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectArtifactsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetArtifactIdentifier` <a name="resetArtifactIdentifier" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectArtifactsOutputReference.resetArtifactIdentifier"></a>

```typescript
public resetArtifactIdentifier(): void
```

##### `resetBucketOwnerAccess` <a name="resetBucketOwnerAccess" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectArtifactsOutputReference.resetBucketOwnerAccess"></a>

```typescript
public resetBucketOwnerAccess(): void
```

##### `resetEncryptionDisabled` <a name="resetEncryptionDisabled" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectArtifactsOutputReference.resetEncryptionDisabled"></a>

```typescript
public resetEncryptionDisabled(): void
```

##### `resetLocation` <a name="resetLocation" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectArtifactsOutputReference.resetLocation"></a>

```typescript
public resetLocation(): void
```

##### `resetName` <a name="resetName" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectArtifactsOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetNamespaceType` <a name="resetNamespaceType" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectArtifactsOutputReference.resetNamespaceType"></a>

```typescript
public resetNamespaceType(): void
```

##### `resetOverrideArtifactName` <a name="resetOverrideArtifactName" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectArtifactsOutputReference.resetOverrideArtifactName"></a>

```typescript
public resetOverrideArtifactName(): void
```

##### `resetPackaging` <a name="resetPackaging" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectArtifactsOutputReference.resetPackaging"></a>

```typescript
public resetPackaging(): void
```

##### `resetPath` <a name="resetPath" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectArtifactsOutputReference.resetPath"></a>

```typescript
public resetPath(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectArtifactsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectArtifactsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectArtifactsOutputReference.property.artifactIdentifierInput">artifactIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectArtifactsOutputReference.property.bucketOwnerAccessInput">bucketOwnerAccessInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectArtifactsOutputReference.property.encryptionDisabledInput">encryptionDisabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectArtifactsOutputReference.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectArtifactsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectArtifactsOutputReference.property.namespaceTypeInput">namespaceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectArtifactsOutputReference.property.overrideArtifactNameInput">overrideArtifactNameInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectArtifactsOutputReference.property.packagingInput">packagingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectArtifactsOutputReference.property.pathInput">pathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectArtifactsOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectArtifactsOutputReference.property.artifactIdentifier">artifactIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectArtifactsOutputReference.property.bucketOwnerAccess">bucketOwnerAccess</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectArtifactsOutputReference.property.encryptionDisabled">encryptionDisabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectArtifactsOutputReference.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectArtifactsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectArtifactsOutputReference.property.namespaceType">namespaceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectArtifactsOutputReference.property.overrideArtifactName">overrideArtifactName</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectArtifactsOutputReference.property.packaging">packaging</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectArtifactsOutputReference.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectArtifactsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectArtifactsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectArtifacts">CodebuildProjectArtifacts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectArtifactsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectArtifactsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `artifactIdentifierInput`<sup>Optional</sup> <a name="artifactIdentifierInput" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectArtifactsOutputReference.property.artifactIdentifierInput"></a>

```typescript
public readonly artifactIdentifierInput: string;
```

- *Type:* string

---

##### `bucketOwnerAccessInput`<sup>Optional</sup> <a name="bucketOwnerAccessInput" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectArtifactsOutputReference.property.bucketOwnerAccessInput"></a>

```typescript
public readonly bucketOwnerAccessInput: string;
```

- *Type:* string

---

##### `encryptionDisabledInput`<sup>Optional</sup> <a name="encryptionDisabledInput" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectArtifactsOutputReference.property.encryptionDisabledInput"></a>

```typescript
public readonly encryptionDisabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectArtifactsOutputReference.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectArtifactsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `namespaceTypeInput`<sup>Optional</sup> <a name="namespaceTypeInput" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectArtifactsOutputReference.property.namespaceTypeInput"></a>

```typescript
public readonly namespaceTypeInput: string;
```

- *Type:* string

---

##### `overrideArtifactNameInput`<sup>Optional</sup> <a name="overrideArtifactNameInput" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectArtifactsOutputReference.property.overrideArtifactNameInput"></a>

```typescript
public readonly overrideArtifactNameInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `packagingInput`<sup>Optional</sup> <a name="packagingInput" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectArtifactsOutputReference.property.packagingInput"></a>

```typescript
public readonly packagingInput: string;
```

- *Type:* string

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectArtifactsOutputReference.property.pathInput"></a>

```typescript
public readonly pathInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectArtifactsOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `artifactIdentifier`<sup>Required</sup> <a name="artifactIdentifier" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectArtifactsOutputReference.property.artifactIdentifier"></a>

```typescript
public readonly artifactIdentifier: string;
```

- *Type:* string

---

##### `bucketOwnerAccess`<sup>Required</sup> <a name="bucketOwnerAccess" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectArtifactsOutputReference.property.bucketOwnerAccess"></a>

```typescript
public readonly bucketOwnerAccess: string;
```

- *Type:* string

---

##### `encryptionDisabled`<sup>Required</sup> <a name="encryptionDisabled" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectArtifactsOutputReference.property.encryptionDisabled"></a>

```typescript
public readonly encryptionDisabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectArtifactsOutputReference.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectArtifactsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `namespaceType`<sup>Required</sup> <a name="namespaceType" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectArtifactsOutputReference.property.namespaceType"></a>

```typescript
public readonly namespaceType: string;
```

- *Type:* string

---

##### `overrideArtifactName`<sup>Required</sup> <a name="overrideArtifactName" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectArtifactsOutputReference.property.overrideArtifactName"></a>

```typescript
public readonly overrideArtifactName: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `packaging`<sup>Required</sup> <a name="packaging" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectArtifactsOutputReference.property.packaging"></a>

```typescript
public readonly packaging: string;
```

- *Type:* string

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectArtifactsOutputReference.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectArtifactsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectArtifactsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CodebuildProjectArtifacts;
```

- *Type:* <a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectArtifacts">CodebuildProjectArtifacts</a>

---


### CodebuildProjectBuildBatchConfigOutputReference <a name="CodebuildProjectBuildBatchConfigOutputReference" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.Initializer"></a>

```typescript
import { codebuildProject } from '@cdktf/aws-cdk'

new codebuildProject.CodebuildProjectBuildBatchConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.putRestrictions">putRestrictions</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.resetCombineArtifacts">resetCombineArtifacts</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.resetRestrictions">resetRestrictions</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.resetTimeoutInMins">resetTimeoutInMins</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRestrictions` <a name="putRestrictions" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.putRestrictions"></a>

```typescript
public putRestrictions(value: CodebuildProjectBuildBatchConfigRestrictions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.putRestrictions.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectBuildBatchConfigRestrictions">CodebuildProjectBuildBatchConfigRestrictions</a>

---

##### `resetCombineArtifacts` <a name="resetCombineArtifacts" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.resetCombineArtifacts"></a>

```typescript
public resetCombineArtifacts(): void
```

##### `resetRestrictions` <a name="resetRestrictions" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.resetRestrictions"></a>

```typescript
public resetRestrictions(): void
```

##### `resetTimeoutInMins` <a name="resetTimeoutInMins" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.resetTimeoutInMins"></a>

```typescript
public resetTimeoutInMins(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.property.restrictions">restrictions</a></code> | <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectBuildBatchConfigRestrictionsOutputReference">CodebuildProjectBuildBatchConfigRestrictionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.property.combineArtifactsInput">combineArtifactsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.property.restrictionsInput">restrictionsInput</a></code> | <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectBuildBatchConfigRestrictions">CodebuildProjectBuildBatchConfigRestrictions</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.property.serviceRoleInput">serviceRoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.property.timeoutInMinsInput">timeoutInMinsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.property.combineArtifacts">combineArtifacts</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.property.serviceRole">serviceRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.property.timeoutInMins">timeoutInMins</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectBuildBatchConfig">CodebuildProjectBuildBatchConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `restrictions`<sup>Required</sup> <a name="restrictions" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.property.restrictions"></a>

```typescript
public readonly restrictions: CodebuildProjectBuildBatchConfigRestrictionsOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectBuildBatchConfigRestrictionsOutputReference">CodebuildProjectBuildBatchConfigRestrictionsOutputReference</a>

---

##### `combineArtifactsInput`<sup>Optional</sup> <a name="combineArtifactsInput" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.property.combineArtifactsInput"></a>

```typescript
public readonly combineArtifactsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `restrictionsInput`<sup>Optional</sup> <a name="restrictionsInput" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.property.restrictionsInput"></a>

```typescript
public readonly restrictionsInput: CodebuildProjectBuildBatchConfigRestrictions;
```

- *Type:* <a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectBuildBatchConfigRestrictions">CodebuildProjectBuildBatchConfigRestrictions</a>

---

##### `serviceRoleInput`<sup>Optional</sup> <a name="serviceRoleInput" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.property.serviceRoleInput"></a>

```typescript
public readonly serviceRoleInput: string;
```

- *Type:* string

---

##### `timeoutInMinsInput`<sup>Optional</sup> <a name="timeoutInMinsInput" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.property.timeoutInMinsInput"></a>

```typescript
public readonly timeoutInMinsInput: number;
```

- *Type:* number

---

##### `combineArtifacts`<sup>Required</sup> <a name="combineArtifacts" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.property.combineArtifacts"></a>

```typescript
public readonly combineArtifacts: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `serviceRole`<sup>Required</sup> <a name="serviceRole" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.property.serviceRole"></a>

```typescript
public readonly serviceRole: string;
```

- *Type:* string

---

##### `timeoutInMins`<sup>Required</sup> <a name="timeoutInMins" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.property.timeoutInMins"></a>

```typescript
public readonly timeoutInMins: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectBuildBatchConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CodebuildProjectBuildBatchConfig;
```

- *Type:* <a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectBuildBatchConfig">CodebuildProjectBuildBatchConfig</a>

---


### CodebuildProjectBuildBatchConfigRestrictionsOutputReference <a name="CodebuildProjectBuildBatchConfigRestrictionsOutputReference" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectBuildBatchConfigRestrictionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectBuildBatchConfigRestrictionsOutputReference.Initializer"></a>

```typescript
import { codebuildProject } from '@cdktf/aws-cdk'

new codebuildProject.CodebuildProjectBuildBatchConfigRestrictionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectBuildBatchConfigRestrictionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectBuildBatchConfigRestrictionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectBuildBatchConfigRestrictionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectBuildBatchConfigRestrictionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectBuildBatchConfigRestrictionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectBuildBatchConfigRestrictionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectBuildBatchConfigRestrictionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectBuildBatchConfigRestrictionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectBuildBatchConfigRestrictionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectBuildBatchConfigRestrictionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectBuildBatchConfigRestrictionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectBuildBatchConfigRestrictionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectBuildBatchConfigRestrictionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectBuildBatchConfigRestrictionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectBuildBatchConfigRestrictionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectBuildBatchConfigRestrictionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectBuildBatchConfigRestrictionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectBuildBatchConfigRestrictionsOutputReference.resetComputeTypesAllowed">resetComputeTypesAllowed</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectBuildBatchConfigRestrictionsOutputReference.resetMaximumBuildsAllowed">resetMaximumBuildsAllowed</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectBuildBatchConfigRestrictionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectBuildBatchConfigRestrictionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectBuildBatchConfigRestrictionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectBuildBatchConfigRestrictionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectBuildBatchConfigRestrictionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectBuildBatchConfigRestrictionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectBuildBatchConfigRestrictionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectBuildBatchConfigRestrictionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectBuildBatchConfigRestrictionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectBuildBatchConfigRestrictionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectBuildBatchConfigRestrictionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectBuildBatchConfigRestrictionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectBuildBatchConfigRestrictionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectBuildBatchConfigRestrictionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectBuildBatchConfigRestrictionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectBuildBatchConfigRestrictionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectBuildBatchConfigRestrictionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectBuildBatchConfigRestrictionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectBuildBatchConfigRestrictionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectBuildBatchConfigRestrictionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectBuildBatchConfigRestrictionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectBuildBatchConfigRestrictionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectBuildBatchConfigRestrictionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectBuildBatchConfigRestrictionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetComputeTypesAllowed` <a name="resetComputeTypesAllowed" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectBuildBatchConfigRestrictionsOutputReference.resetComputeTypesAllowed"></a>

```typescript
public resetComputeTypesAllowed(): void
```

##### `resetMaximumBuildsAllowed` <a name="resetMaximumBuildsAllowed" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectBuildBatchConfigRestrictionsOutputReference.resetMaximumBuildsAllowed"></a>

```typescript
public resetMaximumBuildsAllowed(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectBuildBatchConfigRestrictionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectBuildBatchConfigRestrictionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectBuildBatchConfigRestrictionsOutputReference.property.computeTypesAllowedInput">computeTypesAllowedInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectBuildBatchConfigRestrictionsOutputReference.property.maximumBuildsAllowedInput">maximumBuildsAllowedInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectBuildBatchConfigRestrictionsOutputReference.property.computeTypesAllowed">computeTypesAllowed</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectBuildBatchConfigRestrictionsOutputReference.property.maximumBuildsAllowed">maximumBuildsAllowed</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectBuildBatchConfigRestrictionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectBuildBatchConfigRestrictions">CodebuildProjectBuildBatchConfigRestrictions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectBuildBatchConfigRestrictionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectBuildBatchConfigRestrictionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `computeTypesAllowedInput`<sup>Optional</sup> <a name="computeTypesAllowedInput" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectBuildBatchConfigRestrictionsOutputReference.property.computeTypesAllowedInput"></a>

```typescript
public readonly computeTypesAllowedInput: string[];
```

- *Type:* string[]

---

##### `maximumBuildsAllowedInput`<sup>Optional</sup> <a name="maximumBuildsAllowedInput" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectBuildBatchConfigRestrictionsOutputReference.property.maximumBuildsAllowedInput"></a>

```typescript
public readonly maximumBuildsAllowedInput: number;
```

- *Type:* number

---

##### `computeTypesAllowed`<sup>Required</sup> <a name="computeTypesAllowed" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectBuildBatchConfigRestrictionsOutputReference.property.computeTypesAllowed"></a>

```typescript
public readonly computeTypesAllowed: string[];
```

- *Type:* string[]

---

##### `maximumBuildsAllowed`<sup>Required</sup> <a name="maximumBuildsAllowed" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectBuildBatchConfigRestrictionsOutputReference.property.maximumBuildsAllowed"></a>

```typescript
public readonly maximumBuildsAllowed: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectBuildBatchConfigRestrictionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CodebuildProjectBuildBatchConfigRestrictions;
```

- *Type:* <a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectBuildBatchConfigRestrictions">CodebuildProjectBuildBatchConfigRestrictions</a>

---


### CodebuildProjectCacheOutputReference <a name="CodebuildProjectCacheOutputReference" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectCacheOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectCacheOutputReference.Initializer"></a>

```typescript
import { codebuildProject } from '@cdktf/aws-cdk'

new codebuildProject.CodebuildProjectCacheOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectCacheOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectCacheOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectCacheOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectCacheOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectCacheOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectCacheOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectCacheOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectCacheOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectCacheOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectCacheOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectCacheOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectCacheOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectCacheOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectCacheOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectCacheOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectCacheOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectCacheOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectCacheOutputReference.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectCacheOutputReference.resetModes">resetModes</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectCacheOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectCacheOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectCacheOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectCacheOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectCacheOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectCacheOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectCacheOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectCacheOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectCacheOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectCacheOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectCacheOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectCacheOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectCacheOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectCacheOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectCacheOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectCacheOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectCacheOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectCacheOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectCacheOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectCacheOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectCacheOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectCacheOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectCacheOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectCacheOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectCacheOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLocation` <a name="resetLocation" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectCacheOutputReference.resetLocation"></a>

```typescript
public resetLocation(): void
```

##### `resetModes` <a name="resetModes" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectCacheOutputReference.resetModes"></a>

```typescript
public resetModes(): void
```

##### `resetType` <a name="resetType" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectCacheOutputReference.resetType"></a>

```typescript
public resetType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectCacheOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectCacheOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectCacheOutputReference.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectCacheOutputReference.property.modesInput">modesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectCacheOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectCacheOutputReference.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectCacheOutputReference.property.modes">modes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectCacheOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectCacheOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectCache">CodebuildProjectCache</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectCacheOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectCacheOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectCacheOutputReference.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `modesInput`<sup>Optional</sup> <a name="modesInput" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectCacheOutputReference.property.modesInput"></a>

```typescript
public readonly modesInput: string[];
```

- *Type:* string[]

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectCacheOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectCacheOutputReference.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `modes`<sup>Required</sup> <a name="modes" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectCacheOutputReference.property.modes"></a>

```typescript
public readonly modes: string[];
```

- *Type:* string[]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectCacheOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectCacheOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CodebuildProjectCache;
```

- *Type:* <a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectCache">CodebuildProjectCache</a>

---


### CodebuildProjectEnvironmentEnvironmentVariableList <a name="CodebuildProjectEnvironmentEnvironmentVariableList" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableList"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableList.Initializer"></a>

```typescript
import { codebuildProject } from '@cdktf/aws-cdk'

new codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableList.get"></a>

```typescript
public get(index: number): CodebuildProjectEnvironmentEnvironmentVariableOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariable">CodebuildProjectEnvironmentEnvironmentVariable</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CodebuildProjectEnvironmentEnvironmentVariable[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariable">CodebuildProjectEnvironmentEnvironmentVariable</a>[]

---


### CodebuildProjectEnvironmentEnvironmentVariableOutputReference <a name="CodebuildProjectEnvironmentEnvironmentVariableOutputReference" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableOutputReference.Initializer"></a>

```typescript
import { codebuildProject } from '@cdktf/aws-cdk'

new codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetType` <a name="resetType" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableOutputReference.resetType"></a>

```typescript
public resetType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariable">CodebuildProjectEnvironmentEnvironmentVariable</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CodebuildProjectEnvironmentEnvironmentVariable;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariable">CodebuildProjectEnvironmentEnvironmentVariable</a>

---


### CodebuildProjectEnvironmentOutputReference <a name="CodebuildProjectEnvironmentOutputReference" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentOutputReference.Initializer"></a>

```typescript
import { codebuildProject } from '@cdktf/aws-cdk'

new codebuildProject.CodebuildProjectEnvironmentOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentOutputReference.putEnvironmentVariable">putEnvironmentVariable</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentOutputReference.putRegistryCredential">putRegistryCredential</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentOutputReference.resetCertificate">resetCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentOutputReference.resetEnvironmentVariable">resetEnvironmentVariable</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentOutputReference.resetImagePullCredentialsType">resetImagePullCredentialsType</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentOutputReference.resetPrivilegedMode">resetPrivilegedMode</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentOutputReference.resetRegistryCredential">resetRegistryCredential</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEnvironmentVariable` <a name="putEnvironmentVariable" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentOutputReference.putEnvironmentVariable"></a>

```typescript
public putEnvironmentVariable(value: IResolvable | CodebuildProjectEnvironmentEnvironmentVariable[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentOutputReference.putEnvironmentVariable.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariable">CodebuildProjectEnvironmentEnvironmentVariable</a>[]

---

##### `putRegistryCredential` <a name="putRegistryCredential" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentOutputReference.putRegistryCredential"></a>

```typescript
public putRegistryCredential(value: CodebuildProjectEnvironmentRegistryCredential): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentOutputReference.putRegistryCredential.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentRegistryCredential">CodebuildProjectEnvironmentRegistryCredential</a>

---

##### `resetCertificate` <a name="resetCertificate" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentOutputReference.resetCertificate"></a>

```typescript
public resetCertificate(): void
```

##### `resetEnvironmentVariable` <a name="resetEnvironmentVariable" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentOutputReference.resetEnvironmentVariable"></a>

```typescript
public resetEnvironmentVariable(): void
```

##### `resetImagePullCredentialsType` <a name="resetImagePullCredentialsType" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentOutputReference.resetImagePullCredentialsType"></a>

```typescript
public resetImagePullCredentialsType(): void
```

##### `resetPrivilegedMode` <a name="resetPrivilegedMode" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentOutputReference.resetPrivilegedMode"></a>

```typescript
public resetPrivilegedMode(): void
```

##### `resetRegistryCredential` <a name="resetRegistryCredential" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentOutputReference.resetRegistryCredential"></a>

```typescript
public resetRegistryCredential(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentOutputReference.property.environmentVariable">environmentVariable</a></code> | <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableList">CodebuildProjectEnvironmentEnvironmentVariableList</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentOutputReference.property.registryCredential">registryCredential</a></code> | <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentRegistryCredentialOutputReference">CodebuildProjectEnvironmentRegistryCredentialOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentOutputReference.property.certificateInput">certificateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentOutputReference.property.computeTypeInput">computeTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentOutputReference.property.environmentVariableInput">environmentVariableInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariable">CodebuildProjectEnvironmentEnvironmentVariable</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentOutputReference.property.imageInput">imageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentOutputReference.property.imagePullCredentialsTypeInput">imagePullCredentialsTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentOutputReference.property.privilegedModeInput">privilegedModeInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentOutputReference.property.registryCredentialInput">registryCredentialInput</a></code> | <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentRegistryCredential">CodebuildProjectEnvironmentRegistryCredential</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentOutputReference.property.certificate">certificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentOutputReference.property.computeType">computeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentOutputReference.property.image">image</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentOutputReference.property.imagePullCredentialsType">imagePullCredentialsType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentOutputReference.property.privilegedMode">privilegedMode</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironment">CodebuildProjectEnvironment</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `environmentVariable`<sup>Required</sup> <a name="environmentVariable" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentOutputReference.property.environmentVariable"></a>

```typescript
public readonly environmentVariable: CodebuildProjectEnvironmentEnvironmentVariableList;
```

- *Type:* <a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariableList">CodebuildProjectEnvironmentEnvironmentVariableList</a>

---

##### `registryCredential`<sup>Required</sup> <a name="registryCredential" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentOutputReference.property.registryCredential"></a>

```typescript
public readonly registryCredential: CodebuildProjectEnvironmentRegistryCredentialOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentRegistryCredentialOutputReference">CodebuildProjectEnvironmentRegistryCredentialOutputReference</a>

---

##### `certificateInput`<sup>Optional</sup> <a name="certificateInput" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentOutputReference.property.certificateInput"></a>

```typescript
public readonly certificateInput: string;
```

- *Type:* string

---

##### `computeTypeInput`<sup>Optional</sup> <a name="computeTypeInput" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentOutputReference.property.computeTypeInput"></a>

```typescript
public readonly computeTypeInput: string;
```

- *Type:* string

---

##### `environmentVariableInput`<sup>Optional</sup> <a name="environmentVariableInput" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentOutputReference.property.environmentVariableInput"></a>

```typescript
public readonly environmentVariableInput: IResolvable | CodebuildProjectEnvironmentEnvironmentVariable[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentEnvironmentVariable">CodebuildProjectEnvironmentEnvironmentVariable</a>[]

---

##### `imageInput`<sup>Optional</sup> <a name="imageInput" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentOutputReference.property.imageInput"></a>

```typescript
public readonly imageInput: string;
```

- *Type:* string

---

##### `imagePullCredentialsTypeInput`<sup>Optional</sup> <a name="imagePullCredentialsTypeInput" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentOutputReference.property.imagePullCredentialsTypeInput"></a>

```typescript
public readonly imagePullCredentialsTypeInput: string;
```

- *Type:* string

---

##### `privilegedModeInput`<sup>Optional</sup> <a name="privilegedModeInput" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentOutputReference.property.privilegedModeInput"></a>

```typescript
public readonly privilegedModeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `registryCredentialInput`<sup>Optional</sup> <a name="registryCredentialInput" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentOutputReference.property.registryCredentialInput"></a>

```typescript
public readonly registryCredentialInput: CodebuildProjectEnvironmentRegistryCredential;
```

- *Type:* <a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentRegistryCredential">CodebuildProjectEnvironmentRegistryCredential</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentOutputReference.property.certificate"></a>

```typescript
public readonly certificate: string;
```

- *Type:* string

---

##### `computeType`<sup>Required</sup> <a name="computeType" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentOutputReference.property.computeType"></a>

```typescript
public readonly computeType: string;
```

- *Type:* string

---

##### `image`<sup>Required</sup> <a name="image" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentOutputReference.property.image"></a>

```typescript
public readonly image: string;
```

- *Type:* string

---

##### `imagePullCredentialsType`<sup>Required</sup> <a name="imagePullCredentialsType" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentOutputReference.property.imagePullCredentialsType"></a>

```typescript
public readonly imagePullCredentialsType: string;
```

- *Type:* string

---

##### `privilegedMode`<sup>Required</sup> <a name="privilegedMode" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentOutputReference.property.privilegedMode"></a>

```typescript
public readonly privilegedMode: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CodebuildProjectEnvironment;
```

- *Type:* <a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironment">CodebuildProjectEnvironment</a>

---


### CodebuildProjectEnvironmentRegistryCredentialOutputReference <a name="CodebuildProjectEnvironmentRegistryCredentialOutputReference" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentRegistryCredentialOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentRegistryCredentialOutputReference.Initializer"></a>

```typescript
import { codebuildProject } from '@cdktf/aws-cdk'

new codebuildProject.CodebuildProjectEnvironmentRegistryCredentialOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentRegistryCredentialOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentRegistryCredentialOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentRegistryCredentialOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentRegistryCredentialOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentRegistryCredentialOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentRegistryCredentialOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentRegistryCredentialOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentRegistryCredentialOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentRegistryCredentialOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentRegistryCredentialOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentRegistryCredentialOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentRegistryCredentialOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentRegistryCredentialOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentRegistryCredentialOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentRegistryCredentialOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentRegistryCredentialOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentRegistryCredentialOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentRegistryCredentialOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentRegistryCredentialOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentRegistryCredentialOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentRegistryCredentialOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentRegistryCredentialOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentRegistryCredentialOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentRegistryCredentialOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentRegistryCredentialOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentRegistryCredentialOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentRegistryCredentialOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentRegistryCredentialOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentRegistryCredentialOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentRegistryCredentialOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentRegistryCredentialOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentRegistryCredentialOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentRegistryCredentialOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentRegistryCredentialOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentRegistryCredentialOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentRegistryCredentialOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentRegistryCredentialOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentRegistryCredentialOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentRegistryCredentialOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentRegistryCredentialOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentRegistryCredentialOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentRegistryCredentialOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentRegistryCredentialOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentRegistryCredentialOutputReference.property.credentialInput">credentialInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentRegistryCredentialOutputReference.property.credentialProviderInput">credentialProviderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentRegistryCredentialOutputReference.property.credential">credential</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentRegistryCredentialOutputReference.property.credentialProvider">credentialProvider</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentRegistryCredentialOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentRegistryCredential">CodebuildProjectEnvironmentRegistryCredential</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentRegistryCredentialOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentRegistryCredentialOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `credentialInput`<sup>Optional</sup> <a name="credentialInput" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentRegistryCredentialOutputReference.property.credentialInput"></a>

```typescript
public readonly credentialInput: string;
```

- *Type:* string

---

##### `credentialProviderInput`<sup>Optional</sup> <a name="credentialProviderInput" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentRegistryCredentialOutputReference.property.credentialProviderInput"></a>

```typescript
public readonly credentialProviderInput: string;
```

- *Type:* string

---

##### `credential`<sup>Required</sup> <a name="credential" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentRegistryCredentialOutputReference.property.credential"></a>

```typescript
public readonly credential: string;
```

- *Type:* string

---

##### `credentialProvider`<sup>Required</sup> <a name="credentialProvider" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentRegistryCredentialOutputReference.property.credentialProvider"></a>

```typescript
public readonly credentialProvider: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentRegistryCredentialOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CodebuildProjectEnvironmentRegistryCredential;
```

- *Type:* <a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectEnvironmentRegistryCredential">CodebuildProjectEnvironmentRegistryCredential</a>

---


### CodebuildProjectFileSystemLocationsList <a name="CodebuildProjectFileSystemLocationsList" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectFileSystemLocationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectFileSystemLocationsList.Initializer"></a>

```typescript
import { codebuildProject } from '@cdktf/aws-cdk'

new codebuildProject.CodebuildProjectFileSystemLocationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectFileSystemLocationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectFileSystemLocationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectFileSystemLocationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectFileSystemLocationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectFileSystemLocationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectFileSystemLocationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectFileSystemLocationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectFileSystemLocationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectFileSystemLocationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectFileSystemLocationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectFileSystemLocationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectFileSystemLocationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectFileSystemLocationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectFileSystemLocationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectFileSystemLocationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectFileSystemLocationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectFileSystemLocationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectFileSystemLocationsList.get"></a>

```typescript
public get(index: number): CodebuildProjectFileSystemLocationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectFileSystemLocationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectFileSystemLocationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectFileSystemLocationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectFileSystemLocationsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectFileSystemLocations">CodebuildProjectFileSystemLocations</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectFileSystemLocationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectFileSystemLocationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectFileSystemLocationsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CodebuildProjectFileSystemLocations[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectFileSystemLocations">CodebuildProjectFileSystemLocations</a>[]

---


### CodebuildProjectFileSystemLocationsOutputReference <a name="CodebuildProjectFileSystemLocationsOutputReference" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.Initializer"></a>

```typescript
import { codebuildProject } from '@cdktf/aws-cdk'

new codebuildProject.CodebuildProjectFileSystemLocationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.resetIdentifier">resetIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.resetMountOptions">resetMountOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.resetMountPoint">resetMountPoint</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIdentifier` <a name="resetIdentifier" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.resetIdentifier"></a>

```typescript
public resetIdentifier(): void
```

##### `resetLocation` <a name="resetLocation" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.resetLocation"></a>

```typescript
public resetLocation(): void
```

##### `resetMountOptions` <a name="resetMountOptions" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.resetMountOptions"></a>

```typescript
public resetMountOptions(): void
```

##### `resetMountPoint` <a name="resetMountPoint" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.resetMountPoint"></a>

```typescript
public resetMountPoint(): void
```

##### `resetType` <a name="resetType" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.resetType"></a>

```typescript
public resetType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.property.identifierInput">identifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.property.mountOptionsInput">mountOptionsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.property.mountPointInput">mountPointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.property.identifier">identifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.property.mountOptions">mountOptions</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.property.mountPoint">mountPoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectFileSystemLocations">CodebuildProjectFileSystemLocations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `identifierInput`<sup>Optional</sup> <a name="identifierInput" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.property.identifierInput"></a>

```typescript
public readonly identifierInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `mountOptionsInput`<sup>Optional</sup> <a name="mountOptionsInput" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.property.mountOptionsInput"></a>

```typescript
public readonly mountOptionsInput: string;
```

- *Type:* string

---

##### `mountPointInput`<sup>Optional</sup> <a name="mountPointInput" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.property.mountPointInput"></a>

```typescript
public readonly mountPointInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.property.identifier"></a>

```typescript
public readonly identifier: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `mountOptions`<sup>Required</sup> <a name="mountOptions" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.property.mountOptions"></a>

```typescript
public readonly mountOptions: string;
```

- *Type:* string

---

##### `mountPoint`<sup>Required</sup> <a name="mountPoint" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.property.mountPoint"></a>

```typescript
public readonly mountPoint: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectFileSystemLocationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CodebuildProjectFileSystemLocations;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectFileSystemLocations">CodebuildProjectFileSystemLocations</a>

---


### CodebuildProjectLogsConfigCloudwatchLogsOutputReference <a name="CodebuildProjectLogsConfigCloudwatchLogsOutputReference" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogsOutputReference.Initializer"></a>

```typescript
import { codebuildProject } from '@cdktf/aws-cdk'

new codebuildProject.CodebuildProjectLogsConfigCloudwatchLogsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogsOutputReference.resetGroupName">resetGroupName</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogsOutputReference.resetStatus">resetStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogsOutputReference.resetStreamName">resetStreamName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetGroupName` <a name="resetGroupName" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogsOutputReference.resetGroupName"></a>

```typescript
public resetGroupName(): void
```

##### `resetStatus` <a name="resetStatus" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogsOutputReference.resetStatus"></a>

```typescript
public resetStatus(): void
```

##### `resetStreamName` <a name="resetStreamName" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogsOutputReference.resetStreamName"></a>

```typescript
public resetStreamName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogsOutputReference.property.groupNameInput">groupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogsOutputReference.property.statusInput">statusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogsOutputReference.property.streamNameInput">streamNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogsOutputReference.property.groupName">groupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogsOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogsOutputReference.property.streamName">streamName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogs">CodebuildProjectLogsConfigCloudwatchLogs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `groupNameInput`<sup>Optional</sup> <a name="groupNameInput" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogsOutputReference.property.groupNameInput"></a>

```typescript
public readonly groupNameInput: string;
```

- *Type:* string

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogsOutputReference.property.statusInput"></a>

```typescript
public readonly statusInput: string;
```

- *Type:* string

---

##### `streamNameInput`<sup>Optional</sup> <a name="streamNameInput" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogsOutputReference.property.streamNameInput"></a>

```typescript
public readonly streamNameInput: string;
```

- *Type:* string

---

##### `groupName`<sup>Required</sup> <a name="groupName" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogsOutputReference.property.groupName"></a>

```typescript
public readonly groupName: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogsOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `streamName`<sup>Required</sup> <a name="streamName" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogsOutputReference.property.streamName"></a>

```typescript
public readonly streamName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CodebuildProjectLogsConfigCloudwatchLogs;
```

- *Type:* <a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogs">CodebuildProjectLogsConfigCloudwatchLogs</a>

---


### CodebuildProjectLogsConfigOutputReference <a name="CodebuildProjectLogsConfigOutputReference" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectLogsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectLogsConfigOutputReference.Initializer"></a>

```typescript
import { codebuildProject } from '@cdktf/aws-cdk'

new codebuildProject.CodebuildProjectLogsConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectLogsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectLogsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectLogsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectLogsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectLogsConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectLogsConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectLogsConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectLogsConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectLogsConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectLogsConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectLogsConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectLogsConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectLogsConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectLogsConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectLogsConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectLogsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectLogsConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectLogsConfigOutputReference.putCloudwatchLogs">putCloudwatchLogs</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectLogsConfigOutputReference.putS3Logs">putS3Logs</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectLogsConfigOutputReference.resetCloudwatchLogs">resetCloudwatchLogs</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectLogsConfigOutputReference.resetS3Logs">resetS3Logs</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectLogsConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectLogsConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectLogsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectLogsConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectLogsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectLogsConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectLogsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectLogsConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectLogsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectLogsConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectLogsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectLogsConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectLogsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectLogsConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectLogsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectLogsConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectLogsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectLogsConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectLogsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectLogsConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectLogsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectLogsConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectLogsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectLogsConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCloudwatchLogs` <a name="putCloudwatchLogs" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectLogsConfigOutputReference.putCloudwatchLogs"></a>

```typescript
public putCloudwatchLogs(value: CodebuildProjectLogsConfigCloudwatchLogs): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectLogsConfigOutputReference.putCloudwatchLogs.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogs">CodebuildProjectLogsConfigCloudwatchLogs</a>

---

##### `putS3Logs` <a name="putS3Logs" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectLogsConfigOutputReference.putS3Logs"></a>

```typescript
public putS3Logs(value: CodebuildProjectLogsConfigS3Logs): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectLogsConfigOutputReference.putS3Logs.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectLogsConfigS3Logs">CodebuildProjectLogsConfigS3Logs</a>

---

##### `resetCloudwatchLogs` <a name="resetCloudwatchLogs" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectLogsConfigOutputReference.resetCloudwatchLogs"></a>

```typescript
public resetCloudwatchLogs(): void
```

##### `resetS3Logs` <a name="resetS3Logs" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectLogsConfigOutputReference.resetS3Logs"></a>

```typescript
public resetS3Logs(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectLogsConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectLogsConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectLogsConfigOutputReference.property.cloudwatchLogs">cloudwatchLogs</a></code> | <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogsOutputReference">CodebuildProjectLogsConfigCloudwatchLogsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectLogsConfigOutputReference.property.s3Logs">s3Logs</a></code> | <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference">CodebuildProjectLogsConfigS3LogsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectLogsConfigOutputReference.property.cloudwatchLogsInput">cloudwatchLogsInput</a></code> | <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogs">CodebuildProjectLogsConfigCloudwatchLogs</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectLogsConfigOutputReference.property.s3LogsInput">s3LogsInput</a></code> | <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectLogsConfigS3Logs">CodebuildProjectLogsConfigS3Logs</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectLogsConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectLogsConfig">CodebuildProjectLogsConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectLogsConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectLogsConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cloudwatchLogs`<sup>Required</sup> <a name="cloudwatchLogs" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectLogsConfigOutputReference.property.cloudwatchLogs"></a>

```typescript
public readonly cloudwatchLogs: CodebuildProjectLogsConfigCloudwatchLogsOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogsOutputReference">CodebuildProjectLogsConfigCloudwatchLogsOutputReference</a>

---

##### `s3Logs`<sup>Required</sup> <a name="s3Logs" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectLogsConfigOutputReference.property.s3Logs"></a>

```typescript
public readonly s3Logs: CodebuildProjectLogsConfigS3LogsOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference">CodebuildProjectLogsConfigS3LogsOutputReference</a>

---

##### `cloudwatchLogsInput`<sup>Optional</sup> <a name="cloudwatchLogsInput" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectLogsConfigOutputReference.property.cloudwatchLogsInput"></a>

```typescript
public readonly cloudwatchLogsInput: CodebuildProjectLogsConfigCloudwatchLogs;
```

- *Type:* <a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectLogsConfigCloudwatchLogs">CodebuildProjectLogsConfigCloudwatchLogs</a>

---

##### `s3LogsInput`<sup>Optional</sup> <a name="s3LogsInput" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectLogsConfigOutputReference.property.s3LogsInput"></a>

```typescript
public readonly s3LogsInput: CodebuildProjectLogsConfigS3Logs;
```

- *Type:* <a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectLogsConfigS3Logs">CodebuildProjectLogsConfigS3Logs</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectLogsConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CodebuildProjectLogsConfig;
```

- *Type:* <a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectLogsConfig">CodebuildProjectLogsConfig</a>

---


### CodebuildProjectLogsConfigS3LogsOutputReference <a name="CodebuildProjectLogsConfigS3LogsOutputReference" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.Initializer"></a>

```typescript
import { codebuildProject } from '@cdktf/aws-cdk'

new codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.resetBucketOwnerAccess">resetBucketOwnerAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.resetEncryptionDisabled">resetEncryptionDisabled</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.resetStatus">resetStatus</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBucketOwnerAccess` <a name="resetBucketOwnerAccess" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.resetBucketOwnerAccess"></a>

```typescript
public resetBucketOwnerAccess(): void
```

##### `resetEncryptionDisabled` <a name="resetEncryptionDisabled" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.resetEncryptionDisabled"></a>

```typescript
public resetEncryptionDisabled(): void
```

##### `resetLocation` <a name="resetLocation" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.resetLocation"></a>

```typescript
public resetLocation(): void
```

##### `resetStatus` <a name="resetStatus" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.resetStatus"></a>

```typescript
public resetStatus(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.property.bucketOwnerAccessInput">bucketOwnerAccessInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.property.encryptionDisabledInput">encryptionDisabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.property.statusInput">statusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.property.bucketOwnerAccess">bucketOwnerAccess</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.property.encryptionDisabled">encryptionDisabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectLogsConfigS3Logs">CodebuildProjectLogsConfigS3Logs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bucketOwnerAccessInput`<sup>Optional</sup> <a name="bucketOwnerAccessInput" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.property.bucketOwnerAccessInput"></a>

```typescript
public readonly bucketOwnerAccessInput: string;
```

- *Type:* string

---

##### `encryptionDisabledInput`<sup>Optional</sup> <a name="encryptionDisabledInput" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.property.encryptionDisabledInput"></a>

```typescript
public readonly encryptionDisabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.property.statusInput"></a>

```typescript
public readonly statusInput: string;
```

- *Type:* string

---

##### `bucketOwnerAccess`<sup>Required</sup> <a name="bucketOwnerAccess" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.property.bucketOwnerAccess"></a>

```typescript
public readonly bucketOwnerAccess: string;
```

- *Type:* string

---

##### `encryptionDisabled`<sup>Required</sup> <a name="encryptionDisabled" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.property.encryptionDisabled"></a>

```typescript
public readonly encryptionDisabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectLogsConfigS3LogsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CodebuildProjectLogsConfigS3Logs;
```

- *Type:* <a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectLogsConfigS3Logs">CodebuildProjectLogsConfigS3Logs</a>

---


### CodebuildProjectSecondaryArtifactsList <a name="CodebuildProjectSecondaryArtifactsList" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondaryArtifactsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondaryArtifactsList.Initializer"></a>

```typescript
import { codebuildProject } from '@cdktf/aws-cdk'

new codebuildProject.CodebuildProjectSecondaryArtifactsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondaryArtifactsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondaryArtifactsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondaryArtifactsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondaryArtifactsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondaryArtifactsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondaryArtifactsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondaryArtifactsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondaryArtifactsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondaryArtifactsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondaryArtifactsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondaryArtifactsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondaryArtifactsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondaryArtifactsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondaryArtifactsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondaryArtifactsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondaryArtifactsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondaryArtifactsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondaryArtifactsList.get"></a>

```typescript
public get(index: number): CodebuildProjectSecondaryArtifactsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondaryArtifactsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondaryArtifactsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondaryArtifactsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondaryArtifactsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondaryArtifacts">CodebuildProjectSecondaryArtifacts</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondaryArtifactsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondaryArtifactsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondaryArtifactsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CodebuildProjectSecondaryArtifacts[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondaryArtifacts">CodebuildProjectSecondaryArtifacts</a>[]

---


### CodebuildProjectSecondaryArtifactsOutputReference <a name="CodebuildProjectSecondaryArtifactsOutputReference" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.Initializer"></a>

```typescript
import { codebuildProject } from '@cdktf/aws-cdk'

new codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.resetBucketOwnerAccess">resetBucketOwnerAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.resetEncryptionDisabled">resetEncryptionDisabled</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.resetNamespaceType">resetNamespaceType</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.resetOverrideArtifactName">resetOverrideArtifactName</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.resetPackaging">resetPackaging</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.resetPath">resetPath</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBucketOwnerAccess` <a name="resetBucketOwnerAccess" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.resetBucketOwnerAccess"></a>

```typescript
public resetBucketOwnerAccess(): void
```

##### `resetEncryptionDisabled` <a name="resetEncryptionDisabled" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.resetEncryptionDisabled"></a>

```typescript
public resetEncryptionDisabled(): void
```

##### `resetLocation` <a name="resetLocation" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.resetLocation"></a>

```typescript
public resetLocation(): void
```

##### `resetName` <a name="resetName" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetNamespaceType` <a name="resetNamespaceType" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.resetNamespaceType"></a>

```typescript
public resetNamespaceType(): void
```

##### `resetOverrideArtifactName` <a name="resetOverrideArtifactName" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.resetOverrideArtifactName"></a>

```typescript
public resetOverrideArtifactName(): void
```

##### `resetPackaging` <a name="resetPackaging" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.resetPackaging"></a>

```typescript
public resetPackaging(): void
```

##### `resetPath` <a name="resetPath" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.resetPath"></a>

```typescript
public resetPath(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.property.artifactIdentifierInput">artifactIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.property.bucketOwnerAccessInput">bucketOwnerAccessInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.property.encryptionDisabledInput">encryptionDisabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.property.namespaceTypeInput">namespaceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.property.overrideArtifactNameInput">overrideArtifactNameInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.property.packagingInput">packagingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.property.pathInput">pathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.property.artifactIdentifier">artifactIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.property.bucketOwnerAccess">bucketOwnerAccess</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.property.encryptionDisabled">encryptionDisabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.property.namespaceType">namespaceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.property.overrideArtifactName">overrideArtifactName</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.property.packaging">packaging</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondaryArtifacts">CodebuildProjectSecondaryArtifacts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `artifactIdentifierInput`<sup>Optional</sup> <a name="artifactIdentifierInput" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.property.artifactIdentifierInput"></a>

```typescript
public readonly artifactIdentifierInput: string;
```

- *Type:* string

---

##### `bucketOwnerAccessInput`<sup>Optional</sup> <a name="bucketOwnerAccessInput" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.property.bucketOwnerAccessInput"></a>

```typescript
public readonly bucketOwnerAccessInput: string;
```

- *Type:* string

---

##### `encryptionDisabledInput`<sup>Optional</sup> <a name="encryptionDisabledInput" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.property.encryptionDisabledInput"></a>

```typescript
public readonly encryptionDisabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `namespaceTypeInput`<sup>Optional</sup> <a name="namespaceTypeInput" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.property.namespaceTypeInput"></a>

```typescript
public readonly namespaceTypeInput: string;
```

- *Type:* string

---

##### `overrideArtifactNameInput`<sup>Optional</sup> <a name="overrideArtifactNameInput" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.property.overrideArtifactNameInput"></a>

```typescript
public readonly overrideArtifactNameInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `packagingInput`<sup>Optional</sup> <a name="packagingInput" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.property.packagingInput"></a>

```typescript
public readonly packagingInput: string;
```

- *Type:* string

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.property.pathInput"></a>

```typescript
public readonly pathInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `artifactIdentifier`<sup>Required</sup> <a name="artifactIdentifier" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.property.artifactIdentifier"></a>

```typescript
public readonly artifactIdentifier: string;
```

- *Type:* string

---

##### `bucketOwnerAccess`<sup>Required</sup> <a name="bucketOwnerAccess" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.property.bucketOwnerAccess"></a>

```typescript
public readonly bucketOwnerAccess: string;
```

- *Type:* string

---

##### `encryptionDisabled`<sup>Required</sup> <a name="encryptionDisabled" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.property.encryptionDisabled"></a>

```typescript
public readonly encryptionDisabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `namespaceType`<sup>Required</sup> <a name="namespaceType" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.property.namespaceType"></a>

```typescript
public readonly namespaceType: string;
```

- *Type:* string

---

##### `overrideArtifactName`<sup>Required</sup> <a name="overrideArtifactName" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.property.overrideArtifactName"></a>

```typescript
public readonly overrideArtifactName: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `packaging`<sup>Required</sup> <a name="packaging" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.property.packaging"></a>

```typescript
public readonly packaging: string;
```

- *Type:* string

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondaryArtifactsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CodebuildProjectSecondaryArtifacts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondaryArtifacts">CodebuildProjectSecondaryArtifacts</a>

---


### CodebuildProjectSecondarySourcesAuthOutputReference <a name="CodebuildProjectSecondarySourcesAuthOutputReference" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesAuthOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesAuthOutputReference.Initializer"></a>

```typescript
import { codebuildProject } from '@cdktf/aws-cdk'

new codebuildProject.CodebuildProjectSecondarySourcesAuthOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesAuthOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesAuthOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesAuthOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesAuthOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesAuthOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesAuthOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesAuthOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesAuthOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesAuthOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesAuthOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesAuthOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesAuthOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesAuthOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesAuthOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesAuthOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesAuthOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesAuthOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesAuthOutputReference.resetResource">resetResource</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesAuthOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesAuthOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesAuthOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesAuthOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesAuthOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesAuthOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesAuthOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesAuthOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesAuthOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesAuthOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesAuthOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesAuthOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesAuthOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesAuthOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesAuthOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesAuthOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesAuthOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesAuthOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesAuthOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesAuthOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesAuthOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesAuthOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesAuthOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesAuthOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetResource` <a name="resetResource" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesAuthOutputReference.resetResource"></a>

```typescript
public resetResource(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesAuthOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesAuthOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesAuthOutputReference.property.resourceInput">resourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesAuthOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesAuthOutputReference.property.resource">resource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesAuthOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesAuthOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesAuth">CodebuildProjectSecondarySourcesAuth</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesAuthOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesAuthOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `resourceInput`<sup>Optional</sup> <a name="resourceInput" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesAuthOutputReference.property.resourceInput"></a>

```typescript
public readonly resourceInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesAuthOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `resource`<sup>Required</sup> <a name="resource" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesAuthOutputReference.property.resource"></a>

```typescript
public readonly resource: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesAuthOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesAuthOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CodebuildProjectSecondarySourcesAuth;
```

- *Type:* <a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesAuth">CodebuildProjectSecondarySourcesAuth</a>

---


### CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference <a name="CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference.Initializer"></a>

```typescript
import { codebuildProject } from '@cdktf/aws-cdk'

new codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference.resetContext">resetContext</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference.resetTargetUrl">resetTargetUrl</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetContext` <a name="resetContext" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference.resetContext"></a>

```typescript
public resetContext(): void
```

##### `resetTargetUrl` <a name="resetTargetUrl" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference.resetTargetUrl"></a>

```typescript
public resetTargetUrl(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference.property.contextInput">contextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference.property.targetUrlInput">targetUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference.property.context">context</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference.property.targetUrl">targetUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfig">CodebuildProjectSecondarySourcesBuildStatusConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `contextInput`<sup>Optional</sup> <a name="contextInput" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference.property.contextInput"></a>

```typescript
public readonly contextInput: string;
```

- *Type:* string

---

##### `targetUrlInput`<sup>Optional</sup> <a name="targetUrlInput" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference.property.targetUrlInput"></a>

```typescript
public readonly targetUrlInput: string;
```

- *Type:* string

---

##### `context`<sup>Required</sup> <a name="context" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference.property.context"></a>

```typescript
public readonly context: string;
```

- *Type:* string

---

##### `targetUrl`<sup>Required</sup> <a name="targetUrl" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference.property.targetUrl"></a>

```typescript
public readonly targetUrl: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CodebuildProjectSecondarySourcesBuildStatusConfig;
```

- *Type:* <a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfig">CodebuildProjectSecondarySourcesBuildStatusConfig</a>

---


### CodebuildProjectSecondarySourcesGitSubmodulesConfigOutputReference <a name="CodebuildProjectSecondarySourcesGitSubmodulesConfigOutputReference" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesGitSubmodulesConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesGitSubmodulesConfigOutputReference.Initializer"></a>

```typescript
import { codebuildProject } from '@cdktf/aws-cdk'

new codebuildProject.CodebuildProjectSecondarySourcesGitSubmodulesConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesGitSubmodulesConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesGitSubmodulesConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesGitSubmodulesConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesGitSubmodulesConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesGitSubmodulesConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesGitSubmodulesConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesGitSubmodulesConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesGitSubmodulesConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesGitSubmodulesConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesGitSubmodulesConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesGitSubmodulesConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesGitSubmodulesConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesGitSubmodulesConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesGitSubmodulesConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesGitSubmodulesConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesGitSubmodulesConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesGitSubmodulesConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesGitSubmodulesConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesGitSubmodulesConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesGitSubmodulesConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesGitSubmodulesConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesGitSubmodulesConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesGitSubmodulesConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesGitSubmodulesConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesGitSubmodulesConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesGitSubmodulesConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesGitSubmodulesConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesGitSubmodulesConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesGitSubmodulesConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesGitSubmodulesConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesGitSubmodulesConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesGitSubmodulesConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesGitSubmodulesConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesGitSubmodulesConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesGitSubmodulesConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesGitSubmodulesConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesGitSubmodulesConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesGitSubmodulesConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesGitSubmodulesConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesGitSubmodulesConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesGitSubmodulesConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesGitSubmodulesConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesGitSubmodulesConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesGitSubmodulesConfigOutputReference.property.fetchSubmodulesInput">fetchSubmodulesInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesGitSubmodulesConfigOutputReference.property.fetchSubmodules">fetchSubmodules</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesGitSubmodulesConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesGitSubmodulesConfig">CodebuildProjectSecondarySourcesGitSubmodulesConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesGitSubmodulesConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesGitSubmodulesConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fetchSubmodulesInput`<sup>Optional</sup> <a name="fetchSubmodulesInput" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesGitSubmodulesConfigOutputReference.property.fetchSubmodulesInput"></a>

```typescript
public readonly fetchSubmodulesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `fetchSubmodules`<sup>Required</sup> <a name="fetchSubmodules" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesGitSubmodulesConfigOutputReference.property.fetchSubmodules"></a>

```typescript
public readonly fetchSubmodules: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesGitSubmodulesConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CodebuildProjectSecondarySourcesGitSubmodulesConfig;
```

- *Type:* <a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesGitSubmodulesConfig">CodebuildProjectSecondarySourcesGitSubmodulesConfig</a>

---


### CodebuildProjectSecondarySourcesList <a name="CodebuildProjectSecondarySourcesList" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesList.Initializer"></a>

```typescript
import { codebuildProject } from '@cdktf/aws-cdk'

new codebuildProject.CodebuildProjectSecondarySourcesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesList.get"></a>

```typescript
public get(index: number): CodebuildProjectSecondarySourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySources">CodebuildProjectSecondarySources</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CodebuildProjectSecondarySources[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySources">CodebuildProjectSecondarySources</a>[]

---


### CodebuildProjectSecondarySourcesOutputReference <a name="CodebuildProjectSecondarySourcesOutputReference" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.Initializer"></a>

```typescript
import { codebuildProject } from '@cdktf/aws-cdk'

new codebuildProject.CodebuildProjectSecondarySourcesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.putAuth">putAuth</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.putBuildStatusConfig">putBuildStatusConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.putGitSubmodulesConfig">putGitSubmodulesConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.resetAuth">resetAuth</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.resetBuildspec">resetBuildspec</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.resetBuildStatusConfig">resetBuildStatusConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.resetGitCloneDepth">resetGitCloneDepth</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.resetGitSubmodulesConfig">resetGitSubmodulesConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.resetInsecureSsl">resetInsecureSsl</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.resetReportBuildStatus">resetReportBuildStatus</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAuth` <a name="putAuth" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.putAuth"></a>

```typescript
public putAuth(value: CodebuildProjectSecondarySourcesAuth): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.putAuth.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesAuth">CodebuildProjectSecondarySourcesAuth</a>

---

##### `putBuildStatusConfig` <a name="putBuildStatusConfig" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.putBuildStatusConfig"></a>

```typescript
public putBuildStatusConfig(value: CodebuildProjectSecondarySourcesBuildStatusConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.putBuildStatusConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfig">CodebuildProjectSecondarySourcesBuildStatusConfig</a>

---

##### `putGitSubmodulesConfig` <a name="putGitSubmodulesConfig" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.putGitSubmodulesConfig"></a>

```typescript
public putGitSubmodulesConfig(value: CodebuildProjectSecondarySourcesGitSubmodulesConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.putGitSubmodulesConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesGitSubmodulesConfig">CodebuildProjectSecondarySourcesGitSubmodulesConfig</a>

---

##### `resetAuth` <a name="resetAuth" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.resetAuth"></a>

```typescript
public resetAuth(): void
```

##### `resetBuildspec` <a name="resetBuildspec" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.resetBuildspec"></a>

```typescript
public resetBuildspec(): void
```

##### `resetBuildStatusConfig` <a name="resetBuildStatusConfig" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.resetBuildStatusConfig"></a>

```typescript
public resetBuildStatusConfig(): void
```

##### `resetGitCloneDepth` <a name="resetGitCloneDepth" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.resetGitCloneDepth"></a>

```typescript
public resetGitCloneDepth(): void
```

##### `resetGitSubmodulesConfig` <a name="resetGitSubmodulesConfig" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.resetGitSubmodulesConfig"></a>

```typescript
public resetGitSubmodulesConfig(): void
```

##### `resetInsecureSsl` <a name="resetInsecureSsl" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.resetInsecureSsl"></a>

```typescript
public resetInsecureSsl(): void
```

##### `resetLocation` <a name="resetLocation" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.resetLocation"></a>

```typescript
public resetLocation(): void
```

##### `resetReportBuildStatus` <a name="resetReportBuildStatus" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.resetReportBuildStatus"></a>

```typescript
public resetReportBuildStatus(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.property.auth">auth</a></code> | <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesAuthOutputReference">CodebuildProjectSecondarySourcesAuthOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.property.buildStatusConfig">buildStatusConfig</a></code> | <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference">CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.property.gitSubmodulesConfig">gitSubmodulesConfig</a></code> | <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesGitSubmodulesConfigOutputReference">CodebuildProjectSecondarySourcesGitSubmodulesConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.property.authInput">authInput</a></code> | <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesAuth">CodebuildProjectSecondarySourcesAuth</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.property.buildspecInput">buildspecInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.property.buildStatusConfigInput">buildStatusConfigInput</a></code> | <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfig">CodebuildProjectSecondarySourcesBuildStatusConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.property.gitCloneDepthInput">gitCloneDepthInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.property.gitSubmodulesConfigInput">gitSubmodulesConfigInput</a></code> | <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesGitSubmodulesConfig">CodebuildProjectSecondarySourcesGitSubmodulesConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.property.insecureSslInput">insecureSslInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.property.reportBuildStatusInput">reportBuildStatusInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.property.sourceIdentifierInput">sourceIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.property.buildspec">buildspec</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.property.gitCloneDepth">gitCloneDepth</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.property.insecureSsl">insecureSsl</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.property.reportBuildStatus">reportBuildStatus</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.property.sourceIdentifier">sourceIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySources">CodebuildProjectSecondarySources</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `auth`<sup>Required</sup> <a name="auth" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.property.auth"></a>

```typescript
public readonly auth: CodebuildProjectSecondarySourcesAuthOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesAuthOutputReference">CodebuildProjectSecondarySourcesAuthOutputReference</a>

---

##### `buildStatusConfig`<sup>Required</sup> <a name="buildStatusConfig" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.property.buildStatusConfig"></a>

```typescript
public readonly buildStatusConfig: CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference">CodebuildProjectSecondarySourcesBuildStatusConfigOutputReference</a>

---

##### `gitSubmodulesConfig`<sup>Required</sup> <a name="gitSubmodulesConfig" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.property.gitSubmodulesConfig"></a>

```typescript
public readonly gitSubmodulesConfig: CodebuildProjectSecondarySourcesGitSubmodulesConfigOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesGitSubmodulesConfigOutputReference">CodebuildProjectSecondarySourcesGitSubmodulesConfigOutputReference</a>

---

##### `authInput`<sup>Optional</sup> <a name="authInput" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.property.authInput"></a>

```typescript
public readonly authInput: CodebuildProjectSecondarySourcesAuth;
```

- *Type:* <a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesAuth">CodebuildProjectSecondarySourcesAuth</a>

---

##### `buildspecInput`<sup>Optional</sup> <a name="buildspecInput" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.property.buildspecInput"></a>

```typescript
public readonly buildspecInput: string;
```

- *Type:* string

---

##### `buildStatusConfigInput`<sup>Optional</sup> <a name="buildStatusConfigInput" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.property.buildStatusConfigInput"></a>

```typescript
public readonly buildStatusConfigInput: CodebuildProjectSecondarySourcesBuildStatusConfig;
```

- *Type:* <a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesBuildStatusConfig">CodebuildProjectSecondarySourcesBuildStatusConfig</a>

---

##### `gitCloneDepthInput`<sup>Optional</sup> <a name="gitCloneDepthInput" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.property.gitCloneDepthInput"></a>

```typescript
public readonly gitCloneDepthInput: number;
```

- *Type:* number

---

##### `gitSubmodulesConfigInput`<sup>Optional</sup> <a name="gitSubmodulesConfigInput" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.property.gitSubmodulesConfigInput"></a>

```typescript
public readonly gitSubmodulesConfigInput: CodebuildProjectSecondarySourcesGitSubmodulesConfig;
```

- *Type:* <a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesGitSubmodulesConfig">CodebuildProjectSecondarySourcesGitSubmodulesConfig</a>

---

##### `insecureSslInput`<sup>Optional</sup> <a name="insecureSslInput" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.property.insecureSslInput"></a>

```typescript
public readonly insecureSslInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `reportBuildStatusInput`<sup>Optional</sup> <a name="reportBuildStatusInput" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.property.reportBuildStatusInput"></a>

```typescript
public readonly reportBuildStatusInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `sourceIdentifierInput`<sup>Optional</sup> <a name="sourceIdentifierInput" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.property.sourceIdentifierInput"></a>

```typescript
public readonly sourceIdentifierInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `buildspec`<sup>Required</sup> <a name="buildspec" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.property.buildspec"></a>

```typescript
public readonly buildspec: string;
```

- *Type:* string

---

##### `gitCloneDepth`<sup>Required</sup> <a name="gitCloneDepth" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.property.gitCloneDepth"></a>

```typescript
public readonly gitCloneDepth: number;
```

- *Type:* number

---

##### `insecureSsl`<sup>Required</sup> <a name="insecureSsl" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.property.insecureSsl"></a>

```typescript
public readonly insecureSsl: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `reportBuildStatus`<sup>Required</sup> <a name="reportBuildStatus" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.property.reportBuildStatus"></a>

```typescript
public readonly reportBuildStatus: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `sourceIdentifier`<sup>Required</sup> <a name="sourceIdentifier" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.property.sourceIdentifier"></a>

```typescript
public readonly sourceIdentifier: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourcesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CodebuildProjectSecondarySources;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySources">CodebuildProjectSecondarySources</a>

---


### CodebuildProjectSecondarySourceVersionList <a name="CodebuildProjectSecondarySourceVersionList" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourceVersionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourceVersionList.Initializer"></a>

```typescript
import { codebuildProject } from '@cdktf/aws-cdk'

new codebuildProject.CodebuildProjectSecondarySourceVersionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourceVersionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourceVersionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourceVersionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourceVersionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourceVersionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourceVersionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourceVersionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourceVersionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourceVersionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourceVersionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourceVersionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourceVersionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourceVersionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourceVersionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourceVersionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourceVersionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourceVersionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourceVersionList.get"></a>

```typescript
public get(index: number): CodebuildProjectSecondarySourceVersionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourceVersionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourceVersionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourceVersionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourceVersionList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourceVersion">CodebuildProjectSecondarySourceVersion</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourceVersionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourceVersionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourceVersionList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CodebuildProjectSecondarySourceVersion[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourceVersion">CodebuildProjectSecondarySourceVersion</a>[]

---


### CodebuildProjectSecondarySourceVersionOutputReference <a name="CodebuildProjectSecondarySourceVersionOutputReference" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourceVersionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourceVersionOutputReference.Initializer"></a>

```typescript
import { codebuildProject } from '@cdktf/aws-cdk'

new codebuildProject.CodebuildProjectSecondarySourceVersionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourceVersionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourceVersionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourceVersionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourceVersionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourceVersionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourceVersionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourceVersionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourceVersionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourceVersionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourceVersionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourceVersionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourceVersionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourceVersionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourceVersionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourceVersionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourceVersionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourceVersionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourceVersionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourceVersionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourceVersionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourceVersionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourceVersionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourceVersionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourceVersionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourceVersionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourceVersionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourceVersionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourceVersionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourceVersionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourceVersionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourceVersionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourceVersionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourceVersionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourceVersionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourceVersionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourceVersionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourceVersionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourceVersionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourceVersionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourceVersionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourceVersionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourceVersionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourceVersionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourceVersionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourceVersionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourceVersionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourceVersionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourceVersionOutputReference.property.sourceIdentifierInput">sourceIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourceVersionOutputReference.property.sourceVersionInput">sourceVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourceVersionOutputReference.property.sourceIdentifier">sourceIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourceVersionOutputReference.property.sourceVersion">sourceVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourceVersionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourceVersion">CodebuildProjectSecondarySourceVersion</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourceVersionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourceVersionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `sourceIdentifierInput`<sup>Optional</sup> <a name="sourceIdentifierInput" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourceVersionOutputReference.property.sourceIdentifierInput"></a>

```typescript
public readonly sourceIdentifierInput: string;
```

- *Type:* string

---

##### `sourceVersionInput`<sup>Optional</sup> <a name="sourceVersionInput" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourceVersionOutputReference.property.sourceVersionInput"></a>

```typescript
public readonly sourceVersionInput: string;
```

- *Type:* string

---

##### `sourceIdentifier`<sup>Required</sup> <a name="sourceIdentifier" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourceVersionOutputReference.property.sourceIdentifier"></a>

```typescript
public readonly sourceIdentifier: string;
```

- *Type:* string

---

##### `sourceVersion`<sup>Required</sup> <a name="sourceVersion" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourceVersionOutputReference.property.sourceVersion"></a>

```typescript
public readonly sourceVersion: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourceVersionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CodebuildProjectSecondarySourceVersion;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSecondarySourceVersion">CodebuildProjectSecondarySourceVersion</a>

---


### CodebuildProjectSourceAuthOutputReference <a name="CodebuildProjectSourceAuthOutputReference" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceAuthOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceAuthOutputReference.Initializer"></a>

```typescript
import { codebuildProject } from '@cdktf/aws-cdk'

new codebuildProject.CodebuildProjectSourceAuthOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceAuthOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceAuthOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceAuthOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceAuthOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceAuthOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceAuthOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceAuthOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceAuthOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceAuthOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceAuthOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceAuthOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceAuthOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceAuthOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceAuthOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceAuthOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceAuthOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceAuthOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceAuthOutputReference.resetResource">resetResource</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceAuthOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceAuthOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceAuthOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceAuthOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceAuthOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceAuthOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceAuthOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceAuthOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceAuthOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceAuthOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceAuthOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceAuthOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceAuthOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceAuthOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceAuthOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceAuthOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceAuthOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceAuthOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceAuthOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceAuthOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceAuthOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceAuthOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceAuthOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceAuthOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetResource` <a name="resetResource" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceAuthOutputReference.resetResource"></a>

```typescript
public resetResource(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceAuthOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceAuthOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceAuthOutputReference.property.resourceInput">resourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceAuthOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceAuthOutputReference.property.resource">resource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceAuthOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceAuthOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceAuth">CodebuildProjectSourceAuth</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceAuthOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceAuthOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `resourceInput`<sup>Optional</sup> <a name="resourceInput" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceAuthOutputReference.property.resourceInput"></a>

```typescript
public readonly resourceInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceAuthOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `resource`<sup>Required</sup> <a name="resource" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceAuthOutputReference.property.resource"></a>

```typescript
public readonly resource: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceAuthOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceAuthOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CodebuildProjectSourceAuth;
```

- *Type:* <a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceAuth">CodebuildProjectSourceAuth</a>

---


### CodebuildProjectSourceBuildStatusConfigOutputReference <a name="CodebuildProjectSourceBuildStatusConfigOutputReference" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceBuildStatusConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceBuildStatusConfigOutputReference.Initializer"></a>

```typescript
import { codebuildProject } from '@cdktf/aws-cdk'

new codebuildProject.CodebuildProjectSourceBuildStatusConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceBuildStatusConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceBuildStatusConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceBuildStatusConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceBuildStatusConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceBuildStatusConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceBuildStatusConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceBuildStatusConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceBuildStatusConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceBuildStatusConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceBuildStatusConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceBuildStatusConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceBuildStatusConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceBuildStatusConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceBuildStatusConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceBuildStatusConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceBuildStatusConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceBuildStatusConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceBuildStatusConfigOutputReference.resetContext">resetContext</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceBuildStatusConfigOutputReference.resetTargetUrl">resetTargetUrl</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceBuildStatusConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceBuildStatusConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceBuildStatusConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceBuildStatusConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceBuildStatusConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceBuildStatusConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceBuildStatusConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceBuildStatusConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceBuildStatusConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceBuildStatusConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceBuildStatusConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceBuildStatusConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceBuildStatusConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceBuildStatusConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceBuildStatusConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceBuildStatusConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceBuildStatusConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceBuildStatusConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceBuildStatusConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceBuildStatusConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceBuildStatusConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceBuildStatusConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceBuildStatusConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceBuildStatusConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetContext` <a name="resetContext" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceBuildStatusConfigOutputReference.resetContext"></a>

```typescript
public resetContext(): void
```

##### `resetTargetUrl` <a name="resetTargetUrl" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceBuildStatusConfigOutputReference.resetTargetUrl"></a>

```typescript
public resetTargetUrl(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceBuildStatusConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceBuildStatusConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceBuildStatusConfigOutputReference.property.contextInput">contextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceBuildStatusConfigOutputReference.property.targetUrlInput">targetUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceBuildStatusConfigOutputReference.property.context">context</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceBuildStatusConfigOutputReference.property.targetUrl">targetUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceBuildStatusConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceBuildStatusConfig">CodebuildProjectSourceBuildStatusConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceBuildStatusConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceBuildStatusConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `contextInput`<sup>Optional</sup> <a name="contextInput" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceBuildStatusConfigOutputReference.property.contextInput"></a>

```typescript
public readonly contextInput: string;
```

- *Type:* string

---

##### `targetUrlInput`<sup>Optional</sup> <a name="targetUrlInput" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceBuildStatusConfigOutputReference.property.targetUrlInput"></a>

```typescript
public readonly targetUrlInput: string;
```

- *Type:* string

---

##### `context`<sup>Required</sup> <a name="context" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceBuildStatusConfigOutputReference.property.context"></a>

```typescript
public readonly context: string;
```

- *Type:* string

---

##### `targetUrl`<sup>Required</sup> <a name="targetUrl" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceBuildStatusConfigOutputReference.property.targetUrl"></a>

```typescript
public readonly targetUrl: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceBuildStatusConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CodebuildProjectSourceBuildStatusConfig;
```

- *Type:* <a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceBuildStatusConfig">CodebuildProjectSourceBuildStatusConfig</a>

---


### CodebuildProjectSourceGitSubmodulesConfigOutputReference <a name="CodebuildProjectSourceGitSubmodulesConfigOutputReference" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceGitSubmodulesConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceGitSubmodulesConfigOutputReference.Initializer"></a>

```typescript
import { codebuildProject } from '@cdktf/aws-cdk'

new codebuildProject.CodebuildProjectSourceGitSubmodulesConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceGitSubmodulesConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceGitSubmodulesConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceGitSubmodulesConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceGitSubmodulesConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceGitSubmodulesConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceGitSubmodulesConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceGitSubmodulesConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceGitSubmodulesConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceGitSubmodulesConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceGitSubmodulesConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceGitSubmodulesConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceGitSubmodulesConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceGitSubmodulesConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceGitSubmodulesConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceGitSubmodulesConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceGitSubmodulesConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceGitSubmodulesConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceGitSubmodulesConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceGitSubmodulesConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceGitSubmodulesConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceGitSubmodulesConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceGitSubmodulesConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceGitSubmodulesConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceGitSubmodulesConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceGitSubmodulesConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceGitSubmodulesConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceGitSubmodulesConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceGitSubmodulesConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceGitSubmodulesConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceGitSubmodulesConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceGitSubmodulesConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceGitSubmodulesConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceGitSubmodulesConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceGitSubmodulesConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceGitSubmodulesConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceGitSubmodulesConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceGitSubmodulesConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceGitSubmodulesConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceGitSubmodulesConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceGitSubmodulesConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceGitSubmodulesConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceGitSubmodulesConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceGitSubmodulesConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceGitSubmodulesConfigOutputReference.property.fetchSubmodulesInput">fetchSubmodulesInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceGitSubmodulesConfigOutputReference.property.fetchSubmodules">fetchSubmodules</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceGitSubmodulesConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceGitSubmodulesConfig">CodebuildProjectSourceGitSubmodulesConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceGitSubmodulesConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceGitSubmodulesConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fetchSubmodulesInput`<sup>Optional</sup> <a name="fetchSubmodulesInput" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceGitSubmodulesConfigOutputReference.property.fetchSubmodulesInput"></a>

```typescript
public readonly fetchSubmodulesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `fetchSubmodules`<sup>Required</sup> <a name="fetchSubmodules" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceGitSubmodulesConfigOutputReference.property.fetchSubmodules"></a>

```typescript
public readonly fetchSubmodules: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceGitSubmodulesConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CodebuildProjectSourceGitSubmodulesConfig;
```

- *Type:* <a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceGitSubmodulesConfig">CodebuildProjectSourceGitSubmodulesConfig</a>

---


### CodebuildProjectSourceOutputReference <a name="CodebuildProjectSourceOutputReference" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceOutputReference.Initializer"></a>

```typescript
import { codebuildProject } from '@cdktf/aws-cdk'

new codebuildProject.CodebuildProjectSourceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceOutputReference.putAuth">putAuth</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceOutputReference.putBuildStatusConfig">putBuildStatusConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceOutputReference.putGitSubmodulesConfig">putGitSubmodulesConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceOutputReference.resetAuth">resetAuth</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceOutputReference.resetBuildspec">resetBuildspec</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceOutputReference.resetBuildStatusConfig">resetBuildStatusConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceOutputReference.resetGitCloneDepth">resetGitCloneDepth</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceOutputReference.resetGitSubmodulesConfig">resetGitSubmodulesConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceOutputReference.resetInsecureSsl">resetInsecureSsl</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceOutputReference.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceOutputReference.resetReportBuildStatus">resetReportBuildStatus</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAuth` <a name="putAuth" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceOutputReference.putAuth"></a>

```typescript
public putAuth(value: CodebuildProjectSourceAuth): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceOutputReference.putAuth.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceAuth">CodebuildProjectSourceAuth</a>

---

##### `putBuildStatusConfig` <a name="putBuildStatusConfig" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceOutputReference.putBuildStatusConfig"></a>

```typescript
public putBuildStatusConfig(value: CodebuildProjectSourceBuildStatusConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceOutputReference.putBuildStatusConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceBuildStatusConfig">CodebuildProjectSourceBuildStatusConfig</a>

---

##### `putGitSubmodulesConfig` <a name="putGitSubmodulesConfig" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceOutputReference.putGitSubmodulesConfig"></a>

```typescript
public putGitSubmodulesConfig(value: CodebuildProjectSourceGitSubmodulesConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceOutputReference.putGitSubmodulesConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceGitSubmodulesConfig">CodebuildProjectSourceGitSubmodulesConfig</a>

---

##### `resetAuth` <a name="resetAuth" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceOutputReference.resetAuth"></a>

```typescript
public resetAuth(): void
```

##### `resetBuildspec` <a name="resetBuildspec" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceOutputReference.resetBuildspec"></a>

```typescript
public resetBuildspec(): void
```

##### `resetBuildStatusConfig` <a name="resetBuildStatusConfig" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceOutputReference.resetBuildStatusConfig"></a>

```typescript
public resetBuildStatusConfig(): void
```

##### `resetGitCloneDepth` <a name="resetGitCloneDepth" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceOutputReference.resetGitCloneDepth"></a>

```typescript
public resetGitCloneDepth(): void
```

##### `resetGitSubmodulesConfig` <a name="resetGitSubmodulesConfig" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceOutputReference.resetGitSubmodulesConfig"></a>

```typescript
public resetGitSubmodulesConfig(): void
```

##### `resetInsecureSsl` <a name="resetInsecureSsl" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceOutputReference.resetInsecureSsl"></a>

```typescript
public resetInsecureSsl(): void
```

##### `resetLocation` <a name="resetLocation" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceOutputReference.resetLocation"></a>

```typescript
public resetLocation(): void
```

##### `resetReportBuildStatus` <a name="resetReportBuildStatus" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceOutputReference.resetReportBuildStatus"></a>

```typescript
public resetReportBuildStatus(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceOutputReference.property.auth">auth</a></code> | <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceAuthOutputReference">CodebuildProjectSourceAuthOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceOutputReference.property.buildStatusConfig">buildStatusConfig</a></code> | <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceBuildStatusConfigOutputReference">CodebuildProjectSourceBuildStatusConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceOutputReference.property.gitSubmodulesConfig">gitSubmodulesConfig</a></code> | <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceGitSubmodulesConfigOutputReference">CodebuildProjectSourceGitSubmodulesConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceOutputReference.property.authInput">authInput</a></code> | <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceAuth">CodebuildProjectSourceAuth</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceOutputReference.property.buildspecInput">buildspecInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceOutputReference.property.buildStatusConfigInput">buildStatusConfigInput</a></code> | <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceBuildStatusConfig">CodebuildProjectSourceBuildStatusConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceOutputReference.property.gitCloneDepthInput">gitCloneDepthInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceOutputReference.property.gitSubmodulesConfigInput">gitSubmodulesConfigInput</a></code> | <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceGitSubmodulesConfig">CodebuildProjectSourceGitSubmodulesConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceOutputReference.property.insecureSslInput">insecureSslInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceOutputReference.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceOutputReference.property.reportBuildStatusInput">reportBuildStatusInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceOutputReference.property.buildspec">buildspec</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceOutputReference.property.gitCloneDepth">gitCloneDepth</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceOutputReference.property.insecureSsl">insecureSsl</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceOutputReference.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceOutputReference.property.reportBuildStatus">reportBuildStatus</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSource">CodebuildProjectSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `auth`<sup>Required</sup> <a name="auth" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceOutputReference.property.auth"></a>

```typescript
public readonly auth: CodebuildProjectSourceAuthOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceAuthOutputReference">CodebuildProjectSourceAuthOutputReference</a>

---

##### `buildStatusConfig`<sup>Required</sup> <a name="buildStatusConfig" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceOutputReference.property.buildStatusConfig"></a>

```typescript
public readonly buildStatusConfig: CodebuildProjectSourceBuildStatusConfigOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceBuildStatusConfigOutputReference">CodebuildProjectSourceBuildStatusConfigOutputReference</a>

---

##### `gitSubmodulesConfig`<sup>Required</sup> <a name="gitSubmodulesConfig" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceOutputReference.property.gitSubmodulesConfig"></a>

```typescript
public readonly gitSubmodulesConfig: CodebuildProjectSourceGitSubmodulesConfigOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceGitSubmodulesConfigOutputReference">CodebuildProjectSourceGitSubmodulesConfigOutputReference</a>

---

##### `authInput`<sup>Optional</sup> <a name="authInput" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceOutputReference.property.authInput"></a>

```typescript
public readonly authInput: CodebuildProjectSourceAuth;
```

- *Type:* <a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceAuth">CodebuildProjectSourceAuth</a>

---

##### `buildspecInput`<sup>Optional</sup> <a name="buildspecInput" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceOutputReference.property.buildspecInput"></a>

```typescript
public readonly buildspecInput: string;
```

- *Type:* string

---

##### `buildStatusConfigInput`<sup>Optional</sup> <a name="buildStatusConfigInput" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceOutputReference.property.buildStatusConfigInput"></a>

```typescript
public readonly buildStatusConfigInput: CodebuildProjectSourceBuildStatusConfig;
```

- *Type:* <a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceBuildStatusConfig">CodebuildProjectSourceBuildStatusConfig</a>

---

##### `gitCloneDepthInput`<sup>Optional</sup> <a name="gitCloneDepthInput" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceOutputReference.property.gitCloneDepthInput"></a>

```typescript
public readonly gitCloneDepthInput: number;
```

- *Type:* number

---

##### `gitSubmodulesConfigInput`<sup>Optional</sup> <a name="gitSubmodulesConfigInput" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceOutputReference.property.gitSubmodulesConfigInput"></a>

```typescript
public readonly gitSubmodulesConfigInput: CodebuildProjectSourceGitSubmodulesConfig;
```

- *Type:* <a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceGitSubmodulesConfig">CodebuildProjectSourceGitSubmodulesConfig</a>

---

##### `insecureSslInput`<sup>Optional</sup> <a name="insecureSslInput" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceOutputReference.property.insecureSslInput"></a>

```typescript
public readonly insecureSslInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceOutputReference.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `reportBuildStatusInput`<sup>Optional</sup> <a name="reportBuildStatusInput" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceOutputReference.property.reportBuildStatusInput"></a>

```typescript
public readonly reportBuildStatusInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `buildspec`<sup>Required</sup> <a name="buildspec" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceOutputReference.property.buildspec"></a>

```typescript
public readonly buildspec: string;
```

- *Type:* string

---

##### `gitCloneDepth`<sup>Required</sup> <a name="gitCloneDepth" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceOutputReference.property.gitCloneDepth"></a>

```typescript
public readonly gitCloneDepth: number;
```

- *Type:* number

---

##### `insecureSsl`<sup>Required</sup> <a name="insecureSsl" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceOutputReference.property.insecureSsl"></a>

```typescript
public readonly insecureSsl: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceOutputReference.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `reportBuildStatus`<sup>Required</sup> <a name="reportBuildStatus" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceOutputReference.property.reportBuildStatus"></a>

```typescript
public readonly reportBuildStatus: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectSourceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CodebuildProjectSource;
```

- *Type:* <a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectSource">CodebuildProjectSource</a>

---


### CodebuildProjectVpcConfigOutputReference <a name="CodebuildProjectVpcConfigOutputReference" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectVpcConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectVpcConfigOutputReference.Initializer"></a>

```typescript
import { codebuildProject } from '@cdktf/aws-cdk'

new codebuildProject.CodebuildProjectVpcConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectVpcConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectVpcConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectVpcConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectVpcConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectVpcConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectVpcConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectVpcConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectVpcConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectVpcConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectVpcConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectVpcConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectVpcConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectVpcConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectVpcConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectVpcConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectVpcConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectVpcConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectVpcConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectVpcConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectVpcConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectVpcConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectVpcConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectVpcConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectVpcConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectVpcConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectVpcConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectVpcConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectVpcConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectVpcConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectVpcConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectVpcConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectVpcConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectVpcConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectVpcConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectVpcConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectVpcConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectVpcConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectVpcConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectVpcConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectVpcConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectVpcConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectVpcConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectVpcConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectVpcConfigOutputReference.property.securityGroupIdsInput">securityGroupIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectVpcConfigOutputReference.property.subnetsInput">subnetsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectVpcConfigOutputReference.property.vpcIdInput">vpcIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectVpcConfigOutputReference.property.securityGroupIds">securityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectVpcConfigOutputReference.property.subnets">subnets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectVpcConfigOutputReference.property.vpcId">vpcId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectVpcConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectVpcConfig">CodebuildProjectVpcConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectVpcConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectVpcConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `securityGroupIdsInput`<sup>Optional</sup> <a name="securityGroupIdsInput" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectVpcConfigOutputReference.property.securityGroupIdsInput"></a>

```typescript
public readonly securityGroupIdsInput: string[];
```

- *Type:* string[]

---

##### `subnetsInput`<sup>Optional</sup> <a name="subnetsInput" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectVpcConfigOutputReference.property.subnetsInput"></a>

```typescript
public readonly subnetsInput: string[];
```

- *Type:* string[]

---

##### `vpcIdInput`<sup>Optional</sup> <a name="vpcIdInput" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectVpcConfigOutputReference.property.vpcIdInput"></a>

```typescript
public readonly vpcIdInput: string;
```

- *Type:* string

---

##### `securityGroupIds`<sup>Required</sup> <a name="securityGroupIds" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectVpcConfigOutputReference.property.securityGroupIds"></a>

```typescript
public readonly securityGroupIds: string[];
```

- *Type:* string[]

---

##### `subnets`<sup>Required</sup> <a name="subnets" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectVpcConfigOutputReference.property.subnets"></a>

```typescript
public readonly subnets: string[];
```

- *Type:* string[]

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectVpcConfigOutputReference.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.codebuildProject.CodebuildProjectVpcConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CodebuildProjectVpcConfig;
```

- *Type:* <a href="#@cdktf/aws-cdk.codebuildProject.CodebuildProjectVpcConfig">CodebuildProjectVpcConfig</a>

---



