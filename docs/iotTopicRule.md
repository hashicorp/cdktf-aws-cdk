# `aws_iot_topic_rule`

Refer to the Terraform Registory for docs: [`aws_iot_topic_rule`](https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule).

# `iotTopicRule` Submodule <a name="`iotTopicRule` Submodule" id="@cdktf/aws-cdk.iotTopicRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IotTopicRule <a name="IotTopicRule" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule aws_iot_topic_rule}.

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRule.Initializer"></a>

```typescript
import { iotTopicRule } from '@cdktf/aws-cdk'

new iotTopicRule.IotTopicRule(scope: Construct, id: string, config: IotTopicRuleConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRule.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleConfig">IotTopicRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleConfig">IotTopicRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRule.putCloudwatchAlarm">putCloudwatchAlarm</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRule.putCloudwatchMetric">putCloudwatchMetric</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRule.putDynamodb">putDynamodb</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRule.putDynamodbv2">putDynamodbv2</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRule.putElasticsearch">putElasticsearch</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRule.putErrorAction">putErrorAction</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRule.putFirehose">putFirehose</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRule.putIotAnalytics">putIotAnalytics</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRule.putIotEvents">putIotEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRule.putKinesis">putKinesis</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRule.putLambda">putLambda</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRule.putRepublish">putRepublish</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRule.putS3">putS3</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRule.putSns">putSns</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRule.putSqs">putSqs</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRule.putStepFunctions">putStepFunctions</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRule.resetCloudwatchAlarm">resetCloudwatchAlarm</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRule.resetCloudwatchMetric">resetCloudwatchMetric</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRule.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRule.resetDynamodb">resetDynamodb</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRule.resetDynamodbv2">resetDynamodbv2</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRule.resetElasticsearch">resetElasticsearch</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRule.resetErrorAction">resetErrorAction</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRule.resetFirehose">resetFirehose</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRule.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRule.resetIotAnalytics">resetIotAnalytics</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRule.resetIotEvents">resetIotEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRule.resetKinesis">resetKinesis</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRule.resetLambda">resetLambda</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRule.resetRepublish">resetRepublish</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRule.resetS3">resetS3</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRule.resetSns">resetSns</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRule.resetSqs">resetSqs</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRule.resetStepFunctions">resetStepFunctions</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRule.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRule.resetTagsAll">resetTagsAll</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRule.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRule.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRule.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRule.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRule.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRule.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRule.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRule.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRule.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRule.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRule.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRule.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRule.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRule.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRule.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRule.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRule.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putCloudwatchAlarm` <a name="putCloudwatchAlarm" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRule.putCloudwatchAlarm"></a>

```typescript
public putCloudwatchAlarm(value: IResolvable | IotTopicRuleCloudwatchAlarm[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRule.putCloudwatchAlarm.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleCloudwatchAlarm">IotTopicRuleCloudwatchAlarm</a>[]

---

##### `putCloudwatchMetric` <a name="putCloudwatchMetric" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRule.putCloudwatchMetric"></a>

```typescript
public putCloudwatchMetric(value: IResolvable | IotTopicRuleCloudwatchMetric[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRule.putCloudwatchMetric.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleCloudwatchMetric">IotTopicRuleCloudwatchMetric</a>[]

---

##### `putDynamodb` <a name="putDynamodb" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRule.putDynamodb"></a>

```typescript
public putDynamodb(value: IResolvable | IotTopicRuleDynamodb[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRule.putDynamodb.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodb">IotTopicRuleDynamodb</a>[]

---

##### `putDynamodbv2` <a name="putDynamodbv2" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRule.putDynamodbv2"></a>

```typescript
public putDynamodbv2(value: IResolvable | IotTopicRuleDynamodbv2[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRule.putDynamodbv2.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbv2">IotTopicRuleDynamodbv2</a>[]

---

##### `putElasticsearch` <a name="putElasticsearch" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRule.putElasticsearch"></a>

```typescript
public putElasticsearch(value: IResolvable | IotTopicRuleElasticsearch[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRule.putElasticsearch.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleElasticsearch">IotTopicRuleElasticsearch</a>[]

---

##### `putErrorAction` <a name="putErrorAction" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRule.putErrorAction"></a>

```typescript
public putErrorAction(value: IotTopicRuleErrorAction): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRule.putErrorAction.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorAction">IotTopicRuleErrorAction</a>

---

##### `putFirehose` <a name="putFirehose" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRule.putFirehose"></a>

```typescript
public putFirehose(value: IResolvable | IotTopicRuleFirehose[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRule.putFirehose.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleFirehose">IotTopicRuleFirehose</a>[]

---

##### `putIotAnalytics` <a name="putIotAnalytics" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRule.putIotAnalytics"></a>

```typescript
public putIotAnalytics(value: IResolvable | IotTopicRuleIotAnalytics[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRule.putIotAnalytics.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleIotAnalytics">IotTopicRuleIotAnalytics</a>[]

---

##### `putIotEvents` <a name="putIotEvents" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRule.putIotEvents"></a>

```typescript
public putIotEvents(value: IResolvable | IotTopicRuleIotEvents[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRule.putIotEvents.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleIotEvents">IotTopicRuleIotEvents</a>[]

---

##### `putKinesis` <a name="putKinesis" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRule.putKinesis"></a>

```typescript
public putKinesis(value: IResolvable | IotTopicRuleKinesis[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRule.putKinesis.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleKinesis">IotTopicRuleKinesis</a>[]

---

##### `putLambda` <a name="putLambda" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRule.putLambda"></a>

```typescript
public putLambda(value: IResolvable | IotTopicRuleLambda[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRule.putLambda.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleLambda">IotTopicRuleLambda</a>[]

---

##### `putRepublish` <a name="putRepublish" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRule.putRepublish"></a>

```typescript
public putRepublish(value: IResolvable | IotTopicRuleRepublish[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRule.putRepublish.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleRepublish">IotTopicRuleRepublish</a>[]

---

##### `putS3` <a name="putS3" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRule.putS3"></a>

```typescript
public putS3(value: IResolvable | IotTopicRuleS3[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRule.putS3.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleS3">IotTopicRuleS3</a>[]

---

##### `putSns` <a name="putSns" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRule.putSns"></a>

```typescript
public putSns(value: IResolvable | IotTopicRuleSns[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRule.putSns.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleSns">IotTopicRuleSns</a>[]

---

##### `putSqs` <a name="putSqs" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRule.putSqs"></a>

```typescript
public putSqs(value: IResolvable | IotTopicRuleSqs[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRule.putSqs.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleSqs">IotTopicRuleSqs</a>[]

---

##### `putStepFunctions` <a name="putStepFunctions" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRule.putStepFunctions"></a>

```typescript
public putStepFunctions(value: IResolvable | IotTopicRuleStepFunctions[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRule.putStepFunctions.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleStepFunctions">IotTopicRuleStepFunctions</a>[]

---

##### `resetCloudwatchAlarm` <a name="resetCloudwatchAlarm" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRule.resetCloudwatchAlarm"></a>

```typescript
public resetCloudwatchAlarm(): void
```

##### `resetCloudwatchMetric` <a name="resetCloudwatchMetric" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRule.resetCloudwatchMetric"></a>

```typescript
public resetCloudwatchMetric(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRule.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDynamodb` <a name="resetDynamodb" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRule.resetDynamodb"></a>

```typescript
public resetDynamodb(): void
```

##### `resetDynamodbv2` <a name="resetDynamodbv2" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRule.resetDynamodbv2"></a>

```typescript
public resetDynamodbv2(): void
```

##### `resetElasticsearch` <a name="resetElasticsearch" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRule.resetElasticsearch"></a>

```typescript
public resetElasticsearch(): void
```

##### `resetErrorAction` <a name="resetErrorAction" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRule.resetErrorAction"></a>

```typescript
public resetErrorAction(): void
```

##### `resetFirehose` <a name="resetFirehose" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRule.resetFirehose"></a>

```typescript
public resetFirehose(): void
```

##### `resetId` <a name="resetId" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRule.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIotAnalytics` <a name="resetIotAnalytics" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRule.resetIotAnalytics"></a>

```typescript
public resetIotAnalytics(): void
```

##### `resetIotEvents` <a name="resetIotEvents" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRule.resetIotEvents"></a>

```typescript
public resetIotEvents(): void
```

##### `resetKinesis` <a name="resetKinesis" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRule.resetKinesis"></a>

```typescript
public resetKinesis(): void
```

##### `resetLambda` <a name="resetLambda" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRule.resetLambda"></a>

```typescript
public resetLambda(): void
```

##### `resetRepublish` <a name="resetRepublish" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRule.resetRepublish"></a>

```typescript
public resetRepublish(): void
```

##### `resetS3` <a name="resetS3" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRule.resetS3"></a>

```typescript
public resetS3(): void
```

##### `resetSns` <a name="resetSns" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRule.resetSns"></a>

```typescript
public resetSns(): void
```

##### `resetSqs` <a name="resetSqs" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRule.resetSqs"></a>

```typescript
public resetSqs(): void
```

##### `resetStepFunctions` <a name="resetStepFunctions" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRule.resetStepFunctions"></a>

```typescript
public resetStepFunctions(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRule.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRule.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRule.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRule.isConstruct"></a>

```typescript
import { iotTopicRule } from '@cdktf/aws-cdk'

iotTopicRule.IotTopicRule.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRule.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRule.isTerraformElement"></a>

```typescript
import { iotTopicRule } from '@cdktf/aws-cdk'

iotTopicRule.IotTopicRule.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRule.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRule.isTerraformResource"></a>

```typescript
import { iotTopicRule } from '@cdktf/aws-cdk'

iotTopicRule.IotTopicRule.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRule.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRule.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRule.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRule.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRule.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRule.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRule.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRule.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRule.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRule.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRule.property.cloudwatchAlarm">cloudwatchAlarm</a></code> | <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleCloudwatchAlarmList">IotTopicRuleCloudwatchAlarmList</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRule.property.cloudwatchMetric">cloudwatchMetric</a></code> | <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleCloudwatchMetricList">IotTopicRuleCloudwatchMetricList</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRule.property.dynamodb">dynamodb</a></code> | <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbList">IotTopicRuleDynamodbList</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRule.property.dynamodbv2">dynamodbv2</a></code> | <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbv2List">IotTopicRuleDynamodbv2List</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRule.property.elasticsearch">elasticsearch</a></code> | <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleElasticsearchList">IotTopicRuleElasticsearchList</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRule.property.errorAction">errorAction</a></code> | <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionOutputReference">IotTopicRuleErrorActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRule.property.firehose">firehose</a></code> | <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleFirehoseList">IotTopicRuleFirehoseList</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRule.property.iotAnalytics">iotAnalytics</a></code> | <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleIotAnalyticsList">IotTopicRuleIotAnalyticsList</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRule.property.iotEvents">iotEvents</a></code> | <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleIotEventsList">IotTopicRuleIotEventsList</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRule.property.kinesis">kinesis</a></code> | <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleKinesisList">IotTopicRuleKinesisList</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRule.property.lambda">lambda</a></code> | <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleLambdaList">IotTopicRuleLambdaList</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRule.property.republish">republish</a></code> | <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleRepublishList">IotTopicRuleRepublishList</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRule.property.s3">s3</a></code> | <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleS3List">IotTopicRuleS3List</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRule.property.sns">sns</a></code> | <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleSnsList">IotTopicRuleSnsList</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRule.property.sqs">sqs</a></code> | <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleSqsList">IotTopicRuleSqsList</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRule.property.stepFunctions">stepFunctions</a></code> | <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleStepFunctionsList">IotTopicRuleStepFunctionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRule.property.cloudwatchAlarmInput">cloudwatchAlarmInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleCloudwatchAlarm">IotTopicRuleCloudwatchAlarm</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRule.property.cloudwatchMetricInput">cloudwatchMetricInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleCloudwatchMetric">IotTopicRuleCloudwatchMetric</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRule.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRule.property.dynamodbInput">dynamodbInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodb">IotTopicRuleDynamodb</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRule.property.dynamodbv2Input">dynamodbv2Input</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbv2">IotTopicRuleDynamodbv2</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRule.property.elasticsearchInput">elasticsearchInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleElasticsearch">IotTopicRuleElasticsearch</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRule.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRule.property.errorActionInput">errorActionInput</a></code> | <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorAction">IotTopicRuleErrorAction</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRule.property.firehoseInput">firehoseInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleFirehose">IotTopicRuleFirehose</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRule.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRule.property.iotAnalyticsInput">iotAnalyticsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleIotAnalytics">IotTopicRuleIotAnalytics</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRule.property.iotEventsInput">iotEventsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleIotEvents">IotTopicRuleIotEvents</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRule.property.kinesisInput">kinesisInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleKinesis">IotTopicRuleKinesis</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRule.property.lambdaInput">lambdaInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleLambda">IotTopicRuleLambda</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRule.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRule.property.republishInput">republishInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleRepublish">IotTopicRuleRepublish</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRule.property.s3Input">s3Input</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleS3">IotTopicRuleS3</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRule.property.snsInput">snsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleSns">IotTopicRuleSns</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRule.property.sqlInput">sqlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRule.property.sqlVersionInput">sqlVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRule.property.sqsInput">sqsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleSqs">IotTopicRuleSqs</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRule.property.stepFunctionsInput">stepFunctionsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleStepFunctions">IotTopicRuleStepFunctions</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRule.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRule.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRule.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRule.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRule.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRule.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRule.property.sql">sql</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRule.property.sqlVersion">sqlVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRule.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRule.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRule.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRule.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRule.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRule.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRule.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRule.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRule.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRule.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRule.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRule.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRule.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRule.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRule.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRule.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRule.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `cloudwatchAlarm`<sup>Required</sup> <a name="cloudwatchAlarm" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRule.property.cloudwatchAlarm"></a>

```typescript
public readonly cloudwatchAlarm: IotTopicRuleCloudwatchAlarmList;
```

- *Type:* <a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleCloudwatchAlarmList">IotTopicRuleCloudwatchAlarmList</a>

---

##### `cloudwatchMetric`<sup>Required</sup> <a name="cloudwatchMetric" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRule.property.cloudwatchMetric"></a>

```typescript
public readonly cloudwatchMetric: IotTopicRuleCloudwatchMetricList;
```

- *Type:* <a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleCloudwatchMetricList">IotTopicRuleCloudwatchMetricList</a>

---

##### `dynamodb`<sup>Required</sup> <a name="dynamodb" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRule.property.dynamodb"></a>

```typescript
public readonly dynamodb: IotTopicRuleDynamodbList;
```

- *Type:* <a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbList">IotTopicRuleDynamodbList</a>

---

##### `dynamodbv2`<sup>Required</sup> <a name="dynamodbv2" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRule.property.dynamodbv2"></a>

```typescript
public readonly dynamodbv2: IotTopicRuleDynamodbv2List;
```

- *Type:* <a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbv2List">IotTopicRuleDynamodbv2List</a>

---

##### `elasticsearch`<sup>Required</sup> <a name="elasticsearch" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRule.property.elasticsearch"></a>

```typescript
public readonly elasticsearch: IotTopicRuleElasticsearchList;
```

- *Type:* <a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleElasticsearchList">IotTopicRuleElasticsearchList</a>

---

##### `errorAction`<sup>Required</sup> <a name="errorAction" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRule.property.errorAction"></a>

```typescript
public readonly errorAction: IotTopicRuleErrorActionOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionOutputReference">IotTopicRuleErrorActionOutputReference</a>

---

##### `firehose`<sup>Required</sup> <a name="firehose" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRule.property.firehose"></a>

```typescript
public readonly firehose: IotTopicRuleFirehoseList;
```

- *Type:* <a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleFirehoseList">IotTopicRuleFirehoseList</a>

---

##### `iotAnalytics`<sup>Required</sup> <a name="iotAnalytics" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRule.property.iotAnalytics"></a>

```typescript
public readonly iotAnalytics: IotTopicRuleIotAnalyticsList;
```

- *Type:* <a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleIotAnalyticsList">IotTopicRuleIotAnalyticsList</a>

---

##### `iotEvents`<sup>Required</sup> <a name="iotEvents" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRule.property.iotEvents"></a>

```typescript
public readonly iotEvents: IotTopicRuleIotEventsList;
```

- *Type:* <a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleIotEventsList">IotTopicRuleIotEventsList</a>

---

##### `kinesis`<sup>Required</sup> <a name="kinesis" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRule.property.kinesis"></a>

```typescript
public readonly kinesis: IotTopicRuleKinesisList;
```

- *Type:* <a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleKinesisList">IotTopicRuleKinesisList</a>

---

##### `lambda`<sup>Required</sup> <a name="lambda" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRule.property.lambda"></a>

```typescript
public readonly lambda: IotTopicRuleLambdaList;
```

- *Type:* <a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleLambdaList">IotTopicRuleLambdaList</a>

---

##### `republish`<sup>Required</sup> <a name="republish" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRule.property.republish"></a>

```typescript
public readonly republish: IotTopicRuleRepublishList;
```

- *Type:* <a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleRepublishList">IotTopicRuleRepublishList</a>

---

##### `s3`<sup>Required</sup> <a name="s3" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRule.property.s3"></a>

```typescript
public readonly s3: IotTopicRuleS3List;
```

- *Type:* <a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleS3List">IotTopicRuleS3List</a>

---

##### `sns`<sup>Required</sup> <a name="sns" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRule.property.sns"></a>

```typescript
public readonly sns: IotTopicRuleSnsList;
```

- *Type:* <a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleSnsList">IotTopicRuleSnsList</a>

---

##### `sqs`<sup>Required</sup> <a name="sqs" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRule.property.sqs"></a>

```typescript
public readonly sqs: IotTopicRuleSqsList;
```

- *Type:* <a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleSqsList">IotTopicRuleSqsList</a>

---

##### `stepFunctions`<sup>Required</sup> <a name="stepFunctions" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRule.property.stepFunctions"></a>

```typescript
public readonly stepFunctions: IotTopicRuleStepFunctionsList;
```

- *Type:* <a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleStepFunctionsList">IotTopicRuleStepFunctionsList</a>

---

##### `cloudwatchAlarmInput`<sup>Optional</sup> <a name="cloudwatchAlarmInput" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRule.property.cloudwatchAlarmInput"></a>

```typescript
public readonly cloudwatchAlarmInput: IResolvable | IotTopicRuleCloudwatchAlarm[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleCloudwatchAlarm">IotTopicRuleCloudwatchAlarm</a>[]

---

##### `cloudwatchMetricInput`<sup>Optional</sup> <a name="cloudwatchMetricInput" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRule.property.cloudwatchMetricInput"></a>

```typescript
public readonly cloudwatchMetricInput: IResolvable | IotTopicRuleCloudwatchMetric[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleCloudwatchMetric">IotTopicRuleCloudwatchMetric</a>[]

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRule.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `dynamodbInput`<sup>Optional</sup> <a name="dynamodbInput" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRule.property.dynamodbInput"></a>

```typescript
public readonly dynamodbInput: IResolvable | IotTopicRuleDynamodb[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodb">IotTopicRuleDynamodb</a>[]

---

##### `dynamodbv2Input`<sup>Optional</sup> <a name="dynamodbv2Input" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRule.property.dynamodbv2Input"></a>

```typescript
public readonly dynamodbv2Input: IResolvable | IotTopicRuleDynamodbv2[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbv2">IotTopicRuleDynamodbv2</a>[]

---

##### `elasticsearchInput`<sup>Optional</sup> <a name="elasticsearchInput" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRule.property.elasticsearchInput"></a>

```typescript
public readonly elasticsearchInput: IResolvable | IotTopicRuleElasticsearch[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleElasticsearch">IotTopicRuleElasticsearch</a>[]

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRule.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `errorActionInput`<sup>Optional</sup> <a name="errorActionInput" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRule.property.errorActionInput"></a>

```typescript
public readonly errorActionInput: IotTopicRuleErrorAction;
```

- *Type:* <a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorAction">IotTopicRuleErrorAction</a>

---

##### `firehoseInput`<sup>Optional</sup> <a name="firehoseInput" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRule.property.firehoseInput"></a>

```typescript
public readonly firehoseInput: IResolvable | IotTopicRuleFirehose[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleFirehose">IotTopicRuleFirehose</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRule.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `iotAnalyticsInput`<sup>Optional</sup> <a name="iotAnalyticsInput" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRule.property.iotAnalyticsInput"></a>

```typescript
public readonly iotAnalyticsInput: IResolvable | IotTopicRuleIotAnalytics[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleIotAnalytics">IotTopicRuleIotAnalytics</a>[]

---

##### `iotEventsInput`<sup>Optional</sup> <a name="iotEventsInput" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRule.property.iotEventsInput"></a>

```typescript
public readonly iotEventsInput: IResolvable | IotTopicRuleIotEvents[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleIotEvents">IotTopicRuleIotEvents</a>[]

---

##### `kinesisInput`<sup>Optional</sup> <a name="kinesisInput" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRule.property.kinesisInput"></a>

```typescript
public readonly kinesisInput: IResolvable | IotTopicRuleKinesis[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleKinesis">IotTopicRuleKinesis</a>[]

---

##### `lambdaInput`<sup>Optional</sup> <a name="lambdaInput" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRule.property.lambdaInput"></a>

```typescript
public readonly lambdaInput: IResolvable | IotTopicRuleLambda[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleLambda">IotTopicRuleLambda</a>[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRule.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `republishInput`<sup>Optional</sup> <a name="republishInput" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRule.property.republishInput"></a>

```typescript
public readonly republishInput: IResolvable | IotTopicRuleRepublish[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleRepublish">IotTopicRuleRepublish</a>[]

---

##### `s3Input`<sup>Optional</sup> <a name="s3Input" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRule.property.s3Input"></a>

```typescript
public readonly s3Input: IResolvable | IotTopicRuleS3[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleS3">IotTopicRuleS3</a>[]

---

##### `snsInput`<sup>Optional</sup> <a name="snsInput" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRule.property.snsInput"></a>

```typescript
public readonly snsInput: IResolvable | IotTopicRuleSns[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleSns">IotTopicRuleSns</a>[]

---

##### `sqlInput`<sup>Optional</sup> <a name="sqlInput" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRule.property.sqlInput"></a>

```typescript
public readonly sqlInput: string;
```

- *Type:* string

---

##### `sqlVersionInput`<sup>Optional</sup> <a name="sqlVersionInput" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRule.property.sqlVersionInput"></a>

```typescript
public readonly sqlVersionInput: string;
```

- *Type:* string

---

##### `sqsInput`<sup>Optional</sup> <a name="sqsInput" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRule.property.sqsInput"></a>

```typescript
public readonly sqsInput: IResolvable | IotTopicRuleSqs[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleSqs">IotTopicRuleSqs</a>[]

---

##### `stepFunctionsInput`<sup>Optional</sup> <a name="stepFunctionsInput" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRule.property.stepFunctionsInput"></a>

```typescript
public readonly stepFunctionsInput: IResolvable | IotTopicRuleStepFunctions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleStepFunctions">IotTopicRuleStepFunctions</a>[]

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRule.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRule.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRule.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRule.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRule.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRule.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `sql`<sup>Required</sup> <a name="sql" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRule.property.sql"></a>

```typescript
public readonly sql: string;
```

- *Type:* string

---

##### `sqlVersion`<sup>Required</sup> <a name="sqlVersion" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRule.property.sqlVersion"></a>

```typescript
public readonly sqlVersion: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRule.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRule.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRule.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRule.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IotTopicRuleCloudwatchAlarm <a name="IotTopicRuleCloudwatchAlarm" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleCloudwatchAlarm"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleCloudwatchAlarm.Initializer"></a>

```typescript
import { iotTopicRule } from '@cdktf/aws-cdk'

const iotTopicRuleCloudwatchAlarm: iotTopicRule.IotTopicRuleCloudwatchAlarm = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleCloudwatchAlarm.property.alarmName">alarmName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#alarm_name IotTopicRule#alarm_name}. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleCloudwatchAlarm.property.roleArn">roleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#role_arn IotTopicRule#role_arn}. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleCloudwatchAlarm.property.stateReason">stateReason</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#state_reason IotTopicRule#state_reason}. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleCloudwatchAlarm.property.stateValue">stateValue</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#state_value IotTopicRule#state_value}. |

---

##### `alarmName`<sup>Required</sup> <a name="alarmName" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleCloudwatchAlarm.property.alarmName"></a>

```typescript
public readonly alarmName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#alarm_name IotTopicRule#alarm_name}.

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleCloudwatchAlarm.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#role_arn IotTopicRule#role_arn}.

---

##### `stateReason`<sup>Required</sup> <a name="stateReason" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleCloudwatchAlarm.property.stateReason"></a>

```typescript
public readonly stateReason: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#state_reason IotTopicRule#state_reason}.

---

##### `stateValue`<sup>Required</sup> <a name="stateValue" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleCloudwatchAlarm.property.stateValue"></a>

```typescript
public readonly stateValue: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#state_value IotTopicRule#state_value}.

---

### IotTopicRuleCloudwatchMetric <a name="IotTopicRuleCloudwatchMetric" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleCloudwatchMetric"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleCloudwatchMetric.Initializer"></a>

```typescript
import { iotTopicRule } from '@cdktf/aws-cdk'

const iotTopicRuleCloudwatchMetric: iotTopicRule.IotTopicRuleCloudwatchMetric = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleCloudwatchMetric.property.metricName">metricName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#metric_name IotTopicRule#metric_name}. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleCloudwatchMetric.property.metricNamespace">metricNamespace</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#metric_namespace IotTopicRule#metric_namespace}. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleCloudwatchMetric.property.metricUnit">metricUnit</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#metric_unit IotTopicRule#metric_unit}. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleCloudwatchMetric.property.metricValue">metricValue</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#metric_value IotTopicRule#metric_value}. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleCloudwatchMetric.property.roleArn">roleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#role_arn IotTopicRule#role_arn}. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleCloudwatchMetric.property.metricTimestamp">metricTimestamp</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#metric_timestamp IotTopicRule#metric_timestamp}. |

---

##### `metricName`<sup>Required</sup> <a name="metricName" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleCloudwatchMetric.property.metricName"></a>

```typescript
public readonly metricName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#metric_name IotTopicRule#metric_name}.

---

##### `metricNamespace`<sup>Required</sup> <a name="metricNamespace" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleCloudwatchMetric.property.metricNamespace"></a>

```typescript
public readonly metricNamespace: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#metric_namespace IotTopicRule#metric_namespace}.

---

##### `metricUnit`<sup>Required</sup> <a name="metricUnit" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleCloudwatchMetric.property.metricUnit"></a>

```typescript
public readonly metricUnit: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#metric_unit IotTopicRule#metric_unit}.

---

##### `metricValue`<sup>Required</sup> <a name="metricValue" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleCloudwatchMetric.property.metricValue"></a>

```typescript
public readonly metricValue: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#metric_value IotTopicRule#metric_value}.

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleCloudwatchMetric.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#role_arn IotTopicRule#role_arn}.

---

##### `metricTimestamp`<sup>Optional</sup> <a name="metricTimestamp" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleCloudwatchMetric.property.metricTimestamp"></a>

```typescript
public readonly metricTimestamp: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#metric_timestamp IotTopicRule#metric_timestamp}.

---

### IotTopicRuleConfig <a name="IotTopicRuleConfig" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleConfig.Initializer"></a>

```typescript
import { iotTopicRule } from '@cdktf/aws-cdk'

const iotTopicRuleConfig: iotTopicRule.IotTopicRuleConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleConfig.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#enabled IotTopicRule#enabled}. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#name IotTopicRule#name}. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleConfig.property.sql">sql</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#sql IotTopicRule#sql}. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleConfig.property.sqlVersion">sqlVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#sql_version IotTopicRule#sql_version}. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleConfig.property.cloudwatchAlarm">cloudwatchAlarm</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleCloudwatchAlarm">IotTopicRuleCloudwatchAlarm</a>[]</code> | cloudwatch_alarm block. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleConfig.property.cloudwatchMetric">cloudwatchMetric</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleCloudwatchMetric">IotTopicRuleCloudwatchMetric</a>[]</code> | cloudwatch_metric block. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#description IotTopicRule#description}. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleConfig.property.dynamodb">dynamodb</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodb">IotTopicRuleDynamodb</a>[]</code> | dynamodb block. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleConfig.property.dynamodbv2">dynamodbv2</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbv2">IotTopicRuleDynamodbv2</a>[]</code> | dynamodbv2 block. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleConfig.property.elasticsearch">elasticsearch</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleElasticsearch">IotTopicRuleElasticsearch</a>[]</code> | elasticsearch block. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleConfig.property.errorAction">errorAction</a></code> | <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorAction">IotTopicRuleErrorAction</a></code> | error_action block. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleConfig.property.firehose">firehose</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleFirehose">IotTopicRuleFirehose</a>[]</code> | firehose block. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#id IotTopicRule#id}. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleConfig.property.iotAnalytics">iotAnalytics</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleIotAnalytics">IotTopicRuleIotAnalytics</a>[]</code> | iot_analytics block. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleConfig.property.iotEvents">iotEvents</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleIotEvents">IotTopicRuleIotEvents</a>[]</code> | iot_events block. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleConfig.property.kinesis">kinesis</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleKinesis">IotTopicRuleKinesis</a>[]</code> | kinesis block. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleConfig.property.lambda">lambda</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleLambda">IotTopicRuleLambda</a>[]</code> | lambda block. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleConfig.property.republish">republish</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleRepublish">IotTopicRuleRepublish</a>[]</code> | republish block. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleConfig.property.s3">s3</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleS3">IotTopicRuleS3</a>[]</code> | s3 block. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleConfig.property.sns">sns</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleSns">IotTopicRuleSns</a>[]</code> | sns block. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleConfig.property.sqs">sqs</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleSqs">IotTopicRuleSqs</a>[]</code> | sqs block. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleConfig.property.stepFunctions">stepFunctions</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleStepFunctions">IotTopicRuleStepFunctions</a>[]</code> | step_functions block. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#tags IotTopicRule#tags}. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#tags_all IotTopicRule#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#enabled IotTopicRule#enabled}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#name IotTopicRule#name}.

---

##### `sql`<sup>Required</sup> <a name="sql" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleConfig.property.sql"></a>

```typescript
public readonly sql: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#sql IotTopicRule#sql}.

---

##### `sqlVersion`<sup>Required</sup> <a name="sqlVersion" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleConfig.property.sqlVersion"></a>

```typescript
public readonly sqlVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#sql_version IotTopicRule#sql_version}.

---

##### `cloudwatchAlarm`<sup>Optional</sup> <a name="cloudwatchAlarm" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleConfig.property.cloudwatchAlarm"></a>

```typescript
public readonly cloudwatchAlarm: IResolvable | IotTopicRuleCloudwatchAlarm[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleCloudwatchAlarm">IotTopicRuleCloudwatchAlarm</a>[]

cloudwatch_alarm block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#cloudwatch_alarm IotTopicRule#cloudwatch_alarm}

---

##### `cloudwatchMetric`<sup>Optional</sup> <a name="cloudwatchMetric" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleConfig.property.cloudwatchMetric"></a>

```typescript
public readonly cloudwatchMetric: IResolvable | IotTopicRuleCloudwatchMetric[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleCloudwatchMetric">IotTopicRuleCloudwatchMetric</a>[]

cloudwatch_metric block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#cloudwatch_metric IotTopicRule#cloudwatch_metric}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#description IotTopicRule#description}.

---

##### `dynamodb`<sup>Optional</sup> <a name="dynamodb" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleConfig.property.dynamodb"></a>

```typescript
public readonly dynamodb: IResolvable | IotTopicRuleDynamodb[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodb">IotTopicRuleDynamodb</a>[]

dynamodb block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#dynamodb IotTopicRule#dynamodb}

---

##### `dynamodbv2`<sup>Optional</sup> <a name="dynamodbv2" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleConfig.property.dynamodbv2"></a>

```typescript
public readonly dynamodbv2: IResolvable | IotTopicRuleDynamodbv2[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbv2">IotTopicRuleDynamodbv2</a>[]

dynamodbv2 block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#dynamodbv2 IotTopicRule#dynamodbv2}

---

##### `elasticsearch`<sup>Optional</sup> <a name="elasticsearch" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleConfig.property.elasticsearch"></a>

```typescript
public readonly elasticsearch: IResolvable | IotTopicRuleElasticsearch[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleElasticsearch">IotTopicRuleElasticsearch</a>[]

elasticsearch block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#elasticsearch IotTopicRule#elasticsearch}

---

##### `errorAction`<sup>Optional</sup> <a name="errorAction" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleConfig.property.errorAction"></a>

```typescript
public readonly errorAction: IotTopicRuleErrorAction;
```

- *Type:* <a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorAction">IotTopicRuleErrorAction</a>

error_action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#error_action IotTopicRule#error_action}

---

##### `firehose`<sup>Optional</sup> <a name="firehose" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleConfig.property.firehose"></a>

```typescript
public readonly firehose: IResolvable | IotTopicRuleFirehose[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleFirehose">IotTopicRuleFirehose</a>[]

firehose block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#firehose IotTopicRule#firehose}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#id IotTopicRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `iotAnalytics`<sup>Optional</sup> <a name="iotAnalytics" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleConfig.property.iotAnalytics"></a>

```typescript
public readonly iotAnalytics: IResolvable | IotTopicRuleIotAnalytics[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleIotAnalytics">IotTopicRuleIotAnalytics</a>[]

iot_analytics block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#iot_analytics IotTopicRule#iot_analytics}

---

##### `iotEvents`<sup>Optional</sup> <a name="iotEvents" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleConfig.property.iotEvents"></a>

```typescript
public readonly iotEvents: IResolvable | IotTopicRuleIotEvents[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleIotEvents">IotTopicRuleIotEvents</a>[]

iot_events block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#iot_events IotTopicRule#iot_events}

---

##### `kinesis`<sup>Optional</sup> <a name="kinesis" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleConfig.property.kinesis"></a>

```typescript
public readonly kinesis: IResolvable | IotTopicRuleKinesis[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleKinesis">IotTopicRuleKinesis</a>[]

kinesis block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#kinesis IotTopicRule#kinesis}

---

##### `lambda`<sup>Optional</sup> <a name="lambda" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleConfig.property.lambda"></a>

```typescript
public readonly lambda: IResolvable | IotTopicRuleLambda[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleLambda">IotTopicRuleLambda</a>[]

lambda block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#lambda IotTopicRule#lambda}

---

##### `republish`<sup>Optional</sup> <a name="republish" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleConfig.property.republish"></a>

```typescript
public readonly republish: IResolvable | IotTopicRuleRepublish[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleRepublish">IotTopicRuleRepublish</a>[]

republish block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#republish IotTopicRule#republish}

---

##### `s3`<sup>Optional</sup> <a name="s3" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleConfig.property.s3"></a>

```typescript
public readonly s3: IResolvable | IotTopicRuleS3[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleS3">IotTopicRuleS3</a>[]

s3 block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#s3 IotTopicRule#s3}

---

##### `sns`<sup>Optional</sup> <a name="sns" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleConfig.property.sns"></a>

```typescript
public readonly sns: IResolvable | IotTopicRuleSns[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleSns">IotTopicRuleSns</a>[]

sns block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#sns IotTopicRule#sns}

---

##### `sqs`<sup>Optional</sup> <a name="sqs" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleConfig.property.sqs"></a>

```typescript
public readonly sqs: IResolvable | IotTopicRuleSqs[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleSqs">IotTopicRuleSqs</a>[]

sqs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#sqs IotTopicRule#sqs}

---

##### `stepFunctions`<sup>Optional</sup> <a name="stepFunctions" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleConfig.property.stepFunctions"></a>

```typescript
public readonly stepFunctions: IResolvable | IotTopicRuleStepFunctions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleStepFunctions">IotTopicRuleStepFunctions</a>[]

step_functions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#step_functions IotTopicRule#step_functions}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#tags IotTopicRule#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#tags_all IotTopicRule#tags_all}.

---

### IotTopicRuleDynamodb <a name="IotTopicRuleDynamodb" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodb"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodb.Initializer"></a>

```typescript
import { iotTopicRule } from '@cdktf/aws-cdk'

const iotTopicRuleDynamodb: iotTopicRule.IotTopicRuleDynamodb = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodb.property.hashKeyField">hashKeyField</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#hash_key_field IotTopicRule#hash_key_field}. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodb.property.hashKeyValue">hashKeyValue</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#hash_key_value IotTopicRule#hash_key_value}. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodb.property.roleArn">roleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#role_arn IotTopicRule#role_arn}. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodb.property.tableName">tableName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#table_name IotTopicRule#table_name}. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodb.property.hashKeyType">hashKeyType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#hash_key_type IotTopicRule#hash_key_type}. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodb.property.operation">operation</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#operation IotTopicRule#operation}. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodb.property.payloadField">payloadField</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#payload_field IotTopicRule#payload_field}. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodb.property.rangeKeyField">rangeKeyField</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#range_key_field IotTopicRule#range_key_field}. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodb.property.rangeKeyType">rangeKeyType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#range_key_type IotTopicRule#range_key_type}. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodb.property.rangeKeyValue">rangeKeyValue</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#range_key_value IotTopicRule#range_key_value}. |

---

##### `hashKeyField`<sup>Required</sup> <a name="hashKeyField" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodb.property.hashKeyField"></a>

```typescript
public readonly hashKeyField: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#hash_key_field IotTopicRule#hash_key_field}.

---

##### `hashKeyValue`<sup>Required</sup> <a name="hashKeyValue" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodb.property.hashKeyValue"></a>

```typescript
public readonly hashKeyValue: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#hash_key_value IotTopicRule#hash_key_value}.

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodb.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#role_arn IotTopicRule#role_arn}.

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodb.property.tableName"></a>

```typescript
public readonly tableName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#table_name IotTopicRule#table_name}.

---

##### `hashKeyType`<sup>Optional</sup> <a name="hashKeyType" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodb.property.hashKeyType"></a>

```typescript
public readonly hashKeyType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#hash_key_type IotTopicRule#hash_key_type}.

---

##### `operation`<sup>Optional</sup> <a name="operation" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodb.property.operation"></a>

```typescript
public readonly operation: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#operation IotTopicRule#operation}.

---

##### `payloadField`<sup>Optional</sup> <a name="payloadField" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodb.property.payloadField"></a>

```typescript
public readonly payloadField: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#payload_field IotTopicRule#payload_field}.

---

##### `rangeKeyField`<sup>Optional</sup> <a name="rangeKeyField" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodb.property.rangeKeyField"></a>

```typescript
public readonly rangeKeyField: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#range_key_field IotTopicRule#range_key_field}.

---

##### `rangeKeyType`<sup>Optional</sup> <a name="rangeKeyType" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodb.property.rangeKeyType"></a>

```typescript
public readonly rangeKeyType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#range_key_type IotTopicRule#range_key_type}.

---

##### `rangeKeyValue`<sup>Optional</sup> <a name="rangeKeyValue" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodb.property.rangeKeyValue"></a>

```typescript
public readonly rangeKeyValue: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#range_key_value IotTopicRule#range_key_value}.

---

### IotTopicRuleDynamodbv2 <a name="IotTopicRuleDynamodbv2" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbv2"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbv2.Initializer"></a>

```typescript
import { iotTopicRule } from '@cdktf/aws-cdk'

const iotTopicRuleDynamodbv2: iotTopicRule.IotTopicRuleDynamodbv2 = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbv2.property.roleArn">roleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#role_arn IotTopicRule#role_arn}. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbv2.property.putItem">putItem</a></code> | <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbv2PutItem">IotTopicRuleDynamodbv2PutItem</a></code> | put_item block. |

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbv2.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#role_arn IotTopicRule#role_arn}.

---

##### `putItem`<sup>Optional</sup> <a name="putItem" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbv2.property.putItem"></a>

```typescript
public readonly putItem: IotTopicRuleDynamodbv2PutItem;
```

- *Type:* <a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbv2PutItem">IotTopicRuleDynamodbv2PutItem</a>

put_item block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#put_item IotTopicRule#put_item}

---

### IotTopicRuleDynamodbv2PutItem <a name="IotTopicRuleDynamodbv2PutItem" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbv2PutItem"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbv2PutItem.Initializer"></a>

```typescript
import { iotTopicRule } from '@cdktf/aws-cdk'

const iotTopicRuleDynamodbv2PutItem: iotTopicRule.IotTopicRuleDynamodbv2PutItem = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbv2PutItem.property.tableName">tableName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#table_name IotTopicRule#table_name}. |

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbv2PutItem.property.tableName"></a>

```typescript
public readonly tableName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#table_name IotTopicRule#table_name}.

---

### IotTopicRuleElasticsearch <a name="IotTopicRuleElasticsearch" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleElasticsearch"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleElasticsearch.Initializer"></a>

```typescript
import { iotTopicRule } from '@cdktf/aws-cdk'

const iotTopicRuleElasticsearch: iotTopicRule.IotTopicRuleElasticsearch = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleElasticsearch.property.endpoint">endpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#endpoint IotTopicRule#endpoint}. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleElasticsearch.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#id IotTopicRule#id}. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleElasticsearch.property.index">index</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#index IotTopicRule#index}. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleElasticsearch.property.roleArn">roleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#role_arn IotTopicRule#role_arn}. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleElasticsearch.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#type IotTopicRule#type}. |

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleElasticsearch.property.endpoint"></a>

```typescript
public readonly endpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#endpoint IotTopicRule#endpoint}.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleElasticsearch.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#id IotTopicRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `index`<sup>Required</sup> <a name="index" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleElasticsearch.property.index"></a>

```typescript
public readonly index: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#index IotTopicRule#index}.

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleElasticsearch.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#role_arn IotTopicRule#role_arn}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleElasticsearch.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#type IotTopicRule#type}.

---

### IotTopicRuleErrorAction <a name="IotTopicRuleErrorAction" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorAction.Initializer"></a>

```typescript
import { iotTopicRule } from '@cdktf/aws-cdk'

const iotTopicRuleErrorAction: iotTopicRule.IotTopicRuleErrorAction = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorAction.property.cloudwatchAlarm">cloudwatchAlarm</a></code> | <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionCloudwatchAlarm">IotTopicRuleErrorActionCloudwatchAlarm</a></code> | cloudwatch_alarm block. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorAction.property.cloudwatchMetric">cloudwatchMetric</a></code> | <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionCloudwatchMetric">IotTopicRuleErrorActionCloudwatchMetric</a></code> | cloudwatch_metric block. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorAction.property.dynamodb">dynamodb</a></code> | <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodb">IotTopicRuleErrorActionDynamodb</a></code> | dynamodb block. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorAction.property.dynamodbv2">dynamodbv2</a></code> | <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodbv2">IotTopicRuleErrorActionDynamodbv2</a></code> | dynamodbv2 block. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorAction.property.elasticsearch">elasticsearch</a></code> | <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionElasticsearch">IotTopicRuleErrorActionElasticsearch</a></code> | elasticsearch block. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorAction.property.firehose">firehose</a></code> | <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionFirehose">IotTopicRuleErrorActionFirehose</a></code> | firehose block. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorAction.property.iotAnalytics">iotAnalytics</a></code> | <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionIotAnalytics">IotTopicRuleErrorActionIotAnalytics</a></code> | iot_analytics block. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorAction.property.iotEvents">iotEvents</a></code> | <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionIotEvents">IotTopicRuleErrorActionIotEvents</a></code> | iot_events block. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorAction.property.kinesis">kinesis</a></code> | <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionKinesis">IotTopicRuleErrorActionKinesis</a></code> | kinesis block. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorAction.property.lambda">lambda</a></code> | <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionLambda">IotTopicRuleErrorActionLambda</a></code> | lambda block. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorAction.property.republish">republish</a></code> | <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionRepublish">IotTopicRuleErrorActionRepublish</a></code> | republish block. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorAction.property.s3">s3</a></code> | <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionS3">IotTopicRuleErrorActionS3</a></code> | s3 block. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorAction.property.sns">sns</a></code> | <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionSns">IotTopicRuleErrorActionSns</a></code> | sns block. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorAction.property.sqs">sqs</a></code> | <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionSqs">IotTopicRuleErrorActionSqs</a></code> | sqs block. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorAction.property.stepFunctions">stepFunctions</a></code> | <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionStepFunctions">IotTopicRuleErrorActionStepFunctions</a></code> | step_functions block. |

---

##### `cloudwatchAlarm`<sup>Optional</sup> <a name="cloudwatchAlarm" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorAction.property.cloudwatchAlarm"></a>

```typescript
public readonly cloudwatchAlarm: IotTopicRuleErrorActionCloudwatchAlarm;
```

- *Type:* <a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionCloudwatchAlarm">IotTopicRuleErrorActionCloudwatchAlarm</a>

cloudwatch_alarm block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#cloudwatch_alarm IotTopicRule#cloudwatch_alarm}

---

##### `cloudwatchMetric`<sup>Optional</sup> <a name="cloudwatchMetric" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorAction.property.cloudwatchMetric"></a>

```typescript
public readonly cloudwatchMetric: IotTopicRuleErrorActionCloudwatchMetric;
```

- *Type:* <a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionCloudwatchMetric">IotTopicRuleErrorActionCloudwatchMetric</a>

cloudwatch_metric block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#cloudwatch_metric IotTopicRule#cloudwatch_metric}

---

##### `dynamodb`<sup>Optional</sup> <a name="dynamodb" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorAction.property.dynamodb"></a>

```typescript
public readonly dynamodb: IotTopicRuleErrorActionDynamodb;
```

- *Type:* <a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodb">IotTopicRuleErrorActionDynamodb</a>

dynamodb block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#dynamodb IotTopicRule#dynamodb}

---

##### `dynamodbv2`<sup>Optional</sup> <a name="dynamodbv2" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorAction.property.dynamodbv2"></a>

```typescript
public readonly dynamodbv2: IotTopicRuleErrorActionDynamodbv2;
```

- *Type:* <a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodbv2">IotTopicRuleErrorActionDynamodbv2</a>

dynamodbv2 block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#dynamodbv2 IotTopicRule#dynamodbv2}

---

##### `elasticsearch`<sup>Optional</sup> <a name="elasticsearch" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorAction.property.elasticsearch"></a>

```typescript
public readonly elasticsearch: IotTopicRuleErrorActionElasticsearch;
```

- *Type:* <a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionElasticsearch">IotTopicRuleErrorActionElasticsearch</a>

elasticsearch block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#elasticsearch IotTopicRule#elasticsearch}

---

##### `firehose`<sup>Optional</sup> <a name="firehose" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorAction.property.firehose"></a>

```typescript
public readonly firehose: IotTopicRuleErrorActionFirehose;
```

- *Type:* <a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionFirehose">IotTopicRuleErrorActionFirehose</a>

firehose block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#firehose IotTopicRule#firehose}

---

##### `iotAnalytics`<sup>Optional</sup> <a name="iotAnalytics" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorAction.property.iotAnalytics"></a>

```typescript
public readonly iotAnalytics: IotTopicRuleErrorActionIotAnalytics;
```

- *Type:* <a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionIotAnalytics">IotTopicRuleErrorActionIotAnalytics</a>

iot_analytics block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#iot_analytics IotTopicRule#iot_analytics}

---

##### `iotEvents`<sup>Optional</sup> <a name="iotEvents" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorAction.property.iotEvents"></a>

```typescript
public readonly iotEvents: IotTopicRuleErrorActionIotEvents;
```

- *Type:* <a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionIotEvents">IotTopicRuleErrorActionIotEvents</a>

iot_events block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#iot_events IotTopicRule#iot_events}

---

##### `kinesis`<sup>Optional</sup> <a name="kinesis" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorAction.property.kinesis"></a>

```typescript
public readonly kinesis: IotTopicRuleErrorActionKinesis;
```

- *Type:* <a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionKinesis">IotTopicRuleErrorActionKinesis</a>

kinesis block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#kinesis IotTopicRule#kinesis}

---

##### `lambda`<sup>Optional</sup> <a name="lambda" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorAction.property.lambda"></a>

```typescript
public readonly lambda: IotTopicRuleErrorActionLambda;
```

- *Type:* <a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionLambda">IotTopicRuleErrorActionLambda</a>

lambda block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#lambda IotTopicRule#lambda}

---

##### `republish`<sup>Optional</sup> <a name="republish" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorAction.property.republish"></a>

```typescript
public readonly republish: IotTopicRuleErrorActionRepublish;
```

- *Type:* <a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionRepublish">IotTopicRuleErrorActionRepublish</a>

republish block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#republish IotTopicRule#republish}

---

##### `s3`<sup>Optional</sup> <a name="s3" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorAction.property.s3"></a>

```typescript
public readonly s3: IotTopicRuleErrorActionS3;
```

- *Type:* <a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionS3">IotTopicRuleErrorActionS3</a>

s3 block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#s3 IotTopicRule#s3}

---

##### `sns`<sup>Optional</sup> <a name="sns" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorAction.property.sns"></a>

```typescript
public readonly sns: IotTopicRuleErrorActionSns;
```

- *Type:* <a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionSns">IotTopicRuleErrorActionSns</a>

sns block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#sns IotTopicRule#sns}

---

##### `sqs`<sup>Optional</sup> <a name="sqs" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorAction.property.sqs"></a>

```typescript
public readonly sqs: IotTopicRuleErrorActionSqs;
```

- *Type:* <a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionSqs">IotTopicRuleErrorActionSqs</a>

sqs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#sqs IotTopicRule#sqs}

---

##### `stepFunctions`<sup>Optional</sup> <a name="stepFunctions" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorAction.property.stepFunctions"></a>

```typescript
public readonly stepFunctions: IotTopicRuleErrorActionStepFunctions;
```

- *Type:* <a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionStepFunctions">IotTopicRuleErrorActionStepFunctions</a>

step_functions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#step_functions IotTopicRule#step_functions}

---

### IotTopicRuleErrorActionCloudwatchAlarm <a name="IotTopicRuleErrorActionCloudwatchAlarm" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionCloudwatchAlarm"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionCloudwatchAlarm.Initializer"></a>

```typescript
import { iotTopicRule } from '@cdktf/aws-cdk'

const iotTopicRuleErrorActionCloudwatchAlarm: iotTopicRule.IotTopicRuleErrorActionCloudwatchAlarm = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionCloudwatchAlarm.property.alarmName">alarmName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#alarm_name IotTopicRule#alarm_name}. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionCloudwatchAlarm.property.roleArn">roleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#role_arn IotTopicRule#role_arn}. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionCloudwatchAlarm.property.stateReason">stateReason</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#state_reason IotTopicRule#state_reason}. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionCloudwatchAlarm.property.stateValue">stateValue</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#state_value IotTopicRule#state_value}. |

---

##### `alarmName`<sup>Required</sup> <a name="alarmName" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionCloudwatchAlarm.property.alarmName"></a>

```typescript
public readonly alarmName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#alarm_name IotTopicRule#alarm_name}.

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionCloudwatchAlarm.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#role_arn IotTopicRule#role_arn}.

---

##### `stateReason`<sup>Required</sup> <a name="stateReason" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionCloudwatchAlarm.property.stateReason"></a>

```typescript
public readonly stateReason: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#state_reason IotTopicRule#state_reason}.

---

##### `stateValue`<sup>Required</sup> <a name="stateValue" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionCloudwatchAlarm.property.stateValue"></a>

```typescript
public readonly stateValue: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#state_value IotTopicRule#state_value}.

---

### IotTopicRuleErrorActionCloudwatchMetric <a name="IotTopicRuleErrorActionCloudwatchMetric" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionCloudwatchMetric"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionCloudwatchMetric.Initializer"></a>

```typescript
import { iotTopicRule } from '@cdktf/aws-cdk'

const iotTopicRuleErrorActionCloudwatchMetric: iotTopicRule.IotTopicRuleErrorActionCloudwatchMetric = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionCloudwatchMetric.property.metricName">metricName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#metric_name IotTopicRule#metric_name}. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionCloudwatchMetric.property.metricNamespace">metricNamespace</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#metric_namespace IotTopicRule#metric_namespace}. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionCloudwatchMetric.property.metricUnit">metricUnit</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#metric_unit IotTopicRule#metric_unit}. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionCloudwatchMetric.property.metricValue">metricValue</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#metric_value IotTopicRule#metric_value}. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionCloudwatchMetric.property.roleArn">roleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#role_arn IotTopicRule#role_arn}. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionCloudwatchMetric.property.metricTimestamp">metricTimestamp</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#metric_timestamp IotTopicRule#metric_timestamp}. |

---

##### `metricName`<sup>Required</sup> <a name="metricName" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionCloudwatchMetric.property.metricName"></a>

```typescript
public readonly metricName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#metric_name IotTopicRule#metric_name}.

---

##### `metricNamespace`<sup>Required</sup> <a name="metricNamespace" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionCloudwatchMetric.property.metricNamespace"></a>

```typescript
public readonly metricNamespace: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#metric_namespace IotTopicRule#metric_namespace}.

---

##### `metricUnit`<sup>Required</sup> <a name="metricUnit" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionCloudwatchMetric.property.metricUnit"></a>

```typescript
public readonly metricUnit: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#metric_unit IotTopicRule#metric_unit}.

---

##### `metricValue`<sup>Required</sup> <a name="metricValue" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionCloudwatchMetric.property.metricValue"></a>

```typescript
public readonly metricValue: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#metric_value IotTopicRule#metric_value}.

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionCloudwatchMetric.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#role_arn IotTopicRule#role_arn}.

---

##### `metricTimestamp`<sup>Optional</sup> <a name="metricTimestamp" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionCloudwatchMetric.property.metricTimestamp"></a>

```typescript
public readonly metricTimestamp: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#metric_timestamp IotTopicRule#metric_timestamp}.

---

### IotTopicRuleErrorActionDynamodb <a name="IotTopicRuleErrorActionDynamodb" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodb"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodb.Initializer"></a>

```typescript
import { iotTopicRule } from '@cdktf/aws-cdk'

const iotTopicRuleErrorActionDynamodb: iotTopicRule.IotTopicRuleErrorActionDynamodb = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodb.property.hashKeyField">hashKeyField</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#hash_key_field IotTopicRule#hash_key_field}. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodb.property.hashKeyValue">hashKeyValue</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#hash_key_value IotTopicRule#hash_key_value}. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodb.property.roleArn">roleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#role_arn IotTopicRule#role_arn}. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodb.property.tableName">tableName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#table_name IotTopicRule#table_name}. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodb.property.hashKeyType">hashKeyType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#hash_key_type IotTopicRule#hash_key_type}. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodb.property.operation">operation</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#operation IotTopicRule#operation}. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodb.property.payloadField">payloadField</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#payload_field IotTopicRule#payload_field}. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodb.property.rangeKeyField">rangeKeyField</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#range_key_field IotTopicRule#range_key_field}. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodb.property.rangeKeyType">rangeKeyType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#range_key_type IotTopicRule#range_key_type}. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodb.property.rangeKeyValue">rangeKeyValue</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#range_key_value IotTopicRule#range_key_value}. |

---

##### `hashKeyField`<sup>Required</sup> <a name="hashKeyField" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodb.property.hashKeyField"></a>

```typescript
public readonly hashKeyField: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#hash_key_field IotTopicRule#hash_key_field}.

---

##### `hashKeyValue`<sup>Required</sup> <a name="hashKeyValue" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodb.property.hashKeyValue"></a>

```typescript
public readonly hashKeyValue: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#hash_key_value IotTopicRule#hash_key_value}.

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodb.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#role_arn IotTopicRule#role_arn}.

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodb.property.tableName"></a>

```typescript
public readonly tableName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#table_name IotTopicRule#table_name}.

---

##### `hashKeyType`<sup>Optional</sup> <a name="hashKeyType" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodb.property.hashKeyType"></a>

```typescript
public readonly hashKeyType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#hash_key_type IotTopicRule#hash_key_type}.

---

##### `operation`<sup>Optional</sup> <a name="operation" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodb.property.operation"></a>

```typescript
public readonly operation: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#operation IotTopicRule#operation}.

---

##### `payloadField`<sup>Optional</sup> <a name="payloadField" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodb.property.payloadField"></a>

```typescript
public readonly payloadField: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#payload_field IotTopicRule#payload_field}.

---

##### `rangeKeyField`<sup>Optional</sup> <a name="rangeKeyField" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodb.property.rangeKeyField"></a>

```typescript
public readonly rangeKeyField: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#range_key_field IotTopicRule#range_key_field}.

---

##### `rangeKeyType`<sup>Optional</sup> <a name="rangeKeyType" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodb.property.rangeKeyType"></a>

```typescript
public readonly rangeKeyType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#range_key_type IotTopicRule#range_key_type}.

---

##### `rangeKeyValue`<sup>Optional</sup> <a name="rangeKeyValue" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodb.property.rangeKeyValue"></a>

```typescript
public readonly rangeKeyValue: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#range_key_value IotTopicRule#range_key_value}.

---

### IotTopicRuleErrorActionDynamodbv2 <a name="IotTopicRuleErrorActionDynamodbv2" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodbv2"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodbv2.Initializer"></a>

```typescript
import { iotTopicRule } from '@cdktf/aws-cdk'

const iotTopicRuleErrorActionDynamodbv2: iotTopicRule.IotTopicRuleErrorActionDynamodbv2 = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodbv2.property.roleArn">roleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#role_arn IotTopicRule#role_arn}. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodbv2.property.putItem">putItem</a></code> | <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodbv2PutItem">IotTopicRuleErrorActionDynamodbv2PutItem</a></code> | put_item block. |

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodbv2.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#role_arn IotTopicRule#role_arn}.

---

##### `putItem`<sup>Optional</sup> <a name="putItem" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodbv2.property.putItem"></a>

```typescript
public readonly putItem: IotTopicRuleErrorActionDynamodbv2PutItem;
```

- *Type:* <a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodbv2PutItem">IotTopicRuleErrorActionDynamodbv2PutItem</a>

put_item block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#put_item IotTopicRule#put_item}

---

### IotTopicRuleErrorActionDynamodbv2PutItem <a name="IotTopicRuleErrorActionDynamodbv2PutItem" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodbv2PutItem"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodbv2PutItem.Initializer"></a>

```typescript
import { iotTopicRule } from '@cdktf/aws-cdk'

const iotTopicRuleErrorActionDynamodbv2PutItem: iotTopicRule.IotTopicRuleErrorActionDynamodbv2PutItem = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodbv2PutItem.property.tableName">tableName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#table_name IotTopicRule#table_name}. |

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodbv2PutItem.property.tableName"></a>

```typescript
public readonly tableName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#table_name IotTopicRule#table_name}.

---

### IotTopicRuleErrorActionElasticsearch <a name="IotTopicRuleErrorActionElasticsearch" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionElasticsearch"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionElasticsearch.Initializer"></a>

```typescript
import { iotTopicRule } from '@cdktf/aws-cdk'

const iotTopicRuleErrorActionElasticsearch: iotTopicRule.IotTopicRuleErrorActionElasticsearch = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionElasticsearch.property.endpoint">endpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#endpoint IotTopicRule#endpoint}. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionElasticsearch.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#id IotTopicRule#id}. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionElasticsearch.property.index">index</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#index IotTopicRule#index}. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionElasticsearch.property.roleArn">roleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#role_arn IotTopicRule#role_arn}. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionElasticsearch.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#type IotTopicRule#type}. |

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionElasticsearch.property.endpoint"></a>

```typescript
public readonly endpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#endpoint IotTopicRule#endpoint}.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionElasticsearch.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#id IotTopicRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `index`<sup>Required</sup> <a name="index" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionElasticsearch.property.index"></a>

```typescript
public readonly index: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#index IotTopicRule#index}.

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionElasticsearch.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#role_arn IotTopicRule#role_arn}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionElasticsearch.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#type IotTopicRule#type}.

---

### IotTopicRuleErrorActionFirehose <a name="IotTopicRuleErrorActionFirehose" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionFirehose"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionFirehose.Initializer"></a>

```typescript
import { iotTopicRule } from '@cdktf/aws-cdk'

const iotTopicRuleErrorActionFirehose: iotTopicRule.IotTopicRuleErrorActionFirehose = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionFirehose.property.deliveryStreamName">deliveryStreamName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#delivery_stream_name IotTopicRule#delivery_stream_name}. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionFirehose.property.roleArn">roleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#role_arn IotTopicRule#role_arn}. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionFirehose.property.separator">separator</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#separator IotTopicRule#separator}. |

---

##### `deliveryStreamName`<sup>Required</sup> <a name="deliveryStreamName" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionFirehose.property.deliveryStreamName"></a>

```typescript
public readonly deliveryStreamName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#delivery_stream_name IotTopicRule#delivery_stream_name}.

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionFirehose.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#role_arn IotTopicRule#role_arn}.

---

##### `separator`<sup>Optional</sup> <a name="separator" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionFirehose.property.separator"></a>

```typescript
public readonly separator: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#separator IotTopicRule#separator}.

---

### IotTopicRuleErrorActionIotAnalytics <a name="IotTopicRuleErrorActionIotAnalytics" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionIotAnalytics"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionIotAnalytics.Initializer"></a>

```typescript
import { iotTopicRule } from '@cdktf/aws-cdk'

const iotTopicRuleErrorActionIotAnalytics: iotTopicRule.IotTopicRuleErrorActionIotAnalytics = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionIotAnalytics.property.channelName">channelName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#channel_name IotTopicRule#channel_name}. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionIotAnalytics.property.roleArn">roleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#role_arn IotTopicRule#role_arn}. |

---

##### `channelName`<sup>Required</sup> <a name="channelName" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionIotAnalytics.property.channelName"></a>

```typescript
public readonly channelName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#channel_name IotTopicRule#channel_name}.

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionIotAnalytics.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#role_arn IotTopicRule#role_arn}.

---

### IotTopicRuleErrorActionIotEvents <a name="IotTopicRuleErrorActionIotEvents" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionIotEvents"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionIotEvents.Initializer"></a>

```typescript
import { iotTopicRule } from '@cdktf/aws-cdk'

const iotTopicRuleErrorActionIotEvents: iotTopicRule.IotTopicRuleErrorActionIotEvents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionIotEvents.property.inputName">inputName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#input_name IotTopicRule#input_name}. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionIotEvents.property.roleArn">roleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#role_arn IotTopicRule#role_arn}. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionIotEvents.property.messageId">messageId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#message_id IotTopicRule#message_id}. |

---

##### `inputName`<sup>Required</sup> <a name="inputName" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionIotEvents.property.inputName"></a>

```typescript
public readonly inputName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#input_name IotTopicRule#input_name}.

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionIotEvents.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#role_arn IotTopicRule#role_arn}.

---

##### `messageId`<sup>Optional</sup> <a name="messageId" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionIotEvents.property.messageId"></a>

```typescript
public readonly messageId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#message_id IotTopicRule#message_id}.

---

### IotTopicRuleErrorActionKinesis <a name="IotTopicRuleErrorActionKinesis" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionKinesis"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionKinesis.Initializer"></a>

```typescript
import { iotTopicRule } from '@cdktf/aws-cdk'

const iotTopicRuleErrorActionKinesis: iotTopicRule.IotTopicRuleErrorActionKinesis = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionKinesis.property.roleArn">roleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#role_arn IotTopicRule#role_arn}. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionKinesis.property.streamName">streamName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#stream_name IotTopicRule#stream_name}. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionKinesis.property.partitionKey">partitionKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#partition_key IotTopicRule#partition_key}. |

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionKinesis.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#role_arn IotTopicRule#role_arn}.

---

##### `streamName`<sup>Required</sup> <a name="streamName" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionKinesis.property.streamName"></a>

```typescript
public readonly streamName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#stream_name IotTopicRule#stream_name}.

---

##### `partitionKey`<sup>Optional</sup> <a name="partitionKey" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionKinesis.property.partitionKey"></a>

```typescript
public readonly partitionKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#partition_key IotTopicRule#partition_key}.

---

### IotTopicRuleErrorActionLambda <a name="IotTopicRuleErrorActionLambda" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionLambda"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionLambda.Initializer"></a>

```typescript
import { iotTopicRule } from '@cdktf/aws-cdk'

const iotTopicRuleErrorActionLambda: iotTopicRule.IotTopicRuleErrorActionLambda = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionLambda.property.functionArn">functionArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#function_arn IotTopicRule#function_arn}. |

---

##### `functionArn`<sup>Required</sup> <a name="functionArn" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionLambda.property.functionArn"></a>

```typescript
public readonly functionArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#function_arn IotTopicRule#function_arn}.

---

### IotTopicRuleErrorActionRepublish <a name="IotTopicRuleErrorActionRepublish" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionRepublish"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionRepublish.Initializer"></a>

```typescript
import { iotTopicRule } from '@cdktf/aws-cdk'

const iotTopicRuleErrorActionRepublish: iotTopicRule.IotTopicRuleErrorActionRepublish = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionRepublish.property.roleArn">roleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#role_arn IotTopicRule#role_arn}. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionRepublish.property.topic">topic</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#topic IotTopicRule#topic}. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionRepublish.property.qos">qos</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#qos IotTopicRule#qos}. |

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionRepublish.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#role_arn IotTopicRule#role_arn}.

---

##### `topic`<sup>Required</sup> <a name="topic" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionRepublish.property.topic"></a>

```typescript
public readonly topic: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#topic IotTopicRule#topic}.

---

##### `qos`<sup>Optional</sup> <a name="qos" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionRepublish.property.qos"></a>

```typescript
public readonly qos: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#qos IotTopicRule#qos}.

---

### IotTopicRuleErrorActionS3 <a name="IotTopicRuleErrorActionS3" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionS3"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionS3.Initializer"></a>

```typescript
import { iotTopicRule } from '@cdktf/aws-cdk'

const iotTopicRuleErrorActionS3: iotTopicRule.IotTopicRuleErrorActionS3 = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionS3.property.bucketName">bucketName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#bucket_name IotTopicRule#bucket_name}. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionS3.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#key IotTopicRule#key}. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionS3.property.roleArn">roleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#role_arn IotTopicRule#role_arn}. |

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionS3.property.bucketName"></a>

```typescript
public readonly bucketName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#bucket_name IotTopicRule#bucket_name}.

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionS3.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#key IotTopicRule#key}.

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionS3.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#role_arn IotTopicRule#role_arn}.

---

### IotTopicRuleErrorActionSns <a name="IotTopicRuleErrorActionSns" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionSns"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionSns.Initializer"></a>

```typescript
import { iotTopicRule } from '@cdktf/aws-cdk'

const iotTopicRuleErrorActionSns: iotTopicRule.IotTopicRuleErrorActionSns = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionSns.property.roleArn">roleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#role_arn IotTopicRule#role_arn}. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionSns.property.targetArn">targetArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#target_arn IotTopicRule#target_arn}. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionSns.property.messageFormat">messageFormat</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#message_format IotTopicRule#message_format}. |

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionSns.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#role_arn IotTopicRule#role_arn}.

---

##### `targetArn`<sup>Required</sup> <a name="targetArn" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionSns.property.targetArn"></a>

```typescript
public readonly targetArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#target_arn IotTopicRule#target_arn}.

---

##### `messageFormat`<sup>Optional</sup> <a name="messageFormat" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionSns.property.messageFormat"></a>

```typescript
public readonly messageFormat: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#message_format IotTopicRule#message_format}.

---

### IotTopicRuleErrorActionSqs <a name="IotTopicRuleErrorActionSqs" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionSqs"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionSqs.Initializer"></a>

```typescript
import { iotTopicRule } from '@cdktf/aws-cdk'

const iotTopicRuleErrorActionSqs: iotTopicRule.IotTopicRuleErrorActionSqs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionSqs.property.queueUrl">queueUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#queue_url IotTopicRule#queue_url}. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionSqs.property.roleArn">roleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#role_arn IotTopicRule#role_arn}. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionSqs.property.useBase64">useBase64</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#use_base64 IotTopicRule#use_base64}. |

---

##### `queueUrl`<sup>Required</sup> <a name="queueUrl" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionSqs.property.queueUrl"></a>

```typescript
public readonly queueUrl: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#queue_url IotTopicRule#queue_url}.

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionSqs.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#role_arn IotTopicRule#role_arn}.

---

##### `useBase64`<sup>Required</sup> <a name="useBase64" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionSqs.property.useBase64"></a>

```typescript
public readonly useBase64: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#use_base64 IotTopicRule#use_base64}.

---

### IotTopicRuleErrorActionStepFunctions <a name="IotTopicRuleErrorActionStepFunctions" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionStepFunctions"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionStepFunctions.Initializer"></a>

```typescript
import { iotTopicRule } from '@cdktf/aws-cdk'

const iotTopicRuleErrorActionStepFunctions: iotTopicRule.IotTopicRuleErrorActionStepFunctions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionStepFunctions.property.roleArn">roleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#role_arn IotTopicRule#role_arn}. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionStepFunctions.property.stateMachineName">stateMachineName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#state_machine_name IotTopicRule#state_machine_name}. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionStepFunctions.property.executionNamePrefix">executionNamePrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#execution_name_prefix IotTopicRule#execution_name_prefix}. |

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionStepFunctions.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#role_arn IotTopicRule#role_arn}.

---

##### `stateMachineName`<sup>Required</sup> <a name="stateMachineName" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionStepFunctions.property.stateMachineName"></a>

```typescript
public readonly stateMachineName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#state_machine_name IotTopicRule#state_machine_name}.

---

##### `executionNamePrefix`<sup>Optional</sup> <a name="executionNamePrefix" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionStepFunctions.property.executionNamePrefix"></a>

```typescript
public readonly executionNamePrefix: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#execution_name_prefix IotTopicRule#execution_name_prefix}.

---

### IotTopicRuleFirehose <a name="IotTopicRuleFirehose" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleFirehose"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleFirehose.Initializer"></a>

```typescript
import { iotTopicRule } from '@cdktf/aws-cdk'

const iotTopicRuleFirehose: iotTopicRule.IotTopicRuleFirehose = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleFirehose.property.deliveryStreamName">deliveryStreamName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#delivery_stream_name IotTopicRule#delivery_stream_name}. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleFirehose.property.roleArn">roleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#role_arn IotTopicRule#role_arn}. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleFirehose.property.separator">separator</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#separator IotTopicRule#separator}. |

---

##### `deliveryStreamName`<sup>Required</sup> <a name="deliveryStreamName" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleFirehose.property.deliveryStreamName"></a>

```typescript
public readonly deliveryStreamName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#delivery_stream_name IotTopicRule#delivery_stream_name}.

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleFirehose.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#role_arn IotTopicRule#role_arn}.

---

##### `separator`<sup>Optional</sup> <a name="separator" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleFirehose.property.separator"></a>

```typescript
public readonly separator: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#separator IotTopicRule#separator}.

---

### IotTopicRuleIotAnalytics <a name="IotTopicRuleIotAnalytics" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleIotAnalytics"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleIotAnalytics.Initializer"></a>

```typescript
import { iotTopicRule } from '@cdktf/aws-cdk'

const iotTopicRuleIotAnalytics: iotTopicRule.IotTopicRuleIotAnalytics = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleIotAnalytics.property.channelName">channelName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#channel_name IotTopicRule#channel_name}. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleIotAnalytics.property.roleArn">roleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#role_arn IotTopicRule#role_arn}. |

---

##### `channelName`<sup>Required</sup> <a name="channelName" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleIotAnalytics.property.channelName"></a>

```typescript
public readonly channelName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#channel_name IotTopicRule#channel_name}.

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleIotAnalytics.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#role_arn IotTopicRule#role_arn}.

---

### IotTopicRuleIotEvents <a name="IotTopicRuleIotEvents" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleIotEvents"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleIotEvents.Initializer"></a>

```typescript
import { iotTopicRule } from '@cdktf/aws-cdk'

const iotTopicRuleIotEvents: iotTopicRule.IotTopicRuleIotEvents = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleIotEvents.property.inputName">inputName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#input_name IotTopicRule#input_name}. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleIotEvents.property.roleArn">roleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#role_arn IotTopicRule#role_arn}. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleIotEvents.property.messageId">messageId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#message_id IotTopicRule#message_id}. |

---

##### `inputName`<sup>Required</sup> <a name="inputName" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleIotEvents.property.inputName"></a>

```typescript
public readonly inputName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#input_name IotTopicRule#input_name}.

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleIotEvents.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#role_arn IotTopicRule#role_arn}.

---

##### `messageId`<sup>Optional</sup> <a name="messageId" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleIotEvents.property.messageId"></a>

```typescript
public readonly messageId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#message_id IotTopicRule#message_id}.

---

### IotTopicRuleKinesis <a name="IotTopicRuleKinesis" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleKinesis"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleKinesis.Initializer"></a>

```typescript
import { iotTopicRule } from '@cdktf/aws-cdk'

const iotTopicRuleKinesis: iotTopicRule.IotTopicRuleKinesis = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleKinesis.property.roleArn">roleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#role_arn IotTopicRule#role_arn}. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleKinesis.property.streamName">streamName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#stream_name IotTopicRule#stream_name}. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleKinesis.property.partitionKey">partitionKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#partition_key IotTopicRule#partition_key}. |

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleKinesis.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#role_arn IotTopicRule#role_arn}.

---

##### `streamName`<sup>Required</sup> <a name="streamName" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleKinesis.property.streamName"></a>

```typescript
public readonly streamName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#stream_name IotTopicRule#stream_name}.

---

##### `partitionKey`<sup>Optional</sup> <a name="partitionKey" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleKinesis.property.partitionKey"></a>

```typescript
public readonly partitionKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#partition_key IotTopicRule#partition_key}.

---

### IotTopicRuleLambda <a name="IotTopicRuleLambda" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleLambda"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleLambda.Initializer"></a>

```typescript
import { iotTopicRule } from '@cdktf/aws-cdk'

const iotTopicRuleLambda: iotTopicRule.IotTopicRuleLambda = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleLambda.property.functionArn">functionArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#function_arn IotTopicRule#function_arn}. |

---

##### `functionArn`<sup>Required</sup> <a name="functionArn" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleLambda.property.functionArn"></a>

```typescript
public readonly functionArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#function_arn IotTopicRule#function_arn}.

---

### IotTopicRuleRepublish <a name="IotTopicRuleRepublish" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleRepublish"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleRepublish.Initializer"></a>

```typescript
import { iotTopicRule } from '@cdktf/aws-cdk'

const iotTopicRuleRepublish: iotTopicRule.IotTopicRuleRepublish = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleRepublish.property.roleArn">roleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#role_arn IotTopicRule#role_arn}. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleRepublish.property.topic">topic</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#topic IotTopicRule#topic}. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleRepublish.property.qos">qos</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#qos IotTopicRule#qos}. |

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleRepublish.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#role_arn IotTopicRule#role_arn}.

---

##### `topic`<sup>Required</sup> <a name="topic" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleRepublish.property.topic"></a>

```typescript
public readonly topic: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#topic IotTopicRule#topic}.

---

##### `qos`<sup>Optional</sup> <a name="qos" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleRepublish.property.qos"></a>

```typescript
public readonly qos: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#qos IotTopicRule#qos}.

---

### IotTopicRuleS3 <a name="IotTopicRuleS3" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleS3"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleS3.Initializer"></a>

```typescript
import { iotTopicRule } from '@cdktf/aws-cdk'

const iotTopicRuleS3: iotTopicRule.IotTopicRuleS3 = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleS3.property.bucketName">bucketName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#bucket_name IotTopicRule#bucket_name}. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleS3.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#key IotTopicRule#key}. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleS3.property.roleArn">roleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#role_arn IotTopicRule#role_arn}. |

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleS3.property.bucketName"></a>

```typescript
public readonly bucketName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#bucket_name IotTopicRule#bucket_name}.

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleS3.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#key IotTopicRule#key}.

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleS3.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#role_arn IotTopicRule#role_arn}.

---

### IotTopicRuleSns <a name="IotTopicRuleSns" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleSns"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleSns.Initializer"></a>

```typescript
import { iotTopicRule } from '@cdktf/aws-cdk'

const iotTopicRuleSns: iotTopicRule.IotTopicRuleSns = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleSns.property.roleArn">roleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#role_arn IotTopicRule#role_arn}. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleSns.property.targetArn">targetArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#target_arn IotTopicRule#target_arn}. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleSns.property.messageFormat">messageFormat</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#message_format IotTopicRule#message_format}. |

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleSns.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#role_arn IotTopicRule#role_arn}.

---

##### `targetArn`<sup>Required</sup> <a name="targetArn" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleSns.property.targetArn"></a>

```typescript
public readonly targetArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#target_arn IotTopicRule#target_arn}.

---

##### `messageFormat`<sup>Optional</sup> <a name="messageFormat" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleSns.property.messageFormat"></a>

```typescript
public readonly messageFormat: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#message_format IotTopicRule#message_format}.

---

### IotTopicRuleSqs <a name="IotTopicRuleSqs" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleSqs"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleSqs.Initializer"></a>

```typescript
import { iotTopicRule } from '@cdktf/aws-cdk'

const iotTopicRuleSqs: iotTopicRule.IotTopicRuleSqs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleSqs.property.queueUrl">queueUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#queue_url IotTopicRule#queue_url}. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleSqs.property.roleArn">roleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#role_arn IotTopicRule#role_arn}. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleSqs.property.useBase64">useBase64</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#use_base64 IotTopicRule#use_base64}. |

---

##### `queueUrl`<sup>Required</sup> <a name="queueUrl" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleSqs.property.queueUrl"></a>

```typescript
public readonly queueUrl: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#queue_url IotTopicRule#queue_url}.

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleSqs.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#role_arn IotTopicRule#role_arn}.

---

##### `useBase64`<sup>Required</sup> <a name="useBase64" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleSqs.property.useBase64"></a>

```typescript
public readonly useBase64: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#use_base64 IotTopicRule#use_base64}.

---

### IotTopicRuleStepFunctions <a name="IotTopicRuleStepFunctions" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleStepFunctions"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleStepFunctions.Initializer"></a>

```typescript
import { iotTopicRule } from '@cdktf/aws-cdk'

const iotTopicRuleStepFunctions: iotTopicRule.IotTopicRuleStepFunctions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleStepFunctions.property.roleArn">roleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#role_arn IotTopicRule#role_arn}. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleStepFunctions.property.stateMachineName">stateMachineName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#state_machine_name IotTopicRule#state_machine_name}. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleStepFunctions.property.executionNamePrefix">executionNamePrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#execution_name_prefix IotTopicRule#execution_name_prefix}. |

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleStepFunctions.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#role_arn IotTopicRule#role_arn}.

---

##### `stateMachineName`<sup>Required</sup> <a name="stateMachineName" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleStepFunctions.property.stateMachineName"></a>

```typescript
public readonly stateMachineName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#state_machine_name IotTopicRule#state_machine_name}.

---

##### `executionNamePrefix`<sup>Optional</sup> <a name="executionNamePrefix" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleStepFunctions.property.executionNamePrefix"></a>

```typescript
public readonly executionNamePrefix: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/iot_topic_rule#execution_name_prefix IotTopicRule#execution_name_prefix}.

---

## Classes <a name="Classes" id="Classes"></a>

### IotTopicRuleCloudwatchAlarmList <a name="IotTopicRuleCloudwatchAlarmList" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleCloudwatchAlarmList"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleCloudwatchAlarmList.Initializer"></a>

```typescript
import { iotTopicRule } from '@cdktf/aws-cdk'

new iotTopicRule.IotTopicRuleCloudwatchAlarmList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleCloudwatchAlarmList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleCloudwatchAlarmList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleCloudwatchAlarmList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleCloudwatchAlarmList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleCloudwatchAlarmList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleCloudwatchAlarmList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleCloudwatchAlarmList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleCloudwatchAlarmList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleCloudwatchAlarmList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleCloudwatchAlarmList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleCloudwatchAlarmList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleCloudwatchAlarmList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleCloudwatchAlarmList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleCloudwatchAlarmList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleCloudwatchAlarmList.get"></a>

```typescript
public get(index: number): IotTopicRuleCloudwatchAlarmOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleCloudwatchAlarmList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleCloudwatchAlarmList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleCloudwatchAlarmList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleCloudwatchAlarmList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleCloudwatchAlarm">IotTopicRuleCloudwatchAlarm</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleCloudwatchAlarmList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleCloudwatchAlarmList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleCloudwatchAlarmList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotTopicRuleCloudwatchAlarm[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleCloudwatchAlarm">IotTopicRuleCloudwatchAlarm</a>[]

---


### IotTopicRuleCloudwatchAlarmOutputReference <a name="IotTopicRuleCloudwatchAlarmOutputReference" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleCloudwatchAlarmOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleCloudwatchAlarmOutputReference.Initializer"></a>

```typescript
import { iotTopicRule } from '@cdktf/aws-cdk'

new iotTopicRule.IotTopicRuleCloudwatchAlarmOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleCloudwatchAlarmOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleCloudwatchAlarmOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleCloudwatchAlarmOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleCloudwatchAlarmOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleCloudwatchAlarmOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleCloudwatchAlarmOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleCloudwatchAlarmOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleCloudwatchAlarmOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleCloudwatchAlarmOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleCloudwatchAlarmOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleCloudwatchAlarmOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleCloudwatchAlarmOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleCloudwatchAlarmOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleCloudwatchAlarmOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleCloudwatchAlarmOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleCloudwatchAlarmOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleCloudwatchAlarmOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleCloudwatchAlarmOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleCloudwatchAlarmOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleCloudwatchAlarmOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleCloudwatchAlarmOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleCloudwatchAlarmOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleCloudwatchAlarmOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleCloudwatchAlarmOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleCloudwatchAlarmOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleCloudwatchAlarmOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleCloudwatchAlarmOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleCloudwatchAlarmOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleCloudwatchAlarmOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleCloudwatchAlarmOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleCloudwatchAlarmOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleCloudwatchAlarmOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleCloudwatchAlarmOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleCloudwatchAlarmOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleCloudwatchAlarmOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleCloudwatchAlarmOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleCloudwatchAlarmOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleCloudwatchAlarmOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleCloudwatchAlarmOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleCloudwatchAlarmOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleCloudwatchAlarmOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleCloudwatchAlarmOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleCloudwatchAlarmOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleCloudwatchAlarmOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleCloudwatchAlarmOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleCloudwatchAlarmOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleCloudwatchAlarmOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleCloudwatchAlarmOutputReference.property.alarmNameInput">alarmNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleCloudwatchAlarmOutputReference.property.roleArnInput">roleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleCloudwatchAlarmOutputReference.property.stateReasonInput">stateReasonInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleCloudwatchAlarmOutputReference.property.stateValueInput">stateValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleCloudwatchAlarmOutputReference.property.alarmName">alarmName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleCloudwatchAlarmOutputReference.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleCloudwatchAlarmOutputReference.property.stateReason">stateReason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleCloudwatchAlarmOutputReference.property.stateValue">stateValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleCloudwatchAlarmOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleCloudwatchAlarm">IotTopicRuleCloudwatchAlarm</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleCloudwatchAlarmOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleCloudwatchAlarmOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `alarmNameInput`<sup>Optional</sup> <a name="alarmNameInput" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleCloudwatchAlarmOutputReference.property.alarmNameInput"></a>

```typescript
public readonly alarmNameInput: string;
```

- *Type:* string

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleCloudwatchAlarmOutputReference.property.roleArnInput"></a>

```typescript
public readonly roleArnInput: string;
```

- *Type:* string

---

##### `stateReasonInput`<sup>Optional</sup> <a name="stateReasonInput" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleCloudwatchAlarmOutputReference.property.stateReasonInput"></a>

```typescript
public readonly stateReasonInput: string;
```

- *Type:* string

---

##### `stateValueInput`<sup>Optional</sup> <a name="stateValueInput" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleCloudwatchAlarmOutputReference.property.stateValueInput"></a>

```typescript
public readonly stateValueInput: string;
```

- *Type:* string

---

##### `alarmName`<sup>Required</sup> <a name="alarmName" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleCloudwatchAlarmOutputReference.property.alarmName"></a>

```typescript
public readonly alarmName: string;
```

- *Type:* string

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleCloudwatchAlarmOutputReference.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `stateReason`<sup>Required</sup> <a name="stateReason" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleCloudwatchAlarmOutputReference.property.stateReason"></a>

```typescript
public readonly stateReason: string;
```

- *Type:* string

---

##### `stateValue`<sup>Required</sup> <a name="stateValue" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleCloudwatchAlarmOutputReference.property.stateValue"></a>

```typescript
public readonly stateValue: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleCloudwatchAlarmOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IotTopicRuleCloudwatchAlarm | IResolvable;
```

- *Type:* <a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleCloudwatchAlarm">IotTopicRuleCloudwatchAlarm</a> | cdktf.IResolvable

---


### IotTopicRuleCloudwatchMetricList <a name="IotTopicRuleCloudwatchMetricList" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleCloudwatchMetricList"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleCloudwatchMetricList.Initializer"></a>

```typescript
import { iotTopicRule } from '@cdktf/aws-cdk'

new iotTopicRule.IotTopicRuleCloudwatchMetricList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleCloudwatchMetricList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleCloudwatchMetricList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleCloudwatchMetricList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleCloudwatchMetricList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleCloudwatchMetricList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleCloudwatchMetricList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleCloudwatchMetricList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleCloudwatchMetricList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleCloudwatchMetricList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleCloudwatchMetricList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleCloudwatchMetricList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleCloudwatchMetricList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleCloudwatchMetricList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleCloudwatchMetricList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleCloudwatchMetricList.get"></a>

```typescript
public get(index: number): IotTopicRuleCloudwatchMetricOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleCloudwatchMetricList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleCloudwatchMetricList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleCloudwatchMetricList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleCloudwatchMetricList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleCloudwatchMetric">IotTopicRuleCloudwatchMetric</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleCloudwatchMetricList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleCloudwatchMetricList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleCloudwatchMetricList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotTopicRuleCloudwatchMetric[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleCloudwatchMetric">IotTopicRuleCloudwatchMetric</a>[]

---


### IotTopicRuleCloudwatchMetricOutputReference <a name="IotTopicRuleCloudwatchMetricOutputReference" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleCloudwatchMetricOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleCloudwatchMetricOutputReference.Initializer"></a>

```typescript
import { iotTopicRule } from '@cdktf/aws-cdk'

new iotTopicRule.IotTopicRuleCloudwatchMetricOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleCloudwatchMetricOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleCloudwatchMetricOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleCloudwatchMetricOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleCloudwatchMetricOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleCloudwatchMetricOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleCloudwatchMetricOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleCloudwatchMetricOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleCloudwatchMetricOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleCloudwatchMetricOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleCloudwatchMetricOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleCloudwatchMetricOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleCloudwatchMetricOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleCloudwatchMetricOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleCloudwatchMetricOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleCloudwatchMetricOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleCloudwatchMetricOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleCloudwatchMetricOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleCloudwatchMetricOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleCloudwatchMetricOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleCloudwatchMetricOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleCloudwatchMetricOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleCloudwatchMetricOutputReference.resetMetricTimestamp">resetMetricTimestamp</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleCloudwatchMetricOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleCloudwatchMetricOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleCloudwatchMetricOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleCloudwatchMetricOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleCloudwatchMetricOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleCloudwatchMetricOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleCloudwatchMetricOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleCloudwatchMetricOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleCloudwatchMetricOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleCloudwatchMetricOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleCloudwatchMetricOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleCloudwatchMetricOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleCloudwatchMetricOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleCloudwatchMetricOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleCloudwatchMetricOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleCloudwatchMetricOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleCloudwatchMetricOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleCloudwatchMetricOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleCloudwatchMetricOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleCloudwatchMetricOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleCloudwatchMetricOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleCloudwatchMetricOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleCloudwatchMetricOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleCloudwatchMetricOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMetricTimestamp` <a name="resetMetricTimestamp" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleCloudwatchMetricOutputReference.resetMetricTimestamp"></a>

```typescript
public resetMetricTimestamp(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleCloudwatchMetricOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleCloudwatchMetricOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleCloudwatchMetricOutputReference.property.metricNameInput">metricNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleCloudwatchMetricOutputReference.property.metricNamespaceInput">metricNamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleCloudwatchMetricOutputReference.property.metricTimestampInput">metricTimestampInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleCloudwatchMetricOutputReference.property.metricUnitInput">metricUnitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleCloudwatchMetricOutputReference.property.metricValueInput">metricValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleCloudwatchMetricOutputReference.property.roleArnInput">roleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleCloudwatchMetricOutputReference.property.metricName">metricName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleCloudwatchMetricOutputReference.property.metricNamespace">metricNamespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleCloudwatchMetricOutputReference.property.metricTimestamp">metricTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleCloudwatchMetricOutputReference.property.metricUnit">metricUnit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleCloudwatchMetricOutputReference.property.metricValue">metricValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleCloudwatchMetricOutputReference.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleCloudwatchMetricOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleCloudwatchMetric">IotTopicRuleCloudwatchMetric</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleCloudwatchMetricOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleCloudwatchMetricOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `metricNameInput`<sup>Optional</sup> <a name="metricNameInput" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleCloudwatchMetricOutputReference.property.metricNameInput"></a>

```typescript
public readonly metricNameInput: string;
```

- *Type:* string

---

##### `metricNamespaceInput`<sup>Optional</sup> <a name="metricNamespaceInput" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleCloudwatchMetricOutputReference.property.metricNamespaceInput"></a>

```typescript
public readonly metricNamespaceInput: string;
```

- *Type:* string

---

##### `metricTimestampInput`<sup>Optional</sup> <a name="metricTimestampInput" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleCloudwatchMetricOutputReference.property.metricTimestampInput"></a>

```typescript
public readonly metricTimestampInput: string;
```

- *Type:* string

---

##### `metricUnitInput`<sup>Optional</sup> <a name="metricUnitInput" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleCloudwatchMetricOutputReference.property.metricUnitInput"></a>

```typescript
public readonly metricUnitInput: string;
```

- *Type:* string

---

##### `metricValueInput`<sup>Optional</sup> <a name="metricValueInput" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleCloudwatchMetricOutputReference.property.metricValueInput"></a>

```typescript
public readonly metricValueInput: string;
```

- *Type:* string

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleCloudwatchMetricOutputReference.property.roleArnInput"></a>

```typescript
public readonly roleArnInput: string;
```

- *Type:* string

---

##### `metricName`<sup>Required</sup> <a name="metricName" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleCloudwatchMetricOutputReference.property.metricName"></a>

```typescript
public readonly metricName: string;
```

- *Type:* string

---

##### `metricNamespace`<sup>Required</sup> <a name="metricNamespace" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleCloudwatchMetricOutputReference.property.metricNamespace"></a>

```typescript
public readonly metricNamespace: string;
```

- *Type:* string

---

##### `metricTimestamp`<sup>Required</sup> <a name="metricTimestamp" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleCloudwatchMetricOutputReference.property.metricTimestamp"></a>

```typescript
public readonly metricTimestamp: string;
```

- *Type:* string

---

##### `metricUnit`<sup>Required</sup> <a name="metricUnit" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleCloudwatchMetricOutputReference.property.metricUnit"></a>

```typescript
public readonly metricUnit: string;
```

- *Type:* string

---

##### `metricValue`<sup>Required</sup> <a name="metricValue" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleCloudwatchMetricOutputReference.property.metricValue"></a>

```typescript
public readonly metricValue: string;
```

- *Type:* string

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleCloudwatchMetricOutputReference.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleCloudwatchMetricOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IotTopicRuleCloudwatchMetric | IResolvable;
```

- *Type:* <a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleCloudwatchMetric">IotTopicRuleCloudwatchMetric</a> | cdktf.IResolvable

---


### IotTopicRuleDynamodbList <a name="IotTopicRuleDynamodbList" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbList"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbList.Initializer"></a>

```typescript
import { iotTopicRule } from '@cdktf/aws-cdk'

new iotTopicRule.IotTopicRuleDynamodbList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbList.get"></a>

```typescript
public get(index: number): IotTopicRuleDynamodbOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodb">IotTopicRuleDynamodb</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotTopicRuleDynamodb[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodb">IotTopicRuleDynamodb</a>[]

---


### IotTopicRuleDynamodbOutputReference <a name="IotTopicRuleDynamodbOutputReference" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbOutputReference.Initializer"></a>

```typescript
import { iotTopicRule } from '@cdktf/aws-cdk'

new iotTopicRule.IotTopicRuleDynamodbOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbOutputReference.resetHashKeyType">resetHashKeyType</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbOutputReference.resetOperation">resetOperation</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbOutputReference.resetPayloadField">resetPayloadField</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbOutputReference.resetRangeKeyField">resetRangeKeyField</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbOutputReference.resetRangeKeyType">resetRangeKeyType</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbOutputReference.resetRangeKeyValue">resetRangeKeyValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHashKeyType` <a name="resetHashKeyType" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbOutputReference.resetHashKeyType"></a>

```typescript
public resetHashKeyType(): void
```

##### `resetOperation` <a name="resetOperation" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbOutputReference.resetOperation"></a>

```typescript
public resetOperation(): void
```

##### `resetPayloadField` <a name="resetPayloadField" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbOutputReference.resetPayloadField"></a>

```typescript
public resetPayloadField(): void
```

##### `resetRangeKeyField` <a name="resetRangeKeyField" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbOutputReference.resetRangeKeyField"></a>

```typescript
public resetRangeKeyField(): void
```

##### `resetRangeKeyType` <a name="resetRangeKeyType" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbOutputReference.resetRangeKeyType"></a>

```typescript
public resetRangeKeyType(): void
```

##### `resetRangeKeyValue` <a name="resetRangeKeyValue" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbOutputReference.resetRangeKeyValue"></a>

```typescript
public resetRangeKeyValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbOutputReference.property.hashKeyFieldInput">hashKeyFieldInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbOutputReference.property.hashKeyTypeInput">hashKeyTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbOutputReference.property.hashKeyValueInput">hashKeyValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbOutputReference.property.operationInput">operationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbOutputReference.property.payloadFieldInput">payloadFieldInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbOutputReference.property.rangeKeyFieldInput">rangeKeyFieldInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbOutputReference.property.rangeKeyTypeInput">rangeKeyTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbOutputReference.property.rangeKeyValueInput">rangeKeyValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbOutputReference.property.roleArnInput">roleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbOutputReference.property.tableNameInput">tableNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbOutputReference.property.hashKeyField">hashKeyField</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbOutputReference.property.hashKeyType">hashKeyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbOutputReference.property.hashKeyValue">hashKeyValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbOutputReference.property.operation">operation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbOutputReference.property.payloadField">payloadField</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbOutputReference.property.rangeKeyField">rangeKeyField</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbOutputReference.property.rangeKeyType">rangeKeyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbOutputReference.property.rangeKeyValue">rangeKeyValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbOutputReference.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbOutputReference.property.tableName">tableName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodb">IotTopicRuleDynamodb</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `hashKeyFieldInput`<sup>Optional</sup> <a name="hashKeyFieldInput" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbOutputReference.property.hashKeyFieldInput"></a>

```typescript
public readonly hashKeyFieldInput: string;
```

- *Type:* string

---

##### `hashKeyTypeInput`<sup>Optional</sup> <a name="hashKeyTypeInput" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbOutputReference.property.hashKeyTypeInput"></a>

```typescript
public readonly hashKeyTypeInput: string;
```

- *Type:* string

---

##### `hashKeyValueInput`<sup>Optional</sup> <a name="hashKeyValueInput" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbOutputReference.property.hashKeyValueInput"></a>

```typescript
public readonly hashKeyValueInput: string;
```

- *Type:* string

---

##### `operationInput`<sup>Optional</sup> <a name="operationInput" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbOutputReference.property.operationInput"></a>

```typescript
public readonly operationInput: string;
```

- *Type:* string

---

##### `payloadFieldInput`<sup>Optional</sup> <a name="payloadFieldInput" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbOutputReference.property.payloadFieldInput"></a>

```typescript
public readonly payloadFieldInput: string;
```

- *Type:* string

---

##### `rangeKeyFieldInput`<sup>Optional</sup> <a name="rangeKeyFieldInput" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbOutputReference.property.rangeKeyFieldInput"></a>

```typescript
public readonly rangeKeyFieldInput: string;
```

- *Type:* string

---

##### `rangeKeyTypeInput`<sup>Optional</sup> <a name="rangeKeyTypeInput" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbOutputReference.property.rangeKeyTypeInput"></a>

```typescript
public readonly rangeKeyTypeInput: string;
```

- *Type:* string

---

##### `rangeKeyValueInput`<sup>Optional</sup> <a name="rangeKeyValueInput" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbOutputReference.property.rangeKeyValueInput"></a>

```typescript
public readonly rangeKeyValueInput: string;
```

- *Type:* string

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbOutputReference.property.roleArnInput"></a>

```typescript
public readonly roleArnInput: string;
```

- *Type:* string

---

##### `tableNameInput`<sup>Optional</sup> <a name="tableNameInput" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbOutputReference.property.tableNameInput"></a>

```typescript
public readonly tableNameInput: string;
```

- *Type:* string

---

##### `hashKeyField`<sup>Required</sup> <a name="hashKeyField" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbOutputReference.property.hashKeyField"></a>

```typescript
public readonly hashKeyField: string;
```

- *Type:* string

---

##### `hashKeyType`<sup>Required</sup> <a name="hashKeyType" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbOutputReference.property.hashKeyType"></a>

```typescript
public readonly hashKeyType: string;
```

- *Type:* string

---

##### `hashKeyValue`<sup>Required</sup> <a name="hashKeyValue" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbOutputReference.property.hashKeyValue"></a>

```typescript
public readonly hashKeyValue: string;
```

- *Type:* string

---

##### `operation`<sup>Required</sup> <a name="operation" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbOutputReference.property.operation"></a>

```typescript
public readonly operation: string;
```

- *Type:* string

---

##### `payloadField`<sup>Required</sup> <a name="payloadField" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbOutputReference.property.payloadField"></a>

```typescript
public readonly payloadField: string;
```

- *Type:* string

---

##### `rangeKeyField`<sup>Required</sup> <a name="rangeKeyField" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbOutputReference.property.rangeKeyField"></a>

```typescript
public readonly rangeKeyField: string;
```

- *Type:* string

---

##### `rangeKeyType`<sup>Required</sup> <a name="rangeKeyType" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbOutputReference.property.rangeKeyType"></a>

```typescript
public readonly rangeKeyType: string;
```

- *Type:* string

---

##### `rangeKeyValue`<sup>Required</sup> <a name="rangeKeyValue" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbOutputReference.property.rangeKeyValue"></a>

```typescript
public readonly rangeKeyValue: string;
```

- *Type:* string

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbOutputReference.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbOutputReference.property.tableName"></a>

```typescript
public readonly tableName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IotTopicRuleDynamodb | IResolvable;
```

- *Type:* <a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodb">IotTopicRuleDynamodb</a> | cdktf.IResolvable

---


### IotTopicRuleDynamodbv2List <a name="IotTopicRuleDynamodbv2List" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbv2List"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbv2List.Initializer"></a>

```typescript
import { iotTopicRule } from '@cdktf/aws-cdk'

new iotTopicRule.IotTopicRuleDynamodbv2List(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbv2List.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbv2List.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbv2List.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbv2List.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbv2List.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbv2List.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbv2List.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbv2List.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbv2List.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbv2List.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbv2List.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbv2List.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbv2List.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbv2List.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbv2List.get"></a>

```typescript
public get(index: number): IotTopicRuleDynamodbv2OutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbv2List.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbv2List.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbv2List.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbv2List.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbv2">IotTopicRuleDynamodbv2</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbv2List.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbv2List.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbv2List.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotTopicRuleDynamodbv2[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbv2">IotTopicRuleDynamodbv2</a>[]

---


### IotTopicRuleDynamodbv2OutputReference <a name="IotTopicRuleDynamodbv2OutputReference" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbv2OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbv2OutputReference.Initializer"></a>

```typescript
import { iotTopicRule } from '@cdktf/aws-cdk'

new iotTopicRule.IotTopicRuleDynamodbv2OutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbv2OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbv2OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbv2OutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbv2OutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbv2OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbv2OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbv2OutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbv2OutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbv2OutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbv2OutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbv2OutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbv2OutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbv2OutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbv2OutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbv2OutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbv2OutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbv2OutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbv2OutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbv2OutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbv2OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbv2OutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbv2OutputReference.putPutItem">putPutItem</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbv2OutputReference.resetPutItem">resetPutItem</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbv2OutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbv2OutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbv2OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbv2OutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbv2OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbv2OutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbv2OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbv2OutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbv2OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbv2OutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbv2OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbv2OutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbv2OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbv2OutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbv2OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbv2OutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbv2OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbv2OutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbv2OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbv2OutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbv2OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbv2OutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbv2OutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbv2OutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPutItem` <a name="putPutItem" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbv2OutputReference.putPutItem"></a>

```typescript
public putPutItem(value: IotTopicRuleDynamodbv2PutItem): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbv2OutputReference.putPutItem.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbv2PutItem">IotTopicRuleDynamodbv2PutItem</a>

---

##### `resetPutItem` <a name="resetPutItem" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbv2OutputReference.resetPutItem"></a>

```typescript
public resetPutItem(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbv2OutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbv2OutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbv2OutputReference.property.putItem">putItem</a></code> | <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbv2PutItemOutputReference">IotTopicRuleDynamodbv2PutItemOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbv2OutputReference.property.putItemInput">putItemInput</a></code> | <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbv2PutItem">IotTopicRuleDynamodbv2PutItem</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbv2OutputReference.property.roleArnInput">roleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbv2OutputReference.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbv2OutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbv2">IotTopicRuleDynamodbv2</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbv2OutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbv2OutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `putItem`<sup>Required</sup> <a name="putItem" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbv2OutputReference.property.putItem"></a>

```typescript
public readonly putItem: IotTopicRuleDynamodbv2PutItemOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbv2PutItemOutputReference">IotTopicRuleDynamodbv2PutItemOutputReference</a>

---

##### `putItemInput`<sup>Optional</sup> <a name="putItemInput" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbv2OutputReference.property.putItemInput"></a>

```typescript
public readonly putItemInput: IotTopicRuleDynamodbv2PutItem;
```

- *Type:* <a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbv2PutItem">IotTopicRuleDynamodbv2PutItem</a>

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbv2OutputReference.property.roleArnInput"></a>

```typescript
public readonly roleArnInput: string;
```

- *Type:* string

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbv2OutputReference.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbv2OutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IotTopicRuleDynamodbv2 | IResolvable;
```

- *Type:* <a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbv2">IotTopicRuleDynamodbv2</a> | cdktf.IResolvable

---


### IotTopicRuleDynamodbv2PutItemOutputReference <a name="IotTopicRuleDynamodbv2PutItemOutputReference" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbv2PutItemOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbv2PutItemOutputReference.Initializer"></a>

```typescript
import { iotTopicRule } from '@cdktf/aws-cdk'

new iotTopicRule.IotTopicRuleDynamodbv2PutItemOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbv2PutItemOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbv2PutItemOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbv2PutItemOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbv2PutItemOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbv2PutItemOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbv2PutItemOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbv2PutItemOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbv2PutItemOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbv2PutItemOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbv2PutItemOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbv2PutItemOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbv2PutItemOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbv2PutItemOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbv2PutItemOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbv2PutItemOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbv2PutItemOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbv2PutItemOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbv2PutItemOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbv2PutItemOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbv2PutItemOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbv2PutItemOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbv2PutItemOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbv2PutItemOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbv2PutItemOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbv2PutItemOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbv2PutItemOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbv2PutItemOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbv2PutItemOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbv2PutItemOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbv2PutItemOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbv2PutItemOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbv2PutItemOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbv2PutItemOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbv2PutItemOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbv2PutItemOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbv2PutItemOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbv2PutItemOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbv2PutItemOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbv2PutItemOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbv2PutItemOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbv2PutItemOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbv2PutItemOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbv2PutItemOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbv2PutItemOutputReference.property.tableNameInput">tableNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbv2PutItemOutputReference.property.tableName">tableName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbv2PutItemOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbv2PutItem">IotTopicRuleDynamodbv2PutItem</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbv2PutItemOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbv2PutItemOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `tableNameInput`<sup>Optional</sup> <a name="tableNameInput" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbv2PutItemOutputReference.property.tableNameInput"></a>

```typescript
public readonly tableNameInput: string;
```

- *Type:* string

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbv2PutItemOutputReference.property.tableName"></a>

```typescript
public readonly tableName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbv2PutItemOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IotTopicRuleDynamodbv2PutItem;
```

- *Type:* <a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleDynamodbv2PutItem">IotTopicRuleDynamodbv2PutItem</a>

---


### IotTopicRuleElasticsearchList <a name="IotTopicRuleElasticsearchList" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleElasticsearchList"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleElasticsearchList.Initializer"></a>

```typescript
import { iotTopicRule } from '@cdktf/aws-cdk'

new iotTopicRule.IotTopicRuleElasticsearchList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleElasticsearchList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleElasticsearchList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleElasticsearchList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleElasticsearchList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleElasticsearchList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleElasticsearchList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleElasticsearchList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleElasticsearchList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleElasticsearchList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleElasticsearchList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleElasticsearchList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleElasticsearchList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleElasticsearchList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleElasticsearchList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleElasticsearchList.get"></a>

```typescript
public get(index: number): IotTopicRuleElasticsearchOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleElasticsearchList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleElasticsearchList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleElasticsearchList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleElasticsearchList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleElasticsearch">IotTopicRuleElasticsearch</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleElasticsearchList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleElasticsearchList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleElasticsearchList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotTopicRuleElasticsearch[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleElasticsearch">IotTopicRuleElasticsearch</a>[]

---


### IotTopicRuleElasticsearchOutputReference <a name="IotTopicRuleElasticsearchOutputReference" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleElasticsearchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleElasticsearchOutputReference.Initializer"></a>

```typescript
import { iotTopicRule } from '@cdktf/aws-cdk'

new iotTopicRule.IotTopicRuleElasticsearchOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleElasticsearchOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleElasticsearchOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleElasticsearchOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleElasticsearchOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleElasticsearchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleElasticsearchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleElasticsearchOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleElasticsearchOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleElasticsearchOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleElasticsearchOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleElasticsearchOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleElasticsearchOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleElasticsearchOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleElasticsearchOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleElasticsearchOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleElasticsearchOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleElasticsearchOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleElasticsearchOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleElasticsearchOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleElasticsearchOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleElasticsearchOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleElasticsearchOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleElasticsearchOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleElasticsearchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleElasticsearchOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleElasticsearchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleElasticsearchOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleElasticsearchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleElasticsearchOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleElasticsearchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleElasticsearchOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleElasticsearchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleElasticsearchOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleElasticsearchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleElasticsearchOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleElasticsearchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleElasticsearchOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleElasticsearchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleElasticsearchOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleElasticsearchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleElasticsearchOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleElasticsearchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleElasticsearchOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleElasticsearchOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleElasticsearchOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleElasticsearchOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleElasticsearchOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleElasticsearchOutputReference.property.endpointInput">endpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleElasticsearchOutputReference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleElasticsearchOutputReference.property.indexInput">indexInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleElasticsearchOutputReference.property.roleArnInput">roleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleElasticsearchOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleElasticsearchOutputReference.property.endpoint">endpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleElasticsearchOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleElasticsearchOutputReference.property.index">index</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleElasticsearchOutputReference.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleElasticsearchOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleElasticsearchOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleElasticsearch">IotTopicRuleElasticsearch</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleElasticsearchOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleElasticsearchOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `endpointInput`<sup>Optional</sup> <a name="endpointInput" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleElasticsearchOutputReference.property.endpointInput"></a>

```typescript
public readonly endpointInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleElasticsearchOutputReference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `indexInput`<sup>Optional</sup> <a name="indexInput" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleElasticsearchOutputReference.property.indexInput"></a>

```typescript
public readonly indexInput: string;
```

- *Type:* string

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleElasticsearchOutputReference.property.roleArnInput"></a>

```typescript
public readonly roleArnInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleElasticsearchOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleElasticsearchOutputReference.property.endpoint"></a>

```typescript
public readonly endpoint: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleElasticsearchOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `index`<sup>Required</sup> <a name="index" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleElasticsearchOutputReference.property.index"></a>

```typescript
public readonly index: string;
```

- *Type:* string

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleElasticsearchOutputReference.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleElasticsearchOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleElasticsearchOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IotTopicRuleElasticsearch | IResolvable;
```

- *Type:* <a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleElasticsearch">IotTopicRuleElasticsearch</a> | cdktf.IResolvable

---


### IotTopicRuleErrorActionCloudwatchAlarmOutputReference <a name="IotTopicRuleErrorActionCloudwatchAlarmOutputReference" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionCloudwatchAlarmOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionCloudwatchAlarmOutputReference.Initializer"></a>

```typescript
import { iotTopicRule } from '@cdktf/aws-cdk'

new iotTopicRule.IotTopicRuleErrorActionCloudwatchAlarmOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionCloudwatchAlarmOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionCloudwatchAlarmOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionCloudwatchAlarmOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionCloudwatchAlarmOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionCloudwatchAlarmOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionCloudwatchAlarmOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionCloudwatchAlarmOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionCloudwatchAlarmOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionCloudwatchAlarmOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionCloudwatchAlarmOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionCloudwatchAlarmOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionCloudwatchAlarmOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionCloudwatchAlarmOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionCloudwatchAlarmOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionCloudwatchAlarmOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionCloudwatchAlarmOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionCloudwatchAlarmOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionCloudwatchAlarmOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionCloudwatchAlarmOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionCloudwatchAlarmOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionCloudwatchAlarmOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionCloudwatchAlarmOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionCloudwatchAlarmOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionCloudwatchAlarmOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionCloudwatchAlarmOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionCloudwatchAlarmOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionCloudwatchAlarmOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionCloudwatchAlarmOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionCloudwatchAlarmOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionCloudwatchAlarmOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionCloudwatchAlarmOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionCloudwatchAlarmOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionCloudwatchAlarmOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionCloudwatchAlarmOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionCloudwatchAlarmOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionCloudwatchAlarmOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionCloudwatchAlarmOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionCloudwatchAlarmOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionCloudwatchAlarmOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionCloudwatchAlarmOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionCloudwatchAlarmOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionCloudwatchAlarmOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionCloudwatchAlarmOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionCloudwatchAlarmOutputReference.property.alarmNameInput">alarmNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionCloudwatchAlarmOutputReference.property.roleArnInput">roleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionCloudwatchAlarmOutputReference.property.stateReasonInput">stateReasonInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionCloudwatchAlarmOutputReference.property.stateValueInput">stateValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionCloudwatchAlarmOutputReference.property.alarmName">alarmName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionCloudwatchAlarmOutputReference.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionCloudwatchAlarmOutputReference.property.stateReason">stateReason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionCloudwatchAlarmOutputReference.property.stateValue">stateValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionCloudwatchAlarmOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionCloudwatchAlarm">IotTopicRuleErrorActionCloudwatchAlarm</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionCloudwatchAlarmOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionCloudwatchAlarmOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `alarmNameInput`<sup>Optional</sup> <a name="alarmNameInput" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionCloudwatchAlarmOutputReference.property.alarmNameInput"></a>

```typescript
public readonly alarmNameInput: string;
```

- *Type:* string

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionCloudwatchAlarmOutputReference.property.roleArnInput"></a>

```typescript
public readonly roleArnInput: string;
```

- *Type:* string

---

##### `stateReasonInput`<sup>Optional</sup> <a name="stateReasonInput" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionCloudwatchAlarmOutputReference.property.stateReasonInput"></a>

```typescript
public readonly stateReasonInput: string;
```

- *Type:* string

---

##### `stateValueInput`<sup>Optional</sup> <a name="stateValueInput" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionCloudwatchAlarmOutputReference.property.stateValueInput"></a>

```typescript
public readonly stateValueInput: string;
```

- *Type:* string

---

##### `alarmName`<sup>Required</sup> <a name="alarmName" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionCloudwatchAlarmOutputReference.property.alarmName"></a>

```typescript
public readonly alarmName: string;
```

- *Type:* string

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionCloudwatchAlarmOutputReference.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `stateReason`<sup>Required</sup> <a name="stateReason" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionCloudwatchAlarmOutputReference.property.stateReason"></a>

```typescript
public readonly stateReason: string;
```

- *Type:* string

---

##### `stateValue`<sup>Required</sup> <a name="stateValue" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionCloudwatchAlarmOutputReference.property.stateValue"></a>

```typescript
public readonly stateValue: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionCloudwatchAlarmOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IotTopicRuleErrorActionCloudwatchAlarm;
```

- *Type:* <a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionCloudwatchAlarm">IotTopicRuleErrorActionCloudwatchAlarm</a>

---


### IotTopicRuleErrorActionCloudwatchMetricOutputReference <a name="IotTopicRuleErrorActionCloudwatchMetricOutputReference" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionCloudwatchMetricOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionCloudwatchMetricOutputReference.Initializer"></a>

```typescript
import { iotTopicRule } from '@cdktf/aws-cdk'

new iotTopicRule.IotTopicRuleErrorActionCloudwatchMetricOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionCloudwatchMetricOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionCloudwatchMetricOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionCloudwatchMetricOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionCloudwatchMetricOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionCloudwatchMetricOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionCloudwatchMetricOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionCloudwatchMetricOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionCloudwatchMetricOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionCloudwatchMetricOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionCloudwatchMetricOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionCloudwatchMetricOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionCloudwatchMetricOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionCloudwatchMetricOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionCloudwatchMetricOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionCloudwatchMetricOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionCloudwatchMetricOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionCloudwatchMetricOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionCloudwatchMetricOutputReference.resetMetricTimestamp">resetMetricTimestamp</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionCloudwatchMetricOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionCloudwatchMetricOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionCloudwatchMetricOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionCloudwatchMetricOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionCloudwatchMetricOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionCloudwatchMetricOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionCloudwatchMetricOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionCloudwatchMetricOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionCloudwatchMetricOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionCloudwatchMetricOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionCloudwatchMetricOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionCloudwatchMetricOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionCloudwatchMetricOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionCloudwatchMetricOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionCloudwatchMetricOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionCloudwatchMetricOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionCloudwatchMetricOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionCloudwatchMetricOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionCloudwatchMetricOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionCloudwatchMetricOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionCloudwatchMetricOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionCloudwatchMetricOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionCloudwatchMetricOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionCloudwatchMetricOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMetricTimestamp` <a name="resetMetricTimestamp" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionCloudwatchMetricOutputReference.resetMetricTimestamp"></a>

```typescript
public resetMetricTimestamp(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionCloudwatchMetricOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionCloudwatchMetricOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionCloudwatchMetricOutputReference.property.metricNameInput">metricNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionCloudwatchMetricOutputReference.property.metricNamespaceInput">metricNamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionCloudwatchMetricOutputReference.property.metricTimestampInput">metricTimestampInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionCloudwatchMetricOutputReference.property.metricUnitInput">metricUnitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionCloudwatchMetricOutputReference.property.metricValueInput">metricValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionCloudwatchMetricOutputReference.property.roleArnInput">roleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionCloudwatchMetricOutputReference.property.metricName">metricName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionCloudwatchMetricOutputReference.property.metricNamespace">metricNamespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionCloudwatchMetricOutputReference.property.metricTimestamp">metricTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionCloudwatchMetricOutputReference.property.metricUnit">metricUnit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionCloudwatchMetricOutputReference.property.metricValue">metricValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionCloudwatchMetricOutputReference.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionCloudwatchMetricOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionCloudwatchMetric">IotTopicRuleErrorActionCloudwatchMetric</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionCloudwatchMetricOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionCloudwatchMetricOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `metricNameInput`<sup>Optional</sup> <a name="metricNameInput" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionCloudwatchMetricOutputReference.property.metricNameInput"></a>

```typescript
public readonly metricNameInput: string;
```

- *Type:* string

---

##### `metricNamespaceInput`<sup>Optional</sup> <a name="metricNamespaceInput" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionCloudwatchMetricOutputReference.property.metricNamespaceInput"></a>

```typescript
public readonly metricNamespaceInput: string;
```

- *Type:* string

---

##### `metricTimestampInput`<sup>Optional</sup> <a name="metricTimestampInput" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionCloudwatchMetricOutputReference.property.metricTimestampInput"></a>

```typescript
public readonly metricTimestampInput: string;
```

- *Type:* string

---

##### `metricUnitInput`<sup>Optional</sup> <a name="metricUnitInput" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionCloudwatchMetricOutputReference.property.metricUnitInput"></a>

```typescript
public readonly metricUnitInput: string;
```

- *Type:* string

---

##### `metricValueInput`<sup>Optional</sup> <a name="metricValueInput" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionCloudwatchMetricOutputReference.property.metricValueInput"></a>

```typescript
public readonly metricValueInput: string;
```

- *Type:* string

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionCloudwatchMetricOutputReference.property.roleArnInput"></a>

```typescript
public readonly roleArnInput: string;
```

- *Type:* string

---

##### `metricName`<sup>Required</sup> <a name="metricName" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionCloudwatchMetricOutputReference.property.metricName"></a>

```typescript
public readonly metricName: string;
```

- *Type:* string

---

##### `metricNamespace`<sup>Required</sup> <a name="metricNamespace" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionCloudwatchMetricOutputReference.property.metricNamespace"></a>

```typescript
public readonly metricNamespace: string;
```

- *Type:* string

---

##### `metricTimestamp`<sup>Required</sup> <a name="metricTimestamp" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionCloudwatchMetricOutputReference.property.metricTimestamp"></a>

```typescript
public readonly metricTimestamp: string;
```

- *Type:* string

---

##### `metricUnit`<sup>Required</sup> <a name="metricUnit" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionCloudwatchMetricOutputReference.property.metricUnit"></a>

```typescript
public readonly metricUnit: string;
```

- *Type:* string

---

##### `metricValue`<sup>Required</sup> <a name="metricValue" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionCloudwatchMetricOutputReference.property.metricValue"></a>

```typescript
public readonly metricValue: string;
```

- *Type:* string

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionCloudwatchMetricOutputReference.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionCloudwatchMetricOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IotTopicRuleErrorActionCloudwatchMetric;
```

- *Type:* <a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionCloudwatchMetric">IotTopicRuleErrorActionCloudwatchMetric</a>

---


### IotTopicRuleErrorActionDynamodbOutputReference <a name="IotTopicRuleErrorActionDynamodbOutputReference" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodbOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodbOutputReference.Initializer"></a>

```typescript
import { iotTopicRule } from '@cdktf/aws-cdk'

new iotTopicRule.IotTopicRuleErrorActionDynamodbOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodbOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodbOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodbOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodbOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodbOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodbOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodbOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodbOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodbOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodbOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodbOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodbOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodbOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodbOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodbOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodbOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodbOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodbOutputReference.resetHashKeyType">resetHashKeyType</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodbOutputReference.resetOperation">resetOperation</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodbOutputReference.resetPayloadField">resetPayloadField</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodbOutputReference.resetRangeKeyField">resetRangeKeyField</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodbOutputReference.resetRangeKeyType">resetRangeKeyType</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodbOutputReference.resetRangeKeyValue">resetRangeKeyValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodbOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodbOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodbOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodbOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodbOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodbOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodbOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodbOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodbOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodbOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodbOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodbOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodbOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodbOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodbOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodbOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodbOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodbOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodbOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodbOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodbOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodbOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodbOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodbOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHashKeyType` <a name="resetHashKeyType" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodbOutputReference.resetHashKeyType"></a>

```typescript
public resetHashKeyType(): void
```

##### `resetOperation` <a name="resetOperation" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodbOutputReference.resetOperation"></a>

```typescript
public resetOperation(): void
```

##### `resetPayloadField` <a name="resetPayloadField" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodbOutputReference.resetPayloadField"></a>

```typescript
public resetPayloadField(): void
```

##### `resetRangeKeyField` <a name="resetRangeKeyField" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodbOutputReference.resetRangeKeyField"></a>

```typescript
public resetRangeKeyField(): void
```

##### `resetRangeKeyType` <a name="resetRangeKeyType" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodbOutputReference.resetRangeKeyType"></a>

```typescript
public resetRangeKeyType(): void
```

##### `resetRangeKeyValue` <a name="resetRangeKeyValue" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodbOutputReference.resetRangeKeyValue"></a>

```typescript
public resetRangeKeyValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodbOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodbOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodbOutputReference.property.hashKeyFieldInput">hashKeyFieldInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodbOutputReference.property.hashKeyTypeInput">hashKeyTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodbOutputReference.property.hashKeyValueInput">hashKeyValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodbOutputReference.property.operationInput">operationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodbOutputReference.property.payloadFieldInput">payloadFieldInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodbOutputReference.property.rangeKeyFieldInput">rangeKeyFieldInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodbOutputReference.property.rangeKeyTypeInput">rangeKeyTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodbOutputReference.property.rangeKeyValueInput">rangeKeyValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodbOutputReference.property.roleArnInput">roleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodbOutputReference.property.tableNameInput">tableNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodbOutputReference.property.hashKeyField">hashKeyField</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodbOutputReference.property.hashKeyType">hashKeyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodbOutputReference.property.hashKeyValue">hashKeyValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodbOutputReference.property.operation">operation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodbOutputReference.property.payloadField">payloadField</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodbOutputReference.property.rangeKeyField">rangeKeyField</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodbOutputReference.property.rangeKeyType">rangeKeyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodbOutputReference.property.rangeKeyValue">rangeKeyValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodbOutputReference.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodbOutputReference.property.tableName">tableName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodbOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodb">IotTopicRuleErrorActionDynamodb</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodbOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodbOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `hashKeyFieldInput`<sup>Optional</sup> <a name="hashKeyFieldInput" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodbOutputReference.property.hashKeyFieldInput"></a>

```typescript
public readonly hashKeyFieldInput: string;
```

- *Type:* string

---

##### `hashKeyTypeInput`<sup>Optional</sup> <a name="hashKeyTypeInput" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodbOutputReference.property.hashKeyTypeInput"></a>

```typescript
public readonly hashKeyTypeInput: string;
```

- *Type:* string

---

##### `hashKeyValueInput`<sup>Optional</sup> <a name="hashKeyValueInput" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodbOutputReference.property.hashKeyValueInput"></a>

```typescript
public readonly hashKeyValueInput: string;
```

- *Type:* string

---

##### `operationInput`<sup>Optional</sup> <a name="operationInput" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodbOutputReference.property.operationInput"></a>

```typescript
public readonly operationInput: string;
```

- *Type:* string

---

##### `payloadFieldInput`<sup>Optional</sup> <a name="payloadFieldInput" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodbOutputReference.property.payloadFieldInput"></a>

```typescript
public readonly payloadFieldInput: string;
```

- *Type:* string

---

##### `rangeKeyFieldInput`<sup>Optional</sup> <a name="rangeKeyFieldInput" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodbOutputReference.property.rangeKeyFieldInput"></a>

```typescript
public readonly rangeKeyFieldInput: string;
```

- *Type:* string

---

##### `rangeKeyTypeInput`<sup>Optional</sup> <a name="rangeKeyTypeInput" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodbOutputReference.property.rangeKeyTypeInput"></a>

```typescript
public readonly rangeKeyTypeInput: string;
```

- *Type:* string

---

##### `rangeKeyValueInput`<sup>Optional</sup> <a name="rangeKeyValueInput" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodbOutputReference.property.rangeKeyValueInput"></a>

```typescript
public readonly rangeKeyValueInput: string;
```

- *Type:* string

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodbOutputReference.property.roleArnInput"></a>

```typescript
public readonly roleArnInput: string;
```

- *Type:* string

---

##### `tableNameInput`<sup>Optional</sup> <a name="tableNameInput" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodbOutputReference.property.tableNameInput"></a>

```typescript
public readonly tableNameInput: string;
```

- *Type:* string

---

##### `hashKeyField`<sup>Required</sup> <a name="hashKeyField" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodbOutputReference.property.hashKeyField"></a>

```typescript
public readonly hashKeyField: string;
```

- *Type:* string

---

##### `hashKeyType`<sup>Required</sup> <a name="hashKeyType" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodbOutputReference.property.hashKeyType"></a>

```typescript
public readonly hashKeyType: string;
```

- *Type:* string

---

##### `hashKeyValue`<sup>Required</sup> <a name="hashKeyValue" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodbOutputReference.property.hashKeyValue"></a>

```typescript
public readonly hashKeyValue: string;
```

- *Type:* string

---

##### `operation`<sup>Required</sup> <a name="operation" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodbOutputReference.property.operation"></a>

```typescript
public readonly operation: string;
```

- *Type:* string

---

##### `payloadField`<sup>Required</sup> <a name="payloadField" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodbOutputReference.property.payloadField"></a>

```typescript
public readonly payloadField: string;
```

- *Type:* string

---

##### `rangeKeyField`<sup>Required</sup> <a name="rangeKeyField" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodbOutputReference.property.rangeKeyField"></a>

```typescript
public readonly rangeKeyField: string;
```

- *Type:* string

---

##### `rangeKeyType`<sup>Required</sup> <a name="rangeKeyType" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodbOutputReference.property.rangeKeyType"></a>

```typescript
public readonly rangeKeyType: string;
```

- *Type:* string

---

##### `rangeKeyValue`<sup>Required</sup> <a name="rangeKeyValue" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodbOutputReference.property.rangeKeyValue"></a>

```typescript
public readonly rangeKeyValue: string;
```

- *Type:* string

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodbOutputReference.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodbOutputReference.property.tableName"></a>

```typescript
public readonly tableName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodbOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IotTopicRuleErrorActionDynamodb;
```

- *Type:* <a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodb">IotTopicRuleErrorActionDynamodb</a>

---


### IotTopicRuleErrorActionDynamodbv2OutputReference <a name="IotTopicRuleErrorActionDynamodbv2OutputReference" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodbv2OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodbv2OutputReference.Initializer"></a>

```typescript
import { iotTopicRule } from '@cdktf/aws-cdk'

new iotTopicRule.IotTopicRuleErrorActionDynamodbv2OutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodbv2OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodbv2OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodbv2OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodbv2OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodbv2OutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodbv2OutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodbv2OutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodbv2OutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodbv2OutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodbv2OutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodbv2OutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodbv2OutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodbv2OutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodbv2OutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodbv2OutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodbv2OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodbv2OutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodbv2OutputReference.putPutItem">putPutItem</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodbv2OutputReference.resetPutItem">resetPutItem</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodbv2OutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodbv2OutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodbv2OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodbv2OutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodbv2OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodbv2OutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodbv2OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodbv2OutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodbv2OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodbv2OutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodbv2OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodbv2OutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodbv2OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodbv2OutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodbv2OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodbv2OutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodbv2OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodbv2OutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodbv2OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodbv2OutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodbv2OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodbv2OutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodbv2OutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodbv2OutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPutItem` <a name="putPutItem" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodbv2OutputReference.putPutItem"></a>

```typescript
public putPutItem(value: IotTopicRuleErrorActionDynamodbv2PutItem): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodbv2OutputReference.putPutItem.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodbv2PutItem">IotTopicRuleErrorActionDynamodbv2PutItem</a>

---

##### `resetPutItem` <a name="resetPutItem" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodbv2OutputReference.resetPutItem"></a>

```typescript
public resetPutItem(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodbv2OutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodbv2OutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodbv2OutputReference.property.putItem">putItem</a></code> | <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodbv2PutItemOutputReference">IotTopicRuleErrorActionDynamodbv2PutItemOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodbv2OutputReference.property.putItemInput">putItemInput</a></code> | <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodbv2PutItem">IotTopicRuleErrorActionDynamodbv2PutItem</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodbv2OutputReference.property.roleArnInput">roleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodbv2OutputReference.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodbv2OutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodbv2">IotTopicRuleErrorActionDynamodbv2</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodbv2OutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodbv2OutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `putItem`<sup>Required</sup> <a name="putItem" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodbv2OutputReference.property.putItem"></a>

```typescript
public readonly putItem: IotTopicRuleErrorActionDynamodbv2PutItemOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodbv2PutItemOutputReference">IotTopicRuleErrorActionDynamodbv2PutItemOutputReference</a>

---

##### `putItemInput`<sup>Optional</sup> <a name="putItemInput" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodbv2OutputReference.property.putItemInput"></a>

```typescript
public readonly putItemInput: IotTopicRuleErrorActionDynamodbv2PutItem;
```

- *Type:* <a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodbv2PutItem">IotTopicRuleErrorActionDynamodbv2PutItem</a>

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodbv2OutputReference.property.roleArnInput"></a>

```typescript
public readonly roleArnInput: string;
```

- *Type:* string

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodbv2OutputReference.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodbv2OutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IotTopicRuleErrorActionDynamodbv2;
```

- *Type:* <a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodbv2">IotTopicRuleErrorActionDynamodbv2</a>

---


### IotTopicRuleErrorActionDynamodbv2PutItemOutputReference <a name="IotTopicRuleErrorActionDynamodbv2PutItemOutputReference" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodbv2PutItemOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodbv2PutItemOutputReference.Initializer"></a>

```typescript
import { iotTopicRule } from '@cdktf/aws-cdk'

new iotTopicRule.IotTopicRuleErrorActionDynamodbv2PutItemOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodbv2PutItemOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodbv2PutItemOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodbv2PutItemOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodbv2PutItemOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodbv2PutItemOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodbv2PutItemOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodbv2PutItemOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodbv2PutItemOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodbv2PutItemOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodbv2PutItemOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodbv2PutItemOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodbv2PutItemOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodbv2PutItemOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodbv2PutItemOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodbv2PutItemOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodbv2PutItemOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodbv2PutItemOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodbv2PutItemOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodbv2PutItemOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodbv2PutItemOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodbv2PutItemOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodbv2PutItemOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodbv2PutItemOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodbv2PutItemOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodbv2PutItemOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodbv2PutItemOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodbv2PutItemOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodbv2PutItemOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodbv2PutItemOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodbv2PutItemOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodbv2PutItemOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodbv2PutItemOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodbv2PutItemOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodbv2PutItemOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodbv2PutItemOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodbv2PutItemOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodbv2PutItemOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodbv2PutItemOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodbv2PutItemOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodbv2PutItemOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodbv2PutItemOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodbv2PutItemOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodbv2PutItemOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodbv2PutItemOutputReference.property.tableNameInput">tableNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodbv2PutItemOutputReference.property.tableName">tableName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodbv2PutItemOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodbv2PutItem">IotTopicRuleErrorActionDynamodbv2PutItem</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodbv2PutItemOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodbv2PutItemOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `tableNameInput`<sup>Optional</sup> <a name="tableNameInput" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodbv2PutItemOutputReference.property.tableNameInput"></a>

```typescript
public readonly tableNameInput: string;
```

- *Type:* string

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodbv2PutItemOutputReference.property.tableName"></a>

```typescript
public readonly tableName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodbv2PutItemOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IotTopicRuleErrorActionDynamodbv2PutItem;
```

- *Type:* <a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodbv2PutItem">IotTopicRuleErrorActionDynamodbv2PutItem</a>

---


### IotTopicRuleErrorActionElasticsearchOutputReference <a name="IotTopicRuleErrorActionElasticsearchOutputReference" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionElasticsearchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionElasticsearchOutputReference.Initializer"></a>

```typescript
import { iotTopicRule } from '@cdktf/aws-cdk'

new iotTopicRule.IotTopicRuleErrorActionElasticsearchOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionElasticsearchOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionElasticsearchOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionElasticsearchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionElasticsearchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionElasticsearchOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionElasticsearchOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionElasticsearchOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionElasticsearchOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionElasticsearchOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionElasticsearchOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionElasticsearchOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionElasticsearchOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionElasticsearchOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionElasticsearchOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionElasticsearchOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionElasticsearchOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionElasticsearchOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionElasticsearchOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionElasticsearchOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionElasticsearchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionElasticsearchOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionElasticsearchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionElasticsearchOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionElasticsearchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionElasticsearchOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionElasticsearchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionElasticsearchOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionElasticsearchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionElasticsearchOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionElasticsearchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionElasticsearchOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionElasticsearchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionElasticsearchOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionElasticsearchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionElasticsearchOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionElasticsearchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionElasticsearchOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionElasticsearchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionElasticsearchOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionElasticsearchOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionElasticsearchOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionElasticsearchOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionElasticsearchOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionElasticsearchOutputReference.property.endpointInput">endpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionElasticsearchOutputReference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionElasticsearchOutputReference.property.indexInput">indexInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionElasticsearchOutputReference.property.roleArnInput">roleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionElasticsearchOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionElasticsearchOutputReference.property.endpoint">endpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionElasticsearchOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionElasticsearchOutputReference.property.index">index</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionElasticsearchOutputReference.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionElasticsearchOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionElasticsearchOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionElasticsearch">IotTopicRuleErrorActionElasticsearch</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionElasticsearchOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionElasticsearchOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `endpointInput`<sup>Optional</sup> <a name="endpointInput" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionElasticsearchOutputReference.property.endpointInput"></a>

```typescript
public readonly endpointInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionElasticsearchOutputReference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `indexInput`<sup>Optional</sup> <a name="indexInput" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionElasticsearchOutputReference.property.indexInput"></a>

```typescript
public readonly indexInput: string;
```

- *Type:* string

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionElasticsearchOutputReference.property.roleArnInput"></a>

```typescript
public readonly roleArnInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionElasticsearchOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionElasticsearchOutputReference.property.endpoint"></a>

```typescript
public readonly endpoint: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionElasticsearchOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `index`<sup>Required</sup> <a name="index" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionElasticsearchOutputReference.property.index"></a>

```typescript
public readonly index: string;
```

- *Type:* string

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionElasticsearchOutputReference.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionElasticsearchOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionElasticsearchOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IotTopicRuleErrorActionElasticsearch;
```

- *Type:* <a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionElasticsearch">IotTopicRuleErrorActionElasticsearch</a>

---


### IotTopicRuleErrorActionFirehoseOutputReference <a name="IotTopicRuleErrorActionFirehoseOutputReference" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionFirehoseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionFirehoseOutputReference.Initializer"></a>

```typescript
import { iotTopicRule } from '@cdktf/aws-cdk'

new iotTopicRule.IotTopicRuleErrorActionFirehoseOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionFirehoseOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionFirehoseOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionFirehoseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionFirehoseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionFirehoseOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionFirehoseOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionFirehoseOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionFirehoseOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionFirehoseOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionFirehoseOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionFirehoseOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionFirehoseOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionFirehoseOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionFirehoseOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionFirehoseOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionFirehoseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionFirehoseOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionFirehoseOutputReference.resetSeparator">resetSeparator</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionFirehoseOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionFirehoseOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionFirehoseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionFirehoseOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionFirehoseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionFirehoseOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionFirehoseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionFirehoseOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionFirehoseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionFirehoseOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionFirehoseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionFirehoseOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionFirehoseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionFirehoseOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionFirehoseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionFirehoseOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionFirehoseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionFirehoseOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionFirehoseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionFirehoseOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionFirehoseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionFirehoseOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionFirehoseOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionFirehoseOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSeparator` <a name="resetSeparator" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionFirehoseOutputReference.resetSeparator"></a>

```typescript
public resetSeparator(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionFirehoseOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionFirehoseOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionFirehoseOutputReference.property.deliveryStreamNameInput">deliveryStreamNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionFirehoseOutputReference.property.roleArnInput">roleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionFirehoseOutputReference.property.separatorInput">separatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionFirehoseOutputReference.property.deliveryStreamName">deliveryStreamName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionFirehoseOutputReference.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionFirehoseOutputReference.property.separator">separator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionFirehoseOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionFirehose">IotTopicRuleErrorActionFirehose</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionFirehoseOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionFirehoseOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `deliveryStreamNameInput`<sup>Optional</sup> <a name="deliveryStreamNameInput" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionFirehoseOutputReference.property.deliveryStreamNameInput"></a>

```typescript
public readonly deliveryStreamNameInput: string;
```

- *Type:* string

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionFirehoseOutputReference.property.roleArnInput"></a>

```typescript
public readonly roleArnInput: string;
```

- *Type:* string

---

##### `separatorInput`<sup>Optional</sup> <a name="separatorInput" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionFirehoseOutputReference.property.separatorInput"></a>

```typescript
public readonly separatorInput: string;
```

- *Type:* string

---

##### `deliveryStreamName`<sup>Required</sup> <a name="deliveryStreamName" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionFirehoseOutputReference.property.deliveryStreamName"></a>

```typescript
public readonly deliveryStreamName: string;
```

- *Type:* string

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionFirehoseOutputReference.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `separator`<sup>Required</sup> <a name="separator" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionFirehoseOutputReference.property.separator"></a>

```typescript
public readonly separator: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionFirehoseOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IotTopicRuleErrorActionFirehose;
```

- *Type:* <a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionFirehose">IotTopicRuleErrorActionFirehose</a>

---


### IotTopicRuleErrorActionIotAnalyticsOutputReference <a name="IotTopicRuleErrorActionIotAnalyticsOutputReference" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionIotAnalyticsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionIotAnalyticsOutputReference.Initializer"></a>

```typescript
import { iotTopicRule } from '@cdktf/aws-cdk'

new iotTopicRule.IotTopicRuleErrorActionIotAnalyticsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionIotAnalyticsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionIotAnalyticsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionIotAnalyticsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionIotAnalyticsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionIotAnalyticsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionIotAnalyticsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionIotAnalyticsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionIotAnalyticsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionIotAnalyticsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionIotAnalyticsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionIotAnalyticsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionIotAnalyticsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionIotAnalyticsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionIotAnalyticsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionIotAnalyticsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionIotAnalyticsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionIotAnalyticsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionIotAnalyticsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionIotAnalyticsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionIotAnalyticsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionIotAnalyticsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionIotAnalyticsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionIotAnalyticsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionIotAnalyticsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionIotAnalyticsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionIotAnalyticsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionIotAnalyticsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionIotAnalyticsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionIotAnalyticsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionIotAnalyticsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionIotAnalyticsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionIotAnalyticsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionIotAnalyticsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionIotAnalyticsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionIotAnalyticsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionIotAnalyticsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionIotAnalyticsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionIotAnalyticsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionIotAnalyticsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionIotAnalyticsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionIotAnalyticsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionIotAnalyticsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionIotAnalyticsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionIotAnalyticsOutputReference.property.channelNameInput">channelNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionIotAnalyticsOutputReference.property.roleArnInput">roleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionIotAnalyticsOutputReference.property.channelName">channelName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionIotAnalyticsOutputReference.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionIotAnalyticsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionIotAnalytics">IotTopicRuleErrorActionIotAnalytics</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionIotAnalyticsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionIotAnalyticsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `channelNameInput`<sup>Optional</sup> <a name="channelNameInput" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionIotAnalyticsOutputReference.property.channelNameInput"></a>

```typescript
public readonly channelNameInput: string;
```

- *Type:* string

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionIotAnalyticsOutputReference.property.roleArnInput"></a>

```typescript
public readonly roleArnInput: string;
```

- *Type:* string

---

##### `channelName`<sup>Required</sup> <a name="channelName" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionIotAnalyticsOutputReference.property.channelName"></a>

```typescript
public readonly channelName: string;
```

- *Type:* string

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionIotAnalyticsOutputReference.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionIotAnalyticsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IotTopicRuleErrorActionIotAnalytics;
```

- *Type:* <a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionIotAnalytics">IotTopicRuleErrorActionIotAnalytics</a>

---


### IotTopicRuleErrorActionIotEventsOutputReference <a name="IotTopicRuleErrorActionIotEventsOutputReference" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionIotEventsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionIotEventsOutputReference.Initializer"></a>

```typescript
import { iotTopicRule } from '@cdktf/aws-cdk'

new iotTopicRule.IotTopicRuleErrorActionIotEventsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionIotEventsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionIotEventsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionIotEventsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionIotEventsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionIotEventsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionIotEventsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionIotEventsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionIotEventsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionIotEventsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionIotEventsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionIotEventsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionIotEventsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionIotEventsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionIotEventsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionIotEventsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionIotEventsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionIotEventsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionIotEventsOutputReference.resetMessageId">resetMessageId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionIotEventsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionIotEventsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionIotEventsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionIotEventsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionIotEventsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionIotEventsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionIotEventsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionIotEventsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionIotEventsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionIotEventsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionIotEventsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionIotEventsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionIotEventsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionIotEventsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionIotEventsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionIotEventsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionIotEventsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionIotEventsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionIotEventsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionIotEventsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionIotEventsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionIotEventsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionIotEventsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionIotEventsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMessageId` <a name="resetMessageId" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionIotEventsOutputReference.resetMessageId"></a>

```typescript
public resetMessageId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionIotEventsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionIotEventsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionIotEventsOutputReference.property.inputNameInput">inputNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionIotEventsOutputReference.property.messageIdInput">messageIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionIotEventsOutputReference.property.roleArnInput">roleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionIotEventsOutputReference.property.inputName">inputName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionIotEventsOutputReference.property.messageId">messageId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionIotEventsOutputReference.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionIotEventsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionIotEvents">IotTopicRuleErrorActionIotEvents</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionIotEventsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionIotEventsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `inputNameInput`<sup>Optional</sup> <a name="inputNameInput" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionIotEventsOutputReference.property.inputNameInput"></a>

```typescript
public readonly inputNameInput: string;
```

- *Type:* string

---

##### `messageIdInput`<sup>Optional</sup> <a name="messageIdInput" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionIotEventsOutputReference.property.messageIdInput"></a>

```typescript
public readonly messageIdInput: string;
```

- *Type:* string

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionIotEventsOutputReference.property.roleArnInput"></a>

```typescript
public readonly roleArnInput: string;
```

- *Type:* string

---

##### `inputName`<sup>Required</sup> <a name="inputName" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionIotEventsOutputReference.property.inputName"></a>

```typescript
public readonly inputName: string;
```

- *Type:* string

---

##### `messageId`<sup>Required</sup> <a name="messageId" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionIotEventsOutputReference.property.messageId"></a>

```typescript
public readonly messageId: string;
```

- *Type:* string

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionIotEventsOutputReference.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionIotEventsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IotTopicRuleErrorActionIotEvents;
```

- *Type:* <a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionIotEvents">IotTopicRuleErrorActionIotEvents</a>

---


### IotTopicRuleErrorActionKinesisOutputReference <a name="IotTopicRuleErrorActionKinesisOutputReference" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionKinesisOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionKinesisOutputReference.Initializer"></a>

```typescript
import { iotTopicRule } from '@cdktf/aws-cdk'

new iotTopicRule.IotTopicRuleErrorActionKinesisOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionKinesisOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionKinesisOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionKinesisOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionKinesisOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionKinesisOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionKinesisOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionKinesisOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionKinesisOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionKinesisOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionKinesisOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionKinesisOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionKinesisOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionKinesisOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionKinesisOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionKinesisOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionKinesisOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionKinesisOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionKinesisOutputReference.resetPartitionKey">resetPartitionKey</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionKinesisOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionKinesisOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionKinesisOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionKinesisOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionKinesisOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionKinesisOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionKinesisOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionKinesisOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionKinesisOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionKinesisOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionKinesisOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionKinesisOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionKinesisOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionKinesisOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionKinesisOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionKinesisOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionKinesisOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionKinesisOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionKinesisOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionKinesisOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionKinesisOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionKinesisOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionKinesisOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionKinesisOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPartitionKey` <a name="resetPartitionKey" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionKinesisOutputReference.resetPartitionKey"></a>

```typescript
public resetPartitionKey(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionKinesisOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionKinesisOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionKinesisOutputReference.property.partitionKeyInput">partitionKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionKinesisOutputReference.property.roleArnInput">roleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionKinesisOutputReference.property.streamNameInput">streamNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionKinesisOutputReference.property.partitionKey">partitionKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionKinesisOutputReference.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionKinesisOutputReference.property.streamName">streamName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionKinesisOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionKinesis">IotTopicRuleErrorActionKinesis</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionKinesisOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionKinesisOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `partitionKeyInput`<sup>Optional</sup> <a name="partitionKeyInput" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionKinesisOutputReference.property.partitionKeyInput"></a>

```typescript
public readonly partitionKeyInput: string;
```

- *Type:* string

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionKinesisOutputReference.property.roleArnInput"></a>

```typescript
public readonly roleArnInput: string;
```

- *Type:* string

---

##### `streamNameInput`<sup>Optional</sup> <a name="streamNameInput" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionKinesisOutputReference.property.streamNameInput"></a>

```typescript
public readonly streamNameInput: string;
```

- *Type:* string

---

##### `partitionKey`<sup>Required</sup> <a name="partitionKey" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionKinesisOutputReference.property.partitionKey"></a>

```typescript
public readonly partitionKey: string;
```

- *Type:* string

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionKinesisOutputReference.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `streamName`<sup>Required</sup> <a name="streamName" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionKinesisOutputReference.property.streamName"></a>

```typescript
public readonly streamName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionKinesisOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IotTopicRuleErrorActionKinesis;
```

- *Type:* <a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionKinesis">IotTopicRuleErrorActionKinesis</a>

---


### IotTopicRuleErrorActionLambdaOutputReference <a name="IotTopicRuleErrorActionLambdaOutputReference" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionLambdaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionLambdaOutputReference.Initializer"></a>

```typescript
import { iotTopicRule } from '@cdktf/aws-cdk'

new iotTopicRule.IotTopicRuleErrorActionLambdaOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionLambdaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionLambdaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionLambdaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionLambdaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionLambdaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionLambdaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionLambdaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionLambdaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionLambdaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionLambdaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionLambdaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionLambdaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionLambdaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionLambdaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionLambdaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionLambdaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionLambdaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionLambdaOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionLambdaOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionLambdaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionLambdaOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionLambdaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionLambdaOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionLambdaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionLambdaOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionLambdaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionLambdaOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionLambdaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionLambdaOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionLambdaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionLambdaOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionLambdaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionLambdaOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionLambdaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionLambdaOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionLambdaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionLambdaOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionLambdaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionLambdaOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionLambdaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionLambdaOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionLambdaOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionLambdaOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionLambdaOutputReference.property.functionArnInput">functionArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionLambdaOutputReference.property.functionArn">functionArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionLambdaOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionLambda">IotTopicRuleErrorActionLambda</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionLambdaOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionLambdaOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `functionArnInput`<sup>Optional</sup> <a name="functionArnInput" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionLambdaOutputReference.property.functionArnInput"></a>

```typescript
public readonly functionArnInput: string;
```

- *Type:* string

---

##### `functionArn`<sup>Required</sup> <a name="functionArn" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionLambdaOutputReference.property.functionArn"></a>

```typescript
public readonly functionArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionLambdaOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IotTopicRuleErrorActionLambda;
```

- *Type:* <a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionLambda">IotTopicRuleErrorActionLambda</a>

---


### IotTopicRuleErrorActionOutputReference <a name="IotTopicRuleErrorActionOutputReference" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionOutputReference.Initializer"></a>

```typescript
import { iotTopicRule } from '@cdktf/aws-cdk'

new iotTopicRule.IotTopicRuleErrorActionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionOutputReference.putCloudwatchAlarm">putCloudwatchAlarm</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionOutputReference.putCloudwatchMetric">putCloudwatchMetric</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionOutputReference.putDynamodb">putDynamodb</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionOutputReference.putDynamodbv2">putDynamodbv2</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionOutputReference.putElasticsearch">putElasticsearch</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionOutputReference.putFirehose">putFirehose</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionOutputReference.putIotAnalytics">putIotAnalytics</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionOutputReference.putIotEvents">putIotEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionOutputReference.putKinesis">putKinesis</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionOutputReference.putLambda">putLambda</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionOutputReference.putRepublish">putRepublish</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionOutputReference.putS3">putS3</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionOutputReference.putSns">putSns</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionOutputReference.putSqs">putSqs</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionOutputReference.putStepFunctions">putStepFunctions</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionOutputReference.resetCloudwatchAlarm">resetCloudwatchAlarm</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionOutputReference.resetCloudwatchMetric">resetCloudwatchMetric</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionOutputReference.resetDynamodb">resetDynamodb</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionOutputReference.resetDynamodbv2">resetDynamodbv2</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionOutputReference.resetElasticsearch">resetElasticsearch</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionOutputReference.resetFirehose">resetFirehose</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionOutputReference.resetIotAnalytics">resetIotAnalytics</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionOutputReference.resetIotEvents">resetIotEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionOutputReference.resetKinesis">resetKinesis</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionOutputReference.resetLambda">resetLambda</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionOutputReference.resetRepublish">resetRepublish</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionOutputReference.resetS3">resetS3</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionOutputReference.resetSns">resetSns</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionOutputReference.resetSqs">resetSqs</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionOutputReference.resetStepFunctions">resetStepFunctions</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCloudwatchAlarm` <a name="putCloudwatchAlarm" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionOutputReference.putCloudwatchAlarm"></a>

```typescript
public putCloudwatchAlarm(value: IotTopicRuleErrorActionCloudwatchAlarm): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionOutputReference.putCloudwatchAlarm.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionCloudwatchAlarm">IotTopicRuleErrorActionCloudwatchAlarm</a>

---

##### `putCloudwatchMetric` <a name="putCloudwatchMetric" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionOutputReference.putCloudwatchMetric"></a>

```typescript
public putCloudwatchMetric(value: IotTopicRuleErrorActionCloudwatchMetric): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionOutputReference.putCloudwatchMetric.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionCloudwatchMetric">IotTopicRuleErrorActionCloudwatchMetric</a>

---

##### `putDynamodb` <a name="putDynamodb" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionOutputReference.putDynamodb"></a>

```typescript
public putDynamodb(value: IotTopicRuleErrorActionDynamodb): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionOutputReference.putDynamodb.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodb">IotTopicRuleErrorActionDynamodb</a>

---

##### `putDynamodbv2` <a name="putDynamodbv2" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionOutputReference.putDynamodbv2"></a>

```typescript
public putDynamodbv2(value: IotTopicRuleErrorActionDynamodbv2): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionOutputReference.putDynamodbv2.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodbv2">IotTopicRuleErrorActionDynamodbv2</a>

---

##### `putElasticsearch` <a name="putElasticsearch" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionOutputReference.putElasticsearch"></a>

```typescript
public putElasticsearch(value: IotTopicRuleErrorActionElasticsearch): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionOutputReference.putElasticsearch.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionElasticsearch">IotTopicRuleErrorActionElasticsearch</a>

---

##### `putFirehose` <a name="putFirehose" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionOutputReference.putFirehose"></a>

```typescript
public putFirehose(value: IotTopicRuleErrorActionFirehose): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionOutputReference.putFirehose.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionFirehose">IotTopicRuleErrorActionFirehose</a>

---

##### `putIotAnalytics` <a name="putIotAnalytics" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionOutputReference.putIotAnalytics"></a>

```typescript
public putIotAnalytics(value: IotTopicRuleErrorActionIotAnalytics): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionOutputReference.putIotAnalytics.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionIotAnalytics">IotTopicRuleErrorActionIotAnalytics</a>

---

##### `putIotEvents` <a name="putIotEvents" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionOutputReference.putIotEvents"></a>

```typescript
public putIotEvents(value: IotTopicRuleErrorActionIotEvents): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionOutputReference.putIotEvents.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionIotEvents">IotTopicRuleErrorActionIotEvents</a>

---

##### `putKinesis` <a name="putKinesis" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionOutputReference.putKinesis"></a>

```typescript
public putKinesis(value: IotTopicRuleErrorActionKinesis): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionOutputReference.putKinesis.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionKinesis">IotTopicRuleErrorActionKinesis</a>

---

##### `putLambda` <a name="putLambda" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionOutputReference.putLambda"></a>

```typescript
public putLambda(value: IotTopicRuleErrorActionLambda): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionOutputReference.putLambda.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionLambda">IotTopicRuleErrorActionLambda</a>

---

##### `putRepublish` <a name="putRepublish" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionOutputReference.putRepublish"></a>

```typescript
public putRepublish(value: IotTopicRuleErrorActionRepublish): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionOutputReference.putRepublish.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionRepublish">IotTopicRuleErrorActionRepublish</a>

---

##### `putS3` <a name="putS3" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionOutputReference.putS3"></a>

```typescript
public putS3(value: IotTopicRuleErrorActionS3): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionOutputReference.putS3.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionS3">IotTopicRuleErrorActionS3</a>

---

##### `putSns` <a name="putSns" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionOutputReference.putSns"></a>

```typescript
public putSns(value: IotTopicRuleErrorActionSns): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionOutputReference.putSns.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionSns">IotTopicRuleErrorActionSns</a>

---

##### `putSqs` <a name="putSqs" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionOutputReference.putSqs"></a>

```typescript
public putSqs(value: IotTopicRuleErrorActionSqs): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionOutputReference.putSqs.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionSqs">IotTopicRuleErrorActionSqs</a>

---

##### `putStepFunctions` <a name="putStepFunctions" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionOutputReference.putStepFunctions"></a>

```typescript
public putStepFunctions(value: IotTopicRuleErrorActionStepFunctions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionOutputReference.putStepFunctions.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionStepFunctions">IotTopicRuleErrorActionStepFunctions</a>

---

##### `resetCloudwatchAlarm` <a name="resetCloudwatchAlarm" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionOutputReference.resetCloudwatchAlarm"></a>

```typescript
public resetCloudwatchAlarm(): void
```

##### `resetCloudwatchMetric` <a name="resetCloudwatchMetric" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionOutputReference.resetCloudwatchMetric"></a>

```typescript
public resetCloudwatchMetric(): void
```

##### `resetDynamodb` <a name="resetDynamodb" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionOutputReference.resetDynamodb"></a>

```typescript
public resetDynamodb(): void
```

##### `resetDynamodbv2` <a name="resetDynamodbv2" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionOutputReference.resetDynamodbv2"></a>

```typescript
public resetDynamodbv2(): void
```

##### `resetElasticsearch` <a name="resetElasticsearch" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionOutputReference.resetElasticsearch"></a>

```typescript
public resetElasticsearch(): void
```

##### `resetFirehose` <a name="resetFirehose" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionOutputReference.resetFirehose"></a>

```typescript
public resetFirehose(): void
```

##### `resetIotAnalytics` <a name="resetIotAnalytics" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionOutputReference.resetIotAnalytics"></a>

```typescript
public resetIotAnalytics(): void
```

##### `resetIotEvents` <a name="resetIotEvents" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionOutputReference.resetIotEvents"></a>

```typescript
public resetIotEvents(): void
```

##### `resetKinesis` <a name="resetKinesis" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionOutputReference.resetKinesis"></a>

```typescript
public resetKinesis(): void
```

##### `resetLambda` <a name="resetLambda" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionOutputReference.resetLambda"></a>

```typescript
public resetLambda(): void
```

##### `resetRepublish` <a name="resetRepublish" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionOutputReference.resetRepublish"></a>

```typescript
public resetRepublish(): void
```

##### `resetS3` <a name="resetS3" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionOutputReference.resetS3"></a>

```typescript
public resetS3(): void
```

##### `resetSns` <a name="resetSns" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionOutputReference.resetSns"></a>

```typescript
public resetSns(): void
```

##### `resetSqs` <a name="resetSqs" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionOutputReference.resetSqs"></a>

```typescript
public resetSqs(): void
```

##### `resetStepFunctions` <a name="resetStepFunctions" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionOutputReference.resetStepFunctions"></a>

```typescript
public resetStepFunctions(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionOutputReference.property.cloudwatchAlarm">cloudwatchAlarm</a></code> | <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionCloudwatchAlarmOutputReference">IotTopicRuleErrorActionCloudwatchAlarmOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionOutputReference.property.cloudwatchMetric">cloudwatchMetric</a></code> | <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionCloudwatchMetricOutputReference">IotTopicRuleErrorActionCloudwatchMetricOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionOutputReference.property.dynamodb">dynamodb</a></code> | <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodbOutputReference">IotTopicRuleErrorActionDynamodbOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionOutputReference.property.dynamodbv2">dynamodbv2</a></code> | <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodbv2OutputReference">IotTopicRuleErrorActionDynamodbv2OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionOutputReference.property.elasticsearch">elasticsearch</a></code> | <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionElasticsearchOutputReference">IotTopicRuleErrorActionElasticsearchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionOutputReference.property.firehose">firehose</a></code> | <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionFirehoseOutputReference">IotTopicRuleErrorActionFirehoseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionOutputReference.property.iotAnalytics">iotAnalytics</a></code> | <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionIotAnalyticsOutputReference">IotTopicRuleErrorActionIotAnalyticsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionOutputReference.property.iotEvents">iotEvents</a></code> | <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionIotEventsOutputReference">IotTopicRuleErrorActionIotEventsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionOutputReference.property.kinesis">kinesis</a></code> | <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionKinesisOutputReference">IotTopicRuleErrorActionKinesisOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionOutputReference.property.lambda">lambda</a></code> | <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionLambdaOutputReference">IotTopicRuleErrorActionLambdaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionOutputReference.property.republish">republish</a></code> | <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionRepublishOutputReference">IotTopicRuleErrorActionRepublishOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionOutputReference.property.s3">s3</a></code> | <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionS3OutputReference">IotTopicRuleErrorActionS3OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionOutputReference.property.sns">sns</a></code> | <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionSnsOutputReference">IotTopicRuleErrorActionSnsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionOutputReference.property.sqs">sqs</a></code> | <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionSqsOutputReference">IotTopicRuleErrorActionSqsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionOutputReference.property.stepFunctions">stepFunctions</a></code> | <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionStepFunctionsOutputReference">IotTopicRuleErrorActionStepFunctionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionOutputReference.property.cloudwatchAlarmInput">cloudwatchAlarmInput</a></code> | <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionCloudwatchAlarm">IotTopicRuleErrorActionCloudwatchAlarm</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionOutputReference.property.cloudwatchMetricInput">cloudwatchMetricInput</a></code> | <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionCloudwatchMetric">IotTopicRuleErrorActionCloudwatchMetric</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionOutputReference.property.dynamodbInput">dynamodbInput</a></code> | <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodb">IotTopicRuleErrorActionDynamodb</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionOutputReference.property.dynamodbv2Input">dynamodbv2Input</a></code> | <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodbv2">IotTopicRuleErrorActionDynamodbv2</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionOutputReference.property.elasticsearchInput">elasticsearchInput</a></code> | <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionElasticsearch">IotTopicRuleErrorActionElasticsearch</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionOutputReference.property.firehoseInput">firehoseInput</a></code> | <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionFirehose">IotTopicRuleErrorActionFirehose</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionOutputReference.property.iotAnalyticsInput">iotAnalyticsInput</a></code> | <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionIotAnalytics">IotTopicRuleErrorActionIotAnalytics</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionOutputReference.property.iotEventsInput">iotEventsInput</a></code> | <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionIotEvents">IotTopicRuleErrorActionIotEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionOutputReference.property.kinesisInput">kinesisInput</a></code> | <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionKinesis">IotTopicRuleErrorActionKinesis</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionOutputReference.property.lambdaInput">lambdaInput</a></code> | <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionLambda">IotTopicRuleErrorActionLambda</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionOutputReference.property.republishInput">republishInput</a></code> | <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionRepublish">IotTopicRuleErrorActionRepublish</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionOutputReference.property.s3Input">s3Input</a></code> | <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionS3">IotTopicRuleErrorActionS3</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionOutputReference.property.snsInput">snsInput</a></code> | <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionSns">IotTopicRuleErrorActionSns</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionOutputReference.property.sqsInput">sqsInput</a></code> | <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionSqs">IotTopicRuleErrorActionSqs</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionOutputReference.property.stepFunctionsInput">stepFunctionsInput</a></code> | <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionStepFunctions">IotTopicRuleErrorActionStepFunctions</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorAction">IotTopicRuleErrorAction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cloudwatchAlarm`<sup>Required</sup> <a name="cloudwatchAlarm" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionOutputReference.property.cloudwatchAlarm"></a>

```typescript
public readonly cloudwatchAlarm: IotTopicRuleErrorActionCloudwatchAlarmOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionCloudwatchAlarmOutputReference">IotTopicRuleErrorActionCloudwatchAlarmOutputReference</a>

---

##### `cloudwatchMetric`<sup>Required</sup> <a name="cloudwatchMetric" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionOutputReference.property.cloudwatchMetric"></a>

```typescript
public readonly cloudwatchMetric: IotTopicRuleErrorActionCloudwatchMetricOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionCloudwatchMetricOutputReference">IotTopicRuleErrorActionCloudwatchMetricOutputReference</a>

---

##### `dynamodb`<sup>Required</sup> <a name="dynamodb" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionOutputReference.property.dynamodb"></a>

```typescript
public readonly dynamodb: IotTopicRuleErrorActionDynamodbOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodbOutputReference">IotTopicRuleErrorActionDynamodbOutputReference</a>

---

##### `dynamodbv2`<sup>Required</sup> <a name="dynamodbv2" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionOutputReference.property.dynamodbv2"></a>

```typescript
public readonly dynamodbv2: IotTopicRuleErrorActionDynamodbv2OutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodbv2OutputReference">IotTopicRuleErrorActionDynamodbv2OutputReference</a>

---

##### `elasticsearch`<sup>Required</sup> <a name="elasticsearch" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionOutputReference.property.elasticsearch"></a>

```typescript
public readonly elasticsearch: IotTopicRuleErrorActionElasticsearchOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionElasticsearchOutputReference">IotTopicRuleErrorActionElasticsearchOutputReference</a>

---

##### `firehose`<sup>Required</sup> <a name="firehose" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionOutputReference.property.firehose"></a>

```typescript
public readonly firehose: IotTopicRuleErrorActionFirehoseOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionFirehoseOutputReference">IotTopicRuleErrorActionFirehoseOutputReference</a>

---

##### `iotAnalytics`<sup>Required</sup> <a name="iotAnalytics" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionOutputReference.property.iotAnalytics"></a>

```typescript
public readonly iotAnalytics: IotTopicRuleErrorActionIotAnalyticsOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionIotAnalyticsOutputReference">IotTopicRuleErrorActionIotAnalyticsOutputReference</a>

---

##### `iotEvents`<sup>Required</sup> <a name="iotEvents" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionOutputReference.property.iotEvents"></a>

```typescript
public readonly iotEvents: IotTopicRuleErrorActionIotEventsOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionIotEventsOutputReference">IotTopicRuleErrorActionIotEventsOutputReference</a>

---

##### `kinesis`<sup>Required</sup> <a name="kinesis" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionOutputReference.property.kinesis"></a>

```typescript
public readonly kinesis: IotTopicRuleErrorActionKinesisOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionKinesisOutputReference">IotTopicRuleErrorActionKinesisOutputReference</a>

---

##### `lambda`<sup>Required</sup> <a name="lambda" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionOutputReference.property.lambda"></a>

```typescript
public readonly lambda: IotTopicRuleErrorActionLambdaOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionLambdaOutputReference">IotTopicRuleErrorActionLambdaOutputReference</a>

---

##### `republish`<sup>Required</sup> <a name="republish" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionOutputReference.property.republish"></a>

```typescript
public readonly republish: IotTopicRuleErrorActionRepublishOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionRepublishOutputReference">IotTopicRuleErrorActionRepublishOutputReference</a>

---

##### `s3`<sup>Required</sup> <a name="s3" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionOutputReference.property.s3"></a>

```typescript
public readonly s3: IotTopicRuleErrorActionS3OutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionS3OutputReference">IotTopicRuleErrorActionS3OutputReference</a>

---

##### `sns`<sup>Required</sup> <a name="sns" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionOutputReference.property.sns"></a>

```typescript
public readonly sns: IotTopicRuleErrorActionSnsOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionSnsOutputReference">IotTopicRuleErrorActionSnsOutputReference</a>

---

##### `sqs`<sup>Required</sup> <a name="sqs" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionOutputReference.property.sqs"></a>

```typescript
public readonly sqs: IotTopicRuleErrorActionSqsOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionSqsOutputReference">IotTopicRuleErrorActionSqsOutputReference</a>

---

##### `stepFunctions`<sup>Required</sup> <a name="stepFunctions" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionOutputReference.property.stepFunctions"></a>

```typescript
public readonly stepFunctions: IotTopicRuleErrorActionStepFunctionsOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionStepFunctionsOutputReference">IotTopicRuleErrorActionStepFunctionsOutputReference</a>

---

##### `cloudwatchAlarmInput`<sup>Optional</sup> <a name="cloudwatchAlarmInput" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionOutputReference.property.cloudwatchAlarmInput"></a>

```typescript
public readonly cloudwatchAlarmInput: IotTopicRuleErrorActionCloudwatchAlarm;
```

- *Type:* <a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionCloudwatchAlarm">IotTopicRuleErrorActionCloudwatchAlarm</a>

---

##### `cloudwatchMetricInput`<sup>Optional</sup> <a name="cloudwatchMetricInput" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionOutputReference.property.cloudwatchMetricInput"></a>

```typescript
public readonly cloudwatchMetricInput: IotTopicRuleErrorActionCloudwatchMetric;
```

- *Type:* <a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionCloudwatchMetric">IotTopicRuleErrorActionCloudwatchMetric</a>

---

##### `dynamodbInput`<sup>Optional</sup> <a name="dynamodbInput" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionOutputReference.property.dynamodbInput"></a>

```typescript
public readonly dynamodbInput: IotTopicRuleErrorActionDynamodb;
```

- *Type:* <a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodb">IotTopicRuleErrorActionDynamodb</a>

---

##### `dynamodbv2Input`<sup>Optional</sup> <a name="dynamodbv2Input" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionOutputReference.property.dynamodbv2Input"></a>

```typescript
public readonly dynamodbv2Input: IotTopicRuleErrorActionDynamodbv2;
```

- *Type:* <a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionDynamodbv2">IotTopicRuleErrorActionDynamodbv2</a>

---

##### `elasticsearchInput`<sup>Optional</sup> <a name="elasticsearchInput" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionOutputReference.property.elasticsearchInput"></a>

```typescript
public readonly elasticsearchInput: IotTopicRuleErrorActionElasticsearch;
```

- *Type:* <a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionElasticsearch">IotTopicRuleErrorActionElasticsearch</a>

---

##### `firehoseInput`<sup>Optional</sup> <a name="firehoseInput" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionOutputReference.property.firehoseInput"></a>

```typescript
public readonly firehoseInput: IotTopicRuleErrorActionFirehose;
```

- *Type:* <a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionFirehose">IotTopicRuleErrorActionFirehose</a>

---

##### `iotAnalyticsInput`<sup>Optional</sup> <a name="iotAnalyticsInput" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionOutputReference.property.iotAnalyticsInput"></a>

```typescript
public readonly iotAnalyticsInput: IotTopicRuleErrorActionIotAnalytics;
```

- *Type:* <a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionIotAnalytics">IotTopicRuleErrorActionIotAnalytics</a>

---

##### `iotEventsInput`<sup>Optional</sup> <a name="iotEventsInput" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionOutputReference.property.iotEventsInput"></a>

```typescript
public readonly iotEventsInput: IotTopicRuleErrorActionIotEvents;
```

- *Type:* <a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionIotEvents">IotTopicRuleErrorActionIotEvents</a>

---

##### `kinesisInput`<sup>Optional</sup> <a name="kinesisInput" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionOutputReference.property.kinesisInput"></a>

```typescript
public readonly kinesisInput: IotTopicRuleErrorActionKinesis;
```

- *Type:* <a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionKinesis">IotTopicRuleErrorActionKinesis</a>

---

##### `lambdaInput`<sup>Optional</sup> <a name="lambdaInput" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionOutputReference.property.lambdaInput"></a>

```typescript
public readonly lambdaInput: IotTopicRuleErrorActionLambda;
```

- *Type:* <a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionLambda">IotTopicRuleErrorActionLambda</a>

---

##### `republishInput`<sup>Optional</sup> <a name="republishInput" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionOutputReference.property.republishInput"></a>

```typescript
public readonly republishInput: IotTopicRuleErrorActionRepublish;
```

- *Type:* <a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionRepublish">IotTopicRuleErrorActionRepublish</a>

---

##### `s3Input`<sup>Optional</sup> <a name="s3Input" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionOutputReference.property.s3Input"></a>

```typescript
public readonly s3Input: IotTopicRuleErrorActionS3;
```

- *Type:* <a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionS3">IotTopicRuleErrorActionS3</a>

---

##### `snsInput`<sup>Optional</sup> <a name="snsInput" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionOutputReference.property.snsInput"></a>

```typescript
public readonly snsInput: IotTopicRuleErrorActionSns;
```

- *Type:* <a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionSns">IotTopicRuleErrorActionSns</a>

---

##### `sqsInput`<sup>Optional</sup> <a name="sqsInput" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionOutputReference.property.sqsInput"></a>

```typescript
public readonly sqsInput: IotTopicRuleErrorActionSqs;
```

- *Type:* <a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionSqs">IotTopicRuleErrorActionSqs</a>

---

##### `stepFunctionsInput`<sup>Optional</sup> <a name="stepFunctionsInput" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionOutputReference.property.stepFunctionsInput"></a>

```typescript
public readonly stepFunctionsInput: IotTopicRuleErrorActionStepFunctions;
```

- *Type:* <a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionStepFunctions">IotTopicRuleErrorActionStepFunctions</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IotTopicRuleErrorAction;
```

- *Type:* <a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorAction">IotTopicRuleErrorAction</a>

---


### IotTopicRuleErrorActionRepublishOutputReference <a name="IotTopicRuleErrorActionRepublishOutputReference" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionRepublishOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionRepublishOutputReference.Initializer"></a>

```typescript
import { iotTopicRule } from '@cdktf/aws-cdk'

new iotTopicRule.IotTopicRuleErrorActionRepublishOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionRepublishOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionRepublishOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionRepublishOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionRepublishOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionRepublishOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionRepublishOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionRepublishOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionRepublishOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionRepublishOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionRepublishOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionRepublishOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionRepublishOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionRepublishOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionRepublishOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionRepublishOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionRepublishOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionRepublishOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionRepublishOutputReference.resetQos">resetQos</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionRepublishOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionRepublishOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionRepublishOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionRepublishOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionRepublishOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionRepublishOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionRepublishOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionRepublishOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionRepublishOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionRepublishOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionRepublishOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionRepublishOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionRepublishOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionRepublishOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionRepublishOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionRepublishOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionRepublishOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionRepublishOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionRepublishOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionRepublishOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionRepublishOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionRepublishOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionRepublishOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionRepublishOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetQos` <a name="resetQos" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionRepublishOutputReference.resetQos"></a>

```typescript
public resetQos(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionRepublishOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionRepublishOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionRepublishOutputReference.property.qosInput">qosInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionRepublishOutputReference.property.roleArnInput">roleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionRepublishOutputReference.property.topicInput">topicInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionRepublishOutputReference.property.qos">qos</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionRepublishOutputReference.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionRepublishOutputReference.property.topic">topic</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionRepublishOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionRepublish">IotTopicRuleErrorActionRepublish</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionRepublishOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionRepublishOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `qosInput`<sup>Optional</sup> <a name="qosInput" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionRepublishOutputReference.property.qosInput"></a>

```typescript
public readonly qosInput: number;
```

- *Type:* number

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionRepublishOutputReference.property.roleArnInput"></a>

```typescript
public readonly roleArnInput: string;
```

- *Type:* string

---

##### `topicInput`<sup>Optional</sup> <a name="topicInput" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionRepublishOutputReference.property.topicInput"></a>

```typescript
public readonly topicInput: string;
```

- *Type:* string

---

##### `qos`<sup>Required</sup> <a name="qos" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionRepublishOutputReference.property.qos"></a>

```typescript
public readonly qos: number;
```

- *Type:* number

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionRepublishOutputReference.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `topic`<sup>Required</sup> <a name="topic" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionRepublishOutputReference.property.topic"></a>

```typescript
public readonly topic: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionRepublishOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IotTopicRuleErrorActionRepublish;
```

- *Type:* <a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionRepublish">IotTopicRuleErrorActionRepublish</a>

---


### IotTopicRuleErrorActionS3OutputReference <a name="IotTopicRuleErrorActionS3OutputReference" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionS3OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionS3OutputReference.Initializer"></a>

```typescript
import { iotTopicRule } from '@cdktf/aws-cdk'

new iotTopicRule.IotTopicRuleErrorActionS3OutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionS3OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionS3OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionS3OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionS3OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionS3OutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionS3OutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionS3OutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionS3OutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionS3OutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionS3OutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionS3OutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionS3OutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionS3OutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionS3OutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionS3OutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionS3OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionS3OutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionS3OutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionS3OutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionS3OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionS3OutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionS3OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionS3OutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionS3OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionS3OutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionS3OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionS3OutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionS3OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionS3OutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionS3OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionS3OutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionS3OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionS3OutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionS3OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionS3OutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionS3OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionS3OutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionS3OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionS3OutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionS3OutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionS3OutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionS3OutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionS3OutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionS3OutputReference.property.bucketNameInput">bucketNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionS3OutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionS3OutputReference.property.roleArnInput">roleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionS3OutputReference.property.bucketName">bucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionS3OutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionS3OutputReference.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionS3OutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionS3">IotTopicRuleErrorActionS3</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionS3OutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionS3OutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bucketNameInput`<sup>Optional</sup> <a name="bucketNameInput" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionS3OutputReference.property.bucketNameInput"></a>

```typescript
public readonly bucketNameInput: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionS3OutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionS3OutputReference.property.roleArnInput"></a>

```typescript
public readonly roleArnInput: string;
```

- *Type:* string

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionS3OutputReference.property.bucketName"></a>

```typescript
public readonly bucketName: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionS3OutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionS3OutputReference.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionS3OutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IotTopicRuleErrorActionS3;
```

- *Type:* <a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionS3">IotTopicRuleErrorActionS3</a>

---


### IotTopicRuleErrorActionSnsOutputReference <a name="IotTopicRuleErrorActionSnsOutputReference" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionSnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionSnsOutputReference.Initializer"></a>

```typescript
import { iotTopicRule } from '@cdktf/aws-cdk'

new iotTopicRule.IotTopicRuleErrorActionSnsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionSnsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionSnsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionSnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionSnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionSnsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionSnsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionSnsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionSnsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionSnsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionSnsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionSnsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionSnsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionSnsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionSnsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionSnsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionSnsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionSnsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionSnsOutputReference.resetMessageFormat">resetMessageFormat</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionSnsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionSnsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionSnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionSnsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionSnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionSnsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionSnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionSnsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionSnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionSnsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionSnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionSnsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionSnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionSnsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionSnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionSnsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionSnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionSnsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionSnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionSnsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionSnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionSnsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionSnsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionSnsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMessageFormat` <a name="resetMessageFormat" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionSnsOutputReference.resetMessageFormat"></a>

```typescript
public resetMessageFormat(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionSnsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionSnsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionSnsOutputReference.property.messageFormatInput">messageFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionSnsOutputReference.property.roleArnInput">roleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionSnsOutputReference.property.targetArnInput">targetArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionSnsOutputReference.property.messageFormat">messageFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionSnsOutputReference.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionSnsOutputReference.property.targetArn">targetArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionSnsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionSns">IotTopicRuleErrorActionSns</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionSnsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionSnsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `messageFormatInput`<sup>Optional</sup> <a name="messageFormatInput" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionSnsOutputReference.property.messageFormatInput"></a>

```typescript
public readonly messageFormatInput: string;
```

- *Type:* string

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionSnsOutputReference.property.roleArnInput"></a>

```typescript
public readonly roleArnInput: string;
```

- *Type:* string

---

##### `targetArnInput`<sup>Optional</sup> <a name="targetArnInput" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionSnsOutputReference.property.targetArnInput"></a>

```typescript
public readonly targetArnInput: string;
```

- *Type:* string

---

##### `messageFormat`<sup>Required</sup> <a name="messageFormat" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionSnsOutputReference.property.messageFormat"></a>

```typescript
public readonly messageFormat: string;
```

- *Type:* string

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionSnsOutputReference.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `targetArn`<sup>Required</sup> <a name="targetArn" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionSnsOutputReference.property.targetArn"></a>

```typescript
public readonly targetArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionSnsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IotTopicRuleErrorActionSns;
```

- *Type:* <a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionSns">IotTopicRuleErrorActionSns</a>

---


### IotTopicRuleErrorActionSqsOutputReference <a name="IotTopicRuleErrorActionSqsOutputReference" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionSqsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionSqsOutputReference.Initializer"></a>

```typescript
import { iotTopicRule } from '@cdktf/aws-cdk'

new iotTopicRule.IotTopicRuleErrorActionSqsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionSqsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionSqsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionSqsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionSqsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionSqsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionSqsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionSqsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionSqsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionSqsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionSqsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionSqsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionSqsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionSqsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionSqsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionSqsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionSqsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionSqsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionSqsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionSqsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionSqsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionSqsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionSqsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionSqsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionSqsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionSqsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionSqsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionSqsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionSqsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionSqsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionSqsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionSqsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionSqsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionSqsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionSqsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionSqsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionSqsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionSqsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionSqsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionSqsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionSqsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionSqsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionSqsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionSqsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionSqsOutputReference.property.queueUrlInput">queueUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionSqsOutputReference.property.roleArnInput">roleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionSqsOutputReference.property.useBase64Input">useBase64Input</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionSqsOutputReference.property.queueUrl">queueUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionSqsOutputReference.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionSqsOutputReference.property.useBase64">useBase64</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionSqsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionSqs">IotTopicRuleErrorActionSqs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionSqsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionSqsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `queueUrlInput`<sup>Optional</sup> <a name="queueUrlInput" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionSqsOutputReference.property.queueUrlInput"></a>

```typescript
public readonly queueUrlInput: string;
```

- *Type:* string

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionSqsOutputReference.property.roleArnInput"></a>

```typescript
public readonly roleArnInput: string;
```

- *Type:* string

---

##### `useBase64Input`<sup>Optional</sup> <a name="useBase64Input" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionSqsOutputReference.property.useBase64Input"></a>

```typescript
public readonly useBase64Input: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `queueUrl`<sup>Required</sup> <a name="queueUrl" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionSqsOutputReference.property.queueUrl"></a>

```typescript
public readonly queueUrl: string;
```

- *Type:* string

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionSqsOutputReference.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `useBase64`<sup>Required</sup> <a name="useBase64" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionSqsOutputReference.property.useBase64"></a>

```typescript
public readonly useBase64: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionSqsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IotTopicRuleErrorActionSqs;
```

- *Type:* <a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionSqs">IotTopicRuleErrorActionSqs</a>

---


### IotTopicRuleErrorActionStepFunctionsOutputReference <a name="IotTopicRuleErrorActionStepFunctionsOutputReference" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionStepFunctionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionStepFunctionsOutputReference.Initializer"></a>

```typescript
import { iotTopicRule } from '@cdktf/aws-cdk'

new iotTopicRule.IotTopicRuleErrorActionStepFunctionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionStepFunctionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionStepFunctionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionStepFunctionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionStepFunctionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionStepFunctionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionStepFunctionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionStepFunctionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionStepFunctionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionStepFunctionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionStepFunctionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionStepFunctionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionStepFunctionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionStepFunctionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionStepFunctionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionStepFunctionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionStepFunctionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionStepFunctionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionStepFunctionsOutputReference.resetExecutionNamePrefix">resetExecutionNamePrefix</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionStepFunctionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionStepFunctionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionStepFunctionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionStepFunctionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionStepFunctionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionStepFunctionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionStepFunctionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionStepFunctionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionStepFunctionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionStepFunctionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionStepFunctionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionStepFunctionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionStepFunctionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionStepFunctionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionStepFunctionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionStepFunctionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionStepFunctionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionStepFunctionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionStepFunctionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionStepFunctionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionStepFunctionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionStepFunctionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionStepFunctionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionStepFunctionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetExecutionNamePrefix` <a name="resetExecutionNamePrefix" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionStepFunctionsOutputReference.resetExecutionNamePrefix"></a>

```typescript
public resetExecutionNamePrefix(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionStepFunctionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionStepFunctionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionStepFunctionsOutputReference.property.executionNamePrefixInput">executionNamePrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionStepFunctionsOutputReference.property.roleArnInput">roleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionStepFunctionsOutputReference.property.stateMachineNameInput">stateMachineNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionStepFunctionsOutputReference.property.executionNamePrefix">executionNamePrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionStepFunctionsOutputReference.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionStepFunctionsOutputReference.property.stateMachineName">stateMachineName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionStepFunctionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionStepFunctions">IotTopicRuleErrorActionStepFunctions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionStepFunctionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionStepFunctionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `executionNamePrefixInput`<sup>Optional</sup> <a name="executionNamePrefixInput" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionStepFunctionsOutputReference.property.executionNamePrefixInput"></a>

```typescript
public readonly executionNamePrefixInput: string;
```

- *Type:* string

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionStepFunctionsOutputReference.property.roleArnInput"></a>

```typescript
public readonly roleArnInput: string;
```

- *Type:* string

---

##### `stateMachineNameInput`<sup>Optional</sup> <a name="stateMachineNameInput" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionStepFunctionsOutputReference.property.stateMachineNameInput"></a>

```typescript
public readonly stateMachineNameInput: string;
```

- *Type:* string

---

##### `executionNamePrefix`<sup>Required</sup> <a name="executionNamePrefix" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionStepFunctionsOutputReference.property.executionNamePrefix"></a>

```typescript
public readonly executionNamePrefix: string;
```

- *Type:* string

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionStepFunctionsOutputReference.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `stateMachineName`<sup>Required</sup> <a name="stateMachineName" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionStepFunctionsOutputReference.property.stateMachineName"></a>

```typescript
public readonly stateMachineName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionStepFunctionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IotTopicRuleErrorActionStepFunctions;
```

- *Type:* <a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleErrorActionStepFunctions">IotTopicRuleErrorActionStepFunctions</a>

---


### IotTopicRuleFirehoseList <a name="IotTopicRuleFirehoseList" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleFirehoseList"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleFirehoseList.Initializer"></a>

```typescript
import { iotTopicRule } from '@cdktf/aws-cdk'

new iotTopicRule.IotTopicRuleFirehoseList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleFirehoseList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleFirehoseList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleFirehoseList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleFirehoseList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleFirehoseList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleFirehoseList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleFirehoseList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleFirehoseList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleFirehoseList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleFirehoseList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleFirehoseList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleFirehoseList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleFirehoseList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleFirehoseList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleFirehoseList.get"></a>

```typescript
public get(index: number): IotTopicRuleFirehoseOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleFirehoseList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleFirehoseList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleFirehoseList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleFirehoseList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleFirehose">IotTopicRuleFirehose</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleFirehoseList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleFirehoseList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleFirehoseList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotTopicRuleFirehose[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleFirehose">IotTopicRuleFirehose</a>[]

---


### IotTopicRuleFirehoseOutputReference <a name="IotTopicRuleFirehoseOutputReference" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleFirehoseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleFirehoseOutputReference.Initializer"></a>

```typescript
import { iotTopicRule } from '@cdktf/aws-cdk'

new iotTopicRule.IotTopicRuleFirehoseOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleFirehoseOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleFirehoseOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleFirehoseOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleFirehoseOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleFirehoseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleFirehoseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleFirehoseOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleFirehoseOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleFirehoseOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleFirehoseOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleFirehoseOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleFirehoseOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleFirehoseOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleFirehoseOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleFirehoseOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleFirehoseOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleFirehoseOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleFirehoseOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleFirehoseOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleFirehoseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleFirehoseOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleFirehoseOutputReference.resetSeparator">resetSeparator</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleFirehoseOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleFirehoseOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleFirehoseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleFirehoseOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleFirehoseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleFirehoseOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleFirehoseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleFirehoseOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleFirehoseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleFirehoseOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleFirehoseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleFirehoseOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleFirehoseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleFirehoseOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleFirehoseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleFirehoseOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleFirehoseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleFirehoseOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleFirehoseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleFirehoseOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleFirehoseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleFirehoseOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleFirehoseOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleFirehoseOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSeparator` <a name="resetSeparator" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleFirehoseOutputReference.resetSeparator"></a>

```typescript
public resetSeparator(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleFirehoseOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleFirehoseOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleFirehoseOutputReference.property.deliveryStreamNameInput">deliveryStreamNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleFirehoseOutputReference.property.roleArnInput">roleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleFirehoseOutputReference.property.separatorInput">separatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleFirehoseOutputReference.property.deliveryStreamName">deliveryStreamName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleFirehoseOutputReference.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleFirehoseOutputReference.property.separator">separator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleFirehoseOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleFirehose">IotTopicRuleFirehose</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleFirehoseOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleFirehoseOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `deliveryStreamNameInput`<sup>Optional</sup> <a name="deliveryStreamNameInput" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleFirehoseOutputReference.property.deliveryStreamNameInput"></a>

```typescript
public readonly deliveryStreamNameInput: string;
```

- *Type:* string

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleFirehoseOutputReference.property.roleArnInput"></a>

```typescript
public readonly roleArnInput: string;
```

- *Type:* string

---

##### `separatorInput`<sup>Optional</sup> <a name="separatorInput" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleFirehoseOutputReference.property.separatorInput"></a>

```typescript
public readonly separatorInput: string;
```

- *Type:* string

---

##### `deliveryStreamName`<sup>Required</sup> <a name="deliveryStreamName" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleFirehoseOutputReference.property.deliveryStreamName"></a>

```typescript
public readonly deliveryStreamName: string;
```

- *Type:* string

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleFirehoseOutputReference.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `separator`<sup>Required</sup> <a name="separator" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleFirehoseOutputReference.property.separator"></a>

```typescript
public readonly separator: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleFirehoseOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IotTopicRuleFirehose | IResolvable;
```

- *Type:* <a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleFirehose">IotTopicRuleFirehose</a> | cdktf.IResolvable

---


### IotTopicRuleIotAnalyticsList <a name="IotTopicRuleIotAnalyticsList" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleIotAnalyticsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleIotAnalyticsList.Initializer"></a>

```typescript
import { iotTopicRule } from '@cdktf/aws-cdk'

new iotTopicRule.IotTopicRuleIotAnalyticsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleIotAnalyticsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleIotAnalyticsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleIotAnalyticsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleIotAnalyticsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleIotAnalyticsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleIotAnalyticsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleIotAnalyticsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleIotAnalyticsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleIotAnalyticsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleIotAnalyticsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleIotAnalyticsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleIotAnalyticsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleIotAnalyticsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleIotAnalyticsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleIotAnalyticsList.get"></a>

```typescript
public get(index: number): IotTopicRuleIotAnalyticsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleIotAnalyticsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleIotAnalyticsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleIotAnalyticsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleIotAnalyticsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleIotAnalytics">IotTopicRuleIotAnalytics</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleIotAnalyticsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleIotAnalyticsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleIotAnalyticsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotTopicRuleIotAnalytics[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleIotAnalytics">IotTopicRuleIotAnalytics</a>[]

---


### IotTopicRuleIotAnalyticsOutputReference <a name="IotTopicRuleIotAnalyticsOutputReference" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleIotAnalyticsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleIotAnalyticsOutputReference.Initializer"></a>

```typescript
import { iotTopicRule } from '@cdktf/aws-cdk'

new iotTopicRule.IotTopicRuleIotAnalyticsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleIotAnalyticsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleIotAnalyticsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleIotAnalyticsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleIotAnalyticsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleIotAnalyticsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleIotAnalyticsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleIotAnalyticsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleIotAnalyticsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleIotAnalyticsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleIotAnalyticsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleIotAnalyticsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleIotAnalyticsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleIotAnalyticsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleIotAnalyticsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleIotAnalyticsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleIotAnalyticsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleIotAnalyticsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleIotAnalyticsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleIotAnalyticsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleIotAnalyticsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleIotAnalyticsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleIotAnalyticsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleIotAnalyticsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleIotAnalyticsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleIotAnalyticsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleIotAnalyticsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleIotAnalyticsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleIotAnalyticsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleIotAnalyticsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleIotAnalyticsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleIotAnalyticsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleIotAnalyticsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleIotAnalyticsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleIotAnalyticsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleIotAnalyticsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleIotAnalyticsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleIotAnalyticsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleIotAnalyticsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleIotAnalyticsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleIotAnalyticsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleIotAnalyticsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleIotAnalyticsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleIotAnalyticsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleIotAnalyticsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleIotAnalyticsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleIotAnalyticsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleIotAnalyticsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleIotAnalyticsOutputReference.property.channelNameInput">channelNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleIotAnalyticsOutputReference.property.roleArnInput">roleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleIotAnalyticsOutputReference.property.channelName">channelName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleIotAnalyticsOutputReference.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleIotAnalyticsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleIotAnalytics">IotTopicRuleIotAnalytics</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleIotAnalyticsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleIotAnalyticsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `channelNameInput`<sup>Optional</sup> <a name="channelNameInput" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleIotAnalyticsOutputReference.property.channelNameInput"></a>

```typescript
public readonly channelNameInput: string;
```

- *Type:* string

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleIotAnalyticsOutputReference.property.roleArnInput"></a>

```typescript
public readonly roleArnInput: string;
```

- *Type:* string

---

##### `channelName`<sup>Required</sup> <a name="channelName" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleIotAnalyticsOutputReference.property.channelName"></a>

```typescript
public readonly channelName: string;
```

- *Type:* string

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleIotAnalyticsOutputReference.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleIotAnalyticsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IotTopicRuleIotAnalytics | IResolvable;
```

- *Type:* <a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleIotAnalytics">IotTopicRuleIotAnalytics</a> | cdktf.IResolvable

---


### IotTopicRuleIotEventsList <a name="IotTopicRuleIotEventsList" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleIotEventsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleIotEventsList.Initializer"></a>

```typescript
import { iotTopicRule } from '@cdktf/aws-cdk'

new iotTopicRule.IotTopicRuleIotEventsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleIotEventsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleIotEventsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleIotEventsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleIotEventsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleIotEventsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleIotEventsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleIotEventsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleIotEventsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleIotEventsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleIotEventsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleIotEventsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleIotEventsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleIotEventsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleIotEventsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleIotEventsList.get"></a>

```typescript
public get(index: number): IotTopicRuleIotEventsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleIotEventsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleIotEventsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleIotEventsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleIotEventsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleIotEvents">IotTopicRuleIotEvents</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleIotEventsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleIotEventsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleIotEventsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotTopicRuleIotEvents[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleIotEvents">IotTopicRuleIotEvents</a>[]

---


### IotTopicRuleIotEventsOutputReference <a name="IotTopicRuleIotEventsOutputReference" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleIotEventsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleIotEventsOutputReference.Initializer"></a>

```typescript
import { iotTopicRule } from '@cdktf/aws-cdk'

new iotTopicRule.IotTopicRuleIotEventsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleIotEventsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleIotEventsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleIotEventsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleIotEventsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleIotEventsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleIotEventsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleIotEventsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleIotEventsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleIotEventsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleIotEventsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleIotEventsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleIotEventsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleIotEventsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleIotEventsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleIotEventsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleIotEventsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleIotEventsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleIotEventsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleIotEventsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleIotEventsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleIotEventsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleIotEventsOutputReference.resetMessageId">resetMessageId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleIotEventsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleIotEventsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleIotEventsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleIotEventsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleIotEventsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleIotEventsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleIotEventsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleIotEventsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleIotEventsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleIotEventsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleIotEventsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleIotEventsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleIotEventsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleIotEventsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleIotEventsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleIotEventsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleIotEventsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleIotEventsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleIotEventsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleIotEventsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleIotEventsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleIotEventsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleIotEventsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleIotEventsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMessageId` <a name="resetMessageId" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleIotEventsOutputReference.resetMessageId"></a>

```typescript
public resetMessageId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleIotEventsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleIotEventsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleIotEventsOutputReference.property.inputNameInput">inputNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleIotEventsOutputReference.property.messageIdInput">messageIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleIotEventsOutputReference.property.roleArnInput">roleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleIotEventsOutputReference.property.inputName">inputName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleIotEventsOutputReference.property.messageId">messageId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleIotEventsOutputReference.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleIotEventsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleIotEvents">IotTopicRuleIotEvents</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleIotEventsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleIotEventsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `inputNameInput`<sup>Optional</sup> <a name="inputNameInput" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleIotEventsOutputReference.property.inputNameInput"></a>

```typescript
public readonly inputNameInput: string;
```

- *Type:* string

---

##### `messageIdInput`<sup>Optional</sup> <a name="messageIdInput" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleIotEventsOutputReference.property.messageIdInput"></a>

```typescript
public readonly messageIdInput: string;
```

- *Type:* string

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleIotEventsOutputReference.property.roleArnInput"></a>

```typescript
public readonly roleArnInput: string;
```

- *Type:* string

---

##### `inputName`<sup>Required</sup> <a name="inputName" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleIotEventsOutputReference.property.inputName"></a>

```typescript
public readonly inputName: string;
```

- *Type:* string

---

##### `messageId`<sup>Required</sup> <a name="messageId" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleIotEventsOutputReference.property.messageId"></a>

```typescript
public readonly messageId: string;
```

- *Type:* string

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleIotEventsOutputReference.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleIotEventsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IotTopicRuleIotEvents | IResolvable;
```

- *Type:* <a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleIotEvents">IotTopicRuleIotEvents</a> | cdktf.IResolvable

---


### IotTopicRuleKinesisList <a name="IotTopicRuleKinesisList" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleKinesisList"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleKinesisList.Initializer"></a>

```typescript
import { iotTopicRule } from '@cdktf/aws-cdk'

new iotTopicRule.IotTopicRuleKinesisList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleKinesisList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleKinesisList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleKinesisList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleKinesisList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleKinesisList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleKinesisList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleKinesisList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleKinesisList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleKinesisList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleKinesisList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleKinesisList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleKinesisList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleKinesisList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleKinesisList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleKinesisList.get"></a>

```typescript
public get(index: number): IotTopicRuleKinesisOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleKinesisList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleKinesisList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleKinesisList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleKinesisList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleKinesis">IotTopicRuleKinesis</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleKinesisList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleKinesisList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleKinesisList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotTopicRuleKinesis[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleKinesis">IotTopicRuleKinesis</a>[]

---


### IotTopicRuleKinesisOutputReference <a name="IotTopicRuleKinesisOutputReference" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleKinesisOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleKinesisOutputReference.Initializer"></a>

```typescript
import { iotTopicRule } from '@cdktf/aws-cdk'

new iotTopicRule.IotTopicRuleKinesisOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleKinesisOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleKinesisOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleKinesisOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleKinesisOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleKinesisOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleKinesisOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleKinesisOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleKinesisOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleKinesisOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleKinesisOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleKinesisOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleKinesisOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleKinesisOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleKinesisOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleKinesisOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleKinesisOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleKinesisOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleKinesisOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleKinesisOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleKinesisOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleKinesisOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleKinesisOutputReference.resetPartitionKey">resetPartitionKey</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleKinesisOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleKinesisOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleKinesisOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleKinesisOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleKinesisOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleKinesisOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleKinesisOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleKinesisOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleKinesisOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleKinesisOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleKinesisOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleKinesisOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleKinesisOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleKinesisOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleKinesisOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleKinesisOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleKinesisOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleKinesisOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleKinesisOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleKinesisOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleKinesisOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleKinesisOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleKinesisOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleKinesisOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPartitionKey` <a name="resetPartitionKey" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleKinesisOutputReference.resetPartitionKey"></a>

```typescript
public resetPartitionKey(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleKinesisOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleKinesisOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleKinesisOutputReference.property.partitionKeyInput">partitionKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleKinesisOutputReference.property.roleArnInput">roleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleKinesisOutputReference.property.streamNameInput">streamNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleKinesisOutputReference.property.partitionKey">partitionKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleKinesisOutputReference.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleKinesisOutputReference.property.streamName">streamName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleKinesisOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleKinesis">IotTopicRuleKinesis</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleKinesisOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleKinesisOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `partitionKeyInput`<sup>Optional</sup> <a name="partitionKeyInput" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleKinesisOutputReference.property.partitionKeyInput"></a>

```typescript
public readonly partitionKeyInput: string;
```

- *Type:* string

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleKinesisOutputReference.property.roleArnInput"></a>

```typescript
public readonly roleArnInput: string;
```

- *Type:* string

---

##### `streamNameInput`<sup>Optional</sup> <a name="streamNameInput" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleKinesisOutputReference.property.streamNameInput"></a>

```typescript
public readonly streamNameInput: string;
```

- *Type:* string

---

##### `partitionKey`<sup>Required</sup> <a name="partitionKey" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleKinesisOutputReference.property.partitionKey"></a>

```typescript
public readonly partitionKey: string;
```

- *Type:* string

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleKinesisOutputReference.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `streamName`<sup>Required</sup> <a name="streamName" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleKinesisOutputReference.property.streamName"></a>

```typescript
public readonly streamName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleKinesisOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IotTopicRuleKinesis | IResolvable;
```

- *Type:* <a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleKinesis">IotTopicRuleKinesis</a> | cdktf.IResolvable

---


### IotTopicRuleLambdaList <a name="IotTopicRuleLambdaList" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleLambdaList"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleLambdaList.Initializer"></a>

```typescript
import { iotTopicRule } from '@cdktf/aws-cdk'

new iotTopicRule.IotTopicRuleLambdaList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleLambdaList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleLambdaList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleLambdaList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleLambdaList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleLambdaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleLambdaList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleLambdaList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleLambdaList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleLambdaList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleLambdaList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleLambdaList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleLambdaList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleLambdaList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleLambdaList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleLambdaList.get"></a>

```typescript
public get(index: number): IotTopicRuleLambdaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleLambdaList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleLambdaList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleLambdaList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleLambdaList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleLambda">IotTopicRuleLambda</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleLambdaList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleLambdaList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleLambdaList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotTopicRuleLambda[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleLambda">IotTopicRuleLambda</a>[]

---


### IotTopicRuleLambdaOutputReference <a name="IotTopicRuleLambdaOutputReference" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleLambdaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleLambdaOutputReference.Initializer"></a>

```typescript
import { iotTopicRule } from '@cdktf/aws-cdk'

new iotTopicRule.IotTopicRuleLambdaOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleLambdaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleLambdaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleLambdaOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleLambdaOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleLambdaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleLambdaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleLambdaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleLambdaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleLambdaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleLambdaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleLambdaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleLambdaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleLambdaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleLambdaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleLambdaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleLambdaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleLambdaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleLambdaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleLambdaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleLambdaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleLambdaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleLambdaOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleLambdaOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleLambdaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleLambdaOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleLambdaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleLambdaOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleLambdaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleLambdaOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleLambdaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleLambdaOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleLambdaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleLambdaOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleLambdaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleLambdaOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleLambdaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleLambdaOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleLambdaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleLambdaOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleLambdaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleLambdaOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleLambdaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleLambdaOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleLambdaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleLambdaOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleLambdaOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleLambdaOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleLambdaOutputReference.property.functionArnInput">functionArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleLambdaOutputReference.property.functionArn">functionArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleLambdaOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleLambda">IotTopicRuleLambda</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleLambdaOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleLambdaOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `functionArnInput`<sup>Optional</sup> <a name="functionArnInput" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleLambdaOutputReference.property.functionArnInput"></a>

```typescript
public readonly functionArnInput: string;
```

- *Type:* string

---

##### `functionArn`<sup>Required</sup> <a name="functionArn" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleLambdaOutputReference.property.functionArn"></a>

```typescript
public readonly functionArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleLambdaOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IotTopicRuleLambda | IResolvable;
```

- *Type:* <a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleLambda">IotTopicRuleLambda</a> | cdktf.IResolvable

---


### IotTopicRuleRepublishList <a name="IotTopicRuleRepublishList" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleRepublishList"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleRepublishList.Initializer"></a>

```typescript
import { iotTopicRule } from '@cdktf/aws-cdk'

new iotTopicRule.IotTopicRuleRepublishList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleRepublishList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleRepublishList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleRepublishList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleRepublishList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleRepublishList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleRepublishList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleRepublishList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleRepublishList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleRepublishList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleRepublishList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleRepublishList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleRepublishList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleRepublishList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleRepublishList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleRepublishList.get"></a>

```typescript
public get(index: number): IotTopicRuleRepublishOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleRepublishList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleRepublishList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleRepublishList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleRepublishList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleRepublish">IotTopicRuleRepublish</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleRepublishList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleRepublishList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleRepublishList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotTopicRuleRepublish[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleRepublish">IotTopicRuleRepublish</a>[]

---


### IotTopicRuleRepublishOutputReference <a name="IotTopicRuleRepublishOutputReference" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleRepublishOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleRepublishOutputReference.Initializer"></a>

```typescript
import { iotTopicRule } from '@cdktf/aws-cdk'

new iotTopicRule.IotTopicRuleRepublishOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleRepublishOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleRepublishOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleRepublishOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleRepublishOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleRepublishOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleRepublishOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleRepublishOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleRepublishOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleRepublishOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleRepublishOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleRepublishOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleRepublishOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleRepublishOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleRepublishOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleRepublishOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleRepublishOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleRepublishOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleRepublishOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleRepublishOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleRepublishOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleRepublishOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleRepublishOutputReference.resetQos">resetQos</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleRepublishOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleRepublishOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleRepublishOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleRepublishOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleRepublishOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleRepublishOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleRepublishOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleRepublishOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleRepublishOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleRepublishOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleRepublishOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleRepublishOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleRepublishOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleRepublishOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleRepublishOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleRepublishOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleRepublishOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleRepublishOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleRepublishOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleRepublishOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleRepublishOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleRepublishOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleRepublishOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleRepublishOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetQos` <a name="resetQos" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleRepublishOutputReference.resetQos"></a>

```typescript
public resetQos(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleRepublishOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleRepublishOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleRepublishOutputReference.property.qosInput">qosInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleRepublishOutputReference.property.roleArnInput">roleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleRepublishOutputReference.property.topicInput">topicInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleRepublishOutputReference.property.qos">qos</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleRepublishOutputReference.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleRepublishOutputReference.property.topic">topic</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleRepublishOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleRepublish">IotTopicRuleRepublish</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleRepublishOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleRepublishOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `qosInput`<sup>Optional</sup> <a name="qosInput" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleRepublishOutputReference.property.qosInput"></a>

```typescript
public readonly qosInput: number;
```

- *Type:* number

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleRepublishOutputReference.property.roleArnInput"></a>

```typescript
public readonly roleArnInput: string;
```

- *Type:* string

---

##### `topicInput`<sup>Optional</sup> <a name="topicInput" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleRepublishOutputReference.property.topicInput"></a>

```typescript
public readonly topicInput: string;
```

- *Type:* string

---

##### `qos`<sup>Required</sup> <a name="qos" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleRepublishOutputReference.property.qos"></a>

```typescript
public readonly qos: number;
```

- *Type:* number

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleRepublishOutputReference.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `topic`<sup>Required</sup> <a name="topic" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleRepublishOutputReference.property.topic"></a>

```typescript
public readonly topic: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleRepublishOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IotTopicRuleRepublish | IResolvable;
```

- *Type:* <a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleRepublish">IotTopicRuleRepublish</a> | cdktf.IResolvable

---


### IotTopicRuleS3List <a name="IotTopicRuleS3List" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleS3List"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleS3List.Initializer"></a>

```typescript
import { iotTopicRule } from '@cdktf/aws-cdk'

new iotTopicRule.IotTopicRuleS3List(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleS3List.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleS3List.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleS3List.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleS3List.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleS3List.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleS3List.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleS3List.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleS3List.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleS3List.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleS3List.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleS3List.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleS3List.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleS3List.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleS3List.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleS3List.get"></a>

```typescript
public get(index: number): IotTopicRuleS3OutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleS3List.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleS3List.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleS3List.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleS3List.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleS3">IotTopicRuleS3</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleS3List.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleS3List.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleS3List.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotTopicRuleS3[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleS3">IotTopicRuleS3</a>[]

---


### IotTopicRuleS3OutputReference <a name="IotTopicRuleS3OutputReference" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleS3OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleS3OutputReference.Initializer"></a>

```typescript
import { iotTopicRule } from '@cdktf/aws-cdk'

new iotTopicRule.IotTopicRuleS3OutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleS3OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleS3OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleS3OutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleS3OutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleS3OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleS3OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleS3OutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleS3OutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleS3OutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleS3OutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleS3OutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleS3OutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleS3OutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleS3OutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleS3OutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleS3OutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleS3OutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleS3OutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleS3OutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleS3OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleS3OutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleS3OutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleS3OutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleS3OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleS3OutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleS3OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleS3OutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleS3OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleS3OutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleS3OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleS3OutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleS3OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleS3OutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleS3OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleS3OutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleS3OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleS3OutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleS3OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleS3OutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleS3OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleS3OutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleS3OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleS3OutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleS3OutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleS3OutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleS3OutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleS3OutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleS3OutputReference.property.bucketNameInput">bucketNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleS3OutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleS3OutputReference.property.roleArnInput">roleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleS3OutputReference.property.bucketName">bucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleS3OutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleS3OutputReference.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleS3OutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleS3">IotTopicRuleS3</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleS3OutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleS3OutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bucketNameInput`<sup>Optional</sup> <a name="bucketNameInput" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleS3OutputReference.property.bucketNameInput"></a>

```typescript
public readonly bucketNameInput: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleS3OutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleS3OutputReference.property.roleArnInput"></a>

```typescript
public readonly roleArnInput: string;
```

- *Type:* string

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleS3OutputReference.property.bucketName"></a>

```typescript
public readonly bucketName: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleS3OutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleS3OutputReference.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleS3OutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IotTopicRuleS3 | IResolvable;
```

- *Type:* <a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleS3">IotTopicRuleS3</a> | cdktf.IResolvable

---


### IotTopicRuleSnsList <a name="IotTopicRuleSnsList" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleSnsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleSnsList.Initializer"></a>

```typescript
import { iotTopicRule } from '@cdktf/aws-cdk'

new iotTopicRule.IotTopicRuleSnsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleSnsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleSnsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleSnsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleSnsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleSnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleSnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleSnsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleSnsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleSnsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleSnsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleSnsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleSnsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleSnsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleSnsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleSnsList.get"></a>

```typescript
public get(index: number): IotTopicRuleSnsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleSnsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleSnsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleSnsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleSnsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleSns">IotTopicRuleSns</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleSnsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleSnsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleSnsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotTopicRuleSns[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleSns">IotTopicRuleSns</a>[]

---


### IotTopicRuleSnsOutputReference <a name="IotTopicRuleSnsOutputReference" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleSnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleSnsOutputReference.Initializer"></a>

```typescript
import { iotTopicRule } from '@cdktf/aws-cdk'

new iotTopicRule.IotTopicRuleSnsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleSnsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleSnsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleSnsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleSnsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleSnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleSnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleSnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleSnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleSnsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleSnsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleSnsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleSnsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleSnsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleSnsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleSnsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleSnsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleSnsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleSnsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleSnsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleSnsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleSnsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleSnsOutputReference.resetMessageFormat">resetMessageFormat</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleSnsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleSnsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleSnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleSnsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleSnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleSnsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleSnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleSnsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleSnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleSnsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleSnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleSnsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleSnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleSnsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleSnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleSnsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleSnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleSnsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleSnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleSnsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleSnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleSnsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleSnsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleSnsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMessageFormat` <a name="resetMessageFormat" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleSnsOutputReference.resetMessageFormat"></a>

```typescript
public resetMessageFormat(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleSnsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleSnsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleSnsOutputReference.property.messageFormatInput">messageFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleSnsOutputReference.property.roleArnInput">roleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleSnsOutputReference.property.targetArnInput">targetArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleSnsOutputReference.property.messageFormat">messageFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleSnsOutputReference.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleSnsOutputReference.property.targetArn">targetArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleSnsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleSns">IotTopicRuleSns</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleSnsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleSnsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `messageFormatInput`<sup>Optional</sup> <a name="messageFormatInput" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleSnsOutputReference.property.messageFormatInput"></a>

```typescript
public readonly messageFormatInput: string;
```

- *Type:* string

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleSnsOutputReference.property.roleArnInput"></a>

```typescript
public readonly roleArnInput: string;
```

- *Type:* string

---

##### `targetArnInput`<sup>Optional</sup> <a name="targetArnInput" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleSnsOutputReference.property.targetArnInput"></a>

```typescript
public readonly targetArnInput: string;
```

- *Type:* string

---

##### `messageFormat`<sup>Required</sup> <a name="messageFormat" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleSnsOutputReference.property.messageFormat"></a>

```typescript
public readonly messageFormat: string;
```

- *Type:* string

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleSnsOutputReference.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `targetArn`<sup>Required</sup> <a name="targetArn" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleSnsOutputReference.property.targetArn"></a>

```typescript
public readonly targetArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleSnsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IotTopicRuleSns | IResolvable;
```

- *Type:* <a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleSns">IotTopicRuleSns</a> | cdktf.IResolvable

---


### IotTopicRuleSqsList <a name="IotTopicRuleSqsList" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleSqsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleSqsList.Initializer"></a>

```typescript
import { iotTopicRule } from '@cdktf/aws-cdk'

new iotTopicRule.IotTopicRuleSqsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleSqsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleSqsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleSqsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleSqsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleSqsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleSqsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleSqsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleSqsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleSqsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleSqsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleSqsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleSqsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleSqsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleSqsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleSqsList.get"></a>

```typescript
public get(index: number): IotTopicRuleSqsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleSqsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleSqsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleSqsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleSqsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleSqs">IotTopicRuleSqs</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleSqsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleSqsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleSqsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotTopicRuleSqs[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleSqs">IotTopicRuleSqs</a>[]

---


### IotTopicRuleSqsOutputReference <a name="IotTopicRuleSqsOutputReference" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleSqsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleSqsOutputReference.Initializer"></a>

```typescript
import { iotTopicRule } from '@cdktf/aws-cdk'

new iotTopicRule.IotTopicRuleSqsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleSqsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleSqsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleSqsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleSqsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleSqsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleSqsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleSqsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleSqsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleSqsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleSqsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleSqsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleSqsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleSqsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleSqsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleSqsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleSqsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleSqsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleSqsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleSqsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleSqsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleSqsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleSqsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleSqsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleSqsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleSqsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleSqsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleSqsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleSqsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleSqsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleSqsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleSqsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleSqsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleSqsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleSqsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleSqsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleSqsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleSqsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleSqsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleSqsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleSqsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleSqsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleSqsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleSqsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleSqsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleSqsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleSqsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleSqsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleSqsOutputReference.property.queueUrlInput">queueUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleSqsOutputReference.property.roleArnInput">roleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleSqsOutputReference.property.useBase64Input">useBase64Input</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleSqsOutputReference.property.queueUrl">queueUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleSqsOutputReference.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleSqsOutputReference.property.useBase64">useBase64</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleSqsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleSqs">IotTopicRuleSqs</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleSqsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleSqsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `queueUrlInput`<sup>Optional</sup> <a name="queueUrlInput" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleSqsOutputReference.property.queueUrlInput"></a>

```typescript
public readonly queueUrlInput: string;
```

- *Type:* string

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleSqsOutputReference.property.roleArnInput"></a>

```typescript
public readonly roleArnInput: string;
```

- *Type:* string

---

##### `useBase64Input`<sup>Optional</sup> <a name="useBase64Input" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleSqsOutputReference.property.useBase64Input"></a>

```typescript
public readonly useBase64Input: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `queueUrl`<sup>Required</sup> <a name="queueUrl" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleSqsOutputReference.property.queueUrl"></a>

```typescript
public readonly queueUrl: string;
```

- *Type:* string

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleSqsOutputReference.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `useBase64`<sup>Required</sup> <a name="useBase64" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleSqsOutputReference.property.useBase64"></a>

```typescript
public readonly useBase64: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleSqsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IotTopicRuleSqs | IResolvable;
```

- *Type:* <a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleSqs">IotTopicRuleSqs</a> | cdktf.IResolvable

---


### IotTopicRuleStepFunctionsList <a name="IotTopicRuleStepFunctionsList" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleStepFunctionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleStepFunctionsList.Initializer"></a>

```typescript
import { iotTopicRule } from '@cdktf/aws-cdk'

new iotTopicRule.IotTopicRuleStepFunctionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleStepFunctionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleStepFunctionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleStepFunctionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleStepFunctionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleStepFunctionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleStepFunctionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleStepFunctionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleStepFunctionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleStepFunctionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleStepFunctionsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleStepFunctionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleStepFunctionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleStepFunctionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleStepFunctionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleStepFunctionsList.get"></a>

```typescript
public get(index: number): IotTopicRuleStepFunctionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleStepFunctionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleStepFunctionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleStepFunctionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleStepFunctionsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleStepFunctions">IotTopicRuleStepFunctions</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleStepFunctionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleStepFunctionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleStepFunctionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotTopicRuleStepFunctions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleStepFunctions">IotTopicRuleStepFunctions</a>[]

---


### IotTopicRuleStepFunctionsOutputReference <a name="IotTopicRuleStepFunctionsOutputReference" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleStepFunctionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleStepFunctionsOutputReference.Initializer"></a>

```typescript
import { iotTopicRule } from '@cdktf/aws-cdk'

new iotTopicRule.IotTopicRuleStepFunctionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleStepFunctionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleStepFunctionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleStepFunctionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleStepFunctionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleStepFunctionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleStepFunctionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleStepFunctionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleStepFunctionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleStepFunctionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleStepFunctionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleStepFunctionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleStepFunctionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleStepFunctionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleStepFunctionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleStepFunctionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleStepFunctionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleStepFunctionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleStepFunctionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleStepFunctionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleStepFunctionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleStepFunctionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleStepFunctionsOutputReference.resetExecutionNamePrefix">resetExecutionNamePrefix</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleStepFunctionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleStepFunctionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleStepFunctionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleStepFunctionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleStepFunctionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleStepFunctionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleStepFunctionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleStepFunctionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleStepFunctionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleStepFunctionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleStepFunctionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleStepFunctionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleStepFunctionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleStepFunctionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleStepFunctionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleStepFunctionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleStepFunctionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleStepFunctionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleStepFunctionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleStepFunctionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleStepFunctionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleStepFunctionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleStepFunctionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleStepFunctionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetExecutionNamePrefix` <a name="resetExecutionNamePrefix" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleStepFunctionsOutputReference.resetExecutionNamePrefix"></a>

```typescript
public resetExecutionNamePrefix(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleStepFunctionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleStepFunctionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleStepFunctionsOutputReference.property.executionNamePrefixInput">executionNamePrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleStepFunctionsOutputReference.property.roleArnInput">roleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleStepFunctionsOutputReference.property.stateMachineNameInput">stateMachineNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleStepFunctionsOutputReference.property.executionNamePrefix">executionNamePrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleStepFunctionsOutputReference.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleStepFunctionsOutputReference.property.stateMachineName">stateMachineName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleStepFunctionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleStepFunctions">IotTopicRuleStepFunctions</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleStepFunctionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleStepFunctionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `executionNamePrefixInput`<sup>Optional</sup> <a name="executionNamePrefixInput" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleStepFunctionsOutputReference.property.executionNamePrefixInput"></a>

```typescript
public readonly executionNamePrefixInput: string;
```

- *Type:* string

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleStepFunctionsOutputReference.property.roleArnInput"></a>

```typescript
public readonly roleArnInput: string;
```

- *Type:* string

---

##### `stateMachineNameInput`<sup>Optional</sup> <a name="stateMachineNameInput" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleStepFunctionsOutputReference.property.stateMachineNameInput"></a>

```typescript
public readonly stateMachineNameInput: string;
```

- *Type:* string

---

##### `executionNamePrefix`<sup>Required</sup> <a name="executionNamePrefix" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleStepFunctionsOutputReference.property.executionNamePrefix"></a>

```typescript
public readonly executionNamePrefix: string;
```

- *Type:* string

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleStepFunctionsOutputReference.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `stateMachineName`<sup>Required</sup> <a name="stateMachineName" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleStepFunctionsOutputReference.property.stateMachineName"></a>

```typescript
public readonly stateMachineName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.iotTopicRule.IotTopicRuleStepFunctionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IotTopicRuleStepFunctions | IResolvable;
```

- *Type:* <a href="#@cdktf/aws-cdk.iotTopicRule.IotTopicRuleStepFunctions">IotTopicRuleStepFunctions</a> | cdktf.IResolvable

---



