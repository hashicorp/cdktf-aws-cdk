# `ec2TransitGatewayPeeringAttachment` Submodule <a name="`ec2TransitGatewayPeeringAttachment` Submodule" id="@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2TransitGatewayPeeringAttachment <a name="Ec2TransitGatewayPeeringAttachment" id="@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/ec2_transit_gateway_peering_attachment aws_ec2_transit_gateway_peering_attachment}.

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.Initializer"></a>

```typescript
import { ec2TransitGatewayPeeringAttachment } from '@cdktf/aws-cdk'

new ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment(scope: Construct, id: string, config: Ec2TransitGatewayPeeringAttachmentConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentConfig">Ec2TransitGatewayPeeringAttachmentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentConfig">Ec2TransitGatewayPeeringAttachmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.resetPeerAccountId">resetPeerAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.resetTagsAll">resetTagsAll</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetId` <a name="resetId" id="@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.resetId"></a>

```typescript
public resetId(): void
```

##### `resetPeerAccountId` <a name="resetPeerAccountId" id="@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.resetPeerAccountId"></a>

```typescript
public resetPeerAccountId(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a Ec2TransitGatewayPeeringAttachment resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.isConstruct"></a>

```typescript
import { ec2TransitGatewayPeeringAttachment } from '@cdktf/aws-cdk'

ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.isTerraformElement"></a>

```typescript
import { ec2TransitGatewayPeeringAttachment } from '@cdktf/aws-cdk'

ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.isTerraformResource"></a>

```typescript
import { ec2TransitGatewayPeeringAttachment } from '@cdktf/aws-cdk'

ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.generateConfigForImport"></a>

```typescript
import { ec2TransitGatewayPeeringAttachment } from '@cdktf/aws-cdk'

ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a Ec2TransitGatewayPeeringAttachment resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Ec2TransitGatewayPeeringAttachment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Ec2TransitGatewayPeeringAttachment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/ec2_transit_gateway_peering_attachment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the Ec2TransitGatewayPeeringAttachment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.peerAccountIdInput">peerAccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.peerRegionInput">peerRegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.peerTransitGatewayIdInput">peerTransitGatewayIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.transitGatewayIdInput">transitGatewayIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.peerAccountId">peerAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.peerRegion">peerRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.peerTransitGatewayId">peerTransitGatewayId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.transitGatewayId">transitGatewayId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `peerAccountIdInput`<sup>Optional</sup> <a name="peerAccountIdInput" id="@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.peerAccountIdInput"></a>

```typescript
public readonly peerAccountIdInput: string;
```

- *Type:* string

---

##### `peerRegionInput`<sup>Optional</sup> <a name="peerRegionInput" id="@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.peerRegionInput"></a>

```typescript
public readonly peerRegionInput: string;
```

- *Type:* string

---

##### `peerTransitGatewayIdInput`<sup>Optional</sup> <a name="peerTransitGatewayIdInput" id="@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.peerTransitGatewayIdInput"></a>

```typescript
public readonly peerTransitGatewayIdInput: string;
```

- *Type:* string

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `transitGatewayIdInput`<sup>Optional</sup> <a name="transitGatewayIdInput" id="@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.transitGatewayIdInput"></a>

```typescript
public readonly transitGatewayIdInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `peerAccountId`<sup>Required</sup> <a name="peerAccountId" id="@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.peerAccountId"></a>

```typescript
public readonly peerAccountId: string;
```

- *Type:* string

---

##### `peerRegion`<sup>Required</sup> <a name="peerRegion" id="@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.peerRegion"></a>

```typescript
public readonly peerRegion: string;
```

- *Type:* string

---

##### `peerTransitGatewayId`<sup>Required</sup> <a name="peerTransitGatewayId" id="@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.peerTransitGatewayId"></a>

```typescript
public readonly peerTransitGatewayId: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `transitGatewayId`<sup>Required</sup> <a name="transitGatewayId" id="@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.transitGatewayId"></a>

```typescript
public readonly transitGatewayId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachment.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2TransitGatewayPeeringAttachmentConfig <a name="Ec2TransitGatewayPeeringAttachmentConfig" id="@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentConfig.Initializer"></a>

```typescript
import { ec2TransitGatewayPeeringAttachment } from '@cdktf/aws-cdk'

const ec2TransitGatewayPeeringAttachmentConfig: ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentConfig.property.peerRegion">peerRegion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/ec2_transit_gateway_peering_attachment#peer_region Ec2TransitGatewayPeeringAttachment#peer_region}. |
| <code><a href="#@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentConfig.property.peerTransitGatewayId">peerTransitGatewayId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/ec2_transit_gateway_peering_attachment#peer_transit_gateway_id Ec2TransitGatewayPeeringAttachment#peer_transit_gateway_id}. |
| <code><a href="#@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentConfig.property.transitGatewayId">transitGatewayId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/ec2_transit_gateway_peering_attachment#transit_gateway_id Ec2TransitGatewayPeeringAttachment#transit_gateway_id}. |
| <code><a href="#@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/ec2_transit_gateway_peering_attachment#id Ec2TransitGatewayPeeringAttachment#id}. |
| <code><a href="#@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentConfig.property.peerAccountId">peerAccountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/ec2_transit_gateway_peering_attachment#peer_account_id Ec2TransitGatewayPeeringAttachment#peer_account_id}. |
| <code><a href="#@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/ec2_transit_gateway_peering_attachment#tags Ec2TransitGatewayPeeringAttachment#tags}. |
| <code><a href="#@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/ec2_transit_gateway_peering_attachment#tags_all Ec2TransitGatewayPeeringAttachment#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `peerRegion`<sup>Required</sup> <a name="peerRegion" id="@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentConfig.property.peerRegion"></a>

```typescript
public readonly peerRegion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/ec2_transit_gateway_peering_attachment#peer_region Ec2TransitGatewayPeeringAttachment#peer_region}.

---

##### `peerTransitGatewayId`<sup>Required</sup> <a name="peerTransitGatewayId" id="@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentConfig.property.peerTransitGatewayId"></a>

```typescript
public readonly peerTransitGatewayId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/ec2_transit_gateway_peering_attachment#peer_transit_gateway_id Ec2TransitGatewayPeeringAttachment#peer_transit_gateway_id}.

---

##### `transitGatewayId`<sup>Required</sup> <a name="transitGatewayId" id="@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentConfig.property.transitGatewayId"></a>

```typescript
public readonly transitGatewayId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/ec2_transit_gateway_peering_attachment#transit_gateway_id Ec2TransitGatewayPeeringAttachment#transit_gateway_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/ec2_transit_gateway_peering_attachment#id Ec2TransitGatewayPeeringAttachment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `peerAccountId`<sup>Optional</sup> <a name="peerAccountId" id="@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentConfig.property.peerAccountId"></a>

```typescript
public readonly peerAccountId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/ec2_transit_gateway_peering_attachment#peer_account_id Ec2TransitGatewayPeeringAttachment#peer_account_id}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/ec2_transit_gateway_peering_attachment#tags Ec2TransitGatewayPeeringAttachment#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/aws-cdk.ec2TransitGatewayPeeringAttachment.Ec2TransitGatewayPeeringAttachmentConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/ec2_transit_gateway_peering_attachment#tags_all Ec2TransitGatewayPeeringAttachment#tags_all}.

---



