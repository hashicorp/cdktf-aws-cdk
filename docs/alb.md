# `alb` Submodule <a name="`alb` Submodule" id="@cdktf/aws-cdk.alb"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Alb <a name="Alb" id="@cdktf/aws-cdk.alb.Alb"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/alb aws_alb}.

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.alb.Alb.Initializer"></a>

```typescript
import { alb } from '@cdktf/aws-cdk'

new alb.Alb(scope: Construct, id: string, config?: AlbConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.alb.Alb.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/aws-cdk.alb.Alb.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/aws-cdk.alb.Alb.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/aws-cdk.alb.AlbConfig">AlbConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.alb.Alb.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.alb.Alb.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/aws-cdk.alb.Alb.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/aws-cdk.alb.AlbConfig">AlbConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.alb.Alb.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/aws-cdk.alb.Alb.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.alb.Alb.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/aws-cdk.alb.Alb.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/aws-cdk.alb.Alb.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.alb.Alb.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.alb.Alb.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/aws-cdk.alb.Alb.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/aws-cdk.alb.Alb.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.alb.Alb.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.alb.Alb.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.alb.Alb.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.alb.Alb.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.alb.Alb.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.alb.Alb.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.alb.Alb.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.alb.Alb.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.alb.Alb.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.alb.Alb.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.alb.Alb.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.alb.Alb.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/aws-cdk.alb.Alb.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/aws-cdk.alb.Alb.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/aws-cdk.alb.Alb.putAccessLogs">putAccessLogs</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.alb.Alb.putSubnetMapping">putSubnetMapping</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.alb.Alb.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.alb.Alb.resetAccessLogs">resetAccessLogs</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.alb.Alb.resetCustomerOwnedIpv4Pool">resetCustomerOwnedIpv4Pool</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.alb.Alb.resetDesyncMitigationMode">resetDesyncMitigationMode</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.alb.Alb.resetDropInvalidHeaderFields">resetDropInvalidHeaderFields</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.alb.Alb.resetEnableCrossZoneLoadBalancing">resetEnableCrossZoneLoadBalancing</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.alb.Alb.resetEnableDeletionProtection">resetEnableDeletionProtection</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.alb.Alb.resetEnableHttp2">resetEnableHttp2</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.alb.Alb.resetEnableWafFailOpen">resetEnableWafFailOpen</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.alb.Alb.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.alb.Alb.resetIdleTimeout">resetIdleTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.alb.Alb.resetInternal">resetInternal</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.alb.Alb.resetIpAddressType">resetIpAddressType</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.alb.Alb.resetLoadBalancerType">resetLoadBalancerType</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.alb.Alb.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.alb.Alb.resetNamePrefix">resetNamePrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.alb.Alb.resetSecurityGroups">resetSecurityGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.alb.Alb.resetSubnetMapping">resetSubnetMapping</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.alb.Alb.resetSubnets">resetSubnets</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.alb.Alb.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.alb.Alb.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.alb.Alb.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.alb.Alb.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/aws-cdk.alb.Alb.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/aws-cdk.alb.Alb.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.alb.Alb.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/aws-cdk.alb.Alb.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/aws-cdk.alb.Alb.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/aws-cdk.alb.Alb.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/aws-cdk.alb.Alb.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/aws-cdk.alb.Alb.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/aws-cdk.alb.Alb.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/aws-cdk.alb.Alb.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/aws-cdk.alb.Alb.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.alb.Alb.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.alb.Alb.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.alb.Alb.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.alb.Alb.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.alb.Alb.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.alb.Alb.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.alb.Alb.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.alb.Alb.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.alb.Alb.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.alb.Alb.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.alb.Alb.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.alb.Alb.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.alb.Alb.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.alb.Alb.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.alb.Alb.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.alb.Alb.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.alb.Alb.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.alb.Alb.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/aws-cdk.alb.Alb.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/aws-cdk.alb.Alb.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.alb.Alb.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.alb.Alb.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.alb.Alb.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.alb.Alb.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/aws-cdk.alb.Alb.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.alb.Alb.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/aws-cdk.alb.Alb.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/aws-cdk.alb.Alb.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/aws-cdk.alb.Alb.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/aws-cdk.alb.Alb.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.alb.Alb.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAccessLogs` <a name="putAccessLogs" id="@cdktf/aws-cdk.alb.Alb.putAccessLogs"></a>

```typescript
public putAccessLogs(value: AlbAccessLogs): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.alb.Alb.putAccessLogs.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.alb.AlbAccessLogs">AlbAccessLogs</a>

---

##### `putSubnetMapping` <a name="putSubnetMapping" id="@cdktf/aws-cdk.alb.Alb.putSubnetMapping"></a>

```typescript
public putSubnetMapping(value: IResolvable | AlbSubnetMapping[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.alb.Alb.putSubnetMapping.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.alb.AlbSubnetMapping">AlbSubnetMapping</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/aws-cdk.alb.Alb.putTimeouts"></a>

```typescript
public putTimeouts(value: AlbTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.alb.Alb.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.alb.AlbTimeouts">AlbTimeouts</a>

---

##### `resetAccessLogs` <a name="resetAccessLogs" id="@cdktf/aws-cdk.alb.Alb.resetAccessLogs"></a>

```typescript
public resetAccessLogs(): void
```

##### `resetCustomerOwnedIpv4Pool` <a name="resetCustomerOwnedIpv4Pool" id="@cdktf/aws-cdk.alb.Alb.resetCustomerOwnedIpv4Pool"></a>

```typescript
public resetCustomerOwnedIpv4Pool(): void
```

##### `resetDesyncMitigationMode` <a name="resetDesyncMitigationMode" id="@cdktf/aws-cdk.alb.Alb.resetDesyncMitigationMode"></a>

```typescript
public resetDesyncMitigationMode(): void
```

##### `resetDropInvalidHeaderFields` <a name="resetDropInvalidHeaderFields" id="@cdktf/aws-cdk.alb.Alb.resetDropInvalidHeaderFields"></a>

```typescript
public resetDropInvalidHeaderFields(): void
```

##### `resetEnableCrossZoneLoadBalancing` <a name="resetEnableCrossZoneLoadBalancing" id="@cdktf/aws-cdk.alb.Alb.resetEnableCrossZoneLoadBalancing"></a>

```typescript
public resetEnableCrossZoneLoadBalancing(): void
```

##### `resetEnableDeletionProtection` <a name="resetEnableDeletionProtection" id="@cdktf/aws-cdk.alb.Alb.resetEnableDeletionProtection"></a>

```typescript
public resetEnableDeletionProtection(): void
```

##### `resetEnableHttp2` <a name="resetEnableHttp2" id="@cdktf/aws-cdk.alb.Alb.resetEnableHttp2"></a>

```typescript
public resetEnableHttp2(): void
```

##### `resetEnableWafFailOpen` <a name="resetEnableWafFailOpen" id="@cdktf/aws-cdk.alb.Alb.resetEnableWafFailOpen"></a>

```typescript
public resetEnableWafFailOpen(): void
```

##### `resetId` <a name="resetId" id="@cdktf/aws-cdk.alb.Alb.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIdleTimeout` <a name="resetIdleTimeout" id="@cdktf/aws-cdk.alb.Alb.resetIdleTimeout"></a>

```typescript
public resetIdleTimeout(): void
```

##### `resetInternal` <a name="resetInternal" id="@cdktf/aws-cdk.alb.Alb.resetInternal"></a>

```typescript
public resetInternal(): void
```

##### `resetIpAddressType` <a name="resetIpAddressType" id="@cdktf/aws-cdk.alb.Alb.resetIpAddressType"></a>

```typescript
public resetIpAddressType(): void
```

##### `resetLoadBalancerType` <a name="resetLoadBalancerType" id="@cdktf/aws-cdk.alb.Alb.resetLoadBalancerType"></a>

```typescript
public resetLoadBalancerType(): void
```

##### `resetName` <a name="resetName" id="@cdktf/aws-cdk.alb.Alb.resetName"></a>

```typescript
public resetName(): void
```

##### `resetNamePrefix` <a name="resetNamePrefix" id="@cdktf/aws-cdk.alb.Alb.resetNamePrefix"></a>

```typescript
public resetNamePrefix(): void
```

##### `resetSecurityGroups` <a name="resetSecurityGroups" id="@cdktf/aws-cdk.alb.Alb.resetSecurityGroups"></a>

```typescript
public resetSecurityGroups(): void
```

##### `resetSubnetMapping` <a name="resetSubnetMapping" id="@cdktf/aws-cdk.alb.Alb.resetSubnetMapping"></a>

```typescript
public resetSubnetMapping(): void
```

##### `resetSubnets` <a name="resetSubnets" id="@cdktf/aws-cdk.alb.Alb.resetSubnets"></a>

```typescript
public resetSubnets(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/aws-cdk.alb.Alb.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/aws-cdk.alb.Alb.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/aws-cdk.alb.Alb.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.alb.Alb.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/aws-cdk.alb.Alb.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.alb.Alb.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.alb.Alb.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a Alb resource upon running "cdktf plan <stack-name>". |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@cdktf/aws-cdk.alb.Alb.isConstruct"></a>

```typescript
import { alb } from '@cdktf/aws-cdk'

alb.Alb.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.alb.Alb.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/aws-cdk.alb.Alb.isTerraformElement"></a>

```typescript
import { alb } from '@cdktf/aws-cdk'

alb.Alb.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.alb.Alb.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/aws-cdk.alb.Alb.isTerraformResource"></a>

```typescript
import { alb } from '@cdktf/aws-cdk'

alb.Alb.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.alb.Alb.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/aws-cdk.alb.Alb.generateConfigForImport"></a>

```typescript
import { alb } from '@cdktf/aws-cdk'

alb.Alb.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a Alb resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.alb.Alb.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/aws-cdk.alb.Alb.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Alb to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/aws-cdk.alb.Alb.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Alb that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/alb#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.alb.Alb.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the Alb to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.alb.Alb.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/aws-cdk.alb.Alb.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.alb.Alb.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.alb.Alb.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.alb.Alb.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.alb.Alb.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.alb.Alb.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.alb.Alb.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.alb.Alb.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.alb.Alb.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.alb.Alb.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.alb.Alb.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.alb.Alb.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.alb.Alb.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.alb.Alb.property.accessLogs">accessLogs</a></code> | <code><a href="#@cdktf/aws-cdk.alb.AlbAccessLogsOutputReference">AlbAccessLogsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.alb.Alb.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.alb.Alb.property.arnSuffix">arnSuffix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.alb.Alb.property.dnsName">dnsName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.alb.Alb.property.subnetMapping">subnetMapping</a></code> | <code><a href="#@cdktf/aws-cdk.alb.AlbSubnetMappingList">AlbSubnetMappingList</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.alb.Alb.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/aws-cdk.alb.AlbTimeoutsOutputReference">AlbTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.alb.Alb.property.vpcId">vpcId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.alb.Alb.property.zoneId">zoneId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.alb.Alb.property.accessLogsInput">accessLogsInput</a></code> | <code><a href="#@cdktf/aws-cdk.alb.AlbAccessLogs">AlbAccessLogs</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.alb.Alb.property.customerOwnedIpv4PoolInput">customerOwnedIpv4PoolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.alb.Alb.property.desyncMitigationModeInput">desyncMitigationModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.alb.Alb.property.dropInvalidHeaderFieldsInput">dropInvalidHeaderFieldsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.alb.Alb.property.enableCrossZoneLoadBalancingInput">enableCrossZoneLoadBalancingInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.alb.Alb.property.enableDeletionProtectionInput">enableDeletionProtectionInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.alb.Alb.property.enableHttp2Input">enableHttp2Input</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.alb.Alb.property.enableWafFailOpenInput">enableWafFailOpenInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.alb.Alb.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.alb.Alb.property.idleTimeoutInput">idleTimeoutInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.alb.Alb.property.internalInput">internalInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.alb.Alb.property.ipAddressTypeInput">ipAddressTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.alb.Alb.property.loadBalancerTypeInput">loadBalancerTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.alb.Alb.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.alb.Alb.property.namePrefixInput">namePrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.alb.Alb.property.securityGroupsInput">securityGroupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.alb.Alb.property.subnetMappingInput">subnetMappingInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.alb.AlbSubnetMapping">AlbSubnetMapping</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.alb.Alb.property.subnetsInput">subnetsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.alb.Alb.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.alb.Alb.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.alb.Alb.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.alb.AlbTimeouts">AlbTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.alb.Alb.property.customerOwnedIpv4Pool">customerOwnedIpv4Pool</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.alb.Alb.property.desyncMitigationMode">desyncMitigationMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.alb.Alb.property.dropInvalidHeaderFields">dropInvalidHeaderFields</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.alb.Alb.property.enableCrossZoneLoadBalancing">enableCrossZoneLoadBalancing</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.alb.Alb.property.enableDeletionProtection">enableDeletionProtection</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.alb.Alb.property.enableHttp2">enableHttp2</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.alb.Alb.property.enableWafFailOpen">enableWafFailOpen</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.alb.Alb.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.alb.Alb.property.idleTimeout">idleTimeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.alb.Alb.property.internal">internal</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.alb.Alb.property.ipAddressType">ipAddressType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.alb.Alb.property.loadBalancerType">loadBalancerType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.alb.Alb.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.alb.Alb.property.namePrefix">namePrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.alb.Alb.property.securityGroups">securityGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.alb.Alb.property.subnets">subnets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.alb.Alb.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.alb.Alb.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/aws-cdk.alb.Alb.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/aws-cdk.alb.Alb.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.alb.Alb.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/aws-cdk.alb.Alb.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/aws-cdk.alb.Alb.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/aws-cdk.alb.Alb.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/aws-cdk.alb.Alb.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.alb.Alb.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.alb.Alb.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.alb.Alb.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.alb.Alb.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.alb.Alb.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.alb.Alb.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.alb.Alb.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `accessLogs`<sup>Required</sup> <a name="accessLogs" id="@cdktf/aws-cdk.alb.Alb.property.accessLogs"></a>

```typescript
public readonly accessLogs: AlbAccessLogsOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.alb.AlbAccessLogsOutputReference">AlbAccessLogsOutputReference</a>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/aws-cdk.alb.Alb.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `arnSuffix`<sup>Required</sup> <a name="arnSuffix" id="@cdktf/aws-cdk.alb.Alb.property.arnSuffix"></a>

```typescript
public readonly arnSuffix: string;
```

- *Type:* string

---

##### `dnsName`<sup>Required</sup> <a name="dnsName" id="@cdktf/aws-cdk.alb.Alb.property.dnsName"></a>

```typescript
public readonly dnsName: string;
```

- *Type:* string

---

##### `subnetMapping`<sup>Required</sup> <a name="subnetMapping" id="@cdktf/aws-cdk.alb.Alb.property.subnetMapping"></a>

```typescript
public readonly subnetMapping: AlbSubnetMappingList;
```

- *Type:* <a href="#@cdktf/aws-cdk.alb.AlbSubnetMappingList">AlbSubnetMappingList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/aws-cdk.alb.Alb.property.timeouts"></a>

```typescript
public readonly timeouts: AlbTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.alb.AlbTimeoutsOutputReference">AlbTimeoutsOutputReference</a>

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktf/aws-cdk.alb.Alb.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktf/aws-cdk.alb.Alb.property.zoneId"></a>

```typescript
public readonly zoneId: string;
```

- *Type:* string

---

##### `accessLogsInput`<sup>Optional</sup> <a name="accessLogsInput" id="@cdktf/aws-cdk.alb.Alb.property.accessLogsInput"></a>

```typescript
public readonly accessLogsInput: AlbAccessLogs;
```

- *Type:* <a href="#@cdktf/aws-cdk.alb.AlbAccessLogs">AlbAccessLogs</a>

---

##### `customerOwnedIpv4PoolInput`<sup>Optional</sup> <a name="customerOwnedIpv4PoolInput" id="@cdktf/aws-cdk.alb.Alb.property.customerOwnedIpv4PoolInput"></a>

```typescript
public readonly customerOwnedIpv4PoolInput: string;
```

- *Type:* string

---

##### `desyncMitigationModeInput`<sup>Optional</sup> <a name="desyncMitigationModeInput" id="@cdktf/aws-cdk.alb.Alb.property.desyncMitigationModeInput"></a>

```typescript
public readonly desyncMitigationModeInput: string;
```

- *Type:* string

---

##### `dropInvalidHeaderFieldsInput`<sup>Optional</sup> <a name="dropInvalidHeaderFieldsInput" id="@cdktf/aws-cdk.alb.Alb.property.dropInvalidHeaderFieldsInput"></a>

```typescript
public readonly dropInvalidHeaderFieldsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableCrossZoneLoadBalancingInput`<sup>Optional</sup> <a name="enableCrossZoneLoadBalancingInput" id="@cdktf/aws-cdk.alb.Alb.property.enableCrossZoneLoadBalancingInput"></a>

```typescript
public readonly enableCrossZoneLoadBalancingInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableDeletionProtectionInput`<sup>Optional</sup> <a name="enableDeletionProtectionInput" id="@cdktf/aws-cdk.alb.Alb.property.enableDeletionProtectionInput"></a>

```typescript
public readonly enableDeletionProtectionInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableHttp2Input`<sup>Optional</sup> <a name="enableHttp2Input" id="@cdktf/aws-cdk.alb.Alb.property.enableHttp2Input"></a>

```typescript
public readonly enableHttp2Input: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableWafFailOpenInput`<sup>Optional</sup> <a name="enableWafFailOpenInput" id="@cdktf/aws-cdk.alb.Alb.property.enableWafFailOpenInput"></a>

```typescript
public readonly enableWafFailOpenInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/aws-cdk.alb.Alb.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `idleTimeoutInput`<sup>Optional</sup> <a name="idleTimeoutInput" id="@cdktf/aws-cdk.alb.Alb.property.idleTimeoutInput"></a>

```typescript
public readonly idleTimeoutInput: number;
```

- *Type:* number

---

##### `internalInput`<sup>Optional</sup> <a name="internalInput" id="@cdktf/aws-cdk.alb.Alb.property.internalInput"></a>

```typescript
public readonly internalInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `ipAddressTypeInput`<sup>Optional</sup> <a name="ipAddressTypeInput" id="@cdktf/aws-cdk.alb.Alb.property.ipAddressTypeInput"></a>

```typescript
public readonly ipAddressTypeInput: string;
```

- *Type:* string

---

##### `loadBalancerTypeInput`<sup>Optional</sup> <a name="loadBalancerTypeInput" id="@cdktf/aws-cdk.alb.Alb.property.loadBalancerTypeInput"></a>

```typescript
public readonly loadBalancerTypeInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/aws-cdk.alb.Alb.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `namePrefixInput`<sup>Optional</sup> <a name="namePrefixInput" id="@cdktf/aws-cdk.alb.Alb.property.namePrefixInput"></a>

```typescript
public readonly namePrefixInput: string;
```

- *Type:* string

---

##### `securityGroupsInput`<sup>Optional</sup> <a name="securityGroupsInput" id="@cdktf/aws-cdk.alb.Alb.property.securityGroupsInput"></a>

```typescript
public readonly securityGroupsInput: string[];
```

- *Type:* string[]

---

##### `subnetMappingInput`<sup>Optional</sup> <a name="subnetMappingInput" id="@cdktf/aws-cdk.alb.Alb.property.subnetMappingInput"></a>

```typescript
public readonly subnetMappingInput: IResolvable | AlbSubnetMapping[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.alb.AlbSubnetMapping">AlbSubnetMapping</a>[]

---

##### `subnetsInput`<sup>Optional</sup> <a name="subnetsInput" id="@cdktf/aws-cdk.alb.Alb.property.subnetsInput"></a>

```typescript
public readonly subnetsInput: string[];
```

- *Type:* string[]

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/aws-cdk.alb.Alb.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/aws-cdk.alb.Alb.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/aws-cdk.alb.Alb.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | AlbTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.alb.AlbTimeouts">AlbTimeouts</a>

---

##### `customerOwnedIpv4Pool`<sup>Required</sup> <a name="customerOwnedIpv4Pool" id="@cdktf/aws-cdk.alb.Alb.property.customerOwnedIpv4Pool"></a>

```typescript
public readonly customerOwnedIpv4Pool: string;
```

- *Type:* string

---

##### `desyncMitigationMode`<sup>Required</sup> <a name="desyncMitigationMode" id="@cdktf/aws-cdk.alb.Alb.property.desyncMitigationMode"></a>

```typescript
public readonly desyncMitigationMode: string;
```

- *Type:* string

---

##### `dropInvalidHeaderFields`<sup>Required</sup> <a name="dropInvalidHeaderFields" id="@cdktf/aws-cdk.alb.Alb.property.dropInvalidHeaderFields"></a>

```typescript
public readonly dropInvalidHeaderFields: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableCrossZoneLoadBalancing`<sup>Required</sup> <a name="enableCrossZoneLoadBalancing" id="@cdktf/aws-cdk.alb.Alb.property.enableCrossZoneLoadBalancing"></a>

```typescript
public readonly enableCrossZoneLoadBalancing: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableDeletionProtection`<sup>Required</sup> <a name="enableDeletionProtection" id="@cdktf/aws-cdk.alb.Alb.property.enableDeletionProtection"></a>

```typescript
public readonly enableDeletionProtection: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableHttp2`<sup>Required</sup> <a name="enableHttp2" id="@cdktf/aws-cdk.alb.Alb.property.enableHttp2"></a>

```typescript
public readonly enableHttp2: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableWafFailOpen`<sup>Required</sup> <a name="enableWafFailOpen" id="@cdktf/aws-cdk.alb.Alb.property.enableWafFailOpen"></a>

```typescript
public readonly enableWafFailOpen: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.alb.Alb.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `idleTimeout`<sup>Required</sup> <a name="idleTimeout" id="@cdktf/aws-cdk.alb.Alb.property.idleTimeout"></a>

```typescript
public readonly idleTimeout: number;
```

- *Type:* number

---

##### `internal`<sup>Required</sup> <a name="internal" id="@cdktf/aws-cdk.alb.Alb.property.internal"></a>

```typescript
public readonly internal: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `ipAddressType`<sup>Required</sup> <a name="ipAddressType" id="@cdktf/aws-cdk.alb.Alb.property.ipAddressType"></a>

```typescript
public readonly ipAddressType: string;
```

- *Type:* string

---

##### `loadBalancerType`<sup>Required</sup> <a name="loadBalancerType" id="@cdktf/aws-cdk.alb.Alb.property.loadBalancerType"></a>

```typescript
public readonly loadBalancerType: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/aws-cdk.alb.Alb.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `namePrefix`<sup>Required</sup> <a name="namePrefix" id="@cdktf/aws-cdk.alb.Alb.property.namePrefix"></a>

```typescript
public readonly namePrefix: string;
```

- *Type:* string

---

##### `securityGroups`<sup>Required</sup> <a name="securityGroups" id="@cdktf/aws-cdk.alb.Alb.property.securityGroups"></a>

```typescript
public readonly securityGroups: string[];
```

- *Type:* string[]

---

##### `subnets`<sup>Required</sup> <a name="subnets" id="@cdktf/aws-cdk.alb.Alb.property.subnets"></a>

```typescript
public readonly subnets: string[];
```

- *Type:* string[]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/aws-cdk.alb.Alb.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/aws-cdk.alb.Alb.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.alb.Alb.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/aws-cdk.alb.Alb.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AlbAccessLogs <a name="AlbAccessLogs" id="@cdktf/aws-cdk.alb.AlbAccessLogs"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.alb.AlbAccessLogs.Initializer"></a>

```typescript
import { alb } from '@cdktf/aws-cdk'

const albAccessLogs: alb.AlbAccessLogs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.alb.AlbAccessLogs.property.bucket">bucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/alb#bucket Alb#bucket}. |
| <code><a href="#@cdktf/aws-cdk.alb.AlbAccessLogs.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/alb#enabled Alb#enabled}. |
| <code><a href="#@cdktf/aws-cdk.alb.AlbAccessLogs.property.prefix">prefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/alb#prefix Alb#prefix}. |

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/aws-cdk.alb.AlbAccessLogs.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/alb#bucket Alb#bucket}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/aws-cdk.alb.AlbAccessLogs.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/alb#enabled Alb#enabled}.

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktf/aws-cdk.alb.AlbAccessLogs.property.prefix"></a>

```typescript
public readonly prefix: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/alb#prefix Alb#prefix}.

---

### AlbConfig <a name="AlbConfig" id="@cdktf/aws-cdk.alb.AlbConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.alb.AlbConfig.Initializer"></a>

```typescript
import { alb } from '@cdktf/aws-cdk'

const albConfig: alb.AlbConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.alb.AlbConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.alb.AlbConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.alb.AlbConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.alb.AlbConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.alb.AlbConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.alb.AlbConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.alb.AlbConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.alb.AlbConfig.property.accessLogs">accessLogs</a></code> | <code><a href="#@cdktf/aws-cdk.alb.AlbAccessLogs">AlbAccessLogs</a></code> | access_logs block. |
| <code><a href="#@cdktf/aws-cdk.alb.AlbConfig.property.customerOwnedIpv4Pool">customerOwnedIpv4Pool</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/alb#customer_owned_ipv4_pool Alb#customer_owned_ipv4_pool}. |
| <code><a href="#@cdktf/aws-cdk.alb.AlbConfig.property.desyncMitigationMode">desyncMitigationMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/alb#desync_mitigation_mode Alb#desync_mitigation_mode}. |
| <code><a href="#@cdktf/aws-cdk.alb.AlbConfig.property.dropInvalidHeaderFields">dropInvalidHeaderFields</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/alb#drop_invalid_header_fields Alb#drop_invalid_header_fields}. |
| <code><a href="#@cdktf/aws-cdk.alb.AlbConfig.property.enableCrossZoneLoadBalancing">enableCrossZoneLoadBalancing</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/alb#enable_cross_zone_load_balancing Alb#enable_cross_zone_load_balancing}. |
| <code><a href="#@cdktf/aws-cdk.alb.AlbConfig.property.enableDeletionProtection">enableDeletionProtection</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/alb#enable_deletion_protection Alb#enable_deletion_protection}. |
| <code><a href="#@cdktf/aws-cdk.alb.AlbConfig.property.enableHttp2">enableHttp2</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/alb#enable_http2 Alb#enable_http2}. |
| <code><a href="#@cdktf/aws-cdk.alb.AlbConfig.property.enableWafFailOpen">enableWafFailOpen</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/alb#enable_waf_fail_open Alb#enable_waf_fail_open}. |
| <code><a href="#@cdktf/aws-cdk.alb.AlbConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/alb#id Alb#id}. |
| <code><a href="#@cdktf/aws-cdk.alb.AlbConfig.property.idleTimeout">idleTimeout</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/alb#idle_timeout Alb#idle_timeout}. |
| <code><a href="#@cdktf/aws-cdk.alb.AlbConfig.property.internal">internal</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/alb#internal Alb#internal}. |
| <code><a href="#@cdktf/aws-cdk.alb.AlbConfig.property.ipAddressType">ipAddressType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/alb#ip_address_type Alb#ip_address_type}. |
| <code><a href="#@cdktf/aws-cdk.alb.AlbConfig.property.loadBalancerType">loadBalancerType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/alb#load_balancer_type Alb#load_balancer_type}. |
| <code><a href="#@cdktf/aws-cdk.alb.AlbConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/alb#name Alb#name}. |
| <code><a href="#@cdktf/aws-cdk.alb.AlbConfig.property.namePrefix">namePrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/alb#name_prefix Alb#name_prefix}. |
| <code><a href="#@cdktf/aws-cdk.alb.AlbConfig.property.securityGroups">securityGroups</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/alb#security_groups Alb#security_groups}. |
| <code><a href="#@cdktf/aws-cdk.alb.AlbConfig.property.subnetMapping">subnetMapping</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.alb.AlbSubnetMapping">AlbSubnetMapping</a>[]</code> | subnet_mapping block. |
| <code><a href="#@cdktf/aws-cdk.alb.AlbConfig.property.subnets">subnets</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/alb#subnets Alb#subnets}. |
| <code><a href="#@cdktf/aws-cdk.alb.AlbConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/alb#tags Alb#tags}. |
| <code><a href="#@cdktf/aws-cdk.alb.AlbConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/alb#tags_all Alb#tags_all}. |
| <code><a href="#@cdktf/aws-cdk.alb.AlbConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/aws-cdk.alb.AlbTimeouts">AlbTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.alb.AlbConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.alb.AlbConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.alb.AlbConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.alb.AlbConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.alb.AlbConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.alb.AlbConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.alb.AlbConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `accessLogs`<sup>Optional</sup> <a name="accessLogs" id="@cdktf/aws-cdk.alb.AlbConfig.property.accessLogs"></a>

```typescript
public readonly accessLogs: AlbAccessLogs;
```

- *Type:* <a href="#@cdktf/aws-cdk.alb.AlbAccessLogs">AlbAccessLogs</a>

access_logs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/alb#access_logs Alb#access_logs}

---

##### `customerOwnedIpv4Pool`<sup>Optional</sup> <a name="customerOwnedIpv4Pool" id="@cdktf/aws-cdk.alb.AlbConfig.property.customerOwnedIpv4Pool"></a>

```typescript
public readonly customerOwnedIpv4Pool: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/alb#customer_owned_ipv4_pool Alb#customer_owned_ipv4_pool}.

---

##### `desyncMitigationMode`<sup>Optional</sup> <a name="desyncMitigationMode" id="@cdktf/aws-cdk.alb.AlbConfig.property.desyncMitigationMode"></a>

```typescript
public readonly desyncMitigationMode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/alb#desync_mitigation_mode Alb#desync_mitigation_mode}.

---

##### `dropInvalidHeaderFields`<sup>Optional</sup> <a name="dropInvalidHeaderFields" id="@cdktf/aws-cdk.alb.AlbConfig.property.dropInvalidHeaderFields"></a>

```typescript
public readonly dropInvalidHeaderFields: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/alb#drop_invalid_header_fields Alb#drop_invalid_header_fields}.

---

##### `enableCrossZoneLoadBalancing`<sup>Optional</sup> <a name="enableCrossZoneLoadBalancing" id="@cdktf/aws-cdk.alb.AlbConfig.property.enableCrossZoneLoadBalancing"></a>

```typescript
public readonly enableCrossZoneLoadBalancing: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/alb#enable_cross_zone_load_balancing Alb#enable_cross_zone_load_balancing}.

---

##### `enableDeletionProtection`<sup>Optional</sup> <a name="enableDeletionProtection" id="@cdktf/aws-cdk.alb.AlbConfig.property.enableDeletionProtection"></a>

```typescript
public readonly enableDeletionProtection: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/alb#enable_deletion_protection Alb#enable_deletion_protection}.

---

##### `enableHttp2`<sup>Optional</sup> <a name="enableHttp2" id="@cdktf/aws-cdk.alb.AlbConfig.property.enableHttp2"></a>

```typescript
public readonly enableHttp2: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/alb#enable_http2 Alb#enable_http2}.

---

##### `enableWafFailOpen`<sup>Optional</sup> <a name="enableWafFailOpen" id="@cdktf/aws-cdk.alb.AlbConfig.property.enableWafFailOpen"></a>

```typescript
public readonly enableWafFailOpen: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/alb#enable_waf_fail_open Alb#enable_waf_fail_open}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/aws-cdk.alb.AlbConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/alb#id Alb#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `idleTimeout`<sup>Optional</sup> <a name="idleTimeout" id="@cdktf/aws-cdk.alb.AlbConfig.property.idleTimeout"></a>

```typescript
public readonly idleTimeout: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/alb#idle_timeout Alb#idle_timeout}.

---

##### `internal`<sup>Optional</sup> <a name="internal" id="@cdktf/aws-cdk.alb.AlbConfig.property.internal"></a>

```typescript
public readonly internal: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/alb#internal Alb#internal}.

---

##### `ipAddressType`<sup>Optional</sup> <a name="ipAddressType" id="@cdktf/aws-cdk.alb.AlbConfig.property.ipAddressType"></a>

```typescript
public readonly ipAddressType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/alb#ip_address_type Alb#ip_address_type}.

---

##### `loadBalancerType`<sup>Optional</sup> <a name="loadBalancerType" id="@cdktf/aws-cdk.alb.AlbConfig.property.loadBalancerType"></a>

```typescript
public readonly loadBalancerType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/alb#load_balancer_type Alb#load_balancer_type}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/aws-cdk.alb.AlbConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/alb#name Alb#name}.

---

##### `namePrefix`<sup>Optional</sup> <a name="namePrefix" id="@cdktf/aws-cdk.alb.AlbConfig.property.namePrefix"></a>

```typescript
public readonly namePrefix: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/alb#name_prefix Alb#name_prefix}.

---

##### `securityGroups`<sup>Optional</sup> <a name="securityGroups" id="@cdktf/aws-cdk.alb.AlbConfig.property.securityGroups"></a>

```typescript
public readonly securityGroups: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/alb#security_groups Alb#security_groups}.

---

##### `subnetMapping`<sup>Optional</sup> <a name="subnetMapping" id="@cdktf/aws-cdk.alb.AlbConfig.property.subnetMapping"></a>

```typescript
public readonly subnetMapping: IResolvable | AlbSubnetMapping[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.alb.AlbSubnetMapping">AlbSubnetMapping</a>[]

subnet_mapping block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/alb#subnet_mapping Alb#subnet_mapping}

---

##### `subnets`<sup>Optional</sup> <a name="subnets" id="@cdktf/aws-cdk.alb.AlbConfig.property.subnets"></a>

```typescript
public readonly subnets: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/alb#subnets Alb#subnets}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/aws-cdk.alb.AlbConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/alb#tags Alb#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/aws-cdk.alb.AlbConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/alb#tags_all Alb#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/aws-cdk.alb.AlbConfig.property.timeouts"></a>

```typescript
public readonly timeouts: AlbTimeouts;
```

- *Type:* <a href="#@cdktf/aws-cdk.alb.AlbTimeouts">AlbTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/alb#timeouts Alb#timeouts}

---

### AlbSubnetMapping <a name="AlbSubnetMapping" id="@cdktf/aws-cdk.alb.AlbSubnetMapping"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.alb.AlbSubnetMapping.Initializer"></a>

```typescript
import { alb } from '@cdktf/aws-cdk'

const albSubnetMapping: alb.AlbSubnetMapping = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.alb.AlbSubnetMapping.property.subnetId">subnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/alb#subnet_id Alb#subnet_id}. |
| <code><a href="#@cdktf/aws-cdk.alb.AlbSubnetMapping.property.allocationId">allocationId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/alb#allocation_id Alb#allocation_id}. |
| <code><a href="#@cdktf/aws-cdk.alb.AlbSubnetMapping.property.ipv6Address">ipv6Address</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/alb#ipv6_address Alb#ipv6_address}. |
| <code><a href="#@cdktf/aws-cdk.alb.AlbSubnetMapping.property.privateIpv4Address">privateIpv4Address</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/alb#private_ipv4_address Alb#private_ipv4_address}. |

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktf/aws-cdk.alb.AlbSubnetMapping.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/alb#subnet_id Alb#subnet_id}.

---

##### `allocationId`<sup>Optional</sup> <a name="allocationId" id="@cdktf/aws-cdk.alb.AlbSubnetMapping.property.allocationId"></a>

```typescript
public readonly allocationId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/alb#allocation_id Alb#allocation_id}.

---

##### `ipv6Address`<sup>Optional</sup> <a name="ipv6Address" id="@cdktf/aws-cdk.alb.AlbSubnetMapping.property.ipv6Address"></a>

```typescript
public readonly ipv6Address: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/alb#ipv6_address Alb#ipv6_address}.

---

##### `privateIpv4Address`<sup>Optional</sup> <a name="privateIpv4Address" id="@cdktf/aws-cdk.alb.AlbSubnetMapping.property.privateIpv4Address"></a>

```typescript
public readonly privateIpv4Address: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/alb#private_ipv4_address Alb#private_ipv4_address}.

---

### AlbTimeouts <a name="AlbTimeouts" id="@cdktf/aws-cdk.alb.AlbTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.alb.AlbTimeouts.Initializer"></a>

```typescript
import { alb } from '@cdktf/aws-cdk'

const albTimeouts: alb.AlbTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.alb.AlbTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/alb#create Alb#create}. |
| <code><a href="#@cdktf/aws-cdk.alb.AlbTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/alb#delete Alb#delete}. |
| <code><a href="#@cdktf/aws-cdk.alb.AlbTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/alb#update Alb#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/aws-cdk.alb.AlbTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/alb#create Alb#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/aws-cdk.alb.AlbTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/alb#delete Alb#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/aws-cdk.alb.AlbTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/alb#update Alb#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### AlbAccessLogsOutputReference <a name="AlbAccessLogsOutputReference" id="@cdktf/aws-cdk.alb.AlbAccessLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.alb.AlbAccessLogsOutputReference.Initializer"></a>

```typescript
import { alb } from '@cdktf/aws-cdk'

new alb.AlbAccessLogsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.alb.AlbAccessLogsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.alb.AlbAccessLogsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.alb.AlbAccessLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.alb.AlbAccessLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.alb.AlbAccessLogsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.alb.AlbAccessLogsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.alb.AlbAccessLogsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.alb.AlbAccessLogsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.alb.AlbAccessLogsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.alb.AlbAccessLogsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.alb.AlbAccessLogsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.alb.AlbAccessLogsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.alb.AlbAccessLogsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.alb.AlbAccessLogsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.alb.AlbAccessLogsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.alb.AlbAccessLogsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.alb.AlbAccessLogsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.alb.AlbAccessLogsOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.alb.AlbAccessLogsOutputReference.resetPrefix">resetPrefix</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.alb.AlbAccessLogsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.alb.AlbAccessLogsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.alb.AlbAccessLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.alb.AlbAccessLogsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.alb.AlbAccessLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.alb.AlbAccessLogsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.alb.AlbAccessLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.alb.AlbAccessLogsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.alb.AlbAccessLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.alb.AlbAccessLogsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.alb.AlbAccessLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.alb.AlbAccessLogsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.alb.AlbAccessLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.alb.AlbAccessLogsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.alb.AlbAccessLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.alb.AlbAccessLogsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.alb.AlbAccessLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.alb.AlbAccessLogsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.alb.AlbAccessLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.alb.AlbAccessLogsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.alb.AlbAccessLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.alb.AlbAccessLogsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.alb.AlbAccessLogsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.alb.AlbAccessLogsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/aws-cdk.alb.AlbAccessLogsOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetPrefix` <a name="resetPrefix" id="@cdktf/aws-cdk.alb.AlbAccessLogsOutputReference.resetPrefix"></a>

```typescript
public resetPrefix(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.alb.AlbAccessLogsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.alb.AlbAccessLogsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.alb.AlbAccessLogsOutputReference.property.bucketInput">bucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.alb.AlbAccessLogsOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.alb.AlbAccessLogsOutputReference.property.prefixInput">prefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.alb.AlbAccessLogsOutputReference.property.bucket">bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.alb.AlbAccessLogsOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.alb.AlbAccessLogsOutputReference.property.prefix">prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.alb.AlbAccessLogsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.alb.AlbAccessLogs">AlbAccessLogs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.alb.AlbAccessLogsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.alb.AlbAccessLogsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktf/aws-cdk.alb.AlbAccessLogsOutputReference.property.bucketInput"></a>

```typescript
public readonly bucketInput: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/aws-cdk.alb.AlbAccessLogsOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `prefixInput`<sup>Optional</sup> <a name="prefixInput" id="@cdktf/aws-cdk.alb.AlbAccessLogsOutputReference.property.prefixInput"></a>

```typescript
public readonly prefixInput: string;
```

- *Type:* string

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/aws-cdk.alb.AlbAccessLogsOutputReference.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/aws-cdk.alb.AlbAccessLogsOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktf/aws-cdk.alb.AlbAccessLogsOutputReference.property.prefix"></a>

```typescript
public readonly prefix: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.alb.AlbAccessLogsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AlbAccessLogs;
```

- *Type:* <a href="#@cdktf/aws-cdk.alb.AlbAccessLogs">AlbAccessLogs</a>

---


### AlbSubnetMappingList <a name="AlbSubnetMappingList" id="@cdktf/aws-cdk.alb.AlbSubnetMappingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.alb.AlbSubnetMappingList.Initializer"></a>

```typescript
import { alb } from '@cdktf/aws-cdk'

new alb.AlbSubnetMappingList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.alb.AlbSubnetMappingList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.alb.AlbSubnetMappingList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.alb.AlbSubnetMappingList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.alb.AlbSubnetMappingList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.alb.AlbSubnetMappingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/aws-cdk.alb.AlbSubnetMappingList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.alb.AlbSubnetMappingList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/aws-cdk.alb.AlbSubnetMappingList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.alb.AlbSubnetMappingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.alb.AlbSubnetMappingList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.alb.AlbSubnetMappingList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/aws-cdk.alb.AlbSubnetMappingList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/aws-cdk.alb.AlbSubnetMappingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.alb.AlbSubnetMappingList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.alb.AlbSubnetMappingList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.alb.AlbSubnetMappingList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.alb.AlbSubnetMappingList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/aws-cdk.alb.AlbSubnetMappingList.get"></a>

```typescript
public get(index: number): AlbSubnetMappingOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/aws-cdk.alb.AlbSubnetMappingList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.alb.AlbSubnetMappingList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.alb.AlbSubnetMappingList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.alb.AlbSubnetMappingList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.alb.AlbSubnetMapping">AlbSubnetMapping</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.alb.AlbSubnetMappingList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.alb.AlbSubnetMappingList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.alb.AlbSubnetMappingList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AlbSubnetMapping[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.alb.AlbSubnetMapping">AlbSubnetMapping</a>[]

---


### AlbSubnetMappingOutputReference <a name="AlbSubnetMappingOutputReference" id="@cdktf/aws-cdk.alb.AlbSubnetMappingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.alb.AlbSubnetMappingOutputReference.Initializer"></a>

```typescript
import { alb } from '@cdktf/aws-cdk'

new alb.AlbSubnetMappingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.alb.AlbSubnetMappingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.alb.AlbSubnetMappingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.alb.AlbSubnetMappingOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/aws-cdk.alb.AlbSubnetMappingOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.alb.AlbSubnetMappingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.alb.AlbSubnetMappingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/aws-cdk.alb.AlbSubnetMappingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/aws-cdk.alb.AlbSubnetMappingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.alb.AlbSubnetMappingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.alb.AlbSubnetMappingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.alb.AlbSubnetMappingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.alb.AlbSubnetMappingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.alb.AlbSubnetMappingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.alb.AlbSubnetMappingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.alb.AlbSubnetMappingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.alb.AlbSubnetMappingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.alb.AlbSubnetMappingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.alb.AlbSubnetMappingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.alb.AlbSubnetMappingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.alb.AlbSubnetMappingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.alb.AlbSubnetMappingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.alb.AlbSubnetMappingOutputReference.resetAllocationId">resetAllocationId</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.alb.AlbSubnetMappingOutputReference.resetIpv6Address">resetIpv6Address</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.alb.AlbSubnetMappingOutputReference.resetPrivateIpv4Address">resetPrivateIpv4Address</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.alb.AlbSubnetMappingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.alb.AlbSubnetMappingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.alb.AlbSubnetMappingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.alb.AlbSubnetMappingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.alb.AlbSubnetMappingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.alb.AlbSubnetMappingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.alb.AlbSubnetMappingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.alb.AlbSubnetMappingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.alb.AlbSubnetMappingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.alb.AlbSubnetMappingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.alb.AlbSubnetMappingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.alb.AlbSubnetMappingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.alb.AlbSubnetMappingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.alb.AlbSubnetMappingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.alb.AlbSubnetMappingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.alb.AlbSubnetMappingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.alb.AlbSubnetMappingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.alb.AlbSubnetMappingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.alb.AlbSubnetMappingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.alb.AlbSubnetMappingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.alb.AlbSubnetMappingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.alb.AlbSubnetMappingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.alb.AlbSubnetMappingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.alb.AlbSubnetMappingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllocationId` <a name="resetAllocationId" id="@cdktf/aws-cdk.alb.AlbSubnetMappingOutputReference.resetAllocationId"></a>

```typescript
public resetAllocationId(): void
```

##### `resetIpv6Address` <a name="resetIpv6Address" id="@cdktf/aws-cdk.alb.AlbSubnetMappingOutputReference.resetIpv6Address"></a>

```typescript
public resetIpv6Address(): void
```

##### `resetPrivateIpv4Address` <a name="resetPrivateIpv4Address" id="@cdktf/aws-cdk.alb.AlbSubnetMappingOutputReference.resetPrivateIpv4Address"></a>

```typescript
public resetPrivateIpv4Address(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.alb.AlbSubnetMappingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.alb.AlbSubnetMappingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.alb.AlbSubnetMappingOutputReference.property.outpostId">outpostId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.alb.AlbSubnetMappingOutputReference.property.allocationIdInput">allocationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.alb.AlbSubnetMappingOutputReference.property.ipv6AddressInput">ipv6AddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.alb.AlbSubnetMappingOutputReference.property.privateIpv4AddressInput">privateIpv4AddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.alb.AlbSubnetMappingOutputReference.property.subnetIdInput">subnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.alb.AlbSubnetMappingOutputReference.property.allocationId">allocationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.alb.AlbSubnetMappingOutputReference.property.ipv6Address">ipv6Address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.alb.AlbSubnetMappingOutputReference.property.privateIpv4Address">privateIpv4Address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.alb.AlbSubnetMappingOutputReference.property.subnetId">subnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.alb.AlbSubnetMappingOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.alb.AlbSubnetMapping">AlbSubnetMapping</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.alb.AlbSubnetMappingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.alb.AlbSubnetMappingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `outpostId`<sup>Required</sup> <a name="outpostId" id="@cdktf/aws-cdk.alb.AlbSubnetMappingOutputReference.property.outpostId"></a>

```typescript
public readonly outpostId: string;
```

- *Type:* string

---

##### `allocationIdInput`<sup>Optional</sup> <a name="allocationIdInput" id="@cdktf/aws-cdk.alb.AlbSubnetMappingOutputReference.property.allocationIdInput"></a>

```typescript
public readonly allocationIdInput: string;
```

- *Type:* string

---

##### `ipv6AddressInput`<sup>Optional</sup> <a name="ipv6AddressInput" id="@cdktf/aws-cdk.alb.AlbSubnetMappingOutputReference.property.ipv6AddressInput"></a>

```typescript
public readonly ipv6AddressInput: string;
```

- *Type:* string

---

##### `privateIpv4AddressInput`<sup>Optional</sup> <a name="privateIpv4AddressInput" id="@cdktf/aws-cdk.alb.AlbSubnetMappingOutputReference.property.privateIpv4AddressInput"></a>

```typescript
public readonly privateIpv4AddressInput: string;
```

- *Type:* string

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="@cdktf/aws-cdk.alb.AlbSubnetMappingOutputReference.property.subnetIdInput"></a>

```typescript
public readonly subnetIdInput: string;
```

- *Type:* string

---

##### `allocationId`<sup>Required</sup> <a name="allocationId" id="@cdktf/aws-cdk.alb.AlbSubnetMappingOutputReference.property.allocationId"></a>

```typescript
public readonly allocationId: string;
```

- *Type:* string

---

##### `ipv6Address`<sup>Required</sup> <a name="ipv6Address" id="@cdktf/aws-cdk.alb.AlbSubnetMappingOutputReference.property.ipv6Address"></a>

```typescript
public readonly ipv6Address: string;
```

- *Type:* string

---

##### `privateIpv4Address`<sup>Required</sup> <a name="privateIpv4Address" id="@cdktf/aws-cdk.alb.AlbSubnetMappingOutputReference.property.privateIpv4Address"></a>

```typescript
public readonly privateIpv4Address: string;
```

- *Type:* string

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktf/aws-cdk.alb.AlbSubnetMappingOutputReference.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.alb.AlbSubnetMappingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AlbSubnetMapping;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.alb.AlbSubnetMapping">AlbSubnetMapping</a>

---


### AlbTimeoutsOutputReference <a name="AlbTimeoutsOutputReference" id="@cdktf/aws-cdk.alb.AlbTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.alb.AlbTimeoutsOutputReference.Initializer"></a>

```typescript
import { alb } from '@cdktf/aws-cdk'

new alb.AlbTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.alb.AlbTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.alb.AlbTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.alb.AlbTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.alb.AlbTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.alb.AlbTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.alb.AlbTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.alb.AlbTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.alb.AlbTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.alb.AlbTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.alb.AlbTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.alb.AlbTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.alb.AlbTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.alb.AlbTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.alb.AlbTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.alb.AlbTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.alb.AlbTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.alb.AlbTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.alb.AlbTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.alb.AlbTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.alb.AlbTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.alb.AlbTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.alb.AlbTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.alb.AlbTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.alb.AlbTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.alb.AlbTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.alb.AlbTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.alb.AlbTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.alb.AlbTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.alb.AlbTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.alb.AlbTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.alb.AlbTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.alb.AlbTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.alb.AlbTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.alb.AlbTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.alb.AlbTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.alb.AlbTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.alb.AlbTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.alb.AlbTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.alb.AlbTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.alb.AlbTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.alb.AlbTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.alb.AlbTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.alb.AlbTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.alb.AlbTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/aws-cdk.alb.AlbTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/aws-cdk.alb.AlbTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/aws-cdk.alb.AlbTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.alb.AlbTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.alb.AlbTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.alb.AlbTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.alb.AlbTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.alb.AlbTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.alb.AlbTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.alb.AlbTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.alb.AlbTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.alb.AlbTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.alb.AlbTimeouts">AlbTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.alb.AlbTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.alb.AlbTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/aws-cdk.alb.AlbTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/aws-cdk.alb.AlbTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/aws-cdk.alb.AlbTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/aws-cdk.alb.AlbTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/aws-cdk.alb.AlbTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/aws-cdk.alb.AlbTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.alb.AlbTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AlbTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.alb.AlbTimeouts">AlbTimeouts</a>

---



