# `data_aws_ec2_local_gateway_route_tables`

Refer to the Terraform Registory for docs: [`data_aws_ec2_local_gateway_route_tables`](https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/ec2_local_gateway_route_tables).

# `dataAwsEc2LocalGatewayRouteTables` Submodule <a name="`dataAwsEc2LocalGatewayRouteTables` Submodule" id="@cdktf/aws-cdk.dataAwsEc2LocalGatewayRouteTables"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsEc2LocalGatewayRouteTables <a name="DataAwsEc2LocalGatewayRouteTables" id="@cdktf/aws-cdk.dataAwsEc2LocalGatewayRouteTables.DataAwsEc2LocalGatewayRouteTables"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/ec2_local_gateway_route_tables aws_ec2_local_gateway_route_tables}.

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.dataAwsEc2LocalGatewayRouteTables.DataAwsEc2LocalGatewayRouteTables.Initializer"></a>

```typescript
import { dataAwsEc2LocalGatewayRouteTables } from '@cdktf/aws-cdk'

new dataAwsEc2LocalGatewayRouteTables.DataAwsEc2LocalGatewayRouteTables(scope: Construct, id: string, config?: DataAwsEc2LocalGatewayRouteTablesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2LocalGatewayRouteTables.DataAwsEc2LocalGatewayRouteTables.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2LocalGatewayRouteTables.DataAwsEc2LocalGatewayRouteTables.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2LocalGatewayRouteTables.DataAwsEc2LocalGatewayRouteTables.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/aws-cdk.dataAwsEc2LocalGatewayRouteTables.DataAwsEc2LocalGatewayRouteTablesConfig">DataAwsEc2LocalGatewayRouteTablesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.dataAwsEc2LocalGatewayRouteTables.DataAwsEc2LocalGatewayRouteTables.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.dataAwsEc2LocalGatewayRouteTables.DataAwsEc2LocalGatewayRouteTables.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/aws-cdk.dataAwsEc2LocalGatewayRouteTables.DataAwsEc2LocalGatewayRouteTables.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/aws-cdk.dataAwsEc2LocalGatewayRouteTables.DataAwsEc2LocalGatewayRouteTablesConfig">DataAwsEc2LocalGatewayRouteTablesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2LocalGatewayRouteTables.DataAwsEc2LocalGatewayRouteTables.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2LocalGatewayRouteTables.DataAwsEc2LocalGatewayRouteTables.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2LocalGatewayRouteTables.DataAwsEc2LocalGatewayRouteTables.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2LocalGatewayRouteTables.DataAwsEc2LocalGatewayRouteTables.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2LocalGatewayRouteTables.DataAwsEc2LocalGatewayRouteTables.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2LocalGatewayRouteTables.DataAwsEc2LocalGatewayRouteTables.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2LocalGatewayRouteTables.DataAwsEc2LocalGatewayRouteTables.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2LocalGatewayRouteTables.DataAwsEc2LocalGatewayRouteTables.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2LocalGatewayRouteTables.DataAwsEc2LocalGatewayRouteTables.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2LocalGatewayRouteTables.DataAwsEc2LocalGatewayRouteTables.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2LocalGatewayRouteTables.DataAwsEc2LocalGatewayRouteTables.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2LocalGatewayRouteTables.DataAwsEc2LocalGatewayRouteTables.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2LocalGatewayRouteTables.DataAwsEc2LocalGatewayRouteTables.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2LocalGatewayRouteTables.DataAwsEc2LocalGatewayRouteTables.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2LocalGatewayRouteTables.DataAwsEc2LocalGatewayRouteTables.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2LocalGatewayRouteTables.DataAwsEc2LocalGatewayRouteTables.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2LocalGatewayRouteTables.DataAwsEc2LocalGatewayRouteTables.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2LocalGatewayRouteTables.DataAwsEc2LocalGatewayRouteTables.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2LocalGatewayRouteTables.DataAwsEc2LocalGatewayRouteTables.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2LocalGatewayRouteTables.DataAwsEc2LocalGatewayRouteTables.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.dataAwsEc2LocalGatewayRouteTables.DataAwsEc2LocalGatewayRouteTables.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/aws-cdk.dataAwsEc2LocalGatewayRouteTables.DataAwsEc2LocalGatewayRouteTables.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/aws-cdk.dataAwsEc2LocalGatewayRouteTables.DataAwsEc2LocalGatewayRouteTables.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.dataAwsEc2LocalGatewayRouteTables.DataAwsEc2LocalGatewayRouteTables.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/aws-cdk.dataAwsEc2LocalGatewayRouteTables.DataAwsEc2LocalGatewayRouteTables.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/aws-cdk.dataAwsEc2LocalGatewayRouteTables.DataAwsEc2LocalGatewayRouteTables.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/aws-cdk.dataAwsEc2LocalGatewayRouteTables.DataAwsEc2LocalGatewayRouteTables.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/aws-cdk.dataAwsEc2LocalGatewayRouteTables.DataAwsEc2LocalGatewayRouteTables.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/aws-cdk.dataAwsEc2LocalGatewayRouteTables.DataAwsEc2LocalGatewayRouteTables.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.dataAwsEc2LocalGatewayRouteTables.DataAwsEc2LocalGatewayRouteTables.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsEc2LocalGatewayRouteTables.DataAwsEc2LocalGatewayRouteTables.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.dataAwsEc2LocalGatewayRouteTables.DataAwsEc2LocalGatewayRouteTables.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsEc2LocalGatewayRouteTables.DataAwsEc2LocalGatewayRouteTables.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.dataAwsEc2LocalGatewayRouteTables.DataAwsEc2LocalGatewayRouteTables.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsEc2LocalGatewayRouteTables.DataAwsEc2LocalGatewayRouteTables.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.dataAwsEc2LocalGatewayRouteTables.DataAwsEc2LocalGatewayRouteTables.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsEc2LocalGatewayRouteTables.DataAwsEc2LocalGatewayRouteTables.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.dataAwsEc2LocalGatewayRouteTables.DataAwsEc2LocalGatewayRouteTables.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsEc2LocalGatewayRouteTables.DataAwsEc2LocalGatewayRouteTables.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.dataAwsEc2LocalGatewayRouteTables.DataAwsEc2LocalGatewayRouteTables.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsEc2LocalGatewayRouteTables.DataAwsEc2LocalGatewayRouteTables.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.dataAwsEc2LocalGatewayRouteTables.DataAwsEc2LocalGatewayRouteTables.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsEc2LocalGatewayRouteTables.DataAwsEc2LocalGatewayRouteTables.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.dataAwsEc2LocalGatewayRouteTables.DataAwsEc2LocalGatewayRouteTables.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsEc2LocalGatewayRouteTables.DataAwsEc2LocalGatewayRouteTables.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.dataAwsEc2LocalGatewayRouteTables.DataAwsEc2LocalGatewayRouteTables.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsEc2LocalGatewayRouteTables.DataAwsEc2LocalGatewayRouteTables.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.dataAwsEc2LocalGatewayRouteTables.DataAwsEc2LocalGatewayRouteTables.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsEc2LocalGatewayRouteTables.DataAwsEc2LocalGatewayRouteTables.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="@cdktf/aws-cdk.dataAwsEc2LocalGatewayRouteTables.DataAwsEc2LocalGatewayRouteTables.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataAwsEc2LocalGatewayRouteTablesFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.dataAwsEc2LocalGatewayRouteTables.DataAwsEc2LocalGatewayRouteTables.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.dataAwsEc2LocalGatewayRouteTables.DataAwsEc2LocalGatewayRouteTablesFilter">DataAwsEc2LocalGatewayRouteTablesFilter</a>[]

---

##### `resetFilter` <a name="resetFilter" id="@cdktf/aws-cdk.dataAwsEc2LocalGatewayRouteTables.DataAwsEc2LocalGatewayRouteTables.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="@cdktf/aws-cdk.dataAwsEc2LocalGatewayRouteTables.DataAwsEc2LocalGatewayRouteTables.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/aws-cdk.dataAwsEc2LocalGatewayRouteTables.DataAwsEc2LocalGatewayRouteTables.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2LocalGatewayRouteTables.DataAwsEc2LocalGatewayRouteTables.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2LocalGatewayRouteTables.DataAwsEc2LocalGatewayRouteTables.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2LocalGatewayRouteTables.DataAwsEc2LocalGatewayRouteTables.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2LocalGatewayRouteTables.DataAwsEc2LocalGatewayRouteTables.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataAwsEc2LocalGatewayRouteTables resource upon running "cdktf plan <stack-name>". |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@cdktf/aws-cdk.dataAwsEc2LocalGatewayRouteTables.DataAwsEc2LocalGatewayRouteTables.isConstruct"></a>

```typescript
import { dataAwsEc2LocalGatewayRouteTables } from '@cdktf/aws-cdk'

dataAwsEc2LocalGatewayRouteTables.DataAwsEc2LocalGatewayRouteTables.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.dataAwsEc2LocalGatewayRouteTables.DataAwsEc2LocalGatewayRouteTables.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/aws-cdk.dataAwsEc2LocalGatewayRouteTables.DataAwsEc2LocalGatewayRouteTables.isTerraformElement"></a>

```typescript
import { dataAwsEc2LocalGatewayRouteTables } from '@cdktf/aws-cdk'

dataAwsEc2LocalGatewayRouteTables.DataAwsEc2LocalGatewayRouteTables.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.dataAwsEc2LocalGatewayRouteTables.DataAwsEc2LocalGatewayRouteTables.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/aws-cdk.dataAwsEc2LocalGatewayRouteTables.DataAwsEc2LocalGatewayRouteTables.isTerraformDataSource"></a>

```typescript
import { dataAwsEc2LocalGatewayRouteTables } from '@cdktf/aws-cdk'

dataAwsEc2LocalGatewayRouteTables.DataAwsEc2LocalGatewayRouteTables.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.dataAwsEc2LocalGatewayRouteTables.DataAwsEc2LocalGatewayRouteTables.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/aws-cdk.dataAwsEc2LocalGatewayRouteTables.DataAwsEc2LocalGatewayRouteTables.generateConfigForImport"></a>

```typescript
import { dataAwsEc2LocalGatewayRouteTables } from '@cdktf/aws-cdk'

dataAwsEc2LocalGatewayRouteTables.DataAwsEc2LocalGatewayRouteTables.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataAwsEc2LocalGatewayRouteTables resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.dataAwsEc2LocalGatewayRouteTables.DataAwsEc2LocalGatewayRouteTables.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/aws-cdk.dataAwsEc2LocalGatewayRouteTables.DataAwsEc2LocalGatewayRouteTables.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsEc2LocalGatewayRouteTables to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/aws-cdk.dataAwsEc2LocalGatewayRouteTables.DataAwsEc2LocalGatewayRouteTables.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsEc2LocalGatewayRouteTables that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/ec2_local_gateway_route_tables#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.dataAwsEc2LocalGatewayRouteTables.DataAwsEc2LocalGatewayRouteTables.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsEc2LocalGatewayRouteTables to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2LocalGatewayRouteTables.DataAwsEc2LocalGatewayRouteTables.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2LocalGatewayRouteTables.DataAwsEc2LocalGatewayRouteTables.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2LocalGatewayRouteTables.DataAwsEc2LocalGatewayRouteTables.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2LocalGatewayRouteTables.DataAwsEc2LocalGatewayRouteTables.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2LocalGatewayRouteTables.DataAwsEc2LocalGatewayRouteTables.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2LocalGatewayRouteTables.DataAwsEc2LocalGatewayRouteTables.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2LocalGatewayRouteTables.DataAwsEc2LocalGatewayRouteTables.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2LocalGatewayRouteTables.DataAwsEc2LocalGatewayRouteTables.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2LocalGatewayRouteTables.DataAwsEc2LocalGatewayRouteTables.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2LocalGatewayRouteTables.DataAwsEc2LocalGatewayRouteTables.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2LocalGatewayRouteTables.DataAwsEc2LocalGatewayRouteTables.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2LocalGatewayRouteTables.DataAwsEc2LocalGatewayRouteTables.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2LocalGatewayRouteTables.DataAwsEc2LocalGatewayRouteTables.property.filter">filter</a></code> | <code><a href="#@cdktf/aws-cdk.dataAwsEc2LocalGatewayRouteTables.DataAwsEc2LocalGatewayRouteTablesFilterList">DataAwsEc2LocalGatewayRouteTablesFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2LocalGatewayRouteTables.DataAwsEc2LocalGatewayRouteTables.property.ids">ids</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2LocalGatewayRouteTables.DataAwsEc2LocalGatewayRouteTables.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.dataAwsEc2LocalGatewayRouteTables.DataAwsEc2LocalGatewayRouteTablesFilter">DataAwsEc2LocalGatewayRouteTablesFilter</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2LocalGatewayRouteTables.DataAwsEc2LocalGatewayRouteTables.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2LocalGatewayRouteTables.DataAwsEc2LocalGatewayRouteTables.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2LocalGatewayRouteTables.DataAwsEc2LocalGatewayRouteTables.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2LocalGatewayRouteTables.DataAwsEc2LocalGatewayRouteTables.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/aws-cdk.dataAwsEc2LocalGatewayRouteTables.DataAwsEc2LocalGatewayRouteTables.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/aws-cdk.dataAwsEc2LocalGatewayRouteTables.DataAwsEc2LocalGatewayRouteTables.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.dataAwsEc2LocalGatewayRouteTables.DataAwsEc2LocalGatewayRouteTables.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/aws-cdk.dataAwsEc2LocalGatewayRouteTables.DataAwsEc2LocalGatewayRouteTables.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/aws-cdk.dataAwsEc2LocalGatewayRouteTables.DataAwsEc2LocalGatewayRouteTables.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/aws-cdk.dataAwsEc2LocalGatewayRouteTables.DataAwsEc2LocalGatewayRouteTables.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/aws-cdk.dataAwsEc2LocalGatewayRouteTables.DataAwsEc2LocalGatewayRouteTables.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.dataAwsEc2LocalGatewayRouteTables.DataAwsEc2LocalGatewayRouteTables.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.dataAwsEc2LocalGatewayRouteTables.DataAwsEc2LocalGatewayRouteTables.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.dataAwsEc2LocalGatewayRouteTables.DataAwsEc2LocalGatewayRouteTables.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.dataAwsEc2LocalGatewayRouteTables.DataAwsEc2LocalGatewayRouteTables.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.dataAwsEc2LocalGatewayRouteTables.DataAwsEc2LocalGatewayRouteTables.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/aws-cdk.dataAwsEc2LocalGatewayRouteTables.DataAwsEc2LocalGatewayRouteTables.property.filter"></a>

```typescript
public readonly filter: DataAwsEc2LocalGatewayRouteTablesFilterList;
```

- *Type:* <a href="#@cdktf/aws-cdk.dataAwsEc2LocalGatewayRouteTables.DataAwsEc2LocalGatewayRouteTablesFilterList">DataAwsEc2LocalGatewayRouteTablesFilterList</a>

---

##### `ids`<sup>Required</sup> <a name="ids" id="@cdktf/aws-cdk.dataAwsEc2LocalGatewayRouteTables.DataAwsEc2LocalGatewayRouteTables.property.ids"></a>

```typescript
public readonly ids: string[];
```

- *Type:* string[]

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktf/aws-cdk.dataAwsEc2LocalGatewayRouteTables.DataAwsEc2LocalGatewayRouteTables.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataAwsEc2LocalGatewayRouteTablesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.dataAwsEc2LocalGatewayRouteTables.DataAwsEc2LocalGatewayRouteTablesFilter">DataAwsEc2LocalGatewayRouteTablesFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/aws-cdk.dataAwsEc2LocalGatewayRouteTables.DataAwsEc2LocalGatewayRouteTables.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/aws-cdk.dataAwsEc2LocalGatewayRouteTables.DataAwsEc2LocalGatewayRouteTables.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.dataAwsEc2LocalGatewayRouteTables.DataAwsEc2LocalGatewayRouteTables.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/aws-cdk.dataAwsEc2LocalGatewayRouteTables.DataAwsEc2LocalGatewayRouteTables.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2LocalGatewayRouteTables.DataAwsEc2LocalGatewayRouteTables.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/aws-cdk.dataAwsEc2LocalGatewayRouteTables.DataAwsEc2LocalGatewayRouteTables.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsEc2LocalGatewayRouteTablesConfig <a name="DataAwsEc2LocalGatewayRouteTablesConfig" id="@cdktf/aws-cdk.dataAwsEc2LocalGatewayRouteTables.DataAwsEc2LocalGatewayRouteTablesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.dataAwsEc2LocalGatewayRouteTables.DataAwsEc2LocalGatewayRouteTablesConfig.Initializer"></a>

```typescript
import { dataAwsEc2LocalGatewayRouteTables } from '@cdktf/aws-cdk'

const dataAwsEc2LocalGatewayRouteTablesConfig: dataAwsEc2LocalGatewayRouteTables.DataAwsEc2LocalGatewayRouteTablesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2LocalGatewayRouteTables.DataAwsEc2LocalGatewayRouteTablesConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2LocalGatewayRouteTables.DataAwsEc2LocalGatewayRouteTablesConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2LocalGatewayRouteTables.DataAwsEc2LocalGatewayRouteTablesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2LocalGatewayRouteTables.DataAwsEc2LocalGatewayRouteTablesConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2LocalGatewayRouteTables.DataAwsEc2LocalGatewayRouteTablesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2LocalGatewayRouteTables.DataAwsEc2LocalGatewayRouteTablesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2LocalGatewayRouteTables.DataAwsEc2LocalGatewayRouteTablesConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2LocalGatewayRouteTables.DataAwsEc2LocalGatewayRouteTablesConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.dataAwsEc2LocalGatewayRouteTables.DataAwsEc2LocalGatewayRouteTablesFilter">DataAwsEc2LocalGatewayRouteTablesFilter</a>[]</code> | filter block. |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2LocalGatewayRouteTables.DataAwsEc2LocalGatewayRouteTablesConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/ec2_local_gateway_route_tables#id DataAwsEc2LocalGatewayRouteTables#id}. |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2LocalGatewayRouteTables.DataAwsEc2LocalGatewayRouteTablesConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/ec2_local_gateway_route_tables#tags DataAwsEc2LocalGatewayRouteTables#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.dataAwsEc2LocalGatewayRouteTables.DataAwsEc2LocalGatewayRouteTablesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.dataAwsEc2LocalGatewayRouteTables.DataAwsEc2LocalGatewayRouteTablesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.dataAwsEc2LocalGatewayRouteTables.DataAwsEc2LocalGatewayRouteTablesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.dataAwsEc2LocalGatewayRouteTables.DataAwsEc2LocalGatewayRouteTablesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.dataAwsEc2LocalGatewayRouteTables.DataAwsEc2LocalGatewayRouteTablesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.dataAwsEc2LocalGatewayRouteTables.DataAwsEc2LocalGatewayRouteTablesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.dataAwsEc2LocalGatewayRouteTables.DataAwsEc2LocalGatewayRouteTablesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/aws-cdk.dataAwsEc2LocalGatewayRouteTables.DataAwsEc2LocalGatewayRouteTablesConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataAwsEc2LocalGatewayRouteTablesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.dataAwsEc2LocalGatewayRouteTables.DataAwsEc2LocalGatewayRouteTablesFilter">DataAwsEc2LocalGatewayRouteTablesFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/ec2_local_gateway_route_tables#filter DataAwsEc2LocalGatewayRouteTables#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/aws-cdk.dataAwsEc2LocalGatewayRouteTables.DataAwsEc2LocalGatewayRouteTablesConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/ec2_local_gateway_route_tables#id DataAwsEc2LocalGatewayRouteTables#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/aws-cdk.dataAwsEc2LocalGatewayRouteTables.DataAwsEc2LocalGatewayRouteTablesConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/ec2_local_gateway_route_tables#tags DataAwsEc2LocalGatewayRouteTables#tags}.

---

### DataAwsEc2LocalGatewayRouteTablesFilter <a name="DataAwsEc2LocalGatewayRouteTablesFilter" id="@cdktf/aws-cdk.dataAwsEc2LocalGatewayRouteTables.DataAwsEc2LocalGatewayRouteTablesFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.dataAwsEc2LocalGatewayRouteTables.DataAwsEc2LocalGatewayRouteTablesFilter.Initializer"></a>

```typescript
import { dataAwsEc2LocalGatewayRouteTables } from '@cdktf/aws-cdk'

const dataAwsEc2LocalGatewayRouteTablesFilter: dataAwsEc2LocalGatewayRouteTables.DataAwsEc2LocalGatewayRouteTablesFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2LocalGatewayRouteTables.DataAwsEc2LocalGatewayRouteTablesFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/ec2_local_gateway_route_tables#name DataAwsEc2LocalGatewayRouteTables#name}. |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2LocalGatewayRouteTables.DataAwsEc2LocalGatewayRouteTablesFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/ec2_local_gateway_route_tables#values DataAwsEc2LocalGatewayRouteTables#values}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/aws-cdk.dataAwsEc2LocalGatewayRouteTables.DataAwsEc2LocalGatewayRouteTablesFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/ec2_local_gateway_route_tables#name DataAwsEc2LocalGatewayRouteTables#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/aws-cdk.dataAwsEc2LocalGatewayRouteTables.DataAwsEc2LocalGatewayRouteTablesFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/data-sources/ec2_local_gateway_route_tables#values DataAwsEc2LocalGatewayRouteTables#values}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAwsEc2LocalGatewayRouteTablesFilterList <a name="DataAwsEc2LocalGatewayRouteTablesFilterList" id="@cdktf/aws-cdk.dataAwsEc2LocalGatewayRouteTables.DataAwsEc2LocalGatewayRouteTablesFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.dataAwsEc2LocalGatewayRouteTables.DataAwsEc2LocalGatewayRouteTablesFilterList.Initializer"></a>

```typescript
import { dataAwsEc2LocalGatewayRouteTables } from '@cdktf/aws-cdk'

new dataAwsEc2LocalGatewayRouteTables.DataAwsEc2LocalGatewayRouteTablesFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2LocalGatewayRouteTables.DataAwsEc2LocalGatewayRouteTablesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2LocalGatewayRouteTables.DataAwsEc2LocalGatewayRouteTablesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2LocalGatewayRouteTables.DataAwsEc2LocalGatewayRouteTablesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.dataAwsEc2LocalGatewayRouteTables.DataAwsEc2LocalGatewayRouteTablesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsEc2LocalGatewayRouteTables.DataAwsEc2LocalGatewayRouteTablesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/aws-cdk.dataAwsEc2LocalGatewayRouteTables.DataAwsEc2LocalGatewayRouteTablesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2LocalGatewayRouteTables.DataAwsEc2LocalGatewayRouteTablesFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2LocalGatewayRouteTables.DataAwsEc2LocalGatewayRouteTablesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2LocalGatewayRouteTables.DataAwsEc2LocalGatewayRouteTablesFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2LocalGatewayRouteTables.DataAwsEc2LocalGatewayRouteTablesFilterList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.dataAwsEc2LocalGatewayRouteTables.DataAwsEc2LocalGatewayRouteTablesFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.dataAwsEc2LocalGatewayRouteTables.DataAwsEc2LocalGatewayRouteTablesFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.dataAwsEc2LocalGatewayRouteTables.DataAwsEc2LocalGatewayRouteTablesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.dataAwsEc2LocalGatewayRouteTables.DataAwsEc2LocalGatewayRouteTablesFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/aws-cdk.dataAwsEc2LocalGatewayRouteTables.DataAwsEc2LocalGatewayRouteTablesFilterList.get"></a>

```typescript
public get(index: number): DataAwsEc2LocalGatewayRouteTablesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/aws-cdk.dataAwsEc2LocalGatewayRouteTables.DataAwsEc2LocalGatewayRouteTablesFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2LocalGatewayRouteTables.DataAwsEc2LocalGatewayRouteTablesFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2LocalGatewayRouteTables.DataAwsEc2LocalGatewayRouteTablesFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2LocalGatewayRouteTables.DataAwsEc2LocalGatewayRouteTablesFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.dataAwsEc2LocalGatewayRouteTables.DataAwsEc2LocalGatewayRouteTablesFilter">DataAwsEc2LocalGatewayRouteTablesFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.dataAwsEc2LocalGatewayRouteTables.DataAwsEc2LocalGatewayRouteTablesFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.dataAwsEc2LocalGatewayRouteTables.DataAwsEc2LocalGatewayRouteTablesFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.dataAwsEc2LocalGatewayRouteTables.DataAwsEc2LocalGatewayRouteTablesFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataAwsEc2LocalGatewayRouteTablesFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.dataAwsEc2LocalGatewayRouteTables.DataAwsEc2LocalGatewayRouteTablesFilter">DataAwsEc2LocalGatewayRouteTablesFilter</a>[]

---


### DataAwsEc2LocalGatewayRouteTablesFilterOutputReference <a name="DataAwsEc2LocalGatewayRouteTablesFilterOutputReference" id="@cdktf/aws-cdk.dataAwsEc2LocalGatewayRouteTables.DataAwsEc2LocalGatewayRouteTablesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.dataAwsEc2LocalGatewayRouteTables.DataAwsEc2LocalGatewayRouteTablesFilterOutputReference.Initializer"></a>

```typescript
import { dataAwsEc2LocalGatewayRouteTables } from '@cdktf/aws-cdk'

new dataAwsEc2LocalGatewayRouteTables.DataAwsEc2LocalGatewayRouteTablesFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2LocalGatewayRouteTables.DataAwsEc2LocalGatewayRouteTablesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2LocalGatewayRouteTables.DataAwsEc2LocalGatewayRouteTablesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2LocalGatewayRouteTables.DataAwsEc2LocalGatewayRouteTablesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2LocalGatewayRouteTables.DataAwsEc2LocalGatewayRouteTablesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.dataAwsEc2LocalGatewayRouteTables.DataAwsEc2LocalGatewayRouteTablesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsEc2LocalGatewayRouteTables.DataAwsEc2LocalGatewayRouteTablesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/aws-cdk.dataAwsEc2LocalGatewayRouteTables.DataAwsEc2LocalGatewayRouteTablesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/aws-cdk.dataAwsEc2LocalGatewayRouteTables.DataAwsEc2LocalGatewayRouteTablesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2LocalGatewayRouteTables.DataAwsEc2LocalGatewayRouteTablesFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2LocalGatewayRouteTables.DataAwsEc2LocalGatewayRouteTablesFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2LocalGatewayRouteTables.DataAwsEc2LocalGatewayRouteTablesFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2LocalGatewayRouteTables.DataAwsEc2LocalGatewayRouteTablesFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2LocalGatewayRouteTables.DataAwsEc2LocalGatewayRouteTablesFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2LocalGatewayRouteTables.DataAwsEc2LocalGatewayRouteTablesFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2LocalGatewayRouteTables.DataAwsEc2LocalGatewayRouteTablesFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2LocalGatewayRouteTables.DataAwsEc2LocalGatewayRouteTablesFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2LocalGatewayRouteTables.DataAwsEc2LocalGatewayRouteTablesFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2LocalGatewayRouteTables.DataAwsEc2LocalGatewayRouteTablesFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2LocalGatewayRouteTables.DataAwsEc2LocalGatewayRouteTablesFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2LocalGatewayRouteTables.DataAwsEc2LocalGatewayRouteTablesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2LocalGatewayRouteTables.DataAwsEc2LocalGatewayRouteTablesFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.dataAwsEc2LocalGatewayRouteTables.DataAwsEc2LocalGatewayRouteTablesFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.dataAwsEc2LocalGatewayRouteTables.DataAwsEc2LocalGatewayRouteTablesFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsEc2LocalGatewayRouteTables.DataAwsEc2LocalGatewayRouteTablesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.dataAwsEc2LocalGatewayRouteTables.DataAwsEc2LocalGatewayRouteTablesFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsEc2LocalGatewayRouteTables.DataAwsEc2LocalGatewayRouteTablesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.dataAwsEc2LocalGatewayRouteTables.DataAwsEc2LocalGatewayRouteTablesFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsEc2LocalGatewayRouteTables.DataAwsEc2LocalGatewayRouteTablesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.dataAwsEc2LocalGatewayRouteTables.DataAwsEc2LocalGatewayRouteTablesFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsEc2LocalGatewayRouteTables.DataAwsEc2LocalGatewayRouteTablesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.dataAwsEc2LocalGatewayRouteTables.DataAwsEc2LocalGatewayRouteTablesFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsEc2LocalGatewayRouteTables.DataAwsEc2LocalGatewayRouteTablesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.dataAwsEc2LocalGatewayRouteTables.DataAwsEc2LocalGatewayRouteTablesFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsEc2LocalGatewayRouteTables.DataAwsEc2LocalGatewayRouteTablesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.dataAwsEc2LocalGatewayRouteTables.DataAwsEc2LocalGatewayRouteTablesFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsEc2LocalGatewayRouteTables.DataAwsEc2LocalGatewayRouteTablesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.dataAwsEc2LocalGatewayRouteTables.DataAwsEc2LocalGatewayRouteTablesFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsEc2LocalGatewayRouteTables.DataAwsEc2LocalGatewayRouteTablesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.dataAwsEc2LocalGatewayRouteTables.DataAwsEc2LocalGatewayRouteTablesFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.dataAwsEc2LocalGatewayRouteTables.DataAwsEc2LocalGatewayRouteTablesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.dataAwsEc2LocalGatewayRouteTables.DataAwsEc2LocalGatewayRouteTablesFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.dataAwsEc2LocalGatewayRouteTables.DataAwsEc2LocalGatewayRouteTablesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.dataAwsEc2LocalGatewayRouteTables.DataAwsEc2LocalGatewayRouteTablesFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.dataAwsEc2LocalGatewayRouteTables.DataAwsEc2LocalGatewayRouteTablesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.dataAwsEc2LocalGatewayRouteTables.DataAwsEc2LocalGatewayRouteTablesFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2LocalGatewayRouteTables.DataAwsEc2LocalGatewayRouteTablesFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2LocalGatewayRouteTables.DataAwsEc2LocalGatewayRouteTablesFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2LocalGatewayRouteTables.DataAwsEc2LocalGatewayRouteTablesFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2LocalGatewayRouteTables.DataAwsEc2LocalGatewayRouteTablesFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2LocalGatewayRouteTables.DataAwsEc2LocalGatewayRouteTablesFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2LocalGatewayRouteTables.DataAwsEc2LocalGatewayRouteTablesFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.dataAwsEc2LocalGatewayRouteTables.DataAwsEc2LocalGatewayRouteTablesFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.dataAwsEc2LocalGatewayRouteTables.DataAwsEc2LocalGatewayRouteTablesFilter">DataAwsEc2LocalGatewayRouteTablesFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.dataAwsEc2LocalGatewayRouteTables.DataAwsEc2LocalGatewayRouteTablesFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.dataAwsEc2LocalGatewayRouteTables.DataAwsEc2LocalGatewayRouteTablesFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/aws-cdk.dataAwsEc2LocalGatewayRouteTables.DataAwsEc2LocalGatewayRouteTablesFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/aws-cdk.dataAwsEc2LocalGatewayRouteTables.DataAwsEc2LocalGatewayRouteTablesFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/aws-cdk.dataAwsEc2LocalGatewayRouteTables.DataAwsEc2LocalGatewayRouteTablesFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/aws-cdk.dataAwsEc2LocalGatewayRouteTables.DataAwsEc2LocalGatewayRouteTablesFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.dataAwsEc2LocalGatewayRouteTables.DataAwsEc2LocalGatewayRouteTablesFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataAwsEc2LocalGatewayRouteTablesFilter;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.dataAwsEc2LocalGatewayRouteTables.DataAwsEc2LocalGatewayRouteTablesFilter">DataAwsEc2LocalGatewayRouteTablesFilter</a>

---



