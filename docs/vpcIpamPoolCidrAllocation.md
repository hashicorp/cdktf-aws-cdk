# `aws_vpc_ipam_pool_cidr_allocation`

Refer to the Terraform Registory for docs: [`aws_vpc_ipam_pool_cidr_allocation`](https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/vpc_ipam_pool_cidr_allocation).

# `vpcIpamPoolCidrAllocation` Submodule <a name="`vpcIpamPoolCidrAllocation` Submodule" id="@cdktf/aws-cdk.vpcIpamPoolCidrAllocation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VpcIpamPoolCidrAllocation <a name="VpcIpamPoolCidrAllocation" id="@cdktf/aws-cdk.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/vpc_ipam_pool_cidr_allocation aws_vpc_ipam_pool_cidr_allocation}.

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.Initializer"></a>

```typescript
import { vpcIpamPoolCidrAllocation } from '@cdktf/aws-cdk'

new vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation(scope: Construct, id: string, config: VpcIpamPoolCidrAllocationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/aws-cdk.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/aws-cdk.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/aws-cdk.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocationConfig">VpcIpamPoolCidrAllocationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/aws-cdk.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/aws-cdk.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocationConfig">VpcIpamPoolCidrAllocationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/aws-cdk.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/aws-cdk.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/aws-cdk.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/aws-cdk.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/aws-cdk.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/aws-cdk.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.resetCidr">resetCidr</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.resetDisallowedCidrs">resetDisallowedCidrs</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.resetNetmaskLength">resetNetmaskLength</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/aws-cdk.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/aws-cdk.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/aws-cdk.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/aws-cdk.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/aws-cdk.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/aws-cdk.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/aws-cdk.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/aws-cdk.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/aws-cdk.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `importFrom` <a name="importFrom" id="@cdktf/aws-cdk.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveTo` <a name="moveTo" id="@cdktf/aws-cdk.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/aws-cdk.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/aws-cdk.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `resetCidr` <a name="resetCidr" id="@cdktf/aws-cdk.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.resetCidr"></a>

```typescript
public resetCidr(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/aws-cdk.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDisallowedCidrs` <a name="resetDisallowedCidrs" id="@cdktf/aws-cdk.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.resetDisallowedCidrs"></a>

```typescript
public resetDisallowedCidrs(): void
```

##### `resetId` <a name="resetId" id="@cdktf/aws-cdk.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.resetId"></a>

```typescript
public resetId(): void
```

##### `resetNetmaskLength` <a name="resetNetmaskLength" id="@cdktf/aws-cdk.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.resetNetmaskLength"></a>

```typescript
public resetNetmaskLength(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/aws-cdk.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a VpcIpamPoolCidrAllocation resource upon running "cdktf plan <stack-name>". |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@cdktf/aws-cdk.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.isConstruct"></a>

```typescript
import { vpcIpamPoolCidrAllocation } from '@cdktf/aws-cdk'

vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/aws-cdk.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.isTerraformElement"></a>

```typescript
import { vpcIpamPoolCidrAllocation } from '@cdktf/aws-cdk'

vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/aws-cdk.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.isTerraformResource"></a>

```typescript
import { vpcIpamPoolCidrAllocation } from '@cdktf/aws-cdk'

vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/aws-cdk.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.generateConfigForImport"></a>

```typescript
import { vpcIpamPoolCidrAllocation } from '@cdktf/aws-cdk'

vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a VpcIpamPoolCidrAllocation resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/aws-cdk.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the VpcIpamPoolCidrAllocation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/aws-cdk.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing VpcIpamPoolCidrAllocation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/vpc_ipam_pool_cidr_allocation#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the VpcIpamPoolCidrAllocation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/aws-cdk.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.property.ipamPoolAllocationId">ipamPoolAllocationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.property.resourceId">resourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.property.resourceOwner">resourceOwner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.property.resourceType">resourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.property.cidrInput">cidrInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.property.disallowedCidrsInput">disallowedCidrsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.property.ipamPoolIdInput">ipamPoolIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.property.netmaskLengthInput">netmaskLengthInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.property.cidr">cidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.property.disallowedCidrs">disallowedCidrs</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.property.ipamPoolId">ipamPoolId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.property.netmaskLength">netmaskLength</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/aws-cdk.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/aws-cdk.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/aws-cdk.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/aws-cdk.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/aws-cdk.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/aws-cdk.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `ipamPoolAllocationId`<sup>Required</sup> <a name="ipamPoolAllocationId" id="@cdktf/aws-cdk.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.property.ipamPoolAllocationId"></a>

```typescript
public readonly ipamPoolAllocationId: string;
```

- *Type:* string

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdktf/aws-cdk.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

---

##### `resourceOwner`<sup>Required</sup> <a name="resourceOwner" id="@cdktf/aws-cdk.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.property.resourceOwner"></a>

```typescript
public readonly resourceOwner: string;
```

- *Type:* string

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="@cdktf/aws-cdk.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

---

##### `cidrInput`<sup>Optional</sup> <a name="cidrInput" id="@cdktf/aws-cdk.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.property.cidrInput"></a>

```typescript
public readonly cidrInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/aws-cdk.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `disallowedCidrsInput`<sup>Optional</sup> <a name="disallowedCidrsInput" id="@cdktf/aws-cdk.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.property.disallowedCidrsInput"></a>

```typescript
public readonly disallowedCidrsInput: string[];
```

- *Type:* string[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/aws-cdk.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `ipamPoolIdInput`<sup>Optional</sup> <a name="ipamPoolIdInput" id="@cdktf/aws-cdk.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.property.ipamPoolIdInput"></a>

```typescript
public readonly ipamPoolIdInput: string;
```

- *Type:* string

---

##### `netmaskLengthInput`<sup>Optional</sup> <a name="netmaskLengthInput" id="@cdktf/aws-cdk.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.property.netmaskLengthInput"></a>

```typescript
public readonly netmaskLengthInput: number;
```

- *Type:* number

---

##### `cidr`<sup>Required</sup> <a name="cidr" id="@cdktf/aws-cdk.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.property.cidr"></a>

```typescript
public readonly cidr: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/aws-cdk.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `disallowedCidrs`<sup>Required</sup> <a name="disallowedCidrs" id="@cdktf/aws-cdk.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.property.disallowedCidrs"></a>

```typescript
public readonly disallowedCidrs: string[];
```

- *Type:* string[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `ipamPoolId`<sup>Required</sup> <a name="ipamPoolId" id="@cdktf/aws-cdk.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.property.ipamPoolId"></a>

```typescript
public readonly ipamPoolId: string;
```

- *Type:* string

---

##### `netmaskLength`<sup>Required</sup> <a name="netmaskLength" id="@cdktf/aws-cdk.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.property.netmaskLength"></a>

```typescript
public readonly netmaskLength: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/aws-cdk.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocation.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### VpcIpamPoolCidrAllocationConfig <a name="VpcIpamPoolCidrAllocationConfig" id="@cdktf/aws-cdk.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocationConfig.Initializer"></a>

```typescript
import { vpcIpamPoolCidrAllocation } from '@cdktf/aws-cdk'

const vpcIpamPoolCidrAllocationConfig: vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocationConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocationConfig.property.ipamPoolId">ipamPoolId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/vpc_ipam_pool_cidr_allocation#ipam_pool_id VpcIpamPoolCidrAllocation#ipam_pool_id}. |
| <code><a href="#@cdktf/aws-cdk.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocationConfig.property.cidr">cidr</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/vpc_ipam_pool_cidr_allocation#cidr VpcIpamPoolCidrAllocation#cidr}. |
| <code><a href="#@cdktf/aws-cdk.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocationConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/vpc_ipam_pool_cidr_allocation#description VpcIpamPoolCidrAllocation#description}. |
| <code><a href="#@cdktf/aws-cdk.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocationConfig.property.disallowedCidrs">disallowedCidrs</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/vpc_ipam_pool_cidr_allocation#disallowed_cidrs VpcIpamPoolCidrAllocation#disallowed_cidrs}. |
| <code><a href="#@cdktf/aws-cdk.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocationConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/vpc_ipam_pool_cidr_allocation#id VpcIpamPoolCidrAllocation#id}. |
| <code><a href="#@cdktf/aws-cdk.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocationConfig.property.netmaskLength">netmaskLength</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/vpc_ipam_pool_cidr_allocation#netmask_length VpcIpamPoolCidrAllocation#netmask_length}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `ipamPoolId`<sup>Required</sup> <a name="ipamPoolId" id="@cdktf/aws-cdk.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocationConfig.property.ipamPoolId"></a>

```typescript
public readonly ipamPoolId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/vpc_ipam_pool_cidr_allocation#ipam_pool_id VpcIpamPoolCidrAllocation#ipam_pool_id}.

---

##### `cidr`<sup>Optional</sup> <a name="cidr" id="@cdktf/aws-cdk.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocationConfig.property.cidr"></a>

```typescript
public readonly cidr: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/vpc_ipam_pool_cidr_allocation#cidr VpcIpamPoolCidrAllocation#cidr}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/aws-cdk.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocationConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/vpc_ipam_pool_cidr_allocation#description VpcIpamPoolCidrAllocation#description}.

---

##### `disallowedCidrs`<sup>Optional</sup> <a name="disallowedCidrs" id="@cdktf/aws-cdk.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocationConfig.property.disallowedCidrs"></a>

```typescript
public readonly disallowedCidrs: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/vpc_ipam_pool_cidr_allocation#disallowed_cidrs VpcIpamPoolCidrAllocation#disallowed_cidrs}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/aws-cdk.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/vpc_ipam_pool_cidr_allocation#id VpcIpamPoolCidrAllocation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `netmaskLength`<sup>Optional</sup> <a name="netmaskLength" id="@cdktf/aws-cdk.vpcIpamPoolCidrAllocation.VpcIpamPoolCidrAllocationConfig.property.netmaskLength"></a>

```typescript
public readonly netmaskLength: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/vpc_ipam_pool_cidr_allocation#netmask_length VpcIpamPoolCidrAllocation#netmask_length}.

---



