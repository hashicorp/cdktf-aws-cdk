# `serviceDiscoveryHttpNamespace` Submodule <a name="`serviceDiscoveryHttpNamespace` Submodule" id="@cdktf/aws-cdk.serviceDiscoveryHttpNamespace"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ServiceDiscoveryHttpNamespace <a name="ServiceDiscoveryHttpNamespace" id="@cdktf/aws-cdk.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/service_discovery_http_namespace aws_service_discovery_http_namespace}.

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.Initializer"></a>

```typescript
import { serviceDiscoveryHttpNamespace } from '@cdktf/aws-cdk'

new serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace(scope: Construct, id: string, config: ServiceDiscoveryHttpNamespaceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/aws-cdk.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespaceConfig">ServiceDiscoveryHttpNamespaceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/aws-cdk.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/aws-cdk.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespaceConfig">ServiceDiscoveryHttpNamespaceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.resetTagsAll">resetTagsAll</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/aws-cdk.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/aws-cdk.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/aws-cdk.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/aws-cdk.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/aws-cdk.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/aws-cdk.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/aws-cdk.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/aws-cdk.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/aws-cdk.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/aws-cdk.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/aws-cdk.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/aws-cdk.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/aws-cdk.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/aws-cdk.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/aws-cdk.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/aws-cdk.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/aws-cdk.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/aws-cdk.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/aws-cdk.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/aws-cdk.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/aws-cdk.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ServiceDiscoveryHttpNamespace resource upon running "cdktf plan <stack-name>". |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@cdktf/aws-cdk.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.isConstruct"></a>

```typescript
import { serviceDiscoveryHttpNamespace } from '@cdktf/aws-cdk'

serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/aws-cdk.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.isTerraformElement"></a>

```typescript
import { serviceDiscoveryHttpNamespace } from '@cdktf/aws-cdk'

serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/aws-cdk.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.isTerraformResource"></a>

```typescript
import { serviceDiscoveryHttpNamespace } from '@cdktf/aws-cdk'

serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/aws-cdk.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.generateConfigForImport"></a>

```typescript
import { serviceDiscoveryHttpNamespace } from '@cdktf/aws-cdk'

serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ServiceDiscoveryHttpNamespace resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/aws-cdk.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ServiceDiscoveryHttpNamespace to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/aws-cdk.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ServiceDiscoveryHttpNamespace that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/service_discovery_http_namespace#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ServiceDiscoveryHttpNamespace to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/aws-cdk.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/aws-cdk.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/aws-cdk.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/aws-cdk.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/aws-cdk.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/aws-cdk.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/aws-cdk.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/aws-cdk.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/aws-cdk.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/aws-cdk.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/aws-cdk.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/aws-cdk.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/aws-cdk.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/aws-cdk.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/aws-cdk.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/aws-cdk.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/aws-cdk.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespace.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ServiceDiscoveryHttpNamespaceConfig <a name="ServiceDiscoveryHttpNamespaceConfig" id="@cdktf/aws-cdk.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespaceConfig.Initializer"></a>

```typescript
import { serviceDiscoveryHttpNamespace } from '@cdktf/aws-cdk'

const serviceDiscoveryHttpNamespaceConfig: serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespaceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespaceConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespaceConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespaceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespaceConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespaceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespaceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespaceConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespaceConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/service_discovery_http_namespace#name ServiceDiscoveryHttpNamespace#name}. |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespaceConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/service_discovery_http_namespace#description ServiceDiscoveryHttpNamespace#description}. |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespaceConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/service_discovery_http_namespace#id ServiceDiscoveryHttpNamespace#id}. |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespaceConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/service_discovery_http_namespace#tags ServiceDiscoveryHttpNamespace#tags}. |
| <code><a href="#@cdktf/aws-cdk.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespaceConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/service_discovery_http_namespace#tags_all ServiceDiscoveryHttpNamespace#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespaceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespaceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespaceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespaceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespaceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespaceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespaceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/aws-cdk.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespaceConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/service_discovery_http_namespace#name ServiceDiscoveryHttpNamespace#name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/aws-cdk.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespaceConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/service_discovery_http_namespace#description ServiceDiscoveryHttpNamespace#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/aws-cdk.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespaceConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/service_discovery_http_namespace#id ServiceDiscoveryHttpNamespace#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/aws-cdk.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespaceConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/service_discovery_http_namespace#tags ServiceDiscoveryHttpNamespace#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/aws-cdk.serviceDiscoveryHttpNamespace.ServiceDiscoveryHttpNamespaceConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/service_discovery_http_namespace#tags_all ServiceDiscoveryHttpNamespace#tags_all}.

---



