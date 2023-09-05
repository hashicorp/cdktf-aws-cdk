# `aws_waf_rate_based_rule`

Refer to the Terraform Registory for docs: [`aws_waf_rate_based_rule`](https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/waf_rate_based_rule).

# `wafRateBasedRule` Submodule <a name="`wafRateBasedRule` Submodule" id="@cdktf/aws-cdk.wafRateBasedRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WafRateBasedRule <a name="WafRateBasedRule" id="@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/waf_rate_based_rule aws_waf_rate_based_rule}.

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRule.Initializer"></a>

```typescript
import { wafRateBasedRule } from '@cdktf/aws-cdk'

new wafRateBasedRule.WafRateBasedRule(scope: Construct, id: string, config: WafRateBasedRuleConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRule.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRuleConfig">WafRateBasedRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRuleConfig">WafRateBasedRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRule.putPredicates">putPredicates</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRule.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRule.resetPredicates">resetPredicates</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRule.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRule.resetTagsAll">resetTagsAll</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRule.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRule.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRule.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRule.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRule.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRule.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRule.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRule.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRule.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRule.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRule.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRule.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRule.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRule.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRule.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRule.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRule.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putPredicates` <a name="putPredicates" id="@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRule.putPredicates"></a>

```typescript
public putPredicates(value: IResolvable | WafRateBasedRulePredicates[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRule.putPredicates.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRulePredicates">WafRateBasedRulePredicates</a>[]

---

##### `resetId` <a name="resetId" id="@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRule.resetId"></a>

```typescript
public resetId(): void
```

##### `resetPredicates` <a name="resetPredicates" id="@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRule.resetPredicates"></a>

```typescript
public resetPredicates(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRule.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRule.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRule.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRule.isConstruct"></a>

```typescript
import { wafRateBasedRule } from '@cdktf/aws-cdk'

wafRateBasedRule.WafRateBasedRule.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRule.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRule.isTerraformElement"></a>

```typescript
import { wafRateBasedRule } from '@cdktf/aws-cdk'

wafRateBasedRule.WafRateBasedRule.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRule.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRule.isTerraformResource"></a>

```typescript
import { wafRateBasedRule } from '@cdktf/aws-cdk'

wafRateBasedRule.WafRateBasedRule.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRule.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRule.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRule.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRule.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRule.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRule.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRule.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRule.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRule.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRule.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRule.property.predicates">predicates</a></code> | <code><a href="#@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRulePredicatesList">WafRateBasedRulePredicatesList</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRule.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRule.property.metricNameInput">metricNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRule.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRule.property.predicatesInput">predicatesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRulePredicates">WafRateBasedRulePredicates</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRule.property.rateKeyInput">rateKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRule.property.rateLimitInput">rateLimitInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRule.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRule.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRule.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRule.property.metricName">metricName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRule.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRule.property.rateKey">rateKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRule.property.rateLimit">rateLimit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRule.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRule.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRule.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRule.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRule.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRule.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRule.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRule.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRule.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRule.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRule.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRule.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRule.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRule.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRule.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRule.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRule.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `predicates`<sup>Required</sup> <a name="predicates" id="@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRule.property.predicates"></a>

```typescript
public readonly predicates: WafRateBasedRulePredicatesList;
```

- *Type:* <a href="#@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRulePredicatesList">WafRateBasedRulePredicatesList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRule.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `metricNameInput`<sup>Optional</sup> <a name="metricNameInput" id="@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRule.property.metricNameInput"></a>

```typescript
public readonly metricNameInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRule.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `predicatesInput`<sup>Optional</sup> <a name="predicatesInput" id="@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRule.property.predicatesInput"></a>

```typescript
public readonly predicatesInput: IResolvable | WafRateBasedRulePredicates[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRulePredicates">WafRateBasedRulePredicates</a>[]

---

##### `rateKeyInput`<sup>Optional</sup> <a name="rateKeyInput" id="@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRule.property.rateKeyInput"></a>

```typescript
public readonly rateKeyInput: string;
```

- *Type:* string

---

##### `rateLimitInput`<sup>Optional</sup> <a name="rateLimitInput" id="@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRule.property.rateLimitInput"></a>

```typescript
public readonly rateLimitInput: number;
```

- *Type:* number

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRule.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRule.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRule.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `metricName`<sup>Required</sup> <a name="metricName" id="@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRule.property.metricName"></a>

```typescript
public readonly metricName: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRule.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `rateKey`<sup>Required</sup> <a name="rateKey" id="@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRule.property.rateKey"></a>

```typescript
public readonly rateKey: string;
```

- *Type:* string

---

##### `rateLimit`<sup>Required</sup> <a name="rateLimit" id="@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRule.property.rateLimit"></a>

```typescript
public readonly rateLimit: number;
```

- *Type:* number

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRule.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRule.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRule.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRule.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### WafRateBasedRuleConfig <a name="WafRateBasedRuleConfig" id="@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRuleConfig.Initializer"></a>

```typescript
import { wafRateBasedRule } from '@cdktf/aws-cdk'

const wafRateBasedRuleConfig: wafRateBasedRule.WafRateBasedRuleConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRuleConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRuleConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRuleConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRuleConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRuleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRuleConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRuleConfig.property.metricName">metricName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/waf_rate_based_rule#metric_name WafRateBasedRule#metric_name}. |
| <code><a href="#@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRuleConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/waf_rate_based_rule#name WafRateBasedRule#name}. |
| <code><a href="#@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRuleConfig.property.rateKey">rateKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/waf_rate_based_rule#rate_key WafRateBasedRule#rate_key}. |
| <code><a href="#@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRuleConfig.property.rateLimit">rateLimit</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/waf_rate_based_rule#rate_limit WafRateBasedRule#rate_limit}. |
| <code><a href="#@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRuleConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/waf_rate_based_rule#id WafRateBasedRule#id}. |
| <code><a href="#@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRuleConfig.property.predicates">predicates</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRulePredicates">WafRateBasedRulePredicates</a>[]</code> | predicates block. |
| <code><a href="#@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRuleConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/waf_rate_based_rule#tags WafRateBasedRule#tags}. |
| <code><a href="#@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRuleConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/waf_rate_based_rule#tags_all WafRateBasedRule#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRuleConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRuleConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRuleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRuleConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRuleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRuleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRuleConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `metricName`<sup>Required</sup> <a name="metricName" id="@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRuleConfig.property.metricName"></a>

```typescript
public readonly metricName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/waf_rate_based_rule#metric_name WafRateBasedRule#metric_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRuleConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/waf_rate_based_rule#name WafRateBasedRule#name}.

---

##### `rateKey`<sup>Required</sup> <a name="rateKey" id="@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRuleConfig.property.rateKey"></a>

```typescript
public readonly rateKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/waf_rate_based_rule#rate_key WafRateBasedRule#rate_key}.

---

##### `rateLimit`<sup>Required</sup> <a name="rateLimit" id="@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRuleConfig.property.rateLimit"></a>

```typescript
public readonly rateLimit: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/waf_rate_based_rule#rate_limit WafRateBasedRule#rate_limit}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRuleConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/waf_rate_based_rule#id WafRateBasedRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `predicates`<sup>Optional</sup> <a name="predicates" id="@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRuleConfig.property.predicates"></a>

```typescript
public readonly predicates: IResolvable | WafRateBasedRulePredicates[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRulePredicates">WafRateBasedRulePredicates</a>[]

predicates block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/waf_rate_based_rule#predicates WafRateBasedRule#predicates}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRuleConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/waf_rate_based_rule#tags WafRateBasedRule#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRuleConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/waf_rate_based_rule#tags_all WafRateBasedRule#tags_all}.

---

### WafRateBasedRulePredicates <a name="WafRateBasedRulePredicates" id="@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRulePredicates"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRulePredicates.Initializer"></a>

```typescript
import { wafRateBasedRule } from '@cdktf/aws-cdk'

const wafRateBasedRulePredicates: wafRateBasedRule.WafRateBasedRulePredicates = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRulePredicates.property.dataId">dataId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/waf_rate_based_rule#data_id WafRateBasedRule#data_id}. |
| <code><a href="#@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRulePredicates.property.negated">negated</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/waf_rate_based_rule#negated WafRateBasedRule#negated}. |
| <code><a href="#@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRulePredicates.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/waf_rate_based_rule#type WafRateBasedRule#type}. |

---

##### `dataId`<sup>Required</sup> <a name="dataId" id="@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRulePredicates.property.dataId"></a>

```typescript
public readonly dataId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/waf_rate_based_rule#data_id WafRateBasedRule#data_id}.

---

##### `negated`<sup>Required</sup> <a name="negated" id="@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRulePredicates.property.negated"></a>

```typescript
public readonly negated: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/waf_rate_based_rule#negated WafRateBasedRule#negated}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRulePredicates.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/waf_rate_based_rule#type WafRateBasedRule#type}.

---

## Classes <a name="Classes" id="Classes"></a>

### WafRateBasedRulePredicatesList <a name="WafRateBasedRulePredicatesList" id="@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRulePredicatesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRulePredicatesList.Initializer"></a>

```typescript
import { wafRateBasedRule } from '@cdktf/aws-cdk'

new wafRateBasedRule.WafRateBasedRulePredicatesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRulePredicatesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRulePredicatesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRulePredicatesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRulePredicatesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRulePredicatesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRulePredicatesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRulePredicatesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRulePredicatesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRulePredicatesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRulePredicatesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRulePredicatesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRulePredicatesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRulePredicatesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRulePredicatesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRulePredicatesList.get"></a>

```typescript
public get(index: number): WafRateBasedRulePredicatesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRulePredicatesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRulePredicatesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRulePredicatesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRulePredicatesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRulePredicates">WafRateBasedRulePredicates</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRulePredicatesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRulePredicatesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRulePredicatesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WafRateBasedRulePredicates[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRulePredicates">WafRateBasedRulePredicates</a>[]

---


### WafRateBasedRulePredicatesOutputReference <a name="WafRateBasedRulePredicatesOutputReference" id="@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRulePredicatesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRulePredicatesOutputReference.Initializer"></a>

```typescript
import { wafRateBasedRule } from '@cdktf/aws-cdk'

new wafRateBasedRule.WafRateBasedRulePredicatesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRulePredicatesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRulePredicatesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRulePredicatesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRulePredicatesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRulePredicatesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRulePredicatesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRulePredicatesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRulePredicatesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRulePredicatesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRulePredicatesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRulePredicatesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRulePredicatesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRulePredicatesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRulePredicatesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRulePredicatesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRulePredicatesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRulePredicatesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRulePredicatesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRulePredicatesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRulePredicatesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRulePredicatesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRulePredicatesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRulePredicatesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRulePredicatesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRulePredicatesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRulePredicatesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRulePredicatesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRulePredicatesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRulePredicatesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRulePredicatesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRulePredicatesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRulePredicatesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRulePredicatesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRulePredicatesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRulePredicatesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRulePredicatesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRulePredicatesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRulePredicatesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRulePredicatesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRulePredicatesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRulePredicatesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRulePredicatesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRulePredicatesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRulePredicatesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRulePredicatesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRulePredicatesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRulePredicatesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRulePredicatesOutputReference.property.dataIdInput">dataIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRulePredicatesOutputReference.property.negatedInput">negatedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRulePredicatesOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRulePredicatesOutputReference.property.dataId">dataId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRulePredicatesOutputReference.property.negated">negated</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRulePredicatesOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRulePredicatesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRulePredicates">WafRateBasedRulePredicates</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRulePredicatesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRulePredicatesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dataIdInput`<sup>Optional</sup> <a name="dataIdInput" id="@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRulePredicatesOutputReference.property.dataIdInput"></a>

```typescript
public readonly dataIdInput: string;
```

- *Type:* string

---

##### `negatedInput`<sup>Optional</sup> <a name="negatedInput" id="@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRulePredicatesOutputReference.property.negatedInput"></a>

```typescript
public readonly negatedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRulePredicatesOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `dataId`<sup>Required</sup> <a name="dataId" id="@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRulePredicatesOutputReference.property.dataId"></a>

```typescript
public readonly dataId: string;
```

- *Type:* string

---

##### `negated`<sup>Required</sup> <a name="negated" id="@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRulePredicatesOutputReference.property.negated"></a>

```typescript
public readonly negated: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRulePredicatesOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRulePredicatesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WafRateBasedRulePredicates;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.wafRateBasedRule.WafRateBasedRulePredicates">WafRateBasedRulePredicates</a>

---



