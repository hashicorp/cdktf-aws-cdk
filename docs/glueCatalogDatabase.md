# `aws_glue_catalog_database`

Refer to the Terraform Registory for docs: [`aws_glue_catalog_database`](https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/glue_catalog_database).

# `glueCatalogDatabase` Submodule <a name="`glueCatalogDatabase` Submodule" id="@cdktf/aws-cdk.glueCatalogDatabase"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GlueCatalogDatabase <a name="GlueCatalogDatabase" id="@cdktf/aws-cdk.glueCatalogDatabase.GlueCatalogDatabase"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/glue_catalog_database aws_glue_catalog_database}.

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.glueCatalogDatabase.GlueCatalogDatabase.Initializer"></a>

```typescript
import { glueCatalogDatabase } from '@cdktf/aws-cdk'

new glueCatalogDatabase.GlueCatalogDatabase(scope: Construct, id: string, config: GlueCatalogDatabaseConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.glueCatalogDatabase.GlueCatalogDatabase.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/aws-cdk.glueCatalogDatabase.GlueCatalogDatabase.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/aws-cdk.glueCatalogDatabase.GlueCatalogDatabase.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/aws-cdk.glueCatalogDatabase.GlueCatalogDatabaseConfig">GlueCatalogDatabaseConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.glueCatalogDatabase.GlueCatalogDatabase.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.glueCatalogDatabase.GlueCatalogDatabase.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/aws-cdk.glueCatalogDatabase.GlueCatalogDatabase.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/aws-cdk.glueCatalogDatabase.GlueCatalogDatabaseConfig">GlueCatalogDatabaseConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.glueCatalogDatabase.GlueCatalogDatabase.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/aws-cdk.glueCatalogDatabase.GlueCatalogDatabase.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCatalogDatabase.GlueCatalogDatabase.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/aws-cdk.glueCatalogDatabase.GlueCatalogDatabase.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/aws-cdk.glueCatalogDatabase.GlueCatalogDatabase.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCatalogDatabase.GlueCatalogDatabase.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/aws-cdk.glueCatalogDatabase.GlueCatalogDatabase.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCatalogDatabase.GlueCatalogDatabase.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCatalogDatabase.GlueCatalogDatabase.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCatalogDatabase.GlueCatalogDatabase.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCatalogDatabase.GlueCatalogDatabase.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCatalogDatabase.GlueCatalogDatabase.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCatalogDatabase.GlueCatalogDatabase.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCatalogDatabase.GlueCatalogDatabase.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCatalogDatabase.GlueCatalogDatabase.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCatalogDatabase.GlueCatalogDatabase.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCatalogDatabase.GlueCatalogDatabase.putTargetDatabase">putTargetDatabase</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCatalogDatabase.GlueCatalogDatabase.resetCatalogId">resetCatalogId</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCatalogDatabase.GlueCatalogDatabase.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCatalogDatabase.GlueCatalogDatabase.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCatalogDatabase.GlueCatalogDatabase.resetLocationUri">resetLocationUri</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCatalogDatabase.GlueCatalogDatabase.resetParameters">resetParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCatalogDatabase.GlueCatalogDatabase.resetTargetDatabase">resetTargetDatabase</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.glueCatalogDatabase.GlueCatalogDatabase.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/aws-cdk.glueCatalogDatabase.GlueCatalogDatabase.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/aws-cdk.glueCatalogDatabase.GlueCatalogDatabase.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.glueCatalogDatabase.GlueCatalogDatabase.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/aws-cdk.glueCatalogDatabase.GlueCatalogDatabase.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/aws-cdk.glueCatalogDatabase.GlueCatalogDatabase.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/aws-cdk.glueCatalogDatabase.GlueCatalogDatabase.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/aws-cdk.glueCatalogDatabase.GlueCatalogDatabase.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/aws-cdk.glueCatalogDatabase.GlueCatalogDatabase.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.glueCatalogDatabase.GlueCatalogDatabase.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.glueCatalogDatabase.GlueCatalogDatabase.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.glueCatalogDatabase.GlueCatalogDatabase.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.glueCatalogDatabase.GlueCatalogDatabase.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.glueCatalogDatabase.GlueCatalogDatabase.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.glueCatalogDatabase.GlueCatalogDatabase.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.glueCatalogDatabase.GlueCatalogDatabase.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.glueCatalogDatabase.GlueCatalogDatabase.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.glueCatalogDatabase.GlueCatalogDatabase.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.glueCatalogDatabase.GlueCatalogDatabase.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.glueCatalogDatabase.GlueCatalogDatabase.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.glueCatalogDatabase.GlueCatalogDatabase.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.glueCatalogDatabase.GlueCatalogDatabase.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.glueCatalogDatabase.GlueCatalogDatabase.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.glueCatalogDatabase.GlueCatalogDatabase.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.glueCatalogDatabase.GlueCatalogDatabase.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.glueCatalogDatabase.GlueCatalogDatabase.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.glueCatalogDatabase.GlueCatalogDatabase.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.glueCatalogDatabase.GlueCatalogDatabase.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.glueCatalogDatabase.GlueCatalogDatabase.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTargetDatabase` <a name="putTargetDatabase" id="@cdktf/aws-cdk.glueCatalogDatabase.GlueCatalogDatabase.putTargetDatabase"></a>

```typescript
public putTargetDatabase(value: GlueCatalogDatabaseTargetDatabase): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.glueCatalogDatabase.GlueCatalogDatabase.putTargetDatabase.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabase">GlueCatalogDatabaseTargetDatabase</a>

---

##### `resetCatalogId` <a name="resetCatalogId" id="@cdktf/aws-cdk.glueCatalogDatabase.GlueCatalogDatabase.resetCatalogId"></a>

```typescript
public resetCatalogId(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/aws-cdk.glueCatalogDatabase.GlueCatalogDatabase.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/aws-cdk.glueCatalogDatabase.GlueCatalogDatabase.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLocationUri` <a name="resetLocationUri" id="@cdktf/aws-cdk.glueCatalogDatabase.GlueCatalogDatabase.resetLocationUri"></a>

```typescript
public resetLocationUri(): void
```

##### `resetParameters` <a name="resetParameters" id="@cdktf/aws-cdk.glueCatalogDatabase.GlueCatalogDatabase.resetParameters"></a>

```typescript
public resetParameters(): void
```

##### `resetTargetDatabase` <a name="resetTargetDatabase" id="@cdktf/aws-cdk.glueCatalogDatabase.GlueCatalogDatabase.resetTargetDatabase"></a>

```typescript
public resetTargetDatabase(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.glueCatalogDatabase.GlueCatalogDatabase.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/aws-cdk.glueCatalogDatabase.GlueCatalogDatabase.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCatalogDatabase.GlueCatalogDatabase.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@cdktf/aws-cdk.glueCatalogDatabase.GlueCatalogDatabase.isConstruct"></a>

```typescript
import { glueCatalogDatabase } from '@cdktf/aws-cdk'

glueCatalogDatabase.GlueCatalogDatabase.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.glueCatalogDatabase.GlueCatalogDatabase.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/aws-cdk.glueCatalogDatabase.GlueCatalogDatabase.isTerraformElement"></a>

```typescript
import { glueCatalogDatabase } from '@cdktf/aws-cdk'

glueCatalogDatabase.GlueCatalogDatabase.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.glueCatalogDatabase.GlueCatalogDatabase.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/aws-cdk.glueCatalogDatabase.GlueCatalogDatabase.isTerraformResource"></a>

```typescript
import { glueCatalogDatabase } from '@cdktf/aws-cdk'

glueCatalogDatabase.GlueCatalogDatabase.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.glueCatalogDatabase.GlueCatalogDatabase.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.glueCatalogDatabase.GlueCatalogDatabase.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/aws-cdk.glueCatalogDatabase.GlueCatalogDatabase.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCatalogDatabase.GlueCatalogDatabase.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCatalogDatabase.GlueCatalogDatabase.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCatalogDatabase.GlueCatalogDatabase.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCatalogDatabase.GlueCatalogDatabase.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCatalogDatabase.GlueCatalogDatabase.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCatalogDatabase.GlueCatalogDatabase.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCatalogDatabase.GlueCatalogDatabase.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCatalogDatabase.GlueCatalogDatabase.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCatalogDatabase.GlueCatalogDatabase.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCatalogDatabase.GlueCatalogDatabase.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCatalogDatabase.GlueCatalogDatabase.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCatalogDatabase.GlueCatalogDatabase.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCatalogDatabase.GlueCatalogDatabase.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCatalogDatabase.GlueCatalogDatabase.property.targetDatabase">targetDatabase</a></code> | <code><a href="#@cdktf/aws-cdk.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference">GlueCatalogDatabaseTargetDatabaseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCatalogDatabase.GlueCatalogDatabase.property.catalogIdInput">catalogIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCatalogDatabase.GlueCatalogDatabase.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCatalogDatabase.GlueCatalogDatabase.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCatalogDatabase.GlueCatalogDatabase.property.locationUriInput">locationUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCatalogDatabase.GlueCatalogDatabase.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCatalogDatabase.GlueCatalogDatabase.property.parametersInput">parametersInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCatalogDatabase.GlueCatalogDatabase.property.targetDatabaseInput">targetDatabaseInput</a></code> | <code><a href="#@cdktf/aws-cdk.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabase">GlueCatalogDatabaseTargetDatabase</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCatalogDatabase.GlueCatalogDatabase.property.catalogId">catalogId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCatalogDatabase.GlueCatalogDatabase.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCatalogDatabase.GlueCatalogDatabase.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCatalogDatabase.GlueCatalogDatabase.property.locationUri">locationUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCatalogDatabase.GlueCatalogDatabase.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCatalogDatabase.GlueCatalogDatabase.property.parameters">parameters</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/aws-cdk.glueCatalogDatabase.GlueCatalogDatabase.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/aws-cdk.glueCatalogDatabase.GlueCatalogDatabase.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.glueCatalogDatabase.GlueCatalogDatabase.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/aws-cdk.glueCatalogDatabase.GlueCatalogDatabase.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/aws-cdk.glueCatalogDatabase.GlueCatalogDatabase.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/aws-cdk.glueCatalogDatabase.GlueCatalogDatabase.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/aws-cdk.glueCatalogDatabase.GlueCatalogDatabase.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.glueCatalogDatabase.GlueCatalogDatabase.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.glueCatalogDatabase.GlueCatalogDatabase.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.glueCatalogDatabase.GlueCatalogDatabase.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.glueCatalogDatabase.GlueCatalogDatabase.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.glueCatalogDatabase.GlueCatalogDatabase.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.glueCatalogDatabase.GlueCatalogDatabase.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.glueCatalogDatabase.GlueCatalogDatabase.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/aws-cdk.glueCatalogDatabase.GlueCatalogDatabase.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `targetDatabase`<sup>Required</sup> <a name="targetDatabase" id="@cdktf/aws-cdk.glueCatalogDatabase.GlueCatalogDatabase.property.targetDatabase"></a>

```typescript
public readonly targetDatabase: GlueCatalogDatabaseTargetDatabaseOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference">GlueCatalogDatabaseTargetDatabaseOutputReference</a>

---

##### `catalogIdInput`<sup>Optional</sup> <a name="catalogIdInput" id="@cdktf/aws-cdk.glueCatalogDatabase.GlueCatalogDatabase.property.catalogIdInput"></a>

```typescript
public readonly catalogIdInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/aws-cdk.glueCatalogDatabase.GlueCatalogDatabase.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/aws-cdk.glueCatalogDatabase.GlueCatalogDatabase.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationUriInput`<sup>Optional</sup> <a name="locationUriInput" id="@cdktf/aws-cdk.glueCatalogDatabase.GlueCatalogDatabase.property.locationUriInput"></a>

```typescript
public readonly locationUriInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/aws-cdk.glueCatalogDatabase.GlueCatalogDatabase.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `parametersInput`<sup>Optional</sup> <a name="parametersInput" id="@cdktf/aws-cdk.glueCatalogDatabase.GlueCatalogDatabase.property.parametersInput"></a>

```typescript
public readonly parametersInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `targetDatabaseInput`<sup>Optional</sup> <a name="targetDatabaseInput" id="@cdktf/aws-cdk.glueCatalogDatabase.GlueCatalogDatabase.property.targetDatabaseInput"></a>

```typescript
public readonly targetDatabaseInput: GlueCatalogDatabaseTargetDatabase;
```

- *Type:* <a href="#@cdktf/aws-cdk.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabase">GlueCatalogDatabaseTargetDatabase</a>

---

##### `catalogId`<sup>Required</sup> <a name="catalogId" id="@cdktf/aws-cdk.glueCatalogDatabase.GlueCatalogDatabase.property.catalogId"></a>

```typescript
public readonly catalogId: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/aws-cdk.glueCatalogDatabase.GlueCatalogDatabase.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.glueCatalogDatabase.GlueCatalogDatabase.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `locationUri`<sup>Required</sup> <a name="locationUri" id="@cdktf/aws-cdk.glueCatalogDatabase.GlueCatalogDatabase.property.locationUri"></a>

```typescript
public readonly locationUri: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/aws-cdk.glueCatalogDatabase.GlueCatalogDatabase.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/aws-cdk.glueCatalogDatabase.GlueCatalogDatabase.property.parameters"></a>

```typescript
public readonly parameters: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.glueCatalogDatabase.GlueCatalogDatabase.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/aws-cdk.glueCatalogDatabase.GlueCatalogDatabase.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GlueCatalogDatabaseConfig <a name="GlueCatalogDatabaseConfig" id="@cdktf/aws-cdk.glueCatalogDatabase.GlueCatalogDatabaseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.glueCatalogDatabase.GlueCatalogDatabaseConfig.Initializer"></a>

```typescript
import { glueCatalogDatabase } from '@cdktf/aws-cdk'

const glueCatalogDatabaseConfig: glueCatalogDatabase.GlueCatalogDatabaseConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.glueCatalogDatabase.GlueCatalogDatabaseConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCatalogDatabase.GlueCatalogDatabaseConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCatalogDatabase.GlueCatalogDatabaseConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCatalogDatabase.GlueCatalogDatabaseConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCatalogDatabase.GlueCatalogDatabaseConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCatalogDatabase.GlueCatalogDatabaseConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCatalogDatabase.GlueCatalogDatabaseConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCatalogDatabase.GlueCatalogDatabaseConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/glue_catalog_database#name GlueCatalogDatabase#name}. |
| <code><a href="#@cdktf/aws-cdk.glueCatalogDatabase.GlueCatalogDatabaseConfig.property.catalogId">catalogId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/glue_catalog_database#catalog_id GlueCatalogDatabase#catalog_id}. |
| <code><a href="#@cdktf/aws-cdk.glueCatalogDatabase.GlueCatalogDatabaseConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/glue_catalog_database#description GlueCatalogDatabase#description}. |
| <code><a href="#@cdktf/aws-cdk.glueCatalogDatabase.GlueCatalogDatabaseConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/glue_catalog_database#id GlueCatalogDatabase#id}. |
| <code><a href="#@cdktf/aws-cdk.glueCatalogDatabase.GlueCatalogDatabaseConfig.property.locationUri">locationUri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/glue_catalog_database#location_uri GlueCatalogDatabase#location_uri}. |
| <code><a href="#@cdktf/aws-cdk.glueCatalogDatabase.GlueCatalogDatabaseConfig.property.parameters">parameters</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/glue_catalog_database#parameters GlueCatalogDatabase#parameters}. |
| <code><a href="#@cdktf/aws-cdk.glueCatalogDatabase.GlueCatalogDatabaseConfig.property.targetDatabase">targetDatabase</a></code> | <code><a href="#@cdktf/aws-cdk.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabase">GlueCatalogDatabaseTargetDatabase</a></code> | target_database block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.glueCatalogDatabase.GlueCatalogDatabaseConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.glueCatalogDatabase.GlueCatalogDatabaseConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.glueCatalogDatabase.GlueCatalogDatabaseConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.glueCatalogDatabase.GlueCatalogDatabaseConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.glueCatalogDatabase.GlueCatalogDatabaseConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.glueCatalogDatabase.GlueCatalogDatabaseConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.glueCatalogDatabase.GlueCatalogDatabaseConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/aws-cdk.glueCatalogDatabase.GlueCatalogDatabaseConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/glue_catalog_database#name GlueCatalogDatabase#name}.

---

##### `catalogId`<sup>Optional</sup> <a name="catalogId" id="@cdktf/aws-cdk.glueCatalogDatabase.GlueCatalogDatabaseConfig.property.catalogId"></a>

```typescript
public readonly catalogId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/glue_catalog_database#catalog_id GlueCatalogDatabase#catalog_id}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/aws-cdk.glueCatalogDatabase.GlueCatalogDatabaseConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/glue_catalog_database#description GlueCatalogDatabase#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/aws-cdk.glueCatalogDatabase.GlueCatalogDatabaseConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/glue_catalog_database#id GlueCatalogDatabase#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `locationUri`<sup>Optional</sup> <a name="locationUri" id="@cdktf/aws-cdk.glueCatalogDatabase.GlueCatalogDatabaseConfig.property.locationUri"></a>

```typescript
public readonly locationUri: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/glue_catalog_database#location_uri GlueCatalogDatabase#location_uri}.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/aws-cdk.glueCatalogDatabase.GlueCatalogDatabaseConfig.property.parameters"></a>

```typescript
public readonly parameters: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/glue_catalog_database#parameters GlueCatalogDatabase#parameters}.

---

##### `targetDatabase`<sup>Optional</sup> <a name="targetDatabase" id="@cdktf/aws-cdk.glueCatalogDatabase.GlueCatalogDatabaseConfig.property.targetDatabase"></a>

```typescript
public readonly targetDatabase: GlueCatalogDatabaseTargetDatabase;
```

- *Type:* <a href="#@cdktf/aws-cdk.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabase">GlueCatalogDatabaseTargetDatabase</a>

target_database block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/glue_catalog_database#target_database GlueCatalogDatabase#target_database}

---

### GlueCatalogDatabaseTargetDatabase <a name="GlueCatalogDatabaseTargetDatabase" id="@cdktf/aws-cdk.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabase"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabase.Initializer"></a>

```typescript
import { glueCatalogDatabase } from '@cdktf/aws-cdk'

const glueCatalogDatabaseTargetDatabase: glueCatalogDatabase.GlueCatalogDatabaseTargetDatabase = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabase.property.catalogId">catalogId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/glue_catalog_database#catalog_id GlueCatalogDatabase#catalog_id}. |
| <code><a href="#@cdktf/aws-cdk.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabase.property.databaseName">databaseName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/glue_catalog_database#database_name GlueCatalogDatabase#database_name}. |

---

##### `catalogId`<sup>Required</sup> <a name="catalogId" id="@cdktf/aws-cdk.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabase.property.catalogId"></a>

```typescript
public readonly catalogId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/glue_catalog_database#catalog_id GlueCatalogDatabase#catalog_id}.

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktf/aws-cdk.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabase.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/glue_catalog_database#database_name GlueCatalogDatabase#database_name}.

---

## Classes <a name="Classes" id="Classes"></a>

### GlueCatalogDatabaseTargetDatabaseOutputReference <a name="GlueCatalogDatabaseTargetDatabaseOutputReference" id="@cdktf/aws-cdk.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.Initializer"></a>

```typescript
import { glueCatalogDatabase } from '@cdktf/aws-cdk'

new glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.property.catalogIdInput">catalogIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.property.databaseNameInput">databaseNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.property.catalogId">catalogId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.property.databaseName">databaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabase">GlueCatalogDatabaseTargetDatabase</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `catalogIdInput`<sup>Optional</sup> <a name="catalogIdInput" id="@cdktf/aws-cdk.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.property.catalogIdInput"></a>

```typescript
public readonly catalogIdInput: string;
```

- *Type:* string

---

##### `databaseNameInput`<sup>Optional</sup> <a name="databaseNameInput" id="@cdktf/aws-cdk.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.property.databaseNameInput"></a>

```typescript
public readonly databaseNameInput: string;
```

- *Type:* string

---

##### `catalogId`<sup>Required</sup> <a name="catalogId" id="@cdktf/aws-cdk.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.property.catalogId"></a>

```typescript
public readonly catalogId: string;
```

- *Type:* string

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktf/aws-cdk.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabaseOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GlueCatalogDatabaseTargetDatabase;
```

- *Type:* <a href="#@cdktf/aws-cdk.glueCatalogDatabase.GlueCatalogDatabaseTargetDatabase">GlueCatalogDatabaseTargetDatabase</a>

---



