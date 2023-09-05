# `aws_waf_sql_injection_match_set`

Refer to the Terraform Registory for docs: [`aws_waf_sql_injection_match_set`](https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/waf_sql_injection_match_set).

# `wafSqlInjectionMatchSet` Submodule <a name="`wafSqlInjectionMatchSet` Submodule" id="@cdktf/aws-cdk.wafSqlInjectionMatchSet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WafSqlInjectionMatchSet <a name="WafSqlInjectionMatchSet" id="@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/waf_sql_injection_match_set aws_waf_sql_injection_match_set}.

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.Initializer"></a>

```typescript
import { wafSqlInjectionMatchSet } from '@cdktf/aws-cdk'

new wafSqlInjectionMatchSet.WafSqlInjectionMatchSet(scope: Construct, id: string, config: WafSqlInjectionMatchSetConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetConfig">WafSqlInjectionMatchSetConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetConfig">WafSqlInjectionMatchSetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.putSqlInjectionMatchTuples">putSqlInjectionMatchTuples</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.resetSqlInjectionMatchTuples">resetSqlInjectionMatchTuples</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putSqlInjectionMatchTuples` <a name="putSqlInjectionMatchTuples" id="@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.putSqlInjectionMatchTuples"></a>

```typescript
public putSqlInjectionMatchTuples(value: IResolvable | WafSqlInjectionMatchSetSqlInjectionMatchTuples[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.putSqlInjectionMatchTuples.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuples">WafSqlInjectionMatchSetSqlInjectionMatchTuples</a>[]

---

##### `resetId` <a name="resetId" id="@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.resetId"></a>

```typescript
public resetId(): void
```

##### `resetSqlInjectionMatchTuples` <a name="resetSqlInjectionMatchTuples" id="@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.resetSqlInjectionMatchTuples"></a>

```typescript
public resetSqlInjectionMatchTuples(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.isConstruct"></a>

```typescript
import { wafSqlInjectionMatchSet } from '@cdktf/aws-cdk'

wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.isTerraformElement"></a>

```typescript
import { wafSqlInjectionMatchSet } from '@cdktf/aws-cdk'

wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.isTerraformResource"></a>

```typescript
import { wafSqlInjectionMatchSet } from '@cdktf/aws-cdk'

wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.property.sqlInjectionMatchTuples">sqlInjectionMatchTuples</a></code> | <code><a href="#@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesList">WafSqlInjectionMatchSetSqlInjectionMatchTuplesList</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.property.sqlInjectionMatchTuplesInput">sqlInjectionMatchTuplesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuples">WafSqlInjectionMatchSetSqlInjectionMatchTuples</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `sqlInjectionMatchTuples`<sup>Required</sup> <a name="sqlInjectionMatchTuples" id="@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.property.sqlInjectionMatchTuples"></a>

```typescript
public readonly sqlInjectionMatchTuples: WafSqlInjectionMatchSetSqlInjectionMatchTuplesList;
```

- *Type:* <a href="#@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesList">WafSqlInjectionMatchSetSqlInjectionMatchTuplesList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `sqlInjectionMatchTuplesInput`<sup>Optional</sup> <a name="sqlInjectionMatchTuplesInput" id="@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.property.sqlInjectionMatchTuplesInput"></a>

```typescript
public readonly sqlInjectionMatchTuplesInput: IResolvable | WafSqlInjectionMatchSetSqlInjectionMatchTuples[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuples">WafSqlInjectionMatchSetSqlInjectionMatchTuples</a>[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSet.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### WafSqlInjectionMatchSetConfig <a name="WafSqlInjectionMatchSetConfig" id="@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetConfig.Initializer"></a>

```typescript
import { wafSqlInjectionMatchSet } from '@cdktf/aws-cdk'

const wafSqlInjectionMatchSetConfig: wafSqlInjectionMatchSet.WafSqlInjectionMatchSetConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/waf_sql_injection_match_set#name WafSqlInjectionMatchSet#name}. |
| <code><a href="#@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/waf_sql_injection_match_set#id WafSqlInjectionMatchSet#id}. |
| <code><a href="#@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetConfig.property.sqlInjectionMatchTuples">sqlInjectionMatchTuples</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuples">WafSqlInjectionMatchSetSqlInjectionMatchTuples</a>[]</code> | sql_injection_match_tuples block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/waf_sql_injection_match_set#name WafSqlInjectionMatchSet#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/waf_sql_injection_match_set#id WafSqlInjectionMatchSet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `sqlInjectionMatchTuples`<sup>Optional</sup> <a name="sqlInjectionMatchTuples" id="@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetConfig.property.sqlInjectionMatchTuples"></a>

```typescript
public readonly sqlInjectionMatchTuples: IResolvable | WafSqlInjectionMatchSetSqlInjectionMatchTuples[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuples">WafSqlInjectionMatchSetSqlInjectionMatchTuples</a>[]

sql_injection_match_tuples block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/waf_sql_injection_match_set#sql_injection_match_tuples WafSqlInjectionMatchSet#sql_injection_match_tuples}

---

### WafSqlInjectionMatchSetSqlInjectionMatchTuples <a name="WafSqlInjectionMatchSetSqlInjectionMatchTuples" id="@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuples"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuples.Initializer"></a>

```typescript
import { wafSqlInjectionMatchSet } from '@cdktf/aws-cdk'

const wafSqlInjectionMatchSetSqlInjectionMatchTuples: wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuples = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuples.property.fieldToMatch">fieldToMatch</a></code> | <code><a href="#@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatch">WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatch</a></code> | field_to_match block. |
| <code><a href="#@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuples.property.textTransformation">textTransformation</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/waf_sql_injection_match_set#text_transformation WafSqlInjectionMatchSet#text_transformation}. |

---

##### `fieldToMatch`<sup>Required</sup> <a name="fieldToMatch" id="@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuples.property.fieldToMatch"></a>

```typescript
public readonly fieldToMatch: WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatch;
```

- *Type:* <a href="#@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatch">WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatch</a>

field_to_match block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/waf_sql_injection_match_set#field_to_match WafSqlInjectionMatchSet#field_to_match}

---

##### `textTransformation`<sup>Required</sup> <a name="textTransformation" id="@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuples.property.textTransformation"></a>

```typescript
public readonly textTransformation: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/waf_sql_injection_match_set#text_transformation WafSqlInjectionMatchSet#text_transformation}.

---

### WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatch <a name="WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatch" id="@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatch"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatch.Initializer"></a>

```typescript
import { wafSqlInjectionMatchSet } from '@cdktf/aws-cdk'

const wafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatch: wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatch = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatch.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/waf_sql_injection_match_set#type WafSqlInjectionMatchSet#type}. |
| <code><a href="#@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatch.property.data">data</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/waf_sql_injection_match_set#data WafSqlInjectionMatchSet#data}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatch.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/waf_sql_injection_match_set#type WafSqlInjectionMatchSet#type}.

---

##### `data`<sup>Optional</sup> <a name="data" id="@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatch.property.data"></a>

```typescript
public readonly data: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/waf_sql_injection_match_set#data WafSqlInjectionMatchSet#data}.

---

## Classes <a name="Classes" id="Classes"></a>

### WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference <a name="WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference" id="@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.Initializer"></a>

```typescript
import { wafSqlInjectionMatchSet } from '@cdktf/aws-cdk'

new wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.resetData">resetData</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetData` <a name="resetData" id="@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.resetData"></a>

```typescript
public resetData(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.property.dataInput">dataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.property.data">data</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatch">WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatch</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dataInput`<sup>Optional</sup> <a name="dataInput" id="@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.property.dataInput"></a>

```typescript
public readonly dataInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `data`<sup>Required</sup> <a name="data" id="@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.property.data"></a>

```typescript
public readonly data: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatch;
```

- *Type:* <a href="#@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatch">WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatch</a>

---


### WafSqlInjectionMatchSetSqlInjectionMatchTuplesList <a name="WafSqlInjectionMatchSetSqlInjectionMatchTuplesList" id="@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesList.Initializer"></a>

```typescript
import { wafSqlInjectionMatchSet } from '@cdktf/aws-cdk'

new wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesList.get"></a>

```typescript
public get(index: number): WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuples">WafSqlInjectionMatchSetSqlInjectionMatchTuples</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WafSqlInjectionMatchSetSqlInjectionMatchTuples[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuples">WafSqlInjectionMatchSetSqlInjectionMatchTuples</a>[]

---


### WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference <a name="WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference" id="@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.Initializer"></a>

```typescript
import { wafSqlInjectionMatchSet } from '@cdktf/aws-cdk'

new wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.putFieldToMatch">putFieldToMatch</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFieldToMatch` <a name="putFieldToMatch" id="@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.putFieldToMatch"></a>

```typescript
public putFieldToMatch(value: WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatch): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.putFieldToMatch.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatch">WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatch</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.property.fieldToMatch">fieldToMatch</a></code> | <code><a href="#@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference">WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.property.fieldToMatchInput">fieldToMatchInput</a></code> | <code><a href="#@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatch">WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.property.textTransformationInput">textTransformationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.property.textTransformation">textTransformation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuples">WafSqlInjectionMatchSetSqlInjectionMatchTuples</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fieldToMatch`<sup>Required</sup> <a name="fieldToMatch" id="@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.property.fieldToMatch"></a>

```typescript
public readonly fieldToMatch: WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference">WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatchOutputReference</a>

---

##### `fieldToMatchInput`<sup>Optional</sup> <a name="fieldToMatchInput" id="@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.property.fieldToMatchInput"></a>

```typescript
public readonly fieldToMatchInput: WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatch;
```

- *Type:* <a href="#@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatch">WafSqlInjectionMatchSetSqlInjectionMatchTuplesFieldToMatch</a>

---

##### `textTransformationInput`<sup>Optional</sup> <a name="textTransformationInput" id="@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.property.textTransformationInput"></a>

```typescript
public readonly textTransformationInput: string;
```

- *Type:* string

---

##### `textTransformation`<sup>Required</sup> <a name="textTransformation" id="@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.property.textTransformation"></a>

```typescript
public readonly textTransformation: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuplesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WafSqlInjectionMatchSetSqlInjectionMatchTuples;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.wafSqlInjectionMatchSet.WafSqlInjectionMatchSetSqlInjectionMatchTuples">WafSqlInjectionMatchSetSqlInjectionMatchTuples</a>

---



