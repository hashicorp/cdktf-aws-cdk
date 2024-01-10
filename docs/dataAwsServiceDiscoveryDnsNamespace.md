# `dataAwsServiceDiscoveryDnsNamespace` Submodule <a name="`dataAwsServiceDiscoveryDnsNamespace` Submodule" id="@cdktf/aws-cdk.dataAwsServiceDiscoveryDnsNamespace"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsServiceDiscoveryDnsNamespace <a name="DataAwsServiceDiscoveryDnsNamespace" id="@cdktf/aws-cdk.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespace"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/service_discovery_dns_namespace aws_service_discovery_dns_namespace}.

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespace.Initializer"></a>

```typescript
import { dataAwsServiceDiscoveryDnsNamespace } from '@cdktf/aws-cdk'

new dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespace(scope: Construct, id: string, config: DataAwsServiceDiscoveryDnsNamespaceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespace.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/aws-cdk.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespace.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/aws-cdk.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespace.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/aws-cdk.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespaceConfig">DataAwsServiceDiscoveryDnsNamespaceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespace.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespace.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/aws-cdk.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespace.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/aws-cdk.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespaceConfig">DataAwsServiceDiscoveryDnsNamespaceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespace.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/aws-cdk.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespace.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespace.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/aws-cdk.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespace.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/aws-cdk.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespace.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/aws-cdk.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespace.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespace.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/aws-cdk.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespace.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespace.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespace.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespace.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespace.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespace.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespace.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespace.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespace.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespace.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespace.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespace.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/aws-cdk.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespace.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/aws-cdk.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespace.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespace.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/aws-cdk.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespace.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/aws-cdk.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespace.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/aws-cdk.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespace.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/aws-cdk.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespace.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/aws-cdk.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespace.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/aws-cdk.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespace.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespace.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespace.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespace.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespace.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespace.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespace.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespace.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespace.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespace.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespace.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespace.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespace.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespace.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespace.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespace.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespace.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespace.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespace.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespace.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespace.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/aws-cdk.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespace.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespace.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/aws-cdk.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespace.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespace.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespace.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataAwsServiceDiscoveryDnsNamespace resource upon running "cdktf plan <stack-name>". |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@cdktf/aws-cdk.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespace.isConstruct"></a>

```typescript
import { dataAwsServiceDiscoveryDnsNamespace } from '@cdktf/aws-cdk'

dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespace.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespace.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/aws-cdk.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespace.isTerraformElement"></a>

```typescript
import { dataAwsServiceDiscoveryDnsNamespace } from '@cdktf/aws-cdk'

dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespace.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespace.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/aws-cdk.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespace.isTerraformDataSource"></a>

```typescript
import { dataAwsServiceDiscoveryDnsNamespace } from '@cdktf/aws-cdk'

dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespace.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespace.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/aws-cdk.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespace.generateConfigForImport"></a>

```typescript
import { dataAwsServiceDiscoveryDnsNamespace } from '@cdktf/aws-cdk'

dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespace.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataAwsServiceDiscoveryDnsNamespace resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespace.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/aws-cdk.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespace.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsServiceDiscoveryDnsNamespace to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/aws-cdk.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespace.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsServiceDiscoveryDnsNamespace that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/service_discovery_dns_namespace#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespace.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsServiceDiscoveryDnsNamespace to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespace.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/aws-cdk.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespace.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespace.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespace.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespace.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespace.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespace.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespace.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespace.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespace.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespace.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespace.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespace.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespace.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespace.property.hostedZone">hostedZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespace.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespace.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespace.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespace.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespace.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespace.property.type">type</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/aws-cdk.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespace.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/aws-cdk.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespace.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespace.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/aws-cdk.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespace.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/aws-cdk.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespace.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/aws-cdk.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespace.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/aws-cdk.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespace.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespace.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespace.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespace.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespace.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespace.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/aws-cdk.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespace.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/aws-cdk.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespace.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `hostedZone`<sup>Required</sup> <a name="hostedZone" id="@cdktf/aws-cdk.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespace.property.hostedZone"></a>

```typescript
public readonly hostedZone: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/aws-cdk.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespace.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/aws-cdk.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespace.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/aws-cdk.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespace.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespace.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/aws-cdk.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespace.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/aws-cdk.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespace.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespace.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/aws-cdk.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespace.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsServiceDiscoveryDnsNamespaceConfig <a name="DataAwsServiceDiscoveryDnsNamespaceConfig" id="@cdktf/aws-cdk.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespaceConfig.Initializer"></a>

```typescript
import { dataAwsServiceDiscoveryDnsNamespace } from '@cdktf/aws-cdk'

const dataAwsServiceDiscoveryDnsNamespaceConfig: dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespaceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespaceConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespaceConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespaceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespaceConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespaceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespaceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespaceConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespaceConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/service_discovery_dns_namespace#name DataAwsServiceDiscoveryDnsNamespace#name}. |
| <code><a href="#@cdktf/aws-cdk.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespaceConfig.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/service_discovery_dns_namespace#type DataAwsServiceDiscoveryDnsNamespace#type}. |
| <code><a href="#@cdktf/aws-cdk.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespaceConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/service_discovery_dns_namespace#id DataAwsServiceDiscoveryDnsNamespace#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespaceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespaceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespaceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespaceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespaceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespaceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespaceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/aws-cdk.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespaceConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/service_discovery_dns_namespace#name DataAwsServiceDiscoveryDnsNamespace#name}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/aws-cdk.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespaceConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/service_discovery_dns_namespace#type DataAwsServiceDiscoveryDnsNamespace#type}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/aws-cdk.dataAwsServiceDiscoveryDnsNamespace.DataAwsServiceDiscoveryDnsNamespaceConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/service_discovery_dns_namespace#id DataAwsServiceDiscoveryDnsNamespace#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



