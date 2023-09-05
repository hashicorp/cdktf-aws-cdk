# `aws_default_route_table`

Refer to the Terraform Registory for docs: [`aws_default_route_table`](https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/default_route_table).

# `defaultRouteTable` Submodule <a name="`defaultRouteTable` Submodule" id="@cdktf/aws-cdk.defaultRouteTable"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DefaultRouteTable <a name="DefaultRouteTable" id="@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTable"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/default_route_table aws_default_route_table}.

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTable.Initializer"></a>

```typescript
import { defaultRouteTable } from '@cdktf/aws-cdk'

new defaultRouteTable.DefaultRouteTable(scope: Construct, id: string, config: DefaultRouteTableConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTable.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTable.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTable.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableConfig">DefaultRouteTableConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTable.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTable.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTable.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableConfig">DefaultRouteTableConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTable.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTable.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTable.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTable.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTable.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTable.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTable.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTable.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTable.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTable.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTable.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTable.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTable.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTable.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTable.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTable.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTable.putRoute">putRoute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTable.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTable.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTable.resetPropagatingVgws">resetPropagatingVgws</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTable.resetRoute">resetRoute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTable.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTable.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTable.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTable.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTable.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTable.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTable.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTable.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTable.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTable.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTable.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTable.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTable.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTable.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTable.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTable.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTable.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTable.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTable.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTable.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTable.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTable.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTable.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTable.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTable.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTable.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTable.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTable.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTable.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTable.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTable.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTable.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putRoute` <a name="putRoute" id="@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTable.putRoute"></a>

```typescript
public putRoute(value: IResolvable | DefaultRouteTableRoute[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTable.putRoute.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableRoute">DefaultRouteTableRoute</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTable.putTimeouts"></a>

```typescript
public putTimeouts(value: DefaultRouteTableTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTable.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableTimeouts">DefaultRouteTableTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTable.resetId"></a>

```typescript
public resetId(): void
```

##### `resetPropagatingVgws` <a name="resetPropagatingVgws" id="@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTable.resetPropagatingVgws"></a>

```typescript
public resetPropagatingVgws(): void
```

##### `resetRoute` <a name="resetRoute" id="@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTable.resetRoute"></a>

```typescript
public resetRoute(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTable.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTable.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTable.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTable.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTable.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTable.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTable.isConstruct"></a>

```typescript
import { defaultRouteTable } from '@cdktf/aws-cdk'

defaultRouteTable.DefaultRouteTable.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTable.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTable.isTerraformElement"></a>

```typescript
import { defaultRouteTable } from '@cdktf/aws-cdk'

defaultRouteTable.DefaultRouteTable.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTable.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTable.isTerraformResource"></a>

```typescript
import { defaultRouteTable } from '@cdktf/aws-cdk'

defaultRouteTable.DefaultRouteTable.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTable.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTable.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTable.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTable.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTable.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTable.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTable.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTable.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTable.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTable.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTable.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTable.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTable.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTable.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTable.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTable.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTable.property.ownerId">ownerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTable.property.route">route</a></code> | <code><a href="#@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableRouteList">DefaultRouteTableRouteList</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTable.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableTimeoutsOutputReference">DefaultRouteTableTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTable.property.vpcId">vpcId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTable.property.defaultRouteTableIdInput">defaultRouteTableIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTable.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTable.property.propagatingVgwsInput">propagatingVgwsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTable.property.routeInput">routeInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableRoute">DefaultRouteTableRoute</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTable.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTable.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTable.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableTimeouts">DefaultRouteTableTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTable.property.defaultRouteTableId">defaultRouteTableId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTable.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTable.property.propagatingVgws">propagatingVgws</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTable.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTable.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTable.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTable.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTable.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTable.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTable.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTable.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTable.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTable.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTable.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTable.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTable.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTable.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTable.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTable.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTable.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `ownerId`<sup>Required</sup> <a name="ownerId" id="@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTable.property.ownerId"></a>

```typescript
public readonly ownerId: string;
```

- *Type:* string

---

##### `route`<sup>Required</sup> <a name="route" id="@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTable.property.route"></a>

```typescript
public readonly route: DefaultRouteTableRouteList;
```

- *Type:* <a href="#@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableRouteList">DefaultRouteTableRouteList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTable.property.timeouts"></a>

```typescript
public readonly timeouts: DefaultRouteTableTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableTimeoutsOutputReference">DefaultRouteTableTimeoutsOutputReference</a>

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTable.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

---

##### `defaultRouteTableIdInput`<sup>Optional</sup> <a name="defaultRouteTableIdInput" id="@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTable.property.defaultRouteTableIdInput"></a>

```typescript
public readonly defaultRouteTableIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTable.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `propagatingVgwsInput`<sup>Optional</sup> <a name="propagatingVgwsInput" id="@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTable.property.propagatingVgwsInput"></a>

```typescript
public readonly propagatingVgwsInput: string[];
```

- *Type:* string[]

---

##### `routeInput`<sup>Optional</sup> <a name="routeInput" id="@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTable.property.routeInput"></a>

```typescript
public readonly routeInput: IResolvable | DefaultRouteTableRoute[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableRoute">DefaultRouteTableRoute</a>[]

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTable.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTable.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTable.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DefaultRouteTableTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableTimeouts">DefaultRouteTableTimeouts</a>

---

##### `defaultRouteTableId`<sup>Required</sup> <a name="defaultRouteTableId" id="@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTable.property.defaultRouteTableId"></a>

```typescript
public readonly defaultRouteTableId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTable.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `propagatingVgws`<sup>Required</sup> <a name="propagatingVgws" id="@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTable.property.propagatingVgws"></a>

```typescript
public readonly propagatingVgws: string[];
```

- *Type:* string[]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTable.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTable.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTable.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTable.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DefaultRouteTableConfig <a name="DefaultRouteTableConfig" id="@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableConfig.Initializer"></a>

```typescript
import { defaultRouteTable } from '@cdktf/aws-cdk'

const defaultRouteTableConfig: defaultRouteTable.DefaultRouteTableConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableConfig.property.defaultRouteTableId">defaultRouteTableId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/default_route_table#default_route_table_id DefaultRouteTable#default_route_table_id}. |
| <code><a href="#@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/default_route_table#id DefaultRouteTable#id}. |
| <code><a href="#@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableConfig.property.propagatingVgws">propagatingVgws</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/default_route_table#propagating_vgws DefaultRouteTable#propagating_vgws}. |
| <code><a href="#@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableConfig.property.route">route</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableRoute">DefaultRouteTableRoute</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/default_route_table#route DefaultRouteTable#route}. |
| <code><a href="#@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/default_route_table#tags DefaultRouteTable#tags}. |
| <code><a href="#@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/default_route_table#tags_all DefaultRouteTable#tags_all}. |
| <code><a href="#@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableTimeouts">DefaultRouteTableTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `defaultRouteTableId`<sup>Required</sup> <a name="defaultRouteTableId" id="@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableConfig.property.defaultRouteTableId"></a>

```typescript
public readonly defaultRouteTableId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/default_route_table#default_route_table_id DefaultRouteTable#default_route_table_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/default_route_table#id DefaultRouteTable#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `propagatingVgws`<sup>Optional</sup> <a name="propagatingVgws" id="@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableConfig.property.propagatingVgws"></a>

```typescript
public readonly propagatingVgws: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/default_route_table#propagating_vgws DefaultRouteTable#propagating_vgws}.

---

##### `route`<sup>Optional</sup> <a name="route" id="@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableConfig.property.route"></a>

```typescript
public readonly route: IResolvable | DefaultRouteTableRoute[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableRoute">DefaultRouteTableRoute</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/default_route_table#route DefaultRouteTable#route}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/default_route_table#tags DefaultRouteTable#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/default_route_table#tags_all DefaultRouteTable#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DefaultRouteTableTimeouts;
```

- *Type:* <a href="#@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableTimeouts">DefaultRouteTableTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/default_route_table#timeouts DefaultRouteTable#timeouts}

---

### DefaultRouteTableRoute <a name="DefaultRouteTableRoute" id="@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableRoute"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableRoute.Initializer"></a>

```typescript
import { defaultRouteTable } from '@cdktf/aws-cdk'

const defaultRouteTableRoute: defaultRouteTable.DefaultRouteTableRoute = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableRoute.property.cidrBlock">cidrBlock</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/default_route_table#cidr_block DefaultRouteTable#cidr_block}. |
| <code><a href="#@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableRoute.property.destinationPrefixListId">destinationPrefixListId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/default_route_table#destination_prefix_list_id DefaultRouteTable#destination_prefix_list_id}. |
| <code><a href="#@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableRoute.property.egressOnlyGatewayId">egressOnlyGatewayId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/default_route_table#egress_only_gateway_id DefaultRouteTable#egress_only_gateway_id}. |
| <code><a href="#@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableRoute.property.gatewayId">gatewayId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/default_route_table#gateway_id DefaultRouteTable#gateway_id}. |
| <code><a href="#@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableRoute.property.instanceId">instanceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/default_route_table#instance_id DefaultRouteTable#instance_id}. |
| <code><a href="#@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableRoute.property.ipv6CidrBlock">ipv6CidrBlock</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/default_route_table#ipv6_cidr_block DefaultRouteTable#ipv6_cidr_block}. |
| <code><a href="#@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableRoute.property.natGatewayId">natGatewayId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/default_route_table#nat_gateway_id DefaultRouteTable#nat_gateway_id}. |
| <code><a href="#@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableRoute.property.networkInterfaceId">networkInterfaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/default_route_table#network_interface_id DefaultRouteTable#network_interface_id}. |
| <code><a href="#@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableRoute.property.transitGatewayId">transitGatewayId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/default_route_table#transit_gateway_id DefaultRouteTable#transit_gateway_id}. |
| <code><a href="#@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableRoute.property.vpcEndpointId">vpcEndpointId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/default_route_table#vpc_endpoint_id DefaultRouteTable#vpc_endpoint_id}. |
| <code><a href="#@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableRoute.property.vpcPeeringConnectionId">vpcPeeringConnectionId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/default_route_table#vpc_peering_connection_id DefaultRouteTable#vpc_peering_connection_id}. |

---

##### `cidrBlock`<sup>Optional</sup> <a name="cidrBlock" id="@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableRoute.property.cidrBlock"></a>

```typescript
public readonly cidrBlock: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/default_route_table#cidr_block DefaultRouteTable#cidr_block}.

---

##### `destinationPrefixListId`<sup>Optional</sup> <a name="destinationPrefixListId" id="@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableRoute.property.destinationPrefixListId"></a>

```typescript
public readonly destinationPrefixListId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/default_route_table#destination_prefix_list_id DefaultRouteTable#destination_prefix_list_id}.

---

##### `egressOnlyGatewayId`<sup>Optional</sup> <a name="egressOnlyGatewayId" id="@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableRoute.property.egressOnlyGatewayId"></a>

```typescript
public readonly egressOnlyGatewayId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/default_route_table#egress_only_gateway_id DefaultRouteTable#egress_only_gateway_id}.

---

##### `gatewayId`<sup>Optional</sup> <a name="gatewayId" id="@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableRoute.property.gatewayId"></a>

```typescript
public readonly gatewayId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/default_route_table#gateway_id DefaultRouteTable#gateway_id}.

---

##### `instanceId`<sup>Optional</sup> <a name="instanceId" id="@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableRoute.property.instanceId"></a>

```typescript
public readonly instanceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/default_route_table#instance_id DefaultRouteTable#instance_id}.

---

##### `ipv6CidrBlock`<sup>Optional</sup> <a name="ipv6CidrBlock" id="@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableRoute.property.ipv6CidrBlock"></a>

```typescript
public readonly ipv6CidrBlock: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/default_route_table#ipv6_cidr_block DefaultRouteTable#ipv6_cidr_block}.

---

##### `natGatewayId`<sup>Optional</sup> <a name="natGatewayId" id="@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableRoute.property.natGatewayId"></a>

```typescript
public readonly natGatewayId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/default_route_table#nat_gateway_id DefaultRouteTable#nat_gateway_id}.

---

##### `networkInterfaceId`<sup>Optional</sup> <a name="networkInterfaceId" id="@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableRoute.property.networkInterfaceId"></a>

```typescript
public readonly networkInterfaceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/default_route_table#network_interface_id DefaultRouteTable#network_interface_id}.

---

##### `transitGatewayId`<sup>Optional</sup> <a name="transitGatewayId" id="@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableRoute.property.transitGatewayId"></a>

```typescript
public readonly transitGatewayId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/default_route_table#transit_gateway_id DefaultRouteTable#transit_gateway_id}.

---

##### `vpcEndpointId`<sup>Optional</sup> <a name="vpcEndpointId" id="@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableRoute.property.vpcEndpointId"></a>

```typescript
public readonly vpcEndpointId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/default_route_table#vpc_endpoint_id DefaultRouteTable#vpc_endpoint_id}.

---

##### `vpcPeeringConnectionId`<sup>Optional</sup> <a name="vpcPeeringConnectionId" id="@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableRoute.property.vpcPeeringConnectionId"></a>

```typescript
public readonly vpcPeeringConnectionId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/default_route_table#vpc_peering_connection_id DefaultRouteTable#vpc_peering_connection_id}.

---

### DefaultRouteTableTimeouts <a name="DefaultRouteTableTimeouts" id="@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableTimeouts.Initializer"></a>

```typescript
import { defaultRouteTable } from '@cdktf/aws-cdk'

const defaultRouteTableTimeouts: defaultRouteTable.DefaultRouteTableTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/default_route_table#create DefaultRouteTable#create}. |
| <code><a href="#@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/default_route_table#update DefaultRouteTable#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/default_route_table#create DefaultRouteTable#create}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/default_route_table#update DefaultRouteTable#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DefaultRouteTableRouteList <a name="DefaultRouteTableRouteList" id="@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableRouteList"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableRouteList.Initializer"></a>

```typescript
import { defaultRouteTable } from '@cdktf/aws-cdk'

new defaultRouteTable.DefaultRouteTableRouteList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableRouteList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableRouteList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableRouteList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableRouteList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableRouteList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableRouteList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableRouteList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableRouteList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableRouteList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableRouteList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableRouteList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableRouteList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableRouteList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableRouteList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableRouteList.get"></a>

```typescript
public get(index: number): DefaultRouteTableRouteOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableRouteList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableRouteList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableRouteList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableRouteList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableRoute">DefaultRouteTableRoute</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableRouteList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableRouteList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableRouteList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DefaultRouteTableRoute[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableRoute">DefaultRouteTableRoute</a>[]

---


### DefaultRouteTableRouteOutputReference <a name="DefaultRouteTableRouteOutputReference" id="@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableRouteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableRouteOutputReference.Initializer"></a>

```typescript
import { defaultRouteTable } from '@cdktf/aws-cdk'

new defaultRouteTable.DefaultRouteTableRouteOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableRouteOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableRouteOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableRouteOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableRouteOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableRouteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableRouteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableRouteOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableRouteOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableRouteOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableRouteOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableRouteOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableRouteOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableRouteOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableRouteOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableRouteOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableRouteOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableRouteOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableRouteOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableRouteOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableRouteOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableRouteOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableRouteOutputReference.resetCidrBlock">resetCidrBlock</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableRouteOutputReference.resetDestinationPrefixListId">resetDestinationPrefixListId</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableRouteOutputReference.resetEgressOnlyGatewayId">resetEgressOnlyGatewayId</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableRouteOutputReference.resetGatewayId">resetGatewayId</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableRouteOutputReference.resetInstanceId">resetInstanceId</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableRouteOutputReference.resetIpv6CidrBlock">resetIpv6CidrBlock</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableRouteOutputReference.resetNatGatewayId">resetNatGatewayId</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableRouteOutputReference.resetNetworkInterfaceId">resetNetworkInterfaceId</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableRouteOutputReference.resetTransitGatewayId">resetTransitGatewayId</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableRouteOutputReference.resetVpcEndpointId">resetVpcEndpointId</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableRouteOutputReference.resetVpcPeeringConnectionId">resetVpcPeeringConnectionId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableRouteOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableRouteOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableRouteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableRouteOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableRouteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableRouteOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableRouteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableRouteOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableRouteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableRouteOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableRouteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableRouteOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableRouteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableRouteOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableRouteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableRouteOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableRouteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableRouteOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableRouteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableRouteOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableRouteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableRouteOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableRouteOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableRouteOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCidrBlock` <a name="resetCidrBlock" id="@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableRouteOutputReference.resetCidrBlock"></a>

```typescript
public resetCidrBlock(): void
```

##### `resetDestinationPrefixListId` <a name="resetDestinationPrefixListId" id="@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableRouteOutputReference.resetDestinationPrefixListId"></a>

```typescript
public resetDestinationPrefixListId(): void
```

##### `resetEgressOnlyGatewayId` <a name="resetEgressOnlyGatewayId" id="@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableRouteOutputReference.resetEgressOnlyGatewayId"></a>

```typescript
public resetEgressOnlyGatewayId(): void
```

##### `resetGatewayId` <a name="resetGatewayId" id="@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableRouteOutputReference.resetGatewayId"></a>

```typescript
public resetGatewayId(): void
```

##### `resetInstanceId` <a name="resetInstanceId" id="@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableRouteOutputReference.resetInstanceId"></a>

```typescript
public resetInstanceId(): void
```

##### `resetIpv6CidrBlock` <a name="resetIpv6CidrBlock" id="@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableRouteOutputReference.resetIpv6CidrBlock"></a>

```typescript
public resetIpv6CidrBlock(): void
```

##### `resetNatGatewayId` <a name="resetNatGatewayId" id="@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableRouteOutputReference.resetNatGatewayId"></a>

```typescript
public resetNatGatewayId(): void
```

##### `resetNetworkInterfaceId` <a name="resetNetworkInterfaceId" id="@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableRouteOutputReference.resetNetworkInterfaceId"></a>

```typescript
public resetNetworkInterfaceId(): void
```

##### `resetTransitGatewayId` <a name="resetTransitGatewayId" id="@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableRouteOutputReference.resetTransitGatewayId"></a>

```typescript
public resetTransitGatewayId(): void
```

##### `resetVpcEndpointId` <a name="resetVpcEndpointId" id="@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableRouteOutputReference.resetVpcEndpointId"></a>

```typescript
public resetVpcEndpointId(): void
```

##### `resetVpcPeeringConnectionId` <a name="resetVpcPeeringConnectionId" id="@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableRouteOutputReference.resetVpcPeeringConnectionId"></a>

```typescript
public resetVpcPeeringConnectionId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableRouteOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableRouteOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableRouteOutputReference.property.cidrBlockInput">cidrBlockInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableRouteOutputReference.property.destinationPrefixListIdInput">destinationPrefixListIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableRouteOutputReference.property.egressOnlyGatewayIdInput">egressOnlyGatewayIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableRouteOutputReference.property.gatewayIdInput">gatewayIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableRouteOutputReference.property.instanceIdInput">instanceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableRouteOutputReference.property.ipv6CidrBlockInput">ipv6CidrBlockInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableRouteOutputReference.property.natGatewayIdInput">natGatewayIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableRouteOutputReference.property.networkInterfaceIdInput">networkInterfaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableRouteOutputReference.property.transitGatewayIdInput">transitGatewayIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableRouteOutputReference.property.vpcEndpointIdInput">vpcEndpointIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableRouteOutputReference.property.vpcPeeringConnectionIdInput">vpcPeeringConnectionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableRouteOutputReference.property.cidrBlock">cidrBlock</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableRouteOutputReference.property.destinationPrefixListId">destinationPrefixListId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableRouteOutputReference.property.egressOnlyGatewayId">egressOnlyGatewayId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableRouteOutputReference.property.gatewayId">gatewayId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableRouteOutputReference.property.instanceId">instanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableRouteOutputReference.property.ipv6CidrBlock">ipv6CidrBlock</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableRouteOutputReference.property.natGatewayId">natGatewayId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableRouteOutputReference.property.networkInterfaceId">networkInterfaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableRouteOutputReference.property.transitGatewayId">transitGatewayId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableRouteOutputReference.property.vpcEndpointId">vpcEndpointId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableRouteOutputReference.property.vpcPeeringConnectionId">vpcPeeringConnectionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableRouteOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableRoute">DefaultRouteTableRoute</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableRouteOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableRouteOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cidrBlockInput`<sup>Optional</sup> <a name="cidrBlockInput" id="@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableRouteOutputReference.property.cidrBlockInput"></a>

```typescript
public readonly cidrBlockInput: string;
```

- *Type:* string

---

##### `destinationPrefixListIdInput`<sup>Optional</sup> <a name="destinationPrefixListIdInput" id="@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableRouteOutputReference.property.destinationPrefixListIdInput"></a>

```typescript
public readonly destinationPrefixListIdInput: string;
```

- *Type:* string

---

##### `egressOnlyGatewayIdInput`<sup>Optional</sup> <a name="egressOnlyGatewayIdInput" id="@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableRouteOutputReference.property.egressOnlyGatewayIdInput"></a>

```typescript
public readonly egressOnlyGatewayIdInput: string;
```

- *Type:* string

---

##### `gatewayIdInput`<sup>Optional</sup> <a name="gatewayIdInput" id="@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableRouteOutputReference.property.gatewayIdInput"></a>

```typescript
public readonly gatewayIdInput: string;
```

- *Type:* string

---

##### `instanceIdInput`<sup>Optional</sup> <a name="instanceIdInput" id="@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableRouteOutputReference.property.instanceIdInput"></a>

```typescript
public readonly instanceIdInput: string;
```

- *Type:* string

---

##### `ipv6CidrBlockInput`<sup>Optional</sup> <a name="ipv6CidrBlockInput" id="@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableRouteOutputReference.property.ipv6CidrBlockInput"></a>

```typescript
public readonly ipv6CidrBlockInput: string;
```

- *Type:* string

---

##### `natGatewayIdInput`<sup>Optional</sup> <a name="natGatewayIdInput" id="@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableRouteOutputReference.property.natGatewayIdInput"></a>

```typescript
public readonly natGatewayIdInput: string;
```

- *Type:* string

---

##### `networkInterfaceIdInput`<sup>Optional</sup> <a name="networkInterfaceIdInput" id="@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableRouteOutputReference.property.networkInterfaceIdInput"></a>

```typescript
public readonly networkInterfaceIdInput: string;
```

- *Type:* string

---

##### `transitGatewayIdInput`<sup>Optional</sup> <a name="transitGatewayIdInput" id="@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableRouteOutputReference.property.transitGatewayIdInput"></a>

```typescript
public readonly transitGatewayIdInput: string;
```

- *Type:* string

---

##### `vpcEndpointIdInput`<sup>Optional</sup> <a name="vpcEndpointIdInput" id="@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableRouteOutputReference.property.vpcEndpointIdInput"></a>

```typescript
public readonly vpcEndpointIdInput: string;
```

- *Type:* string

---

##### `vpcPeeringConnectionIdInput`<sup>Optional</sup> <a name="vpcPeeringConnectionIdInput" id="@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableRouteOutputReference.property.vpcPeeringConnectionIdInput"></a>

```typescript
public readonly vpcPeeringConnectionIdInput: string;
```

- *Type:* string

---

##### `cidrBlock`<sup>Required</sup> <a name="cidrBlock" id="@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableRouteOutputReference.property.cidrBlock"></a>

```typescript
public readonly cidrBlock: string;
```

- *Type:* string

---

##### `destinationPrefixListId`<sup>Required</sup> <a name="destinationPrefixListId" id="@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableRouteOutputReference.property.destinationPrefixListId"></a>

```typescript
public readonly destinationPrefixListId: string;
```

- *Type:* string

---

##### `egressOnlyGatewayId`<sup>Required</sup> <a name="egressOnlyGatewayId" id="@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableRouteOutputReference.property.egressOnlyGatewayId"></a>

```typescript
public readonly egressOnlyGatewayId: string;
```

- *Type:* string

---

##### `gatewayId`<sup>Required</sup> <a name="gatewayId" id="@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableRouteOutputReference.property.gatewayId"></a>

```typescript
public readonly gatewayId: string;
```

- *Type:* string

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableRouteOutputReference.property.instanceId"></a>

```typescript
public readonly instanceId: string;
```

- *Type:* string

---

##### `ipv6CidrBlock`<sup>Required</sup> <a name="ipv6CidrBlock" id="@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableRouteOutputReference.property.ipv6CidrBlock"></a>

```typescript
public readonly ipv6CidrBlock: string;
```

- *Type:* string

---

##### `natGatewayId`<sup>Required</sup> <a name="natGatewayId" id="@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableRouteOutputReference.property.natGatewayId"></a>

```typescript
public readonly natGatewayId: string;
```

- *Type:* string

---

##### `networkInterfaceId`<sup>Required</sup> <a name="networkInterfaceId" id="@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableRouteOutputReference.property.networkInterfaceId"></a>

```typescript
public readonly networkInterfaceId: string;
```

- *Type:* string

---

##### `transitGatewayId`<sup>Required</sup> <a name="transitGatewayId" id="@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableRouteOutputReference.property.transitGatewayId"></a>

```typescript
public readonly transitGatewayId: string;
```

- *Type:* string

---

##### `vpcEndpointId`<sup>Required</sup> <a name="vpcEndpointId" id="@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableRouteOutputReference.property.vpcEndpointId"></a>

```typescript
public readonly vpcEndpointId: string;
```

- *Type:* string

---

##### `vpcPeeringConnectionId`<sup>Required</sup> <a name="vpcPeeringConnectionId" id="@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableRouteOutputReference.property.vpcPeeringConnectionId"></a>

```typescript
public readonly vpcPeeringConnectionId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableRouteOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DefaultRouteTableRoute;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableRoute">DefaultRouteTableRoute</a>

---


### DefaultRouteTableTimeoutsOutputReference <a name="DefaultRouteTableTimeoutsOutputReference" id="@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableTimeoutsOutputReference.Initializer"></a>

```typescript
import { defaultRouteTable } from '@cdktf/aws-cdk'

new defaultRouteTable.DefaultRouteTableTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableTimeouts">DefaultRouteTableTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DefaultRouteTableTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.defaultRouteTable.DefaultRouteTableTimeouts">DefaultRouteTableTimeouts</a>

---



