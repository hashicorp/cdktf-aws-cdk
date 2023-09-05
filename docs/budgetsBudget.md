# `aws_budgets_budget`

Refer to the Terraform Registory for docs: [`aws_budgets_budget`](https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/budgets_budget).

# `budgetsBudget` Submodule <a name="`budgetsBudget` Submodule" id="@cdktf/aws-cdk.budgetsBudget"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BudgetsBudget <a name="BudgetsBudget" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudget"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/budgets_budget aws_budgets_budget}.

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudget.Initializer"></a>

```typescript
import { budgetsBudget } from '@cdktf/aws-cdk'

new budgetsBudget.BudgetsBudget(scope: Construct, id: string, config: BudgetsBudgetConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudget.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudget.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudget.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetConfig">BudgetsBudgetConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudget.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudget.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudget.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetConfig">BudgetsBudgetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudget.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudget.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudget.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudget.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudget.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudget.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudget.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudget.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudget.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudget.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudget.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudget.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudget.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudget.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudget.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudget.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudget.putCostFilter">putCostFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudget.putCostTypes">putCostTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudget.putNotification">putNotification</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudget.resetAccountId">resetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudget.resetCostFilter">resetCostFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudget.resetCostFilters">resetCostFilters</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudget.resetCostTypes">resetCostTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudget.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudget.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudget.resetNamePrefix">resetNamePrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudget.resetNotification">resetNotification</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudget.resetTimePeriodEnd">resetTimePeriodEnd</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudget.resetTimePeriodStart">resetTimePeriodStart</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudget.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudget.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudget.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudget.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudget.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudget.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudget.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudget.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudget.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudget.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudget.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudget.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudget.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudget.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudget.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudget.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudget.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudget.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudget.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudget.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudget.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudget.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudget.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudget.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudget.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudget.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudget.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudget.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudget.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putCostFilter` <a name="putCostFilter" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudget.putCostFilter"></a>

```typescript
public putCostFilter(value: IResolvable | BudgetsBudgetCostFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudget.putCostFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetCostFilter">BudgetsBudgetCostFilter</a>[]

---

##### `putCostTypes` <a name="putCostTypes" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudget.putCostTypes"></a>

```typescript
public putCostTypes(value: BudgetsBudgetCostTypes): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudget.putCostTypes.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetCostTypes">BudgetsBudgetCostTypes</a>

---

##### `putNotification` <a name="putNotification" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudget.putNotification"></a>

```typescript
public putNotification(value: IResolvable | BudgetsBudgetNotification[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudget.putNotification.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetNotification">BudgetsBudgetNotification</a>[]

---

##### `resetAccountId` <a name="resetAccountId" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudget.resetAccountId"></a>

```typescript
public resetAccountId(): void
```

##### `resetCostFilter` <a name="resetCostFilter" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudget.resetCostFilter"></a>

```typescript
public resetCostFilter(): void
```

##### `resetCostFilters` <a name="resetCostFilters" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudget.resetCostFilters"></a>

```typescript
public resetCostFilters(): void
```

##### `resetCostTypes` <a name="resetCostTypes" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudget.resetCostTypes"></a>

```typescript
public resetCostTypes(): void
```

##### `resetId` <a name="resetId" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudget.resetId"></a>

```typescript
public resetId(): void
```

##### `resetName` <a name="resetName" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudget.resetName"></a>

```typescript
public resetName(): void
```

##### `resetNamePrefix` <a name="resetNamePrefix" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudget.resetNamePrefix"></a>

```typescript
public resetNamePrefix(): void
```

##### `resetNotification` <a name="resetNotification" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudget.resetNotification"></a>

```typescript
public resetNotification(): void
```

##### `resetTimePeriodEnd` <a name="resetTimePeriodEnd" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudget.resetTimePeriodEnd"></a>

```typescript
public resetTimePeriodEnd(): void
```

##### `resetTimePeriodStart` <a name="resetTimePeriodStart" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudget.resetTimePeriodStart"></a>

```typescript
public resetTimePeriodStart(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudget.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudget.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudget.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudget.isConstruct"></a>

```typescript
import { budgetsBudget } from '@cdktf/aws-cdk'

budgetsBudget.BudgetsBudget.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudget.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudget.isTerraformElement"></a>

```typescript
import { budgetsBudget } from '@cdktf/aws-cdk'

budgetsBudget.BudgetsBudget.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudget.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudget.isTerraformResource"></a>

```typescript
import { budgetsBudget } from '@cdktf/aws-cdk'

budgetsBudget.BudgetsBudget.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudget.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudget.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudget.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudget.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudget.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudget.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudget.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudget.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudget.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudget.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudget.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudget.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudget.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudget.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudget.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudget.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudget.property.costFilter">costFilter</a></code> | <code><a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetCostFilterList">BudgetsBudgetCostFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudget.property.costTypes">costTypes</a></code> | <code><a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetCostTypesOutputReference">BudgetsBudgetCostTypesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudget.property.notification">notification</a></code> | <code><a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetNotificationList">BudgetsBudgetNotificationList</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudget.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudget.property.budgetTypeInput">budgetTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudget.property.costFilterInput">costFilterInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetCostFilter">BudgetsBudgetCostFilter</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudget.property.costFiltersInput">costFiltersInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudget.property.costTypesInput">costTypesInput</a></code> | <code><a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetCostTypes">BudgetsBudgetCostTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudget.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudget.property.limitAmountInput">limitAmountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudget.property.limitUnitInput">limitUnitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudget.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudget.property.namePrefixInput">namePrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudget.property.notificationInput">notificationInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetNotification">BudgetsBudgetNotification</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudget.property.timePeriodEndInput">timePeriodEndInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudget.property.timePeriodStartInput">timePeriodStartInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudget.property.timeUnitInput">timeUnitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudget.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudget.property.budgetType">budgetType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudget.property.costFilters">costFilters</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudget.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudget.property.limitAmount">limitAmount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudget.property.limitUnit">limitUnit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudget.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudget.property.namePrefix">namePrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudget.property.timePeriodEnd">timePeriodEnd</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudget.property.timePeriodStart">timePeriodStart</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudget.property.timeUnit">timeUnit</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudget.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudget.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudget.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudget.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudget.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudget.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudget.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudget.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudget.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudget.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudget.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudget.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudget.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudget.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudget.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `costFilter`<sup>Required</sup> <a name="costFilter" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudget.property.costFilter"></a>

```typescript
public readonly costFilter: BudgetsBudgetCostFilterList;
```

- *Type:* <a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetCostFilterList">BudgetsBudgetCostFilterList</a>

---

##### `costTypes`<sup>Required</sup> <a name="costTypes" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudget.property.costTypes"></a>

```typescript
public readonly costTypes: BudgetsBudgetCostTypesOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetCostTypesOutputReference">BudgetsBudgetCostTypesOutputReference</a>

---

##### `notification`<sup>Required</sup> <a name="notification" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudget.property.notification"></a>

```typescript
public readonly notification: BudgetsBudgetNotificationList;
```

- *Type:* <a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetNotificationList">BudgetsBudgetNotificationList</a>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudget.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `budgetTypeInput`<sup>Optional</sup> <a name="budgetTypeInput" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudget.property.budgetTypeInput"></a>

```typescript
public readonly budgetTypeInput: string;
```

- *Type:* string

---

##### `costFilterInput`<sup>Optional</sup> <a name="costFilterInput" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudget.property.costFilterInput"></a>

```typescript
public readonly costFilterInput: IResolvable | BudgetsBudgetCostFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetCostFilter">BudgetsBudgetCostFilter</a>[]

---

##### `costFiltersInput`<sup>Optional</sup> <a name="costFiltersInput" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudget.property.costFiltersInput"></a>

```typescript
public readonly costFiltersInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `costTypesInput`<sup>Optional</sup> <a name="costTypesInput" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudget.property.costTypesInput"></a>

```typescript
public readonly costTypesInput: BudgetsBudgetCostTypes;
```

- *Type:* <a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetCostTypes">BudgetsBudgetCostTypes</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudget.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `limitAmountInput`<sup>Optional</sup> <a name="limitAmountInput" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudget.property.limitAmountInput"></a>

```typescript
public readonly limitAmountInput: string;
```

- *Type:* string

---

##### `limitUnitInput`<sup>Optional</sup> <a name="limitUnitInput" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudget.property.limitUnitInput"></a>

```typescript
public readonly limitUnitInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudget.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `namePrefixInput`<sup>Optional</sup> <a name="namePrefixInput" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudget.property.namePrefixInput"></a>

```typescript
public readonly namePrefixInput: string;
```

- *Type:* string

---

##### `notificationInput`<sup>Optional</sup> <a name="notificationInput" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudget.property.notificationInput"></a>

```typescript
public readonly notificationInput: IResolvable | BudgetsBudgetNotification[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetNotification">BudgetsBudgetNotification</a>[]

---

##### `timePeriodEndInput`<sup>Optional</sup> <a name="timePeriodEndInput" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudget.property.timePeriodEndInput"></a>

```typescript
public readonly timePeriodEndInput: string;
```

- *Type:* string

---

##### `timePeriodStartInput`<sup>Optional</sup> <a name="timePeriodStartInput" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudget.property.timePeriodStartInput"></a>

```typescript
public readonly timePeriodStartInput: string;
```

- *Type:* string

---

##### `timeUnitInput`<sup>Optional</sup> <a name="timeUnitInput" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudget.property.timeUnitInput"></a>

```typescript
public readonly timeUnitInput: string;
```

- *Type:* string

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudget.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `budgetType`<sup>Required</sup> <a name="budgetType" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudget.property.budgetType"></a>

```typescript
public readonly budgetType: string;
```

- *Type:* string

---

##### `costFilters`<sup>Required</sup> <a name="costFilters" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudget.property.costFilters"></a>

```typescript
public readonly costFilters: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudget.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `limitAmount`<sup>Required</sup> <a name="limitAmount" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudget.property.limitAmount"></a>

```typescript
public readonly limitAmount: string;
```

- *Type:* string

---

##### `limitUnit`<sup>Required</sup> <a name="limitUnit" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudget.property.limitUnit"></a>

```typescript
public readonly limitUnit: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudget.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `namePrefix`<sup>Required</sup> <a name="namePrefix" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudget.property.namePrefix"></a>

```typescript
public readonly namePrefix: string;
```

- *Type:* string

---

##### `timePeriodEnd`<sup>Required</sup> <a name="timePeriodEnd" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudget.property.timePeriodEnd"></a>

```typescript
public readonly timePeriodEnd: string;
```

- *Type:* string

---

##### `timePeriodStart`<sup>Required</sup> <a name="timePeriodStart" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudget.property.timePeriodStart"></a>

```typescript
public readonly timePeriodStart: string;
```

- *Type:* string

---

##### `timeUnit`<sup>Required</sup> <a name="timeUnit" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudget.property.timeUnit"></a>

```typescript
public readonly timeUnit: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudget.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudget.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### BudgetsBudgetConfig <a name="BudgetsBudgetConfig" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetConfig.Initializer"></a>

```typescript
import { budgetsBudget } from '@cdktf/aws-cdk'

const budgetsBudgetConfig: budgetsBudget.BudgetsBudgetConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetConfig.property.budgetType">budgetType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/budgets_budget#budget_type BudgetsBudget#budget_type}. |
| <code><a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetConfig.property.limitAmount">limitAmount</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/budgets_budget#limit_amount BudgetsBudget#limit_amount}. |
| <code><a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetConfig.property.limitUnit">limitUnit</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/budgets_budget#limit_unit BudgetsBudget#limit_unit}. |
| <code><a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetConfig.property.timeUnit">timeUnit</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/budgets_budget#time_unit BudgetsBudget#time_unit}. |
| <code><a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetConfig.property.accountId">accountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/budgets_budget#account_id BudgetsBudget#account_id}. |
| <code><a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetConfig.property.costFilter">costFilter</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetCostFilter">BudgetsBudgetCostFilter</a>[]</code> | cost_filter block. |
| <code><a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetConfig.property.costFilters">costFilters</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/budgets_budget#cost_filters BudgetsBudget#cost_filters}. |
| <code><a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetConfig.property.costTypes">costTypes</a></code> | <code><a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetCostTypes">BudgetsBudgetCostTypes</a></code> | cost_types block. |
| <code><a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/budgets_budget#id BudgetsBudget#id}. |
| <code><a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/budgets_budget#name BudgetsBudget#name}. |
| <code><a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetConfig.property.namePrefix">namePrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/budgets_budget#name_prefix BudgetsBudget#name_prefix}. |
| <code><a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetConfig.property.notification">notification</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetNotification">BudgetsBudgetNotification</a>[]</code> | notification block. |
| <code><a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetConfig.property.timePeriodEnd">timePeriodEnd</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/budgets_budget#time_period_end BudgetsBudget#time_period_end}. |
| <code><a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetConfig.property.timePeriodStart">timePeriodStart</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/budgets_budget#time_period_start BudgetsBudget#time_period_start}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `budgetType`<sup>Required</sup> <a name="budgetType" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetConfig.property.budgetType"></a>

```typescript
public readonly budgetType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/budgets_budget#budget_type BudgetsBudget#budget_type}.

---

##### `limitAmount`<sup>Required</sup> <a name="limitAmount" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetConfig.property.limitAmount"></a>

```typescript
public readonly limitAmount: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/budgets_budget#limit_amount BudgetsBudget#limit_amount}.

---

##### `limitUnit`<sup>Required</sup> <a name="limitUnit" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetConfig.property.limitUnit"></a>

```typescript
public readonly limitUnit: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/budgets_budget#limit_unit BudgetsBudget#limit_unit}.

---

##### `timeUnit`<sup>Required</sup> <a name="timeUnit" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetConfig.property.timeUnit"></a>

```typescript
public readonly timeUnit: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/budgets_budget#time_unit BudgetsBudget#time_unit}.

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetConfig.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/budgets_budget#account_id BudgetsBudget#account_id}.

---

##### `costFilter`<sup>Optional</sup> <a name="costFilter" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetConfig.property.costFilter"></a>

```typescript
public readonly costFilter: IResolvable | BudgetsBudgetCostFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetCostFilter">BudgetsBudgetCostFilter</a>[]

cost_filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/budgets_budget#cost_filter BudgetsBudget#cost_filter}

---

##### `costFilters`<sup>Optional</sup> <a name="costFilters" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetConfig.property.costFilters"></a>

```typescript
public readonly costFilters: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/budgets_budget#cost_filters BudgetsBudget#cost_filters}.

---

##### `costTypes`<sup>Optional</sup> <a name="costTypes" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetConfig.property.costTypes"></a>

```typescript
public readonly costTypes: BudgetsBudgetCostTypes;
```

- *Type:* <a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetCostTypes">BudgetsBudgetCostTypes</a>

cost_types block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/budgets_budget#cost_types BudgetsBudget#cost_types}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/budgets_budget#id BudgetsBudget#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/budgets_budget#name BudgetsBudget#name}.

---

##### `namePrefix`<sup>Optional</sup> <a name="namePrefix" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetConfig.property.namePrefix"></a>

```typescript
public readonly namePrefix: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/budgets_budget#name_prefix BudgetsBudget#name_prefix}.

---

##### `notification`<sup>Optional</sup> <a name="notification" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetConfig.property.notification"></a>

```typescript
public readonly notification: IResolvable | BudgetsBudgetNotification[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetNotification">BudgetsBudgetNotification</a>[]

notification block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/budgets_budget#notification BudgetsBudget#notification}

---

##### `timePeriodEnd`<sup>Optional</sup> <a name="timePeriodEnd" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetConfig.property.timePeriodEnd"></a>

```typescript
public readonly timePeriodEnd: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/budgets_budget#time_period_end BudgetsBudget#time_period_end}.

---

##### `timePeriodStart`<sup>Optional</sup> <a name="timePeriodStart" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetConfig.property.timePeriodStart"></a>

```typescript
public readonly timePeriodStart: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/budgets_budget#time_period_start BudgetsBudget#time_period_start}.

---

### BudgetsBudgetCostFilter <a name="BudgetsBudgetCostFilter" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetCostFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetCostFilter.Initializer"></a>

```typescript
import { budgetsBudget } from '@cdktf/aws-cdk'

const budgetsBudgetCostFilter: budgetsBudget.BudgetsBudgetCostFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetCostFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/budgets_budget#name BudgetsBudget#name}. |
| <code><a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetCostFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/budgets_budget#values BudgetsBudget#values}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetCostFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/budgets_budget#name BudgetsBudget#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetCostFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/budgets_budget#values BudgetsBudget#values}.

---

### BudgetsBudgetCostTypes <a name="BudgetsBudgetCostTypes" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetCostTypes"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetCostTypes.Initializer"></a>

```typescript
import { budgetsBudget } from '@cdktf/aws-cdk'

const budgetsBudgetCostTypes: budgetsBudget.BudgetsBudgetCostTypes = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetCostTypes.property.includeCredit">includeCredit</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/budgets_budget#include_credit BudgetsBudget#include_credit}. |
| <code><a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetCostTypes.property.includeDiscount">includeDiscount</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/budgets_budget#include_discount BudgetsBudget#include_discount}. |
| <code><a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetCostTypes.property.includeOtherSubscription">includeOtherSubscription</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/budgets_budget#include_other_subscription BudgetsBudget#include_other_subscription}. |
| <code><a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetCostTypes.property.includeRecurring">includeRecurring</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/budgets_budget#include_recurring BudgetsBudget#include_recurring}. |
| <code><a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetCostTypes.property.includeRefund">includeRefund</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/budgets_budget#include_refund BudgetsBudget#include_refund}. |
| <code><a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetCostTypes.property.includeSubscription">includeSubscription</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/budgets_budget#include_subscription BudgetsBudget#include_subscription}. |
| <code><a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetCostTypes.property.includeSupport">includeSupport</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/budgets_budget#include_support BudgetsBudget#include_support}. |
| <code><a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetCostTypes.property.includeTax">includeTax</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/budgets_budget#include_tax BudgetsBudget#include_tax}. |
| <code><a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetCostTypes.property.includeUpfront">includeUpfront</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/budgets_budget#include_upfront BudgetsBudget#include_upfront}. |
| <code><a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetCostTypes.property.useAmortized">useAmortized</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/budgets_budget#use_amortized BudgetsBudget#use_amortized}. |
| <code><a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetCostTypes.property.useBlended">useBlended</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/budgets_budget#use_blended BudgetsBudget#use_blended}. |

---

##### `includeCredit`<sup>Optional</sup> <a name="includeCredit" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetCostTypes.property.includeCredit"></a>

```typescript
public readonly includeCredit: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/budgets_budget#include_credit BudgetsBudget#include_credit}.

---

##### `includeDiscount`<sup>Optional</sup> <a name="includeDiscount" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetCostTypes.property.includeDiscount"></a>

```typescript
public readonly includeDiscount: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/budgets_budget#include_discount BudgetsBudget#include_discount}.

---

##### `includeOtherSubscription`<sup>Optional</sup> <a name="includeOtherSubscription" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetCostTypes.property.includeOtherSubscription"></a>

```typescript
public readonly includeOtherSubscription: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/budgets_budget#include_other_subscription BudgetsBudget#include_other_subscription}.

---

##### `includeRecurring`<sup>Optional</sup> <a name="includeRecurring" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetCostTypes.property.includeRecurring"></a>

```typescript
public readonly includeRecurring: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/budgets_budget#include_recurring BudgetsBudget#include_recurring}.

---

##### `includeRefund`<sup>Optional</sup> <a name="includeRefund" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetCostTypes.property.includeRefund"></a>

```typescript
public readonly includeRefund: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/budgets_budget#include_refund BudgetsBudget#include_refund}.

---

##### `includeSubscription`<sup>Optional</sup> <a name="includeSubscription" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetCostTypes.property.includeSubscription"></a>

```typescript
public readonly includeSubscription: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/budgets_budget#include_subscription BudgetsBudget#include_subscription}.

---

##### `includeSupport`<sup>Optional</sup> <a name="includeSupport" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetCostTypes.property.includeSupport"></a>

```typescript
public readonly includeSupport: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/budgets_budget#include_support BudgetsBudget#include_support}.

---

##### `includeTax`<sup>Optional</sup> <a name="includeTax" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetCostTypes.property.includeTax"></a>

```typescript
public readonly includeTax: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/budgets_budget#include_tax BudgetsBudget#include_tax}.

---

##### `includeUpfront`<sup>Optional</sup> <a name="includeUpfront" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetCostTypes.property.includeUpfront"></a>

```typescript
public readonly includeUpfront: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/budgets_budget#include_upfront BudgetsBudget#include_upfront}.

---

##### `useAmortized`<sup>Optional</sup> <a name="useAmortized" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetCostTypes.property.useAmortized"></a>

```typescript
public readonly useAmortized: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/budgets_budget#use_amortized BudgetsBudget#use_amortized}.

---

##### `useBlended`<sup>Optional</sup> <a name="useBlended" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetCostTypes.property.useBlended"></a>

```typescript
public readonly useBlended: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/budgets_budget#use_blended BudgetsBudget#use_blended}.

---

### BudgetsBudgetNotification <a name="BudgetsBudgetNotification" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetNotification"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetNotification.Initializer"></a>

```typescript
import { budgetsBudget } from '@cdktf/aws-cdk'

const budgetsBudgetNotification: budgetsBudget.BudgetsBudgetNotification = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetNotification.property.comparisonOperator">comparisonOperator</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/budgets_budget#comparison_operator BudgetsBudget#comparison_operator}. |
| <code><a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetNotification.property.notificationType">notificationType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/budgets_budget#notification_type BudgetsBudget#notification_type}. |
| <code><a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetNotification.property.threshold">threshold</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/budgets_budget#threshold BudgetsBudget#threshold}. |
| <code><a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetNotification.property.thresholdType">thresholdType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/budgets_budget#threshold_type BudgetsBudget#threshold_type}. |
| <code><a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetNotification.property.subscriberEmailAddresses">subscriberEmailAddresses</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/budgets_budget#subscriber_email_addresses BudgetsBudget#subscriber_email_addresses}. |
| <code><a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetNotification.property.subscriberSnsTopicArns">subscriberSnsTopicArns</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/budgets_budget#subscriber_sns_topic_arns BudgetsBudget#subscriber_sns_topic_arns}. |

---

##### `comparisonOperator`<sup>Required</sup> <a name="comparisonOperator" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetNotification.property.comparisonOperator"></a>

```typescript
public readonly comparisonOperator: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/budgets_budget#comparison_operator BudgetsBudget#comparison_operator}.

---

##### `notificationType`<sup>Required</sup> <a name="notificationType" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetNotification.property.notificationType"></a>

```typescript
public readonly notificationType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/budgets_budget#notification_type BudgetsBudget#notification_type}.

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetNotification.property.threshold"></a>

```typescript
public readonly threshold: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/budgets_budget#threshold BudgetsBudget#threshold}.

---

##### `thresholdType`<sup>Required</sup> <a name="thresholdType" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetNotification.property.thresholdType"></a>

```typescript
public readonly thresholdType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/budgets_budget#threshold_type BudgetsBudget#threshold_type}.

---

##### `subscriberEmailAddresses`<sup>Optional</sup> <a name="subscriberEmailAddresses" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetNotification.property.subscriberEmailAddresses"></a>

```typescript
public readonly subscriberEmailAddresses: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/budgets_budget#subscriber_email_addresses BudgetsBudget#subscriber_email_addresses}.

---

##### `subscriberSnsTopicArns`<sup>Optional</sup> <a name="subscriberSnsTopicArns" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetNotification.property.subscriberSnsTopicArns"></a>

```typescript
public readonly subscriberSnsTopicArns: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/budgets_budget#subscriber_sns_topic_arns BudgetsBudget#subscriber_sns_topic_arns}.

---

## Classes <a name="Classes" id="Classes"></a>

### BudgetsBudgetCostFilterList <a name="BudgetsBudgetCostFilterList" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetCostFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetCostFilterList.Initializer"></a>

```typescript
import { budgetsBudget } from '@cdktf/aws-cdk'

new budgetsBudget.BudgetsBudgetCostFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetCostFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetCostFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetCostFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetCostFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetCostFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetCostFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetCostFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetCostFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetCostFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetCostFilterList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetCostFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetCostFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetCostFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetCostFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetCostFilterList.get"></a>

```typescript
public get(index: number): BudgetsBudgetCostFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetCostFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetCostFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetCostFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetCostFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetCostFilter">BudgetsBudgetCostFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetCostFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetCostFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetCostFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BudgetsBudgetCostFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetCostFilter">BudgetsBudgetCostFilter</a>[]

---


### BudgetsBudgetCostFilterOutputReference <a name="BudgetsBudgetCostFilterOutputReference" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetCostFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetCostFilterOutputReference.Initializer"></a>

```typescript
import { budgetsBudget } from '@cdktf/aws-cdk'

new budgetsBudget.BudgetsBudgetCostFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetCostFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetCostFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetCostFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetCostFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetCostFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetCostFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetCostFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetCostFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetCostFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetCostFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetCostFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetCostFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetCostFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetCostFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetCostFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetCostFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetCostFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetCostFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetCostFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetCostFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetCostFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetCostFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetCostFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetCostFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetCostFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetCostFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetCostFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetCostFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetCostFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetCostFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetCostFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetCostFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetCostFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetCostFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetCostFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetCostFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetCostFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetCostFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetCostFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetCostFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetCostFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetCostFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetCostFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetCostFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetCostFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetCostFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetCostFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetCostFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetCostFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetCostFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetCostFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetCostFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetCostFilter">BudgetsBudgetCostFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetCostFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetCostFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetCostFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetCostFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetCostFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetCostFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetCostFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BudgetsBudgetCostFilter;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetCostFilter">BudgetsBudgetCostFilter</a>

---


### BudgetsBudgetCostTypesOutputReference <a name="BudgetsBudgetCostTypesOutputReference" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetCostTypesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetCostTypesOutputReference.Initializer"></a>

```typescript
import { budgetsBudget } from '@cdktf/aws-cdk'

new budgetsBudget.BudgetsBudgetCostTypesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetCostTypesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetCostTypesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetCostTypesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetCostTypesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetCostTypesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetCostTypesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetCostTypesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetCostTypesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetCostTypesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetCostTypesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetCostTypesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetCostTypesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetCostTypesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetCostTypesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetCostTypesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetCostTypesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetCostTypesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetCostTypesOutputReference.resetIncludeCredit">resetIncludeCredit</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetCostTypesOutputReference.resetIncludeDiscount">resetIncludeDiscount</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetCostTypesOutputReference.resetIncludeOtherSubscription">resetIncludeOtherSubscription</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetCostTypesOutputReference.resetIncludeRecurring">resetIncludeRecurring</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetCostTypesOutputReference.resetIncludeRefund">resetIncludeRefund</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetCostTypesOutputReference.resetIncludeSubscription">resetIncludeSubscription</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetCostTypesOutputReference.resetIncludeSupport">resetIncludeSupport</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetCostTypesOutputReference.resetIncludeTax">resetIncludeTax</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetCostTypesOutputReference.resetIncludeUpfront">resetIncludeUpfront</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetCostTypesOutputReference.resetUseAmortized">resetUseAmortized</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetCostTypesOutputReference.resetUseBlended">resetUseBlended</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetCostTypesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetCostTypesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetCostTypesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetCostTypesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetCostTypesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetCostTypesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetCostTypesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetCostTypesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetCostTypesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetCostTypesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetCostTypesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetCostTypesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetCostTypesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetCostTypesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetCostTypesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetCostTypesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetCostTypesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetCostTypesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetCostTypesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetCostTypesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetCostTypesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetCostTypesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetCostTypesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetCostTypesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIncludeCredit` <a name="resetIncludeCredit" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetCostTypesOutputReference.resetIncludeCredit"></a>

```typescript
public resetIncludeCredit(): void
```

##### `resetIncludeDiscount` <a name="resetIncludeDiscount" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetCostTypesOutputReference.resetIncludeDiscount"></a>

```typescript
public resetIncludeDiscount(): void
```

##### `resetIncludeOtherSubscription` <a name="resetIncludeOtherSubscription" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetCostTypesOutputReference.resetIncludeOtherSubscription"></a>

```typescript
public resetIncludeOtherSubscription(): void
```

##### `resetIncludeRecurring` <a name="resetIncludeRecurring" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetCostTypesOutputReference.resetIncludeRecurring"></a>

```typescript
public resetIncludeRecurring(): void
```

##### `resetIncludeRefund` <a name="resetIncludeRefund" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetCostTypesOutputReference.resetIncludeRefund"></a>

```typescript
public resetIncludeRefund(): void
```

##### `resetIncludeSubscription` <a name="resetIncludeSubscription" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetCostTypesOutputReference.resetIncludeSubscription"></a>

```typescript
public resetIncludeSubscription(): void
```

##### `resetIncludeSupport` <a name="resetIncludeSupport" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetCostTypesOutputReference.resetIncludeSupport"></a>

```typescript
public resetIncludeSupport(): void
```

##### `resetIncludeTax` <a name="resetIncludeTax" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetCostTypesOutputReference.resetIncludeTax"></a>

```typescript
public resetIncludeTax(): void
```

##### `resetIncludeUpfront` <a name="resetIncludeUpfront" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetCostTypesOutputReference.resetIncludeUpfront"></a>

```typescript
public resetIncludeUpfront(): void
```

##### `resetUseAmortized` <a name="resetUseAmortized" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetCostTypesOutputReference.resetUseAmortized"></a>

```typescript
public resetUseAmortized(): void
```

##### `resetUseBlended` <a name="resetUseBlended" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetCostTypesOutputReference.resetUseBlended"></a>

```typescript
public resetUseBlended(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.includeCreditInput">includeCreditInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.includeDiscountInput">includeDiscountInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.includeOtherSubscriptionInput">includeOtherSubscriptionInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.includeRecurringInput">includeRecurringInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.includeRefundInput">includeRefundInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.includeSubscriptionInput">includeSubscriptionInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.includeSupportInput">includeSupportInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.includeTaxInput">includeTaxInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.includeUpfrontInput">includeUpfrontInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.useAmortizedInput">useAmortizedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.useBlendedInput">useBlendedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.includeCredit">includeCredit</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.includeDiscount">includeDiscount</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.includeOtherSubscription">includeOtherSubscription</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.includeRecurring">includeRecurring</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.includeRefund">includeRefund</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.includeSubscription">includeSubscription</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.includeSupport">includeSupport</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.includeTax">includeTax</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.includeUpfront">includeUpfront</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.useAmortized">useAmortized</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.useBlended">useBlended</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetCostTypes">BudgetsBudgetCostTypes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `includeCreditInput`<sup>Optional</sup> <a name="includeCreditInput" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.includeCreditInput"></a>

```typescript
public readonly includeCreditInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `includeDiscountInput`<sup>Optional</sup> <a name="includeDiscountInput" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.includeDiscountInput"></a>

```typescript
public readonly includeDiscountInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `includeOtherSubscriptionInput`<sup>Optional</sup> <a name="includeOtherSubscriptionInput" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.includeOtherSubscriptionInput"></a>

```typescript
public readonly includeOtherSubscriptionInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `includeRecurringInput`<sup>Optional</sup> <a name="includeRecurringInput" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.includeRecurringInput"></a>

```typescript
public readonly includeRecurringInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `includeRefundInput`<sup>Optional</sup> <a name="includeRefundInput" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.includeRefundInput"></a>

```typescript
public readonly includeRefundInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `includeSubscriptionInput`<sup>Optional</sup> <a name="includeSubscriptionInput" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.includeSubscriptionInput"></a>

```typescript
public readonly includeSubscriptionInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `includeSupportInput`<sup>Optional</sup> <a name="includeSupportInput" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.includeSupportInput"></a>

```typescript
public readonly includeSupportInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `includeTaxInput`<sup>Optional</sup> <a name="includeTaxInput" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.includeTaxInput"></a>

```typescript
public readonly includeTaxInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `includeUpfrontInput`<sup>Optional</sup> <a name="includeUpfrontInput" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.includeUpfrontInput"></a>

```typescript
public readonly includeUpfrontInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `useAmortizedInput`<sup>Optional</sup> <a name="useAmortizedInput" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.useAmortizedInput"></a>

```typescript
public readonly useAmortizedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `useBlendedInput`<sup>Optional</sup> <a name="useBlendedInput" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.useBlendedInput"></a>

```typescript
public readonly useBlendedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `includeCredit`<sup>Required</sup> <a name="includeCredit" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.includeCredit"></a>

```typescript
public readonly includeCredit: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `includeDiscount`<sup>Required</sup> <a name="includeDiscount" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.includeDiscount"></a>

```typescript
public readonly includeDiscount: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `includeOtherSubscription`<sup>Required</sup> <a name="includeOtherSubscription" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.includeOtherSubscription"></a>

```typescript
public readonly includeOtherSubscription: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `includeRecurring`<sup>Required</sup> <a name="includeRecurring" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.includeRecurring"></a>

```typescript
public readonly includeRecurring: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `includeRefund`<sup>Required</sup> <a name="includeRefund" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.includeRefund"></a>

```typescript
public readonly includeRefund: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `includeSubscription`<sup>Required</sup> <a name="includeSubscription" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.includeSubscription"></a>

```typescript
public readonly includeSubscription: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `includeSupport`<sup>Required</sup> <a name="includeSupport" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.includeSupport"></a>

```typescript
public readonly includeSupport: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `includeTax`<sup>Required</sup> <a name="includeTax" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.includeTax"></a>

```typescript
public readonly includeTax: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `includeUpfront`<sup>Required</sup> <a name="includeUpfront" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.includeUpfront"></a>

```typescript
public readonly includeUpfront: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `useAmortized`<sup>Required</sup> <a name="useAmortized" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.useAmortized"></a>

```typescript
public readonly useAmortized: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `useBlended`<sup>Required</sup> <a name="useBlended" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.useBlended"></a>

```typescript
public readonly useBlended: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetCostTypesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: BudgetsBudgetCostTypes;
```

- *Type:* <a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetCostTypes">BudgetsBudgetCostTypes</a>

---


### BudgetsBudgetNotificationList <a name="BudgetsBudgetNotificationList" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetNotificationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetNotificationList.Initializer"></a>

```typescript
import { budgetsBudget } from '@cdktf/aws-cdk'

new budgetsBudget.BudgetsBudgetNotificationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetNotificationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetNotificationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetNotificationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetNotificationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetNotificationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetNotificationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetNotificationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetNotificationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetNotificationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetNotificationList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetNotificationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetNotificationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetNotificationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetNotificationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetNotificationList.get"></a>

```typescript
public get(index: number): BudgetsBudgetNotificationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetNotificationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetNotificationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetNotificationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetNotificationList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetNotification">BudgetsBudgetNotification</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetNotificationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetNotificationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetNotificationList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BudgetsBudgetNotification[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetNotification">BudgetsBudgetNotification</a>[]

---


### BudgetsBudgetNotificationOutputReference <a name="BudgetsBudgetNotificationOutputReference" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetNotificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetNotificationOutputReference.Initializer"></a>

```typescript
import { budgetsBudget } from '@cdktf/aws-cdk'

new budgetsBudget.BudgetsBudgetNotificationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetNotificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetNotificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetNotificationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetNotificationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetNotificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetNotificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetNotificationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetNotificationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetNotificationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetNotificationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetNotificationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetNotificationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetNotificationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetNotificationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetNotificationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetNotificationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetNotificationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetNotificationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetNotificationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetNotificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetNotificationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetNotificationOutputReference.resetSubscriberEmailAddresses">resetSubscriberEmailAddresses</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetNotificationOutputReference.resetSubscriberSnsTopicArns">resetSubscriberSnsTopicArns</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetNotificationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetNotificationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetNotificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetNotificationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetNotificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetNotificationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetNotificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetNotificationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetNotificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetNotificationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetNotificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetNotificationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetNotificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetNotificationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetNotificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetNotificationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetNotificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetNotificationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetNotificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetNotificationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetNotificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetNotificationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetNotificationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetNotificationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSubscriberEmailAddresses` <a name="resetSubscriberEmailAddresses" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetNotificationOutputReference.resetSubscriberEmailAddresses"></a>

```typescript
public resetSubscriberEmailAddresses(): void
```

##### `resetSubscriberSnsTopicArns` <a name="resetSubscriberSnsTopicArns" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetNotificationOutputReference.resetSubscriberSnsTopicArns"></a>

```typescript
public resetSubscriberSnsTopicArns(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetNotificationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetNotificationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetNotificationOutputReference.property.comparisonOperatorInput">comparisonOperatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetNotificationOutputReference.property.notificationTypeInput">notificationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetNotificationOutputReference.property.subscriberEmailAddressesInput">subscriberEmailAddressesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetNotificationOutputReference.property.subscriberSnsTopicArnsInput">subscriberSnsTopicArnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetNotificationOutputReference.property.thresholdInput">thresholdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetNotificationOutputReference.property.thresholdTypeInput">thresholdTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetNotificationOutputReference.property.comparisonOperator">comparisonOperator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetNotificationOutputReference.property.notificationType">notificationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetNotificationOutputReference.property.subscriberEmailAddresses">subscriberEmailAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetNotificationOutputReference.property.subscriberSnsTopicArns">subscriberSnsTopicArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetNotificationOutputReference.property.threshold">threshold</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetNotificationOutputReference.property.thresholdType">thresholdType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetNotificationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetNotification">BudgetsBudgetNotification</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetNotificationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetNotificationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `comparisonOperatorInput`<sup>Optional</sup> <a name="comparisonOperatorInput" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetNotificationOutputReference.property.comparisonOperatorInput"></a>

```typescript
public readonly comparisonOperatorInput: string;
```

- *Type:* string

---

##### `notificationTypeInput`<sup>Optional</sup> <a name="notificationTypeInput" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetNotificationOutputReference.property.notificationTypeInput"></a>

```typescript
public readonly notificationTypeInput: string;
```

- *Type:* string

---

##### `subscriberEmailAddressesInput`<sup>Optional</sup> <a name="subscriberEmailAddressesInput" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetNotificationOutputReference.property.subscriberEmailAddressesInput"></a>

```typescript
public readonly subscriberEmailAddressesInput: string[];
```

- *Type:* string[]

---

##### `subscriberSnsTopicArnsInput`<sup>Optional</sup> <a name="subscriberSnsTopicArnsInput" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetNotificationOutputReference.property.subscriberSnsTopicArnsInput"></a>

```typescript
public readonly subscriberSnsTopicArnsInput: string[];
```

- *Type:* string[]

---

##### `thresholdInput`<sup>Optional</sup> <a name="thresholdInput" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetNotificationOutputReference.property.thresholdInput"></a>

```typescript
public readonly thresholdInput: number;
```

- *Type:* number

---

##### `thresholdTypeInput`<sup>Optional</sup> <a name="thresholdTypeInput" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetNotificationOutputReference.property.thresholdTypeInput"></a>

```typescript
public readonly thresholdTypeInput: string;
```

- *Type:* string

---

##### `comparisonOperator`<sup>Required</sup> <a name="comparisonOperator" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetNotificationOutputReference.property.comparisonOperator"></a>

```typescript
public readonly comparisonOperator: string;
```

- *Type:* string

---

##### `notificationType`<sup>Required</sup> <a name="notificationType" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetNotificationOutputReference.property.notificationType"></a>

```typescript
public readonly notificationType: string;
```

- *Type:* string

---

##### `subscriberEmailAddresses`<sup>Required</sup> <a name="subscriberEmailAddresses" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetNotificationOutputReference.property.subscriberEmailAddresses"></a>

```typescript
public readonly subscriberEmailAddresses: string[];
```

- *Type:* string[]

---

##### `subscriberSnsTopicArns`<sup>Required</sup> <a name="subscriberSnsTopicArns" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetNotificationOutputReference.property.subscriberSnsTopicArns"></a>

```typescript
public readonly subscriberSnsTopicArns: string[];
```

- *Type:* string[]

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetNotificationOutputReference.property.threshold"></a>

```typescript
public readonly threshold: number;
```

- *Type:* number

---

##### `thresholdType`<sup>Required</sup> <a name="thresholdType" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetNotificationOutputReference.property.thresholdType"></a>

```typescript
public readonly thresholdType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetNotificationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BudgetsBudgetNotification;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.budgetsBudget.BudgetsBudgetNotification">BudgetsBudgetNotification</a>

---



