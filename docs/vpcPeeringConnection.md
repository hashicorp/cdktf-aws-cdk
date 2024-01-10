# `vpcPeeringConnection` Submodule <a name="`vpcPeeringConnection` Submodule" id="@cdktf/aws-cdk.vpcPeeringConnection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VpcPeeringConnection <a name="VpcPeeringConnection" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnection"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/vpc_peering_connection aws_vpc_peering_connection}.

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnection.Initializer"></a>

```typescript
import { vpcPeeringConnection } from '@cdktf/aws-cdk'

new vpcPeeringConnection.VpcPeeringConnection(scope: Construct, id: string, config: VpcPeeringConnectionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnection.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnection.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnection.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionConfig">VpcPeeringConnectionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnection.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnection.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnection.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionConfig">VpcPeeringConnectionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnection.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnection.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnection.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnection.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnection.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnection.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnection.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnection.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnection.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnection.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnection.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnection.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnection.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnection.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnection.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnection.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnection.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnection.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnection.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnection.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnection.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnection.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnection.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnection.putAccepter">putAccepter</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnection.putRequester">putRequester</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnection.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnection.resetAccepter">resetAccepter</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnection.resetAutoAccept">resetAutoAccept</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnection.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnection.resetPeerOwnerId">resetPeerOwnerId</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnection.resetPeerRegion">resetPeerRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnection.resetRequester">resetRequester</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnection.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnection.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnection.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnection.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnection.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnection.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnection.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnection.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnection.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnection.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnection.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnection.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnection.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnection.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnection.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnection.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnection.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnection.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnection.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnection.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnection.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnection.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnection.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnection.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnection.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnection.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnection.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnection.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnection.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnection.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnection.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnection.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnection.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnection.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnection.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAccepter` <a name="putAccepter" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnection.putAccepter"></a>

```typescript
public putAccepter(value: VpcPeeringConnectionAccepter): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnection.putAccepter.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionAccepter">VpcPeeringConnectionAccepter</a>

---

##### `putRequester` <a name="putRequester" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnection.putRequester"></a>

```typescript
public putRequester(value: VpcPeeringConnectionRequester): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnection.putRequester.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionRequester">VpcPeeringConnectionRequester</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnection.putTimeouts"></a>

```typescript
public putTimeouts(value: VpcPeeringConnectionTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnection.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionTimeouts">VpcPeeringConnectionTimeouts</a>

---

##### `resetAccepter` <a name="resetAccepter" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnection.resetAccepter"></a>

```typescript
public resetAccepter(): void
```

##### `resetAutoAccept` <a name="resetAutoAccept" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnection.resetAutoAccept"></a>

```typescript
public resetAutoAccept(): void
```

##### `resetId` <a name="resetId" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnection.resetId"></a>

```typescript
public resetId(): void
```

##### `resetPeerOwnerId` <a name="resetPeerOwnerId" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnection.resetPeerOwnerId"></a>

```typescript
public resetPeerOwnerId(): void
```

##### `resetPeerRegion` <a name="resetPeerRegion" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnection.resetPeerRegion"></a>

```typescript
public resetPeerRegion(): void
```

##### `resetRequester` <a name="resetRequester" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnection.resetRequester"></a>

```typescript
public resetRequester(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnection.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnection.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnection.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnection.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnection.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnection.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnection.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a VpcPeeringConnection resource upon running "cdktf plan <stack-name>". |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnection.isConstruct"></a>

```typescript
import { vpcPeeringConnection } from '@cdktf/aws-cdk'

vpcPeeringConnection.VpcPeeringConnection.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnection.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnection.isTerraformElement"></a>

```typescript
import { vpcPeeringConnection } from '@cdktf/aws-cdk'

vpcPeeringConnection.VpcPeeringConnection.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnection.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnection.isTerraformResource"></a>

```typescript
import { vpcPeeringConnection } from '@cdktf/aws-cdk'

vpcPeeringConnection.VpcPeeringConnection.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnection.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnection.generateConfigForImport"></a>

```typescript
import { vpcPeeringConnection } from '@cdktf/aws-cdk'

vpcPeeringConnection.VpcPeeringConnection.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a VpcPeeringConnection resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnection.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnection.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the VpcPeeringConnection to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing VpcPeeringConnection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/vpc_peering_connection#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnection.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the VpcPeeringConnection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnection.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnection.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnection.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnection.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnection.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnection.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnection.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnection.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnection.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnection.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnection.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnection.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnection.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnection.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnection.property.accepter">accepter</a></code> | <code><a href="#@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference">VpcPeeringConnectionAccepterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnection.property.acceptStatus">acceptStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnection.property.requester">requester</a></code> | <code><a href="#@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference">VpcPeeringConnectionRequesterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnection.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference">VpcPeeringConnectionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnection.property.accepterInput">accepterInput</a></code> | <code><a href="#@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionAccepter">VpcPeeringConnectionAccepter</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnection.property.autoAcceptInput">autoAcceptInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnection.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnection.property.peerOwnerIdInput">peerOwnerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnection.property.peerRegionInput">peerRegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnection.property.peerVpcIdInput">peerVpcIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnection.property.requesterInput">requesterInput</a></code> | <code><a href="#@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionRequester">VpcPeeringConnectionRequester</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnection.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnection.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnection.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionTimeouts">VpcPeeringConnectionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnection.property.vpcIdInput">vpcIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnection.property.autoAccept">autoAccept</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnection.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnection.property.peerOwnerId">peerOwnerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnection.property.peerRegion">peerRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnection.property.peerVpcId">peerVpcId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnection.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnection.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnection.property.vpcId">vpcId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnection.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnection.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnection.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnection.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnection.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnection.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnection.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnection.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnection.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnection.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnection.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnection.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnection.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnection.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `accepter`<sup>Required</sup> <a name="accepter" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnection.property.accepter"></a>

```typescript
public readonly accepter: VpcPeeringConnectionAccepterOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference">VpcPeeringConnectionAccepterOutputReference</a>

---

##### `acceptStatus`<sup>Required</sup> <a name="acceptStatus" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnection.property.acceptStatus"></a>

```typescript
public readonly acceptStatus: string;
```

- *Type:* string

---

##### `requester`<sup>Required</sup> <a name="requester" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnection.property.requester"></a>

```typescript
public readonly requester: VpcPeeringConnectionRequesterOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference">VpcPeeringConnectionRequesterOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnection.property.timeouts"></a>

```typescript
public readonly timeouts: VpcPeeringConnectionTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference">VpcPeeringConnectionTimeoutsOutputReference</a>

---

##### `accepterInput`<sup>Optional</sup> <a name="accepterInput" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnection.property.accepterInput"></a>

```typescript
public readonly accepterInput: VpcPeeringConnectionAccepter;
```

- *Type:* <a href="#@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionAccepter">VpcPeeringConnectionAccepter</a>

---

##### `autoAcceptInput`<sup>Optional</sup> <a name="autoAcceptInput" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnection.property.autoAcceptInput"></a>

```typescript
public readonly autoAcceptInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnection.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `peerOwnerIdInput`<sup>Optional</sup> <a name="peerOwnerIdInput" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnection.property.peerOwnerIdInput"></a>

```typescript
public readonly peerOwnerIdInput: string;
```

- *Type:* string

---

##### `peerRegionInput`<sup>Optional</sup> <a name="peerRegionInput" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnection.property.peerRegionInput"></a>

```typescript
public readonly peerRegionInput: string;
```

- *Type:* string

---

##### `peerVpcIdInput`<sup>Optional</sup> <a name="peerVpcIdInput" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnection.property.peerVpcIdInput"></a>

```typescript
public readonly peerVpcIdInput: string;
```

- *Type:* string

---

##### `requesterInput`<sup>Optional</sup> <a name="requesterInput" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnection.property.requesterInput"></a>

```typescript
public readonly requesterInput: VpcPeeringConnectionRequester;
```

- *Type:* <a href="#@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionRequester">VpcPeeringConnectionRequester</a>

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnection.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnection.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnection.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | VpcPeeringConnectionTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionTimeouts">VpcPeeringConnectionTimeouts</a>

---

##### `vpcIdInput`<sup>Optional</sup> <a name="vpcIdInput" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnection.property.vpcIdInput"></a>

```typescript
public readonly vpcIdInput: string;
```

- *Type:* string

---

##### `autoAccept`<sup>Required</sup> <a name="autoAccept" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnection.property.autoAccept"></a>

```typescript
public readonly autoAccept: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnection.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `peerOwnerId`<sup>Required</sup> <a name="peerOwnerId" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnection.property.peerOwnerId"></a>

```typescript
public readonly peerOwnerId: string;
```

- *Type:* string

---

##### `peerRegion`<sup>Required</sup> <a name="peerRegion" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnection.property.peerRegion"></a>

```typescript
public readonly peerRegion: string;
```

- *Type:* string

---

##### `peerVpcId`<sup>Required</sup> <a name="peerVpcId" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnection.property.peerVpcId"></a>

```typescript
public readonly peerVpcId: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnection.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnection.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnection.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnection.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnection.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### VpcPeeringConnectionAccepter <a name="VpcPeeringConnectionAccepter" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionAccepter"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionAccepter.Initializer"></a>

```typescript
import { vpcPeeringConnection } from '@cdktf/aws-cdk'

const vpcPeeringConnectionAccepter: vpcPeeringConnection.VpcPeeringConnectionAccepter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionAccepter.property.allowClassicLinkToRemoteVpc">allowClassicLinkToRemoteVpc</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/vpc_peering_connection#allow_classic_link_to_remote_vpc VpcPeeringConnection#allow_classic_link_to_remote_vpc}. |
| <code><a href="#@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionAccepter.property.allowRemoteVpcDnsResolution">allowRemoteVpcDnsResolution</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/vpc_peering_connection#allow_remote_vpc_dns_resolution VpcPeeringConnection#allow_remote_vpc_dns_resolution}. |
| <code><a href="#@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionAccepter.property.allowVpcToRemoteClassicLink">allowVpcToRemoteClassicLink</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/vpc_peering_connection#allow_vpc_to_remote_classic_link VpcPeeringConnection#allow_vpc_to_remote_classic_link}. |

---

##### `allowClassicLinkToRemoteVpc`<sup>Optional</sup> <a name="allowClassicLinkToRemoteVpc" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionAccepter.property.allowClassicLinkToRemoteVpc"></a>

```typescript
public readonly allowClassicLinkToRemoteVpc: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/vpc_peering_connection#allow_classic_link_to_remote_vpc VpcPeeringConnection#allow_classic_link_to_remote_vpc}.

---

##### `allowRemoteVpcDnsResolution`<sup>Optional</sup> <a name="allowRemoteVpcDnsResolution" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionAccepter.property.allowRemoteVpcDnsResolution"></a>

```typescript
public readonly allowRemoteVpcDnsResolution: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/vpc_peering_connection#allow_remote_vpc_dns_resolution VpcPeeringConnection#allow_remote_vpc_dns_resolution}.

---

##### `allowVpcToRemoteClassicLink`<sup>Optional</sup> <a name="allowVpcToRemoteClassicLink" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionAccepter.property.allowVpcToRemoteClassicLink"></a>

```typescript
public readonly allowVpcToRemoteClassicLink: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/vpc_peering_connection#allow_vpc_to_remote_classic_link VpcPeeringConnection#allow_vpc_to_remote_classic_link}.

---

### VpcPeeringConnectionConfig <a name="VpcPeeringConnectionConfig" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionConfig.Initializer"></a>

```typescript
import { vpcPeeringConnection } from '@cdktf/aws-cdk'

const vpcPeeringConnectionConfig: vpcPeeringConnection.VpcPeeringConnectionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionConfig.property.peerVpcId">peerVpcId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/vpc_peering_connection#peer_vpc_id VpcPeeringConnection#peer_vpc_id}. |
| <code><a href="#@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionConfig.property.vpcId">vpcId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/vpc_peering_connection#vpc_id VpcPeeringConnection#vpc_id}. |
| <code><a href="#@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionConfig.property.accepter">accepter</a></code> | <code><a href="#@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionAccepter">VpcPeeringConnectionAccepter</a></code> | accepter block. |
| <code><a href="#@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionConfig.property.autoAccept">autoAccept</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/vpc_peering_connection#auto_accept VpcPeeringConnection#auto_accept}. |
| <code><a href="#@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/vpc_peering_connection#id VpcPeeringConnection#id}. |
| <code><a href="#@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionConfig.property.peerOwnerId">peerOwnerId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/vpc_peering_connection#peer_owner_id VpcPeeringConnection#peer_owner_id}. |
| <code><a href="#@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionConfig.property.peerRegion">peerRegion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/vpc_peering_connection#peer_region VpcPeeringConnection#peer_region}. |
| <code><a href="#@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionConfig.property.requester">requester</a></code> | <code><a href="#@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionRequester">VpcPeeringConnectionRequester</a></code> | requester block. |
| <code><a href="#@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/vpc_peering_connection#tags VpcPeeringConnection#tags}. |
| <code><a href="#@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/vpc_peering_connection#tags_all VpcPeeringConnection#tags_all}. |
| <code><a href="#@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionTimeouts">VpcPeeringConnectionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `peerVpcId`<sup>Required</sup> <a name="peerVpcId" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionConfig.property.peerVpcId"></a>

```typescript
public readonly peerVpcId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/vpc_peering_connection#peer_vpc_id VpcPeeringConnection#peer_vpc_id}.

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionConfig.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/vpc_peering_connection#vpc_id VpcPeeringConnection#vpc_id}.

---

##### `accepter`<sup>Optional</sup> <a name="accepter" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionConfig.property.accepter"></a>

```typescript
public readonly accepter: VpcPeeringConnectionAccepter;
```

- *Type:* <a href="#@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionAccepter">VpcPeeringConnectionAccepter</a>

accepter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/vpc_peering_connection#accepter VpcPeeringConnection#accepter}

---

##### `autoAccept`<sup>Optional</sup> <a name="autoAccept" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionConfig.property.autoAccept"></a>

```typescript
public readonly autoAccept: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/vpc_peering_connection#auto_accept VpcPeeringConnection#auto_accept}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/vpc_peering_connection#id VpcPeeringConnection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `peerOwnerId`<sup>Optional</sup> <a name="peerOwnerId" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionConfig.property.peerOwnerId"></a>

```typescript
public readonly peerOwnerId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/vpc_peering_connection#peer_owner_id VpcPeeringConnection#peer_owner_id}.

---

##### `peerRegion`<sup>Optional</sup> <a name="peerRegion" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionConfig.property.peerRegion"></a>

```typescript
public readonly peerRegion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/vpc_peering_connection#peer_region VpcPeeringConnection#peer_region}.

---

##### `requester`<sup>Optional</sup> <a name="requester" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionConfig.property.requester"></a>

```typescript
public readonly requester: VpcPeeringConnectionRequester;
```

- *Type:* <a href="#@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionRequester">VpcPeeringConnectionRequester</a>

requester block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/vpc_peering_connection#requester VpcPeeringConnection#requester}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/vpc_peering_connection#tags VpcPeeringConnection#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/vpc_peering_connection#tags_all VpcPeeringConnection#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionConfig.property.timeouts"></a>

```typescript
public readonly timeouts: VpcPeeringConnectionTimeouts;
```

- *Type:* <a href="#@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionTimeouts">VpcPeeringConnectionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/vpc_peering_connection#timeouts VpcPeeringConnection#timeouts}

---

### VpcPeeringConnectionRequester <a name="VpcPeeringConnectionRequester" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionRequester"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionRequester.Initializer"></a>

```typescript
import { vpcPeeringConnection } from '@cdktf/aws-cdk'

const vpcPeeringConnectionRequester: vpcPeeringConnection.VpcPeeringConnectionRequester = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionRequester.property.allowClassicLinkToRemoteVpc">allowClassicLinkToRemoteVpc</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/vpc_peering_connection#allow_classic_link_to_remote_vpc VpcPeeringConnection#allow_classic_link_to_remote_vpc}. |
| <code><a href="#@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionRequester.property.allowRemoteVpcDnsResolution">allowRemoteVpcDnsResolution</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/vpc_peering_connection#allow_remote_vpc_dns_resolution VpcPeeringConnection#allow_remote_vpc_dns_resolution}. |
| <code><a href="#@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionRequester.property.allowVpcToRemoteClassicLink">allowVpcToRemoteClassicLink</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/vpc_peering_connection#allow_vpc_to_remote_classic_link VpcPeeringConnection#allow_vpc_to_remote_classic_link}. |

---

##### `allowClassicLinkToRemoteVpc`<sup>Optional</sup> <a name="allowClassicLinkToRemoteVpc" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionRequester.property.allowClassicLinkToRemoteVpc"></a>

```typescript
public readonly allowClassicLinkToRemoteVpc: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/vpc_peering_connection#allow_classic_link_to_remote_vpc VpcPeeringConnection#allow_classic_link_to_remote_vpc}.

---

##### `allowRemoteVpcDnsResolution`<sup>Optional</sup> <a name="allowRemoteVpcDnsResolution" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionRequester.property.allowRemoteVpcDnsResolution"></a>

```typescript
public readonly allowRemoteVpcDnsResolution: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/vpc_peering_connection#allow_remote_vpc_dns_resolution VpcPeeringConnection#allow_remote_vpc_dns_resolution}.

---

##### `allowVpcToRemoteClassicLink`<sup>Optional</sup> <a name="allowVpcToRemoteClassicLink" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionRequester.property.allowVpcToRemoteClassicLink"></a>

```typescript
public readonly allowVpcToRemoteClassicLink: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/vpc_peering_connection#allow_vpc_to_remote_classic_link VpcPeeringConnection#allow_vpc_to_remote_classic_link}.

---

### VpcPeeringConnectionTimeouts <a name="VpcPeeringConnectionTimeouts" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionTimeouts.Initializer"></a>

```typescript
import { vpcPeeringConnection } from '@cdktf/aws-cdk'

const vpcPeeringConnectionTimeouts: vpcPeeringConnection.VpcPeeringConnectionTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/vpc_peering_connection#create VpcPeeringConnection#create}. |
| <code><a href="#@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/vpc_peering_connection#delete VpcPeeringConnection#delete}. |
| <code><a href="#@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/vpc_peering_connection#update VpcPeeringConnection#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/vpc_peering_connection#create VpcPeeringConnection#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/vpc_peering_connection#delete VpcPeeringConnection#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/vpc_peering_connection#update VpcPeeringConnection#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### VpcPeeringConnectionAccepterOutputReference <a name="VpcPeeringConnectionAccepterOutputReference" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference.Initializer"></a>

```typescript
import { vpcPeeringConnection } from '@cdktf/aws-cdk'

new vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference.resetAllowClassicLinkToRemoteVpc">resetAllowClassicLinkToRemoteVpc</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference.resetAllowRemoteVpcDnsResolution">resetAllowRemoteVpcDnsResolution</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference.resetAllowVpcToRemoteClassicLink">resetAllowVpcToRemoteClassicLink</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllowClassicLinkToRemoteVpc` <a name="resetAllowClassicLinkToRemoteVpc" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference.resetAllowClassicLinkToRemoteVpc"></a>

```typescript
public resetAllowClassicLinkToRemoteVpc(): void
```

##### `resetAllowRemoteVpcDnsResolution` <a name="resetAllowRemoteVpcDnsResolution" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference.resetAllowRemoteVpcDnsResolution"></a>

```typescript
public resetAllowRemoteVpcDnsResolution(): void
```

##### `resetAllowVpcToRemoteClassicLink` <a name="resetAllowVpcToRemoteClassicLink" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference.resetAllowVpcToRemoteClassicLink"></a>

```typescript
public resetAllowVpcToRemoteClassicLink(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference.property.allowClassicLinkToRemoteVpcInput">allowClassicLinkToRemoteVpcInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference.property.allowRemoteVpcDnsResolutionInput">allowRemoteVpcDnsResolutionInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference.property.allowVpcToRemoteClassicLinkInput">allowVpcToRemoteClassicLinkInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference.property.allowClassicLinkToRemoteVpc">allowClassicLinkToRemoteVpc</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference.property.allowRemoteVpcDnsResolution">allowRemoteVpcDnsResolution</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference.property.allowVpcToRemoteClassicLink">allowVpcToRemoteClassicLink</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionAccepter">VpcPeeringConnectionAccepter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowClassicLinkToRemoteVpcInput`<sup>Optional</sup> <a name="allowClassicLinkToRemoteVpcInput" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference.property.allowClassicLinkToRemoteVpcInput"></a>

```typescript
public readonly allowClassicLinkToRemoteVpcInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowRemoteVpcDnsResolutionInput`<sup>Optional</sup> <a name="allowRemoteVpcDnsResolutionInput" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference.property.allowRemoteVpcDnsResolutionInput"></a>

```typescript
public readonly allowRemoteVpcDnsResolutionInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowVpcToRemoteClassicLinkInput`<sup>Optional</sup> <a name="allowVpcToRemoteClassicLinkInput" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference.property.allowVpcToRemoteClassicLinkInput"></a>

```typescript
public readonly allowVpcToRemoteClassicLinkInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowClassicLinkToRemoteVpc`<sup>Required</sup> <a name="allowClassicLinkToRemoteVpc" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference.property.allowClassicLinkToRemoteVpc"></a>

```typescript
public readonly allowClassicLinkToRemoteVpc: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowRemoteVpcDnsResolution`<sup>Required</sup> <a name="allowRemoteVpcDnsResolution" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference.property.allowRemoteVpcDnsResolution"></a>

```typescript
public readonly allowRemoteVpcDnsResolution: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowVpcToRemoteClassicLink`<sup>Required</sup> <a name="allowVpcToRemoteClassicLink" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference.property.allowVpcToRemoteClassicLink"></a>

```typescript
public readonly allowVpcToRemoteClassicLink: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionAccepterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: VpcPeeringConnectionAccepter;
```

- *Type:* <a href="#@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionAccepter">VpcPeeringConnectionAccepter</a>

---


### VpcPeeringConnectionRequesterOutputReference <a name="VpcPeeringConnectionRequesterOutputReference" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference.Initializer"></a>

```typescript
import { vpcPeeringConnection } from '@cdktf/aws-cdk'

new vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference.resetAllowClassicLinkToRemoteVpc">resetAllowClassicLinkToRemoteVpc</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference.resetAllowRemoteVpcDnsResolution">resetAllowRemoteVpcDnsResolution</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference.resetAllowVpcToRemoteClassicLink">resetAllowVpcToRemoteClassicLink</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllowClassicLinkToRemoteVpc` <a name="resetAllowClassicLinkToRemoteVpc" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference.resetAllowClassicLinkToRemoteVpc"></a>

```typescript
public resetAllowClassicLinkToRemoteVpc(): void
```

##### `resetAllowRemoteVpcDnsResolution` <a name="resetAllowRemoteVpcDnsResolution" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference.resetAllowRemoteVpcDnsResolution"></a>

```typescript
public resetAllowRemoteVpcDnsResolution(): void
```

##### `resetAllowVpcToRemoteClassicLink` <a name="resetAllowVpcToRemoteClassicLink" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference.resetAllowVpcToRemoteClassicLink"></a>

```typescript
public resetAllowVpcToRemoteClassicLink(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference.property.allowClassicLinkToRemoteVpcInput">allowClassicLinkToRemoteVpcInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference.property.allowRemoteVpcDnsResolutionInput">allowRemoteVpcDnsResolutionInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference.property.allowVpcToRemoteClassicLinkInput">allowVpcToRemoteClassicLinkInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference.property.allowClassicLinkToRemoteVpc">allowClassicLinkToRemoteVpc</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference.property.allowRemoteVpcDnsResolution">allowRemoteVpcDnsResolution</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference.property.allowVpcToRemoteClassicLink">allowVpcToRemoteClassicLink</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionRequester">VpcPeeringConnectionRequester</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowClassicLinkToRemoteVpcInput`<sup>Optional</sup> <a name="allowClassicLinkToRemoteVpcInput" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference.property.allowClassicLinkToRemoteVpcInput"></a>

```typescript
public readonly allowClassicLinkToRemoteVpcInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowRemoteVpcDnsResolutionInput`<sup>Optional</sup> <a name="allowRemoteVpcDnsResolutionInput" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference.property.allowRemoteVpcDnsResolutionInput"></a>

```typescript
public readonly allowRemoteVpcDnsResolutionInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowVpcToRemoteClassicLinkInput`<sup>Optional</sup> <a name="allowVpcToRemoteClassicLinkInput" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference.property.allowVpcToRemoteClassicLinkInput"></a>

```typescript
public readonly allowVpcToRemoteClassicLinkInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowClassicLinkToRemoteVpc`<sup>Required</sup> <a name="allowClassicLinkToRemoteVpc" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference.property.allowClassicLinkToRemoteVpc"></a>

```typescript
public readonly allowClassicLinkToRemoteVpc: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowRemoteVpcDnsResolution`<sup>Required</sup> <a name="allowRemoteVpcDnsResolution" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference.property.allowRemoteVpcDnsResolution"></a>

```typescript
public readonly allowRemoteVpcDnsResolution: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowVpcToRemoteClassicLink`<sup>Required</sup> <a name="allowVpcToRemoteClassicLink" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference.property.allowVpcToRemoteClassicLink"></a>

```typescript
public readonly allowVpcToRemoteClassicLink: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionRequesterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: VpcPeeringConnectionRequester;
```

- *Type:* <a href="#@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionRequester">VpcPeeringConnectionRequester</a>

---


### VpcPeeringConnectionTimeoutsOutputReference <a name="VpcPeeringConnectionTimeoutsOutputReference" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference.Initializer"></a>

```typescript
import { vpcPeeringConnection } from '@cdktf/aws-cdk'

new vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionTimeouts">VpcPeeringConnectionTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | VpcPeeringConnectionTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.vpcPeeringConnection.VpcPeeringConnectionTimeouts">VpcPeeringConnectionTimeouts</a>

---



