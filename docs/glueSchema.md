# `aws_glue_schema`

Refer to the Terraform Registory for docs: [`aws_glue_schema`](https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/glue_schema).

# `glueSchema` Submodule <a name="`glueSchema` Submodule" id="@cdktf/aws-cdk.glueSchema"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GlueSchema <a name="GlueSchema" id="@cdktf/aws-cdk.glueSchema.GlueSchema"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/glue_schema aws_glue_schema}.

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.glueSchema.GlueSchema.Initializer"></a>

```typescript
import { glueSchema } from '@cdktf/aws-cdk'

new glueSchema.GlueSchema(scope: Construct, id: string, config: GlueSchemaConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.glueSchema.GlueSchema.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/aws-cdk.glueSchema.GlueSchema.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/aws-cdk.glueSchema.GlueSchema.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/aws-cdk.glueSchema.GlueSchemaConfig">GlueSchemaConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.glueSchema.GlueSchema.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.glueSchema.GlueSchema.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/aws-cdk.glueSchema.GlueSchema.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/aws-cdk.glueSchema.GlueSchemaConfig">GlueSchemaConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.glueSchema.GlueSchema.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/aws-cdk.glueSchema.GlueSchema.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueSchema.GlueSchema.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/aws-cdk.glueSchema.GlueSchema.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/aws-cdk.glueSchema.GlueSchema.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueSchema.GlueSchema.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/aws-cdk.glueSchema.GlueSchema.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueSchema.GlueSchema.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueSchema.GlueSchema.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueSchema.GlueSchema.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueSchema.GlueSchema.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueSchema.GlueSchema.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueSchema.GlueSchema.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueSchema.GlueSchema.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueSchema.GlueSchema.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueSchema.GlueSchema.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueSchema.GlueSchema.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueSchema.GlueSchema.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueSchema.GlueSchema.resetRegistryArn">resetRegistryArn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueSchema.GlueSchema.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueSchema.GlueSchema.resetTagsAll">resetTagsAll</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.glueSchema.GlueSchema.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/aws-cdk.glueSchema.GlueSchema.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/aws-cdk.glueSchema.GlueSchema.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.glueSchema.GlueSchema.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/aws-cdk.glueSchema.GlueSchema.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/aws-cdk.glueSchema.GlueSchema.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/aws-cdk.glueSchema.GlueSchema.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/aws-cdk.glueSchema.GlueSchema.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/aws-cdk.glueSchema.GlueSchema.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.glueSchema.GlueSchema.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.glueSchema.GlueSchema.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.glueSchema.GlueSchema.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.glueSchema.GlueSchema.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.glueSchema.GlueSchema.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.glueSchema.GlueSchema.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.glueSchema.GlueSchema.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.glueSchema.GlueSchema.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.glueSchema.GlueSchema.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.glueSchema.GlueSchema.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.glueSchema.GlueSchema.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.glueSchema.GlueSchema.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.glueSchema.GlueSchema.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.glueSchema.GlueSchema.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.glueSchema.GlueSchema.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.glueSchema.GlueSchema.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.glueSchema.GlueSchema.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.glueSchema.GlueSchema.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.glueSchema.GlueSchema.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.glueSchema.GlueSchema.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/aws-cdk.glueSchema.GlueSchema.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/aws-cdk.glueSchema.GlueSchema.resetId"></a>

```typescript
public resetId(): void
```

##### `resetRegistryArn` <a name="resetRegistryArn" id="@cdktf/aws-cdk.glueSchema.GlueSchema.resetRegistryArn"></a>

```typescript
public resetRegistryArn(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/aws-cdk.glueSchema.GlueSchema.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/aws-cdk.glueSchema.GlueSchema.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.glueSchema.GlueSchema.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/aws-cdk.glueSchema.GlueSchema.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueSchema.GlueSchema.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@cdktf/aws-cdk.glueSchema.GlueSchema.isConstruct"></a>

```typescript
import { glueSchema } from '@cdktf/aws-cdk'

glueSchema.GlueSchema.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.glueSchema.GlueSchema.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/aws-cdk.glueSchema.GlueSchema.isTerraformElement"></a>

```typescript
import { glueSchema } from '@cdktf/aws-cdk'

glueSchema.GlueSchema.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.glueSchema.GlueSchema.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/aws-cdk.glueSchema.GlueSchema.isTerraformResource"></a>

```typescript
import { glueSchema } from '@cdktf/aws-cdk'

glueSchema.GlueSchema.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.glueSchema.GlueSchema.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.glueSchema.GlueSchema.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/aws-cdk.glueSchema.GlueSchema.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueSchema.GlueSchema.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueSchema.GlueSchema.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueSchema.GlueSchema.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueSchema.GlueSchema.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueSchema.GlueSchema.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueSchema.GlueSchema.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueSchema.GlueSchema.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueSchema.GlueSchema.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueSchema.GlueSchema.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueSchema.GlueSchema.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueSchema.GlueSchema.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueSchema.GlueSchema.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueSchema.GlueSchema.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueSchema.GlueSchema.property.latestSchemaVersion">latestSchemaVersion</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueSchema.GlueSchema.property.nextSchemaVersion">nextSchemaVersion</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueSchema.GlueSchema.property.registryName">registryName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueSchema.GlueSchema.property.schemaCheckpoint">schemaCheckpoint</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueSchema.GlueSchema.property.compatibilityInput">compatibilityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueSchema.GlueSchema.property.dataFormatInput">dataFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueSchema.GlueSchema.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueSchema.GlueSchema.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueSchema.GlueSchema.property.registryArnInput">registryArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueSchema.GlueSchema.property.schemaDefinitionInput">schemaDefinitionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueSchema.GlueSchema.property.schemaNameInput">schemaNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueSchema.GlueSchema.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueSchema.GlueSchema.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueSchema.GlueSchema.property.compatibility">compatibility</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueSchema.GlueSchema.property.dataFormat">dataFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueSchema.GlueSchema.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueSchema.GlueSchema.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueSchema.GlueSchema.property.registryArn">registryArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueSchema.GlueSchema.property.schemaDefinition">schemaDefinition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueSchema.GlueSchema.property.schemaName">schemaName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueSchema.GlueSchema.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueSchema.GlueSchema.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/aws-cdk.glueSchema.GlueSchema.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/aws-cdk.glueSchema.GlueSchema.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.glueSchema.GlueSchema.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/aws-cdk.glueSchema.GlueSchema.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/aws-cdk.glueSchema.GlueSchema.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/aws-cdk.glueSchema.GlueSchema.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/aws-cdk.glueSchema.GlueSchema.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.glueSchema.GlueSchema.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.glueSchema.GlueSchema.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.glueSchema.GlueSchema.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.glueSchema.GlueSchema.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.glueSchema.GlueSchema.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.glueSchema.GlueSchema.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.glueSchema.GlueSchema.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/aws-cdk.glueSchema.GlueSchema.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `latestSchemaVersion`<sup>Required</sup> <a name="latestSchemaVersion" id="@cdktf/aws-cdk.glueSchema.GlueSchema.property.latestSchemaVersion"></a>

```typescript
public readonly latestSchemaVersion: number;
```

- *Type:* number

---

##### `nextSchemaVersion`<sup>Required</sup> <a name="nextSchemaVersion" id="@cdktf/aws-cdk.glueSchema.GlueSchema.property.nextSchemaVersion"></a>

```typescript
public readonly nextSchemaVersion: number;
```

- *Type:* number

---

##### `registryName`<sup>Required</sup> <a name="registryName" id="@cdktf/aws-cdk.glueSchema.GlueSchema.property.registryName"></a>

```typescript
public readonly registryName: string;
```

- *Type:* string

---

##### `schemaCheckpoint`<sup>Required</sup> <a name="schemaCheckpoint" id="@cdktf/aws-cdk.glueSchema.GlueSchema.property.schemaCheckpoint"></a>

```typescript
public readonly schemaCheckpoint: number;
```

- *Type:* number

---

##### `compatibilityInput`<sup>Optional</sup> <a name="compatibilityInput" id="@cdktf/aws-cdk.glueSchema.GlueSchema.property.compatibilityInput"></a>

```typescript
public readonly compatibilityInput: string;
```

- *Type:* string

---

##### `dataFormatInput`<sup>Optional</sup> <a name="dataFormatInput" id="@cdktf/aws-cdk.glueSchema.GlueSchema.property.dataFormatInput"></a>

```typescript
public readonly dataFormatInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/aws-cdk.glueSchema.GlueSchema.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/aws-cdk.glueSchema.GlueSchema.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `registryArnInput`<sup>Optional</sup> <a name="registryArnInput" id="@cdktf/aws-cdk.glueSchema.GlueSchema.property.registryArnInput"></a>

```typescript
public readonly registryArnInput: string;
```

- *Type:* string

---

##### `schemaDefinitionInput`<sup>Optional</sup> <a name="schemaDefinitionInput" id="@cdktf/aws-cdk.glueSchema.GlueSchema.property.schemaDefinitionInput"></a>

```typescript
public readonly schemaDefinitionInput: string;
```

- *Type:* string

---

##### `schemaNameInput`<sup>Optional</sup> <a name="schemaNameInput" id="@cdktf/aws-cdk.glueSchema.GlueSchema.property.schemaNameInput"></a>

```typescript
public readonly schemaNameInput: string;
```

- *Type:* string

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/aws-cdk.glueSchema.GlueSchema.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/aws-cdk.glueSchema.GlueSchema.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `compatibility`<sup>Required</sup> <a name="compatibility" id="@cdktf/aws-cdk.glueSchema.GlueSchema.property.compatibility"></a>

```typescript
public readonly compatibility: string;
```

- *Type:* string

---

##### `dataFormat`<sup>Required</sup> <a name="dataFormat" id="@cdktf/aws-cdk.glueSchema.GlueSchema.property.dataFormat"></a>

```typescript
public readonly dataFormat: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/aws-cdk.glueSchema.GlueSchema.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.glueSchema.GlueSchema.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `registryArn`<sup>Required</sup> <a name="registryArn" id="@cdktf/aws-cdk.glueSchema.GlueSchema.property.registryArn"></a>

```typescript
public readonly registryArn: string;
```

- *Type:* string

---

##### `schemaDefinition`<sup>Required</sup> <a name="schemaDefinition" id="@cdktf/aws-cdk.glueSchema.GlueSchema.property.schemaDefinition"></a>

```typescript
public readonly schemaDefinition: string;
```

- *Type:* string

---

##### `schemaName`<sup>Required</sup> <a name="schemaName" id="@cdktf/aws-cdk.glueSchema.GlueSchema.property.schemaName"></a>

```typescript
public readonly schemaName: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/aws-cdk.glueSchema.GlueSchema.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/aws-cdk.glueSchema.GlueSchema.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.glueSchema.GlueSchema.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/aws-cdk.glueSchema.GlueSchema.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GlueSchemaConfig <a name="GlueSchemaConfig" id="@cdktf/aws-cdk.glueSchema.GlueSchemaConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.glueSchema.GlueSchemaConfig.Initializer"></a>

```typescript
import { glueSchema } from '@cdktf/aws-cdk'

const glueSchemaConfig: glueSchema.GlueSchemaConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.glueSchema.GlueSchemaConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueSchema.GlueSchemaConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueSchema.GlueSchemaConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueSchema.GlueSchemaConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueSchema.GlueSchemaConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueSchema.GlueSchemaConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueSchema.GlueSchemaConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueSchema.GlueSchemaConfig.property.compatibility">compatibility</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/glue_schema#compatibility GlueSchema#compatibility}. |
| <code><a href="#@cdktf/aws-cdk.glueSchema.GlueSchemaConfig.property.dataFormat">dataFormat</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/glue_schema#data_format GlueSchema#data_format}. |
| <code><a href="#@cdktf/aws-cdk.glueSchema.GlueSchemaConfig.property.schemaDefinition">schemaDefinition</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/glue_schema#schema_definition GlueSchema#schema_definition}. |
| <code><a href="#@cdktf/aws-cdk.glueSchema.GlueSchemaConfig.property.schemaName">schemaName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/glue_schema#schema_name GlueSchema#schema_name}. |
| <code><a href="#@cdktf/aws-cdk.glueSchema.GlueSchemaConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/glue_schema#description GlueSchema#description}. |
| <code><a href="#@cdktf/aws-cdk.glueSchema.GlueSchemaConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/glue_schema#id GlueSchema#id}. |
| <code><a href="#@cdktf/aws-cdk.glueSchema.GlueSchemaConfig.property.registryArn">registryArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/glue_schema#registry_arn GlueSchema#registry_arn}. |
| <code><a href="#@cdktf/aws-cdk.glueSchema.GlueSchemaConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/glue_schema#tags GlueSchema#tags}. |
| <code><a href="#@cdktf/aws-cdk.glueSchema.GlueSchemaConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/glue_schema#tags_all GlueSchema#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.glueSchema.GlueSchemaConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.glueSchema.GlueSchemaConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.glueSchema.GlueSchemaConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.glueSchema.GlueSchemaConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.glueSchema.GlueSchemaConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.glueSchema.GlueSchemaConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.glueSchema.GlueSchemaConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compatibility`<sup>Required</sup> <a name="compatibility" id="@cdktf/aws-cdk.glueSchema.GlueSchemaConfig.property.compatibility"></a>

```typescript
public readonly compatibility: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/glue_schema#compatibility GlueSchema#compatibility}.

---

##### `dataFormat`<sup>Required</sup> <a name="dataFormat" id="@cdktf/aws-cdk.glueSchema.GlueSchemaConfig.property.dataFormat"></a>

```typescript
public readonly dataFormat: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/glue_schema#data_format GlueSchema#data_format}.

---

##### `schemaDefinition`<sup>Required</sup> <a name="schemaDefinition" id="@cdktf/aws-cdk.glueSchema.GlueSchemaConfig.property.schemaDefinition"></a>

```typescript
public readonly schemaDefinition: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/glue_schema#schema_definition GlueSchema#schema_definition}.

---

##### `schemaName`<sup>Required</sup> <a name="schemaName" id="@cdktf/aws-cdk.glueSchema.GlueSchemaConfig.property.schemaName"></a>

```typescript
public readonly schemaName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/glue_schema#schema_name GlueSchema#schema_name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/aws-cdk.glueSchema.GlueSchemaConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/glue_schema#description GlueSchema#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/aws-cdk.glueSchema.GlueSchemaConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/glue_schema#id GlueSchema#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `registryArn`<sup>Optional</sup> <a name="registryArn" id="@cdktf/aws-cdk.glueSchema.GlueSchemaConfig.property.registryArn"></a>

```typescript
public readonly registryArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/glue_schema#registry_arn GlueSchema#registry_arn}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/aws-cdk.glueSchema.GlueSchemaConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/glue_schema#tags GlueSchema#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/aws-cdk.glueSchema.GlueSchemaConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/glue_schema#tags_all GlueSchema#tags_all}.

---



