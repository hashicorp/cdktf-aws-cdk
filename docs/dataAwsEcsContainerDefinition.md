# `data_aws_ecs_container_definition`

Refer to the Terraform Registory for docs: [`data_aws_ecs_container_definition`](https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/ecs_container_definition).

# `dataAwsEcsContainerDefinition` Submodule <a name="`dataAwsEcsContainerDefinition` Submodule" id="@cdktf/aws-cdk.dataAwsEcsContainerDefinition"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsEcsContainerDefinition <a name="DataAwsEcsContainerDefinition" id="@cdktf/aws-cdk.dataAwsEcsContainerDefinition.DataAwsEcsContainerDefinition"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/ecs_container_definition aws_ecs_container_definition}.

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.dataAwsEcsContainerDefinition.DataAwsEcsContainerDefinition.Initializer"></a>

```typescript
import { dataAwsEcsContainerDefinition } from '@cdktf/aws-cdk'

new dataAwsEcsContainerDefinition.DataAwsEcsContainerDefinition(scope: Construct, id: string, config: DataAwsEcsContainerDefinitionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsEcsContainerDefinition.DataAwsEcsContainerDefinition.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/aws-cdk.dataAwsEcsContainerDefinition.DataAwsEcsContainerDefinition.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/aws-cdk.dataAwsEcsContainerDefinition.DataAwsEcsContainerDefinition.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/aws-cdk.dataAwsEcsContainerDefinition.DataAwsEcsContainerDefinitionConfig">DataAwsEcsContainerDefinitionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.dataAwsEcsContainerDefinition.DataAwsEcsContainerDefinition.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.dataAwsEcsContainerDefinition.DataAwsEcsContainerDefinition.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/aws-cdk.dataAwsEcsContainerDefinition.DataAwsEcsContainerDefinition.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/aws-cdk.dataAwsEcsContainerDefinition.DataAwsEcsContainerDefinitionConfig">DataAwsEcsContainerDefinitionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsEcsContainerDefinition.DataAwsEcsContainerDefinition.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/aws-cdk.dataAwsEcsContainerDefinition.DataAwsEcsContainerDefinition.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsEcsContainerDefinition.DataAwsEcsContainerDefinition.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/aws-cdk.dataAwsEcsContainerDefinition.DataAwsEcsContainerDefinition.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/aws-cdk.dataAwsEcsContainerDefinition.DataAwsEcsContainerDefinition.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsEcsContainerDefinition.DataAwsEcsContainerDefinition.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/aws-cdk.dataAwsEcsContainerDefinition.DataAwsEcsContainerDefinition.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsEcsContainerDefinition.DataAwsEcsContainerDefinition.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsEcsContainerDefinition.DataAwsEcsContainerDefinition.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsEcsContainerDefinition.DataAwsEcsContainerDefinition.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsEcsContainerDefinition.DataAwsEcsContainerDefinition.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsEcsContainerDefinition.DataAwsEcsContainerDefinition.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsEcsContainerDefinition.DataAwsEcsContainerDefinition.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsEcsContainerDefinition.DataAwsEcsContainerDefinition.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsEcsContainerDefinition.DataAwsEcsContainerDefinition.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsEcsContainerDefinition.DataAwsEcsContainerDefinition.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsEcsContainerDefinition.DataAwsEcsContainerDefinition.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.dataAwsEcsContainerDefinition.DataAwsEcsContainerDefinition.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/aws-cdk.dataAwsEcsContainerDefinition.DataAwsEcsContainerDefinition.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/aws-cdk.dataAwsEcsContainerDefinition.DataAwsEcsContainerDefinition.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.dataAwsEcsContainerDefinition.DataAwsEcsContainerDefinition.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/aws-cdk.dataAwsEcsContainerDefinition.DataAwsEcsContainerDefinition.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/aws-cdk.dataAwsEcsContainerDefinition.DataAwsEcsContainerDefinition.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/aws-cdk.dataAwsEcsContainerDefinition.DataAwsEcsContainerDefinition.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/aws-cdk.dataAwsEcsContainerDefinition.DataAwsEcsContainerDefinition.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/aws-cdk.dataAwsEcsContainerDefinition.DataAwsEcsContainerDefinition.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.dataAwsEcsContainerDefinition.DataAwsEcsContainerDefinition.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsEcsContainerDefinition.DataAwsEcsContainerDefinition.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.dataAwsEcsContainerDefinition.DataAwsEcsContainerDefinition.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsEcsContainerDefinition.DataAwsEcsContainerDefinition.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.dataAwsEcsContainerDefinition.DataAwsEcsContainerDefinition.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsEcsContainerDefinition.DataAwsEcsContainerDefinition.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.dataAwsEcsContainerDefinition.DataAwsEcsContainerDefinition.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsEcsContainerDefinition.DataAwsEcsContainerDefinition.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.dataAwsEcsContainerDefinition.DataAwsEcsContainerDefinition.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsEcsContainerDefinition.DataAwsEcsContainerDefinition.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.dataAwsEcsContainerDefinition.DataAwsEcsContainerDefinition.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsEcsContainerDefinition.DataAwsEcsContainerDefinition.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.dataAwsEcsContainerDefinition.DataAwsEcsContainerDefinition.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsEcsContainerDefinition.DataAwsEcsContainerDefinition.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.dataAwsEcsContainerDefinition.DataAwsEcsContainerDefinition.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsEcsContainerDefinition.DataAwsEcsContainerDefinition.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.dataAwsEcsContainerDefinition.DataAwsEcsContainerDefinition.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsEcsContainerDefinition.DataAwsEcsContainerDefinition.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.dataAwsEcsContainerDefinition.DataAwsEcsContainerDefinition.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsEcsContainerDefinition.DataAwsEcsContainerDefinition.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/aws-cdk.dataAwsEcsContainerDefinition.DataAwsEcsContainerDefinition.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsEcsContainerDefinition.DataAwsEcsContainerDefinition.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/aws-cdk.dataAwsEcsContainerDefinition.DataAwsEcsContainerDefinition.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsEcsContainerDefinition.DataAwsEcsContainerDefinition.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@cdktf/aws-cdk.dataAwsEcsContainerDefinition.DataAwsEcsContainerDefinition.isConstruct"></a>

```typescript
import { dataAwsEcsContainerDefinition } from '@cdktf/aws-cdk'

dataAwsEcsContainerDefinition.DataAwsEcsContainerDefinition.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.dataAwsEcsContainerDefinition.DataAwsEcsContainerDefinition.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/aws-cdk.dataAwsEcsContainerDefinition.DataAwsEcsContainerDefinition.isTerraformElement"></a>

```typescript
import { dataAwsEcsContainerDefinition } from '@cdktf/aws-cdk'

dataAwsEcsContainerDefinition.DataAwsEcsContainerDefinition.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.dataAwsEcsContainerDefinition.DataAwsEcsContainerDefinition.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/aws-cdk.dataAwsEcsContainerDefinition.DataAwsEcsContainerDefinition.isTerraformDataSource"></a>

```typescript
import { dataAwsEcsContainerDefinition } from '@cdktf/aws-cdk'

dataAwsEcsContainerDefinition.DataAwsEcsContainerDefinition.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.dataAwsEcsContainerDefinition.DataAwsEcsContainerDefinition.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsEcsContainerDefinition.DataAwsEcsContainerDefinition.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/aws-cdk.dataAwsEcsContainerDefinition.DataAwsEcsContainerDefinition.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsEcsContainerDefinition.DataAwsEcsContainerDefinition.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsEcsContainerDefinition.DataAwsEcsContainerDefinition.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsEcsContainerDefinition.DataAwsEcsContainerDefinition.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsEcsContainerDefinition.DataAwsEcsContainerDefinition.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsEcsContainerDefinition.DataAwsEcsContainerDefinition.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsEcsContainerDefinition.DataAwsEcsContainerDefinition.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsEcsContainerDefinition.DataAwsEcsContainerDefinition.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsEcsContainerDefinition.DataAwsEcsContainerDefinition.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsEcsContainerDefinition.DataAwsEcsContainerDefinition.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsEcsContainerDefinition.DataAwsEcsContainerDefinition.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsEcsContainerDefinition.DataAwsEcsContainerDefinition.property.cpu">cpu</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsEcsContainerDefinition.DataAwsEcsContainerDefinition.property.disableNetworking">disableNetworking</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsEcsContainerDefinition.DataAwsEcsContainerDefinition.property.dockerLabels">dockerLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsEcsContainerDefinition.DataAwsEcsContainerDefinition.property.environment">environment</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsEcsContainerDefinition.DataAwsEcsContainerDefinition.property.image">image</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsEcsContainerDefinition.DataAwsEcsContainerDefinition.property.imageDigest">imageDigest</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsEcsContainerDefinition.DataAwsEcsContainerDefinition.property.memory">memory</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsEcsContainerDefinition.DataAwsEcsContainerDefinition.property.memoryReservation">memoryReservation</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsEcsContainerDefinition.DataAwsEcsContainerDefinition.property.containerNameInput">containerNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsEcsContainerDefinition.DataAwsEcsContainerDefinition.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsEcsContainerDefinition.DataAwsEcsContainerDefinition.property.taskDefinitionInput">taskDefinitionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsEcsContainerDefinition.DataAwsEcsContainerDefinition.property.containerName">containerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsEcsContainerDefinition.DataAwsEcsContainerDefinition.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsEcsContainerDefinition.DataAwsEcsContainerDefinition.property.taskDefinition">taskDefinition</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/aws-cdk.dataAwsEcsContainerDefinition.DataAwsEcsContainerDefinition.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/aws-cdk.dataAwsEcsContainerDefinition.DataAwsEcsContainerDefinition.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.dataAwsEcsContainerDefinition.DataAwsEcsContainerDefinition.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/aws-cdk.dataAwsEcsContainerDefinition.DataAwsEcsContainerDefinition.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/aws-cdk.dataAwsEcsContainerDefinition.DataAwsEcsContainerDefinition.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/aws-cdk.dataAwsEcsContainerDefinition.DataAwsEcsContainerDefinition.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/aws-cdk.dataAwsEcsContainerDefinition.DataAwsEcsContainerDefinition.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.dataAwsEcsContainerDefinition.DataAwsEcsContainerDefinition.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.dataAwsEcsContainerDefinition.DataAwsEcsContainerDefinition.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.dataAwsEcsContainerDefinition.DataAwsEcsContainerDefinition.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.dataAwsEcsContainerDefinition.DataAwsEcsContainerDefinition.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.dataAwsEcsContainerDefinition.DataAwsEcsContainerDefinition.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `cpu`<sup>Required</sup> <a name="cpu" id="@cdktf/aws-cdk.dataAwsEcsContainerDefinition.DataAwsEcsContainerDefinition.property.cpu"></a>

```typescript
public readonly cpu: number;
```

- *Type:* number

---

##### `disableNetworking`<sup>Required</sup> <a name="disableNetworking" id="@cdktf/aws-cdk.dataAwsEcsContainerDefinition.DataAwsEcsContainerDefinition.property.disableNetworking"></a>

```typescript
public readonly disableNetworking: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `dockerLabels`<sup>Required</sup> <a name="dockerLabels" id="@cdktf/aws-cdk.dataAwsEcsContainerDefinition.DataAwsEcsContainerDefinition.property.dockerLabels"></a>

```typescript
public readonly dockerLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktf/aws-cdk.dataAwsEcsContainerDefinition.DataAwsEcsContainerDefinition.property.environment"></a>

```typescript
public readonly environment: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `image`<sup>Required</sup> <a name="image" id="@cdktf/aws-cdk.dataAwsEcsContainerDefinition.DataAwsEcsContainerDefinition.property.image"></a>

```typescript
public readonly image: string;
```

- *Type:* string

---

##### `imageDigest`<sup>Required</sup> <a name="imageDigest" id="@cdktf/aws-cdk.dataAwsEcsContainerDefinition.DataAwsEcsContainerDefinition.property.imageDigest"></a>

```typescript
public readonly imageDigest: string;
```

- *Type:* string

---

##### `memory`<sup>Required</sup> <a name="memory" id="@cdktf/aws-cdk.dataAwsEcsContainerDefinition.DataAwsEcsContainerDefinition.property.memory"></a>

```typescript
public readonly memory: number;
```

- *Type:* number

---

##### `memoryReservation`<sup>Required</sup> <a name="memoryReservation" id="@cdktf/aws-cdk.dataAwsEcsContainerDefinition.DataAwsEcsContainerDefinition.property.memoryReservation"></a>

```typescript
public readonly memoryReservation: number;
```

- *Type:* number

---

##### `containerNameInput`<sup>Optional</sup> <a name="containerNameInput" id="@cdktf/aws-cdk.dataAwsEcsContainerDefinition.DataAwsEcsContainerDefinition.property.containerNameInput"></a>

```typescript
public readonly containerNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/aws-cdk.dataAwsEcsContainerDefinition.DataAwsEcsContainerDefinition.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `taskDefinitionInput`<sup>Optional</sup> <a name="taskDefinitionInput" id="@cdktf/aws-cdk.dataAwsEcsContainerDefinition.DataAwsEcsContainerDefinition.property.taskDefinitionInput"></a>

```typescript
public readonly taskDefinitionInput: string;
```

- *Type:* string

---

##### `containerName`<sup>Required</sup> <a name="containerName" id="@cdktf/aws-cdk.dataAwsEcsContainerDefinition.DataAwsEcsContainerDefinition.property.containerName"></a>

```typescript
public readonly containerName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.dataAwsEcsContainerDefinition.DataAwsEcsContainerDefinition.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `taskDefinition`<sup>Required</sup> <a name="taskDefinition" id="@cdktf/aws-cdk.dataAwsEcsContainerDefinition.DataAwsEcsContainerDefinition.property.taskDefinition"></a>

```typescript
public readonly taskDefinition: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsEcsContainerDefinition.DataAwsEcsContainerDefinition.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/aws-cdk.dataAwsEcsContainerDefinition.DataAwsEcsContainerDefinition.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsEcsContainerDefinitionConfig <a name="DataAwsEcsContainerDefinitionConfig" id="@cdktf/aws-cdk.dataAwsEcsContainerDefinition.DataAwsEcsContainerDefinitionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.dataAwsEcsContainerDefinition.DataAwsEcsContainerDefinitionConfig.Initializer"></a>

```typescript
import { dataAwsEcsContainerDefinition } from '@cdktf/aws-cdk'

const dataAwsEcsContainerDefinitionConfig: dataAwsEcsContainerDefinition.DataAwsEcsContainerDefinitionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsEcsContainerDefinition.DataAwsEcsContainerDefinitionConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsEcsContainerDefinition.DataAwsEcsContainerDefinitionConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsEcsContainerDefinition.DataAwsEcsContainerDefinitionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsEcsContainerDefinition.DataAwsEcsContainerDefinitionConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsEcsContainerDefinition.DataAwsEcsContainerDefinitionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsEcsContainerDefinition.DataAwsEcsContainerDefinitionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsEcsContainerDefinition.DataAwsEcsContainerDefinitionConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsEcsContainerDefinition.DataAwsEcsContainerDefinitionConfig.property.containerName">containerName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/ecs_container_definition#container_name DataAwsEcsContainerDefinition#container_name}. |
| <code><a href="#@cdktf/aws-cdk.dataAwsEcsContainerDefinition.DataAwsEcsContainerDefinitionConfig.property.taskDefinition">taskDefinition</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/ecs_container_definition#task_definition DataAwsEcsContainerDefinition#task_definition}. |
| <code><a href="#@cdktf/aws-cdk.dataAwsEcsContainerDefinition.DataAwsEcsContainerDefinitionConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/ecs_container_definition#id DataAwsEcsContainerDefinition#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.dataAwsEcsContainerDefinition.DataAwsEcsContainerDefinitionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.dataAwsEcsContainerDefinition.DataAwsEcsContainerDefinitionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.dataAwsEcsContainerDefinition.DataAwsEcsContainerDefinitionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.dataAwsEcsContainerDefinition.DataAwsEcsContainerDefinitionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.dataAwsEcsContainerDefinition.DataAwsEcsContainerDefinitionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.dataAwsEcsContainerDefinition.DataAwsEcsContainerDefinitionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.dataAwsEcsContainerDefinition.DataAwsEcsContainerDefinitionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `containerName`<sup>Required</sup> <a name="containerName" id="@cdktf/aws-cdk.dataAwsEcsContainerDefinition.DataAwsEcsContainerDefinitionConfig.property.containerName"></a>

```typescript
public readonly containerName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/ecs_container_definition#container_name DataAwsEcsContainerDefinition#container_name}.

---

##### `taskDefinition`<sup>Required</sup> <a name="taskDefinition" id="@cdktf/aws-cdk.dataAwsEcsContainerDefinition.DataAwsEcsContainerDefinitionConfig.property.taskDefinition"></a>

```typescript
public readonly taskDefinition: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/ecs_container_definition#task_definition DataAwsEcsContainerDefinition#task_definition}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/aws-cdk.dataAwsEcsContainerDefinition.DataAwsEcsContainerDefinitionConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/ecs_container_definition#id DataAwsEcsContainerDefinition#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



