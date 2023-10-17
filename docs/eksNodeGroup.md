# `aws_eks_node_group`

Refer to the Terraform Registory for docs: [`aws_eks_node_group`](https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/eks_node_group).

# `eksNodeGroup` Submodule <a name="`eksNodeGroup` Submodule" id="@cdktf/aws-cdk.eksNodeGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EksNodeGroup <a name="EksNodeGroup" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/eks_node_group aws_eks_node_group}.

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroup.Initializer"></a>

```typescript
import { eksNodeGroup } from '@cdktf/aws-cdk'

new eksNodeGroup.EksNodeGroup(scope: Construct, id: string, config: EksNodeGroupConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroup.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupConfig">EksNodeGroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupConfig">EksNodeGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroup.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroup.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroup.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroup.putLaunchTemplate">putLaunchTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroup.putRemoteAccess">putRemoteAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroup.putScalingConfig">putScalingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroup.putTaint">putTaint</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroup.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroup.putUpdateConfig">putUpdateConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroup.resetAmiType">resetAmiType</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroup.resetCapacityType">resetCapacityType</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroup.resetDiskSize">resetDiskSize</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroup.resetForceUpdateVersion">resetForceUpdateVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroup.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroup.resetInstanceTypes">resetInstanceTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroup.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroup.resetLaunchTemplate">resetLaunchTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroup.resetNodeGroupName">resetNodeGroupName</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroup.resetNodeGroupNamePrefix">resetNodeGroupNamePrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroup.resetReleaseVersion">resetReleaseVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroup.resetRemoteAccess">resetRemoteAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroup.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroup.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroup.resetTaint">resetTaint</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroup.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroup.resetUpdateConfig">resetUpdateConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroup.resetVersion">resetVersion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroup.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroup.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroup.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroup.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroup.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroup.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroup.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroup.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroup.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroup.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroup.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroup.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroup.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroup.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroup.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroup.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroup.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `importFrom` <a name="importFrom" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroup.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroup.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroup.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroup.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveTo` <a name="moveTo" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroup.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroup.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroup.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `putLaunchTemplate` <a name="putLaunchTemplate" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroup.putLaunchTemplate"></a>

```typescript
public putLaunchTemplate(value: EksNodeGroupLaunchTemplate): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroup.putLaunchTemplate.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupLaunchTemplate">EksNodeGroupLaunchTemplate</a>

---

##### `putRemoteAccess` <a name="putRemoteAccess" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroup.putRemoteAccess"></a>

```typescript
public putRemoteAccess(value: EksNodeGroupRemoteAccess): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroup.putRemoteAccess.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupRemoteAccess">EksNodeGroupRemoteAccess</a>

---

##### `putScalingConfig` <a name="putScalingConfig" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroup.putScalingConfig"></a>

```typescript
public putScalingConfig(value: EksNodeGroupScalingConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroup.putScalingConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupScalingConfig">EksNodeGroupScalingConfig</a>

---

##### `putTaint` <a name="putTaint" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroup.putTaint"></a>

```typescript
public putTaint(value: IResolvable | EksNodeGroupTaint[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroup.putTaint.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupTaint">EksNodeGroupTaint</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroup.putTimeouts"></a>

```typescript
public putTimeouts(value: EksNodeGroupTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroup.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupTimeouts">EksNodeGroupTimeouts</a>

---

##### `putUpdateConfig` <a name="putUpdateConfig" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroup.putUpdateConfig"></a>

```typescript
public putUpdateConfig(value: EksNodeGroupUpdateConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroup.putUpdateConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupUpdateConfig">EksNodeGroupUpdateConfig</a>

---

##### `resetAmiType` <a name="resetAmiType" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroup.resetAmiType"></a>

```typescript
public resetAmiType(): void
```

##### `resetCapacityType` <a name="resetCapacityType" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroup.resetCapacityType"></a>

```typescript
public resetCapacityType(): void
```

##### `resetDiskSize` <a name="resetDiskSize" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroup.resetDiskSize"></a>

```typescript
public resetDiskSize(): void
```

##### `resetForceUpdateVersion` <a name="resetForceUpdateVersion" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroup.resetForceUpdateVersion"></a>

```typescript
public resetForceUpdateVersion(): void
```

##### `resetId` <a name="resetId" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroup.resetId"></a>

```typescript
public resetId(): void
```

##### `resetInstanceTypes` <a name="resetInstanceTypes" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroup.resetInstanceTypes"></a>

```typescript
public resetInstanceTypes(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroup.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetLaunchTemplate` <a name="resetLaunchTemplate" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroup.resetLaunchTemplate"></a>

```typescript
public resetLaunchTemplate(): void
```

##### `resetNodeGroupName` <a name="resetNodeGroupName" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroup.resetNodeGroupName"></a>

```typescript
public resetNodeGroupName(): void
```

##### `resetNodeGroupNamePrefix` <a name="resetNodeGroupNamePrefix" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroup.resetNodeGroupNamePrefix"></a>

```typescript
public resetNodeGroupNamePrefix(): void
```

##### `resetReleaseVersion` <a name="resetReleaseVersion" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroup.resetReleaseVersion"></a>

```typescript
public resetReleaseVersion(): void
```

##### `resetRemoteAccess` <a name="resetRemoteAccess" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroup.resetRemoteAccess"></a>

```typescript
public resetRemoteAccess(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroup.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroup.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

##### `resetTaint` <a name="resetTaint" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroup.resetTaint"></a>

```typescript
public resetTaint(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroup.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetUpdateConfig` <a name="resetUpdateConfig" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroup.resetUpdateConfig"></a>

```typescript
public resetUpdateConfig(): void
```

##### `resetVersion` <a name="resetVersion" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroup.resetVersion"></a>

```typescript
public resetVersion(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroup.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroup.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a EksNodeGroup resource upon running "cdktf plan <stack-name>". |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroup.isConstruct"></a>

```typescript
import { eksNodeGroup } from '@cdktf/aws-cdk'

eksNodeGroup.EksNodeGroup.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroup.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroup.isTerraformElement"></a>

```typescript
import { eksNodeGroup } from '@cdktf/aws-cdk'

eksNodeGroup.EksNodeGroup.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroup.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroup.isTerraformResource"></a>

```typescript
import { eksNodeGroup } from '@cdktf/aws-cdk'

eksNodeGroup.EksNodeGroup.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroup.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroup.generateConfigForImport"></a>

```typescript
import { eksNodeGroup } from '@cdktf/aws-cdk'

eksNodeGroup.EksNodeGroup.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a EksNodeGroup resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the EksNodeGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing EksNodeGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/eks_node_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the EksNodeGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroup.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroup.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroup.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroup.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroup.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroup.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroup.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroup.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroup.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroup.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroup.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroup.property.launchTemplate">launchTemplate</a></code> | <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupLaunchTemplateOutputReference">EksNodeGroupLaunchTemplateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroup.property.remoteAccess">remoteAccess</a></code> | <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupRemoteAccessOutputReference">EksNodeGroupRemoteAccessOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroup.property.resources">resources</a></code> | <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupResourcesList">EksNodeGroupResourcesList</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroup.property.scalingConfig">scalingConfig</a></code> | <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupScalingConfigOutputReference">EksNodeGroupScalingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroup.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroup.property.taint">taint</a></code> | <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupTaintList">EksNodeGroupTaintList</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroup.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupTimeoutsOutputReference">EksNodeGroupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroup.property.updateConfig">updateConfig</a></code> | <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupUpdateConfigOutputReference">EksNodeGroupUpdateConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroup.property.amiTypeInput">amiTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroup.property.capacityTypeInput">capacityTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroup.property.clusterNameInput">clusterNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroup.property.diskSizeInput">diskSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroup.property.forceUpdateVersionInput">forceUpdateVersionInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroup.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroup.property.instanceTypesInput">instanceTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroup.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroup.property.launchTemplateInput">launchTemplateInput</a></code> | <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupLaunchTemplate">EksNodeGroupLaunchTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroup.property.nodeGroupNameInput">nodeGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroup.property.nodeGroupNamePrefixInput">nodeGroupNamePrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroup.property.nodeRoleArnInput">nodeRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroup.property.releaseVersionInput">releaseVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroup.property.remoteAccessInput">remoteAccessInput</a></code> | <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupRemoteAccess">EksNodeGroupRemoteAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroup.property.scalingConfigInput">scalingConfigInput</a></code> | <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupScalingConfig">EksNodeGroupScalingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroup.property.subnetIdsInput">subnetIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroup.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroup.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroup.property.taintInput">taintInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupTaint">EksNodeGroupTaint</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroup.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupTimeouts">EksNodeGroupTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroup.property.updateConfigInput">updateConfigInput</a></code> | <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupUpdateConfig">EksNodeGroupUpdateConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroup.property.versionInput">versionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroup.property.amiType">amiType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroup.property.capacityType">capacityType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroup.property.clusterName">clusterName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroup.property.diskSize">diskSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroup.property.forceUpdateVersion">forceUpdateVersion</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroup.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroup.property.instanceTypes">instanceTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroup.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroup.property.nodeGroupName">nodeGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroup.property.nodeGroupNamePrefix">nodeGroupNamePrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroup.property.nodeRoleArn">nodeRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroup.property.releaseVersion">releaseVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroup.property.subnetIds">subnetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroup.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroup.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroup.property.version">version</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroup.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroup.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroup.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroup.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroup.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroup.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroup.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroup.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroup.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroup.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroup.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroup.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroup.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroup.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroup.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `launchTemplate`<sup>Required</sup> <a name="launchTemplate" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroup.property.launchTemplate"></a>

```typescript
public readonly launchTemplate: EksNodeGroupLaunchTemplateOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupLaunchTemplateOutputReference">EksNodeGroupLaunchTemplateOutputReference</a>

---

##### `remoteAccess`<sup>Required</sup> <a name="remoteAccess" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroup.property.remoteAccess"></a>

```typescript
public readonly remoteAccess: EksNodeGroupRemoteAccessOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupRemoteAccessOutputReference">EksNodeGroupRemoteAccessOutputReference</a>

---

##### `resources`<sup>Required</sup> <a name="resources" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroup.property.resources"></a>

```typescript
public readonly resources: EksNodeGroupResourcesList;
```

- *Type:* <a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupResourcesList">EksNodeGroupResourcesList</a>

---

##### `scalingConfig`<sup>Required</sup> <a name="scalingConfig" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroup.property.scalingConfig"></a>

```typescript
public readonly scalingConfig: EksNodeGroupScalingConfigOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupScalingConfigOutputReference">EksNodeGroupScalingConfigOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroup.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `taint`<sup>Required</sup> <a name="taint" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroup.property.taint"></a>

```typescript
public readonly taint: EksNodeGroupTaintList;
```

- *Type:* <a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupTaintList">EksNodeGroupTaintList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroup.property.timeouts"></a>

```typescript
public readonly timeouts: EksNodeGroupTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupTimeoutsOutputReference">EksNodeGroupTimeoutsOutputReference</a>

---

##### `updateConfig`<sup>Required</sup> <a name="updateConfig" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroup.property.updateConfig"></a>

```typescript
public readonly updateConfig: EksNodeGroupUpdateConfigOutputReference;
```

- *Type:* <a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupUpdateConfigOutputReference">EksNodeGroupUpdateConfigOutputReference</a>

---

##### `amiTypeInput`<sup>Optional</sup> <a name="amiTypeInput" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroup.property.amiTypeInput"></a>

```typescript
public readonly amiTypeInput: string;
```

- *Type:* string

---

##### `capacityTypeInput`<sup>Optional</sup> <a name="capacityTypeInput" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroup.property.capacityTypeInput"></a>

```typescript
public readonly capacityTypeInput: string;
```

- *Type:* string

---

##### `clusterNameInput`<sup>Optional</sup> <a name="clusterNameInput" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroup.property.clusterNameInput"></a>

```typescript
public readonly clusterNameInput: string;
```

- *Type:* string

---

##### `diskSizeInput`<sup>Optional</sup> <a name="diskSizeInput" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroup.property.diskSizeInput"></a>

```typescript
public readonly diskSizeInput: number;
```

- *Type:* number

---

##### `forceUpdateVersionInput`<sup>Optional</sup> <a name="forceUpdateVersionInput" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroup.property.forceUpdateVersionInput"></a>

```typescript
public readonly forceUpdateVersionInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroup.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `instanceTypesInput`<sup>Optional</sup> <a name="instanceTypesInput" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroup.property.instanceTypesInput"></a>

```typescript
public readonly instanceTypesInput: string[];
```

- *Type:* string[]

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroup.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `launchTemplateInput`<sup>Optional</sup> <a name="launchTemplateInput" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroup.property.launchTemplateInput"></a>

```typescript
public readonly launchTemplateInput: EksNodeGroupLaunchTemplate;
```

- *Type:* <a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupLaunchTemplate">EksNodeGroupLaunchTemplate</a>

---

##### `nodeGroupNameInput`<sup>Optional</sup> <a name="nodeGroupNameInput" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroup.property.nodeGroupNameInput"></a>

```typescript
public readonly nodeGroupNameInput: string;
```

- *Type:* string

---

##### `nodeGroupNamePrefixInput`<sup>Optional</sup> <a name="nodeGroupNamePrefixInput" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroup.property.nodeGroupNamePrefixInput"></a>

```typescript
public readonly nodeGroupNamePrefixInput: string;
```

- *Type:* string

---

##### `nodeRoleArnInput`<sup>Optional</sup> <a name="nodeRoleArnInput" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroup.property.nodeRoleArnInput"></a>

```typescript
public readonly nodeRoleArnInput: string;
```

- *Type:* string

---

##### `releaseVersionInput`<sup>Optional</sup> <a name="releaseVersionInput" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroup.property.releaseVersionInput"></a>

```typescript
public readonly releaseVersionInput: string;
```

- *Type:* string

---

##### `remoteAccessInput`<sup>Optional</sup> <a name="remoteAccessInput" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroup.property.remoteAccessInput"></a>

```typescript
public readonly remoteAccessInput: EksNodeGroupRemoteAccess;
```

- *Type:* <a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupRemoteAccess">EksNodeGroupRemoteAccess</a>

---

##### `scalingConfigInput`<sup>Optional</sup> <a name="scalingConfigInput" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroup.property.scalingConfigInput"></a>

```typescript
public readonly scalingConfigInput: EksNodeGroupScalingConfig;
```

- *Type:* <a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupScalingConfig">EksNodeGroupScalingConfig</a>

---

##### `subnetIdsInput`<sup>Optional</sup> <a name="subnetIdsInput" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroup.property.subnetIdsInput"></a>

```typescript
public readonly subnetIdsInput: string[];
```

- *Type:* string[]

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroup.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroup.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `taintInput`<sup>Optional</sup> <a name="taintInput" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroup.property.taintInput"></a>

```typescript
public readonly taintInput: IResolvable | EksNodeGroupTaint[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupTaint">EksNodeGroupTaint</a>[]

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroup.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | EksNodeGroupTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupTimeouts">EksNodeGroupTimeouts</a>

---

##### `updateConfigInput`<sup>Optional</sup> <a name="updateConfigInput" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroup.property.updateConfigInput"></a>

```typescript
public readonly updateConfigInput: EksNodeGroupUpdateConfig;
```

- *Type:* <a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupUpdateConfig">EksNodeGroupUpdateConfig</a>

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroup.property.versionInput"></a>

```typescript
public readonly versionInput: string;
```

- *Type:* string

---

##### `amiType`<sup>Required</sup> <a name="amiType" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroup.property.amiType"></a>

```typescript
public readonly amiType: string;
```

- *Type:* string

---

##### `capacityType`<sup>Required</sup> <a name="capacityType" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroup.property.capacityType"></a>

```typescript
public readonly capacityType: string;
```

- *Type:* string

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroup.property.clusterName"></a>

```typescript
public readonly clusterName: string;
```

- *Type:* string

---

##### `diskSize`<sup>Required</sup> <a name="diskSize" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroup.property.diskSize"></a>

```typescript
public readonly diskSize: number;
```

- *Type:* number

---

##### `forceUpdateVersion`<sup>Required</sup> <a name="forceUpdateVersion" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroup.property.forceUpdateVersion"></a>

```typescript
public readonly forceUpdateVersion: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroup.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `instanceTypes`<sup>Required</sup> <a name="instanceTypes" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroup.property.instanceTypes"></a>

```typescript
public readonly instanceTypes: string[];
```

- *Type:* string[]

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroup.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `nodeGroupName`<sup>Required</sup> <a name="nodeGroupName" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroup.property.nodeGroupName"></a>

```typescript
public readonly nodeGroupName: string;
```

- *Type:* string

---

##### `nodeGroupNamePrefix`<sup>Required</sup> <a name="nodeGroupNamePrefix" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroup.property.nodeGroupNamePrefix"></a>

```typescript
public readonly nodeGroupNamePrefix: string;
```

- *Type:* string

---

##### `nodeRoleArn`<sup>Required</sup> <a name="nodeRoleArn" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroup.property.nodeRoleArn"></a>

```typescript
public readonly nodeRoleArn: string;
```

- *Type:* string

---

##### `releaseVersion`<sup>Required</sup> <a name="releaseVersion" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroup.property.releaseVersion"></a>

```typescript
public readonly releaseVersion: string;
```

- *Type:* string

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroup.property.subnetIds"></a>

```typescript
public readonly subnetIds: string[];
```

- *Type:* string[]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroup.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroup.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroup.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroup.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroup.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### EksNodeGroupConfig <a name="EksNodeGroupConfig" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupConfig.Initializer"></a>

```typescript
import { eksNodeGroup } from '@cdktf/aws-cdk'

const eksNodeGroupConfig: eksNodeGroup.EksNodeGroupConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupConfig.property.clusterName">clusterName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/eks_node_group#cluster_name EksNodeGroup#cluster_name}. |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupConfig.property.nodeRoleArn">nodeRoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/eks_node_group#node_role_arn EksNodeGroup#node_role_arn}. |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupConfig.property.scalingConfig">scalingConfig</a></code> | <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupScalingConfig">EksNodeGroupScalingConfig</a></code> | scaling_config block. |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupConfig.property.subnetIds">subnetIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/eks_node_group#subnet_ids EksNodeGroup#subnet_ids}. |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupConfig.property.amiType">amiType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/eks_node_group#ami_type EksNodeGroup#ami_type}. |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupConfig.property.capacityType">capacityType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/eks_node_group#capacity_type EksNodeGroup#capacity_type}. |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupConfig.property.diskSize">diskSize</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/eks_node_group#disk_size EksNodeGroup#disk_size}. |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupConfig.property.forceUpdateVersion">forceUpdateVersion</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/eks_node_group#force_update_version EksNodeGroup#force_update_version}. |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/eks_node_group#id EksNodeGroup#id}. |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupConfig.property.instanceTypes">instanceTypes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/eks_node_group#instance_types EksNodeGroup#instance_types}. |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/eks_node_group#labels EksNodeGroup#labels}. |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupConfig.property.launchTemplate">launchTemplate</a></code> | <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupLaunchTemplate">EksNodeGroupLaunchTemplate</a></code> | launch_template block. |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupConfig.property.nodeGroupName">nodeGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/eks_node_group#node_group_name EksNodeGroup#node_group_name}. |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupConfig.property.nodeGroupNamePrefix">nodeGroupNamePrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/eks_node_group#node_group_name_prefix EksNodeGroup#node_group_name_prefix}. |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupConfig.property.releaseVersion">releaseVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/eks_node_group#release_version EksNodeGroup#release_version}. |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupConfig.property.remoteAccess">remoteAccess</a></code> | <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupRemoteAccess">EksNodeGroupRemoteAccess</a></code> | remote_access block. |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/eks_node_group#tags EksNodeGroup#tags}. |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/eks_node_group#tags_all EksNodeGroup#tags_all}. |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupConfig.property.taint">taint</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupTaint">EksNodeGroupTaint</a>[]</code> | taint block. |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupTimeouts">EksNodeGroupTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupConfig.property.updateConfig">updateConfig</a></code> | <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupUpdateConfig">EksNodeGroupUpdateConfig</a></code> | update_config block. |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupConfig.property.version">version</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/eks_node_group#version EksNodeGroup#version}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupConfig.property.clusterName"></a>

```typescript
public readonly clusterName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/eks_node_group#cluster_name EksNodeGroup#cluster_name}.

---

##### `nodeRoleArn`<sup>Required</sup> <a name="nodeRoleArn" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupConfig.property.nodeRoleArn"></a>

```typescript
public readonly nodeRoleArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/eks_node_group#node_role_arn EksNodeGroup#node_role_arn}.

---

##### `scalingConfig`<sup>Required</sup> <a name="scalingConfig" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupConfig.property.scalingConfig"></a>

```typescript
public readonly scalingConfig: EksNodeGroupScalingConfig;
```

- *Type:* <a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupScalingConfig">EksNodeGroupScalingConfig</a>

scaling_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/eks_node_group#scaling_config EksNodeGroup#scaling_config}

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupConfig.property.subnetIds"></a>

```typescript
public readonly subnetIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/eks_node_group#subnet_ids EksNodeGroup#subnet_ids}.

---

##### `amiType`<sup>Optional</sup> <a name="amiType" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupConfig.property.amiType"></a>

```typescript
public readonly amiType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/eks_node_group#ami_type EksNodeGroup#ami_type}.

---

##### `capacityType`<sup>Optional</sup> <a name="capacityType" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupConfig.property.capacityType"></a>

```typescript
public readonly capacityType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/eks_node_group#capacity_type EksNodeGroup#capacity_type}.

---

##### `diskSize`<sup>Optional</sup> <a name="diskSize" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupConfig.property.diskSize"></a>

```typescript
public readonly diskSize: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/eks_node_group#disk_size EksNodeGroup#disk_size}.

---

##### `forceUpdateVersion`<sup>Optional</sup> <a name="forceUpdateVersion" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupConfig.property.forceUpdateVersion"></a>

```typescript
public readonly forceUpdateVersion: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/eks_node_group#force_update_version EksNodeGroup#force_update_version}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/eks_node_group#id EksNodeGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `instanceTypes`<sup>Optional</sup> <a name="instanceTypes" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupConfig.property.instanceTypes"></a>

```typescript
public readonly instanceTypes: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/eks_node_group#instance_types EksNodeGroup#instance_types}.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/eks_node_group#labels EksNodeGroup#labels}.

---

##### `launchTemplate`<sup>Optional</sup> <a name="launchTemplate" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupConfig.property.launchTemplate"></a>

```typescript
public readonly launchTemplate: EksNodeGroupLaunchTemplate;
```

- *Type:* <a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupLaunchTemplate">EksNodeGroupLaunchTemplate</a>

launch_template block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/eks_node_group#launch_template EksNodeGroup#launch_template}

---

##### `nodeGroupName`<sup>Optional</sup> <a name="nodeGroupName" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupConfig.property.nodeGroupName"></a>

```typescript
public readonly nodeGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/eks_node_group#node_group_name EksNodeGroup#node_group_name}.

---

##### `nodeGroupNamePrefix`<sup>Optional</sup> <a name="nodeGroupNamePrefix" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupConfig.property.nodeGroupNamePrefix"></a>

```typescript
public readonly nodeGroupNamePrefix: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/eks_node_group#node_group_name_prefix EksNodeGroup#node_group_name_prefix}.

---

##### `releaseVersion`<sup>Optional</sup> <a name="releaseVersion" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupConfig.property.releaseVersion"></a>

```typescript
public readonly releaseVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/eks_node_group#release_version EksNodeGroup#release_version}.

---

##### `remoteAccess`<sup>Optional</sup> <a name="remoteAccess" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupConfig.property.remoteAccess"></a>

```typescript
public readonly remoteAccess: EksNodeGroupRemoteAccess;
```

- *Type:* <a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupRemoteAccess">EksNodeGroupRemoteAccess</a>

remote_access block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/eks_node_group#remote_access EksNodeGroup#remote_access}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/eks_node_group#tags EksNodeGroup#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/eks_node_group#tags_all EksNodeGroup#tags_all}.

---

##### `taint`<sup>Optional</sup> <a name="taint" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupConfig.property.taint"></a>

```typescript
public readonly taint: IResolvable | EksNodeGroupTaint[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupTaint">EksNodeGroupTaint</a>[]

taint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/eks_node_group#taint EksNodeGroup#taint}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupConfig.property.timeouts"></a>

```typescript
public readonly timeouts: EksNodeGroupTimeouts;
```

- *Type:* <a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupTimeouts">EksNodeGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/eks_node_group#timeouts EksNodeGroup#timeouts}

---

##### `updateConfig`<sup>Optional</sup> <a name="updateConfig" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupConfig.property.updateConfig"></a>

```typescript
public readonly updateConfig: EksNodeGroupUpdateConfig;
```

- *Type:* <a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupUpdateConfig">EksNodeGroupUpdateConfig</a>

update_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/eks_node_group#update_config EksNodeGroup#update_config}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupConfig.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/eks_node_group#version EksNodeGroup#version}.

---

### EksNodeGroupLaunchTemplate <a name="EksNodeGroupLaunchTemplate" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupLaunchTemplate"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupLaunchTemplate.Initializer"></a>

```typescript
import { eksNodeGroup } from '@cdktf/aws-cdk'

const eksNodeGroupLaunchTemplate: eksNodeGroup.EksNodeGroupLaunchTemplate = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupLaunchTemplate.property.version">version</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/eks_node_group#version EksNodeGroup#version}. |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupLaunchTemplate.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/eks_node_group#id EksNodeGroup#id}. |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupLaunchTemplate.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/eks_node_group#name EksNodeGroup#name}. |

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupLaunchTemplate.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/eks_node_group#version EksNodeGroup#version}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupLaunchTemplate.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/eks_node_group#id EksNodeGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupLaunchTemplate.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/eks_node_group#name EksNodeGroup#name}.

---

### EksNodeGroupRemoteAccess <a name="EksNodeGroupRemoteAccess" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupRemoteAccess"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupRemoteAccess.Initializer"></a>

```typescript
import { eksNodeGroup } from '@cdktf/aws-cdk'

const eksNodeGroupRemoteAccess: eksNodeGroup.EksNodeGroupRemoteAccess = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupRemoteAccess.property.ec2SshKey">ec2SshKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/eks_node_group#ec2_ssh_key EksNodeGroup#ec2_ssh_key}. |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupRemoteAccess.property.sourceSecurityGroupIds">sourceSecurityGroupIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/eks_node_group#source_security_group_ids EksNodeGroup#source_security_group_ids}. |

---

##### `ec2SshKey`<sup>Optional</sup> <a name="ec2SshKey" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupRemoteAccess.property.ec2SshKey"></a>

```typescript
public readonly ec2SshKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/eks_node_group#ec2_ssh_key EksNodeGroup#ec2_ssh_key}.

---

##### `sourceSecurityGroupIds`<sup>Optional</sup> <a name="sourceSecurityGroupIds" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupRemoteAccess.property.sourceSecurityGroupIds"></a>

```typescript
public readonly sourceSecurityGroupIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/eks_node_group#source_security_group_ids EksNodeGroup#source_security_group_ids}.

---

### EksNodeGroupResources <a name="EksNodeGroupResources" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupResources"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupResources.Initializer"></a>

```typescript
import { eksNodeGroup } from '@cdktf/aws-cdk'

const eksNodeGroupResources: eksNodeGroup.EksNodeGroupResources = { ... }
```


### EksNodeGroupResourcesAutoscalingGroups <a name="EksNodeGroupResourcesAutoscalingGroups" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupResourcesAutoscalingGroups"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupResourcesAutoscalingGroups.Initializer"></a>

```typescript
import { eksNodeGroup } from '@cdktf/aws-cdk'

const eksNodeGroupResourcesAutoscalingGroups: eksNodeGroup.EksNodeGroupResourcesAutoscalingGroups = { ... }
```


### EksNodeGroupScalingConfig <a name="EksNodeGroupScalingConfig" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupScalingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupScalingConfig.Initializer"></a>

```typescript
import { eksNodeGroup } from '@cdktf/aws-cdk'

const eksNodeGroupScalingConfig: eksNodeGroup.EksNodeGroupScalingConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupScalingConfig.property.desiredSize">desiredSize</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/eks_node_group#desired_size EksNodeGroup#desired_size}. |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupScalingConfig.property.maxSize">maxSize</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/eks_node_group#max_size EksNodeGroup#max_size}. |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupScalingConfig.property.minSize">minSize</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/eks_node_group#min_size EksNodeGroup#min_size}. |

---

##### `desiredSize`<sup>Required</sup> <a name="desiredSize" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupScalingConfig.property.desiredSize"></a>

```typescript
public readonly desiredSize: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/eks_node_group#desired_size EksNodeGroup#desired_size}.

---

##### `maxSize`<sup>Required</sup> <a name="maxSize" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupScalingConfig.property.maxSize"></a>

```typescript
public readonly maxSize: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/eks_node_group#max_size EksNodeGroup#max_size}.

---

##### `minSize`<sup>Required</sup> <a name="minSize" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupScalingConfig.property.minSize"></a>

```typescript
public readonly minSize: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/eks_node_group#min_size EksNodeGroup#min_size}.

---

### EksNodeGroupTaint <a name="EksNodeGroupTaint" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupTaint"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupTaint.Initializer"></a>

```typescript
import { eksNodeGroup } from '@cdktf/aws-cdk'

const eksNodeGroupTaint: eksNodeGroup.EksNodeGroupTaint = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupTaint.property.effect">effect</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/eks_node_group#effect EksNodeGroup#effect}. |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupTaint.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/eks_node_group#key EksNodeGroup#key}. |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupTaint.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/eks_node_group#value EksNodeGroup#value}. |

---

##### `effect`<sup>Required</sup> <a name="effect" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupTaint.property.effect"></a>

```typescript
public readonly effect: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/eks_node_group#effect EksNodeGroup#effect}.

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupTaint.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/eks_node_group#key EksNodeGroup#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupTaint.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/eks_node_group#value EksNodeGroup#value}.

---

### EksNodeGroupTimeouts <a name="EksNodeGroupTimeouts" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupTimeouts.Initializer"></a>

```typescript
import { eksNodeGroup } from '@cdktf/aws-cdk'

const eksNodeGroupTimeouts: eksNodeGroup.EksNodeGroupTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/eks_node_group#create EksNodeGroup#create}. |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/eks_node_group#delete EksNodeGroup#delete}. |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/eks_node_group#update EksNodeGroup#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/eks_node_group#create EksNodeGroup#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/eks_node_group#delete EksNodeGroup#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/eks_node_group#update EksNodeGroup#update}.

---

### EksNodeGroupUpdateConfig <a name="EksNodeGroupUpdateConfig" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupUpdateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupUpdateConfig.Initializer"></a>

```typescript
import { eksNodeGroup } from '@cdktf/aws-cdk'

const eksNodeGroupUpdateConfig: eksNodeGroup.EksNodeGroupUpdateConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupUpdateConfig.property.maxUnavailable">maxUnavailable</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/eks_node_group#max_unavailable EksNodeGroup#max_unavailable}. |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupUpdateConfig.property.maxUnavailablePercentage">maxUnavailablePercentage</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/eks_node_group#max_unavailable_percentage EksNodeGroup#max_unavailable_percentage}. |

---

##### `maxUnavailable`<sup>Optional</sup> <a name="maxUnavailable" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupUpdateConfig.property.maxUnavailable"></a>

```typescript
public readonly maxUnavailable: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/eks_node_group#max_unavailable EksNodeGroup#max_unavailable}.

---

##### `maxUnavailablePercentage`<sup>Optional</sup> <a name="maxUnavailablePercentage" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupUpdateConfig.property.maxUnavailablePercentage"></a>

```typescript
public readonly maxUnavailablePercentage: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/3.76.1/docs/resources/eks_node_group#max_unavailable_percentage EksNodeGroup#max_unavailable_percentage}.

---

## Classes <a name="Classes" id="Classes"></a>

### EksNodeGroupLaunchTemplateOutputReference <a name="EksNodeGroupLaunchTemplateOutputReference" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupLaunchTemplateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupLaunchTemplateOutputReference.Initializer"></a>

```typescript
import { eksNodeGroup } from '@cdktf/aws-cdk'

new eksNodeGroup.EksNodeGroupLaunchTemplateOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupLaunchTemplateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupLaunchTemplateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupLaunchTemplateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupLaunchTemplateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupLaunchTemplateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupLaunchTemplateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupLaunchTemplateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupLaunchTemplateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupLaunchTemplateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupLaunchTemplateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupLaunchTemplateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupLaunchTemplateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupLaunchTemplateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupLaunchTemplateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupLaunchTemplateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupLaunchTemplateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupLaunchTemplateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupLaunchTemplateOutputReference.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupLaunchTemplateOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupLaunchTemplateOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupLaunchTemplateOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupLaunchTemplateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupLaunchTemplateOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupLaunchTemplateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupLaunchTemplateOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupLaunchTemplateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupLaunchTemplateOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupLaunchTemplateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupLaunchTemplateOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupLaunchTemplateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupLaunchTemplateOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupLaunchTemplateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupLaunchTemplateOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupLaunchTemplateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupLaunchTemplateOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupLaunchTemplateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupLaunchTemplateOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupLaunchTemplateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupLaunchTemplateOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupLaunchTemplateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupLaunchTemplateOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupLaunchTemplateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupLaunchTemplateOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetId` <a name="resetId" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupLaunchTemplateOutputReference.resetId"></a>

```typescript
public resetId(): void
```

##### `resetName` <a name="resetName" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupLaunchTemplateOutputReference.resetName"></a>

```typescript
public resetName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupLaunchTemplateOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupLaunchTemplateOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupLaunchTemplateOutputReference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupLaunchTemplateOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupLaunchTemplateOutputReference.property.versionInput">versionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupLaunchTemplateOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupLaunchTemplateOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupLaunchTemplateOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupLaunchTemplateOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupLaunchTemplate">EksNodeGroupLaunchTemplate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupLaunchTemplateOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupLaunchTemplateOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupLaunchTemplateOutputReference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupLaunchTemplateOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupLaunchTemplateOutputReference.property.versionInput"></a>

```typescript
public readonly versionInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupLaunchTemplateOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupLaunchTemplateOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupLaunchTemplateOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupLaunchTemplateOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: EksNodeGroupLaunchTemplate;
```

- *Type:* <a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupLaunchTemplate">EksNodeGroupLaunchTemplate</a>

---


### EksNodeGroupRemoteAccessOutputReference <a name="EksNodeGroupRemoteAccessOutputReference" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupRemoteAccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupRemoteAccessOutputReference.Initializer"></a>

```typescript
import { eksNodeGroup } from '@cdktf/aws-cdk'

new eksNodeGroup.EksNodeGroupRemoteAccessOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupRemoteAccessOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupRemoteAccessOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupRemoteAccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupRemoteAccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupRemoteAccessOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupRemoteAccessOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupRemoteAccessOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupRemoteAccessOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupRemoteAccessOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupRemoteAccessOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupRemoteAccessOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupRemoteAccessOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupRemoteAccessOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupRemoteAccessOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupRemoteAccessOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupRemoteAccessOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupRemoteAccessOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupRemoteAccessOutputReference.resetEc2SshKey">resetEc2SshKey</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupRemoteAccessOutputReference.resetSourceSecurityGroupIds">resetSourceSecurityGroupIds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupRemoteAccessOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupRemoteAccessOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupRemoteAccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupRemoteAccessOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupRemoteAccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupRemoteAccessOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupRemoteAccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupRemoteAccessOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupRemoteAccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupRemoteAccessOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupRemoteAccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupRemoteAccessOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupRemoteAccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupRemoteAccessOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupRemoteAccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupRemoteAccessOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupRemoteAccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupRemoteAccessOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupRemoteAccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupRemoteAccessOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupRemoteAccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupRemoteAccessOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupRemoteAccessOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupRemoteAccessOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEc2SshKey` <a name="resetEc2SshKey" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupRemoteAccessOutputReference.resetEc2SshKey"></a>

```typescript
public resetEc2SshKey(): void
```

##### `resetSourceSecurityGroupIds` <a name="resetSourceSecurityGroupIds" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupRemoteAccessOutputReference.resetSourceSecurityGroupIds"></a>

```typescript
public resetSourceSecurityGroupIds(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupRemoteAccessOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupRemoteAccessOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupRemoteAccessOutputReference.property.ec2SshKeyInput">ec2SshKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupRemoteAccessOutputReference.property.sourceSecurityGroupIdsInput">sourceSecurityGroupIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupRemoteAccessOutputReference.property.ec2SshKey">ec2SshKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupRemoteAccessOutputReference.property.sourceSecurityGroupIds">sourceSecurityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupRemoteAccessOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupRemoteAccess">EksNodeGroupRemoteAccess</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupRemoteAccessOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupRemoteAccessOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ec2SshKeyInput`<sup>Optional</sup> <a name="ec2SshKeyInput" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupRemoteAccessOutputReference.property.ec2SshKeyInput"></a>

```typescript
public readonly ec2SshKeyInput: string;
```

- *Type:* string

---

##### `sourceSecurityGroupIdsInput`<sup>Optional</sup> <a name="sourceSecurityGroupIdsInput" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupRemoteAccessOutputReference.property.sourceSecurityGroupIdsInput"></a>

```typescript
public readonly sourceSecurityGroupIdsInput: string[];
```

- *Type:* string[]

---

##### `ec2SshKey`<sup>Required</sup> <a name="ec2SshKey" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupRemoteAccessOutputReference.property.ec2SshKey"></a>

```typescript
public readonly ec2SshKey: string;
```

- *Type:* string

---

##### `sourceSecurityGroupIds`<sup>Required</sup> <a name="sourceSecurityGroupIds" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupRemoteAccessOutputReference.property.sourceSecurityGroupIds"></a>

```typescript
public readonly sourceSecurityGroupIds: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupRemoteAccessOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: EksNodeGroupRemoteAccess;
```

- *Type:* <a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupRemoteAccess">EksNodeGroupRemoteAccess</a>

---


### EksNodeGroupResourcesAutoscalingGroupsList <a name="EksNodeGroupResourcesAutoscalingGroupsList" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupResourcesAutoscalingGroupsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupResourcesAutoscalingGroupsList.Initializer"></a>

```typescript
import { eksNodeGroup } from '@cdktf/aws-cdk'

new eksNodeGroup.EksNodeGroupResourcesAutoscalingGroupsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupResourcesAutoscalingGroupsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupResourcesAutoscalingGroupsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupResourcesAutoscalingGroupsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupResourcesAutoscalingGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupResourcesAutoscalingGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupResourcesAutoscalingGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupResourcesAutoscalingGroupsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupResourcesAutoscalingGroupsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupResourcesAutoscalingGroupsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupResourcesAutoscalingGroupsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupResourcesAutoscalingGroupsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupResourcesAutoscalingGroupsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupResourcesAutoscalingGroupsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupResourcesAutoscalingGroupsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupResourcesAutoscalingGroupsList.get"></a>

```typescript
public get(index: number): EksNodeGroupResourcesAutoscalingGroupsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupResourcesAutoscalingGroupsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupResourcesAutoscalingGroupsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupResourcesAutoscalingGroupsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupResourcesAutoscalingGroupsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupResourcesAutoscalingGroupsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### EksNodeGroupResourcesAutoscalingGroupsOutputReference <a name="EksNodeGroupResourcesAutoscalingGroupsOutputReference" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupResourcesAutoscalingGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupResourcesAutoscalingGroupsOutputReference.Initializer"></a>

```typescript
import { eksNodeGroup } from '@cdktf/aws-cdk'

new eksNodeGroup.EksNodeGroupResourcesAutoscalingGroupsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupResourcesAutoscalingGroupsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupResourcesAutoscalingGroupsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupResourcesAutoscalingGroupsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupResourcesAutoscalingGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupResourcesAutoscalingGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupResourcesAutoscalingGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupResourcesAutoscalingGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupResourcesAutoscalingGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupResourcesAutoscalingGroupsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupResourcesAutoscalingGroupsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupResourcesAutoscalingGroupsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupResourcesAutoscalingGroupsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupResourcesAutoscalingGroupsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupResourcesAutoscalingGroupsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupResourcesAutoscalingGroupsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupResourcesAutoscalingGroupsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupResourcesAutoscalingGroupsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupResourcesAutoscalingGroupsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupResourcesAutoscalingGroupsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupResourcesAutoscalingGroupsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupResourcesAutoscalingGroupsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupResourcesAutoscalingGroupsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupResourcesAutoscalingGroupsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupResourcesAutoscalingGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupResourcesAutoscalingGroupsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupResourcesAutoscalingGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupResourcesAutoscalingGroupsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupResourcesAutoscalingGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupResourcesAutoscalingGroupsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupResourcesAutoscalingGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupResourcesAutoscalingGroupsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupResourcesAutoscalingGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupResourcesAutoscalingGroupsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupResourcesAutoscalingGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupResourcesAutoscalingGroupsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupResourcesAutoscalingGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupResourcesAutoscalingGroupsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupResourcesAutoscalingGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupResourcesAutoscalingGroupsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupResourcesAutoscalingGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupResourcesAutoscalingGroupsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupResourcesAutoscalingGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupResourcesAutoscalingGroupsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupResourcesAutoscalingGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupResourcesAutoscalingGroupsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupResourcesAutoscalingGroupsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupResourcesAutoscalingGroupsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupResourcesAutoscalingGroupsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupResourcesAutoscalingGroupsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupResourcesAutoscalingGroups">EksNodeGroupResourcesAutoscalingGroups</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupResourcesAutoscalingGroupsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupResourcesAutoscalingGroupsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupResourcesAutoscalingGroupsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupResourcesAutoscalingGroupsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: EksNodeGroupResourcesAutoscalingGroups;
```

- *Type:* <a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupResourcesAutoscalingGroups">EksNodeGroupResourcesAutoscalingGroups</a>

---


### EksNodeGroupResourcesList <a name="EksNodeGroupResourcesList" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupResourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupResourcesList.Initializer"></a>

```typescript
import { eksNodeGroup } from '@cdktf/aws-cdk'

new eksNodeGroup.EksNodeGroupResourcesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupResourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupResourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupResourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupResourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupResourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupResourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupResourcesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupResourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupResourcesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupResourcesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupResourcesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupResourcesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupResourcesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupResourcesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupResourcesList.get"></a>

```typescript
public get(index: number): EksNodeGroupResourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupResourcesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupResourcesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupResourcesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupResourcesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupResourcesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### EksNodeGroupResourcesOutputReference <a name="EksNodeGroupResourcesOutputReference" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupResourcesOutputReference.Initializer"></a>

```typescript
import { eksNodeGroup } from '@cdktf/aws-cdk'

new eksNodeGroup.EksNodeGroupResourcesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupResourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupResourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupResourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupResourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupResourcesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupResourcesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupResourcesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupResourcesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupResourcesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupResourcesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupResourcesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupResourcesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupResourcesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupResourcesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupResourcesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupResourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupResourcesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupResourcesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupResourcesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupResourcesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupResourcesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupResourcesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupResourcesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupResourcesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupResourcesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupResourcesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupResourcesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupResourcesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupResourcesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupResourcesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupResourcesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupResourcesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupResourcesOutputReference.property.autoscalingGroups">autoscalingGroups</a></code> | <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupResourcesAutoscalingGroupsList">EksNodeGroupResourcesAutoscalingGroupsList</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupResourcesOutputReference.property.remoteAccessSecurityGroupId">remoteAccessSecurityGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupResourcesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupResources">EksNodeGroupResources</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupResourcesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupResourcesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `autoscalingGroups`<sup>Required</sup> <a name="autoscalingGroups" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupResourcesOutputReference.property.autoscalingGroups"></a>

```typescript
public readonly autoscalingGroups: EksNodeGroupResourcesAutoscalingGroupsList;
```

- *Type:* <a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupResourcesAutoscalingGroupsList">EksNodeGroupResourcesAutoscalingGroupsList</a>

---

##### `remoteAccessSecurityGroupId`<sup>Required</sup> <a name="remoteAccessSecurityGroupId" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupResourcesOutputReference.property.remoteAccessSecurityGroupId"></a>

```typescript
public readonly remoteAccessSecurityGroupId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupResourcesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: EksNodeGroupResources;
```

- *Type:* <a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupResources">EksNodeGroupResources</a>

---


### EksNodeGroupScalingConfigOutputReference <a name="EksNodeGroupScalingConfigOutputReference" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupScalingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupScalingConfigOutputReference.Initializer"></a>

```typescript
import { eksNodeGroup } from '@cdktf/aws-cdk'

new eksNodeGroup.EksNodeGroupScalingConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupScalingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupScalingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupScalingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupScalingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupScalingConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupScalingConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupScalingConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupScalingConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupScalingConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupScalingConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupScalingConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupScalingConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupScalingConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupScalingConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupScalingConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupScalingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupScalingConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupScalingConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupScalingConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupScalingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupScalingConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupScalingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupScalingConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupScalingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupScalingConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupScalingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupScalingConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupScalingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupScalingConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupScalingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupScalingConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupScalingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupScalingConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupScalingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupScalingConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupScalingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupScalingConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupScalingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupScalingConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupScalingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupScalingConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupScalingConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupScalingConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupScalingConfigOutputReference.property.desiredSizeInput">desiredSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupScalingConfigOutputReference.property.maxSizeInput">maxSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupScalingConfigOutputReference.property.minSizeInput">minSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupScalingConfigOutputReference.property.desiredSize">desiredSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupScalingConfigOutputReference.property.maxSize">maxSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupScalingConfigOutputReference.property.minSize">minSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupScalingConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupScalingConfig">EksNodeGroupScalingConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupScalingConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupScalingConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `desiredSizeInput`<sup>Optional</sup> <a name="desiredSizeInput" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupScalingConfigOutputReference.property.desiredSizeInput"></a>

```typescript
public readonly desiredSizeInput: number;
```

- *Type:* number

---

##### `maxSizeInput`<sup>Optional</sup> <a name="maxSizeInput" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupScalingConfigOutputReference.property.maxSizeInput"></a>

```typescript
public readonly maxSizeInput: number;
```

- *Type:* number

---

##### `minSizeInput`<sup>Optional</sup> <a name="minSizeInput" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupScalingConfigOutputReference.property.minSizeInput"></a>

```typescript
public readonly minSizeInput: number;
```

- *Type:* number

---

##### `desiredSize`<sup>Required</sup> <a name="desiredSize" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupScalingConfigOutputReference.property.desiredSize"></a>

```typescript
public readonly desiredSize: number;
```

- *Type:* number

---

##### `maxSize`<sup>Required</sup> <a name="maxSize" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupScalingConfigOutputReference.property.maxSize"></a>

```typescript
public readonly maxSize: number;
```

- *Type:* number

---

##### `minSize`<sup>Required</sup> <a name="minSize" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupScalingConfigOutputReference.property.minSize"></a>

```typescript
public readonly minSize: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupScalingConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: EksNodeGroupScalingConfig;
```

- *Type:* <a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupScalingConfig">EksNodeGroupScalingConfig</a>

---


### EksNodeGroupTaintList <a name="EksNodeGroupTaintList" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupTaintList"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupTaintList.Initializer"></a>

```typescript
import { eksNodeGroup } from '@cdktf/aws-cdk'

new eksNodeGroup.EksNodeGroupTaintList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupTaintList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupTaintList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupTaintList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupTaintList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupTaintList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupTaintList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupTaintList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupTaintList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupTaintList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupTaintList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupTaintList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupTaintList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupTaintList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupTaintList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupTaintList.get"></a>

```typescript
public get(index: number): EksNodeGroupTaintOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupTaintList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupTaintList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupTaintList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupTaintList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupTaint">EksNodeGroupTaint</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupTaintList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupTaintList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupTaintList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EksNodeGroupTaint[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupTaint">EksNodeGroupTaint</a>[]

---


### EksNodeGroupTaintOutputReference <a name="EksNodeGroupTaintOutputReference" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupTaintOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupTaintOutputReference.Initializer"></a>

```typescript
import { eksNodeGroup } from '@cdktf/aws-cdk'

new eksNodeGroup.EksNodeGroupTaintOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupTaintOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupTaintOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupTaintOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupTaintOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupTaintOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupTaintOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupTaintOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupTaintOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupTaintOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupTaintOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupTaintOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupTaintOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupTaintOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupTaintOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupTaintOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupTaintOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupTaintOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupTaintOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupTaintOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupTaintOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupTaintOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupTaintOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupTaintOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupTaintOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupTaintOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupTaintOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupTaintOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupTaintOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupTaintOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupTaintOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupTaintOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupTaintOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupTaintOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupTaintOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupTaintOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupTaintOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupTaintOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupTaintOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupTaintOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupTaintOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupTaintOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupTaintOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupTaintOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupTaintOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupTaintOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupTaintOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetValue` <a name="resetValue" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupTaintOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupTaintOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupTaintOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupTaintOutputReference.property.effectInput">effectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupTaintOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupTaintOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupTaintOutputReference.property.effect">effect</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupTaintOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupTaintOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupTaintOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupTaint">EksNodeGroupTaint</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupTaintOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupTaintOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `effectInput`<sup>Optional</sup> <a name="effectInput" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupTaintOutputReference.property.effectInput"></a>

```typescript
public readonly effectInput: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupTaintOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupTaintOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `effect`<sup>Required</sup> <a name="effect" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupTaintOutputReference.property.effect"></a>

```typescript
public readonly effect: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupTaintOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupTaintOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupTaintOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EksNodeGroupTaint;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupTaint">EksNodeGroupTaint</a>

---


### EksNodeGroupTimeoutsOutputReference <a name="EksNodeGroupTimeoutsOutputReference" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupTimeoutsOutputReference.Initializer"></a>

```typescript
import { eksNodeGroup } from '@cdktf/aws-cdk'

new eksNodeGroup.EksNodeGroupTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupTimeouts">EksNodeGroupTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EksNodeGroupTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupTimeouts">EksNodeGroupTimeouts</a>

---


### EksNodeGroupUpdateConfigOutputReference <a name="EksNodeGroupUpdateConfigOutputReference" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupUpdateConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupUpdateConfigOutputReference.Initializer"></a>

```typescript
import { eksNodeGroup } from '@cdktf/aws-cdk'

new eksNodeGroup.EksNodeGroupUpdateConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupUpdateConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupUpdateConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupUpdateConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupUpdateConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupUpdateConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupUpdateConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupUpdateConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupUpdateConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupUpdateConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupUpdateConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupUpdateConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupUpdateConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupUpdateConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupUpdateConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupUpdateConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupUpdateConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupUpdateConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupUpdateConfigOutputReference.resetMaxUnavailable">resetMaxUnavailable</a></code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupUpdateConfigOutputReference.resetMaxUnavailablePercentage">resetMaxUnavailablePercentage</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupUpdateConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupUpdateConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupUpdateConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupUpdateConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupUpdateConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupUpdateConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupUpdateConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupUpdateConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupUpdateConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupUpdateConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupUpdateConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupUpdateConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupUpdateConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupUpdateConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupUpdateConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupUpdateConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupUpdateConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupUpdateConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupUpdateConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupUpdateConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupUpdateConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupUpdateConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupUpdateConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupUpdateConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaxUnavailable` <a name="resetMaxUnavailable" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupUpdateConfigOutputReference.resetMaxUnavailable"></a>

```typescript
public resetMaxUnavailable(): void
```

##### `resetMaxUnavailablePercentage` <a name="resetMaxUnavailablePercentage" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupUpdateConfigOutputReference.resetMaxUnavailablePercentage"></a>

```typescript
public resetMaxUnavailablePercentage(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupUpdateConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupUpdateConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupUpdateConfigOutputReference.property.maxUnavailableInput">maxUnavailableInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupUpdateConfigOutputReference.property.maxUnavailablePercentageInput">maxUnavailablePercentageInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupUpdateConfigOutputReference.property.maxUnavailable">maxUnavailable</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupUpdateConfigOutputReference.property.maxUnavailablePercentage">maxUnavailablePercentage</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupUpdateConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupUpdateConfig">EksNodeGroupUpdateConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupUpdateConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupUpdateConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maxUnavailableInput`<sup>Optional</sup> <a name="maxUnavailableInput" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupUpdateConfigOutputReference.property.maxUnavailableInput"></a>

```typescript
public readonly maxUnavailableInput: number;
```

- *Type:* number

---

##### `maxUnavailablePercentageInput`<sup>Optional</sup> <a name="maxUnavailablePercentageInput" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupUpdateConfigOutputReference.property.maxUnavailablePercentageInput"></a>

```typescript
public readonly maxUnavailablePercentageInput: number;
```

- *Type:* number

---

##### `maxUnavailable`<sup>Required</sup> <a name="maxUnavailable" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupUpdateConfigOutputReference.property.maxUnavailable"></a>

```typescript
public readonly maxUnavailable: number;
```

- *Type:* number

---

##### `maxUnavailablePercentage`<sup>Required</sup> <a name="maxUnavailablePercentage" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupUpdateConfigOutputReference.property.maxUnavailablePercentage"></a>

```typescript
public readonly maxUnavailablePercentage: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupUpdateConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: EksNodeGroupUpdateConfig;
```

- *Type:* <a href="#@cdktf/aws-cdk.eksNodeGroup.EksNodeGroupUpdateConfig">EksNodeGroupUpdateConfig</a>

---



