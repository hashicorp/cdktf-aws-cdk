# `aws_prometheus_alert_manager_definition`

Refer to the Terraform Registory for docs: [`aws_prometheus_alert_manager_definition`](https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/prometheus_alert_manager_definition).

# `prometheusAlertManagerDefinition` Submodule <a name="`prometheusAlertManagerDefinition` Submodule" id="@cdktf/aws-cdk.prometheusAlertManagerDefinition"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PrometheusAlertManagerDefinition <a name="PrometheusAlertManagerDefinition" id="@cdktf/aws-cdk.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/prometheus_alert_manager_definition aws_prometheus_alert_manager_definition}.

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.Initializer"></a>

```typescript
import { prometheusAlertManagerDefinition } from '@cdktf/aws-cdk'

new prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition(scope: Construct, id: string, config: PrometheusAlertManagerDefinitionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/aws-cdk.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/aws-cdk.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/aws-cdk.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinitionConfig">PrometheusAlertManagerDefinitionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/aws-cdk.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/aws-cdk.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinitionConfig">PrometheusAlertManagerDefinitionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/aws-cdk.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/aws-cdk.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/aws-cdk.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/aws-cdk.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/aws-cdk.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/aws-cdk.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/aws-cdk.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/aws-cdk.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/aws-cdk.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/aws-cdk.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/aws-cdk.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/aws-cdk.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/aws-cdk.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/aws-cdk.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/aws-cdk.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `importFrom` <a name="importFrom" id="@cdktf/aws-cdk.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveTo` <a name="moveTo" id="@cdktf/aws-cdk.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/aws-cdk.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/aws-cdk.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `resetId` <a name="resetId" id="@cdktf/aws-cdk.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/aws-cdk.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a PrometheusAlertManagerDefinition resource upon running "cdktf plan <stack-name>". |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@cdktf/aws-cdk.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.isConstruct"></a>

```typescript
import { prometheusAlertManagerDefinition } from '@cdktf/aws-cdk'

prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/aws-cdk.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.isTerraformElement"></a>

```typescript
import { prometheusAlertManagerDefinition } from '@cdktf/aws-cdk'

prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/aws-cdk.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.isTerraformResource"></a>

```typescript
import { prometheusAlertManagerDefinition } from '@cdktf/aws-cdk'

prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/aws-cdk.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.generateConfigForImport"></a>

```typescript
import { prometheusAlertManagerDefinition } from '@cdktf/aws-cdk'

prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a PrometheusAlertManagerDefinition resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/aws-cdk.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the PrometheusAlertManagerDefinition to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/aws-cdk.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing PrometheusAlertManagerDefinition that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/prometheus_alert_manager_definition#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the PrometheusAlertManagerDefinition to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/aws-cdk.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.property.definitionInput">definitionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.property.workspaceIdInput">workspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.property.definition">definition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.property.workspaceId">workspaceId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/aws-cdk.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/aws-cdk.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/aws-cdk.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/aws-cdk.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/aws-cdk.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/aws-cdk.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `definitionInput`<sup>Optional</sup> <a name="definitionInput" id="@cdktf/aws-cdk.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.property.definitionInput"></a>

```typescript
public readonly definitionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/aws-cdk.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="workspaceIdInput" id="@cdktf/aws-cdk.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.property.workspaceIdInput"></a>

```typescript
public readonly workspaceIdInput: string;
```

- *Type:* string

---

##### `definition`<sup>Required</sup> <a name="definition" id="@cdktf/aws-cdk.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.property.definition"></a>

```typescript
public readonly definition: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktf/aws-cdk.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/aws-cdk.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinition.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### PrometheusAlertManagerDefinitionConfig <a name="PrometheusAlertManagerDefinitionConfig" id="@cdktf/aws-cdk.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinitionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinitionConfig.Initializer"></a>

```typescript
import { prometheusAlertManagerDefinition } from '@cdktf/aws-cdk'

const prometheusAlertManagerDefinitionConfig: prometheusAlertManagerDefinition.PrometheusAlertManagerDefinitionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinitionConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinitionConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinitionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinitionConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinitionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinitionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinitionConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinitionConfig.property.definition">definition</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/prometheus_alert_manager_definition#definition PrometheusAlertManagerDefinition#definition}. |
| <code><a href="#@cdktf/aws-cdk.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinitionConfig.property.workspaceId">workspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/prometheus_alert_manager_definition#workspace_id PrometheusAlertManagerDefinition#workspace_id}. |
| <code><a href="#@cdktf/aws-cdk.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinitionConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/prometheus_alert_manager_definition#id PrometheusAlertManagerDefinition#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinitionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinitionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinitionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinitionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinitionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinitionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinitionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `definition`<sup>Required</sup> <a name="definition" id="@cdktf/aws-cdk.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinitionConfig.property.definition"></a>

```typescript
public readonly definition: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/prometheus_alert_manager_definition#definition PrometheusAlertManagerDefinition#definition}.

---

##### `workspaceId`<sup>Required</sup> <a name="workspaceId" id="@cdktf/aws-cdk.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinitionConfig.property.workspaceId"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/prometheus_alert_manager_definition#workspace_id PrometheusAlertManagerDefinition#workspace_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/aws-cdk.prometheusAlertManagerDefinition.PrometheusAlertManagerDefinitionConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/prometheus_alert_manager_definition#id PrometheusAlertManagerDefinition#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



