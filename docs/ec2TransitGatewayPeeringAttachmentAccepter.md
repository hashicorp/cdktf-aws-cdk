# `ec2TransitGatewayPeeringAttachmentAccepter` Submodule <a name="`ec2TransitGatewayPeeringAttachmentAccepter` Submodule" id="@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachmentAccepter"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2TransitGatewayPeeringAttachmentAccepter <a name="Ec2TransitGatewayPeeringAttachmentAccepter" id="@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachmentAccepter.Ec2TransitGatewayPeeringAttachmentAccepter"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/ec2_transit_gateway_peering_attachment_accepter aws_ec2_transit_gateway_peering_attachment_accepter}.

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachmentAccepter.Ec2TransitGatewayPeeringAttachmentAccepter.Initializer"></a>

```typescript
import { ec2TransitGatewayPeeringAttachmentAccepter } from '@cdktf/aws-cdk'

new ec2TransitGatewayPeeringAttachmentAccepter.Ec2TransitGatewayPeeringAttachmentAccepter(scope: Construct, id: string, config: Ec2TransitGatewayPeeringAttachmentAccepterConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachmentAccepter.Ec2TransitGatewayPeeringAttachmentAccepter.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachmentAccepter.Ec2TransitGatewayPeeringAttachmentAccepter.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachmentAccepter.Ec2TransitGatewayPeeringAttachmentAccepter.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachmentAccepter.Ec2TransitGatewayPeeringAttachmentAccepterConfig">Ec2TransitGatewayPeeringAttachmentAccepterConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachmentAccepter.Ec2TransitGatewayPeeringAttachmentAccepter.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachmentAccepter.Ec2TransitGatewayPeeringAttachmentAccepter.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachmentAccepter.Ec2TransitGatewayPeeringAttachmentAccepter.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachmentAccepter.Ec2TransitGatewayPeeringAttachmentAccepterConfig">Ec2TransitGatewayPeeringAttachmentAccepterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachmentAccepter.Ec2TransitGatewayPeeringAttachmentAccepter.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachmentAccepter.Ec2TransitGatewayPeeringAttachmentAccepter.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachmentAccepter.Ec2TransitGatewayPeeringAttachmentAccepter.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachmentAccepter.Ec2TransitGatewayPeeringAttachmentAccepter.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachmentAccepter.Ec2TransitGatewayPeeringAttachmentAccepter.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachmentAccepter.Ec2TransitGatewayPeeringAttachmentAccepter.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachmentAccepter.Ec2TransitGatewayPeeringAttachmentAccepter.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachmentAccepter.Ec2TransitGatewayPeeringAttachmentAccepter.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachmentAccepter.Ec2TransitGatewayPeeringAttachmentAccepter.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachmentAccepter.Ec2TransitGatewayPeeringAttachmentAccepter.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachmentAccepter.Ec2TransitGatewayPeeringAttachmentAccepter.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachmentAccepter.Ec2TransitGatewayPeeringAttachmentAccepter.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachmentAccepter.Ec2TransitGatewayPeeringAttachmentAccepter.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachmentAccepter.Ec2TransitGatewayPeeringAttachmentAccepter.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachmentAccepter.Ec2TransitGatewayPeeringAttachmentAccepter.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachmentAccepter.Ec2TransitGatewayPeeringAttachmentAccepter.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachmentAccepter.Ec2TransitGatewayPeeringAttachmentAccepter.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachmentAccepter.Ec2TransitGatewayPeeringAttachmentAccepter.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachmentAccepter.Ec2TransitGatewayPeeringAttachmentAccepter.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachmentAccepter.Ec2TransitGatewayPeeringAttachmentAccepter.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachmentAccepter.Ec2TransitGatewayPeeringAttachmentAccepter.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachmentAccepter.Ec2TransitGatewayPeeringAttachmentAccepter.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachmentAccepter.Ec2TransitGatewayPeeringAttachmentAccepter.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachmentAccepter.Ec2TransitGatewayPeeringAttachmentAccepter.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachmentAccepter.Ec2TransitGatewayPeeringAttachmentAccepter.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachmentAccepter.Ec2TransitGatewayPeeringAttachmentAccepter.resetTagsAll">resetTagsAll</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachmentAccepter.Ec2TransitGatewayPeeringAttachmentAccepter.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachmentAccepter.Ec2TransitGatewayPeeringAttachmentAccepter.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachmentAccepter.Ec2TransitGatewayPeeringAttachmentAccepter.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachmentAccepter.Ec2TransitGatewayPeeringAttachmentAccepter.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachmentAccepter.Ec2TransitGatewayPeeringAttachmentAccepter.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachmentAccepter.Ec2TransitGatewayPeeringAttachmentAccepter.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachmentAccepter.Ec2TransitGatewayPeeringAttachmentAccepter.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachmentAccepter.Ec2TransitGatewayPeeringAttachmentAccepter.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachmentAccepter.Ec2TransitGatewayPeeringAttachmentAccepter.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachmentAccepter.Ec2TransitGatewayPeeringAttachmentAccepter.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachmentAccepter.Ec2TransitGatewayPeeringAttachmentAccepter.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachmentAccepter.Ec2TransitGatewayPeeringAttachmentAccepter.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachmentAccepter.Ec2TransitGatewayPeeringAttachmentAccepter.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachmentAccepter.Ec2TransitGatewayPeeringAttachmentAccepter.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachmentAccepter.Ec2TransitGatewayPeeringAttachmentAccepter.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachmentAccepter.Ec2TransitGatewayPeeringAttachmentAccepter.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachmentAccepter.Ec2TransitGatewayPeeringAttachmentAccepter.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachmentAccepter.Ec2TransitGatewayPeeringAttachmentAccepter.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachmentAccepter.Ec2TransitGatewayPeeringAttachmentAccepter.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachmentAccepter.Ec2TransitGatewayPeeringAttachmentAccepter.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachmentAccepter.Ec2TransitGatewayPeeringAttachmentAccepter.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachmentAccepter.Ec2TransitGatewayPeeringAttachmentAccepter.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachmentAccepter.Ec2TransitGatewayPeeringAttachmentAccepter.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachmentAccepter.Ec2TransitGatewayPeeringAttachmentAccepter.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachmentAccepter.Ec2TransitGatewayPeeringAttachmentAccepter.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachmentAccepter.Ec2TransitGatewayPeeringAttachmentAccepter.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachmentAccepter.Ec2TransitGatewayPeeringAttachmentAccepter.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachmentAccepter.Ec2TransitGatewayPeeringAttachmentAccepter.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachmentAccepter.Ec2TransitGatewayPeeringAttachmentAccepter.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachmentAccepter.Ec2TransitGatewayPeeringAttachmentAccepter.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachmentAccepter.Ec2TransitGatewayPeeringAttachmentAccepter.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachmentAccepter.Ec2TransitGatewayPeeringAttachmentAccepter.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachmentAccepter.Ec2TransitGatewayPeeringAttachmentAccepter.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachmentAccepter.Ec2TransitGatewayPeeringAttachmentAccepter.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachmentAccepter.Ec2TransitGatewayPeeringAttachmentAccepter.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachmentAccepter.Ec2TransitGatewayPeeringAttachmentAccepter.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachmentAccepter.Ec2TransitGatewayPeeringAttachmentAccepter.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachmentAccepter.Ec2TransitGatewayPeeringAttachmentAccepter.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachmentAccepter.Ec2TransitGatewayPeeringAttachmentAccepter.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachmentAccepter.Ec2TransitGatewayPeeringAttachmentAccepter.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachmentAccepter.Ec2TransitGatewayPeeringAttachmentAccepter.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachmentAccepter.Ec2TransitGatewayPeeringAttachmentAccepter.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachmentAccepter.Ec2TransitGatewayPeeringAttachmentAccepter.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetId` <a name="resetId" id="@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachmentAccepter.Ec2TransitGatewayPeeringAttachmentAccepter.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachmentAccepter.Ec2TransitGatewayPeeringAttachmentAccepter.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachmentAccepter.Ec2TransitGatewayPeeringAttachmentAccepter.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachmentAccepter.Ec2TransitGatewayPeeringAttachmentAccepter.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachmentAccepter.Ec2TransitGatewayPeeringAttachmentAccepter.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachmentAccepter.Ec2TransitGatewayPeeringAttachmentAccepter.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachmentAccepter.Ec2TransitGatewayPeeringAttachmentAccepter.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a Ec2TransitGatewayPeeringAttachmentAccepter resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachmentAccepter.Ec2TransitGatewayPeeringAttachmentAccepter.isConstruct"></a>

```typescript
import { ec2TransitGatewayPeeringAttachmentAccepter } from '@cdktf/aws-cdk'

ec2TransitGatewayPeeringAttachmentAccepter.Ec2TransitGatewayPeeringAttachmentAccepter.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachmentAccepter.Ec2TransitGatewayPeeringAttachmentAccepter.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachmentAccepter.Ec2TransitGatewayPeeringAttachmentAccepter.isTerraformElement"></a>

```typescript
import { ec2TransitGatewayPeeringAttachmentAccepter } from '@cdktf/aws-cdk'

ec2TransitGatewayPeeringAttachmentAccepter.Ec2TransitGatewayPeeringAttachmentAccepter.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachmentAccepter.Ec2TransitGatewayPeeringAttachmentAccepter.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachmentAccepter.Ec2TransitGatewayPeeringAttachmentAccepter.isTerraformResource"></a>

```typescript
import { ec2TransitGatewayPeeringAttachmentAccepter } from '@cdktf/aws-cdk'

ec2TransitGatewayPeeringAttachmentAccepter.Ec2TransitGatewayPeeringAttachmentAccepter.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachmentAccepter.Ec2TransitGatewayPeeringAttachmentAccepter.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachmentAccepter.Ec2TransitGatewayPeeringAttachmentAccepter.generateConfigForImport"></a>

```typescript
import { ec2TransitGatewayPeeringAttachmentAccepter } from '@cdktf/aws-cdk'

ec2TransitGatewayPeeringAttachmentAccepter.Ec2TransitGatewayPeeringAttachmentAccepter.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a Ec2TransitGatewayPeeringAttachmentAccepter resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachmentAccepter.Ec2TransitGatewayPeeringAttachmentAccepter.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachmentAccepter.Ec2TransitGatewayPeeringAttachmentAccepter.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Ec2TransitGatewayPeeringAttachmentAccepter to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachmentAccepter.Ec2TransitGatewayPeeringAttachmentAccepter.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Ec2TransitGatewayPeeringAttachmentAccepter that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/ec2_transit_gateway_peering_attachment_accepter#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachmentAccepter.Ec2TransitGatewayPeeringAttachmentAccepter.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the Ec2TransitGatewayPeeringAttachmentAccepter to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachmentAccepter.Ec2TransitGatewayPeeringAttachmentAccepter.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachmentAccepter.Ec2TransitGatewayPeeringAttachmentAccepter.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachmentAccepter.Ec2TransitGatewayPeeringAttachmentAccepter.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachmentAccepter.Ec2TransitGatewayPeeringAttachmentAccepter.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachmentAccepter.Ec2TransitGatewayPeeringAttachmentAccepter.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachmentAccepter.Ec2TransitGatewayPeeringAttachmentAccepter.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachmentAccepter.Ec2TransitGatewayPeeringAttachmentAccepter.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachmentAccepter.Ec2TransitGatewayPeeringAttachmentAccepter.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachmentAccepter.Ec2TransitGatewayPeeringAttachmentAccepter.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachmentAccepter.Ec2TransitGatewayPeeringAttachmentAccepter.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachmentAccepter.Ec2TransitGatewayPeeringAttachmentAccepter.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachmentAccepter.Ec2TransitGatewayPeeringAttachmentAccepter.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachmentAccepter.Ec2TransitGatewayPeeringAttachmentAccepter.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachmentAccepter.Ec2TransitGatewayPeeringAttachmentAccepter.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachmentAccepter.Ec2TransitGatewayPeeringAttachmentAccepter.property.peerAccountId">peerAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachmentAccepter.Ec2TransitGatewayPeeringAttachmentAccepter.property.peerRegion">peerRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachmentAccepter.Ec2TransitGatewayPeeringAttachmentAccepter.property.peerTransitGatewayId">peerTransitGatewayId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachmentAccepter.Ec2TransitGatewayPeeringAttachmentAccepter.property.transitGatewayId">transitGatewayId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachmentAccepter.Ec2TransitGatewayPeeringAttachmentAccepter.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachmentAccepter.Ec2TransitGatewayPeeringAttachmentAccepter.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachmentAccepter.Ec2TransitGatewayPeeringAttachmentAccepter.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachmentAccepter.Ec2TransitGatewayPeeringAttachmentAccepter.property.transitGatewayAttachmentIdInput">transitGatewayAttachmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachmentAccepter.Ec2TransitGatewayPeeringAttachmentAccepter.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachmentAccepter.Ec2TransitGatewayPeeringAttachmentAccepter.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachmentAccepter.Ec2TransitGatewayPeeringAttachmentAccepter.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachmentAccepter.Ec2TransitGatewayPeeringAttachmentAccepter.property.transitGatewayAttachmentId">transitGatewayAttachmentId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachmentAccepter.Ec2TransitGatewayPeeringAttachmentAccepter.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachmentAccepter.Ec2TransitGatewayPeeringAttachmentAccepter.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachmentAccepter.Ec2TransitGatewayPeeringAttachmentAccepter.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachmentAccepter.Ec2TransitGatewayPeeringAttachmentAccepter.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachmentAccepter.Ec2TransitGatewayPeeringAttachmentAccepter.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachmentAccepter.Ec2TransitGatewayPeeringAttachmentAccepter.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachmentAccepter.Ec2TransitGatewayPeeringAttachmentAccepter.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachmentAccepter.Ec2TransitGatewayPeeringAttachmentAccepter.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachmentAccepter.Ec2TransitGatewayPeeringAttachmentAccepter.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachmentAccepter.Ec2TransitGatewayPeeringAttachmentAccepter.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachmentAccepter.Ec2TransitGatewayPeeringAttachmentAccepter.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachmentAccepter.Ec2TransitGatewayPeeringAttachmentAccepter.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachmentAccepter.Ec2TransitGatewayPeeringAttachmentAccepter.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachmentAccepter.Ec2TransitGatewayPeeringAttachmentAccepter.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `peerAccountId`<sup>Required</sup> <a name="peerAccountId" id="@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachmentAccepter.Ec2TransitGatewayPeeringAttachmentAccepter.property.peerAccountId"></a>

```typescript
public readonly peerAccountId: string;
```

- *Type:* string

---

##### `peerRegion`<sup>Required</sup> <a name="peerRegion" id="@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachmentAccepter.Ec2TransitGatewayPeeringAttachmentAccepter.property.peerRegion"></a>

```typescript
public readonly peerRegion: string;
```

- *Type:* string

---

##### `peerTransitGatewayId`<sup>Required</sup> <a name="peerTransitGatewayId" id="@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachmentAccepter.Ec2TransitGatewayPeeringAttachmentAccepter.property.peerTransitGatewayId"></a>

```typescript
public readonly peerTransitGatewayId: string;
```

- *Type:* string

---

##### `transitGatewayId`<sup>Required</sup> <a name="transitGatewayId" id="@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachmentAccepter.Ec2TransitGatewayPeeringAttachmentAccepter.property.transitGatewayId"></a>

```typescript
public readonly transitGatewayId: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachmentAccepter.Ec2TransitGatewayPeeringAttachmentAccepter.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachmentAccepter.Ec2TransitGatewayPeeringAttachmentAccepter.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachmentAccepter.Ec2TransitGatewayPeeringAttachmentAccepter.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `transitGatewayAttachmentIdInput`<sup>Optional</sup> <a name="transitGatewayAttachmentIdInput" id="@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachmentAccepter.Ec2TransitGatewayPeeringAttachmentAccepter.property.transitGatewayAttachmentIdInput"></a>

```typescript
public readonly transitGatewayAttachmentIdInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachmentAccepter.Ec2TransitGatewayPeeringAttachmentAccepter.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachmentAccepter.Ec2TransitGatewayPeeringAttachmentAccepter.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachmentAccepter.Ec2TransitGatewayPeeringAttachmentAccepter.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `transitGatewayAttachmentId`<sup>Required</sup> <a name="transitGatewayAttachmentId" id="@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachmentAccepter.Ec2TransitGatewayPeeringAttachmentAccepter.property.transitGatewayAttachmentId"></a>

```typescript
public readonly transitGatewayAttachmentId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachmentAccepter.Ec2TransitGatewayPeeringAttachmentAccepter.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachmentAccepter.Ec2TransitGatewayPeeringAttachmentAccepter.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2TransitGatewayPeeringAttachmentAccepterConfig <a name="Ec2TransitGatewayPeeringAttachmentAccepterConfig" id="@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachmentAccepter.Ec2TransitGatewayPeeringAttachmentAccepterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachmentAccepter.Ec2TransitGatewayPeeringAttachmentAccepterConfig.Initializer"></a>

```typescript
import { ec2TransitGatewayPeeringAttachmentAccepter } from '@cdktf/aws-cdk'

const ec2TransitGatewayPeeringAttachmentAccepterConfig: ec2TransitGatewayPeeringAttachmentAccepter.Ec2TransitGatewayPeeringAttachmentAccepterConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachmentAccepter.Ec2TransitGatewayPeeringAttachmentAccepterConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachmentAccepter.Ec2TransitGatewayPeeringAttachmentAccepterConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachmentAccepter.Ec2TransitGatewayPeeringAttachmentAccepterConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachmentAccepter.Ec2TransitGatewayPeeringAttachmentAccepterConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachmentAccepter.Ec2TransitGatewayPeeringAttachmentAccepterConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachmentAccepter.Ec2TransitGatewayPeeringAttachmentAccepterConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachmentAccepter.Ec2TransitGatewayPeeringAttachmentAccepterConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachmentAccepter.Ec2TransitGatewayPeeringAttachmentAccepterConfig.property.transitGatewayAttachmentId">transitGatewayAttachmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/ec2_transit_gateway_peering_attachment_accepter#transit_gateway_attachment_id Ec2TransitGatewayPeeringAttachmentAccepter#transit_gateway_attachment_id}. |
| <code><a href="#@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachmentAccepter.Ec2TransitGatewayPeeringAttachmentAccepterConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/ec2_transit_gateway_peering_attachment_accepter#id Ec2TransitGatewayPeeringAttachmentAccepter#id}. |
| <code><a href="#@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachmentAccepter.Ec2TransitGatewayPeeringAttachmentAccepterConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/ec2_transit_gateway_peering_attachment_accepter#tags Ec2TransitGatewayPeeringAttachmentAccepter#tags}. |
| <code><a href="#@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachmentAccepter.Ec2TransitGatewayPeeringAttachmentAccepterConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/ec2_transit_gateway_peering_attachment_accepter#tags_all Ec2TransitGatewayPeeringAttachmentAccepter#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachmentAccepter.Ec2TransitGatewayPeeringAttachmentAccepterConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachmentAccepter.Ec2TransitGatewayPeeringAttachmentAccepterConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachmentAccepter.Ec2TransitGatewayPeeringAttachmentAccepterConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachmentAccepter.Ec2TransitGatewayPeeringAttachmentAccepterConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachmentAccepter.Ec2TransitGatewayPeeringAttachmentAccepterConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachmentAccepter.Ec2TransitGatewayPeeringAttachmentAccepterConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachmentAccepter.Ec2TransitGatewayPeeringAttachmentAccepterConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `transitGatewayAttachmentId`<sup>Required</sup> <a name="transitGatewayAttachmentId" id="@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachmentAccepter.Ec2TransitGatewayPeeringAttachmentAccepterConfig.property.transitGatewayAttachmentId"></a>

```typescript
public readonly transitGatewayAttachmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/ec2_transit_gateway_peering_attachment_accepter#transit_gateway_attachment_id Ec2TransitGatewayPeeringAttachmentAccepter#transit_gateway_attachment_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachmentAccepter.Ec2TransitGatewayPeeringAttachmentAccepterConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/ec2_transit_gateway_peering_attachment_accepter#id Ec2TransitGatewayPeeringAttachmentAccepter#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachmentAccepter.Ec2TransitGatewayPeeringAttachmentAccepterConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/ec2_transit_gateway_peering_attachment_accepter#tags Ec2TransitGatewayPeeringAttachmentAccepter#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachmentAccepter.Ec2TransitGatewayPeeringAttachmentAccepterConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/ec2_transit_gateway_peering_attachment_accepter#tags_all Ec2TransitGatewayPeeringAttachmentAccepter#tags_all}.

---



