# `aws_waf_regex_match_set`

Refer to the Terraform Registory for docs: [`aws_waf_regex_match_set`](https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/waf_regex_match_set).

# `wafRegexMatchSet` Submodule <a name="`wafRegexMatchSet` Submodule" id="@cdktf/aws-cdk.wafRegexMatchSet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WafRegexMatchSet <a name="WafRegexMatchSet" id="@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSet"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/waf_regex_match_set aws_waf_regex_match_set}.

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSet.Initializer"></a>

```typescript
import { wafRegexMatchSet } from '@cdktf/aws-cdk'

new wafRegexMatchSet.WafRegexMatchSet(scope: Construct, id: string, config: WafRegexMatchSetConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSet.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSet.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSet.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSetConfig">WafRegexMatchSetConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSet.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSet.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSet.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSetConfig">WafRegexMatchSetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSet.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSet.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSet.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSet.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSet.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSet.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSet.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSet.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSet.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSet.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSet.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSet.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSet.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSet.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSet.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSet.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSet.putRegexMatchTuple">putRegexMatchTuple</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSet.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSet.resetRegexMatchTuple">resetRegexMatchTuple</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSet.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSet.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSet.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSet.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSet.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSet.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSet.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSet.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSet.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSet.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSet.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSet.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSet.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSet.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSet.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSet.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSet.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSet.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putRegexMatchTuple` <a name="putRegexMatchTuple" id="@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSet.putRegexMatchTuple"></a>

```typescript
public putRegexMatchTuple(value: IResolvable | WafRegexMatchSetRegexMatchTuple[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSet.putRegexMatchTuple.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSetRegexMatchTuple">WafRegexMatchSetRegexMatchTuple</a>[]

---

##### `resetId` <a name="resetId" id="@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSet.resetId"></a>

```typescript
public resetId(): void
```

##### `resetRegexMatchTuple` <a name="resetRegexMatchTuple" id="@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSet.resetRegexMatchTuple"></a>

```typescript
public resetRegexMatchTuple(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSet.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSet.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSet.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSet.isConstruct"></a>

```typescript
import { wafRegexMatchSet } from '@cdktf/aws-cdk'

wafRegexMatchSet.WafRegexMatchSet.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSet.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSet.isTerraformElement"></a>

```typescript
import { wafRegexMatchSet } from '@cdktf/aws-cdk'

wafRegexMatchSet.WafRegexMatchSet.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSet.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSet.isTerraformResource"></a>

```typescript
import { wafRegexMatchSet } from '@cdktf/aws-cdk'

wafRegexMatchSet.WafRegexMatchSet.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSet.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSet.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSet.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSet.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSet.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSet.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSet.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSet.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSet.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSet.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSet.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSet.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSet.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSet.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSet.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSet.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSet.property.regexMatchTuple">regexMatchTuple</a></code> | <code><a href="#@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleList">WafRegexMatchSetRegexMatchTupleList</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSet.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSet.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSet.property.regexMatchTupleInput">regexMatchTupleInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSetRegexMatchTuple">WafRegexMatchSetRegexMatchTuple</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSet.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSet.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSet.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSet.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSet.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSet.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSet.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSet.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSet.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSet.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSet.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSet.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSet.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSet.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSet.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSet.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSet.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `regexMatchTuple`<sup>Required</sup> <a name="regexMatchTuple" id="@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSet.property.regexMatchTuple"></a>

```typescript
public readonly regexMatchTuple: WafRegexMatchSetRegexMatchTupleList;
```

- *Type:* <a href="#@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleList">WafRegexMatchSetRegexMatchTupleList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSet.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSet.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regexMatchTupleInput`<sup>Optional</sup> <a name="regexMatchTupleInput" id="@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSet.property.regexMatchTupleInput"></a>

```typescript
public readonly regexMatchTupleInput: IResolvable | WafRegexMatchSetRegexMatchTuple[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSetRegexMatchTuple">WafRegexMatchSetRegexMatchTuple</a>[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSet.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSet.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSet.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSet.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### WafRegexMatchSetConfig <a name="WafRegexMatchSetConfig" id="@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSetConfig.Initializer"></a>

```typescript
import { wafRegexMatchSet } from '@cdktf/aws-cdk'

const wafRegexMatchSetConfig: wafRegexMatchSet.WafRegexMatchSetConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSetConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSetConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSetConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSetConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSetConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSetConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSetConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/waf_regex_match_set#name WafRegexMatchSet#name}. |
| <code><a href="#@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSetConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/waf_regex_match_set#id WafRegexMatchSet#id}. |
| <code><a href="#@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSetConfig.property.regexMatchTuple">regexMatchTuple</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSetRegexMatchTuple">WafRegexMatchSetRegexMatchTuple</a>[]</code> | regex_match_tuple block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSetConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSetConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSetConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSetConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSetConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSetConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSetConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSetConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/waf_regex_match_set#name WafRegexMatchSet#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSetConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/waf_regex_match_set#id WafRegexMatchSet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `regexMatchTuple`<sup>Optional</sup> <a name="regexMatchTuple" id="@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSetConfig.property.regexMatchTuple"></a>

```typescript
public readonly regexMatchTuple: IResolvable | WafRegexMatchSetRegexMatchTuple[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSetRegexMatchTuple">WafRegexMatchSetRegexMatchTuple</a>[]

regex_match_tuple block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/waf_regex_match_set#regex_match_tuple WafRegexMatchSet#regex_match_tuple}

---

### WafRegexMatchSetRegexMatchTuple <a name="WafRegexMatchSetRegexMatchTuple" id="@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSetRegexMatchTuple"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSetRegexMatchTuple.Initializer"></a>

```typescript
import { wafRegexMatchSet } from '@cdktf/aws-cdk'

const wafRegexMatchSetRegexMatchTuple: wafRegexMatchSet.WafRegexMatchSetRegexMatchTuple = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSetRegexMatchTuple.property.fieldToMatch">fieldToMatch</a></code> | <code><a href="#@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleFieldToMatch">WafRegexMatchSetRegexMatchTupleFieldToMatch</a></code> | field_to_match block. |
| <code><a href="#@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSetRegexMatchTuple.property.regexPatternSetId">regexPatternSetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/waf_regex_match_set#regex_pattern_set_id WafRegexMatchSet#regex_pattern_set_id}. |
| <code><a href="#@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSetRegexMatchTuple.property.textTransformation">textTransformation</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/waf_regex_match_set#text_transformation WafRegexMatchSet#text_transformation}. |

---

##### `fieldToMatch`<sup>Required</sup> <a name="fieldToMatch" id="@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSetRegexMatchTuple.property.fieldToMatch"></a>

```typescript
public readonly fieldToMatch: WafRegexMatchSetRegexMatchTupleFieldToMatch;
```

- *Type:* <a href="#@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleFieldToMatch">WafRegexMatchSetRegexMatchTupleFieldToMatch</a>

field_to_match block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/waf_regex_match_set#field_to_match WafRegexMatchSet#field_to_match}

---

##### `regexPatternSetId`<sup>Required</sup> <a name="regexPatternSetId" id="@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSetRegexMatchTuple.property.regexPatternSetId"></a>

```typescript
public readonly regexPatternSetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/waf_regex_match_set#regex_pattern_set_id WafRegexMatchSet#regex_pattern_set_id}.

---

##### `textTransformation`<sup>Required</sup> <a name="textTransformation" id="@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSetRegexMatchTuple.property.textTransformation"></a>

```typescript
public readonly textTransformation: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/waf_regex_match_set#text_transformation WafRegexMatchSet#text_transformation}.

---

### WafRegexMatchSetRegexMatchTupleFieldToMatch <a name="WafRegexMatchSetRegexMatchTupleFieldToMatch" id="@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleFieldToMatch"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleFieldToMatch.Initializer"></a>

```typescript
import { wafRegexMatchSet } from '@cdktf/aws-cdk'

const wafRegexMatchSetRegexMatchTupleFieldToMatch: wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleFieldToMatch = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleFieldToMatch.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/waf_regex_match_set#type WafRegexMatchSet#type}. |
| <code><a href="#@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleFieldToMatch.property.data">data</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/waf_regex_match_set#data WafRegexMatchSet#data}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleFieldToMatch.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/waf_regex_match_set#type WafRegexMatchSet#type}.

---

##### `data`<sup>Optional</sup> <a name="data" id="@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleFieldToMatch.property.data"></a>

```typescript
public readonly data: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/waf_regex_match_set#data WafRegexMatchSet#data}.

---

## Classes <a name="Classes" id="Classes"></a>

### WafRegexMatchSetRegexMatchTupleFieldToMatchOutputReference <a name="WafRegexMatchSetRegexMatchTupleFieldToMatchOutputReference" id="@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleFieldToMatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.Initializer"></a>

```typescript
import { wafRegexMatchSet } from '@cdktf/aws-cdk'

new wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleFieldToMatchOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.resetData">resetData</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetData` <a name="resetData" id="@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.resetData"></a>

```typescript
public resetData(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.property.dataInput">dataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.property.data">data</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleFieldToMatch">WafRegexMatchSetRegexMatchTupleFieldToMatch</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dataInput`<sup>Optional</sup> <a name="dataInput" id="@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.property.dataInput"></a>

```typescript
public readonly dataInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `data`<sup>Required</sup> <a name="data" id="@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.property.data"></a>

```typescript
public readonly data: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleFieldToMatchOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: WafRegexMatchSetRegexMatchTupleFieldToMatch;
```

- *Type:* <a href="#@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleFieldToMatch">WafRegexMatchSetRegexMatchTupleFieldToMatch</a>

---


### WafRegexMatchSetRegexMatchTupleList <a name="WafRegexMatchSetRegexMatchTupleList" id="@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleList.Initializer"></a>

```typescript
import { wafRegexMatchSet } from '@cdktf/aws-cdk'

new wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleList.get"></a>

```typescript
public get(index: number): WafRegexMatchSetRegexMatchTupleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSetRegexMatchTuple">WafRegexMatchSetRegexMatchTuple</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WafRegexMatchSetRegexMatchTuple[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSetRegexMatchTuple">WafRegexMatchSetRegexMatchTuple</a>[]

---


### WafRegexMatchSetRegexMatchTupleOutputReference <a name="WafRegexMatchSetRegexMatchTupleOutputReference" id="@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleOutputReference.Initializer"></a>

```typescript
import { wafRegexMatchSet } from '@cdktf/aws-cdk'

new wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleOutputReference.putFieldToMatch">putFieldToMatch</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFieldToMatch` <a name="putFieldToMatch" id="@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleOutputReference.putFieldToMatch"></a>

```typescript
public putFieldToMatch(value: WafRegexMatchSetRegexMatchTupleFieldToMatch): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleOutputReference.putFieldToMatch.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleFieldToMatch">WafRegexMatchSetRegexMatchTupleFieldToMatch</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleOutputReference.property.fieldToMatch">fieldToMatch</a></code> | <code><a href="#@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleFieldToMatchOutputReference">WafRegexMatchSetRegexMatchTupleFieldToMatchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleOutputReference.property.fieldToMatchInput">fieldToMatchInput</a></code> | <code><a href="#@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleFieldToMatch">WafRegexMatchSetRegexMatchTupleFieldToMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleOutputReference.property.regexPatternSetIdInput">regexPatternSetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleOutputReference.property.textTransformationInput">textTransformationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleOutputReference.property.regexPatternSetId">regexPatternSetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleOutputReference.property.textTransformation">textTransformation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSetRegexMatchTuple">WafRegexMatchSetRegexMatchTuple</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fieldToMatch`<sup>Required</sup> <a name="fieldToMatch" id="@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleOutputReference.property.fieldToMatch"></a>

```typescript
public readonly fieldToMatch: WafRegexMatchSetRegexMatchTupleFieldToMatchOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleFieldToMatchOutputReference">WafRegexMatchSetRegexMatchTupleFieldToMatchOutputReference</a>

---

##### `fieldToMatchInput`<sup>Optional</sup> <a name="fieldToMatchInput" id="@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleOutputReference.property.fieldToMatchInput"></a>

```typescript
public readonly fieldToMatchInput: WafRegexMatchSetRegexMatchTupleFieldToMatch;
```

- *Type:* <a href="#@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleFieldToMatch">WafRegexMatchSetRegexMatchTupleFieldToMatch</a>

---

##### `regexPatternSetIdInput`<sup>Optional</sup> <a name="regexPatternSetIdInput" id="@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleOutputReference.property.regexPatternSetIdInput"></a>

```typescript
public readonly regexPatternSetIdInput: string;
```

- *Type:* string

---

##### `textTransformationInput`<sup>Optional</sup> <a name="textTransformationInput" id="@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleOutputReference.property.textTransformationInput"></a>

```typescript
public readonly textTransformationInput: string;
```

- *Type:* string

---

##### `regexPatternSetId`<sup>Required</sup> <a name="regexPatternSetId" id="@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleOutputReference.property.regexPatternSetId"></a>

```typescript
public readonly regexPatternSetId: string;
```

- *Type:* string

---

##### `textTransformation`<sup>Required</sup> <a name="textTransformation" id="@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleOutputReference.property.textTransformation"></a>

```typescript
public readonly textTransformation: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSetRegexMatchTupleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WafRegexMatchSetRegexMatchTuple;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.wafRegexMatchSet.WafRegexMatchSetRegexMatchTuple">WafRegexMatchSetRegexMatchTuple</a>

---



