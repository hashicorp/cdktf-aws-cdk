# `aws_lex_slot_type`

Refer to the Terraform Registory for docs: [`aws_lex_slot_type`](https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lex_slot_type).

# `lexSlotType` Submodule <a name="`lexSlotType` Submodule" id="@cdktf/aws-cdk.lexSlotType"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LexSlotType <a name="LexSlotType" id="@cdktf/aws-cdk.lexSlotType.LexSlotType"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lex_slot_type aws_lex_slot_type}.

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.lexSlotType.LexSlotType.Initializer"></a>

```typescript
import { lexSlotType } from '@cdktf/aws-cdk'

new lexSlotType.LexSlotType(scope: Construct, id: string, config: LexSlotTypeConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.lexSlotType.LexSlotType.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/aws-cdk.lexSlotType.LexSlotType.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/aws-cdk.lexSlotType.LexSlotType.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/aws-cdk.lexSlotType.LexSlotTypeConfig">LexSlotTypeConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.lexSlotType.LexSlotType.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.lexSlotType.LexSlotType.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/aws-cdk.lexSlotType.LexSlotType.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/aws-cdk.lexSlotType.LexSlotTypeConfig">LexSlotTypeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.lexSlotType.LexSlotType.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/aws-cdk.lexSlotType.LexSlotType.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexSlotType.LexSlotType.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/aws-cdk.lexSlotType.LexSlotType.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/aws-cdk.lexSlotType.LexSlotType.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexSlotType.LexSlotType.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/aws-cdk.lexSlotType.LexSlotType.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexSlotType.LexSlotType.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexSlotType.LexSlotType.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexSlotType.LexSlotType.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexSlotType.LexSlotType.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexSlotType.LexSlotType.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexSlotType.LexSlotType.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexSlotType.LexSlotType.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexSlotType.LexSlotType.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexSlotType.LexSlotType.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexSlotType.LexSlotType.putEnumerationValue">putEnumerationValue</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexSlotType.LexSlotType.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexSlotType.LexSlotType.resetCreateVersion">resetCreateVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexSlotType.LexSlotType.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexSlotType.LexSlotType.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexSlotType.LexSlotType.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexSlotType.LexSlotType.resetValueSelectionStrategy">resetValueSelectionStrategy</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.lexSlotType.LexSlotType.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/aws-cdk.lexSlotType.LexSlotType.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/aws-cdk.lexSlotType.LexSlotType.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.lexSlotType.LexSlotType.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/aws-cdk.lexSlotType.LexSlotType.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/aws-cdk.lexSlotType.LexSlotType.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/aws-cdk.lexSlotType.LexSlotType.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/aws-cdk.lexSlotType.LexSlotType.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/aws-cdk.lexSlotType.LexSlotType.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.lexSlotType.LexSlotType.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexSlotType.LexSlotType.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.lexSlotType.LexSlotType.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexSlotType.LexSlotType.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.lexSlotType.LexSlotType.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexSlotType.LexSlotType.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.lexSlotType.LexSlotType.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexSlotType.LexSlotType.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.lexSlotType.LexSlotType.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexSlotType.LexSlotType.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.lexSlotType.LexSlotType.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexSlotType.LexSlotType.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.lexSlotType.LexSlotType.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexSlotType.LexSlotType.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.lexSlotType.LexSlotType.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexSlotType.LexSlotType.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.lexSlotType.LexSlotType.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexSlotType.LexSlotType.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.lexSlotType.LexSlotType.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexSlotType.LexSlotType.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putEnumerationValue` <a name="putEnumerationValue" id="@cdktf/aws-cdk.lexSlotType.LexSlotType.putEnumerationValue"></a>

```typescript
public putEnumerationValue(value: IResolvable | LexSlotTypeEnumerationValue[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.lexSlotType.LexSlotType.putEnumerationValue.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.lexSlotType.LexSlotTypeEnumerationValue">LexSlotTypeEnumerationValue</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/aws-cdk.lexSlotType.LexSlotType.putTimeouts"></a>

```typescript
public putTimeouts(value: LexSlotTypeTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.lexSlotType.LexSlotType.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.lexSlotType.LexSlotTypeTimeouts">LexSlotTypeTimeouts</a>

---

##### `resetCreateVersion` <a name="resetCreateVersion" id="@cdktf/aws-cdk.lexSlotType.LexSlotType.resetCreateVersion"></a>

```typescript
public resetCreateVersion(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/aws-cdk.lexSlotType.LexSlotType.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/aws-cdk.lexSlotType.LexSlotType.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/aws-cdk.lexSlotType.LexSlotType.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetValueSelectionStrategy` <a name="resetValueSelectionStrategy" id="@cdktf/aws-cdk.lexSlotType.LexSlotType.resetValueSelectionStrategy"></a>

```typescript
public resetValueSelectionStrategy(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.lexSlotType.LexSlotType.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/aws-cdk.lexSlotType.LexSlotType.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexSlotType.LexSlotType.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@cdktf/aws-cdk.lexSlotType.LexSlotType.isConstruct"></a>

```typescript
import { lexSlotType } from '@cdktf/aws-cdk'

lexSlotType.LexSlotType.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.lexSlotType.LexSlotType.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/aws-cdk.lexSlotType.LexSlotType.isTerraformElement"></a>

```typescript
import { lexSlotType } from '@cdktf/aws-cdk'

lexSlotType.LexSlotType.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.lexSlotType.LexSlotType.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/aws-cdk.lexSlotType.LexSlotType.isTerraformResource"></a>

```typescript
import { lexSlotType } from '@cdktf/aws-cdk'

lexSlotType.LexSlotType.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.lexSlotType.LexSlotType.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.lexSlotType.LexSlotType.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/aws-cdk.lexSlotType.LexSlotType.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexSlotType.LexSlotType.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexSlotType.LexSlotType.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexSlotType.LexSlotType.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexSlotType.LexSlotType.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexSlotType.LexSlotType.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexSlotType.LexSlotType.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexSlotType.LexSlotType.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexSlotType.LexSlotType.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexSlotType.LexSlotType.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexSlotType.LexSlotType.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexSlotType.LexSlotType.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexSlotType.LexSlotType.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexSlotType.LexSlotType.property.checksum">checksum</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexSlotType.LexSlotType.property.createdDate">createdDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexSlotType.LexSlotType.property.enumerationValue">enumerationValue</a></code> | <code><a href="#@cdktf/aws-cdk.lexSlotType.LexSlotTypeEnumerationValueList">LexSlotTypeEnumerationValueList</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexSlotType.LexSlotType.property.lastUpdatedDate">lastUpdatedDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexSlotType.LexSlotType.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/aws-cdk.lexSlotType.LexSlotTypeTimeoutsOutputReference">LexSlotTypeTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexSlotType.LexSlotType.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexSlotType.LexSlotType.property.createVersionInput">createVersionInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexSlotType.LexSlotType.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexSlotType.LexSlotType.property.enumerationValueInput">enumerationValueInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.lexSlotType.LexSlotTypeEnumerationValue">LexSlotTypeEnumerationValue</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexSlotType.LexSlotType.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexSlotType.LexSlotType.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexSlotType.LexSlotType.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.lexSlotType.LexSlotTypeTimeouts">LexSlotTypeTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexSlotType.LexSlotType.property.valueSelectionStrategyInput">valueSelectionStrategyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexSlotType.LexSlotType.property.createVersion">createVersion</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexSlotType.LexSlotType.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexSlotType.LexSlotType.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexSlotType.LexSlotType.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexSlotType.LexSlotType.property.valueSelectionStrategy">valueSelectionStrategy</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/aws-cdk.lexSlotType.LexSlotType.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/aws-cdk.lexSlotType.LexSlotType.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.lexSlotType.LexSlotType.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/aws-cdk.lexSlotType.LexSlotType.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/aws-cdk.lexSlotType.LexSlotType.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/aws-cdk.lexSlotType.LexSlotType.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/aws-cdk.lexSlotType.LexSlotType.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.lexSlotType.LexSlotType.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.lexSlotType.LexSlotType.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.lexSlotType.LexSlotType.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.lexSlotType.LexSlotType.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.lexSlotType.LexSlotType.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.lexSlotType.LexSlotType.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.lexSlotType.LexSlotType.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `checksum`<sup>Required</sup> <a name="checksum" id="@cdktf/aws-cdk.lexSlotType.LexSlotType.property.checksum"></a>

```typescript
public readonly checksum: string;
```

- *Type:* string

---

##### `createdDate`<sup>Required</sup> <a name="createdDate" id="@cdktf/aws-cdk.lexSlotType.LexSlotType.property.createdDate"></a>

```typescript
public readonly createdDate: string;
```

- *Type:* string

---

##### `enumerationValue`<sup>Required</sup> <a name="enumerationValue" id="@cdktf/aws-cdk.lexSlotType.LexSlotType.property.enumerationValue"></a>

```typescript
public readonly enumerationValue: LexSlotTypeEnumerationValueList;
```

- *Type:* <a href="#@cdktf/aws-cdk.lexSlotType.LexSlotTypeEnumerationValueList">LexSlotTypeEnumerationValueList</a>

---

##### `lastUpdatedDate`<sup>Required</sup> <a name="lastUpdatedDate" id="@cdktf/aws-cdk.lexSlotType.LexSlotType.property.lastUpdatedDate"></a>

```typescript
public readonly lastUpdatedDate: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/aws-cdk.lexSlotType.LexSlotType.property.timeouts"></a>

```typescript
public readonly timeouts: LexSlotTypeTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.lexSlotType.LexSlotTypeTimeoutsOutputReference">LexSlotTypeTimeoutsOutputReference</a>

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/aws-cdk.lexSlotType.LexSlotType.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `createVersionInput`<sup>Optional</sup> <a name="createVersionInput" id="@cdktf/aws-cdk.lexSlotType.LexSlotType.property.createVersionInput"></a>

```typescript
public readonly createVersionInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/aws-cdk.lexSlotType.LexSlotType.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `enumerationValueInput`<sup>Optional</sup> <a name="enumerationValueInput" id="@cdktf/aws-cdk.lexSlotType.LexSlotType.property.enumerationValueInput"></a>

```typescript
public readonly enumerationValueInput: IResolvable | LexSlotTypeEnumerationValue[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.lexSlotType.LexSlotTypeEnumerationValue">LexSlotTypeEnumerationValue</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/aws-cdk.lexSlotType.LexSlotType.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/aws-cdk.lexSlotType.LexSlotType.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/aws-cdk.lexSlotType.LexSlotType.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | LexSlotTypeTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.lexSlotType.LexSlotTypeTimeouts">LexSlotTypeTimeouts</a>

---

##### `valueSelectionStrategyInput`<sup>Optional</sup> <a name="valueSelectionStrategyInput" id="@cdktf/aws-cdk.lexSlotType.LexSlotType.property.valueSelectionStrategyInput"></a>

```typescript
public readonly valueSelectionStrategyInput: string;
```

- *Type:* string

---

##### `createVersion`<sup>Required</sup> <a name="createVersion" id="@cdktf/aws-cdk.lexSlotType.LexSlotType.property.createVersion"></a>

```typescript
public readonly createVersion: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/aws-cdk.lexSlotType.LexSlotType.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.lexSlotType.LexSlotType.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/aws-cdk.lexSlotType.LexSlotType.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `valueSelectionStrategy`<sup>Required</sup> <a name="valueSelectionStrategy" id="@cdktf/aws-cdk.lexSlotType.LexSlotType.property.valueSelectionStrategy"></a>

```typescript
public readonly valueSelectionStrategy: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.lexSlotType.LexSlotType.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/aws-cdk.lexSlotType.LexSlotType.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LexSlotTypeConfig <a name="LexSlotTypeConfig" id="@cdktf/aws-cdk.lexSlotType.LexSlotTypeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.lexSlotType.LexSlotTypeConfig.Initializer"></a>

```typescript
import { lexSlotType } from '@cdktf/aws-cdk'

const lexSlotTypeConfig: lexSlotType.LexSlotTypeConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.lexSlotType.LexSlotTypeConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexSlotType.LexSlotTypeConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexSlotType.LexSlotTypeConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexSlotType.LexSlotTypeConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexSlotType.LexSlotTypeConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexSlotType.LexSlotTypeConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexSlotType.LexSlotTypeConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexSlotType.LexSlotTypeConfig.property.enumerationValue">enumerationValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.lexSlotType.LexSlotTypeEnumerationValue">LexSlotTypeEnumerationValue</a>[]</code> | enumeration_value block. |
| <code><a href="#@cdktf/aws-cdk.lexSlotType.LexSlotTypeConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lex_slot_type#name LexSlotType#name}. |
| <code><a href="#@cdktf/aws-cdk.lexSlotType.LexSlotTypeConfig.property.createVersion">createVersion</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lex_slot_type#create_version LexSlotType#create_version}. |
| <code><a href="#@cdktf/aws-cdk.lexSlotType.LexSlotTypeConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lex_slot_type#description LexSlotType#description}. |
| <code><a href="#@cdktf/aws-cdk.lexSlotType.LexSlotTypeConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lex_slot_type#id LexSlotType#id}. |
| <code><a href="#@cdktf/aws-cdk.lexSlotType.LexSlotTypeConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/aws-cdk.lexSlotType.LexSlotTypeTimeouts">LexSlotTypeTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/aws-cdk.lexSlotType.LexSlotTypeConfig.property.valueSelectionStrategy">valueSelectionStrategy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lex_slot_type#value_selection_strategy LexSlotType#value_selection_strategy}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.lexSlotType.LexSlotTypeConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.lexSlotType.LexSlotTypeConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.lexSlotType.LexSlotTypeConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.lexSlotType.LexSlotTypeConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.lexSlotType.LexSlotTypeConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.lexSlotType.LexSlotTypeConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.lexSlotType.LexSlotTypeConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `enumerationValue`<sup>Required</sup> <a name="enumerationValue" id="@cdktf/aws-cdk.lexSlotType.LexSlotTypeConfig.property.enumerationValue"></a>

```typescript
public readonly enumerationValue: IResolvable | LexSlotTypeEnumerationValue[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.lexSlotType.LexSlotTypeEnumerationValue">LexSlotTypeEnumerationValue</a>[]

enumeration_value block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lex_slot_type#enumeration_value LexSlotType#enumeration_value}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/aws-cdk.lexSlotType.LexSlotTypeConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lex_slot_type#name LexSlotType#name}.

---

##### `createVersion`<sup>Optional</sup> <a name="createVersion" id="@cdktf/aws-cdk.lexSlotType.LexSlotTypeConfig.property.createVersion"></a>

```typescript
public readonly createVersion: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lex_slot_type#create_version LexSlotType#create_version}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/aws-cdk.lexSlotType.LexSlotTypeConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lex_slot_type#description LexSlotType#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/aws-cdk.lexSlotType.LexSlotTypeConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lex_slot_type#id LexSlotType#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/aws-cdk.lexSlotType.LexSlotTypeConfig.property.timeouts"></a>

```typescript
public readonly timeouts: LexSlotTypeTimeouts;
```

- *Type:* <a href="#@cdktf/aws-cdk.lexSlotType.LexSlotTypeTimeouts">LexSlotTypeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lex_slot_type#timeouts LexSlotType#timeouts}

---

##### `valueSelectionStrategy`<sup>Optional</sup> <a name="valueSelectionStrategy" id="@cdktf/aws-cdk.lexSlotType.LexSlotTypeConfig.property.valueSelectionStrategy"></a>

```typescript
public readonly valueSelectionStrategy: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lex_slot_type#value_selection_strategy LexSlotType#value_selection_strategy}.

---

### LexSlotTypeEnumerationValue <a name="LexSlotTypeEnumerationValue" id="@cdktf/aws-cdk.lexSlotType.LexSlotTypeEnumerationValue"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.lexSlotType.LexSlotTypeEnumerationValue.Initializer"></a>

```typescript
import { lexSlotType } from '@cdktf/aws-cdk'

const lexSlotTypeEnumerationValue: lexSlotType.LexSlotTypeEnumerationValue = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.lexSlotType.LexSlotTypeEnumerationValue.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lex_slot_type#value LexSlotType#value}. |
| <code><a href="#@cdktf/aws-cdk.lexSlotType.LexSlotTypeEnumerationValue.property.synonyms">synonyms</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lex_slot_type#synonyms LexSlotType#synonyms}. |

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.lexSlotType.LexSlotTypeEnumerationValue.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lex_slot_type#value LexSlotType#value}.

---

##### `synonyms`<sup>Optional</sup> <a name="synonyms" id="@cdktf/aws-cdk.lexSlotType.LexSlotTypeEnumerationValue.property.synonyms"></a>

```typescript
public readonly synonyms: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lex_slot_type#synonyms LexSlotType#synonyms}.

---

### LexSlotTypeTimeouts <a name="LexSlotTypeTimeouts" id="@cdktf/aws-cdk.lexSlotType.LexSlotTypeTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.lexSlotType.LexSlotTypeTimeouts.Initializer"></a>

```typescript
import { lexSlotType } from '@cdktf/aws-cdk'

const lexSlotTypeTimeouts: lexSlotType.LexSlotTypeTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.lexSlotType.LexSlotTypeTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lex_slot_type#create LexSlotType#create}. |
| <code><a href="#@cdktf/aws-cdk.lexSlotType.LexSlotTypeTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lex_slot_type#delete LexSlotType#delete}. |
| <code><a href="#@cdktf/aws-cdk.lexSlotType.LexSlotTypeTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lex_slot_type#update LexSlotType#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/aws-cdk.lexSlotType.LexSlotTypeTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lex_slot_type#create LexSlotType#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/aws-cdk.lexSlotType.LexSlotTypeTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lex_slot_type#delete LexSlotType#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/aws-cdk.lexSlotType.LexSlotTypeTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/lex_slot_type#update LexSlotType#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### LexSlotTypeEnumerationValueList <a name="LexSlotTypeEnumerationValueList" id="@cdktf/aws-cdk.lexSlotType.LexSlotTypeEnumerationValueList"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.lexSlotType.LexSlotTypeEnumerationValueList.Initializer"></a>

```typescript
import { lexSlotType } from '@cdktf/aws-cdk'

new lexSlotType.LexSlotTypeEnumerationValueList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.lexSlotType.LexSlotTypeEnumerationValueList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.lexSlotType.LexSlotTypeEnumerationValueList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.lexSlotType.LexSlotTypeEnumerationValueList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.lexSlotType.LexSlotTypeEnumerationValueList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexSlotType.LexSlotTypeEnumerationValueList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/aws-cdk.lexSlotType.LexSlotTypeEnumerationValueList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.lexSlotType.LexSlotTypeEnumerationValueList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexSlotType.LexSlotTypeEnumerationValueList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.lexSlotType.LexSlotTypeEnumerationValueList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.lexSlotType.LexSlotTypeEnumerationValueList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.lexSlotType.LexSlotTypeEnumerationValueList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.lexSlotType.LexSlotTypeEnumerationValueList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.lexSlotType.LexSlotTypeEnumerationValueList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.lexSlotType.LexSlotTypeEnumerationValueList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/aws-cdk.lexSlotType.LexSlotTypeEnumerationValueList.get"></a>

```typescript
public get(index: number): LexSlotTypeEnumerationValueOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/aws-cdk.lexSlotType.LexSlotTypeEnumerationValueList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.lexSlotType.LexSlotTypeEnumerationValueList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.lexSlotType.LexSlotTypeEnumerationValueList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexSlotType.LexSlotTypeEnumerationValueList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.lexSlotType.LexSlotTypeEnumerationValue">LexSlotTypeEnumerationValue</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.lexSlotType.LexSlotTypeEnumerationValueList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.lexSlotType.LexSlotTypeEnumerationValueList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.lexSlotType.LexSlotTypeEnumerationValueList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LexSlotTypeEnumerationValue[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.lexSlotType.LexSlotTypeEnumerationValue">LexSlotTypeEnumerationValue</a>[]

---


### LexSlotTypeEnumerationValueOutputReference <a name="LexSlotTypeEnumerationValueOutputReference" id="@cdktf/aws-cdk.lexSlotType.LexSlotTypeEnumerationValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.lexSlotType.LexSlotTypeEnumerationValueOutputReference.Initializer"></a>

```typescript
import { lexSlotType } from '@cdktf/aws-cdk'

new lexSlotType.LexSlotTypeEnumerationValueOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.lexSlotType.LexSlotTypeEnumerationValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.lexSlotType.LexSlotTypeEnumerationValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.lexSlotType.LexSlotTypeEnumerationValueOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/aws-cdk.lexSlotType.LexSlotTypeEnumerationValueOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.lexSlotType.LexSlotTypeEnumerationValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexSlotType.LexSlotTypeEnumerationValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/aws-cdk.lexSlotType.LexSlotTypeEnumerationValueOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/aws-cdk.lexSlotType.LexSlotTypeEnumerationValueOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.lexSlotType.LexSlotTypeEnumerationValueOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexSlotType.LexSlotTypeEnumerationValueOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexSlotType.LexSlotTypeEnumerationValueOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexSlotType.LexSlotTypeEnumerationValueOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexSlotType.LexSlotTypeEnumerationValueOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexSlotType.LexSlotTypeEnumerationValueOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexSlotType.LexSlotTypeEnumerationValueOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexSlotType.LexSlotTypeEnumerationValueOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexSlotType.LexSlotTypeEnumerationValueOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexSlotType.LexSlotTypeEnumerationValueOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexSlotType.LexSlotTypeEnumerationValueOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexSlotType.LexSlotTypeEnumerationValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.lexSlotType.LexSlotTypeEnumerationValueOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.lexSlotType.LexSlotTypeEnumerationValueOutputReference.resetSynonyms">resetSynonyms</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.lexSlotType.LexSlotTypeEnumerationValueOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.lexSlotType.LexSlotTypeEnumerationValueOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexSlotType.LexSlotTypeEnumerationValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.lexSlotType.LexSlotTypeEnumerationValueOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexSlotType.LexSlotTypeEnumerationValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.lexSlotType.LexSlotTypeEnumerationValueOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexSlotType.LexSlotTypeEnumerationValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.lexSlotType.LexSlotTypeEnumerationValueOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexSlotType.LexSlotTypeEnumerationValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.lexSlotType.LexSlotTypeEnumerationValueOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexSlotType.LexSlotTypeEnumerationValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.lexSlotType.LexSlotTypeEnumerationValueOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexSlotType.LexSlotTypeEnumerationValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.lexSlotType.LexSlotTypeEnumerationValueOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexSlotType.LexSlotTypeEnumerationValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.lexSlotType.LexSlotTypeEnumerationValueOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexSlotType.LexSlotTypeEnumerationValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.lexSlotType.LexSlotTypeEnumerationValueOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexSlotType.LexSlotTypeEnumerationValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.lexSlotType.LexSlotTypeEnumerationValueOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.lexSlotType.LexSlotTypeEnumerationValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.lexSlotType.LexSlotTypeEnumerationValueOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.lexSlotType.LexSlotTypeEnumerationValueOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.lexSlotType.LexSlotTypeEnumerationValueOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSynonyms` <a name="resetSynonyms" id="@cdktf/aws-cdk.lexSlotType.LexSlotTypeEnumerationValueOutputReference.resetSynonyms"></a>

```typescript
public resetSynonyms(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.lexSlotType.LexSlotTypeEnumerationValueOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.lexSlotType.LexSlotTypeEnumerationValueOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexSlotType.LexSlotTypeEnumerationValueOutputReference.property.synonymsInput">synonymsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexSlotType.LexSlotTypeEnumerationValueOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexSlotType.LexSlotTypeEnumerationValueOutputReference.property.synonyms">synonyms</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexSlotType.LexSlotTypeEnumerationValueOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexSlotType.LexSlotTypeEnumerationValueOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.lexSlotType.LexSlotTypeEnumerationValue">LexSlotTypeEnumerationValue</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.lexSlotType.LexSlotTypeEnumerationValueOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.lexSlotType.LexSlotTypeEnumerationValueOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `synonymsInput`<sup>Optional</sup> <a name="synonymsInput" id="@cdktf/aws-cdk.lexSlotType.LexSlotTypeEnumerationValueOutputReference.property.synonymsInput"></a>

```typescript
public readonly synonymsInput: string[];
```

- *Type:* string[]

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/aws-cdk.lexSlotType.LexSlotTypeEnumerationValueOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `synonyms`<sup>Required</sup> <a name="synonyms" id="@cdktf/aws-cdk.lexSlotType.LexSlotTypeEnumerationValueOutputReference.property.synonyms"></a>

```typescript
public readonly synonyms: string[];
```

- *Type:* string[]

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.lexSlotType.LexSlotTypeEnumerationValueOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.lexSlotType.LexSlotTypeEnumerationValueOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LexSlotTypeEnumerationValue;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.lexSlotType.LexSlotTypeEnumerationValue">LexSlotTypeEnumerationValue</a>

---


### LexSlotTypeTimeoutsOutputReference <a name="LexSlotTypeTimeoutsOutputReference" id="@cdktf/aws-cdk.lexSlotType.LexSlotTypeTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.lexSlotType.LexSlotTypeTimeoutsOutputReference.Initializer"></a>

```typescript
import { lexSlotType } from '@cdktf/aws-cdk'

new lexSlotType.LexSlotTypeTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.lexSlotType.LexSlotTypeTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.lexSlotType.LexSlotTypeTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.lexSlotType.LexSlotTypeTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexSlotType.LexSlotTypeTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.lexSlotType.LexSlotTypeTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexSlotType.LexSlotTypeTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexSlotType.LexSlotTypeTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexSlotType.LexSlotTypeTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexSlotType.LexSlotTypeTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexSlotType.LexSlotTypeTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexSlotType.LexSlotTypeTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexSlotType.LexSlotTypeTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexSlotType.LexSlotTypeTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexSlotType.LexSlotTypeTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexSlotType.LexSlotTypeTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexSlotType.LexSlotTypeTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.lexSlotType.LexSlotTypeTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.lexSlotType.LexSlotTypeTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexSlotType.LexSlotTypeTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexSlotType.LexSlotTypeTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.lexSlotType.LexSlotTypeTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.lexSlotType.LexSlotTypeTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexSlotType.LexSlotTypeTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.lexSlotType.LexSlotTypeTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexSlotType.LexSlotTypeTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.lexSlotType.LexSlotTypeTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexSlotType.LexSlotTypeTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.lexSlotType.LexSlotTypeTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexSlotType.LexSlotTypeTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.lexSlotType.LexSlotTypeTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexSlotType.LexSlotTypeTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.lexSlotType.LexSlotTypeTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexSlotType.LexSlotTypeTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.lexSlotType.LexSlotTypeTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexSlotType.LexSlotTypeTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.lexSlotType.LexSlotTypeTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexSlotType.LexSlotTypeTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.lexSlotType.LexSlotTypeTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.lexSlotType.LexSlotTypeTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.lexSlotType.LexSlotTypeTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.lexSlotType.LexSlotTypeTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.lexSlotType.LexSlotTypeTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.lexSlotType.LexSlotTypeTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.lexSlotType.LexSlotTypeTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/aws-cdk.lexSlotType.LexSlotTypeTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/aws-cdk.lexSlotType.LexSlotTypeTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/aws-cdk.lexSlotType.LexSlotTypeTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.lexSlotType.LexSlotTypeTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.lexSlotType.LexSlotTypeTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexSlotType.LexSlotTypeTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexSlotType.LexSlotTypeTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexSlotType.LexSlotTypeTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexSlotType.LexSlotTypeTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexSlotType.LexSlotTypeTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexSlotType.LexSlotTypeTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.lexSlotType.LexSlotTypeTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.lexSlotType.LexSlotTypeTimeouts">LexSlotTypeTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.lexSlotType.LexSlotTypeTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.lexSlotType.LexSlotTypeTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/aws-cdk.lexSlotType.LexSlotTypeTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/aws-cdk.lexSlotType.LexSlotTypeTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/aws-cdk.lexSlotType.LexSlotTypeTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/aws-cdk.lexSlotType.LexSlotTypeTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/aws-cdk.lexSlotType.LexSlotTypeTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/aws-cdk.lexSlotType.LexSlotTypeTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.lexSlotType.LexSlotTypeTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LexSlotTypeTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.lexSlotType.LexSlotTypeTimeouts">LexSlotTypeTimeouts</a>

---



